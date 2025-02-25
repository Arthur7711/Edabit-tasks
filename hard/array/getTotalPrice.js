// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }]); // ➞ 1.5

// 1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.5 },
  { product: "Cereals", quantity: 1, price: 2.5 },
]); // ➞ 4
function getTotalPrice(products) {
  return products.reduce((acc, next) => (acc += next.price), 0);
}
