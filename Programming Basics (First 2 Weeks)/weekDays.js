// Switch-Case 
// Day of the Week
// Write a program that takes an integer (1-7) as input.
// Use switch to print the corresponding day of the week.
// 1 → "Monday"
// 2 → "Tuesday"
// ...
// 7 → "Sunday"

function getDayOfWeek(dayNum) {
    let day;
    switch(dayNum) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Please enter a number between 1 and 7.";
            break;
    }
    return day;
}

// Test cases
console.log(getDayOfWeek(1)); 
console.log(getDayOfWeek(3)); 
console.log(getDayOfWeek(7)); 
console.log(getDayOfWeek(8));



function testGetDayOfWeek() {
    const testCases = [
        { input: 1, expected: "Monday" },
        { input: 2, expected: "Tuesday" },
        { input: 3, expected: "Wednesday" },
        { input: 4, expected: "Thursday" },
        { input: 5, expected: "Friday" },
        { input: 6, expected: "Saturday" },
        { input: 7, expected: "Sunday" },
        { input: 8, expected: "Invalid day number. Please enter a number between 1 and 7." },
        { input: 0, expected: "Invalid day number. Please enter a number between 1 and 7." },
        { input: -1, expected: "Invalid day number. Please enter a number between 1 and 7." }
    ];

    testCases.forEach(testCase => {
        const result = getDayOfWeek(testCase.input);
        const pass = result === testCase.expected;
        console.log(`getDayOfWeek(${testCase.input}) → ${result} | ${pass ? 'PASS ✅' : 'FAIL ❌'}`);
    });
}

testGetDayOfWeek();
