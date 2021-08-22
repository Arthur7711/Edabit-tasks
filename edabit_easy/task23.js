// Первый - isOddEven()с помощью побитового оператора проверить, является ли данное число нечетным .

function isOddEven(num) {
  if (num % 2 === 0) {
    return "even";
  }
  return "odd";
}
console.log(isOddEven(12));
