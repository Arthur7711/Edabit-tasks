// Create a function that takes a chess board square's coordinate and return its color.
// Examples
console.log(chessBoard("a1")); //➞ "black"
console.log(chessBoard("e5")); //➞ "black"
console.log(chessBoard("d1")); //➞ "white"

function chessBoard(possition) {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8];
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let isWhite = false; // 'balck' or 'white'
  const boardPossitions = digits.map((el) => {
    const possitionsArray = letters.map((letter, i, arr) => {
      const color = isWhite ? "white" : "black";
      if (i !== arr.length - 1) {
        isWhite = !isWhite;
      }
      return { possitionName: `${letter}${el}`, color };
    });
    return possitionsArray;
  });
  return boardPossitions.flat(1).find(el => el.possitionName ===possition)?.color;
}
