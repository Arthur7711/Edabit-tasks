// Создайте функцию, которая принимает массив чисел и возвращает минимальное и максимальное числа в указанном порядке.

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let minMaxArr = [min, max];
  return minMaxArr;
}
console.log(minMax([1, 4, 9, 7]));
