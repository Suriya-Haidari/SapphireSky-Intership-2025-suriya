// Find the GCD of Two Numbers
// Write a function gcd(a, b) that finds the Greatest Common Divisor (GCD) using the 

function gcd(a, b) {
    
    while (b !== 0) {
        let temp = b;
        b = a % b; 
        a = temp;   
    }
    return a;  
}

console.log(gcd(56, 98));  



// Test function for gcd
function testGcd(a, b, expected) {
    const result = gcd(a, b);
    console.log(`gcd(${a}, ${b}) = ${result} | ${result === expected ? 'PASS ✅' : 'FAIL ❌'}`);
}

// Running test cases
testGcd(56, 98, 14);  
testGcd(12, 18, 6);  
testGcd(100, 25, 25);
testGcd(7, 3, 1);   
testGcd(18, 9, 9);
testGcd(5, 10, 0);   
testGcd(100, 1, 1);
testGcd(15, 10, 5);