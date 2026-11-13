const product = {
    name: '',
    price: 1250, 
    'in stock': true,
};

console.log(product.name, product['price'], product['in stock'])
const field = 'price';
console.log('через переменную:', product[field]);

product.stock = 12;
product.price = 1190;
delete product['in stock'];
console.log(product);
console.log('нет такого свойства:', product.color);

const name = 'Мышь';
const price = '790';
const mouse = {
    name,
    price,
    describe() {
        return 'товар:' + mouse.name;
    },
};
console.log(mouse.describe());

const key = 'color';
const colored = {[key]: 'чёрный' };
console.log(colored);
