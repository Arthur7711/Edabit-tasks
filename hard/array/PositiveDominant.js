// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.
// 0 counts as neither a positive nor a negative value.

function isPositiveDominant(digits) {
  const uniqueItems = digits.filter((el, i) => digits.indexOf(el) === i);
  let positiveCount = 0;
  let negativeCount = 0;
  uniqueItems.forEach((el) => {
    if (el > 0) {
      positiveCount += 1;
    } else if (el < 0) {
      negativeCount += 1;
    }
  });
  return positiveCount > negativeCount;
}

isPositiveDominant([1, 1, 1, 1, -3, -4]); // ➞ false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).

isPositiveDominant([5, 99, 832, -3, -4])// ➞ true

isPositiveDominant([5, 0])// ➞ true

isPositiveDominant([0, -4, -1])// ➞ false
