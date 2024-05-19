// When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.
// Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:
// It takes 1 second to switch between pencils.
// It takes 2 seconds to color a square.
// See the example below for clarification.
// color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14
// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// 10 + 4 = 14
// colorPatternTimes(["Blue"]) ➞ 2
// colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11
// colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13
// Only change coloring pencils if the next color is different to the color before it.
// Return a number in seconds.

function colorPatternTimes(cols) {
  if (cols.length) {
    return cols.reduce((acc, cur, i, arr) => {
      return (acc =
        acc + 2 + (cur !== arr[i - 1] && cur !== arr[arr.length - 1] ? 1 : 0));
    }, 0);
  }
  //   const length = cols.length;
  //   return length * 2 + (length - 1);
}
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]));
