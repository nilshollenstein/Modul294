// Warten bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("buttonNext").addEventListener("click", () => {
    let allImages = document.querySelector("#slideShowImages").children;
    let currentImage = document.querySelector(".shownImage");
    let index;
    for (let i = 0; i < allImages.length; i++) {
      if (allImages[i] === currentImage) {
        index = i;
        break;
      }
    }
    if (index >= allImages.length - 1) {
      index = -1;
    }
    let newPicture = allImages[index + 1];
    newPicture.classList.toggle("shownImage");
    newPicture.classList.toggle("hiddenImage");
    currentImage.classList.toggle("shownImage");
    currentImage.classList.toggle("hiddenImage");
  });
  document.getElementById("buttonBack").addEventListener("click", () => {
    let allImages = document.querySelector("#slideShowImages").children;
    let currentImage = document.querySelector(".shownImage");
    let index;
    for (let i = 0; i < allImages.length; i++) {
      if (allImages[i] === currentImage) {
        index = i;
        break;
      }
    }
    if (index <= 0) {
      index = allImages.length;
    }
    let newPicture = allImages[index - 1];

    newPicture.classList.toggle("shownImage");
    newPicture.classList.toggle("hiddenImage");
    currentImage.classList.toggle("shownImage");
    currentImage.classList.toggle("hiddenImage");
  });
  let stars = document.querySelectorAll(".star");
  function starClick(event) {
    let clickedStarIndex;
    for (let i = 0; i < stars.length; i++) {
      if (stars[i] === event.target) {
        clickedStarIndex = i;
      }
    }
    document.get;
    stars.forEach(function (star, index) {
      if (index <= clickedStarIndex) {
        star.innerHTML = "&#9733;";
        star.style.color = "orange";
      } else {
        star.innerHTML = "&#9734;";
        star.style.color = "black";
      }
    });
  }

  stars.forEach((star) => {
    star.addEventListener("click", starClick);
  });
});
