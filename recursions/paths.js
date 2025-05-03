// Travelling Salesman Problem
// A salesman has a number of cities to visit. He wants to calculate the total number of possible paths he could take, visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.
// If we have cities A, B and C, possible paths would be:
// A -> B -> C
// A -> C -> B
// B -> A -> C
// B -> C -> A
// C -> B -> A
// C -> A -> B
// ... which gives us 6 as the possible number of paths.
// Examples

console.log(paths(4)); // ➞ 24
console.log(paths(1)); // ➞ 1
console.log(paths(9)); // ➞ 362880

// fastest way
function fastestPaths(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

// recursion verion
function paths(num, total = 1) {
  if (num <= 1) {
    return total;
  }
  const val = num * total;
  return paths(num - 1, val);
}
