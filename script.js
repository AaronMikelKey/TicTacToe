// Array for computer to pick from
let availableSpaces = [
    "topLeft", "topCenter", "topRight",
    "midLeft", "midCenter", "midRight",
    "botLeft", "botCenter", "botRight"
];
//Document reference to playable spaces
let playArr = document.getElementById("gameboard").querySelectorAll(".square");
//Variables for player choice of X or O
let playerChoice;
let computerChoice;
//Function for player to choose X or O
let chooseArr = document.getElementById("choose").querySelectorAll(".square");
for (let i=0;i<chooseArr.length;i++) {
    chooseArr[i].addEventListener("click", function() {
        playerChoice = this.innerHTML;
        if (playerChoice === "O") {
            computerChoice = "X";
        } else {
            computerChoice = "O";
        }
        document.getElementById("choose").classList.add("noDisplay");
        document.getElementById("gameboard").classList.remove("hidden");
    });
}
//function for player to choose space
const playerPlay = function() {
    for (let j=0;j<playArr.length;j++) {
        playArr[j].addEventListener("click", function() {
            this.innerHTML = playerChoice.toString();
            computerPlay();
        });
    }
}
//function for computer to choose space
const computerPlay = function() {
    let min = Math.ceil(0);
    let max = Math.floor(availableSpaces.length);
    let choice = Math.floor(Math.random() * (max - min) + min);
    playArr[choice].innerHTML = computerChoice.toString();
}
//function to display winner

//game function

//Testing functions
playerPlay();