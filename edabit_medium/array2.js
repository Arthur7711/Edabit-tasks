// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

function compact(arr) {
  let myArr = [];
  arr.forEach((el) => {
    if (Number(el) !== 0 && isNaN(el) !== true) {
      myArr.push(el);
    }
  });
  return myArr;
}

console.log(compact([1, "", 0, false, null, undefined, NaN]));
