// Given an array of numbers, return an array which contains all the even numbers in the orginal array, which also have even indices.

function getOnlyEvens(arr) {
  let arr2 = [];
  arr.forEach((el, i) => {
    if (el === i) {
      arr2.push(el);
    }
  });
  return arr2;
}

console.log(getOnlyEvens([1, 2, 3, 4, 4, 4]));
