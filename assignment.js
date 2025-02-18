// Question 1: write a program that takes a number as input and check if it is odd or even 

function checkNum(num) {

    if (num % 2 == 0) {
        console.log("The number is even!")
    } else {
        console.log("The number is odd!")
    }
    return 
}

// checkNum(3) // output: the number is even!

//  Qestion 2: Given a student's scoore (0-100), document their letter grade based on the following scale: 
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F
function gradeCalculator(num) {
    if (num > 100 || num < 0) {
        return "Invalid score! Please enter a number between 0-100.";
    }

    switch (true) {
        case num >= 90:
            return "A";
        case num >= 80:
            return "B";
        case num >= 70:
            return "C";
        case num >= 60:
            return "D";
        default:
            return "F";
    }
}

console.log(gradeCalculator(95));  // Output: "A"
console.log(gradeCalculator(50));  // Output: "F"
console.log(gradeCalculator(-5));  // Output: "Invalid score! Please enter a number between 0 and 100."
