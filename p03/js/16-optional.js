const order = {
    id: 17,
    custometr: { name: 'Анна', contacts: {email: 'anna@exaple.com'}},
};
const draft = { id: 18};

console.log(order.custometr?.contacts?.email);
console.log(draft.custometr?.contacts?.email);
console.log(draft.custometr?.contacts?.email ?? 'почта не указана');

const shop = {log(msg) {console.log('LOG:', msg); }};
const silenShop = {};
shop.log?.('заказ создан');
silenShop.log?.('не выдается');

const reviews = null;
console.log('первый отзыв:', reviews?.[0]?.author);