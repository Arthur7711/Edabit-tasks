// // Write a function that takes a string input and returns the string in a reversed case and order.
// No empty strings and will neither contain special characters nor punctuation.
// invert("dLROW YM sI HsEt") ➞ "TeSh iS my worlD"
// invert("ytInIUgAsnOc") ➞ "CoNSaGuiNiTY".
// invert("step on NO PETS") ➞ "step on NO PETS"
// invert("XeLPMoC YTiReTXeD") ➞ "dExtErIty cOmplEx"
function invert(s) {
  if (!s.length) return "string is empty";
  let result = "";
  for (let i = s.length - 1; i > 0; i--) {
    if (s[i].toLowerCase() === s[i]) {
      result += s[i].toUpperCase();
    } else {
      result += s[i].toLowerCase();
    }
  }
  return result;
}
console.log(invert("XeLPMoC YTiReTXeD")); 
