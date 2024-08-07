// Рассчитайте общую стоимость продуктов
// Создайте функцию, которая принимает массив объектов (продуктов), который вычисляет общую цену и возвращает ее как число. Объект продуктов имеет продукт, количество и цену, например:
// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }
// нп.
// getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Eggs", quantity: 12, price: 0.10 },
//     { product: "Bread", quantity: 2, price: 1.60 },
//     { product: "Cheese", quantity: 1, price: 4.50 }
//   ]) ➞ 10.4
function getTotalPrice(
  arr: { product: string; quantity: number; price: number }[]
) {
  return arr.reduce((acc, el) => {
    return (acc += el.price);
  }, 0);
}
