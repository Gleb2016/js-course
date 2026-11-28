function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlight(text, query) {
  const safeText = escapeHtml(text);
  if (!query) return safeText;
  const re = new RegExp(escapeRegExp(escapeHtml(query)), 'gi');
  return safeText.replace(re, '<mark>$&</mark>'); 
}

console.log(highlight('Мышь и коврик для мыши', 'мыш'));
console.log(highlight('Цена 1.5 тыс. и 105 руб.', '1.5')); 
console.log(highlight('Коврик <b>XXL</b>', 'xxl'));        
console.log(highlight('Ничего не ищем', ''));

function parsePrice(text) {
  const match = text.match(/от\s+(?<from>[\d\s]+?)\s+до\s+(?<to>[\d\s]+?)\s*₽/);
  if (!match) return null;
  const from = Number(match.groups.from.replace(/\s/g, ''));
  const to = Number(match.groups.to.replace(/\s/g, ''));
  return { from, to };
}

console.log(parsePrice('от 1 250 до 3 000 ₽'));
console.log(parsePrice('от 500 до 900 ₽'));      
console.log(parsePrice('Цена договорная'));      
