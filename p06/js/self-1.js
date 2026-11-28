const stock = { 42: 3, 7: 10 };

class Cart {
  constructor() {
    this.items = [];
  }

  add(productId, qty) {
    if (!Number.isInteger(qty) || qty < 1) {
      throw new ValidationError('qty', 'Количество должно быть целым и больше нуля');
    }
    if (!(productId in stock)) {
      throw new Error('Неизвестный товар ' + productId);
    }
    if (qty > stock[productId]) {
      throw new OutOfStockError(productId, stock[productId]);
    }
    this.items.push({ productId, qty });
  }
}

const cart = new Cart();
const log = [];

function tryAdd(productId, qty) {
  try {
    cart.add(productId, qty);
    console.log('Добавлено: товар', productId, 'x', qty);
  } catch (e) {
    if (e instanceof ValidationError) {
      console.log('Ошибка в поле', e.field + ':', e.message);
    } else if (e instanceof OutOfStockError) {
      console.log('На складе только', e.available, 'шт. (товар', e.productId + ')');
    } else {
      throw e;
    }
  } finally {
    log.push({ productId, qty });
  }
}

tryAdd(7, 2); 
tryAdd(42, 5);
tryAdd(7, -1);
try {
  tryAdd(99, 1);
} catch (e) {
  console.log('Неизвестная ошибка дошла сюда:', e.message);
}

console.log('в корзине позиций:', cart.items.length);
console.log('в журнале попыток:', log.length);
console.log(log);
