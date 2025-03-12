// Check for Vowel or Consonant
// Take a letter as input.
// Use switch to determine whether it is a vowel or a consonant.



function vowelConsomant2(letter) {
    let res;
    letter = letter.toLowerCase(); 
    
    switch (letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            res = `${letter} is a vowel`;
            break;
        default:
            res = `${letter} is a consonant`;
    }

    return res;
}

console.log(vowelConsomant2("e"));
console.log(vowelConsomant2("t"));
console.log(vowelConsomant2("A"));
console.log(vowelConsomant2("Z"));


// Test function
function testVowelConsomant2() {
    console.log(vowelConsomant2("e") === "e is a vowel" ? 'PASS ✅' : 'FAIL ❌');
    console.log(vowelConsomant2("t") === "t is a consonant" ? 'PASS ✅' : 'FAIL ❌');
    console.log(vowelConsomant2("A") === "a is a vowel" ? 'PASS ✅' : 'FAIL ❌');
    console.log(vowelConsomant2("Z") === "z is a consonant" ? 'PASS ✅' : 'FAIL ❌');
    console.log(vowelConsomant2("I") === "i is a vowel" ? 'PASS ✅' : 'FAIL ❌');
    console.log(vowelConsomant2("X") === "x is a vowel" ? 'PASS ✅' : 'FAIL ❌');
}

testVowelConsomant2();
