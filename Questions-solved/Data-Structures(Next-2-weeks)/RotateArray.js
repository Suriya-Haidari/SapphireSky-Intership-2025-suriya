function rotateArray(k) {
    const arr = [1,2,3,4,5]
    const n = arr.length;
    if (n === 0) return arr;
    k = k % n; 
    
    for (let i = 0; i < k; i++) {
      // Remove the last element
      const last = arr.pop();
      // Add it to the front
      arr.unshift(last);
    }
  
    return arr;
  }
console.log(rotateArray(1));
console.log(rotateArray(2)); 
console.log(rotateArray(3));
console.log(rotateArray(4));



const testRotateArray = () => {
    // Checking the values not the references
    const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  
    const test1 = rotateArray(1);
    console.log(`Test k=1: Expected: [5,1,2,3,4] | Got: ${JSON.stringify(test1)} | ${isEqual(test1, [5,1,2,3,4]) ? "Pass ✅" : "Fail ❌"}`);
  
    const test2 = rotateArray(2);
    console.log(`Test k=2: Expected: [4,5,1,2,3] | Got: ${JSON.stringify(test2)} | ${isEqual(test2, [4,5,1,2,3]) ? "Pass ✅" : "Fail ❌"}`);
  
    const test3 = rotateArray(3);
    console.log(`Test k=3: Expected: [3,4,5,1,2] | Got: ${JSON.stringify(test3)} | ${isEqual(test3, [3,4,5,1,2]) ? "Pass ✅" : "Fail ❌"}`);
  
    const test4 = rotateArray(5);
    console.log(`Test k=5: Expected: [1,2,3,4,5] | Got: ${JSON.stringify(test4)} | ${isEqual(test4, [1,2,3,4,5]) ? "Pass ✅" : "Fail ❌"}`);
  
    const test5 = rotateArray(7);
    console.log(`Test k=7: Expected: [4,5,1,2,3] | Got: ${JSON.stringify(test5)} | ${isEqual(test5, [4,5,1,2,3]) ? "Pass ✅" : "Fail ❌"}`);
  };
  
  testRotateArray();
  