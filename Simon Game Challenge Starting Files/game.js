
var buttonColours = ['red','blue','green','yellow'];
var gamePattern = []

function next_sequence(){
    var randNum = Math.floor(Math.random()*4)
    randomChosenColour = buttonColours[randNum];
    gamePattern.push(randomChosenColour)
    $('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio('sounds/'+ randomChosenColour +'.mp3');
    audio.play();
    
}

$(document).keydown(function(event){
    next_sequence();
})


$('button').click(function(event){
    var userChosenColour = event['id']
    console.log(userChosenColour)
})