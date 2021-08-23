// Создайте функцию, которая принимает строку и возвращает количество (количество) гласных, содержащихся в ней.

function countVowels(str) {
  let sum = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      sum += 1;
    }
  }
  return sum;
}

console.log(countVowels("Celebration"));
