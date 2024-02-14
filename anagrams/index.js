// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function buildCharMap(characters) {
    let obj = {};
    for (let character of characters) {
        obj[character] = obj[character] + 1 || 1;
    }
    return obj;
}

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;
}
// function anagrams(stringA, stringB) {
//     let cleanA = stringA.replace(/[^\w]/g, "").toLowerCase();
//     let cleanB = stringB.replace(/[^\w]/g, "").toLowerCase();

//     return (
//         cleanA.split("").sort().join("") === cleanB.split("").sort().join("")
//     );
// }

module.exports = anagrams;
