// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array.
// getLength([1, [2, 3]]) ➞ 3
// getLength([1, [2, [3, 4]]]) ➞ 4
// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
// getLength([1, [2], 1, [2], 1]) ➞ 5
const getLength = (arr) => {
  let count = 0;
  if (!arr.length) return count;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (Array.isArray(el)) {
      count += getLength(el);
    } else {
      count++;
    }
  }
  return count;
};
console.log(getLength([1, [2], 1, [2], 1]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
