// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;

// split and for loop
// function capitalize(str) {
//     var strUp = str.split(" ");
//     var result = [];

//     for (let item of strUp) {
//       var letter = item[0].toUpperCase();
//       result.push(item.replace(item[0], letter));
//     }

//     return result.join(" ");
//   }

// slice solution
// function capitalize(str) {
//     const words = [];
//     for (let word of str.split(" ")) {
//       words.push(word[0].toUpperCase() + word.slice(1));
//     }

//     return words.join(" ");
//   }
