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
// Notes
// Inspired by a video from Dr. Peter Uelkes.
// This challenge is describing a factorial.
// Examples
console.log(paths(4)); //➞ 24
console.log(paths(1)); //➞ 1
console.log(paths(9)); //➞ 362880

function paths(n, data = 1) {
  if (n <= 1) return data;
    data *= n;
  return paths(n - 1, data);
}