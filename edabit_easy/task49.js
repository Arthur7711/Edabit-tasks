// Create a function that takes two arrays and insert the second array in the middle of the first array.

function tuckIn(arr1, arr2) {
  let arr = [arr1[0], ...arr2, arr1[1]];
  return arr;
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
