// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

function add_suffix(suffix) {
  return function (word) {
    return word + suffix;
  };
}

let add_ly = add_suffix("ly");
add_ly("hopeless");
