let date = new Date();
function getName() {
  let input = document.getElementById("inputFieldName").value;

  let hour = date.getHours();

  let timeString = "";
  if (hour >= 5 && hour <= 10) {
    timeString = "Guten Morgen";
  } else if (hour > 10 && hour <= 16) {
    timeString = "Guten Tag";
  } else if (hour > 16 && hour <= 22) {
    timeString = "Guten Abend";
  } else {
    timeString = "Gute Nacht";
  }
  let baseString = `${timeString} ${input}`;
  alert(baseString);
}
