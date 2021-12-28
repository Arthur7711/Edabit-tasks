// Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(arr) {
  arr.forEach((el) => {
    if (typeof el !== "number") {
      return false;
    }
  });
  return arr[0];
}
getFirstValue([1, 2, 3]);
