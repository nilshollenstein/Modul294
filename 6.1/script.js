document.addEventListener("DOMContentLoaded", () => {
  const form = document.forms.Adressform;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const div = document.createElement("div");
    const nameh3 = document.createElement("h3");
    const pAdress = document.createElement("p");
    const pKnownFrom = document.createElement("p");
    const a = document.createElement("a");
    div.classList.add("person");

    let firstname = formData.get("firstname");
    let lastname = formData.get("lastname");
    let duSie;
    if (formData.get("duSie")) {
      duSie = "Sie";
    } else {
      duSie = "Du";
    }
    nameh3.innerText = `${firstname.trim()} ${lastname.trim()} (${duSie})`;

    let street = formData.get("street");
    let plz = formData.get("plz");
    let location = formData.get("location");
    pAdress.innerText = `${street.trim()}\n${plz.trim()} ${location.trim()}`;

    let mail_address = formData.get("email");
    a.href = `mailto:${mail_address.trim()}`;
    a.innerText = mail_address.trim();

    let knwonFrom = formData.get("whereKnow");

    pKnownFrom.innerText = `Notitz: ${knwonFrom}`;

    div.appendChild(nameh3);
    div.appendChild(pAdress);
    div.appendChild(a);
    div.append(pKnownFrom);
    document.body.appendChild(div);
    document.body.appendChild(document.createElement("br"));
  });
});
