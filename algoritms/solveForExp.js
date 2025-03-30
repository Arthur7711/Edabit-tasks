// Solving Exponential Equations With Logarithms
// Create a function that takes a number a and finds the missing exponent x so that a when raised to the power of x is equal to b.
// Notes
// a is raised to the power of what in order to equal b?
// Examples
console.log(solveForExp(4, 1024)); //➞ 5
console.log(solveForExp(2, 1024)); //➞ 10
console.log(solveForExp(9, 3486784401)); //➞ 10

function solveForExp(a, b) {
    let i = 0;
    while (a**i < b ) {
        i++
    }
    return i
}