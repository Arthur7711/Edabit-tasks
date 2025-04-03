setTimeout(() => {
  console.log("Timer 1");
  Promise.resolve().then(() => {
    console.log("Microtask 1");
    Promise.resolve().then(() => {
      console.log("Microtask 2");
    });
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask 3");
});

console.log("Main Task");
// Main Task, Microtask 3, Timer 1, Microtask 1, Microtask 2