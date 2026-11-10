const prices = [1200, 800, 1500, 300, 950, 2100, 450, 1300];

let sum = 0;
let max = prices[0];
let firstOver1000 = -1;

for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
    if (prices[i] > max) {
        max = prices[i];
    }
}

const average = sum / prices.length;
console.log('Сумма:', sum, '|Максимум:', max, '|Среднее:', average);

console.log('Цены дороже средней:');
for (let i = 0; i < prices.length; i++) {
    if (prices[i] > average) {
        console.log(prices[i]);
    }
}

for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 1000) {
        firstOver1000 = i;
        break;
    }
}

console.log('Индекс первой цены выше 1000:', firstOver1000);