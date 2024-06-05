// Write a function that receives the time in 12-hour AM/PM format and returns a string representation of the time in military (24-hour) format.
// convertTime(“07:05:45PM”) ➞ “19:05:45”
// convertTime(“12:40:22AM”) ➞ “00:40:22”
// convertTime(“12:45:54PM”) ➞ “12:45:54”
function convertTime(str) {
  const timeArea = str.slice(-2);
  const timeParts = str.split(":");
  const [seconds] = timeParts[2].split(timeArea);
  if (timeArea === "AM") {
    if (Number(timeParts[0]) >= 12) {
      return `${Number(timeParts[0]) - 12}:${timeParts[1]}:${seconds}`;
    }
    return `${24 - Number(timeParts[0]) - 12}:${timeParts[1]}:${seconds}`;
  } else if (timeArea === "PM") {
    if (Number(timeParts[0]) >= 12) {
      return `${Number(timeParts[0])}:${timeParts[1]}:${seconds}`;
    }
    return `${Number(timeParts[0]) + 12}:${timeParts[1]}:${seconds}`;
  }
  return "wrong string";
}
console.log(convertTime("12:45:54PM"));
