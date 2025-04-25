const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
function makeDeepCope(data) {
  return JSON.parse(JSON.stringify(data));
}
console.log(makeDeepCope(ingredientsList));
