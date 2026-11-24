class CartView {
  state = { items: [], promo: null };

  setState(patch) {
    this.state = { ...this.state, ...patch };
    console.log(this.render());
  }
  render() {
    const { items, promo } = this.state;
    if (items.length === 0) return 'Корзина пуста';

    const lines = [];
    for (const i of items) {
      lines.push(`${i.name} x ${i.qty} = ${i.price * i.qty} ₽`);
    }
    const total = items.reduce((s, i) => s + i.price * i.qty, 0);
    const final = promo ? Math.round(total * 0.9) : total;
    lines.push(`Итого: ${final} ₽${promo ? ' (промокод ' + promo + ')' : ''}`);
    return lines.join('\n');
  }
  addItem(item) {
    this.setState({ items: [...this.state.items, item] });
  }

  removeItem(name) {
    const items = [...this.state.items]; // копия, исходный массив не трогаем
    const index = items.findIndex((i) => i.name === name);
    if (index >= 0) items.splice(index, 1);
    this.setState({ items });
  }

  applyPromo(code) {
    this.setState({ promo: code });
  }
}

const view = new CartView();
console.log(view.render());

const start = view.state; // запоминаем исходное состояние

view.addItem({ name: 'Мышь', price: 790, qty: 2 });
view.addItem({ name: 'Коврик', price: 450, qty: 1 });
view.addItem({ name: 'Кабель', price: 300, qty: 3 });
view.applyPromo('SALE10');
view.removeItem('Коврик');
console.log('исходное состояние то же?', start === view.state);
console.log('в исходном состоянии товаров:', start.items.length, 'промокод:', start.promo);
console.log('в текущем состоянии товаров:', view.state.items.length, 'промокод:', view.state.promo);