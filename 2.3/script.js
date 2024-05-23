function selectRandomCountry() {
  let randomNumber =
    Math.floor(
      Math.random() * document.getElementById("destinations").childElementCount
    ) + 1;

  let element = document.getElementById("destinations").children[randomNumber];
  element.classList.add("selected");
  for (
    let i = 0;
    i < document.getElementById("destinations").childElementCount;
    i++
  ) {
    if (i != randomNumber) {
      document
        .getElementById("destinations")
        .children[i].classList.remove("selected");
    }
  }
  element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}

function selectRandomCountryWithAnimation() {
  let randomNumber =
    Math.floor(
      Math.random() * document.getElementById("destinations").childElementCount
    ) + 1;

  let animationRandomNumber =
    Math.floor(
      Math.random() * document.getElementById("destinations").childElementCount
    ) + 1;

  let element = document.getElementById("destinations").children[randomNumber];
  element.classList.add("selected");
  for (
    let i = 0;
    i < document.getElementById("destinations").childElementCount;
    i++
  ) {
    if (i != randomNumber) {
      document
        .getElementById("destinations")
        .children[i].classList.remove("selected");
    }
  }
  element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}
document
  .querySelector("#choose")
  .addEventListener("click", selectRandomCountry);
document
  .querySelector("#chooseAnimation")
  .addEventListener("click", selectRandomCountryWithAnimation);
