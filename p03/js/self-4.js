'use strict';

function diff(before, after) {
    const changed = [];
    const removed = [];

    for (const [key, value] of Object.entries(after)) {
        if (before[key] !== value) changed.push(key);
    }

    for (const key of Object.keys(before)) {
        if (!Object.hasOwn(after, key)) removed.push(key);
    }

    return {changed, removed} ;
}

const before = {name:'Мышь', price: 790, discount: 0, note: 'акция'};
const after = {name: 'Мышь', price: 690, stock: 3};

const result =diff(before, after);
console.log('изменены или добавлены:', result.changed);
console.log('удалены:', result.removed);

console.log('одинаковые объекты:', diff(before, {...before}));