// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
function numInStr(stings) {
    const regex = /\d/
   const includedDigitsStrings = stings.filter(el=>{
        if(regex.test(el)){
            return el
        }
    })
    return includedDigitsStrings
}
numInStr(["1a", "a", "2b", "b"]) // ➞ ["1a", "2b"]
numInStr(["abc", "abc10"]) // ➞ ["abc10"]
numInStr(["abc", "ab10c", "a10bc", "bcd"]) // ➞ ["ab10c", "a10bc"]
// numInStr(["this is a test", "test1"]) ➞ ["test1"]