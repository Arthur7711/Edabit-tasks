document.body.addEventListener("click", () => {
  console.log("Click Event"); // Macrotask
});

Promise.resolve().then(() => console.log("Promise Resolved")); // Microtask
console.log("End");
// End, Promise Resolved, Click Event