// // Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.
// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]
// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]
// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]
// commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

// function commonElements(arr1, arr2) {
//   return arr1.filter((el) => arr2.find((item) => item === el));
// }
// console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]));

function commonElements(arr1, arr2) {
  const setArray = new Set(arr1);
  return arr2.filter((el) => setArray.has(el));
}
console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]));
