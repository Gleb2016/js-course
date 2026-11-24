class CartView {
  state = { items: [], promo: null };

  setState(patch) {
    this.state = { ...this.state, ...patch };
    console.log(this.render());
  }

  render() {
    const { items, promo } = this.state;
    if (items.length === 0) return 'Корзина пуста';
    const total = items.reduce((s, i) => s + i.price * i.qty, 0);
    const final = promo ? Math.round(total * 0.9) : total;
    return `Товаров: ${items.length}, итого ${final} ₽${promo ? ' (промокод ' + promo + ')' : ''}`;
  }
}

const view = new CartView();
console.log(view.render());

// Меняем состояние только через setState
view.setState({ items: [{ name: 'Мышь', price: 790, qty: 2 }] });
view.setState({ items: [...view.state.items, { name: 'Коврик', price: 450, qty: 1 }] });
view.setState({ promo: 'SALE10' });

// Прямое изменение состояния не вызывает отрисовку
view.state.items.push({ name: 'Наушники', price: 2990, qty: 1 });
console.log('после push экран не обновился, а в данных товаров:', view.state.items.length);
view.setState({});