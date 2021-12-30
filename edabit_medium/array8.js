// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

function arrayOfMultiples(num, length) {
  const arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(num * i);
  }
  return arr;
}

arrayOfMultiples(7, 5);
