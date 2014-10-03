var userChoice = prompt("Do you choose rock, paper, fireball?");
var computerChoice = Math.random();
console.log(computerChoice);
if (computerChoice <=0.33) {computerChoice = ("rock");}

else if (computerChoice > 0.34 && computerChoice < 0.67)
	{computerChoice= ("paper");}

else {computerChoice = ("fireball");}

document.getElementById("results").innerHTML = "Computer chose " + computerChoice;

var result = compare(userChoice,computerChoice);
console.log(result);
//Rock blocks fireball.
//Fireball engulfs paper.
//Paper covers rock.


function compare(choice1, choice2){if(choice1 === choice2) {return "The result is a tie!";}

else if (choice1 === "rock") 

{if(choice2 === "fireball"){return "rock blocks fireball";}


else {return "paper covers rock";}}


else if (choice1 === "paper"){if(choice2 === "rock") 

	{return "paper covers rock";} else 

{return "fireball engulfs paper";}}



else if (choice1 === "fireball"){if(choice2 === "paper") 

	{return "fireball engulfs paper";}


else {return "rock blocks fireball";}


}




}










