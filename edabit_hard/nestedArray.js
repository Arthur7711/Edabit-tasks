// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array.
// An empty array should return 0.

function getLength(array, count = 0) {
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      count += 1;
    } else {
      return getLength(array[i], count);
    }
  }
  return count;
}

getLength([1, [2, 3]]);
