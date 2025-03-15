// Traffic Light System
// Take a traffic light color ("red", "yellow", "green") as input.
// Use switch to print the corresponding action:
// "Red" → "Stop"
// "Yellow" → "Slow Down"
// "Green" → "Go"


function trafficSystem(color) {
    let action;
    
    switch (color) {
        case 'red':
            action = "Stop";
            break;
        case 'yellow':
            action = "Slow Down";
            break;
        case 'green':
            action = "Go";
            break;
        default:
            action = "Enter a valid color | lowerCase letters!";
            break;
    }

    return action;
}

console.log(trafficSystem("red"));
console.log(trafficSystem("yellow"));



function testTrafficSystem() {
    // Test cases 
    const result1 = trafficSystem('red');
    console.log(`Test 1 - 'red': ${result1} | Expected: 'Stop' | ${result1 === 'Stop' ? 'PASS ✅' : 'FAIL ❌'}`);
    
    const result2 = trafficSystem('yellow');
    console.log(`Test 2 - 'yellow': ${result2} | Expected: 'Slow Down' | ${result2 === 'Slow Down' ? 'PASS ✅' : 'FAIL ❌'}`);
    
    const result3 = trafficSystem('green');
    console.log(`Test 3 - 'green': ${result3} | Expected: 'Go' | ${result3 === 'Go' ? 'PASS ✅' : 'FAIL ❌'}`);
    
    const result4 = trafficSystem('blue');
    console.log(`Test 4 - 'blue': ${result4} | Expected: 'Enter a valid color.' | ${result4 === 'Enter a valid color.' ? 'PASS ✅' : 'FAIL ❌'}`);
    
    const result5 = trafficSystem('RED');
    console.log(`Test 5 - 'RED': ${result5} | Expected: 'Stop' | ${result5 === 'Stop' ? 'PASS ✅' : 'FAIL ❌'}`);
}

testTrafficSystem();
