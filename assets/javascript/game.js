

// DISPLAY RANDOM NUMBER
var randomNumbers = Math.floor(Math.random() * 50);

function randomNumber() {
    return Math.random();
}

// DISPLAY USER GUESS
document.onkeyup = function(event) {
    
    var userGuess = event.key;

    // DISPLAYS USER GUESS
    document.getElementById("#userguess").innerHTML = userGuess; 

}
