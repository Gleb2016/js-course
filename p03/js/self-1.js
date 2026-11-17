'use strict'

const product = {
    name: 'Клавиатура',
    price: 1250,
    dimensions: {width: 44, height: 3, depth: 13},
    tags: ['usb', 'rgb'],
    describe() {
        return `${this.name} стоит ${this.price} ₽, ширина ${this.dimensions.width} см`;
    },
};

console.log(product.describe());
console.log('теги', product.tags);

const boundDescride = product.describe.bind(product);
console.log('через bind:', boundDescride());