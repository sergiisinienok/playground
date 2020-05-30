const {
    QuickFindUF,
    QuickUnionUF,
    WeightedQuickUnionUF,
    WeightedQuickUnionWithPathCompressionUF,
} = require('./unionFindTypes.js');

// Dynamic Connectivity problem:
//
// Given a set of N objects.
//  - Union command: connect two objects.
//  - Find/connected query: is there a path connecting the two objects?

// ----------------------------------------------------------------------------------------------------------------

const inputObjects = [
    [4, 3],
    [3, 8],
    [6, 5],
    [9, 4],
    [2, 1],
    [8, 9],
    [5, 0],
    [7, 2],
    [6, 1],
    [1, 0],
    [6, 7],
];
const uniqueObjectsCount =10;

const runUF = () => {
    const UF = new QuickFindUF(uniqueObjectsCount);

    for (let i = 0; i < inputObjects.length; i++) {
        const p = inputObjects[i][0];
        const q = inputObjects[i][1];
        if (!UF.connected(p, q)) {
            UF.union(p, q);
            console.log(p + " " + q);
        }
    }
    console.log('-----------------------------------------------');
};

const runQuickUnionUF = () => {
    const UF = new QuickUnionUF(uniqueObjectsCount);

    for (let i = 0; i < inputObjects.length; i++) {
        const p = inputObjects[i][0];
        const q = inputObjects[i][1];
        if (!UF.connected(p, q)) {
            UF.union(p, q);
            console.log(p + " " + q);
        }
    }
    console.log('-----------------------------------------------');
};

const runWeightedQuickUnionUF = () => {
    const UF = new WeightedQuickUnionUF(uniqueObjectsCount);

    for (let i = 0; i < inputObjects.length; i++) {
        const p = inputObjects[i][0];
        const q = inputObjects[i][1];
        if (!UF.connected(p, q)) {
            UF.union(p, q);
            console.log(p + " " + q);
        }
    }
    console.log('-----------------------------------------------');
};

const runWeightedQuickUnionWithPathCompressionUF = () => {
    const UF = new WeightedQuickUnionWithPathCompressionUF(uniqueObjectsCount);

    for (let i = 0; i < inputObjects.length; i++) {
        const p = inputObjects[i][0];
        const q = inputObjects[i][1];
        if (!UF.connected(p, q)) {
            UF.union(p, q);
            console.log(p + " " + q);
        }
    }
    console.log('-----------------------------------------------');
};

runUF();
runQuickUnionUF();
runWeightedQuickUnionUF();
runWeightedQuickUnionWithPathCompressionUF();

console.log('Done!');