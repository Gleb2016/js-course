const raw = `мышь ; 790 ;Электроника
КОВРИК;450; аксессуары

  клавиатура ;  1250  ; ЭЛЕКТРОНИКА
блокнот;сто;Канцелярия
ручка;60
;100;Канцелярия
наушники ; 2990 ; электроника
   `;

function capitalize(text) {
  const t = text.trim().toLowerCase();
  return t[0].toUpperCase() + t.slice(1);
}

const result = [];
const lines = raw.split('\n'); 

for (const line of lines) {
  const clean = line.trim();
  if (clean === '') continue; 

  const parts = clean.split(';'); 
  const name = parts[0].trim();
  const price = parts[1] ? parts[1].trim() : '';
  const category = parts[2] ? parts[2].trim() : '';

  if (name === '' || category === '' || !/^\d+$/.test(price)) continue;

  result.push({ name: capitalize(name), price: Number(price), category: capitalize(category) });
}

console.log(result.length, 'товара из', lines.length, 'строк');
console.log(result);