'use strict';

function deepFreeze(obj) {
    for (const value of Object.values(obj)) {
        if (typeof value === 'object' && value !== null) deepFreeze(value);
    }
    return Object.freeze(obj);
}

function addToCart(state, item) {
    return deepFreeze({ ...state, cart: [...state.cart, item] });
}

const state1 = deepFreeze({cart: [], filers: {} });
console.log('state1 заморожено глубоко?', Object.isFrozen(state1), Object.isFrozen(state1.cart), Object.isFrozen(state1.filers));

const state2 = addToCart(state1, {id: 1, name: 'Мышь', qty: 1});
const state3 = addToCart(state1, {id: 1, name: 'Клавиатура', qty: 1});

console.log('state1:', state1);
console.log('state2:', state2);
console.log('state3:', state3);
console.log('state1 === state2:', state1 === state2);
console.log('state2 заморожено?', Object.isFrozen(state2), Object.isFrozen(state2.cart));
console.log('старое состояние не изменилось, в нём товаров:', state1.cart.length);
