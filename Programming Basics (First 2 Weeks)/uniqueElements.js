// Find Unique Elements in an Array
// Create findUnique(arr), which returns an array with only the unique elements from the input array.
// Example: [1, 2, 2, 3, 4, 4, 5] → [1, 3, 5]

function findUnique(arr) {
    let countMap = {};      
    let uniqueArr = [];    
    
    // Count the occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        countMap[element] = (countMap[element] || 0) + 1;
    }

    // Collect the unique elements (those that appear only once)
    for (let key in countMap) {
        if (countMap[key] === 1) {
            uniqueArr.push(Number(key)); // Push to the result (convert to number if needed)
        }
    }

    return uniqueArr;
}

// Test cases to verify the solution
function testFindUnique(arr, expected) {
    const result = findUnique(arr);
    console.log(`findUnique([${arr}]) → [${result}] | ${JSON.stringify(result) === JSON.stringify(expected) ? 'PASS ✅' : 'FAIL ❌'}`);
}

// Test cases
testFindUnique([1, 2, 2, 3, 4, 4, 5], [1, 3, 5]); 
testFindUnique([1, 2, 3, 4, 4, 5, 5], [1, 2, 3]); 
testFindUnique([1, 1, 1, 1], []);
testFindUnique([7, 8, 9, 7], [8, 9]);  
