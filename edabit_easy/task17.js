// Create a function that takes a number as an argument and returns the highest digit in that number.

function highestDigit(num) {
  let str = String(num);
  const arr = str.split("");
  const max = Math.max(...arr);
  return max;
}

console.log(highestDigit(123));
