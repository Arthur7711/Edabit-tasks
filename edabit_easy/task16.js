// Создайте функцию, которая принимает строку и возвращает количество (количество) гласных, содержащихся в ней.

function countVowels(str) {
  let j = 0;
  let vowels = ["e", "y", "u", "i", "o", "a"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      j++;
    }
  }
  return j;
}

console.log(countVowels("hello"));
