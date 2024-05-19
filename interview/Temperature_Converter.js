// Create a function that converts Celsius to Fahrenheit and vice versa.
// convert("35°C") ➞ "95°F"
// convert("19°F") ➞ "-7°C"
// convert("33") ➞ "Error"
// Round to the nearest integer.
// If the input is incorrect, return "Error"
// from f => C (0°F − 32) × 5/9 = -17.78°C
// from C => F (0°C × 9/5) + 32 = 32°F

function convert(deg) {
  const [dig, type] = deg.split("°");
  if (!Number.isNaN(Number(dig))) {
    if (type === "F") {
      return (((dig - 32) * 5) / 9).toFixed(0);
    } else if (type === "C") {
      return ((dig * 9) / 5 + 32).toFixed(0);
    }
  } else {
    return "Error";
  }
}
console.log(convert("19°F"));
