document.addEventListener("DOMContentLoaded");
document.querySelector("#input").addEventListener("input", () => {
  document.getElementById("h1.1").innerText =
    document.querySelector("#input").value;
});
document.querySelector("#button").addEventListener("click", () => {
  let ul = document.getElementById("list");
  let li = document.createElement("li");

  li.innerText = document.querySelector("#input").value;
  ul.append(li);
});
document.querySelector("#input").addEventListener("change", () => {
  document.getElementById("h1.2").innerText =
    document.querySelector("#input").value;
});
