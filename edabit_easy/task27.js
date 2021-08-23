// Учитывая массив чисел, верните массив, который содержит все четные числа в исходном массиве, который также имеет четные индексы .

function getOnlyEvens(arr) {
  const arr2 = [];
  arr.forEach((el, i) => {
    if (el === i) {
      arr2.push(el);
    }
  });
  return arr2;
}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
