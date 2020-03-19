// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

module.exports = reverse;

// Array.reversed() method solution
// function reverse(str) {
//     return str
//       .split("")
//       .reverse()
//       .join("");
//   }

// For loop solution old style i--
// function reverse(str) {
//     var reversed = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }

//     return reversed;
//   }
