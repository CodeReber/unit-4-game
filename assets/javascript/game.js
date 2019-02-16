//box to hold random num to be guessed
//box with var for win and lose status
//button for 4 img, that are assigned a ran number
//box for var to hold total score, based on click of ran images
//box to hold num from click on button
//to win must track each click and keep adding to total score. 
//If total score is equal to Ran number you win
//If total score is over you lose
//If total score is under keep playing
var win = 0;
var lose = 0;
var winner = "You Win!";
var loser = "You lost!";
var random;
var totalscore;
var letterBtn = $("<button>")
$("#win").html("win " + win);
$("#lose").html("lose " + lose);

function gamestart(){
    random = getRandomInt(19, 120);
    var ranbutton1 = getRandomInt(1,12);
    var ranbutton2 = getRandomInt(1,12);
    var ranbutton3 = getRandomInt(1,12);
    var ranbutton4 = getRandomInt(1,12);
    $("#pic1").attr("data-num", ranbutton1);
    $("#pic2").attr("data-num", ranbutton2);
    $("#pic3").attr("data-num", ranbutton3);
    $("#pic4").attr("data-num", ranbutton4);
    totalscore = 0;
    $("#guessnumbox").html(random);
    $("#totalscore").html(totalscore)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$("button").on("click", function(){
    totalscore += parseInt($(this).attr("data-num"));
    $("#totalscore").html(totalscore);
    console.log(totalscore);
    if(totalscore > random){
        lose++;
        $("#lose").html("lose " + lose);
        $("#status").html(loser);
        gamestart();
    } 
    else if (totalscore === random){
        win++;
        $("#win").html("win " + win);
        $("#status").html(winner);
        gamestart();
    }else{
        console.log("keep playing");
    }
});
gamestart();