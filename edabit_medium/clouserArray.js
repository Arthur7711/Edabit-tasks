// Create a function which takes a array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

function multiply(numbers) {
  return (num) => {
    return numbers.map((el) => el * num);
  };
}

console.log(multiply([1, 2, 3])(2));
