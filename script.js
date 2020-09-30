// Array for computer to pick from
let availableSpaces = [
    "topLeft", "topCenter", "topRight",
    "midLeft", "midCenter", "midRight",
    "botLeft", "botCenter", "botRight"
];
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
        document.getElementById("choose").classList.add("hidden");
        document.getElementById("gameboard").classList.remove("hidden");
    });
}

//function for player to choose space

//function for computer to choose space

//function to display winner

//game function