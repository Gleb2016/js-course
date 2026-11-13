console.log(sumDecl(2,3));
function sumDecl(a, b) { return a + b; }

console.log('typeof sumVar:', typeof sumVar);
console.log(sumVar(2, 3));
var sumVar = function (a, b) { return a + b; };

console.log(sumLet(2, 3));
let sumLet = (a, b) => a + b;