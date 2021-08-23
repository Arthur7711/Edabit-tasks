// Create a function to return the amount of potatoes there are in a string.
function potatoes(str) {
  let isInclude = 0;
  if (str.includes("potato")) {
    isInclude += 1;
  }
  return isInclude;
}

console.log(potatoes("potato"));
console.log(potatoes("potatoapple"));
