// Создайте функцию, которая принимает число в качестве аргумента. Сложите все числа от 1 до числа, которое вы передали функции. Например, если на входе 4, ваша функция должна вернуть 10, потому что 1 + 2 + 3 + 4 = 10.

// function sum(num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sum(4));

// width recursion

function recursionSum(num, sum = 0) {
  if (num <= 0) {
    return sum;
  }
  sum += num;
  num = num - 1;
  return recursionSum(num, sum);
}

console.log(recursionSum(4));
