// This question is related to the programming basics seciton 
// Automated Toll Booth System
// Take a vehicle type ("Car", "Truck", "Bike") as input.
// Use switch to determine the toll fee.

function tollBootSystem(type) {
    let toll;
    switch (type) {
        case "Car":
            toll = "$2000";
            break;
        case "Truck":
            toll = "$5000";
            break; 
        case "Bike":
            toll = "$30";
            break;
        default: 
        toll = "We can not repair your system."
            break;
    }
    return toll;
}

console.log(tollBootSystem("Car"));


const testTollBootSystem = () => {
    const result1 = tollBootSystem('Car');
    console.log(`The car toll is about ${result1}, | Expected: $2000, ${result1 === "$2000" ? "PASS ✅" : "FAIL ❌"}`)
    const result2 = tollBootSystem('Truck');
    console.log(`The Truck toll is about ${result2}, | Expected: $5000, ${result2 === "$5000" ? "PASS ✅" : "FAIL ❌"}`)
    const result3 = tollBootSystem('Bike');
    console.log(`The Bike toll is about ${result3}, | Expected: $30, ${result3 === "$30" ? "PASS ✅" : "FAIL ❌"}`)
    const result4 = tollBootSystem('Bass');
    console.log(`The Bass toll is about ${result4}, | Expected: We can not repair your system., ${result4 === "We can not repair your system." ? "PASS ✅" : "FAIL ❌"}`)

}
testTollBootSystem()