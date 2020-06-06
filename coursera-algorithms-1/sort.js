const sortImplementations = require('./sortImplementations.js');

const input = [5,3,1,4,6];

console.log('Input:');
console.log(input);
console.log('-----------------------------------');
console.log('\n');

console.log('Bubble Sort:');
console.log(sortImplementations.bubbleSort(input));
console.log('-----------------------------------');

console.log('Bubble Sort, optimized for partially sorted arrays:');
console.log(sortImplementations.bubbleSortOpt(input));
console.log('-----------------------------------');