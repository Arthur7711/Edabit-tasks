// Create a function that takes in an array of numbers and returns the sum of its cubes.
// If given an empty array, return 0

function sumOfCubes(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  arr.forEach((el, i, arr) => {
    sum += el ** arr.length;
  });
  return sum;
}

console.log(sumOfCubes([1, 2, 3]));
