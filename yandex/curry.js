function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
}
console.log(curry(sum)(1, 2, 3)); //6
console.log(curry(sum)(1, 2)(3)); //6
console.log(curry(sum)(1, 2, 3, 4, 5, 6, 7)); //6 cause for sum we can take only 3 items

// examples of sork
function sum(a, b, c) {
  return a + b + c;
}

function sum2(a, b) {
  return a + b;
}
