// Create a function that returns an array of strings sorted by length in ascending order.
// Strings will have unique lengths, so don't worry about comparing two strings with identical length.
// Return an empty array if the input array is empty

function sortByLength(arr) {
  let arr2 = [];
  if (arr.length < 1) {
    return arr2;
  }
  let byLength = arr.map((el) => el.length);
  return byLength;
}

console.log(sortByLength(["askcn", "cdn", "k"]));
