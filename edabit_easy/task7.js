// Создайте функцию, которая возвращает, trueесли первый массив может быть вложен во второй.

// arr1 могут быть вложены внутрь, arr2если:

// arr1s min больше, чем arr2s min.
// arr1Максимальное значение меньше arr2максимального.

function arrConcat(arr1, arr2) {
  if (
    Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
  ) {
    return true;
  }
  return false;
}

console.log(arrConcat([1, 2, 3, 4], [0, 6]));
console.log(arrConcat([1, 2, 3, 4], [0, 2]));
