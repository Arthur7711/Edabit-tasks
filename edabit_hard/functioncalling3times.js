// Create a function that takes three collections of arguments and returns the sum of the product of numbers.

const product = (a, b) => {
  return (c, d) => {
    return (e, f) => {
      return a * c * e + b * d * f;
    };
  };
};
product(1,2)(1,1)(2,3)