function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

let renders = 0;

function render() {
  renders++;
  let list = '';
  let total = 0;
  for (const item of state.items) {
    list += `<li>${escapeHtml(item.name)} x ${item.qty} = ${item.price * item.qty} ₽</li>`;
    total += item.price * item.qty;
  }
  document.getElementById('app').innerHTML = `<h2>Корзина</h2><ul>${list}</ul><p>Итого: ${total} ₽</p>`;
  console.log('render, перерисовок:', renders);
}

const state = new Proxy({ items: [] }, {
  set(target, key, value) {
    target[key] = value;
    render();
    return true;
  },
});

state.items = [{ name: 'Мышь', price: 790, qty: 2 }];
state.items = [...state.items, { name: 'Коврик', price: 350, qty: 1 }];

state.items.push({ name: 'Кабель', price: 200, qty: 3 });
console.log('после push перерисовок по-прежнему', renders);

state.items = [...state.items, { name: 'Адаптер', price: 450, qty: 1 }];
