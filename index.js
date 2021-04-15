const readlineSync = require("readline-sync");
// choose a coordinate, place the pacman
let x = parseInt(readlineSync.question("May i have the x coordinate?"));
let y = parseInt(readlineSync.question("May i have the y coordinate?"));
console.log(`your position is ${x},${y}\n`);
// choose a direction, need to have variable inputs here, move the pacman
const directions = ["north", "east", "south", "west"];
let facingDirection = readlineSync.keyInSelect(
  directions,
  "What direction to face?"
);
console.log(`you are facing ${directions[facingDirection]} at ${x},${y}\n`);
const options = ["yes", "no"];
const move = readlineSync.keyInSelect(options, "Do you want to move?");
if (move == 0) {
  switch (facingDirection) {
    case 0:
      y = y == 4 ? y : y + 1;
      break;
    case 1:
      x = x == 4 ? x : x + 1;
      break;
    case 2:
      y = y == 0 ? y : y - 1;
      break;
    case 3:
      x = x == 0 ? x : x - 1;
      break;
  }
}
console.log(`you are facing ${directions[facingDirection]} at ${x},${y}\n`);
const rotateOptions = ["left", "right"];
const rotate = readlineSync.keyInSelect(
  rotateOptions,
  "Do you want to turn left or right?"
);
if (rotate != -1) {
  if (rotate == 0) {
    if (facingDirection == 0) facingDirection = 3;
    else facingDirection = facingDirection - 1;
  }
  if (rotate == 1) {
    if (facingDirection == 3) facingDirection = 0;
    else facingDirection = facingDirection + 1;
  }
}
console.log(`you are facing ${directions[facingDirection]} at ${x},${y}\n`);
