// Transcribe to mRNA
// Transcribe the given DNA strand into corresponding mRNA - a type of RNA, that will be formed from DNA after transcription. DNA has the bases A, T, G and C, while RNA converts to U, A, C and G respectively.
// Notes
// Transcription is the process of making complementary strand.
// A, T, G and C in DNA converts to U, A, C and G respectively in mRNA.
// Examples
console.log(dnaToRna("ATTAGCGCGATATACGCGTAC")); //➞ "UAAUCGCGCUAUAUGCGCAUG"
console.log(dnaToRna("CGATATA")); //➞ "GCUAUAU"
console.log(dnaToRna("GTCATACGACGTA")); //➞ "CAGUAUGCUGCAU"

function dnaToRna(dna) {
    let result = ''
    const changLetters = (letter) => {
        switch (letter) {
            case 'A':
                return 'U'
            case 'T':
                return 'A'
            case 'G':
                return 'C'
            case 'C':
                return 'G'
        }
    }
    dna.split('').forEach(el => {
        const value = changLetters(el)
        result+=value
    })
    return result
}