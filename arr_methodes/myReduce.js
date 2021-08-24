Array.prototype.myReduce = function (foo, value) {
  let acc = value === undefined ? this[0] : value;
  let start = value === undefined ? 1 : 0;
  for (let i = start; i < this.length; i++) {
    acc = foo(acc, this[i], i, this);
  }
  return acc;
};
let arr = [1, 2, 3, 4];
console.log(
  arr.myReduce((acc, current) => {
    return (acc += current);
  }, 5)
);
