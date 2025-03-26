// Travelling Salesman Problem
// A salesman has a number of cities to visit. He wants to calculate the total number of possible paths he could take, visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.
// If we have cities A, B and C, possible paths would be:
console.log(paths(4)); //➞ 24
console.log(paths(1)); //➞ 1
console.log(paths(9)); //➞ 362880
function paths(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
