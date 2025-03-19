// Print Prime Numbers from 1 to 100
// Use a loop inside another loop to check for prime numbers in a range.

// Print Prime Numbers from 1 to 100
// Use a loop inside another loop to check for prime numbers in a range.
function printPrimeNumbers() {
    let primes = [];
    for (let i = 2; i <= 100; i++) {
        let isPrime = true; 
        
        for (let a = 2; a <= Math.sqrt(i); a++) {
            if (i % a === 0) {
                isPrime = false;
                break; 
            } 
        }

        if (isPrime) {
            primes.push(i);
        }
    }
    return primes; 
}

console.log(printPrimeNumbers());

const testPrintPrimeNumbers = () => {
    const primeNumbers = printPrimeNumbers(); 
    const test1 = primeNumbers.includes(2);
    console.log(`Test for 2: ${test1 ? "Prime Number | Pass ✅" : "Fail ❌"}`);
    const test2 = primeNumbers.includes(59);
    console.log(`Test for 59: ${test2 ? "Prime Number | Pass ✅" : "Fail ❌"}`);
    const test3 = primeNumbers.includes(89);
    console.log(`Test for 89: ${test3 ? "Prime Number | Pass ✅" : "Fail ❌"}`);

}

testPrintPrimeNumbers();
