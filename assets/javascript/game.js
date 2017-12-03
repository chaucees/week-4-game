
// DISPLAY RANDOM NUMBER
randomNumberDisplay=Math.floor(Math.random()*50);
document.getElementById("randomnumber").innerHTML=randomNumberDisplay;

// DEFINE VARIABLES

var counter = 0;
var wins = 0;
var looses = 0;
var totalScoreAdded = [];

// ASSIGN RANDOM VALUE TO IMAGES

var plantOne = Math.floor((Math.random() * 15) +1 );
var plantTwo = Math.floor((Math.random() * 15) +1 );
var plantThree = Math.floor((Math.random() * 15) +1 );
var plantFour = Math.floor((Math.random() * 15) +1 );

$("#plant1").val(plantOne);
$("#plant2").val(plantTwo);
$("#plant3").val(plantThree);
$("#plant4").val(plantFour);


// DISPLAYS THE VALUE OF THE IMAGE CLICKED IN YOUR #USERGUESS


$("#plant1").on('click', function() {
$('#userguess').html(plantOne);
    totalScoreAdded = counter += plantOne;
    $("#total-score").html(totalScoreAdded);
  });  
$("#plant2").on('click', function() { 
$('#userguess').html(plantTwo);
totalScoreAdded = counter += plantTwo;
$("#total-score").html(totalScoreAdded);
});  
$("#plant3").on('click', function() {
$('#userguess').html(plantThree);
totalScoreAdded = counter += plantThree;
$("#total-score").html(totalScoreAdded); 
});  
$("#plant4").on('click', function() {
$('#userguess').html(plantFour);
totalScoreAdded = counter += plantFour;
$("#total-score").html(totalScoreAdded);

  
});  


if (totalScoreAdded === randomNumberDisplay) {
  alert("You win!");    
}

else if (totalScoreAdded >= randomNumberDisplay) {
  looses++;
  alert("You lose!!");
  $("#losses").html(counter++);}