let state = {
  products: [
    { id: 1, name: 'Клавиатура', price: 1250 },
    { id: 2, name: 'Мышь', price: 790 },
    { id: 3, name: 'Коврик', price: 430 },
  ],
  search: '',
};

function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  Object.assign(node, props);
  node.append(...children);
  return node;
}

function render(s) {
  const visible = s.products.filter((p) =>
    p.name.toLowerCase().includes(s.search.toLowerCase()));
  document.getElementById('app').replaceChildren(
    el('input', { id: 'search', value: s.search, placeholder: 'Поиск' }),
    el('ul', { className: 'products' }, ...visible.map((p) =>
      el('li', { className: 'product' }, `${p.name} ${p.price} ₽`))),
  );
}

function setState(patch) {
  state = { ...state, ...patch };
  render(state);
}

document.getElementById('app').addEventListener('input', (e) => {
  if (e.target.id === 'search') {
    setState({ search: e.target.value });
    console.log(`в поле: "${document.getElementById('search').value}" | state.search: "${state.search}" | фокус на: ${document.activeElement.tagName}`);
  }
});

function measure(n) {
  const many = Array.from({ length: n }, (_, i) => ({ id: i + 1, name: `Товар ${i + 1}`, price: 100 + i }));
  const t0 = performance.now();
  setState({ products: many, search: '' });
  const t1 = performance.now();
  const text = `render ${n} товаров: ${(t1 - t0).toFixed(1)} мс`;
  console.log(text);
  document.getElementById('out').textContent += text + '\n';
}

document.getElementById('m100').addEventListener('click', () => measure(100));
document.getElementById('m1000').addEventListener('click', () => measure(1000));
document.getElementById('m5000').addEventListener('click', () => measure(5000));

render(state);