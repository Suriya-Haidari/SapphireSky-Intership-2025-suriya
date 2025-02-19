// Question 1: write a program that takes a number as input and check if it is odd or even 

function checkNum(num) {

    if (num % 2 == 0) {
        console.log("The number is even!")
    } else {
        console.log("The number is odd!")
    }
    return 
}

checkNum(3) // output: the number is even!

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

console.log(gradeCalculator(95)); 
console.log(gradeCalculator(50));  
console.log(gradeCalculator(-5));  

// Third question: Write a program that takes two numbers as input and print the smaller number.

function calculateSmallerNum(num1, num2) {
    let smallerNumber = num1 < num2 ? num1 : num2;
    console.log(`Smaller number is ${smallerNumber}`);
}

calculateSmallerNum(2, 5);

// Question 4: Leap year checker: A year is a leap year if it is divisible by 4 butnot 100, unless also divisible by 400.
// Write aprogram that determines if a given year is a leap year.

function leapYearChecker(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}
leapYearChecker(2025);

// Question 5: Triangle Validity
// Given three sides if a triangle, check  if they form a valid triangle,
//  the sum of any two sides must be greater than the third 
function triangleValidaionChecker(a,b,c) {
    if (a + b > c && b + c > a && a + c > b){
        console.log("The triangle is valid!")
    } else {
        console.log("Triangle isn't valid!")
    }
}
triangleValidaionChecker(2,2,4)

