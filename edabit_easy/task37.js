// A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.
function setArr(arr) {
  let mySet = new Set();
  arr.forEach((el) => {
    mySet.add(el);
  });
  let arr2 = [];
  mySet.forEach((el) => arr2.push(el));
  return arr2;
}

console.log(setArr([1, 3, 3, 5, 5, 5]));
