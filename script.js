let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
}

document.querySelector(".next").addEventListener("click", function () {
  slideIndex++;
  showSlides();
});

document.querySelector(".prev").addEventListener("click", function () {
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = document.querySelectorAll(".slide").length;
  }
  showSlides();
});

showSlides();
setInterval(nextSlide, 3000);
