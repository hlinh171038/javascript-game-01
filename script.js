
let computerPlayerDisplay = document.getElementById("computerPlayer");
let userPlayerDisplay = document.getElementById("userPlayer");
let result = document.getElementById("result");
let userPlayerChoice = document.querySelectorAll('button');

let userChoice ;
 userPlayerChoice.forEach(userPlayerChoice => userPlayerChoice.addEventListener('click', (e) => {
 userChoice = e.target.id;
 userPlayerDisplay.innerHTML = userChoice;
}))


