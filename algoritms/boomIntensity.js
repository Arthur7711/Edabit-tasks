// Explosion Intensity
// Given a number, return a string of the word "Boom", which varies in the following ways:
// The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
// If n is evenly divisible by 2, add an exclamation mark to the end.
// If n is evenly divisible by 5, return the string in ALL CAPS.
// If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
// The example below should help clarify these instructions.
// Notes
// A number which is evenly divisible by 2 and 5 will have both effects applied (see example #4).
// "Boom" will always start with a capital "B", except when n is less than 2, then return a minature explosion as "boom".
// Examples
console.log(boomIntensity(4)); // ➞ "Boooom!"
// There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
console.log(boomIntensity(1)); //➞ "boom"
// 1 is lower than 2, so we return "boom"
console.log(boomIntensity(5)); //➞ "BOOOOOM"
// There are 5 "o"s and 5 is divisible by 5 (all caps)
console.log(boomIntensity(10)); //➞ "BOOOOOOOOOOM!"
// There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamation mark included)

function boomIntensity(num) {
  letterO = "o";
  if (num < 2) {
    return "boom";
  } else if (num % 2 === 0 && num % 5 !== 0) {
    return `B${letterO.repeat(num)}m!`;
  } else if (num % 2 !== 0 && num % 5 === 0) {
    return `B${letterO.repeat(num).toUpperCase()}M`;
  } else if (num % 2 === 0 && num % 5 === 0) {
    return `B${letterO.repeat(num).toUpperCase()}M!`;
  }
}

function boomIntensityByLoops(num) {
  if (num < 2) {
    return "boom";
  } else if (num % 2 === 0 && num % 5 !== 0) {
    let oLetters = "";
    for (let i = 0; i < num; i++) {
      oLetters += "o";
    }
    return `B${oLetters}m!`;
  } else if (num % 2 !== 0 && num % 5 === 0) {
    let oLetters = "";
    for (let i = 0; i < num; i++) {
      oLetters += "O";
    }
    return `B${oLetters}M`;
  } else if (num % 2 === 0 && num % 5 === 0) {
    let oLetters = "";
    for (let i = 0; i < num; i++) {
      oLetters += "O";
    }
    return `B${oLetters}M!`;
  }
}
