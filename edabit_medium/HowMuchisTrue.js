// Create a function which returns the number of true values there are in an array.
const countTrue = (booleans) => {
  return booleans.filter((el) => el === true).length;
};
console.log(countTrue([true, false, false, true, false]))
console.log(countTrue([]))
