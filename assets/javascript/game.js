
// DISPLAY RANDOM NUMBER

randomNumberDisplay=Math.floor(Math.random()*50);
document.getElementById("randomnumber").innerHTML=randomNumberDisplay;

// DEFINE VARIABLES

var counter = 0;
var wins = 0;
var losses = 0;
var totalScore = [];

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
    totalScore = counter += plantOne;
    $("#total-score").html(totalScore);
  });  
$("#plant2").on('click', function() { 
$('#userguess').html(plantTwo);
totalScore = counter += plantTwo;
$("#total-score").html(totalScore);
});  
$("#plant3").on('click', function() {
$('#userguess').html(plantThree);
totalScore = counter += plantThree;
$("#total-score").html(totalScore); 
});  
$("#plant4").on('click', function() {
$('#userguess').html(plantFour);
totalScore = counter += plantFour;
$("#total-score").html(totalScore);

});  

//UPDATE WINS AND LOSSES

function updateScore () {

if (totalScore === randomNumberDisplay) {
  $('#wins').text('' + wins);
  wins++
}

else if (totalScore >= randomNumberDisplay) {
  losses++;
  $('#losses').text('' + losses);
  
};

$(updateScore); }

