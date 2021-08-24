function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  let base = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    array[i] < base ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(base, quicksort(right));
}

let items = [5, 3, 7, 6, 2, 9];
console.log(quicksort(items));
