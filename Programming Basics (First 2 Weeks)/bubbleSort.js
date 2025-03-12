// Sorting an Array Using Bubble Sort
// Write a function bubbleSort(arr) that sorts an array using the Bubble Sort algorithm.

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}



function testBubbleSort(arr, expected) {
    const result = bubbleSort(arr);
    console.log(`bubbleSort([${arr}]) → [${result}] | ${JSON.stringify(result) === JSON.stringify(expected) ? 'PASS ✅' : 'FAIL ❌'}`);
}

// Test cases
testBubbleSort([5, 3, 8, 1, 2], [1, 2, 3, 5, 8]);  
testBubbleSort([9, 7, 6], [6, 7, 9]);  
testBubbleSort([12, 4, 8], [4, 8, 12]);
