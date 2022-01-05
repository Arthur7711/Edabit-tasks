// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

function reverseImage(arr) {
  return arr.map((elem) => {
    return elem.map((el) => {
      if (el === 0) {
        return 1;
      } else if (el === 1) {
        return 0;
      }
    });
  });
}
reverseImage([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]);
