for (var a = [], i = 0; i < 40; ++i) a[i] = i;

function shuffle(array) {
  let tmp,
    current,
    top = array.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  return array;
}

let turtles = [
  { id: 1, name: "donatello" },
  { id: 2, name: "keysi" },
  { id: 3, name: "leonardo" },
  { id: 4, name: "raphael" },
  { id: 5, name: "onil" },
  { id: 6, name: "splinter" },
  { id: 7, name: "shreder" },
  { id: 8, name: "michelangelo" },
];

turtles = shuffle(turtles);
console.log(turtles);
