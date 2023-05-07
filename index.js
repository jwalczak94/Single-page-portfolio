const btnNext = document.querySelector("#right-arrow"),
  btnPrev = document.querySelector("#left-arrow"),
  slides = document.querySelectorAll(".slide"),
  carousel = document.querySelector(".section-my-work__carousel"),
  firstImg = document.querySelector(".slide--1"),
  arrowIcons = document.querySelectorAll(".arrow");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "grid";
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "grid";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 30;
    carousel.scrollLeft += icon.id == "left-arrow" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

// let curSlide = 0;
// const maxSlide = slides.length;
// const goToSlide = function (slide) {
//   slides.forEach((s, i) => (s.style.transform = `translateX(calc(${100 * (i - curSlide)}%)`));
// };

// goToSlide(0);

// const nextSlide = function () {
//   if (curSlide === maxSlide - 3) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }

//   goToSlide(curSlide);
// };

// const prevSlide = function () {
//   if (curSlide === -2) {
//     curSlide = maxSlide - 5;
//   } else {
//     curSlide--;
//   }

//   goToSlide(curSlide);
// };

// btnNext.addEventListener("click", nextSlide);
// btnPrev.addEventListener("click", prevSlide);
