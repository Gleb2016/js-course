function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function renderCard(product) {
  return `
    <div class="card">
      <h3>${escapeHtml(product.name)}</h3>
      <div>${escapeHtml(product.category)}</div>
      <span class="price">${escapeHtml(product.price)} ₽</span>
    </div>`;
}

function renderList(items) {
  return items.map(renderCard).join('');
}

document.getElementById('catalog').innerHTML = renderList(products);

const evil = { name: 'Коврик <b>XXL</b>', category: '<i>Аксессуары</i>', price: 450 };
document.getElementById('check').innerHTML = renderList([evil]);
