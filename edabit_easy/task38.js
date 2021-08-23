// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

function formatPhoneNumber(arr) {
  let code = "";
  let first = "";
  let last = "";
  arr.forEach((el, i) => {
    if (i < 3) {
      code += el;
    } else if (i >= 3 && i < 6) {
      first += el;
    } else if (i >= 6) {
      last += el;
    }
  });
  let res = "(" + code + ")" + " " + first + "-" + last;
  return res;
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
