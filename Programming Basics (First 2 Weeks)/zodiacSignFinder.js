// Zodiac Sign Finder
// Take a birth month and day.
// Use switch to determine the person's zodiac sign.

function getZodiacSign(month, day) {
    let zodiacSign;

    switch (month) {
        case 1:
            if (day >= 20) {
                zodiacSign = "Aquarius";
            } else {
                zodiacSign = "Capricorn";
            }
            break;
        case 2: 

            if (day >= 19) {
                zodiacSign = "Pisces";
            } else {
                zodiacSign = "Aquarius";
            }
            break;
        case 3: 

            if (day >= 21) {
                zodiacSign = "Aries";
            } else {
                zodiacSign = "Pisces";
            }
            break;
        case 4: 

            if (day >= 20) {
                zodiacSign = "Taurus";
            } else {
                zodiacSign = "Aries";
            }
            break;
        case 5: 

            if (day >= 21) {
                zodiacSign = "Gemini";
            } else {
                zodiacSign = "Taurus";
            }
            break;
        case 6: 

            if (day >= 21) {
                zodiacSign = "Cancer";
            } else {
                zodiacSign = "Gemini";
            }
            break;
        case 7: 

            if (day >= 23) {
                zodiacSign = "Leo";
            } else {
                zodiacSign = "Cancer";
            }
            break;
        case 8: 

            if (day >= 23) {
                zodiacSign = "Virgo";
            } else {
                zodiacSign = "Leo";
            }
            break;
        case 9: 

            if (day >= 23) {
                zodiacSign = "Libra";
            } else {
                zodiacSign = "Virgo";
            }
            break;
        case 10:

            if (day >= 23) {
                zodiacSign = "Scorpio";
            } else {
                zodiacSign = "Libra";
            }
            break;
        case 11:

            if (day >= 22) {
                zodiacSign = "Sagittarius";
            } else {
                zodiacSign = "Scorpio";
            }
            break;
        case 12:

            if (day >= 22) {
                zodiacSign = "Capricorn";
            } else {
                zodiacSign = "Sagittarius";
            }
            break;
        default:
            zodiacSign = "Invalid month";
            break;
    }
    
    return zodiacSign;
} 
console.log(getZodiacSign(3, 25)); 



function testZodiacSign() {
    let result;

    // Test cases for valid dates
    result = getZodiacSign(1, 20);
    if (result === "Aquarius") {
        console.log("Pass: Test passed for January 20 (Aquarius)");
    } else {
        console.log("Fail: Test failed for January 20");
    }

    result = getZodiacSign(2, 19);
    if (result === "Pisces") {
        console.log("Pass: Test passed for February 19 (Pisces)");
    } else {
        console.log("Fail: Test failed for February 19");
    }

    result = getZodiacSign(3, 21);
    if (result === "Aries") {
        console.log("Pass: Test passed for March 21 (Aries)");
    } else {
        console.log("Fail: Test failed for March 21");
    }

    result = getZodiacSign(4, 20);
    if (result === "Taurus") {
        console.log("Pass: Test passed for April 20 (Taurus)");
    } else {
        console.log("Fail: Test failed for April 20");
    }

    result = getZodiacSign(5, 21);
    if (result === "Gemini") {
        console.log("Pass: Test passed for May 21 (Gemini)");
    } else {
        console.log("Fail: Test failed for May 21");
    }

    result = getZodiacSign(6, 21);
    if (result === "Cancer") {
        console.log("Pass: Test passed for June 21 (Cancer)");
    } else {
        console.log("Fail: Test failed for June 21");
    }

    result = getZodiacSign(7, 23);
    if (result === "Leo") {
        console.log("Pass: Test passed for July 23 (Leo)");
    } else {
        console.log("Fail: Test failed for July 23");
    }

    result = getZodiacSign(8, 23);
    if (result === "Virgo") {
        console.log("Pass: Test passed for August 23 (Virgo)");
    } else {
        console.log("Fail: Test failed for August 23");
    }

    result = getZodiacSign(9, 23);
    if (result === "Libra") {
        console.log("Pass: Test passed for September 23 (Libra)");
    } else {
        console.log("Fail: Test failed for September 23");
    }

    result = getZodiacSign(10, 23);
    if (result === "Scorpio") {
        console.log("Pass: Test passed for October 23 (Scorpio)");
    } else {
        console.log("Fail: Test failed for October 23");
    }

    result = getZodiacSign(11, 22);
    if (result === "Sagittarius") {
        console.log("Pass: Test passed for November 22 (Sagittarius)");
    } else {
        console.log("Fail: Test failed for November 22");
    }

    result = getZodiacSign(12, 22);
    if (result === "Capricorn") {
        console.log("Pass: Test passed for December 22 (Capricorn)");
    } else {
        console.log("Fail: Test failed for December 22");
    }

    result = getZodiacSign(13, 5); 
    if (result === "Invalid month") {
        console.log("Pass: Test passed for invalid month");
    } else {
        console.log("Fail: Test failed for invalid month");
    }
}

// Run the test
testZodiacSign();
