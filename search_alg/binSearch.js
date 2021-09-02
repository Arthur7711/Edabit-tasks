function search(arr, num, start = 0, end = arr.length) {
  if (end < start) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === num) return mid;
  if (arr[mid] < num) return search(arr, num, mid + 1, end);
  else return search(arr, num, start, mid - 1);
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
