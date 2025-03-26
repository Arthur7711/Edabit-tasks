// How Many Rectangles?
// Let there be a square matrix, where each square is a rectangle, and a combination of more squares are also rectangles. To find the number of rectangles, Pete sat down and started counting... but that's highly inefficient.
// Create a function that takes the order of the matrix as input and returns the number of rectangles in them.
// The input will always be an integer.
// Number of rectangles are given by: ((n(n+1))/2)^2

console.log(rectangles(1)); //➞ 1
console.log(rectangles(2)); //➞ 9
console.log(rectangles(3)); //➞ 36

function rectangles(num) {
  return ((num * (num + 1)) / 2) ** 2;
}
