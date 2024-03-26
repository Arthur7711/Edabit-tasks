// Welcome to the beginning of this collection on Computer Science Algorithms. Admittedly there are other challenges on Edabit that deal with recursion and algorithmic processes, but these particular challenges are designed to give examples and to educate users on the topics being covered.
// Recursion In computer science, "recursion" is the act of writing a function that calls itself from within its own code. The function below better helps explain and illustrate recursion by simply counting down from a given number to zero:
// The recursive function for this challenge should return the factorial of an inputted integer. If anyone needs a refresher, factorials in mathematics are represented by an exclamation point placed to the right of a number: 4! = 4 x 3 x 2 x 1 = 24
function factorial(num, targetNumber = 1) {
  if (num === 0) {
    console.log("Countdown complete!");
    return;
  } else if (num === 1) {
    return targetNumber;
  } else {
    targetNumber *= num;
    return factorial(num - 1, targetNumber);
  }
}
