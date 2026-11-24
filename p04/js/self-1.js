class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

      withDiscount(p) {
    return this.price - this.price * p / 100;
  }

  describe() {
    return `${this.name}: ${this.price} ₽`;
  }

  static fromJSON(obj) {
    return new Product(obj.name, obj.price);
  }

  toJSON() {
    return { name: this.name, price: this.price };
  }
}

const keyboard = new Product('Клавиатура', 1250);
const mouse = new Product('Мышь', 790);

console.log(keyboard);
console.log(keyboard.describe(), '| со скидкой 10%:', keyboard.withDiscount(10));

const json = JSON.stringify(keyboard);
console.log(json);
const data = JSON.parse(json); // обычный объект без методов
console.log('data instanceof Product:', data instanceof Product);
const restored = Product.fromJSON(data);
console.log(restored.describe(), restored instanceof Product);

console.log(typeof Product);
console.log(Object.getOwnPropertyNames(Product.prototype));
console.log(Object.getPrototypeOf(keyboard) === Product.prototype);
console.log(Object.getPrototypeOf(Product.prototype) === Object.prototype);
console.log(keyboard instanceof Product, keyboard instanceof Object);
console.log('метод общий?', keyboard.withDiscount === mouse.withDiscount);
console.log('собственное свойство?', Object.hasOwn(keyboard, 'withDiscount'));
console.log(Object.keys(keyboard));