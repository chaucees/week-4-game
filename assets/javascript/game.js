
// DISPLAY RANDOM NUMBER
randomNumberDisplay=Math.floor(Math.random()*50);
document.getElementById("randomnumber").innerHTML=randomNumberDisplay;


var counter = 0;
var wins = 0;
var looses = 0;

// ASSIGN RANDOM VALUE TO IMAGES
var plantOne = Math.floor((Math.random() * 12) +1 );
var plantTwo = Math.floor((Math.random() * 12) +1 );
var plantThree = Math.floor((Math.random() * 12) +1 );
var plantFour = Math.floor((Math.random() * 12) +1 );

$("#plant1").val(plantOne);
$("#plant2").val(plantTwo);
$("#plant3").val(plantThree);
$("#plant4").val(plantFour);


// DISPLAYS THE VALUE OF THE IMAGE CLICKED IN YOUR YOUR GUESS DIV

$("#plant1").on('click', function() {

    document.write 
    // when clicked, add plant1 random value to total user guess
    $('#userguess').html(plantOne);

    if (plantOneValue > randomNumberDisplay) {
        counter++;
    }
})
// #plant-2 on click assign random value then add to score    
$("#plant2").on('click', function() {
    // when clicked, add plant1 random value to total user guess
    $('#userguess').html(plantTwo);
})
// #plant-3 on click assign random value then add to score 
$("#plant3").on('click', function() {
    // when clicked, add plant1 random value to total user guess
    $('#userguess').html(plantThree);
})   
// #plant-4 on click assign random value then add to score 
$("#plant4").on('click', function() {
    // when clicked, add plant1 random value to total user guess
    $('#userguess').html(plantFour);
})   

// If the user reaches the random number alert "win" if they go over the random number alert "try again"


// UPDATE WINS


// UPDATE LOSSES