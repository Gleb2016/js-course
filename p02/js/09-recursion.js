function factorial (n) {
    if (n <= 1) return 1; // базовый случай
    return n * factorial(n - 1); //рекурсивный шаг
}

console.log('5! =', factorial(5));

function countdown(n, depth = 0) {
    const pad = '   '.repeat(depth);
    console.log(pad + 'выход, n =', n);
    if (n > 0) countdown(n-1, depth + 1);
    console.log(pad + 'выход, n =', n);
}
countdown(2);

const catalog = {
    name: 'Каталог',
    Children: [
        {name: 'Компьютеры', Children: [
            {name: 'Клавиатуры', Children: []},
            {name: 'Мыши', Children:[]},
        ]},
        {name:'Кабели', Children: [] },
    ],
};

function printTree(node, level = 0) {
    console.log('   '.repeat(level) + '-' + node.name);
    for (const child of node.Children) printTree(child, level + 1);
}

function countNodes(node) {
    let count = 1;
    for (const child of node.Children) count += countNodes(child);
    return count;
}

printTree(catalog);
console.log('всего категорий:', countNodes(catalog));

function endless(n) {
    return endless(n + 1);
}

// endless(1);