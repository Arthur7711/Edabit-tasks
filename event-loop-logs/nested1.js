Promise.resolve().then(() => {
  console.log("A");
  Promise.resolve().then(() => console.log("B"));
});

console.log("C");

// C, A , B