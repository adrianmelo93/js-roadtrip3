// Video 2.1 accompanies this exercise

// Examine the code below (i.e., manually trace it), in your head determine
// the final value of the result variable, and alert the value as a number
// using one line of code.
//
//  - You must give only 1 number literal as the argument to alert.
//  - Do not do any calculations. So, for example, don’t use *.
//    (Definitely do some math in your head, though!)
//  - Don’t pass in a string.
//  - The number must be a whole number. No decimal points.
//
//  (This challenge will give you practice following code with closures,
//  and allow you to understand it better.)

function mystery() {
  var secret = 6;
  function mystery2(multiplier) {
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery();
var result = hidden(3);



// Answer:
alert(54);

// Answer breakdown:
var hidden = function mystery() {
  var secret = 6;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
};

var hidden = function mystery() {
  function mystery2(multiplier) {
    multiplier *= 3;
    return 6 * multiplier;   // secret = 5;
  }
};

var hidden = function mystery() {
  function mystery2(multiplier) {
    return 6 * (multiplier * 3);
  }
};

var hidden = 6 * (multiplier * 3);

var hidden = 18 * multiplier;

var result = hidden(3);

var result = 18 * 3;

var result = 54;
