/** @format */

const swiper_banner = new Swiper(".swiper_banner", {
  speed: 400,
  autoplay: {
    delay: 3000,
  },
  loop: true,
});

const swiper_review = new Swiper(".swiper_review", {
  speed: 400,
  spaceBetween: 50,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiper_product = new Swiper(".swiper_product", {
  speed: 400,
  spaceBetween: 30,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});
// ============================================================================

async function womenProducts(endPoint) {
  let res = await fetch(`http://localhost:3000/product?for=${endPoint}`);
  let finalRes = await res.json();
  displaywomenProducts(finalRes);
}
womenProducts("women");

function displaywomenProducts(data) {
  let temp = ``;
  data.forEach(
    (data) =>
      (temp += `
      <div class="swiper-slide">
                <div class="product_container">
                  <img
                    src="${data.image}"
                    alt=""
                  />
                  <div class="product_buttons">
                    <span class="wishlist"
                      ><i class="fa-regular fa-heart"></i
                    ></span>
                    <span class="addcart"
                      ><i class="fa-solid fa-cart-shopping"></i
                    ></span>
                  </div>
                  <button class="btn btn-dark view">View Product</button>
                </div>
              </div>
  `)
  );
  document.querySelector(".forher .swiper-wrapper").innerHTML = temp;
}
// =================================================================================

async function manProducts(endPoint) {
  let res = await fetch(`http://localhost:3000/product?for=${endPoint}`);
  let finalRes = await res.json();
  displaymanProducts(finalRes);
}
manProducts("man");

function displaymanProducts(data) {
  let temp = ``;
  data.forEach(
    (data) =>
      (temp += `
      <div class="swiper-slide">
                <div class="product_container">
                  <img
                    src="${data.image}"
                    alt=""
                  />
                  <div class="product_buttons">
                    <span class="wishlist"
                      ><i class="fa-regular fa-heart"></i
                    ></span>
                    <span class="addcart"
                      ><i class="fa-solid fa-cart-shopping"></i
                    ></span>
                  </div>
                  <button class="btn btn-dark view">View Product</button>
                </div>
              </div>
  `)
  );
  document.querySelector(".forhim .swiper-wrapper").innerHTML = temp;
}
// ======================================================================================


