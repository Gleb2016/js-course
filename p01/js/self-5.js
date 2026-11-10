function parsePrice(text) {
    let str = text.split(' ').join('');
    str = str.replace('руб','');
    str = str.replace(',', '.');
    const num = Number(str);

    if (Number.isNaN(num)) {
        return NaN;
    }
    return num;
}

console.log(parsePrice("1250.50"));
console.log(parsePrice("900"));
console.log(parsePrice("abc"));