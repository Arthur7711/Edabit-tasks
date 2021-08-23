let obj = {
  name: "a",
  person: {
    name: "b",
    person: {
      name: "c",
      person: {
        name: "d",
      },
    },
  },
};

let x = [];

function foo(obj) {
  for (let key in obj) {
    if (typeof obj[key] != "object") {
      x.push(obj[key]);
    } else {
      return foo(obj[key]);
    }
  }
  return x;
}

console.log(foo(obj));
