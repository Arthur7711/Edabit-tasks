// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

function changeEnough(arr, cost) {
  const quarter = 0.25;
  const dime = 0.1;
  const nickel = 0.05;
  const penny = 0.01;
  let sum = 0;
  const paymantArr = [quarter, dime, nickel, penny];
  arr.map((el, i) => (sum += el * paymantArr[i]));
  if (sum >= cost) {
    return true;
  }
  return false;
}

changeEnough([2, 100, 0, 0], 14.11);
