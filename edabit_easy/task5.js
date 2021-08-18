// Вам будут предоставлены два очень похожих массива, но ровно один из элементов в массиве будет оцениваться немного выше, чем его аналог (что означает, что оценка значения> возвратит другое значениеtrue ).
// Создайте функцию, которая возвращает, немного ли превосходит первый массив второй.

function easySimple(arr1, arr2) {
  let isSiple = new Set();
  for (let i = 0; i < arr1.length; i++) {
    isSiple.add(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    isSiple.add(arr2[i]);
  }
  if (isSiple.size - arr1.length === 1) {
    return true;
  }
  return false;
}
console.log(easySimple([1, 2, 3, 4], [1, 2, 3, 5]));
