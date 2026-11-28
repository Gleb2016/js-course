class ProductList extends Array {
  // товары одной категории
  byCategory(name) {
    return this.filter((p) => p.category === name);
  }

  totalPrice() {
    let sum = 0;
    for (const p of this) sum += p.price;
    return sum;
  }

  cheapest() {
    let min = this[0];
    for (const p of this) {
      if (p.price < min.price) min = p;
    }
    return min;
  }
}

const catalog = ProductList.from(products);
console.log(catalog.length, catalog instanceof ProductList);

const electronics = catalog.byCategory('Электроника');
console.log('товаров в электронике:', electronics.length);
console.log('сумма цен электроники:', electronics.totalPrice());
console.log('самый дешёвый:', catalog.cheapest().name, catalog.cheapest().price);

const inStock = catalog.filter((p) => p.stock > 0);
console.log('filter вернул ProductList:', inStock instanceof ProductList);
console.log('inStock.totalPrice():', inStock.totalPrice());
