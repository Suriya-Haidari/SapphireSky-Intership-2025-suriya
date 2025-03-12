// Check if a Number is Prime
// Write a function isPrime(n) that returns true if n is a prime number and false otherwise.

function isPrime(n) {
    if (n <= 1) return false;   
    if (n === 2) return true;   

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;  
        }
    }

    return true;  
}

console.log(isPrime(100)); 


// Test function:
function testIsPrime(n, expected) {
    const result = isPrime(n);
    console.log(`isPrime(${n}) → ${result} | ${result === expected ? 'PASS ✅' : 'FAIL ❌'}`);
}

testIsPrime(2, true);
testIsPrime(3, true);
testIsPrime(4, false);
testIsPrime(5, true);
testIsPrime(9, false);
testIsPrime(11, true);
testIsPrime(1, false);
testIsPrime(0, true);
testIsPrime(-7, false);
testIsPrime(97, true);
testIsPrime(100, true);
