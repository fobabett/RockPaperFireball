var userChoice = prompt("rock, paper, or fireball?")

var computerChoice = Math.random();
var userScore = 0;
var computerScore = 0;
console.log(computerChoice);

if (computerChoice <=0.33){
  computerChoice = ("rock");
}

else if (computerChoice > 0.34 && computerChoice < 0.67){
  computerChoice= ("paper");
}

else{
  computerChoice = ("fireball");
}

document.getElementById("userChoice").innerHTML = "You chose " + userChoice;
document.getElementById("computerChoice").innerHTML = "Computer chose " + computerChoice;

var result = compare(userChoice,computerChoice);
document.getElementById("results").innerHTML = result;
//document.getElementById("scoreBoard").innerHTML = ("Your Score: " + userScore + " Computer Score: " + computerScore);


//Rock blocks fireball.
//Fireball engulfs paper.
//Paper covers rock.


function compare(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return "The result is a tie!";
  }

  else if (userChoice === "rock"){
    if(computerChoice === "fireball"){
      var userScore = 1;
      var computerScore = 0;
      document.getElementById("scoreBoard").innerHTML = ("Your Score: " + userScore + " Computer Score: " + computerScore);
      return "rock blocks fireball. You win!";
    }


  else{
    var computerScore = 1;
    var userScore = 0;
    document.getElementById("scoreBoard").innerHTML = ("Your Score: " + userScore + " Computer Score: " + computerScore);
    return "paper covers rock. You lose!";
  }
}


  else if (userChoice === "paper"){
    if(computerChoice === "rock"){
      var userScore = 1;
      var computerScore = 0;
      document.getElementById("scoreBoard").innerHTML = ("Your Score: " + userScore + " Computer Score: " + computerScore);
      return "paper covers rock. You win!";
    } 
  else {
    var computerScore = 1;
    var userScore = 0;
    document.getElementById("scoreBoard").innerHTML = ("Your Score: " + userScore + " Computer Score: " + computerScore);
    return "fireball engulfs paper. You lose!";
  }
}



  else if (userChoice === "fireball"){
    if(computerChoice === "paper") {
      var userScore = 1;
      var computerScore = 0;
      document.getElementById("scoreBoard").innerHTML = ("Your Score: " + userScore + " Computer Score: " + computerScore);
    return "fireball engulfs paper. You win!";
    }


  else {
    var computerScore = 1;
    var userScore = 0;
    document.getElementById("scoreBoard").innerHTML = ("Your Score: " + userScore + " Computer Score: " + computerScore);
    return "rock blocks fireball. You lose!";
  }


}
}
