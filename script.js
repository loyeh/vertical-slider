const upBtn = document.querySelector(".upBtn");
const downBtn = document.querySelector(".downBtn");
const rightSlides = document.querySelector(".right-slides");
const leftSlides = document.querySelector(".left-slides");

console.log(leftSlides, rightSlides, upBtn, downBtn);

upBtn.addEventListener("click", slideUp);
downBtn.addEventListener("click", slideDown);

let slideNum = 0;
const height = window.innerHeight;

leftSlides.style.top = `-${3 * 100}vh`;
console.log(height);
function slideUp() {
  slideNum++;
  if (slideNum > 3) {
    slideNum = 0;
  }
  console.log(slideNum);
  rightSlides.style.transform = `translateY(-${height * slideNum}px`;
  leftSlides.style.transform = `translateY(${height * slideNum}px`;
}

function slideDown() {
  slideNum--;
  if (slideNum < 0) {
    slideNum = 3;
  }
  console.log(slideNum);
  rightSlides.style.transform = `translateY(-${height * slideNum}px`;
  leftSlides.style.transform = `translateY(${height * slideNum}px`;
}
