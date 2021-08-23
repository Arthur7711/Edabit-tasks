// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
function findLargestNums(arr) {
  let arr2 = [];
  arr.forEach((el) => {
    arr2.push(Math.max(...el));
  });
  return arr2;
}
console.log(
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ])
);
