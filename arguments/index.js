function arrayFromArguments() {
  // arguments type is Iterables collection ((array like object))
  return Array.from(arguments);
}

console.log(arrayFromArguments("1", 2, 4, 5, 6, 7, 8, 89));

// the same work with es6 version
function getParamItems(...args) {
  return args;
}
console.log(getParamItems("222222", 2, 4, 5, 6, 7, 8, 89));
