// Create a function that returns an array of strings sorted by length in ascending order.
// Strings will have unique lengths, so don't worry about comparing two strings with identical length.
// Return an empty array if the input array is empty

function sortByLength(arr) {
  const newArr = arr.sort((a, b) => a.length - b.length);
  return newArr;
}

const array = ["hello", "hi", "water", "pop"];

console.log(sortByLength(array));
