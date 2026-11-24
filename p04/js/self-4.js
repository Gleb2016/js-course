class CartLine {
  #qty = 1;

  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
  }

  get qty() {
    return this.#qty;
  }

  set qty(value) {
    if (!Number.isInteger(value) || value < 1) {
      throw new RangeError(`Недопустимое количество: ${value}`);
    }
    this.#qty = value;
  }

  get sum() {
    return this.price * this.#qty;
  }
}

const lines = [];

function addLine(name, price, qty) {
  try {
    lines.push(new CartLine(name, price, qty));
    console.log('добавлено:', name, 'x', qty);
  } catch (error) {
    console.log('не добавлено:', name, '|', error.name, '-', error.message);
  }
}

addLine('Мышь', 790, 2);
addLine('Клавиатура', 1250, 0);
addLine('Коврик', 450, -3);       
addLine('Кабель', 300, 1.5);      
addLine('Наушники', 2990, 1);

console.log('в списке строк:', lines.length);
for (const line of lines) {
  console.log(line.name, line.qty, line.sum);
}

try {
  lines[0].qty = 0;
} catch (error) {
  console.log(error.name, '-', error.message);
}
console.log('количество осталось', lines[0].qty);
console.log('программа дошла до конца');