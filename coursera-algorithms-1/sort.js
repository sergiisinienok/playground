const sortImplementations = require('./sortImplementations.js');

const input = [5,3,1,4,6];

const cloneInput = (input) => {
    return JSON.parse(JSON.stringify(input));
};

console.log('Input:');
console.log(input);
console.log('-----------------------------------');
console.log('\n');

console.log('Bubble Sort:');
console.log(sortImplementations.bubbleSort(cloneInput(input)));
console.log('-----------------------------------');

console.log('Bubble Sort, optimized for partially sorted arrays:');
console.log(sortImplementations.bubbleSortOpt(cloneInput(input)));
console.log('-----------------------------------');

console.log('Selection Sort:');
console.log(sortImplementations.selectionSort(cloneInput(input)));
console.log('-----------------------------------');

console.log('Insertion Sort:');
console.log(sortImplementations.insertionSort(cloneInput(input)));
console.log('-----------------------------------');

console.log('Shell Sort:');
console.log(sortImplementations.shellSort(cloneInput(input)));
console.log('-----------------------------------');

console.log('Merge Sort:');
console.log(sortImplementations.mergeSort(cloneInput(input)));
console.log('-----------------------------------');

console.log('Bottom Up Merge Sort:');
console.log(sortImplementations.bottomUpMergeSort(cloneInput(input)));
console.log('-----------------------------------');