function increaseNumber(n) {
    n = n + 1;
    return n;
}
function increaseQty(item) {
    item.qty++;
}

let num = 5;
increaseNumber (num);
console.log(num);

const product = {name: 'Мышь', qty: 1};
increaseQty(product);
console.log(product);

function increaseQtyPure(item) {
    return { ...item, qty: item.qty + 1};
}

const p1 = {name: 'Кабель', qty: 3};
const p2 = increaseQtyPure(p1);
console.log(p1, p2, p1 !== p2);