let state = {
  products: [
    { id: 1, name: 'Клавиатура', price: 1250 },
    { id: 2, name: 'Мышь', price: 790 },
    { id: 3, name: 'Коврик', price: 430 },
  ],
  cart: {},
};

function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  Object.assign(node, props);
  node.append(...children);
  return node;
}

function render(s) {
  const count = Object.values(s.cart).reduce((a, b) => a + b, 0);
  const total = s.products.reduce((sum, p) => sum + p.price * (s.cart[p.id] ?? 0), 0);
  document.getElementById('app').replaceChildren(
    el('header', { className: 'header' },
      el('a', { className: 'logo' }, 'Kreativa Shop'),
      el('span', { className: 'logo' }, `Корзина: ${count} `,
        el('button', { className: 'clear', disabled: count === 0 }, 'Очистить корзину'))),
    el('main', {},
      el('ul', { className: 'products' }, ...s.products.map((p) =>
        el('li', { className: 'product' }, `${p.name} `,
          el('span', { className: 'price' }, `${p.price} ₽ `),
          el('button', { className: 'minus', disabled: !s.cart[p.id] }, '−'),
          ` ${s.cart[p.id] ?? 0} `,
          el('button', { className: 'plus' }, '+'),
          el('button', { className: 'remove', disabled: !s.cart[p.id] }, 'Удалить')))),
      el('p', {}, `Итого: ${total} ₽`)),
  );
  document.querySelectorAll('.product').forEach((li, i) => (li.dataset.id = s.products[i].id));
}

function setState(patch) {
  state = { ...state, ...patch };
  render(state);
}

document.getElementById('app').addEventListener('click', (e) => {
  if (e.target.matches('.clear')) setState({ cart: {} });
  const li = e.target.closest('li');
  if (!li) return;
  const id = Number(li.dataset.id);
  const qty = state.cart[id] ?? 0;
  if (e.target.matches('.plus')) setState({ cart: { ...state.cart, [id]: qty + 1 } });
  if (e.target.matches('.minus')) setState({ cart: { ...state.cart, [id]: qty - 1 } });
  if (e.target.matches('.remove')) setState({ cart: { ...state.cart, [id]: 0 } });
});

render(state);