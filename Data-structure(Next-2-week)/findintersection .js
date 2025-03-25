// Implement a function that finds the intersection of two arrays.


function intersectArrays(arr1, arr2) {
    // Create a Set for arr1 to ensure unique elements
    const set1 = new Set(arr1);
    // Filter arr2 by checking if each element is in set1
    const intersection = arr2.filter(item => set1.has(item));
    
    return intersection;
}

const arr1 = [1, 2,2,2,2, 3, 4];
const arr2 = [2,2,2, 5];
console.log(intersectArrays(arr1, arr2)); 
