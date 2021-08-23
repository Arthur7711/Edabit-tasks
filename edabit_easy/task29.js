// Возьмите массив целых чисел (положительных или отрицательных или обоих) и верните сумму абсолютных значений каждого элемента.
function getAbsSum(arr) {
  let sum = 0;
  arr.forEach((el, i) => {
    if (el < 0) {
      sum += -el;
    } else {
      sum += el;
    }
  });
  return sum;
}

console.log(getAbsSum([2, -1, 4, 8, 10]));
console.log(getAbsSum([-3, -4, -10, -2, -3]));
console.log(getAbsSum([2, 4, 6, 8, 10]));
console.log(getAbsSum([-1]));
