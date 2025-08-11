// Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// Notes
// Tests contain arrays with both strings and numbers.
// Tests are case sensitive.
// Each array item is unique.
// Examples
function removeDups(items) {
  const result = [];
  const cachedSet = new Set();
  items.forEach((el) => {
    if (!cachedSet.has(String(el))) {
      cachedSet.add(String(el));
      result.push(el);
    }
  });
  return result;
}
console.log(removeDups([1, 0, 1, 0])); //➞ [1, 0]

console.log(removeDups(["The", "big", "cat"])); // ➞ ["The", "big", "cat"]

console.log(removeDups(["John", "Taylor", "John"])); // ➞ ["John", "Taylor"]
