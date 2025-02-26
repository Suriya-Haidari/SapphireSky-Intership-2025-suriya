// closure example:
function outerFunction() {
    let counter = 0;
    return function innerFunction() {
        counter++;
        console.log(counter);
    }
}
const increment = outerFunction();
increment();  // 1
increment();  // 2

// this keyword example 
let thisEx = {
    name: 'Suriya',
    lastName: "Haidari",
    info: function personInfo() {
        console.log("user information" + " " + this.name, this.lastName)
    }
}
thisEx.info()


//  Write a function to find the sum of all numbers in an array.
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4]));  // 10



// write a program that takes a number as input and check if it is odd or even

function checkNum(num) {

    if (num % 2 == 0) {
        console.log("The number is even!")
    } else {
        console.log("The number is odd!")
    }
    return
}

checkNum(3) // output: the number is even!



// Given a student's scoore (0-100), document their letter grade based on the following scale: 
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

// Thir/ ite a program that takes two numbers as input and print the smaller number.

function calculateSmallerNum(num1, num2) {
    let smallerNumber = num1 < num2 ? num1 : num2;
    console.log(`Smaller number is ${smallerNumber}`);
}

calculateSmallerNum(2, 5);

// Leap year checker: A year is a leap year if it is divisible by 4 butnot 100, unless also divisible by 400.
// Write aprogram that determines if a given year is a leap year.

function leapYearChecker(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}
leapYearChecker(2025);

// Triangle Validity
// Given three sides if a triangle, check  if they form a valid triangle,
//  the sum of any two sides must be greater than the third 

function triangleValidaionChecker(a, b, c) {
    if (a + b > c && b + c > a && a + c > b) {
        console.log("The triangle is valid!")
    } else {
        console.log("Triangle isn't valid!")
    }
}
triangleValidaionChecker(2, 2, 4)

// // Speeding Ticket Calculator
// Speed limit = 60 km/h.
// If a driver goes above the speed limit, they get a fine.
// If they are driving over 100 km/h, they get double the fine.
// Implement a program that takes speed as input and determines the fine.
function speediCalculator(speed) {
    let speedLimit = 60
    if (speed > speedLimit && speed < 100) {
        console.log(`You got a fine! your speed (${speed}) was higher than limit speed ${speedLimit}km/h`)
    } else if (speed > 100) {
        console.log(`You got a fine! your speed (${speed}) was higher than limit speed 100 km/h`)

    }
}
speediCalculator(900)

// ATM Withdrawal
// A person wants to withdraw money from an ATM.
// If the withdrawal amount is a multiple of 10, allow withdrawal.
// If not, print an error message.
// If the account balance is less than the withdrawal amount, print "Insufficient Funds".

function aTMChecker(money, balance) {
    if (money % 10 !== 0) {
        console.log("Error: Withdrawal amount must be a multiple of 10.");
    } else if (money > balance) {
        console.log("Insufficient Funds");
    } else {
        console.log("Withdrawal successful");
    }
}

aTMChecker(100, 150);

// Body Mass Index (BMI) Calculator
// Given weight (kg) and height (m), calculate BMI using BMI = weight / (height * height).
// Categorize it into:
// Underweight: BMI < 18.5
// Normal weight: 18.5 ≤ BMI < 25
// Overweight: 25 ≤ BMI < 30
// Obese: BMI ≥ 30
function bMICalculato(weight, height) {
    let BMI = weight / (height * height);

    if (BMI < 18.5) {
        console.log("Underweight");
    } else if (BMI >= 18.5 && BMI < 25) {
        console.log("Normal weight");
    } else if (BMI >= 25 && BMI < 30) {
        console.log("Overweight");
    } else if (BMI >= 30) {
        console.log("Obese");
    }
}
bMICalculato(50, 1.75);
bMICalculato(70, 1.75);
bMICalculato(85, 1.75);
bMICalculato(110, 1.75);

// Electricity Bill Calculator
// Units Consumed:
// Up to 100 units: $0.50 per unit
// 101 to 200 units: $0.75 per unit
// 201 to 500 units: $1.20 per unit
// Above 500 units: $1.50 per unit

function electricityCalculator(units) {
    let cost;

    if (units <= 100) {
        cost = units * 0.50;
    } else if (units <= 200) {
        cost = units * 0.75;
    } else if (units <= 500) {
        cost = units * 1.20;
    } else {
        cost = units * 1.50;
    }

    return `$${cost.toFixed(2)}`;
}

console.log(electricityCalculator(150)); 


// Password Strength Checker
// A strong password must:
// Be at least 8 characters long.
// Contain at least one uppercase letter, one lowercase letter, and one number.
// Write a program that checks if a given password is strong or weak.


function passwordChecker(password) {
    let uppercase = false;
    let lowercase = false;
    let number = false;
        // Check if the password is at least 8 characters long
        if (password.length < 8) {
            console.log("Your password is too short. It must be at least 8 characters long.");
            return;
        }
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= 'A' && password[i] <= 'Z') {
        uppercase = true;
      } else if(password[i] >= 'a' && password[i] <= 'z'){
        lowercase = true;
      } else if (password[i] >= '0' && password[i] <= '9'){
        number = true;
      }
    }

    if (uppercase, lowercase, number) {
        console.log("Your password match all conditions!")
    } else {
        console.log("Your password didn't match all conditions!")
    }
}

passwordChecker("Hello")