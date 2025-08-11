// Check for Anagrams
// Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.
// Notes
// Should be case insensitive.
// The two given strings can be of different lengths.
// Examples

function isAnagram(str1, str2) {
  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .split("")
      .sort()
      .join("");
  return normalize(str1) === normalize(str2);
}
console.log(isAnagram("cristian", "Cristina")); //➞ true

console.log(isAnagram("Dave Barry", "Ray Adverb")); //➞ true

console.log(isAnagram("Nope", "Note")); //➞ false
