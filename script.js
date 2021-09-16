var wins = 0;
var losses = 0;
var ties = 0;

var options = ["R","P","S"]

var runGame = function(){
    var userSel = window.prompt("Select R, P, or S!");

    if (!userSel){
        return window.alert("you didn't even try!");
    }

    userSel = userSel.toUpperCase();

    var randComp = Math.floor(Math.random() * options.length);
    var compSel = options[randComp];

    window.alert("the computer chose " + compSel);

    if (userSel === compSel){
        ties++;
        window.alert("It's a tie!");
    } else if ((userSel === "R" && compSel ==="S") || (userSel === "S" && compSel ==="P") || (userSel === "P" && compSel === "R")){
        wins++;
        window.alert("you win!");

    } else{
        losses++;
        window.alert("you lose!");
    };
    
    window.alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

    var runAgain = window.confirm("would you like to go again?")
    if (runAgain){
        runGame();
    } else{
        window.alert("Scared potter?")
    };


}

runGame();