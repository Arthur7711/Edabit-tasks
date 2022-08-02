// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any dice roll.
// You cannot move backward.
// If you are already on the same tile, return false, as you would be advancing away.
// Expect only positive integer inputs.

const possibleBonus = (position1, position2) => {
  if (position1 < 0 || position2 < 0) {
    return false;
  }
  for (let i = 1; i <= 6; i++) {
    if (position1 + i === position2) {
      return true;
    }
  }
  return false
};

console.log(possibleBonus(3, 7))