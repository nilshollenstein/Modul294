document.addEventListener("DOMContentLoaded", () => {
  let form = document.forms.AdressAutoComplete;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  document.getElementById("zipcode").addEventListener("blur", () => {
    autoFillLocation(form);
  });
});
async function autoFillLocation(form) {
  let zip = form.elements.zipcode.value;
  let url = "http://localhost:5500/7.1/places.json";

  const response = await fetch(url);
  const data = await response.json();

  const locationData = data.find((element) => element.zipcode == zip);
  let locationInput = form.elements.location;
  locationInput.value = locationData.place;
}
