/** @format */

const mainImage = document.querySelector(".main_image img");
const subImage = document.querySelectorAll(".sub_images img");

subImage.forEach((subImage) =>
  subImage.addEventListener("click", function (e) {
    const imgSrc = e.target.getAttribute("src");

    mainImage.setAttribute("src", `${imgSrc}`);
  })
);

//====================================================================
const banner = document.querySelector(".hero_banner");
const nextBtn = document.querySelector(".hero_banner .right");
const prevBtn = document.querySelector(".hero_banner .left");
const hero_heading = document.querySelector(".hero_banner h1");
let index = 0;
let bannerImage = [
  {
    urlImage: "blog-1.jpg",
    content: "DOM Practical 2 Slider #2",
  },
  {
    urlImage: "blog-2.jpg",
    content: "DOM Practical 2 Slider #3",
  },
  {
    urlImage: "blog-3.jpg",
    content: "DOM Practical 2 Slider #4",
  },
];

let nextSlider = () => {
  index++;
  if (index > bannerImage.length - 1) {
    index = 0;
  }
  banner.style.backgroundImage = `url(assets/${bannerImage[index].urlImage})`;
  hero_heading.textContent = `${bannerImage[index].content}`;
};

let prevSlider = () => {
  index--;
  if (index < 0) {
    index = bannerImage.length - 1;
  }
  banner.style.backgroundImage = `url(assets/${bannerImage[index].urlImage})`;
  hero_heading.textContent = `${bannerImage[index].content}`;
};

nextBtn.addEventListener("click", nextSlider);
prevBtn.addEventListener("click", prevSlider);
//====================================================================
const hero = document.querySelector(".hero");
const containerImages = document.querySelectorAll(".container_images img");

for (let i = 0; i < containerImages.length; i++) {
  containerImages[i].addEventListener("click", function (e) {
    const urlImg = e.target.getAttribute("src");
    hero.style.backgroundImage = `url(${urlImg})`;
  });
}
//====================================================================
const menu_bar = document.querySelector(".menu_bar");
const menu_list = document.querySelector(".list");

menu_bar.addEventListener("click", function () {
  menu_list.classList.toggle("toggle_menu");
});

// ===========================================

const alertBtn = document.querySelector(".button");
const overlay = document.querySelector(".overlaying");
const closeBtn = document.querySelector(".close-alert");
const alertCont = document.querySelector(".alert");

const showAlert = function () {
  alertCont.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeAlert = function () {
  alertCont.classList.add("hidden");
  overlay.classList.add("hidden");
};

alertBtn.addEventListener("click", showAlert);
closeBtn.addEventListener("click", closeAlert);
overlay.addEventListener("click", closeAlert);
