// Month Name and Days
// Input a number (1-12) representing a month.
// Use switch to print the name of the month and how many days it has.



function monthsNames(monthNum) {
    let monthName;
    let daysInMonth;

    switch (monthNum) {
        case 1:
            monthName = "January";
            daysInMonth = 31;
            break;
        case 2:
            monthName = "February";
            daysInMonth = 28;
            break;
        case 3:
            monthName = "March";
            daysInMonth = 31;
            break;
        case 4:
            monthName = "April";
            daysInMonth = 30;
            break;
        case 5:
            monthName = "May";
            daysInMonth = 31;
            break;
        case 6:
            monthName = "June";
            daysInMonth = 30;
            break;
        case 7:
            monthName = "July";
            daysInMonth = 31;
            break;
        case 8:
            monthName = "August";
            daysInMonth = 31;
            break;
        case 9:
            monthName = "September";
            daysInMonth = 30;
            break;
        case 10:
            monthName = "October";
            daysInMonth = 31;
            break;
        case 11:
            monthName = "November";
            daysInMonth = 30;
            break;
        case 12:
            monthName = "December";
            daysInMonth = 31;
            break;
        default:
            return "Enter a number between 1 and 12";
    }
    
    return `${monthName} has ${daysInMonth} days.`;
}

console.log(monthsNames(1));
console.log(monthsNames(2));

// Test function
function testMonthsNames() {
    console.log(monthsNames(2) === "February has 2 days." ? 'PASS ✅' : 'FAIL ❌');
    console.log(monthsNames(5) === "May has 31 days." ? 'PASS ✅' : 'FAIL ❌');
    console.log(monthsNames(12) === "December has 31 days." ? 'PASS ✅' : 'FAIL  ❌');
    console.log(monthsNames(13) === "Enter a number between 1 and 12" ? 'PASS ✅' : 'FAIL ❌');
    console.log(monthsNames(7) === "July has 31 days." ? 'PASS ✅' : 'FAIL ❌');
}

testMonthsNames();
