// Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

function sayHelloBye(str, num) {
  if (num === 0) {
    return `Bye ${str}`;
  }
  return `Hello ${str}`;
}

console.log(sayHelloBye("alon", 1));
