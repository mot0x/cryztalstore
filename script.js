let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const countEl = document.getElementById("cart-count");

  list.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} – ${item.price}€`;
    list.appendChild(li);
    total += item.price;
  });

  totalEl.textContent = total + "€";
  countEl.textContent = cart.length;
}
