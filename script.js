let containers = document.querySelectorAll(".container");
containers = Array.from(containers);
let leftContainers = document.querySelectorAll(".left");
leftContainers = Array.from(leftContainers);
let rightContainers = document.querySelectorAll(".right");
rightContainers = Array.from(rightContainers);
const downBtn = document.getElementById("downBtn");
const upBtn = document.getElementById("upBtn");

const images = [
  "cloudy-foggy",
  "magical-spring",
  "nature-mountain",
  "palm-tree",
];

let pageIndex = 0;

const colors = ["#557585", "#778555", "#85557f", "#56928d"];

console.log(downBtn, upBtn);

leftContainers.forEach((container, index) => {
  container.style.backgroundColor = `${colors[index]}`;
});

rightContainers.forEach((container, index) => {
  container.style.backgroundImage = `url("./images/${images[index]}.jpg")`;
});

downBtn.addEventListener("click", () => {
  if (pageIndex < 3) {
    pageIndex++;
  } else {
    pageIndex = 0;
  }
  containers.forEach((container) => {
    container.classList.remove("active");
  });
  containers[pageIndex].classList.add("active");

  console.log(pageIndex);
});

upBtn.addEventListener("click", () => {
  if (pageIndex < 3) {
    pageIndex++;
  } else {
    pageIndex = 0;
  }
  containers.forEach((container) => {
    container.classList.remove("active");
  });
  containers[pageIndex].classList.add("active");
  console.log(pageIndex);
});
