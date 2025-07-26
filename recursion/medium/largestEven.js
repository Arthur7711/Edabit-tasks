// Find the Largest Even Number
// Write a function that finds the largest number in an array nums that is also even. If there is no even number, return -1.
// Examples
console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13])); // ➞ 10
console.log(largestEven([1, 3, 5, 7])); // ➞ -1
console.log(largestEven([0, 19, 18973623])); // ➞ 0

function largestEven(arr, i = 0, max = -1) {
  if (i === arr.length) return max;
  if (arr[i] % 2 === 0 && arr[i] > max) {
    max = arr[i];
  }
  return largestEven(arr, i + 1, max);
}
