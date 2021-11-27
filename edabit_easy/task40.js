// Создайте функцию, которая принимает число (шаг) в качестве аргумента и возвращает количество спичек на этом шаге. См. Шаги 1, 2 и 3 на изображении выше.

function matchHouses(num, result = 6) {
  if (num < 1) {
    return 0;
  }
  if (num === 1) {
    return result;
  }
  result += 5;
  num--;
 return matchHouses(num, result);
}
console.log(matchHouses(4));
