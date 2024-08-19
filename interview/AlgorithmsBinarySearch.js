// Create a function that finds a target number in a list of prime numbers. Implement a binary search algorithm in your function. The target number will be from 2 through 97. If the target is prime then return "yes" else return "no".
// isPrime(primes, 3) ➞ "yes"
// isPrime(primes, 4) ➞ "no"
// isPrime(primes, 67) ➞ "yes"
// isPrime(primes, 36) ➞ "no"

function isPrime(primes, num) {
    const mid = Math.floor(primes.length / 2);
    const first = primes.slice(0, mid);
    const last = primes.slice(mid + 1, primes.length - 1);
    if(primes[mid] === num) return 'YES';
    else if(num <= first[first.length - 1]) return isPrime(first, num);
    else if(num >= last[last.length - 1]) return isPrime(last, num);
    return 'NO'
}

const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

console.log('isPrime', isPrime(primes, 11));
