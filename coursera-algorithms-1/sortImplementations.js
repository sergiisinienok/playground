const exchangeArrayElements = (input, i, j) => {
    const tmp = input[i];
    input[i] = input[j];
    input[j] = tmp;
};

// Cost model
// | algorithm      | Passes | Data Movements |
// | Bubble Sort    |   N^2  |  N^2           |
const bubbleSort = (input) => {
    const inputLength = input.length;
    for (let i = 0; i < inputLength; i++) {
        for (let j = 0; j < inputLength; j++) {
            if (input[j] > input[j + 1]) {
                exchangeArrayElements(input, j, j + 1);
            }
        }
    }

    return input;
};

// Cost model
// | algorithm          | Passes | Data Movements            |
// | Bubble Sort Opt    |   N^2  |  N^2 (N in best case)     |
const bubbleSortOpt = (input) => {
    const inputLength = input.length;
    let wasSwapped;

    do {
        wasSwapped = false;
        for (let i = 0; i < inputLength; i++) {
            if (input[i] > input[i + 1]) {
                exchangeArrayElements(input, i, i + 1);
                wasSwapped = true;
            }
        }
    } while (wasSwapped);

    return input;
};

// Cost model
// | algorithm         | Passes | Data Movements  |
// | Selection Sort    |   N^2  |  N              |
const selectionSort = (input) => {
    const inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
        let minIndex = i;

        for (let j = i + 1; j < inputLength; j++) {
            if (input[j] < input[minIndex]) {
                minIndex = j;
            }
        }

        exchangeArrayElements(input, i, minIndex);
    }

    return input;
};

// Cost model
// | algorithm         | Passes                                 | Data Movements                        |
// | Insertion Sort    |   N^2 (N for partially sorted arrray)  |  N^2 (N for partially sorted arrray)  |
const insertionSort = (input) => {
    const inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
        for (let j = i; j > 0; j--) {
            if (input[j] < input[j - 1]) {
                exchangeArrayElements(input, j, j - 1);
            } else break;
        }
    }

    return input;
}

module.exports = {
    bubbleSort,
    bubbleSortOpt,
    selectionSort,
    insertionSort,
};