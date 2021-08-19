// Создайте функцию, которая принимает lengthи widthнаходит периметр прямоугольника.
// P = 2 * (a + b)

function findP(length, width) {
  let p = 2 * (length + width);
  return p;
}

console.log(findP(6, 7));
