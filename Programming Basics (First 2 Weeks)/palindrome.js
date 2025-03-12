// Check if a String is a Palindrome
// Write a function isPalindrome(str) that returns true if the given string is a palindrome.
// Example: "racecar" → true, "hello" → false

function isPalindrome(str) {
    // Reverse the string and check if it is equal to the original string
    return str === str.split('').reverse().join('');
}

// Test examples
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));


// Test function to check different cases
function testIsPalindrome(str, expected) {
    const result = isPalindrome(str);
    console.log(`isPalindrome("${str}") → ${result} | ${result === expected ? 'PASS ✅' : 'FAIL ❌'}`);
}

testIsPalindrome("racecar", true);
testIsPalindrome("hello", false);  
testIsPalindrome("madam", true);   
testIsPalindrome("apple", false);  
testIsPalindrome("A man a plan a canal Panama", false);  