// // CODE STARTS HERE
// const readlineSync = require("readline-sync");
// // have an 2 dimensional array with coordinates
// // place the pacman with coordinates and direction
// // move is one in direction it is facing
// // left and right is rotate 90 degrees in that direction
// // report is the coordinates and direction it is facing
// // create a 2d array with a loop in a loop, just using this for visualization
// const array = [
//   ["0, 0", "1, 0", "2, 0", "3, 0", "4, 0"],
//   ["0, 1", "1, 1", "2, 1", "3, 1", "4, 1"],
//   ["0, 2", "1, 2", "2, 2", "3, 2", "4, 2"],
//   ["0, 3", "1, 3", "2, 3", "3, 3", "4, 3"],
//   ["0, 4", "1, 4", "2, 4", "3, 4", "4, 4"],
// ];
// // choose a coordinate, place the pacman
// const x = readlineSync.question("May i have the x coordinate?");
// const y = readlineSync.question("May i have the y coordinate?");
// const coordinate = array[y][x];
// console.log("your position is " + coordinate);
// // choose a direction, need to have variable inputs here, move the pacman
// let directions = ["north", "east", "south", "west"];
// let facingDirection = readlineSync.keyInSelect(
//   directions,
//   "What direction to face?"
// );
// console.log(
//   "you are facing" + " " + directions[facingDirection] + " at " + coordinate
// );
// const options = ["yes", "no"];
// const move = readlineSync.keyInSelect(options, "Do you want to move?");
// // need a statement here to make sure the limit cannot > 4 || < 0
// if (options[move] === "yes" && directions[facingDirection] === "north") {
//   // here i need to change the coordinates accordingly
//   const northCoordinate = array[parseInt(y) - 1][x];
//   console.log(
//     " you will be moved one position " +
//       directions[facingDirection] +
//       ", your position is now " +
//       northCoordinate
//   );
// } else if (options[move] === "yes" && directions[facingDirection] === "south") {
//   const southCoordinate = array[parseInt(y) + 1][x];
//   console.log(
//     " you will be moved one position " +
//       directions[facingDirection] +
//       ", your position is now " +
//       southCoordinate
//   );
// } else if (options[move] === "yes" && directions[facingDirection] === "west") {
//   const westCoordinate = array[y][parseInt(x) - 1];
//   console.log(
//     " you will be moved one position " +
//       directions[facingDirection] +
//       ", your position is now " +
//       westCoordinate
//   );
// } else if (options[move] === "yes" && directions[facingDirection] === "east") {
//   const eastCoordinate = array[y][parseInt(x) + 1];
//   console.log(
//     " you will be moved one position " +
//       directions[facingDirection] +
//       ", your position is now " +
//       eastCoordinate
//   );
// } else if (options[move] === "no") {
//   console.log(
//     "Your report is: you are facing " +
//       directions[facingDirection] +
//       " at " +
//       coordinate
//   );
// }

// const rotateOptions = ["left", "right"];
// const rotate = readlineSync.keyInSelect(
//   rotateOptions,
//   "Do you want to turn left or right?"
// );
// // facingDirection 0 = N ,1 = E ,2 = S ,3 = W
// if (rotate != -1) {
//   if (rotate == 0) {
//     if (facingDirection == 0) facingDirection = 3;
//     else facingDirection = -facingDirection;
//   }
//   if (rotate == 1) {
//     if (facingDirection == 3) facingDirection = 0;
//     else facingDirection = +facingDirection;
//   }
// }
// console.log("you are now facing " + directions[facingDirection]);
