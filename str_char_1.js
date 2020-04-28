
// Leetcode - Find Words That Can Be Formed by Characters
// This solution will work for any characters in both words and chars
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
const goodCharDoesNotFound = -1;
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let goodWordsLengthSum = 0;
    let good_words = [];
    words.forEach(word => {
        let good_word_chars_count = 0;
        const chars_usage = new Array(chars.length).fill(false);
        console.log(word);

        for (let word_char_index = 0; word_char_index < word.length; word_char_index++ ) {
            const word_char = word[word_char_index];

            if (chars.indexOf(word_char) === -1) {
                console.log('Bad word char!');
                return;
            }

            const good_char_index = isGoodCharsLookupRecursive(word_char, 0, chars_usage, chars);

            if ( good_char_index === goodCharDoesNotFound ) {
                console.log('goodCharDoesNotFound');
                return;
            }

            chars_usage[good_char_index] = true;
            good_word_chars_count++;
        }

        if (word.length === good_word_chars_count) {
            good_words.push(word);
            goodWordsLengthSum += word.length;
            console.log('Good word!');
        }
    });

    return goodWordsLengthSum;
};

function isGoodCharsLookupRecursive(word_char, start_index, chars_usage) {

    for (let good_char_index = start_index; good_char_index < chars.length; good_char_index++ ) {

        if (chars_usage[good_char_index] && (chars[good_char_index] === word_char)) {
            if (good_char_index < chars.length - 1) {
                return isGoodCharsLookupRecursive(word_char, ++good_char_index, chars_usage, chars );
            } else return goodCharDoesNotFound;
        }

        if (chars[good_char_index] === word_char) {
            if (!chars_usage[good_char_index]) {
                return good_char_index;
            }
        }
    }

    return goodCharDoesNotFound;
}

console.log('Good words length sum is ' + countCharacters(words, chars) );