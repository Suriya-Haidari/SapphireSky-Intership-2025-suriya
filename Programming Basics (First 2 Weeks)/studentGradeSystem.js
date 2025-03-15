// Student Grade System
// Take a student's score (0-100).
// Use switch to assign a letter grade (A, B, C, D, F).
// Student Grade System
// Take a student's score (0-100).
// Use switch to assign a letter grade (A, B, C, D, F).

function studentsGradeSystem(score) {
    let result;

    if (score < 0 || score > 100) {
        return "Enter a number between 0 and 100";
    }

    switch (true) {
        case score === 100:
            result = "Grade A+";
            break;
        case score >= 95:
            result = "Grade A";
            break;
        case score >= 90:
            result = "Grade B";
            break;
        case score >= 80:
            result = "Grade C";
            break;
        case score >= 70:
            result = "Grade D";
            break;
        case score >= 65:
            result = "Grade F";
            break;
        default:
            result = "Student failed, try again.";
            break;
    }
    return result;
}

// Test function
function testStudentsGradeSystem() {
    console.log(studentsGradeSystem(85) === "Grade C" ? 'PASS ✅' : 'FAIL ❌');
    console.log(studentsGradeSystem(95) === "Grade A" ? 'PASS ✅' : 'FAIL ❌');
    console.log(studentsGradeSystem(100) === "Grade A+" ? 'PASS ✅' : 'FAIL ❌');
    console.log(studentsGradeSystem(72) === "Grade D" ? 'PASS ✅' : 'FAIL ❌');
    console.log(studentsGradeSystem(60) === "Grade F" ? 'PASS ✅' : 'FAIL ❌');
    console.log(studentsGradeSystem(110) === "Enter a number between 0 and 100" ? 'PASS ✅' : 'FAIL ❌');
    console.log(studentsGradeSystem(-5) === "Enter a number between 0 and 100" ? 'PASS ✅' : 'FAIL ❌');
}

testStudentsGradeSystem();
