// Leetcode - Find Words That Can Be Formed by Characters
// This solution will work for english lowercase letters only
// It is O(n^2) time wise, which is pretty bad

// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation:
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation:
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

// Note:

// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// All strings contain lowercase English letters only.

'use strict';
// const words = ["cat","bt","hat","tree"];
// const chars = "atach";

// const words = ["hello","world","leetcode"];
// const chars = "welldonehoneyr";

const words = ["dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin","ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb","ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl","boygirdlggnh","xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx","nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop","hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx","juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr","lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo","oxgaskztzroxuntiwlfyufddl","tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp","qnagrpfzlyrouolqquytwnwnsqnmuzphne","eeilfdaookieawrrbvtnqfzcricvhpiv","sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz","yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue","hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv","cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo","teyygdmmyadppuopvqdodaczob","qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs","qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs"];
const chars = "usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp";

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let goodWordsLengthSum = 0;

    const charsUsageMapTemplate = {};

    for (let char of chars) {
        charsUsageMapTemplate[char] = (++charsUsageMapTemplate[char] || 1);
    }

    for (let wordPosition = 0; wordPosition < words.length; wordPosition++) {

        const word = words[wordPosition];

        if (word.length > chars.length) continue;

        if(isGoodWord(word, charsUsageMapTemplate)) goodWordsLengthSum += word.length;
    }

    return goodWordsLengthSum;
};

const isGoodWord = (word, charsUsageMapTemplate) => {
    const charsUsageMap = {...charsUsageMapTemplate};

    for (let wordCharIndex = 0; wordCharIndex < word.length; wordCharIndex++) {

        const wordChar = word[wordCharIndex];

        if (!charsUsageMap[wordChar] || charsUsageMap[wordChar] === 0) return false;

        charsUsageMap[wordChar]--;
    }

    return true;
}

console.log('Good words length sum is ' + countCharacters(words, chars) );