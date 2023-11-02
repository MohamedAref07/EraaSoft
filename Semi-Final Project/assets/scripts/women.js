/** @format */
"use strict";

async function womenProducts(endPoint) {
  let res = await fetch(`http://localhost:3000/product?for=${endPoint}`);
  let finalRes = await res.json();
  console.log(finalRes);
  displaywomenProducts(finalRes);
}
womenProducts("women");

function displaywomenProducts(data) {
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
      <button class="btn btn-dark view">View Product</button>
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
