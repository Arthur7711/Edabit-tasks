// Write a function that calculates the factorial of a number recursively.
function factorial(num, fac = 1) {
  if (num === 0 || num === 1) {
    return fac;
  }
  fac *= num;
  num--;
  return factorial(num, fac);
}

console.log(factorial(5));
