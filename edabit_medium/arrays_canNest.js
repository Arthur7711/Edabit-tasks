// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
const canNest = (arr1, arr2) => {
  const max1 = Math.max(...arr1);
  const max2 = Math.max(...arr2);
  const min1 = Math.min(...arr1);
  const min2 = Math.min(...arr2);
  return max1 < max2 && min2 < min1;
};

console.log(canNest([1, 2, 3, 4], [0, 6]));
