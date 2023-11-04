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
let allProducts = [];
async function womenProducts(endPoint) {
  let res = await fetch(`http://localhost:3000/product?for=${endPoint}`);
  let finalRes = await res.json();
  allProducts.push(...finalRes);
  displaywomenProducts(finalRes);
}
// womenProducts("women");

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
                  <button id='product_${data.id}' class="btn btn-dark view">View Product</button>
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
  allProducts.push(...finalRes);
  displaymanProducts(finalRes);
}
// manProducts("man");

async function displaymanProducts(data) {
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
                  <button id=${data.id} class="btn btn-dark view">View Product</button>
                </div>
              </div>
  `)
  );
  document.querySelector(".forhim .swiper-wrapper").innerHTML = temp;
}
// ======================================================================================

function makeProductWorks() {
  let viewBtns = document.querySelectorAll("button.view");
  viewBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let productId = btn.getAttribute("id").replace("product_", "");
      console.log(productId);
      let productDetails = allProducts.find((p) => p.id == productId);
      saveDataToLocalStorage("productDetails", productDetails);
      location.assign("product.html");
    });
  });
}

function saveDataToLocalStorage(type, data) {
  localStorage.setItem(`${type}`, `${JSON.stringify(data)}`);
}

async function loadAllProducts() {
  await womenProducts("women");
  await manProducts("man");
  makeProductWorks();
}

loadAllProducts();
