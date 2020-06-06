const bubbleSort = (input) => {
    const inputLength = input.length;
    for (let i = 0; i < inputLength; i++) {
        for (let j = 0; j < inputLength; j++) {
            if (input[j] > input[j + 1]) {
                const tmp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = tmp;
            }
        }
    }

    return input;
};

const bubbleSortOpt = (input) => {
    const inputLength = input.length;
    let wasSwapped;

    do {
        wasSwapped = false;
        for (let i = 0; i < inputLength; i++) {
            if (input[i] > input[i + 1]) {
                const tmp = input[i];
                input[i] = input[i + 1];
                input[i + 1] = tmp;
                wasSwapped = true;
            }
        }
    } while (wasSwapped);

    return input;
};

module.exports = {
    bubbleSort,
    bubbleSortOpt
};