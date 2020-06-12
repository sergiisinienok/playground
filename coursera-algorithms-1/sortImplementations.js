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
// | algorithm      | Passes | Data Movements | Memory  | Stable?    |
// | Bubble Sort    |   N^2  |  N^2           |    N    |   N        |
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
// | algorithm          | Passes | Data Movements            | Memory  | Stable?    |
// | Bubble Sort Opt    |   N^2  |  N^2 (N in best case)     |    N    |    N       |
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
// | algorithm         | Passes | Data Movements  | Memory  | Stable?    |
// | Selection Sort    |   N^2  |  N              |    N    |   N        |
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
// | algorithm         | Passes                                 | Data Movements                        | Memory  | Stable?    |
// | Insertion Sort    |   N^2 (N for partially sorted arrray)  |  N^2 (N for partially sorted arrray)  |    N    |     Y      |
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
// | algorithm         | Passes   | Data Movements  | Memory  | Stable?    |
// | Shell Sort        |   N^3/2  |  N??            |    N    |     N      |
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
// | algorithm         | Passes    | Data Movements  | Memory  | Stable?    |
// | Merge Sort        |   N lg N  |  N lg N         |    2N   |    Y       |
const mergeSort = (input) => {
    const sort = (input, auxiliary, lo, hi) => {
        if (hi <= lo) return;

        const mid = parseInt(lo + (hi - lo) / 2);

        sort(input, auxiliary, lo, mid);
        sort(input, auxiliary, mid + 1, hi);
        mergeArrays(input, auxiliary, lo, mid, hi);
    };

    const auxiliary = new Array(input.length);
    sort(input, auxiliary, 0, input.length - 1);

    return input;
};

// Cost model (Bottpm Up implementation NON RECURSIVE)
// This sorting methid is not an in-place sorting
// because it requires an additional auxiliary array in order to sort items
// | algorithm         | Passes    | Data Movements  | Memory  | Stable?    |
// | Merge Sort        |   N lg N  |  N lg N         |    2N   |    Y       |
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

// Cost model (classic implementation, goes N^2 when has duplicate keys)
// | algorithm         | Passes    | Data Movements  | Memory  | Stable?    |
// | Quick Sort        |   N lg N  |  N lg N         |   N     |    N       |
const quickSort = (input) => {
    const partitionArray = (input, lo, hi) => {
        let i = lo;
        let j = hi + 1;

        while (true) {
            while (input[++i] < input[lo]) {
                if (i == hi) break;
            }

            while (input[lo] < input[--j]) {
                if (j == lo) break;
            }

            if (i >= j) break;

            exchangeArrayElements(input, i, j);
        }

        exchangeArrayElements(input, lo, j);

        return j;
    };

    const sort = (input, lo, hi) => {
        if (hi <= lo) return;

        const j = partitionArray(input, lo, hi);

        sort(input, lo, j - 1);
        sort(input, j + 1, hi);
    };

    // Need to make sure the input array is randomly shuffled for the best performance of sorting
    const lo = 0;
    const hi = input.length - 1;
    sort(input, lo, hi);

    return input;
};

// Cost model
// 3 Way Quick Sort improves quicksort in presence of duplicate keys to be linear
// | algorithm               | Passes    | Data Movements  | Memory  | Stable?    |
// | 3 Way Quick Sort        |   N lg N  |  N lg N         |   N     |    N       |
const threeWayQuickSort = (input) => {
    const sort = (input, lo, hi) => {
        if (hi <= lo) return;

        let lt = lo;
        let gt = hi;
        let i = lo;
        const partitionKey = input[lo];

        while (i <= gt) {
            if (input[i] < partitionKey) {
                exchangeArrayElements(input, lt++, i++);
            } else if (input[i] > partitionKey) {
                exchangeArrayElements(input, i, gt--);
            } else i++;
        }

        sort(input, lo, lt - 1);
        sort(input, gt + 1, hi);
    };

    // Need to make sure the input array is randomly shuffled for the best performance of sorting
    const lo = 0;
    const hi = input.length - 1;
    sort(input, lo, hi);

    return input;
};

// Cost model
// N lg N is guaranteed, in-place sorting. This combination makes it unique (in-place with N lg N guarantee)
// | algorithm        | Passes    | Data Movements  | Memory  | Stable?    |
// | Heap Sort        |   N lg N  |  N lg N         |   N     |    N       |
const heapSort = (input) => {
    const sink = (input, nodeIndex, heapSize) => {
        while (2 * nodeIndex <= heapSize) {
            let j = 2 * nodeIndex;
            if ((j < heapSize) && (input[j] < input[j + 1])) j++;
            if (!(input[nodeIndex] < input[j])) break;
            exchangeArrayElements(input, nodeIndex, j);
            nodeIndex = j;
        }
    };

    const constructMaxHeapBottomUp = (input) => {
        const heapSize = input.length - 1;
        for (let k = parseInt(heapSize / 2); k >= 1; k--) {
            sink(input, k, heapSize);
        }
    };

    const sort = (input) => {
        let heapSize = input.length - 1;

        while (heapSize > 1) {
            exchangeArrayElements(input, 1, heapSize);
            sink(input, 1, --heapSize);
        }
    };

    // We'll assume the indexes are 1 based, instead of 0 based, to simplify the index math and add clarity
    // by adding one more element at [0] as undefined
    input.unshift(undefined);

    constructMaxHeapBottomUp(input);
    sort(input);

    // Delete unnecessary undefined at [0]
    input.shift();

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
    quickSort,
    threeWayQuickSort,
    heapSort
};