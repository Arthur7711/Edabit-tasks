// There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.
// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.


// result 

function minimumSteps(n) {
    return Math.pow(2, n) - 1;
}

// Example usage:
let numberOfDiscs = 3;
console.log(`Minimum steps needed for ${numberOfDiscs} discs: ${minimumSteps(numberOfDiscs)}`);


// how it working
// function moveDisks(n, source, target, auxiliary) {
//     if (n === 1) {
//         console.log(`Move disk 1 from ${source} to ${target}`);
//     } else {
//         moveDisks(n - 1, source, auxiliary, target);
//         console.log(`Move disk ${n} from ${source} to ${target}`);
//         moveDisks(n - 1, auxiliary, target, source);
//     }
// }

// // Number of disks
// let n = 3;
// moveDisks(n, 'Tower 1', 'Tower 3', 'Tower 2');

