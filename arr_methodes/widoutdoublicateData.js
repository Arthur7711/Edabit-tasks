let array = [1, 2, 3, 4, 2, 3];
let checking = array.filter((el, i) => array.indexOf(el) === i);
console.log(checking);
