'use strict';

function Product(name, price){
    this.name = name;

    let currentPrice;

    Object.defineProperty(this, 'price', {
        get () {return currentPrice;},
        set(value) {
            if (value < 0) {
                throw new RangeError(`Цена не может быть отрицательной: ${value}`);
            }
            currentPrice = value;
        },
        enumerable: true
    });
    this.price = price;
}

Object.defineProperty(Product.prototype, 'formattedPrice', {
    get() {return this.price.toFixed(2) + '₽'; },
});

const keyboard = new Product('Клавиатура', 1250);
console.log(keyboard.name, keyboard.price, keyboard.formattedPrice);
keyboard.price = 990;
console.log('после изменения:', keyboard.price, keyboard.formattedPrice);

console.log('ключи:', Object.keys(keyboard));
console.log('цена осталась:', keyboard.price);
