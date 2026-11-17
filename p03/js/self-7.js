'use strict';

function renderLine({ name, price, dimensioms: {width = 0} = {}}) {
    return `${name}: ${price} ₽, ширина ${width} см`;
}

console.log(renderLine({name: 'Клавиатура', price: 1250, dimensioms: {width: 44, height: 3} }));
console.log(renderLine({ name: 'Кабель', price: 300}));
const withContact = {
    name: 'Мышь',
    supplier: {name: 'ТехноОпт', contact: {email: 'sales@technoopt.example' }}
};

const noContact = {name: 'Клавиатура', supplier:{name: 'КлавПодставка'}};
const noSupplier = {name: 'Кабель'};

for (const product of [withContact, noContact, noSupplier]){
    console.log(product.name, '->', product?.supplier?.contact?.email ?? 'почта указана');
}