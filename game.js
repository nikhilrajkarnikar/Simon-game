var buttonColours = ["red", "blue", "green", "yellow"];    

var gamePattern = [];

var userClickedPattern = [];

$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
});

function playSound(name){
    var source = "sounds/" + name + ".mp3"
    console.log({ source })
    var audio = new Audio(source);
    audio.play();
}


function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
} 

$(document).keydown(function (e) {
    nextSequence();
});





