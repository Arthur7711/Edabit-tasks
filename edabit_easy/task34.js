// Учитывая массив тайлов скрэббла, создайте функцию, которая выводит максимально возможное количество очков, которое может набрать игрок, суммируя общее количество очков для всех плиток в его руке. В каждой руке по 7 тайлов скрэббла.
// maximumScore([
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]) ➞ 28

function maximumScore(arr) {
  let res = 0;
  arr.forEach((el) => {
    res += el.score;
  });
  return res;
}
console.log(
  maximumScore([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ])
);
