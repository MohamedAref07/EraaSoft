/** @format */
let wishList;
const wishListCount = document.querySelector(".wishList span");

function getDataFromLocalStrorage() {
  if (localStorage.getItem("wishList")) {
    wishList = JSON.parse(localStorage.getItem("wishList"));
    console.log(wishList);
    wishListCount.textContent = wishList.length;
    displayWishList(wishList);
  }
}
getDataFromLocalStrorage();
function saveDataToLocalStorage(type, data) {
  localStorage.setItem(`${type}`, `${data}`);
}

function displayWishList(data) {
  let temp = "";
  data.forEach(
    (data, index) =>
      (temp += `<div class="product" id="${data.id}">
                          <div class="product-img">
                              <div class="product-icons">
                                  <div class="icons">
                                      <div class="icon active" onclick="removeWishList(this)">
                                          <i class="fas fa-heart"></i>
                                      </div>
                                      <button class="icon" ${
                                        data.stock == 0 ? "disabled" : ""
                                      }>
                                          <i class="fas fa-cart-shopping"></i>
                                      </button>
                                      <div class="icon" onclick="showSingleProduct(${
                                        data.id
                                      })">
                                          <i class="fas fa-eye" ></i>
                                      </div>
                                  </div>
                              </div>
                              <img src="${data.productImage}"
                                  alt="">
                          </div>
                          <div class="product-details">
                          <span class="${
                            data.stock <= 10 ? "danger" : ""
                          }">left Stock only :${data.stock}</span>
                              <h3>${data.productName}</h3>
                              <p>${data.description
                                .split(" ")
                                .splice(0, 10)
                                .join(" ")}</p>
                              <div class="price">
                                  <span class="danger">${
                                    data.onSale ? data.newPrice : data.oldPrice
                                  }$</span>
                                  ${
                                    data.onSale
                                      ? `<del>${data.oldPrice}$</del>`
                                      : ""
                                  }
                              </div>
                          </div>
                      </div>`)
  );
  document.getElementById("showData").innerHTML = temp;

  if (temp.length == 0) {
    document.getElementById("showData").innerHTML = `<h1?>Cart is Empty</h1?`;
  }
}
function removeWishList(e) {
  let newData = JSON.parse(localStorage.getItem("wishList")) || [];
  if (e.classList.contains("active")) {
    let removeId = parseInt(e.closest(".product").getAttribute("id"));
    console.log(removeId);
    e.closest(".product").remove();
    let data = newData.filter((data) => data.id !== removeId);
    saveDataToLocalStorage("wishList", JSON.stringify([...data]));
    wishListCount.textContent = newData.length;
    newData.push(...data);
  }
}
