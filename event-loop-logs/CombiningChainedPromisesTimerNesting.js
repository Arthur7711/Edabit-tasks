console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
  Promise.resolve()
    .then(() => {
      console.log("Promise 1");
    })
    .then(() => {
      console.log("Promise 2");
    });
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 3");
    setTimeout(() => {
      console.log("Timeout 2");
    }, 0);
    return Promise.resolve();
  })
  .then(() => {
    console.log("Promise 4");
  });

console.log("End");
// Start, End, Promise 3, Promise 4, Timeout 1, Promise 1, Promise 2, Timeout 2