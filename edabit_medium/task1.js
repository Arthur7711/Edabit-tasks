// Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
  let count = 0;
  arr.forEach((element) => {
    if (element === true) {
      count += 1;
    }
  });
  return count;
}
countTrue([true, false, false, true, false]);
