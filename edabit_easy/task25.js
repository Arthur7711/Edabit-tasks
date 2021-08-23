// Создайте функцию, которая принимает строку и возвращает новую строку с удаленными гласными.

function vowelsOnly(str) {
  var string2 = "";
  for (var i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      string2 += str[i];
    }
  }
  return string2;
}

console.log(vowelsOnly("hello from tilon"));
