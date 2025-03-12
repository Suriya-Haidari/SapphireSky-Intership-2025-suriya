// Find the nth Fibonacci Number
// Implement fibonacci(n), which returns the nth Fibonacci number.
function fibonacci(n) {
    if (n <= 1) return n;  
    let a = 0, b = 1;  
    for (let i = 2; i <= n; i++) {
        let next = a + b;  
        a = b; 
        b = next;
    }
    return b; 
}

console.log(fibonacci(10));



// Test function to check the nth Fibonacci number
function testFibonacci(n, expected) {
    const result = fibonacci(n);
    console.log(`Fibonacci(${n}) → ${result} | ${result === expected ? 'PASS ✅' : 'FAIL ❌'}`);
}

// Test cases:
testFibonacci(-1, -5);
testFibonacci(0, 0);
testFibonacci(1, 1);
testFibonacci(2, 1);
testFibonacci(3, 2);
testFibonacci(4, 3);
testFibonacci(5, 5);
testFibonacci(6, 8);
testFibonacci(7, 13);
testFibonacci(8, 21);
testFibonacci(9, 34); 
testFibonacci(10, 55); 
