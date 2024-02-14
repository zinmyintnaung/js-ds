// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// function vowels(str) {
//     let num = 0;
//     let vowels = ["a", "e", "i", "o", "u"];
//     let chars = str.split("");
//     for (let char of chars) {
//         if (vowels.includes(char.toLowerCase())) {
//             num++;
//         }
//     }
//     return num;
// }

module.exports = vowels;
