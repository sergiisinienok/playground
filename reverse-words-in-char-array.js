
// Write an algorithm which reverses the letters in words, like:
// Input: I love Taxify
// Output:I evol yfixaT
// Input is character array (not string) and output should also be character array. Function needs to work in-place, modify the input array itself. Don't use any extra arrays, string objects or language provider libraries. Use of temporary variables is allowed.
// Example in Java:
// Input: char[] input = ['I', ' ', 'l','o','v','e',' ','T','a','x','i','f','y'];
// public static char[] reverseWords(char [] input) {
// 	/** write your code here */
// 	return input;
// }
// Output: ['I', ' ', 'e','v','o','l',' ','y','f','i','x','a','T'];

// Example is in Java, but choice of programming language is free. Please write the code in the web browser, don't test or run it in your IDE.
// Extra: you will earn extra points if you write unit tests for this function.

// Reversing letters in a char array
// INPUT: ['I',' ','l','o','v','e',' ','T','a','x','i','f','y'];
// OUTPUT: ['I',' ','e','v','o','l',' ','y','f','i','x','a','T'];
//
// Preconditions:
// modify and return the input array
// Don't use any extra arrays, string objects or language provider libraries.
// Use of temporary variables is allowed.

const WORD_SEPARATOR = ' ';
const testInput = ['I', ' ', 'l','o','v','e',' ','T','a','x','i','f','y'];

const reverseWordsInCharArray = (inputCharArray) => {
    let currentIndex = 0;

    while (currentIndex < inputCharArray.length) {
        const startOfTheWord = findStartOfTheWord(inputCharArray, currentIndex);
        const wordLength = findWordLength(inputCharArray, startOfTheWord);

        if (wordLength > 1) {
            currentIndex = reverseTheWord(inputCharArray, startOfTheWord, wordLength);
        }

        currentIndex++;
    }

    return inputCharArray;
};

const findStartOfTheWord = (inputCharArray, currentIndex) => {
    let startOfTheWord = 0;

    for (let i = currentIndex; i < inputCharArray.length; i++) {
        const currentChar = inputCharArray[i];

        if (currentChar === WORD_SEPARATOR) {
            startOfTheWord = i + 1;
            break;
        }
    }

    return startOfTheWord;
}

const findWordLength = (inputCharArray, startOfTheWord) => {
    let wordLength = 0;

    for (let i = startOfTheWord; i < inputCharArray.length; i++) {
        const currentChar = inputCharArray[i];

        if (currentChar === WORD_SEPARATOR) {
            break;
        }

        wordLength++;
    }

    return wordLength;
};

const reverseTheWord = (inputCharArray, startOfTheWord, wordLength) => {
    if ((startOfTheWord + wordLength) > inputCharArray.length) {
        throw new Error('Out of boundaries for inputCharArray');
    }

    const endIndex = startOfTheWord + wordLength - 1;
    let start = startOfTheWord;
    let end = endIndex;

    while (start < end) {
        const firstCharOfTheWord = inputCharArray[start];
        const lastCharOfTheWord = inputCharArray[end];

        inputCharArray[start] = lastCharOfTheWord;
        inputCharArray[end] = firstCharOfTheWord;

        start++;
        end--;
    }

    return endIndex;
};

console.log('INPUT: ', testInput);
console.log('OUTPUT: ', reverseWordsInCharArray(testInput));

// ==============TESTS=========================================
const findStartOfTheFirsReversableWord = () => {
    // Arrange
    const expected = 2; // Start index of the first reversable word in testInput
    const input = testInput;
    const currentIndex = 0;

    // Act
    const actual = findStartOfTheWord(input, currentIndex);

    // Assert
    return expected === actual;
};

const findStartOfTheSecondReversableWord = () => {
    // Arrange
    const expected = 7; // Start index of the second reversable word in testInput
    const input = testInput;
    const currentIndex = 6;

    // Act
    const actual = findStartOfTheWord(input, currentIndex);

    // Assert
    return expected === actual;
};

const findWordLengthOfTheFirsReversableWord = () => {
    // Arrange
    const expected = 4; // ['l','o','v','e'].length === 4
    const input = testInput;
    const startOfTheWord = 2; // Start index of the first reversable word in testInput

    // Act
    const actual = findWordLength(input, startOfTheWord);

    // Assert
    return expected === actual;
};

const reeverseTheLoveCharSequenceAkaWord = () => {
    // Arrange
    const input = ['l','o','v','e'];
    const startOfTheWord = 0;
    const wordLength = 4;
    const expected = ['e','v','o','l'];

    // Act
    const actual = reverseTheWord(input, startOfTheWord, wordLength);

    // Assert
    return expected === actual; // Need to properly compare arrays here, ommited to illustrate the idea
};

const reverseTestInputAndValidateResult = () => {
    // Arrange
    const input = ['I', ' ', 'l','o','v','e',' ','T','a','x','i','f','y'];
    const expected = ['I', ' ', 'e','v','o','l',' ','y','f','i','x','a','T'];

    // Act
    const actual = reverseWordsInCharArray(input);

    // Assert
    return expected === actual; // Need to properly compare arrays here, ommited to illustrate the idea
};
