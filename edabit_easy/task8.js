// Создайте функцию, которая вычисляет количество различных квадратов в n * n квадратной сетке. Проверьте вкладку " Ресурсы" .
// Примечания
// Ввод - положительное целое число.
// Квадратное пирамидальное число.

function recursionSum(num, sum = 0) {
  if (num === 0) {
    return sum;
  }
  sum += num ** 2;
  num = num - 1;
  return recursionSum(num, sum);
}

console.log(recursionSum(2));
console.log(recursionSum(5));
