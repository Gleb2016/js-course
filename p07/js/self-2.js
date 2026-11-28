const items = [...products, { id: 21, name: '<img src=x onerror=alert(1)>', price: 1 }];

const listDom = document.getElementById('list-dom');
const fragment = document.createDocumentFragment();
for (const p of items) {
  const li = document.createElement('li');
  li.className = 'product';
  li.dataset.id = p.id;
  li.textContent = p.name + ' ';
  const price = document.createElement('span');
  price.className = 'price';
  price.textContent = `${p.price} ₽`;
  li.append(price);
  fragment.append(li);
}
listDom.append(fragment);

const listHtml = document.getElementById('list-html');
listHtml.innerHTML = items
  .map((p) => `<li class="product" data-id="${p.id}">${p.name} <span class="price">${p.price} ₽</span></li>`)
  .join('');

console.log('карточек в версии 1:', listDom.children.length, '| в версии 2:', listHtml.children.length);
console.log('версия 1, последняя карточка (текст):', listDom.lastElementChild.textContent);
console.log('версия 2, последняя карточка (разметка):', listHtml.lastElementChild.innerHTML);
console.log('<img> в версии 1:', listDom.querySelectorAll('img').length,
  '| <img> в версии 2:', listHtml.querySelectorAll('img').length);