function mubashirCipher(message) {
  const keys = [
    ["m", "c"],
    ["u", "e"],
    ["b", "g"],
    ["a", "k"],
    ["s", "v"],
    ["h", "x"],
    ["i", "z"],
    ["r", "y"],
    ["p", "w"],
    ["l", "n"],
    ["o", "j"],
    ["t", "f"],
    ["q", "d"],
  ];
  let finalMessage = "";
  for (let i = 0; i < message.length; i++) {
    const el = message[i];
    keys.forEach((elems) => {
      const elIndex = elems?.findIndex((item) => item === el);
      switch (elIndex) {
        case 0:
          finalMessage += elems[1];
          break;
        case 1:
          finalMessage += elems[0];
          break;
      }
    });
}
console.log("elIndex", finalMessage);
}

const message = "edabit is amazing !";

mubashirCipher(message);
