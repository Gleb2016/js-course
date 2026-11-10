const READ = 1, WRITE = 2, DELETE = 4, ADMIN = 8;

function describe(perms) {
    let result = '';
    let isFirst = true;

    if ((perms & READ) === READ) {
        result = result + 'чтение' + ', ';
        isFirst = false;
    }

    if ((perms & WRITE) === WRITE) {
        result = result + 'запись' + ', ';
        isFirst = false;
    }

    if ((perms & DELETE) === DELETE) {
        result = result + 'удаление' + ', ';
        isFirst = false;
    }

    if ((perms & ADMIN) === ADMIN){
        if (!isFirst) result = result + ', ';
        result = result + 'админ';
        isFirst = false;
    }

    if (result === '') {
        return 'нет прав';
    }

    return result;
}

const p1 = READ | WRITE;
const p2 = READ | DELETE;
const p3 = READ | WRITE | DELETE | ADMIN;

console.log('Набор 1:', describe(p1));
console.log('Набор 2:', describe(p2));
console.log('Набор 3:', describe(p3));