
// We can add an event listener like this to be able to 'listen' out for certain events
// Here is an example of creating a listener to do something whenever the button
// with an id of 'submit-button' in our html file is clicked:

// const submitButton = document.getElementById('submit-button');
// submitButton.onclick = function (event) {
//     console.log(event);
//     console.log("PLAYER ADDED")
// }


// We need to create an array to keep all of our player names in
const playersArray = [];

// Function Goal: Take the Input value with the player name
// Add the player to the total list of players
// Display the new total list of players
function addPlayer() {
    // Get the value of the text that was entered in the input of our html with the id 'player-input'
    const playerInput = document.getElementById('player-input').value;
    
    // Take the player input, and store the value inside our playerArray 
    // to keep the history of all players who have been added to the game
    playersArray.push(playerInput)

    // Find the html container labeled 'player-names'
    const playerNamesContainer = document.getElementById("player-names");
    
    // Loop through the players Array and put each one inside <p>{playerName} </p>
    // Then, assign the value to innerHTML
    let allInnerHTML= '';

    // To Do this, we can use the traditional Loop Structure here:
    // for(let i=0; i < playersArray.length; i++) {
    //     let string = `<p>${playersArray[i]}</p>`
    //     allInnerHTML = allInnerHTML + string;
    // }

    // OR we can use ES6 Loops!!!
    for(let playerName of playersArray) {
        let string = `<p>${playerName}</p>`
        allInnerHTML = allInnerHTML + string;
    }

    // Changing the value of our HTML inside playerNamesContainer to be the names of ALL the players
    playerNamesContainer.innerHTML = allInnerHTML;
}