// 1. Arrays
// Simple
// Write a function to find the largest element in an array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findLargestElement() {

    let largest = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }    
    }

    return largest;

}

console.log(findLargestElement());



// Write a function to find the sum of all elements in an array.

function findSumOfNumbers(...sumNumber) {
    let sum = 0;

    for (let i = 0; i < sumNumber.length; i++) {
        sum += sumNumber[i];
    }
    return {sum};
}

console.log(findSumOfNumbers(2,2));


// How do you check if an array contains a specific element?

const elements = [2, "a", 3, "b"];

function checkElements(element) {
    for (let i = 0; i < elements.length; i++) {

        if(elements[i] === element){
            element = elements[i];
            return true;
        } else {
            return false;
        }
    }
    return element;
}

console.log(checkElements(2));
console.log(checkElements(20));


// Write a function to count the occurrences of a specific element in an array.

const arr = [2, 2, "suriya", 1, 1, 1];

function countOccurences(occurrences) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === occurrences){
          console.log(occurrences++);
        }
    }
    return occurrences;
}

countOccurences(2);


// Implement a function to find the smallest number in an array.

const num = [-1, 0, 1, 2];

function findSmallestNumber() {
    let smallerNumber = num[0];
    for (let i = 0; i < num.length; i++) {
        if (num[i] < smallerNumber){
            smallerNumber = num[i];
        }
    }
    return {smallerNumber};
}
console.log(findSmallestNumber());


// Write a function to reverse an array without using the built-in reverse() method.
// Explain it please!

function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      // Swap elements
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
  
      start++;
      end--;
    }
  
    return arr;
  }
  
  console.log(reverseArray([1,2,3]));