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

    result = getZodiacSign(3, 21);
    if (result === "Aries") {
        console.log("Pass: Test passed for March 21 (Aries)");
    } else {
        console.log("Fail: Test failed for March 21");
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

    result = getZodiacSign(13, 5); 
    if (result === "Invalid month") {
        console.log("Pass: Test passed for invalid month");
    } else {
        console.log("Fail: Test failed for invalid month");
    }
}

// Run the test
testZodiacSign();
