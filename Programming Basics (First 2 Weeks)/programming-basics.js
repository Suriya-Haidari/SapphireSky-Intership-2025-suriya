// Find GCD (Greatest Common Divisor)
// Given two numbers, find their GCD using a loop.

function findGCD(a, b) {
    let gcd = 1;
  
    // Find the smaller of the two numbers
    let min = a < b ? a : b;
  
    // Loop from 1 to the smaller number
    for (let i = 1; i <= min; i++) {
      // Check if both numbers are divisible by i
      if (a % i === 0 && b % i === 0) {
        gcd = i; // Update GCD
      }
    }
  
    return gcd;
  }
  
console.log(findGCD(12, 18)); 


// Pattern Printing - Pyramid
// Write a program that prints this pattern for N = 5:
// markdown
// CopyEdit
//    *  
//   ***  
//  *****  
// *******  


function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
      let spaces = ' '.repeat(n - i);        
      let stars = '*'.repeat(2 * i - 1); // 2 * every number is even but -1 make that odd
      console.log(spaces + stars);    
    }
  }
  
  printPyramid(4);
  

// Convert Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit using the formula:
// F=(C×95)+32F = (C \times \frac{9}{5}) + 32F=(C×59​)+32

function celsiusToFahrenheit(celsius) {
    // Formula to convert Celsius to Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

console.log("Celsius" +" "+ celsiusToFahrenheit(100)); 


// Find the Maximum of Three Numbers
// Implement a function maxOfThree(a, b, c) that returns the largest of three numbers.
function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(maxOfThree(10, 20, 15)); 
console.log(maxOfThree(5, 8, 12));
