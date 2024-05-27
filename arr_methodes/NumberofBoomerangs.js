// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
// Create a function that returns the total number of boomerangs in an array.
// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// [1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
// countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
// countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1
// countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
// [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.
function countBoomerangs(arr) {
  if (arr.length < 3) return "incorrect data";
  let count = 0;
  arr.forEach((el, i, array) => {
    if (
      i > 0 &&
      i < array.length - 1 &&
      el !== array[i - 1] &&
      el !== array[i + 1] &&
      array[i - 1] === array[i + 1]
    ) {
      count++;
    }
  });
  return count;
}
console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]))
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]))