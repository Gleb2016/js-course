'use strict'

const product = {
    name: 'Мышь',
    price: 790,
    dimensions: { width: 6, height: 4, depth: 11},
    tags: ['use', 'wireless'],
};

const copySpread = {...product};
const copyAssing = Object.assign({}, product);
const copyClone = structuredClone(product);

console.log('исходная ширина:', product.dimensions.width);

copySpread.dimensions.width = 10;
console.log('полсе изменнеия в {...obj}:', product.dimensions.width, '| dimensions общий?', copySpread.dimensions === product.dimensions);
copyAssing.dimensions.width = 20;
console.log('после изменения в Object.assasing:', product.dimensions.width, '| dimensions общий?', copyAssing.dimensions === product.dimensions);
copyClone.dimensions.width = 30;
console.log('полсе изменения в structuredClone:', product.dimensions.width, '| dimensions общий?', copyClone.dimensions === product.dimensions);

// Оригинал изменился в первых двух случаях: {...obj} и Object.assign делают поверхностную копию, в нём dimensions скопировался как ссылка, и вложенный объект остался один на всех. 
// StructuredClone копирует рекурсивно, у копии свой dimensions, оригинал не затронут.