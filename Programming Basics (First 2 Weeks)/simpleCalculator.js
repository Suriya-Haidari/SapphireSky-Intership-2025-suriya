// Simple Calculator
// Take two numbers and an operator (+, -, *, /).
// Use switch to perform the correct operation and return the result.


function simpleCalculator(firstNum, secondNum, operator) {
    let res;
    switch (operator) {
        case "+":
           res = firstNum + secondNum;
            break;
        case "-":
            res = firstNum - secondNum;
            break;
        case "%":
            res = firstNum % secondNum;
            break;
        case "/":
            res = secondNum !== 0 ? firstNum / secondNum : "Division by zero is not allowed.";
            break;
        case "*":
            res = firstNum * secondNum; 
        default: "Please enter valid operator and numbers."
            break;
    }
    return res;
}


console.log(simpleCalculator(4, 5 ,"-"));
console.log(simpleCalculator(2, 2 , "*"));




function testSimpleCalculator() {
    const result1 = simpleCalculator(10, 5, '+');
    console.log(`Addition Test: 10 + 5 = ${result1} | Expected: 15 | ${result1 === 15 ? 'PASS ✅' : 'FAIL ❌'}`);

    const result2 = simpleCalculator(10, 5, '-');
    console.log(`Subtraction Test: 10 - 5 = ${result2} | Expected: 5 | ${result2 === 5 ? 'PASS ✅' : 'FAIL ❌'}`);

    const result3 = simpleCalculator(10, 5, '*');
    console.log(`Multiplication Test: 10 * 5 = ${result3} | Expected: 50 | ${result3 === 50 ? 'PASS ✅' : 'FAIL ❌'}`);

    const result4 = simpleCalculator(10, 5, '/');
    console.log(`Division Test: 10 / 5 = ${result4} | Expected: 2 | ${result4 === 2 ? 'PASS ✅' : 'FAIL ❌'}`);

    const result5 = simpleCalculator(10, 0, '/');
    console.log(`Division by Zero Test: 10 / 0 = ${result5} | Expected: Error: Division by zero is not allowed. | ${result5 === "Error: Division by zero is not allowed." ? 'PASS ✅' : 'FAIL ❌'}`);

    const result6 = simpleCalculator(10, 5, '^');
    console.log(`Invalid Operator Test: 10 ^ 5 = ${result6} | Expected: Error: Invalid operator. Please use one of +, -, *, /. | ${result6 === "Error: Invalid operator. Please use one of +, -, *, /." ? 'PASS ✅' : 'FAIL ❌'}`);
}

testSimpleCalculator();
