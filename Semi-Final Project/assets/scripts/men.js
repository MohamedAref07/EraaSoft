/** @format */

let menProducts = [];
async function manProducts(endPoint) {
  let res = await fetch(`http://localhost:3000/product?for=${endPoint}`);
  let finalRes = await res.json();
  console.log(finalRes);
  displaymanProducts(finalRes);
  menProducts.push(...finalRes);
}

function displaymanProducts(data) {
  let temp = ``;
  data.forEach(
    (data) =>
      (temp += `
        <div class="product_card">
        <div class="product_image">
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
      <div class="product_details">
        <p>${data.description}</p>
        <span class="price">${data.price}</span>
      </div>
    </div>
    `)
  );
  document.querySelector(".products").innerHTML = temp;
}

function makeProductWorks() {
  let viewBtns = document.querySelectorAll("button.view");
  viewBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let productId = btn.getAttribute("id").replace("product_", "");
      console.log(productId);
      let productDetails = menProducts.find((p) => p.id == productId);
      saveDataToLocalStorage("productDetails", productDetails);
      location.assign("product.html");
    });
  });
}
async function loadAllProducts() {
  await manProducts("man");
  makeProductWorks();
}

loadAllProducts();
function saveDataToLocalStorage(type, data) {
  localStorage.setItem(`${type}`, `${JSON.stringify(data)}`);
}
