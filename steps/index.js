// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

module.exports = steps;
// if statement and nested loops steps solution
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

//nested for loops
// function steps(n) {
//   var step = "";

//   for (var i = 0; i < n; i++) {
//     var empty = "";
//     step += "#";
//     for (var j = 0; j < n - i - 1; j++) {
//       empty += " ";
//     }
//     console.log(step + empty);
//   }
// }
