const CartModule = (function () {
    let list = [];
    return {
        add(item) {
            list.push({...item});
        },
        remove(name) {
            const rest = [];
            for (const it of list) {
                if (it.name !== name) rest.push(it);
            }
            list = rest;
        },
        total(){
            let sum = 0;
            for (const it of list) sum += it.price;
            return sum;
        },
        items(){
            const copy = [];
            for (const it of list) copy.push({ ...it });
            return copy;
        },
    };
})();

CartModule.add({name: 'Клавиатура', price: 1250});
CartModule.add({name: 'Мышь', price: 790});
console.log(CartModule.total());
console.log(CartModule.items());
console.log(typeof list);