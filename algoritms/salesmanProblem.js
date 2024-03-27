// A salesman has a number of cities to visit. He wants to calculate the total number of possible paths he could take, visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.
// If we have cities A, B and C, possible paths would be:
// A -> B -> C
// A -> C -> B
// B -> A -> C
// B -> C -> A
// C -> B -> A
// C -> A -> B
// paths(4) ➞ 24
// paths(1) ➞ 1
// paths(9) ➞ 362880
function paths(n) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    count *= i;
  }
  return count;
}
