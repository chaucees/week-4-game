// DEFINE VARIABLES

var counter = 0;
var wins = 1;
var losses = 1;
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

//  CREATE AND DISPLAY  RANDOM NUMBER
function randomNumber() {
  randomNumberDisplay=Math.floor(Math.random()*50);
  document.getElementById("randomnumber").innerHTML=randomNumberDisplay;
}

function startGame() {
  randomNumber();
}

// DISPLAYS THE VALUE OF THE IMAGE CLICKED IN YOUR #USERGUESS

$("#plant1").on('click', function() {
    $('#userguess').html(plantOne);
    totalScore = counter += plantOne;
    $("#total-score").html(totalScore);
    updateScore();
  });  

$("#plant2").on('click', function() { 
    $('#userguess').html(plantTwo);
    totalScore = counter += plantTwo;
    $("#total-score").html(totalScore);
    updateScore();    
    });  

$("#plant3").on('click', function() {
    $('#userguess').html(plantThree);
    totalScore = counter += plantThree;
    $("#total-score").html(totalScore); 
    updateScore();
});  

$("#plant4").on('click', function() {
    $('#userguess').html(plantFour);
    totalScore = counter += plantFour;
    $("#total-score").html(totalScore);
    updateScore();
});  

//UPDATE WINS AND LOSSES

function updateScore () {

if (totalScore === randomNumberDisplay) {
  $('#wins').text('' + wins);
  wins++;
  restartGame();
  randomNumber();
}

else if (totalScore >= randomNumberDisplay) {
  $('#losses').text('' + losses);  
  losses++; 
  restartGame();
  randomNumber();
}

};

function restartGame() {
  counter = 0;
  startGame();

}

startGame();  