

// Determine Season by Month
// Take an integer (1-12) as input.
// Use switch to print the corresponding season:
// 12, 1, 2 → Winter
// 3, 4, 5 → Spring
// 6, 7, 8 → Summer
// 9, 10, 11 → Fall

function determineSeason(month) {

    let season;
    switch (month) {
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "Fall";
            break;
                    
        default:
            season = "Enter a number btw 1-12"
            break;
    }
    return season
}

console.log(determineSeason(3));



function testDetermineSeason() {
    console.log(determineSeason(12) === "Winter" ? 'PASS ✅' : 'FAIL ❌');
    console.log(determineSeason(3) === "Spring" ? 'PASS ✅' : 'FAIL ❌');
    console.log(determineSeason(7) === "Summer" ? 'PASS ✅' : 'FAIL ❌');
    console.log(determineSeason(10) === "Fall" ? 'PASS ✅' : 'FAIL ❌');
    console.log(determineSeason(13) === "Enter a number btw 1-12" ? 'PASS ✅' : 'FAIL ❌');
}

testDetermineSeason();


// Second way:

function determineSeasonSecondWay(month) {
    let winter = [12, 1, 2];
    let spring = [3, 4, 5];
    let summer = [6, 7, 8];
    let fall = [9, 10, 11];

    let season;
    switch (true) {
        case winter.includes(month):
            season = "Winter";
            break;
        case spring.includes(month):
            season = "Spring";
            break;
        case summer.includes(month):
            season = "Summer";
            break;
        case fall.includes(month):
            season = "Fall";
            break;
                    
        default:
            season = "Enter a number btw 1-12";
            break;
    }
    return season;
}

console.log(determineSeasonSecondWay(10)); 



function testDetermineSeason() {
    console.log(determineSeasonSecondWay(12) === "Winter" ? 'PASS ✅' : 'FAIL ❌');
    console.log(determineSeasonSecondWay(3) === "Spring" ? 'PASS ✅' : 'FAIL ❌');
    console.log(determineSeasonSecondWay(7) === "Summer" ? 'PASS ✅' : 'FAIL ❌');
    console.log(determineSeasonSecondWay(10) === "Fall" ? 'PASS ✅' : 'FAIL ❌');
    console.log(determineSeasonSecondWay(13) === "Enter a number btw 1-12" ? 'PASS ✅' : 'FAIL ❌');
}

testDetermineSeason();
