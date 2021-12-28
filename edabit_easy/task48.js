// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
  let min1 = Math.min(...arr1);
  let min2 = Math.min(...arr2);
  let max1 = Math.max(...arr1);
  let max2 = Math.max(...arr2);
  if (min2 < min1 && max1 < max2) {
    return true;
  }
  return false;
}
console.log(canNest([1, 2, 3, 4], [0, 6]));
