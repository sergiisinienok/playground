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

// Cost model (Accurate model has not yet been discovered)
// | algorithm         | Passes   | Data Movements  |
// | Shell Sort        |   N^3/2  |  N??            |
const shellSort = (input) => {
    const inputLength = input.length;

    let hFactor = 1;

    // Compute H Factor using 3x + 1 increment sequence
    while (hFactor < inputLength/3) {
        hFactor = 3 * hFactor + 1; // 1, 4, 13, 40, 121, 364, ...
    }

    // H Sort the array using computed hFactor
    while (hFactor >= 1) {
        // h-sort the array.
        for (let i = hFactor; i < inputLength; i++) {
            for (let j = i; (j >= hFactor) && (input[j] < input[j - hFactor]); j -= hFactor) {
                exchangeArrayElements(input, j, j - hFactor);
            }
        }

        hFactor = parseInt(hFactor / 3);
    }

    return input;
};

module.exports = {
    bubbleSort,
    bubbleSortOpt,
    selectionSort,
    insertionSort,
    shellSort,
};