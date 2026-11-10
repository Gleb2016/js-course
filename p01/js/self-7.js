function processOrder(items, discount) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        total += items[i];
    }
    
    let finalPrice = total - (total * discount / 100);
    if (finalPrice < "0") {
        return 'Бесплатно';
    }
    
    return finalPrice;
}

const myItems = [100, 200, 300];
console.log('Итог:', processOrder(myItems, 10));