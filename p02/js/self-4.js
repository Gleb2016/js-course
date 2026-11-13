function createCart() {
    let items = [];

    return {
        add(item) {
            items.push({ ...item});
        },
        remove (name) {
            const rest = [];
            for (const it of items) {
                if (it.name !== name) rest.push(it);
            }
            items = rest;
        },
        total() {
            let sum = 0;
            for (const it of items) sum += it.price;
            return sum;
        },
        items() {
            const copy = [];
            for (const it of items) copy.push({ ...it});
            return copy;
        },
    };
}

const cart = createCart();
cart.add({name: 'Клавиатура', price: 1250});
cart.add({name: 'Мышь', price: 790});
console.log('сумма:', cart.total());

const copy = cart.items();
copy.push({name: 'Кабель', price: 300});
copy[0].price = 0;
console.log('товаров:', cart.items().length, 'сумма:', cart.total());


cart.remove('Мышь');
console.log(cart.items(), cart.total());