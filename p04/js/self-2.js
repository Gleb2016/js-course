class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  shippingCost() {
    return 0;
  }

  describe() {
    return `${this.name}: ${this.price} ₽, доставка ${this.shippingCost()} ₽`;
  }
}

class PhysicalProduct extends Product {
  constructor(name, price, weightKg) {
    super(name, price);
    this.weightKg = weightKg;
  }

  shippingCost() {
    return 300 + Math.ceil(this.weightKg) * 50;
  }
}

class DigitalProduct extends Product {
  describe() {
    return super.describe() + ' (ключ придёт на почту)';
  }
}

const order = [
  new PhysicalProduct('Клавиатура', 1250, 0.9),
  new DigitalProduct('Игра', 2499),
  new PhysicalProduct('Ноутбук', 54990, 2.1),
  new DigitalProduct('Электронная книга', 450),
];

let shipping = 0;
for (const item of order) {
  console.log(item.describe());
  shipping += item.shippingCost();
}
console.log('доставка заказа:', shipping);

const laptop = order[2];
console.log(laptop instanceof PhysicalProduct, laptop instanceof Product, laptop instanceof DigitalProduct);
console.log(Object.getPrototypeOf(PhysicalProduct.prototype) === Product.prototype);