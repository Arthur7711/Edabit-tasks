// Two players draw a pair of numbered cards so that both players can form a 2 digit number. A winner can be decided if one player's number is larger than the other.
// However, there is a rule where a player can swap any one of their cards with any one of the other player's cards in a gamble to get a higher number! Note that it is illegal to swap the order of your own cards. That means if you draw a 1 then a 9, you cannot swap them to get 91.
// Paul's strategy is to always swap his lowest number with the opponent's ten's digit. Return whether this results in Paul winning the round.
// n1 is Paul's number
// n2 is his opponent's number
// swap_cards(41, 79) ➞ true
// Paul's lowest number is 1
// The opponent's ten's digit is 7
// After the swap: 47 > 19
// Paul wins the round
function swapCards(n1, n2) {
  const [card1, card2] = n1.toString();
  const [card3, card4] = n2.toString();
  if (Number(card1 + card3) > Number(card2 + card4)) return true;
  return false;
}
console.log(swapCards(41, 79))