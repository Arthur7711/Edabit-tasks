console.log('A');

setTimeout(() => {
  console.log('B'); // Macrotask
}, 0);

Promise.resolve().then(() => {
  console.log('C'); // Microtask
});

console.log('D');

//A, D, C, B 