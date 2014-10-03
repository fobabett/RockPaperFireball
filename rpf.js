var userChoice = prompt("rock, paper, or fireball?")

var computerChoice = Math.random();
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

//Rock blocks fireball.
//Fireball engulfs paper.
//Paper covers rock.


function compare(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return "The result is a tie!";
  }

  else if (userChoice === "rock"){
    if(computerChoice === "fireball"){
      return "rock blocks fireball";
    }


  else{
    return "paper covers rock";
  }
}


  else if (userChoice === "paper"){
    if(computerChoice === "rock"){
      return "paper covers rock";
    } 
  else {
    return "fireball engulfs paper";
  }
}



  else if (userChoice === "fireball"){
    if(computerChoice === "paper") {
    return "fireball engulfs paper";
    }


  else {
    return "rock blocks fireball";
  }


}
}
