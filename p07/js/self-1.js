const cards = document.querySelectorAll('.card');
console.log('карточек найдено:', cards.length);

cards.forEach((card, i) => {
  card.dataset.index = i;
  card.querySelector('h3').classList.add('accent');
});
console.log([...cards].map((card) => card.outerHTML.split('>')[0] + '>'));

cards[cards.length - 1].remove();
console.log('карточек осталось:', document.querySelectorAll('.card').length);
console.log('в старом NodeList по-прежнему', cards.length, '(снимок, задание 3)');

let node = document.getElementById('work');
const path = [];
while (node && node !== document.body) {
  path.push(node.tagName.toLowerCase());
  node = node.parentElement;
}
console.log(path.join(' → ') + ' → body');
