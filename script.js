
let computerPlayerDisplay = document.getElementById("computerPlayer");
let userPlayerDisplay = document.getElementById("userPlayer");
let result = document.getElementById("result");
let userPlayerChoice = document.querySelectorAll('button');

let userChoice ;
 userPlayerChoice.forEach(userPlayerChoice => userPlayerChoice.addEventListener('click', (e) => {
 userChoice = e.target.id;
 userPlayerDisplay.innerHTML = userChoice;
 randomComputerChoice();
 resultAll();
}))
let computerChoice;
function randomComputerChoice () {
    let random = Math.floor(Math.random()*3)+ 1;
    
   if (random == 1 ){
    computerChoice = 'rock'
   }
   if (random == 2 ){
    computerChoice = 'paper'
   }
   if (random == 3 ){
    computerChoice = 'scissor'
   }
   computerPlayerDisplay.innerHTML = computerChoice;
}
let forAll;
function resultAll(){
    if(userChoice == computerChoice){
        forAll = "draw";
    }
    else if ((userChoice == 'scissor' && computerChoice == 'rock') || 
    (userChoice == 'rock' && computerChoice == 'paper') || 
    (userChoice == 'paper'&& computerChoice == 'scissor')){
        forAll ='loser';
    }else {
        forAll = 'you win';
    }
    result.innerHTML = forAll;
}
