// A value is omnipresent if it exists in every subarray inside the main array.
// Create a function that determines whether an input value is omnipresent for a given array.
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false
// isOmnipresent([[5], [5], [5], [6, 5]], 5) ➞ true
// isOmnipresent([[5], [5], [5], [6, 5]], 6) ➞ false

function isOmnipresent(arr, val) {
	return arr.every(el=>el.includes(val))
}