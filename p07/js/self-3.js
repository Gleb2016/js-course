const products = [
  { id: 1, name: 'Клавиатура', price: 1250 },
  { id: 2, name: 'Мышь', price: 790 },
  { id: 3, name: 'Коврик', price: 430 },
];
const cart = new Map();

const list = document.getElementById('list');
for (const p of products) {
  const li = document.createElement('li');
  li.className = 'product';
  li.dataset.id = p.id;
  li.innerHTML = `${p.name} <span class="price">${p.price} ₽</span>
    <button class="minus" disabled>−</button> <b class="qty">0</b> <button class="plus">+</button>
    <button class="remove">Удалить</button>`;
  list.append(li);
}

function updateTotals() {
  let count = 0;
  for (const q of cart.values()) count += q;
  document.getElementById('count').textContent = count;
  let total = 0;
  for (const [pid, q] of cart) total += products.find((p) => p.id === pid).price * q;
  document.getElementById('total').textContent = total;
}

for (const btn of document.querySelectorAll('.plus')) {
  btn.addEventListener('click', () => {
    const li = btn.closest('li');
    const id = Number(li.dataset.id);
    cart.set(id, (cart.get(id) ?? 0) + 1);
    li.querySelector('.qty').textContent = cart.get(id);
    li.querySelector('.minus').disabled = false;
    updateTotals();
  });
}

for (const btn of document.querySelectorAll('.minus')) {
  btn.addEventListener('click', () => {
    const li = btn.closest('li');
    const id = Number(li.dataset.id);
    const qty = cart.get(id) - 1;
    if (qty > 0) cart.set(id, qty);
    else cart.delete(id);
    li.querySelector('.qty').textContent = qty;
    btn.disabled = qty === 0;
    updateTotals();
  });
}

for (const btn of document.querySelectorAll('.remove')) {
  btn.addEventListener('click', () => {
    const li = btn.closest('li');
    cart.delete(Number(li.dataset.id));
    li.querySelector('.qty').textContent = 0;
    li.querySelector('.minus').disabled = true;
    updateTotals();
  });
}

document.getElementById('clear').addEventListener('click', () => {
  cart.clear();
  for (const li of document.querySelectorAll('.product')) {
    li.querySelector('.qty').textContent = 0;
    li.querySelector('.minus').disabled = true;
  }
  updateTotals();
});