// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
// Create a function that returns the total number of boomerangs in an array.
// [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.

const countBoomerangs = (digits) => {
  let results = [];
  for (let i = 1; i < digits.length - 2; i++) {
    if (digits[i - 1] === digits[i + 1] && digits[i] !== digits[i + 1]) {
      results.push([digits[i - 1], digits[i], digits[i + 1]]);
    }
  }
  return results.length
};

countBoomerangs([9, 5, 9, 5, 1, 1, 1])