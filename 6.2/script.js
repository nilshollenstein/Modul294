document.addEventListener("DOMContentLoaded", () => {
  const form = document.forms.passwordForm;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const passwordCElement = document.getElementById("passwordC");

    const formData = new FormData(form);
    let password = formData.get("password");
    let passwordC = formData.get("passwordC");

    if (password !== passwordC) {
      passwordCElement.setCustomValidity(
        "Die Passwörter stimmen nicht überein."
      );
    } else {
      passwordCElement.setCustomValidity("");
    }
  });
});
