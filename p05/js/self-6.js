const article = /^[A-Z]{2}-\d{5}$/;
const articleOk = ['AB-12345', 'XZ-00001', 'QQ-98765'];
const articleBad = ['ab-12345', 'AB-1234', 'AB12345'];

const phone = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
const phoneOk = ['+7 (999) 123-45-67', '+7 (495) 000-00-01', '+7 (812) 555-12-34'];
const phoneBad = ['89991234567', '+7 (99) 123-45-67', '+7 (999) 1234567'];

const email = /^\S+@\S+\.\S+$/;
const emailOk = ['user@mail.ru', 'ivan.petrov@example.com', 'a_b-c@sub.domain.org'];
const emailBad = ['user@', '@mail.ru', 'user@mail'];

console.log('--- артикул');
for (const s of articleOk) console.log(s, article.test(s));
for (const s of articleBad) console.log(s, article.test(s));

console.log('--- телефон');
for (const s of phoneOk) console.log(s, phone.test(s));
for (const s of phoneBad) console.log(s, phone.test(s));

console.log('--- email');
for (const s of emailOk) console.log(s, email.test(s));
for (const s of emailBad) console.log(s, email.test(s));
