// Create a function that takes an array of students and returns an object representing their notes distribution. Keep in mind that all invalid notes should not be counted in the distribution. Valid notes are: 1, 2, 3, 4, 5
// getNotesDistribution([
//     {
//       "name": "Steve",
//       "notes": [5, 5, 3, -1, 6]
//     },
//     {
//       "name": "John",
//       "notes": [3, 2, 5, 0, -3]
//     }
//   ] ➞ {
//     5: 3,
//     3: 2,
//     2: 1
//   })
// const neededItems = [1, 2, 3, 4, 5]
function getNotesDistribution(students) {
  return students.reduce((acc, next) => {
    next.notes.forEach((el) => {
      if (el > 0 && el <= 5) {
        if (acc[el]) {
          acc[el] += 1;
        } else {
          acc[el] = 1;
        }
      }
    });
    return acc;
  }, {});
}
console.log(
  getNotesDistribution([
    {
      name: "Steve",
      notes: [5, 5, 3, -1, 6],
    },
    {
      name: "John",
      notes: [3, 2, 5, 0, -3],
    },
  ])
);
