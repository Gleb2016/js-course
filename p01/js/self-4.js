function getStatusSwitch (code) {
    switch (code) {
        case 0: return 'Новый';
        case 1: return 'Оплачен';
        case 2: return 'Собирается';
        case 3: return 'Отправлен';
        case 4: return 'Доставлен';
        default: return 'Неизвестный статус';    
    }   
}

function getStatusTernary (code) {
    return code === 0 ? 'Новый':
    code === 1 ? 'Оплачен': 
    code === 2 ? 'Собирается':
    code === 3 ? 'Отправлен': 
    code === 4? 'Доставлен': 'Неизвестный статус';
}

function getStatusObject (code) {
    const statuses = {
        0: 'Новый',
        1: 'Оплачен',
        2: 'Собирается',
        3: 'Отправлен',
        4: 'Доставлен',
    };

    return statuses[code] ?? 'Неизвестный статус';
}

console.log('Тест 1:', getStatusSwitch(2), '|', getStatusTernary(2), '|', getStatusObject(2));
console.log('Тест 2:', getStatusSwitch(4), '|', getStatusTernary(4), '|', getStatusObject(4));
console.log('Тест 3:', getStatusSwitch(9), '|', getStatusTernary(9), '|', getStatusObject(9));