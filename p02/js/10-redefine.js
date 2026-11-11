let formaPrice = (p) => p + 'руб';
console.log(formaPrice(100));

formaPrice = (p) => p.toFixed(2) + '₽';
console.log(formaPrice(100));

let showwelcome = function () {
    console.log('Первый визит: покажем подсказки');
    showwelcome = function() {
        console.log('Повторный визит: подсказки не нужны');
    };
};

showwelcome();
showwelcome();
showwelcome();