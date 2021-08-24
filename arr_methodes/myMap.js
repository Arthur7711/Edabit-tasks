Array.prototype.myMap = function (fun) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr = [...newArr, fun(this[i], i, this)];
  }
  return newArr;
};

let p = [1, 2, 3, 5, 6];

console.log(
  p.myMap((a) => {
    return a + 1;
  })
);
