// Square Every Digit
// Create a function that squares every digit of a number.
// The function receives an integer and must return an integer.
console.log(squareDigits(9119)); //➞ 811181
console.log(squareDigits(2483)); //➞ 416649
console.log(squareDigits(3212)); //➞ 9414

function squareDigits(n) {
  return Number(
    String(n)
      .split("")
      .reduce((cur, nex) => {
        return (cur += nex ** 2);
      }, "")
  );
}
