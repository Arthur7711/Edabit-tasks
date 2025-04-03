setTimeout(() => console.log("A"), 0); // Macrotask
setImmediate(() => console.log("B")); // Macrotask in Node.js
// B, A
setTimeout(() => console.log("A"), 0); // Macrotask
setImmediate(() => console.log("B")); // Macrotask in Node.js
console.log('C')//if there are some static tasks than 
//C, A, B
