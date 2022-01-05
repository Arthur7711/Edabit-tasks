// Given a number, n, return a function which adds n to the number passed to it.

function add(num1) {
  return function (num2) {
    return num1 + num2;
  };
}
add(10)(20);
