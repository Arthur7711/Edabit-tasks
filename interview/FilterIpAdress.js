function isValid(segment) {
  const num = parseInt(segment, 10);
  return (
    !isNaN(num) &&
    num >= 0 &&
    num <= 255 &&
    !(segment.length > 1 && segment[0] === "0")
  );
}
function generateIPAddresses(ipString, parts = [], result = []) {
  if (parts.length === 4) {
    if (ipString === "") {
      result.push(parts.join("."));
    }
    return;
  }
  for (let i = 1; i <= 3; i++) {
    if (ipString.length < i) break;
    const segment = ipString.substring(0, i);
    if (isValid(segment)) {
      generateIPAddresses(ipString.substring(i), [...parts, segment], result);
    }
  }
}
function convertToIPAddresses(ipString) {
  const result = [];
  if (ipString.length >= 4 && ipString.length <= 12) {
    generateIPAddresses(ipString, [], result);
  }
  return result.length ? result : ["Not Valid IP Address"];
}
console.log(convertToIPAddresses("2525511135"));
console.log(convertToIPAddresses("0000"));
