// How do you merge two sorted arrays into one sorted array?
function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    let result = [];
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
  
    // Add remaining elements (if any)
    while (i < arr1.length) result.push(arr1[i++]);
    while (j < arr2.length) result.push(arr2[j++]);
  
    return result;
  }
  
  // Example
  const firstArray = [1, 4, 6, 8, 9];
  const secondArray = [2, 3, 5, 6, 8, 9];
  
  console.log(mergeSortedArrays(firstArray, secondArray));
  