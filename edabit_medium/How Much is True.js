// Create a function which returns the number of true values there are in an array.
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

function countTrue(arr) {
  if (!arr.length) {
    return 0;
  }
  return arr.reduce((acc, next) => {
    if (next) acc += 1;
    return acc
  }, 0);
}
console.log(countTrue([true, false, false, true, false]));
