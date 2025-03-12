// Calculate Factorial Using Recursion
// Implement factorial(n), which calculates the factorial of n using recursion.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
console.log(factorial(4));

// First way to test the funciton:
function testFactorial(n) {
    const result = factorial(n);
    console.log(`factorial(${n}) = ${result}`);
}

// Running test cases
testFactorial(5);  
testFactorial(3);  
testFactorial(0);  
testFactorial(7); 



// Second way to test the funciton:
function testFactorialFun(n, expected) {
    const result = factorial(n);
    console.log(`factorial(${n}) → ${result} | ${result === expected ? 'PASS ✅' : 'FAIL ❌'}`);
}

// Running test cases
testFactorialFun(5, 600);  
testFactorialFun(4, 24);   
testFactorialFun(3, 6);    
testFactorialFun(0, 1);    
testFactorialFun(7, 5040);
