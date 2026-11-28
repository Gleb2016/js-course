console.log((1.005).toFixed(2), '<- ожидали 1.01');
console.log((1.005).toPrecision(20), '<- в памяти число чуть меньше 1.005');

function roundMoney(value) {
  const kopecks = Math.round(Number((value * 100).toPrecision(15)));
  return kopecks / 100;
}

console.log(roundMoney(1.005));
console.log(roundMoney(2.675));
console.log(roundMoney(0.1 + 0.2));