// Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

function jazzify(arr) {
  return arr.map((el) => {
    if (el.includes("7") == false) {
      return (el += 7);
    }
    return el;
  });
}
jazzify(["G", "F", "C"]);
