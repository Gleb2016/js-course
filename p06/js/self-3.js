function addBusinessDays(date, count) {
  const result = new Date(date);
  while (count > 0) {
    result.setDate(result.getDate() + 1);
    const day = result.getDay();
    if (day !== 0 && day !== 6) count--;
  }
  return result;
}

const order = new Date(2026, 8, 3);
console.log('заказ:', order.toLocaleDateString('ru-RU'));
console.log('доставка через 3 рабочих дня:', addBusinessDays(order, 3).toLocaleDateString('ru-RU'));

const lastDay = new Date(order.getFullYear(), order.getMonth() + 1, 0);
console.log('последний день месяца:', lastDay.toLocaleDateString('ru-RU'));
console.log('дней до конца месяца:', lastDay.getDate() - order.getDate());