// Слово на свободе и теперь пытается спрятаться среди толпы высоких букв! Помогите написать функцию для определения того, что это слово, зная следующие правила:

// Требуемое слово пишется в нижнем регистре .
// Все буквы в верхнем регистре .
// Обратите внимание, что слово будет распределено среди случайных букв, но их буквы останутся в том же порядке .

function detectWord(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      result += str[i];
    }
  }
  return result;
}
console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));
