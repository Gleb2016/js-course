function createIdGenerator(prefix) {
    let n = 0;
    return {
        next() { return `${prefix}-${++n}`; },
        reset() { n = 0; },
    };
}

const orders = createIdGenerator('ORD');
const users = createIdGenerator('USR');

console.log(orders.next(), orders.next(), orders.next());
console.log(users.next());

orders.reset();
console.log(orders.next());
console.log(users.next());