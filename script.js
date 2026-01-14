let cart = [];
const cartCount = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

document.getElementById("cart-btn").onclick = () => {
  cartModal.style.display = "block";
  renderCart();
};

function closeCart() {
  cartModal.style.display = "none";
}

function addToCart(name, price) {
  cart.push({name, price});
  cartCount.innerText = cart.length;
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} — ${item.price}€`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.innerText = "Total: " + total + "€";
}
