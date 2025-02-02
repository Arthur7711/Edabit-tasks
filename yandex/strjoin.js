// Необходимо написать функцию strjoin, которая склеивает строки через раделитель
// es6+ version
function strjoin(chart, ...args) {
  return args.join(chart);
}
// es5 version 1
function strjoin() {
  const args = Array.from(arguments);
  return args.slice(1).join(args[0]);
}
// es5 version 2
function strjoin(chart) {
  const args = Array.from(arguments);
  return args.slice(1).join(chart);
}
console.log("strjoin", strjoin(".", "a", "b", "c")); //'a.b.c'
console.log("strjoin", strjoin("-", "a", "b", "c", "e")); //'a-b-c-e'
