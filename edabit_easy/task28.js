// Создайте функцию, которая принимает число в качестве аргумента и возвращает наивысшую цифру этого числа.
function highestDigit(num) {
  let str = num.toString();
  let arr = str.split("");
  let max = Math.max(...arr);
  return max;
}

console.log(highestDigit(379));
