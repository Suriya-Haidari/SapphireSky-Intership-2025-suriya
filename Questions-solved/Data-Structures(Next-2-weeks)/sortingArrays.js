// How do you merge two sorted arrays into one sorted array?

// first way:
const firstArray = [1, 2 ,3 ,4 ,5];
const secondArray = [6, 7, 8, 9, 10];

const mergeSortedArrays = [...firstArray, ...secondArray];

console.log(mergeSortedArrays);


// Second way:
const arrayOne = [1, 2 ,3 ,4 ,5];
const arrayTwo = [6, 7, 8, 9, 10];

const mergedArrays = arrayOne + "," + arrayTwo;

console.log(mergedArrays);


// Third way:
function mergeArrays(firstSortedArray, secondArray) {
    return firstSortedArray + "," + secondArray;
}

console.log(mergeArrays([1, 2 ,3 ,4 ,5], [6, 7, 8, 9, 10]));