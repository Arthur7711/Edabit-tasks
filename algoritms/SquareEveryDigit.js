// Create a function that squares every digit of a number.
// squareDigits(9119) ➞ 811181
// squareDigits(2483) ➞ 416649
// squareDigits(3212) ➞ 9414
function squareDigits(n) {
    return parseInt(String(n).split('').map(x => parseInt(x)**2).join(''))
}
