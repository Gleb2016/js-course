'use strict';

function Product(name, price){
    this.name = name;
    this.price = price;
}

Product.prototype.withDiscount = function (p) {
    return this.price - this.price * p / 100;
};

function PhysicalProduct(name, price, weight) {
    Product.call(this, name, price);
    this.weight = weight;
}

PhysicalProduct.prototype = Object.create(Product.prototype);
PhysicalProduct.prototype.constructor = PhysicalProduct;

PhysicalProduct.prototype.shippingCost = function () {
    return this,this.weight * 100;
};

const book = new Product('Книга', 500);
const keyboard = new PhysicalProduct('Клавиатура', 1250, 1.2);

console.log(book);
console.log(keyboard);
console.log('скидка 10% на клавиатуру:', keyboard.withDiscount(10));
console.log('доставка клавиатуры:', keyboard.shippingCost());
console.log(keyboard instanceof PhysicalProduct, keyboard instanceof Product);
console.log('метод общий?', book.withDiscount === keyboard.withDiscount);
console.log('собственное свойство?', Object.hasOwn(keyboard, 'withDiscount'));

const proto1 = Object.getPrototypeOf(keyboard);
const proto2 = Object.getPrototypeOf(proto1);
const proto3 = Object.getPrototypeOf(proto2);
console.log(proto1 === PhysicalProduct.prototype);
console.log(proto2 == Product.prototype);
console.log(proto3 === Object.prototype);
console.log(Object.getPrototypeOf(proto3));