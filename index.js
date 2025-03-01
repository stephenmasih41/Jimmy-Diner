import { menuArray } from "./data.js";
const container = document.getElementById("menu");
let cart = [];
const completeOrder = document.getElementById("complete-order");
const payBtn = document.getElementById("pay-btn");
const orderMessage = document.getElementById("order-message");
// Menu Rendering

function renderMenu() {
  container.innerHTML = menuArray
    .map(
      (arr) => `
      <div class="menu-item">
        <i id="emoji">${arr.emoji}</i>
      </div>
      <div id="main">
        <div>
          <h3>${arr.name}</h3>
          <p id="ingredients">${arr.ingredients}</p>
          <p id="price">$${arr.price}</p>
        </div>
        <button class="add" data-id="${arr.id}">+</button>
      </div>   
    `
    )
    .join("");
  // Add Event Listener to all buttons
  document.querySelectorAll(".add").forEach((button) => {
    button.addEventListener("click", (e) => {
      addToCart(e.target.dataset.id);
      document.getElementById("modal").style.display = "block";
    });
  });
}

function addToCart(id) {
  let item = menuArray.find((item) => item.id === parseInt(id));
  if (item) {
    cart.push(item);
    console.log(cart);
    renderCart();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartDiv.innerHTML += `
      <div id="cart-item">
        <h3>${item.name}</h3>
        <button id="remove">Remove</button>
        <p id="price">$${item.price}</p>
      </div>
    `;
  });

  document.getElementById("total").innerHTML = `${total}`;
  document.querySelectorAll("#remove").forEach((button, index) => {
    button.addEventListener("click", () => {
      removeFromCart(index);
    });
  });

  const modal = document.getElementById("modal");
  if (total === 0) {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}

// Money Modal

completeOrder.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "block";
});

payBtn.addEventListener("click", () => {
  const customerName = document.getElementById("customer-name").value;
  orderMessage.innerHTML = `Thank you ${customerName} for your order!`;
  document.querySelector(".modal").style.display = "none";
  document.querySelector("#modal").style.display = "none";
  cart = [];
  renderCart();
});

renderMenu();
