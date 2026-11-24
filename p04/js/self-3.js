class Cart {
  static MAX_ITEMS = 3; // максимальное число позиций в корзине

  #items = [];

  #findIndex(name) {
    return this.#items.findIndex((i) => i.name === name);
  }

  add(name, price, qty = 1) {
    const index = this.#findIndex(name);
    if (index >= 0) {
      this.#items[index].qty += qty;
      return;
    }
    if (this.#items.length >= Cart.MAX_ITEMS) {
      throw new RangeError(`Лимит позиций в корзине: ${Cart.MAX_ITEMS}`);
    }
    this.#items.push({ name, price, qty });
  }

  remove(name) {
    const index = this.#findIndex(name);
    if (index >= 0) this.#items.splice(index, 1);
  }

  changeQty(name, qty) {
    if (!Number.isInteger(qty) || qty < 1) {
      throw new RangeError(`Недопустимое количество: ${qty}`);
    }
    const index = this.#findIndex(name);
    if (index >= 0) this.#items[index].qty = qty;
  }

  get total() {
    return this.#items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  get count() {
    return this.#items.length;
  }
}

const cart = new Cart();
cart.add('Клавиатура', 1250);
cart.add('Мышь', 790, 2);
console.log('позиций:', cart.count, 'сумма:', cart.total);

cart.add('Мышь', 790); // та же позиция, количество увеличится
console.log('после повторного добавления мыши:', cart.count, cart.total);

cart.changeQty('Клавиатура', 3);
console.log('после changeQty:', cart.count, cart.total);

cart.remove('Мышь');
console.log('после удаления мыши:', cart.count, cart.total);

cart.add('Коврик', 450);
cart.add('Кабель', 300);
console.log('позиций:', cart.count, 'лимит:', Cart.MAX_ITEMS);
try {
  cart.add('Наушники', 2990);
} catch (error) {
  console.log(error.name, '-', error.message);
}
console.log('позиций осталось:', cart.count);
console.log(cart.items, Object.keys(cart), JSON.stringify(cart));
console.log(Cart.MAX_ITEMS, cart.MAX_ITEMS);