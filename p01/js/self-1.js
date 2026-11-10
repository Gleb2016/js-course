const productName = 'Монитор';
const productPrice = 15000;
let productStock = 0;
const productDiscount = 10;

const isAvilable = productStock > 0;

console.log('Название:', productName, '-', typeof productName);
console.log('Цена:', productPrice, '-', typeof productPrice);
console.log('На складе:', productStock, '-', typeof productStock);
console.log('Скидка:', productDiscount, '-', typeof productDiscount);
console.log('В наличии?:', isAvilable, '-', typeof isAvilable);
