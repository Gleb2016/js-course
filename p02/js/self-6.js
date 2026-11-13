const catalog = {
    name: 'Каталог',
    children: [
        {
            name: 'Компьютеры',
            children: [
                {name: 'Клавиатуры', children: []},
                {name: 'Мыши', children: []},
                {name: 'Кабели', children: []},
            ],
        },
    ],
};

function findPath(node, name) {
    if (node.name === name) return node.name;
    for (const child of node.children) {
        const sub = findPath(child, name);
        if (sub != null) return `${node.name} / ${sub}`;
    }
    return null;
}

console.log(findPath(catalog, 'Мыши'));
console.log(findPath(catalog, 'Принтеры'));