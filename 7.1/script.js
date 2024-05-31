document.addEventListener("DOMContentLoaded", () => {
  let form = document.forms.weatherzip;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    getWeather(form);
  });
});
async function getWeather(form) {
  try {
    const zip = form.elements["zipcode"].value; // Stellt sicher, dass der Name des Elements korrekt ist
    const proxyUrl = "https://corsproxy.io/?"; // Der Proxy-URL, um CORS zu umgehen
    const url = await getWeatherURL(zip); // Holt die vollständige URL zur Wetterdaten-API

    const response = await fetch(proxyUrl + url); // Führt die Anfrage durch den Proxy durch
    const data = await response.json(); // Konvertiert die Antwort in JSON

    const todayTemperature = data.currentWeather?.temperature; // Optional Chaining für sichereren Zugriff
    document.querySelector("#showTemperature").innerHTML = todayTemperature
      ? todayTemperature.toString() + "°C"
      : "N/A"; // Setzt den Wert im HTML, falls verfügbar
  } catch (error) {
    console.error("Fehler beim Abrufen der Wetterdaten:", error);
  }
}
async function getWeatherURL(zip) {
  let url = `https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${zip}00`;
  return url;
}
