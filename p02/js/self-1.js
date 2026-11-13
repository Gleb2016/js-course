function applyDiscount(price, percent = 0) {
  return price - (price * percent) / 100;
}
function withVat(price, rate = 20) {
  return price + (price * rate) / 100;
}
function formatPrice(value) {
  const text = value.toFixed(2).replace('.', ','); // например "1250,50"
  const intLength = text.length - 3;               // длина целой части (без ",50")
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (i > 0 && i < intLength && (intLength - i) % 3 === 0) result += ' ';
    result += text[i];
  }
  return result + ' ₽';
}

const applyDiscountExpr = function (price, percent = 0) {
  return price - (price * percent) / 100;
};
const withVatExpr = function (price, rate = 20) {
  return price + (price * rate) / 100;
};
const formatPriceExpr = function (value) {
  const text = value.toFixed(2).replace('.', ',');
  const intLength = text.length - 3;
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (i > 0 && i < intLength && (intLength - i) % 3 === 0) result += ' ';
    result += text[i];
  }
  return result + ' ₽';
};

const applyDiscountArrow = (price, percent = 0) => price - (price * percent) / 100;
const withVatArrow = (price, rate = 20) => price + (price * rate) / 100;
const formatPriceArrow = (value) => {
  const text = value.toFixed(2).replace('.', ',');
  const intLength = text.length - 3;
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (i > 0 && i < intLength && (intLength - i) % 3 === 0) result += ' ';
    result += text[i];
  }
  return result + ' ₽';
};

console.log(applyDiscount(1000), applyDiscountExpr(1000, 10), applyDiscountArrow(1000, 15));
console.log(withVat(1000), withVatExpr(1000, 10), withVatArrow(1000));
console.log(formatPrice(1250.5), formatPriceExpr(1234567.891), formatPriceArrow(5));