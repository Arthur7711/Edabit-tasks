// function quicksort(array) {
//   if (array.length <= 1) {
//     return array;
//   }
//   let base = array[0];
//   let left = [];
//   let right = [];

//   for (let i = 1; i < array.length; i++) {
//     array[i] < base ? left.push(array[i]) : right.push(array[i]);
//   }

//   return quicksort(left).concat(base, quicksort(right));
// }

// let items = [5, 3, 7, 6, 2, 9];
// console.log(quicksort(items));

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let base = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    arr[i] < base ? left.push(arr[i]) : right.push(arr[i]);
  }
  return quickSort(left).concat(base, quickSort(right));
}
console.log(quickSort([1, 5, 3, 6, 7]));


