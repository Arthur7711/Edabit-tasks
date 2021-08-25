function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let base = array[0];
  let left = [];
  let right = [];
  for (let i = 1; i < array.length; i++) {
    array[i] < base ? left.push(array[i]) : right.push(array[i]);
  }
  return quickSort(left).concat(base, quickSort(right));
}
console.log(quickSort([5, 3, 7, 6, 2, 9]));
