// Create a function that takes an array of strings and return an array, sorted from shortest to longest.
function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}
