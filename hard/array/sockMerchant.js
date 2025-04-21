// Sales by Match
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. For example, there are 7 socks with colors [1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
// Create a function that returns an integer representing the number of matching pairs of socks that are available.
// Examples
console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])); // ➞ 3
console.log(sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90])); //➞ 4
console.log(sockMerchant([])); //➞ 0

function sockMerchant(colors) {
  if (!colors.length) {
    return 0;
  }
  const colorsWithCounting = new Map();
  let count = 0;
  colors.forEach((el) => {
    if (colorsWithCounting.has(el)) {
      colorsWithCounting.set(el, colorsWithCounting.get(el) + 1);
    } else {
      colorsWithCounting.set(el, 1);
    }
  });
  colorsWithCounting.forEach((el) => (count += Math.floor(el / 2)));

  return count;
}
