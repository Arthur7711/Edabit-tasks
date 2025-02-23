// Write a function that takes a string input and returns the string in a reversed case and order.
// No empty strings and will neither contain special characters nor punctuation.

function invert(str) {
  let result = "";
  for (let i = str.length -1; i >= 0; i--) {
    const el = str[i];
    if (!el) {
      result += el;
    } else if (el === el.toLowerCase()) {
      result += el.toUpperCase();
    } else {
      result += el.toLowerCase();
    }
  }
  return result
}

invert("dLROW YM sI HsEt"); // ➞ "TeSh iS my worlD"
invert("ytInIUgAsnOc"); // ➞ "CoNSaGuiNiTY"
invert("XeLPMoC YTiReTXeD"); // ➞ "dExtErIty cOmplEx"
