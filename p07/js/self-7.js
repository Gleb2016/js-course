class ProductCard extends HTMLElement {
  static observedAttributes = ['name', 'price', 'qty'];

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue !== null) console.log(`${this.getAttribute('name')}: ${attr} ${oldValue} → ${newValue}`);
    if (this.isConnected) this.render();
  }

  render() {
    const qty = Number(this.getAttribute('qty'));
    this.className = 'product';
    this.innerHTML = `<span class="name"></span> <button class="minus">−</button> <b class="qty">${qty}</b> <button class="plus">+</button> <button class="remove">Удалить</button>`;
    this.querySelector('.name').textContent = `${this.getAttribute('name')} ${this.getAttribute('price')} ₽`;
    this.querySelector('.minus').disabled = qty === 0;
    this.querySelector('.remove').disabled = qty === 0;
  }
}

customElements.define('product-card', ProductCard);

let state = {
  products: [
    { id: 1, name: 'Клавиатура', price: 1250 },
    { id: 2, name: 'Мышь', price: 790 },
    { id: 3, name: 'Коврик', price: 430 },
  ],
  cart: {},
  search: '',
  sort: 'none',
};

const cards = new Map();
let created = 0, updated = 0;

function createCard(p) {
  const card = document.createElement('product-card');
  card.dataset.id = p.id;
  card.setAttribute('name', p.name);
  card.setAttribute('price', p.price);
  card.setAttribute('qty', 0);
  created++;
  return card;
}

function updateCard(card, qty) {
  if (card.getAttribute('qty') !== String(qty)) {
    card.setAttribute('qty', qty);
    updated++;
  }
}

function render(s) {
  const list = document.getElementById('list');
  let visible = s.products.filter((p) =>
    p.name.toLowerCase().includes(s.search.toLowerCase()));
  if (s.sort === 'asc') visible = visible.toSorted((a, b) => a.price - b.price);
  if (s.sort === 'desc') visible = visible.toSorted((a, b) => b.price - a.price);

  const visibleIds = new Set(visible.map((p) => p.id));
  for (const [id, card] of cards) {
    if (!visibleIds.has(id)) { card.remove(); cards.delete(id); }
  }
  visible.forEach((p, index) => {
    let card = cards.get(p.id);
    if (!card) { card = createCard(p); cards.set(p.id, card); }
    updateCard(card, s.cart[p.id] ?? 0);
    if (list.children[index] !== card) list.insertBefore(card, list.children[index] ?? null);
  });

  const count = Object.values(s.cart).reduce((a, b) => a + b, 0);
  const total = s.products.reduce((sum, p) => sum + p.price * (s.cart[p.id] ?? 0), 0);
  document.getElementById('count').textContent = count;
  document.getElementById('total').textContent = total;
  console.log(`render: создано ${created}, обновлено ${updated}`);
}

function setState(patch) {
  state = { ...state, ...patch };
  render(state);
}

document.getElementById('list').addEventListener('click', (e) => {
  const card = e.target.closest('product-card');
  if (!card) return;
  const id = Number(card.dataset.id);
  const qty = state.cart[id] ?? 0;
  if (e.target.matches('.plus')) setState({ cart: { ...state.cart, [id]: qty + 1 } });
  if (e.target.matches('.minus')) setState({ cart: { ...state.cart, [id]: qty - 1 } });
  if (e.target.matches('.remove')) setState({ cart: { ...state.cart, [id]: 0 } });
});
document.getElementById('search').addEventListener('input', (e) => setState({ search: e.target.value }));
document.getElementById('sort').addEventListener('click', () => {
  if (state.sort === 'none') setState({ sort: 'asc' });
  else if (state.sort === 'asc') setState({ sort: 'desc' });
  else setState({ sort: 'none' });
});

render(state);