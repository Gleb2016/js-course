class Cart {
  constructor() {
    this.items = new Map();
  }

  add(productId, qty = 1) {
    const current = this.items.get(productId) ?? 0;
    this.items.set(productId, current + qty);
  }

  remove(productId) {
    this.items.delete(productId);
  }
}

const cart = new Cart();
cart.add(1);
cart.add(2, 2);
cart.add(1);
console.log(cart.items);
console.log('позиций:', cart.items.size);

for (const [id, qty] of cart.items) {
  const product = products.find((p) => p.id === id);
  console.log(product.name, 'x', qty);
}

cart.remove(2);
console.log('после удаления:', cart.items.size);

const tags = new Set();
for (const p of products) {
  for (const tag of p.tags) tags.add(tag);
}
console.log('уникальные теги:', tags.size);
console.log([...tags]);