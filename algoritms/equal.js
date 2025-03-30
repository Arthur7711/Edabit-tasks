// Equality of 3 Values
// Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.
// Examples

console.log(equal(3, 4, 3)); // ➞ 2
console.log(equal(1, 1, 1)); //➞ 3
console.log(equal(3, 4, 1)); // ➞ 0

function equal() {
  const args = Array.from(arguments);
  const archive = {};
  const setArchive = new Set();
  let sum = 0;
  args.forEach((el) => {
    if (setArchive.has(el)) {
      archive[el] = archive[el] + 1;
    } else {
      setArchive.add(el), (archive[el] = 1);
    }
  });
  for (const key in archive) {
    const count = archive[key];
    if (count > 1) {
      sum += count;
    }
  }
  return sum;
}
