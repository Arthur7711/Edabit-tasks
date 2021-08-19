// Напишите функцию, которая принимает двузначное число и определяет, является ли оно наибольшим из двух возможных перестановок цифр.
// Если мы введем 27 , мы должны вернуться, falseпотому что замена цифр дает нам 72 , а 72> 27 . С другой стороны, замена 43 дает нам 34 , а 43> 34 .

function largestSwap(num) {
  let num1 = Math.floor(num / 10);
  let num2 = num - num1 * 10;
  let alternativeNum = num2 * 10 + num1;
  if (num >= alternativeNum) {
    return true;
  }
  return false;
}
console.log(largestSwap(12));
console.log(largestSwap(22));
console.log(largestSwap(21));
