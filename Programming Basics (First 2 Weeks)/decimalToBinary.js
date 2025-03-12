// Convert Decimal to Binary
// Implement decimalToBinary(n), which converts a decimal number to its binary equivalent.

function decimalToBinary(n) {
    if (n === 0) return '0';
    let binary = '';
    while (n > 0) {
        binary = (n % 2) + binary;
        n = Math.floor(n / 2);
    }
    return binary;
}

// Test funciton

function testDecimalToBinary(n, expected) {
    const result = decimalToBinary(n);
    console.log(`decimalToBinary(${n}) → ${result} | ${result === expected ? 'PASS ✅' : 'FAIL ❌'}`);
}

// Test cases for Decimal to Binary
testDecimalToBinary(10, '1010');
testDecimalToBinary(5, '101');    
testDecimalToBinary(16, '10000');
testDecimalToBinary(0, '0');
