'use strict';

function isEqualCart(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i].id !== b[i].id || a[i].qty !== b[i].qty) return false;
    }
    return true;
}

const cart1 = [{id: 1, qty: 2}, {id: 5, qty: 1}];
const cart2 = [{id: 1, qty: 2}, {id: 5, qty: 1}];
const cart3 = [{id: 5, qty: 1}, {id: 1, qty: 2}];
const cart4 = [{id: 1, qty: 3}, {id: 5, qty: 1}];
const cart5 = [{id: 1, qty: 2}];

console.log('cart1 === cart2:', cart1 === cart2);
console.log('одинаковое содержимое:', isEqualCart(cart1, cart2));
console.log('другой порядок:', isEqualCart(cart1, cart3));
console.log('другое количество:', isEqualCart(cart1, cart4));
console.log('другая длина:', isEqualCart(cart1, cart5));
console.log('пустые карзины:', isEqualCart([], []));

