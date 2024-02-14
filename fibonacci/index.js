// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// RECURSIVE SOLUTION BUT BAD PERFORMANCE, EXPONENTIAL RUN TIME
// function fib(n) {
//     if (n < 2) {
//         return n;
//     }
//     return fib(n - 1) + fib(n - 2);
// }

//AN EXAMPLE OF MEMOIZATION
function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    };
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

// function fib(n) {
//     let result = [];
//     for (let i = 0; i <= n; i++) {
//         if (i > 1) {
//             result.push(result[i - 1] + result[i - 2]);
//         } else {
//             result.push(i);
//         }
//     }
//     return result[n];
// }

module.exports = fib;
