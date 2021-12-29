// Create the function that takes an array with objects and returns the sum of people's budgets.

function getBudgets(arr) {
  let sum = 0;
  return arr.reduce((acc, newVal) => {
    return (acc += newVal);
  }, 0);
}

getBudgets([23000, 40000, 2700]);
