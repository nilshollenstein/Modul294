let addresses = [];
document.addEventListener("DOMContentLoaded", () => {
  const form = document.forms.Adressform;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const address = new FormData(form);
    addresses.push(address);
    renderList(addresses);
  });
});

function renderList(addresses) {
  const list = document.createElement("list");
  const div = document.createElement("div");
  const nameh3 = document.createElement("h3");
  const pAdress = document.createElement("p");
  const pKnownFrom = document.createElement("p");
  const pAge = document.createElement("p");
  const a = document.createElement("a");
  div.classList.add("person");
  list.replaceChildren;

  for (const address of addresses) {
    let firstname = address.get("firstname");
    let lastname = address.get("lastname");
    let duSie;
    if (address.get("duSie")) {
      duSie = "Sie";
    } else {
      duSie = "Du";
    }
    nameh3.innerText = `${firstname.trim()} ${lastname.trim()} (${duSie})`;

    let street = address.get("street");
    let plz = address.get("plz");
    let location = address.get("location");
    pAdress.innerText = `${street.trim()}\n${plz.trim()} ${location.trim()}`;

    let mail_address = address.get("email");
    a.href = `mailto:${mail_address.trim()}`;
    a.innerText = mail_address.trim();

    pAge.innerText = `${address.get("age")} Jahre alt`;

    let knwonFrom = address.get("whereKnow");

    pKnownFrom.innerText = `Notitz: ${knwonFrom}`;

    div.append(nameh3);
    div.append(pAdress);
    div.append(a);
    div.append(pAge);
    div.append(pKnownFrom);

    list.appendChild(div);
    document.body.appendChild(list);
    document.body.appendChild(document.createElement("br"));
  }
}
