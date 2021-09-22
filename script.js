let slideIndex = 1;

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

const showSlides = (n) => {
  const slides = document.querySelectorAll(".slides");
  const dots = document.querySelectorAll(".dot");

  // console.log(`slideIndex is ${n}`);

  if (n > slides.length) {
    // console.log(`${n} is bigger than 1`);
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};

showSlides(slideIndex);

// setInterval(() => {
//   plusSlides(1);
// }, 10000);

const square = document.querySelector(".square");
const navbar = document.querySelector(".navbar");

square.addEventListener("click", () => {
  if (!square.classList.contains("closed")) {
    square.style.transform = "rotate(0deg)";
    square.classList.add("closed");
    navbar.classList.remove("open-nav");
    console.log("closed");
  } else {
    square.style.transform = "rotate(180deg)";
    square.classList.remove("closed");
    navbar.classList.add("open-nav");
    console.log("opened");
  }
});
