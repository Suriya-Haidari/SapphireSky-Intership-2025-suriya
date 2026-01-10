// This question is related to the programming basics seciton 
// Music Playlist Controller
// Take a command ("Play", "Pause", "Next", "Previous").
// Use switch to perform the correct action.


function playlistController(command) {
    let action;
    switch (command) {
        case "Play":
            action = "Playing the music";
            break;
        case "Pause":
            action = "Music paused";
            break;
        case "Next":
            action = "Next music";
            break;
        case "Previous":
            action = "Previous music";
            break;
        default:         
        action = "Choose a valid action including (Play, Pause, Next, Previous)";
        break;
    }
    return action;
}

console.log(playlistController("Play"));


const testPlaylistController = () => {
    const test1 = playlistController("Play");
    console.log(`Request for ${test1}: Expected: Playing the music | got ${test1 === "Playing the music" ? "Pass ✅" : "Faile ❌"}`);
    const test2 = playlistController("Pause");
    console.log(`Request for ${test2}: Expected: Music paused | got ${test2 === "Music paused" ? "Pass ✅" : "Faile ❌"}`);
    const test3 = playlistController("Next");
    console.log(`Request for ${test3}: Expected: Next music | got ${test3 === "Next music" ? "Pass ✅" : "Faile ❌"}`);
    const test4 = playlistController("Previous");
    console.log(`Request for ${test4}: Expected: Previous music | got ${test4 === "Previous music" ? "Pass ✅" : "Faile ❌"}`);
    const test5 = playlistController("Delete");
    console.log(`Request for ${test5}: Expected: Choose a valid action including (Play, Pause, Next, Previous) | got ${test5 === "Choose a valid action including (Play, Pause, Next, Previous)" ? "Pass ✅" : "Faile ❌"}`);

}
testPlaylistController();




