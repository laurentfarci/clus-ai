// clus.ai — form handler
// Wires any form with a Formspree (or compatible) endpoint to submit
// asynchronously, swap to a success state, and surface inline errors.
//
// To wire a form:
//   1. Set form.action to your endpoint URL.
//   2. Add an empty <div class="form-error"></div> inside the form.
//   3. Add a sibling success element with the data-success attribute
//      pointing at the form's id, e.g.
//        <div class="form-success" data-success="brief-form" hidden>...</div>
//
// The script handles the rest.

(function () {
  "use strict";

  function showError(form, message) {
    const errorEl = form.querySelector(".form-error");
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = "block";
    }
  }

  function clearError(form) {
    const errorEl = form.querySelector(".form-error");
    if (errorEl) {
      errorEl.textContent = "";
      errorEl.style.display = "none";
    }
  }

  function findSuccessEl(form) {
    return document.querySelector('[data-success="' + form.id + '"]');
  }

  function wireForm(form) {
    if (!form || form.dataset.wired === "true") return;
    form.dataset.wired = "true";

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      clearError(form);
      form.classList.add("form-submitting");

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: form.method || "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          form.classList.remove("form-submitting");
          const successEl = findSuccessEl(form);
          form.style.display = "none";
          if (successEl) {
            successEl.hidden = false;
            successEl.style.display = "";
            successEl.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        } else {
          const data = await response.json().catch(() => ({}));
          const message =
            (data.errors && data.errors[0] && data.errors[0].message) ||
            "Something went wrong. Try again or email hello@clus.ai.";
          showError(form, message);
          form.classList.remove("form-submitting");
        }
      } catch (err) {
        showError(form, "Network error. Try again or email hello@clus.ai.");
        form.classList.remove("form-submitting");
      }
    });
  }

  function init() {
    document.querySelectorAll("form[data-clus-form]").forEach(wireForm);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
