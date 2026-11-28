class Cart {
  constructor() {
    this.items = [];
  }

  add(name, price, qty) {
    this.items.push({ name, price, qty });
  }

  *[Symbol.iterator]() {
    for (const item of this.items) {
      yield item;
    }
  }
}

const cart = new Cart();
cart.add('Мышь', 790, 2);
cart.add('Коврик', 350, 1);
cart.add('Кабель', 200, 3);

for (const line of cart) {
  console.log(line.name, 'x', line.qty, '=', line.price * line.qty, '₽');
}

function* paginate(items, size) {
  for (let i = 0; i < items.length; i += size) {
    yield items.slice(i, i + size);
  }
}

const names = ['Товар 1', 'Товар 2', 'Товар 3', 'Товар 4', 'Товар 5', 'Товар 6', 'Товар 7'];
const pages = paginate(names, 3);
console.log(pages.next().value);
console.log(pages.next().value);
console.log(pages.next().value);
console.log(pages.next());