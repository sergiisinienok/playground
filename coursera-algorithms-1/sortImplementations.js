const exchangeArrayElements = (input, i, j) => {
    const tmp = input[i];
    input[i] = input[j];
    input[j] = tmp;
};

const mergeArrays = (input, auxiliary, lo, mid, hi) => {
    for (let k = lo; k <= hi; k++) {
        auxiliary[k] = input[k];
    }

    let i = lo;
    let j = mid + 1;

    for (let k = lo; k <= hi; k++) {
        if (i > mid) {
            input[k] = auxiliary[j++];
        } else if (j > hi) {
            input[k] = auxiliary[i++];
        } else if (auxiliary[j] < auxiliary[i]) {
            input[k] = auxiliary[j++];
        } else {
            input[k] = auxiliary[i++];
        }
    }
};

// Cost model
// | algorithm      | Passes | Data Movements | Memory  |
// | Bubble Sort    |   N^2  |  N^2           |    N    |
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
// | algorithm          | Passes | Data Movements            | Memory  |
// | Bubble Sort Opt    |   N^2  |  N^2 (N in best case)     |    N    |
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
// | algorithm         | Passes | Data Movements  | Memory  |
// | Selection Sort    |   N^2  |  N              |    N    |
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
// | algorithm         | Passes                                 | Data Movements                        | Memory  |
// | Insertion Sort    |   N^2 (N for partially sorted arrray)  |  N^2 (N for partially sorted arrray)  |    N    |
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
// | algorithm         | Passes   | Data Movements  | Memory  |
// | Shell Sort        |   N^3/2  |  N??            |    N    |
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

// Cost model (Classic recursive implementation)
// This sorting methid is not an in-place sorting
// because it requires an additional auxiliary array in order to sort items
// | algorithm         | Passes    | Data Movements  | Memory  |
// | Merge Sort        |   N lg N  |  N lg N         |    2N   |
const mergeSort = (input) => {
    const sort = (input, auxiliary, lo, hi) => {
        if (hi <= lo) return;

        const mid = parseInt(lo + (hi - lo) / 2);

        sort(input, auxiliary, lo, mid);
        sort(input, auxiliary, mid + 1, hi);
        mergeArrays(input, auxiliary, lo, mid, hi);
    }

    const auxiliary = new Array(input.length);
    sort(input, auxiliary, 0, input.length - 1);

    return input;
};

// Cost model (Bottpm Up implementation NON RECURSIVE)
// This sorting methid is not an in-place sorting
// because it requires an additional auxiliary array in order to sort items
// | algorithm         | Passes    | Data Movements  | Memory  |
// | Merge Sort        |   N lg N  |  N lg N         |    2N   |
const bottomUpMergeSort = (input) => {
    const inputLength = input.length;

    const auxiliary = new Array(inputLength);

    for (let sz = 1; sz < inputLength; sz = 2 * sz) {
        for (let lo = 0; lo < inputLength - sz; lo += 2 * sz) {
            const mid = lo + sz - 1;
            const hi = Math.min(lo + sz + sz - 1, inputLength - 1);
            mergeArrays(input, auxiliary, lo, mid, hi);
        }
    }

    return input;
};

module.exports = {
    bubbleSort,
    bubbleSortOpt,
    selectionSort,
    insertionSort,
    shellSort,
    mergeSort,
    bottomUpMergeSort,
};