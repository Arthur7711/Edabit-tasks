// Создайте функцию, которая принимает массив чисел и возвращает минимальное и максимальное числа в указанном порядке.
function minMax(arr) {
  return `min is ${Math.min(...arr)},max is ${Math.max(...arr)}`;
}
console.log(minMax([1, 2, 3, 4]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));
