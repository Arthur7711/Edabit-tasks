// Учитывая число, верните массив, содержащий две половины числа. Если число нечетное, сделайте крайнее правое число выше .
// Все числа будут целыми.
// Вы также можете ожидать отрицательные числа.

function numberSplit(number) {
  let num1 = Math.floor(number / 2);
  let num2 = number - num1;
  let arr = [num1, num2];
  return arr;
}
console.log(numberSplit(-12));
console.log(numberSplit(11));
