// Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // ➞ "Boom!"
// 7 contains the number seven.

console.log(sevenBoom([8, 6, 33, 100])); // ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

console.log(sevenBoom([2, 55, 60, 97, 86])); // ➞ "Boom!"
// 97 contains the number seven.
function sevenBoom(numbers) {
  const finder = numbers.find((el) => String(el).includes("7"));
  if (finder) return "Boom!";
  return "there is no 7 in the array";
}
