// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

const findDigit = (nums) => {
  const regex = /[7]/g;
  if (nums.join("").match(regex)) {
    return 'BOOM!'
  }
  return 'there is no 7'
};
findDigit([11, 25, 2555]);
