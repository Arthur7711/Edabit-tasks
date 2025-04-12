// Numbered Alphabet
// Create a function that converts a string of letters to their respective number in the alphabet.
// A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	...
// 0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22	...
// Notes
// Make sure the numbers are spaced.
// All letters will be UPPERCASE.
// Examples
console.log(alphNum("XYZ")); // ➞ "23 24 25"
console.log(alphNum("ABCDEF")); // ➞ "0 1 2 3 4 5"
console.log(alphNum("JAVASCRIPT")); // ➞ "9 0 21 0 18 2 17 8 15 19"

function alphNum(letters) {
  let result = "";
  for (let i = 0; i < letters.length; i++) {
    const el = letters[i];
    result += `${el.charCodeAt() - 65} `;
  }
  return result;
}
