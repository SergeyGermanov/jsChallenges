// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
}

module.exports = fib;

//while loop solution
// function fib(n) {
//     var a = 1;
//     var b = 0;
//     var temp = 0;

//     while (n > 0) {
//       temp = a;
//       a = a + b;
//       b = temp;
//       n--;
//     }
//     return b;
//   }
