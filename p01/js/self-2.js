const priceKop = 125050;
const discountKop = Math.round(priceKop * (100 - 15)/100);
const totalKop = discountKop * 3;
console.log('Цена со скидкой:', (discountKop / 100).toFixed(2), 'руб.');
console.log('Итого за 3 шт:', (totalKop / 100).toFixed(2), 'руб.');