
// DISPLAY RANDOM NUMBER
randomNumberDisplay=Math.floor(Math.random()*50);
document.getElementById("randomnumber").innerHTML=randomNumberDisplay;

// DEFINE VARIABLES

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


// DISPLAYS THE VALUE OF THE IMAGE CLICKED IN YOUR #USERGUESS

$("#plant1").on('click', function() {
$('#userguess').html(plantOne);
})

$("#plant2").on('click', function() { 
$('#userguess').html(plantTwo);
})

$("#plant3").on('click', function() {
$('#userguess').html(plantThree);
})  

$("#plant4").on('click', function() {
$('#userguess').html(plantFour);
})   

// IF USERGUESS TOTAL IS LESS THAN RANDOMNUMBERDISPLAY CONTINUE TO ADD
// IF USERGUESS TOTAL IS EXACTLY THE SAME AS RANDOMNUMBERDISPLAY ALERT "YOU WIN"
//

// If the user reaches the random number alert "win" if they go over the random number alert "try again"


// UPDATE WINS


// UPDATE LOSSES