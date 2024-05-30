document.addEventListener("DOMContentLoaded", () => {
  let form = document.forms.AdressAutoComplete;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  document.getElementById("zipcode").addEventListener("change", () => {
    autoFillLocation(form);
  });
});
async function autoFillLocation(form) {
  let zip = form.elements.zipcode.value;
  let url = ".//places.json";
  try {
    const response = await fetch(url);
    const data = await response.json();

    const locationData = data.find((element) => element.zipcode == zip);
    let locationInput = form.elements.location;
    if (locationData.place) {
      locationInput.value = locationData.place;
    }
  } catch (error) {
    console.log(error);
  }
}
