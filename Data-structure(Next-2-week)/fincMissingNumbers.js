// Write a function to find the missing number in an array of 1 to N.

function findMissingNumber(arr, N) {
    // Calculate the sum of the first N natural numbers
    const expectedSum = (N * (N + 1)) / 2;
    
    // Calculate the sum of the elements in the array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    // The missing number will be the difference between expectedSum and actualSum
    return expectedSum - actualSum;
}

// Example Usage:
const arr = [1, 2, 4, 5, 6]; // Missing 3
const N = 6;

console.log(findMissingNumber(arr, N)); // Output: 3
