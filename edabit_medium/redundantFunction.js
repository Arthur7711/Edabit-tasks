// Write a function redundant that takes in a string str and returns a function that returns str.

const redundant = (word) => {
  return () => {
    return word;
  };
};

const f1 = redundant("apple")
f1()