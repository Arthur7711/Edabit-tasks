// Создайте функцию, которая находит слово "bomb"в заданной строке (без учета регистра). Если найдено, верните "Duck!!!", в противном случае верните "There is no bomb, relax.".
function bomb(str) {
  if (str.includes("bomb")) {
    return "BOOM";
  } else {
    return "There is no bomb";
  }
}

console.log(bomb("There is a bomb."));
console.log(bomb("Hey, did you think there is a bomb?"));
console.log(bomb("This goes boom!!!"));
