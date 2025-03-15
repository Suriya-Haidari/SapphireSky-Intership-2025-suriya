// Roman Numeral Converter
// Take an integer (1-10) as input.
// Use switch to print the corresponding Roman numeral.

// First way:
function romanNumeral(number) {
        let romanNum;
        switch (number) {
            case 1:
                romanNum = "I";
                break;
            case 2:
                romanNum = "II";
                break;
            case 3:
                romanNum = "III";
                break;
            case 4:
                romanNum = "IV";
                break;
            case 5:
                romanNum = "V";
                break;
            case 6:
                romanNum = "VI";
                break;
            case 7:
                romanNum = "VII";
                break;
            case 8:
                romanNum = "VIII";
                break;
            case 9:
                romanNum = "IX";
                break;
            case 10:
                romanNum = "X";
                break;
            default: 
            return "Please enter a number from 1-10"; 
            }
        return romanNum;
    }

console.log(romanNumeral(10));


// Second way:
function romanNumeralSecondWay(num) {
    const romanNum = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    switch (num) {
          case 1:
               return romanNum[0];
            case 2:
                return romanNum[1];
            case 3:
               return romanNum[2];
            case 4:
               return romanNum[3];
            case 5:
               return romanNum[4];
            case 6:
               return romanNum[5];
            case 7:
               return romanNum[6];
            case 8:
               return romanNum[7];
            case 9:
               return romanNum[8];
            case 10:
               return romanNum[9];
            default: 
            romanNum = "Please enter a number from 1-10"
                break;
            }
            return romanNum
        }

console.log(romanNumeralSecondWay(2));


// Third way but without using switch:
function romanNumeralThirdWay(num) {
    const romanNum = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    if (num >= 1 && num <= 10) {
        return romanNum[num - 1];
    } else {
        return "Please enter a number from 1 to 10";
    }
}

console.log(romanNumeralThirdWay(2));


// Test function 
function testRomanNumeral() {
    let result;

    result = romanNumeral(2);
    if (result === "II") {
        console.log("Pass: Test passed for 2");
    } else {
        console.log("Fail: Test failed for 2");
    }

    result = romanNumeral(7);
    if (result === "VII") {
        console.log("Pass: Test passed for 7");
    } else {
        console.log("Fail: Test failed for 7");
    }

    result = romanNumeral(8);
    if (result === "VIII") {
        console.log("Pass: Test passed for 8");
    } else {
        console.log("Fail: Test failed for 8");
    }

    result = romanNumeral(10);
    if (result === "X") {
        console.log("Pass: Test passed for 10");
    } else {
        console.log("Fail: Test failed for 10");
    }

    // Test for invalid number (out of range)
    result = romanNumeral(11);
    if (result === "Please enter a number from 1-10") {
        console.log("Pass: Test passed for 11 (invalid input)");
    } else {
        console.log("Fail: Test failed for 11 (invalid input)");
    }
}

testRomanNumeral();
