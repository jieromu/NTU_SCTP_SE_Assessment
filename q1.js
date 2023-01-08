/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y) {
  let my_x = parseInt(x);
  let my_y = parseInt(y);
  // Task 1: Add code here
  if (isNaN(my_x) || isNaN(my_y)) {
    return "-1";
  } else {
    x = my_x + my_y;
    y = x - my_y;
    x = x - y;
    return "X: " + x + ", Y: " + y;
  }
}

// Task 2: Add code here
module.exports = swap;
let input_x = prompt("Enter the first numeric variable: ");
let input_y = prompt("Enter the second numeric variable: ");
console.log(swap(input_x, input_y));