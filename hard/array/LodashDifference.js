// Learn Lodash: _.difference, Find the Difference in Arrays
// According to the lodash documentation, _.difference(array, [values]) creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
// If you wanted to use this function in the real world you would just import lodash and use it but this challenge requires you to write your own version using vanilla javascript. Hopefully this enables you to better understand how the function works .
// Arguments
// array (Array): The array to inspect.
// [values] (...Array): The any number of arrays containing the values to exclude.
// Returns
// (Array): Returns the new array of filtered values.
console.log(difference([2, 1], [2, 3])); // => [1]
console.log(difference(["banana", 55, "orange", "apple"], ["orange", "apple"])); // => ["banana"]

function difference(checkingArray, includedArray) {
  const includedSet = new Set(includedArray);
  const result = checkingArray.filter((el) => !includedSet.has(el));
  return result;
}
