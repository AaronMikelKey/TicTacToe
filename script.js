// Array for computer to pick from
let availableSpaces = [
    "topLeft", "topCenter", "topRight",
    "midLeft", "midCenter", "midRight",
    "botLeft", "botCenter", "botRight"
];
//Document reference to playable spaces
let playArr = document.getElementById("gameboard").querySelectorAll(".square");
console.log(playArr);
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
        game();
    });
}
//function for player to choose space
const playerPlay = function() {
    for (let j=0;j<playArr.length;j++) {
        playArr[j].addEventListener("click", function() {
            if (availableSpaces.indexOf(this.id) != -1) { //checks to make sure space is available
                this.innerHTML = playerChoice.toString(); //inserts players X or O into html
                let removed = availableSpaces.splice(availableSpaces.indexOf(this.id), 1); //remove chosen box's id from available array
                winner();
                computerPlay(); //computers turn
            }
        });
    }
}
//function for computer to choose space
const computerPlay = function() {
    let min = Math.ceil(0);
    let max = Math.floor(availableSpaces.length);
    let choice = Math.floor(Math.random() * (max - min) + min);
    let chosenId = availableSpaces[choice]; //id of the chosen space
    if (availableSpaces.indexOf(chosenId) != -1) { //checks to make sure space is available
        document.getElementById(chosenId).innerHTML = computerChoice.toString(); //
        let removed = availableSpaces.splice(availableSpaces.indexOf(chosenId), 1); //remove chosen box's id from available array
    }
    winner();
}
//function to display winner
/*
Pseudo code:
check for 3 x's or 3 o's in a row vertically, diagonally, or horizontally.
check inner html of playArr
*/

const winner = function() {
    let horizontal = [[],[],[]];
    let vertical = [[],[],[]];
    let diagonal = [[],[]];
    let winner;

    for (let i=0;i<3;i++) {
        horizontal[0].push(playArr[i].innerHTML); //top row 0,1,2
        horizontal[1].push(playArr[i + 3].innerHTML); //3,4,5
        horizontal[2].push(playArr[i + 6].innerHTML); //6,7,8

        vertical[0].push(playArr[i * 3].innerHTML); //left colum, 0,3,6
        vertical[1].push(playArr[i * 3 + 1].innerHTML); //1,4,7
        vertical[2].push(playArr[i * 3 + 2].innerHTML); //2,5,8

        diagonal[0].push(playArr[i * 4].innerHTML); //top diag, 0,4,8
        diagonal[1][0] = playArr[2].innerHTML; //2
        diagonal[1][1] = playArr[4].innerHTML; //4
        diagonal[1][2] = playArr[6].innerHTML; //6
    }
    let xReg = "XXX";
    let oReg = "OOO";

    let hCheck = horizontal.join("").replace(/\,/g, "").includes(xReg);
    let vCheck = vertical.join("").replace(/\,/g, "").includes(xReg);
    let dCheck = diagonal.join("").replace(/\,/g, "").includes(xReg);
    let hCheck2 = horizontal.join("").replace(/\,/g, "").includes(oReg);
    let vCheck2 = vertical.join("").replace(/\,/g, "").includes(oReg);
    let dCheck2 = diagonal.join("").replace(/\,/g, "").includes(oReg);

    console.log(hCheck + " " + vCheck + " " + dCheck);
    console.log(hCheck2 + " " + vCheck2 + " " + dCheck2);

    if (hCheck == true || vCheck == true || dCheck == true) {
        alert("X wins!");
        location.reload();
    } else if (hCheck2 == true || vCheck2 == true || dCheck2 == true) {
        alert("O wins!");
        location.reload();
    }
}

//game function
const game = function() {
    if (playerChoice === "O") {
        computerPlay();
        playerPlay();
    } else if (playerChoice === "X") {
        playerPlay();
    }
}