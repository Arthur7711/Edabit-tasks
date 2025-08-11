// Check for Anagrams
// Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.
// Notes
// Should be case insensitive.
// The two given strings can be of different lengths.
// Examples
// v1
// function isAnagram(str1, str2) {
//   const normalize = (str) =>
//     str
//       .toLowerCase()
//       .replace(/[^a-z]/g, "")
//       .split("")
//       .sort()
//       .join("");
//   return normalize(str1) === normalize(str2);
// }

function isAnagram(str1, str2) {
  const clean = (str) => str.toLowerCase().replace(/[^a-z]/g, "");

  const s1 = clean(str1);
  const s2 = clean(str2);

  if (s1.length !== s2.length) return false;

  const counts = new Map();

  for (const char of s1) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  for (const char of s2) {
    if (!counts.has(char)) return false;
    counts.set(char, counts.get(char) - 1);
    if (counts.get(char) === 0) counts.delete(char);
  }

  return counts.size === 0;
}

console.log(isAnagram("cristian", "Cristina")); //➞ true

console.log(isAnagram("Dave Barry", "Ray Adverb")); //➞ true

console.log(isAnagram("Nope", "Note")); //➞ false
