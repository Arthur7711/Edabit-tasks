console.log("1");
Promise.resolve().then(() => {
  console.log("Microtask 1");
  Promise.resolve().then(() => {
    console.log("Microtask 2");
  });
});

Promise.resolve().then(() => {
  console.log("Microtask 3");
});

console.log("Main Task");
// 1, Main Task, Microtask 1,  Microtask 3, Microtask 2
