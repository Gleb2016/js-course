let arr = [3, 1, 2];
console.log('push:', arr.push(4), arr);

arr = [3, 1, 2];
arr.sort();
console.log('sort:', arr);

arr = [3, 1, 2];
console.log('splice:', arr.splice(1, 1), arr);

arr = [1, 2, 3];
arr.reverse();
console.log('reverse:', arr);

arr = [1, 2, 3];
console.log('map:', arr, arr.map((x) => x * 2));

arr = [1, 2, 3];
console.log('filter:', arr, arr.filter((x) => x > 1));

arr = [1, 2, 3];
console.log('slice:', arr, arr.slice(0, 2));

arr = [1, 2];
console.log('concat:', arr, arr.concat([3, 4]));

arr = [3, 1, 2];
console.log('toSorted:', arr, arr.toSorted());

arr = [1, 2, 3];
console.log('toReversed:', arr, arr.toReversed());

arr = [3, 1, 2];
console.log('toSpliced:', arr, arr.toSpliced(1, 1));