// The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.
// Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.
// There will always be a corresponding Rammstein bottle for the number given.
// There will never be 2 Rammstein bottles with the same number.
// You always return one Rammstein bottle.
function getVodkaBottle(obj, num) {
    return obj[num]
}
getVodkaBottle(
  { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 },
  "Rammstein A"
);
// number = 100
getVodkaBottle(
  { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 },
  "Rammstein B"
);
// number = 50
getVodkaBottle(
  { whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 },
  "Rammstein D"
);
// number = 70
