const arr = [1, 3, 5, 7, 8, 9];
const binarySearch = (arr, x, start = 0, end = arr.length) => {
  if (end < start) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === x) return mid;

  if (arr[mid] < x) return binarySearch(arr, x, mid + 1, end);
  else return binarySearch(arr, x, start, mid - 1);
};

console.log(binarySearch(arr, 7));
