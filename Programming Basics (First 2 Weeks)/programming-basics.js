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
  
