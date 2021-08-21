// Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

function checkTitle(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][0] !== arr[i][0].toUpperCase()) {
        return false;
      }
    }
  }
  return true;
}
console.log(checkTitle("A Mind Boggling Achievement"));
console.log(checkTitle("A ind Boggling Achievement"));
