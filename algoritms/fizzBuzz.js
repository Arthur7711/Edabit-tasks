// The Fizz Buzz Test
// Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.
// Notes
// Make sure to return an array.

// Example
console.log(fizzBuzz(10)); // ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
console.log(fizzBuzz(15)); // ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
function fizzBuzz(num) {
  const result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      result.push("FizzBuzz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else {
      result.push(i);
    }
  }
  return result
}
