const names = products
  .filter((p) => p.category === 'Электроника' && p.price > 1000)
  .toSorted((a, b) => b.price - a.price)
  .map((p) => p.name);
console.log(names);

const total = products.reduce((sum, p) => sum + p.price * p.stock, 0);
console.log('стоимость склада:', total);

const groups = products.reduce((acc, p) => {
  if (!acc[p.category]) acc[p.category] = [];
  acc[p.category].push(p.name);
  return acc;
}, {});
console.log(groups);
