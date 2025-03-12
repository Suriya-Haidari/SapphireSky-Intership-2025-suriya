function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        console.log(`low: ${low}, high: ${high}, mid: ${mid}, arr[mid]: ${arr[mid]}`);
    
        if (arr[mid] === target) {
            console.log('Found it!');
            return mid;
        }
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    

    return -1; // Target not found
}

// console.log(binarySearch([1, 3, 5, 7, 9, 11], 5)); // Output: 2 (index of 5)
console.log(binarySearch([1, 3, 5, 7, 9, 11], 10)); // Output: -1 (not found)



function testBinarySearch(arr, target, expected) {
    const result = binarySearch(arr, target);
    console.log(`binarySearch([${arr}], ${target}) → ${result} | ${result === expected ? 'PASS ✅' : 'FAIL ❌'}`);
}

// Test cases 
testBinarySearch([1, 3, 5, 7, 9, 11], 5, 2);  
testBinarySearch([1, 3, 5, 7, 9, 11], 10, -1);
testBinarySearch([1, 3, 5, 7, 9, 11], 1, 0);  
testBinarySearch([1, 3, 5, 7, 9, 11], 11, 5); 
testBinarySearch([1, 3, 5, 7, 9, 11], 0, -1); 
