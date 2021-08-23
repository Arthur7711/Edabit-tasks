// Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.
function sortDescending(num) {
  let str = num.toString();
  let arr = str.split("");
  arr.sort((a, b) => a - b);
  let res = Number(arr.join(""));
  return res;
}
console.log(sortDescending(354));
