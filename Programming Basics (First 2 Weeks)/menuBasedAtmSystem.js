// Menu-Based ATM System
// Display a menu with options:
// 1 → Check Balance
// 2 → Withdraw Money
// 3 → Deposit Money
// 4 → Exit
// Use switch to perform the correct action based on the user’s choice.
// Determine Season by Month

function menuAtmChecker(perform) {

    let result;
    switch (perform) {
        case 1:
            result = "Check Balance"
            break;
        case 2:
            result = "Withdraw Money"
            break;
        case 3:
            result = "Deposit Money"
            break;
        case 4:
            result = "Exit"
            break;               
        default: 
            result = "Please choose a number btw 1-4."
            break;
    }
    return result
}

console.log(menuAtmChecker(3));




function testMenuAtmChecker() {
    console.log(menuAtmChecker(1) === "Check Balance" ? 'PASS ✅' : 'FAIL ❌');

    console.log(menuAtmChecker(2) === "Withdraw Money" ? 'PASS ✅' : 'FAIL ❌');

    console.log(menuAtmChecker(3) === "Deposit Money" ? 'PASS ✅' : 'FAIL ❌');

    console.log(menuAtmChecker(4) === "Exit" ? 'PASS ✅' : 'FAIL ❌');

    console.log(menuAtmChecker(5) === "Please choose a number between 1-4." ? 'PASS ✅' : 'FAIL ❌');
}

testMenuAtmChecker();
