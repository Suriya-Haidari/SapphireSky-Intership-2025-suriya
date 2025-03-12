// Find Unique Elements in an Array
// Create findUnique(arr), which returns an array with only the unique elements from the input array.
// Example: [1, 2, 2, 3, 4, 4, 5] → [1, 3, 5]


function findUnique(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
function testFindUnique(arr, expected) {
    const result = findUnique(arr);
    console.log(`findUnique([${arr}]) → [${result}] | ${JSON.stringify(result) === JSON.stringify(expected) ? 'PASS ✅' : 'FAIL ❌'}`);
}

// Test cases for Find Unique Elements
testFindUnique([1, 2, 2, 3, 4, 4, 5], [1, 3, 5]);  // Unique elements are [1, 3, 5]
testFindUnique([1, 2, 3, 4, 4, 5, 5], [1, 2, 3]);  // Unique elements are [1, 2, 3]
testFindUnique([1, 1, 1, 1], []);  // No unique elements, should return an empty array
testFindUnique([7, 8, 9, 7], [8, 9]);  // Unique elements are [8, 9]
 