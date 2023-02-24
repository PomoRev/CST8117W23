/*  Code for as Simple Tic Tac Toe Game
 *
 *  By Frank Emanuel
 *  For CST8117 Web Design
 * 
 */

// Starting setup 

let currentPlayerSymbol = "X";
let openBoxes = 9;
let gameWon = false;
let listenerMonitor = [false, false, false, false, false, false, false, false, false];
let clickablesList;
let xWins = 0, oWins = 0;

// set up the listeners on the boxes.

resetGame();

function clickable(i) {
              
    // function for when box clicked
    // start by removing the onclick attribute

    clickablesList[i].removeAttribute("onclick");
    listenerMonitor[i] = false;
    
    // mark the box and change the player

    clickablesList[i].innerText = currentPlayerSymbol;
    currentPlayerSymbol = (currentPlayerSymbol == 'X') ? 'O' : 'X';
    messageBox.innerText = "It is the " + currentPlayerSymbol + " player's turn";

    // it is only possible to win when at least five boxes have been marked
    // check that now

    if (--openBoxes < 5){
        checkWin();
    }

    if (gameWon){
 
        // deactive the rest of the boxes

        for ( let iterator = 0; iterator < clickablesList.length; iterator++ ) {

            if (listenerMonitor[iterator]){
                clickablesList[iterator].removeAttribute("onclick");
                listenerMonitor[iterator] = false;
            }

        }

    } else if (openBoxes < 1) {
  
        // last box clicked and no winner

        messageBox.innerText = "So sorry, no one won that one."
 
    }
}

function resetGame(){

    currentPlayerSymbol = "X";
    openBoxes = 9;
    gameWon = false;
    listenerMonitor = [false, false, false, false, false, false, false, false, false];

    lines = document.getElementsByClassName("line");

    for (let i = 0; i < lines.length; i++) {

        lines[i].style.display = "none";

    }

    messageBox.innerText = "Player X starts the game, choose a box.";

    clickablesList = document.getElementsByClassName("clickable");

    for (let i = 0; i < clickablesList.length; i++){

        clickablesList[i].innerText = "";

        if (!listenerMonitor[i]){
           
            clickablesList[i].setAttribute("onclick", "clickable( " + i +" );");

            listenerMonitor[i] = true;
        }
    }

    // check the cookies 

    let cookies = document.cookie.split(";");

    // if there are two cookies, grab them and put them into the scorecard

    if (cookies.length < 2) {

        document.cookie = "XWINS=" + xWins;
        document.cookie = "OWINS=" + oWins;

    } else {

        let temporaryCookie = cookies[0].split("=");

        if (temporaryCookie[0] == "XWINS"){

            xWins = Number(temporaryCookie[1]);
            temporaryCookie = cookies[1].split("=");
            oWins = Number(temporaryCookie[1]);

        } else {

            oWins = Number(temporaryCookie[1]);
            temporaryCookie = cookies[1].split("=");
            xWins = Number(temporaryCookie[1]);

        }

        xScore.innerText = "Player X has " + xWins + " points.";
        oScore.innerText = "Player O has " + oWins + " points.";

    }   
}

function checkWin (){

    // winning combos are 123, 456, 789, 147, 258, 369, 159, or 357
    // read in the boxes and check for a winner

    let arrayOfBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let winnerLetter;

    for (let i = 0; i < clickablesList.length; i++ ){

        if ( (clickablesList[i].innerText == 'X') || (clickablesList[i].innerText == 'O') )
        arrayOfBoxes[i] = clickablesList[i].innerText;

    }

    // check for a win

    if ((arrayOfBoxes[0] == arrayOfBoxes [1]) && (arrayOfBoxes[1] == arrayOfBoxes [2])){
        
        messageBox.innerText = "Player " + arrayOfBoxes[0] + " has won!";     
        line1.style.display = "block";
        line1.style.transform = "initial";
        line1.style.transform = "translate(0px, 42px)";
        line1.style.width = "223px";
        gameWon = true;
        winnerLetter = arrayOfBoxes[0];

    } else if ((arrayOfBoxes[3] == arrayOfBoxes [4]) && (arrayOfBoxes[4] == arrayOfBoxes [5])) {

        messageBox.innerText = "Player " + arrayOfBoxes[3] + " has won!";
        line4.style.display = "block";
        gameWon = true; 
        winnerLetter = arrayOfBoxes[3];

    } else if ((arrayOfBoxes[6] == arrayOfBoxes [7]) && (arrayOfBoxes[7] == arrayOfBoxes [8])){

        messageBox.innerText = "Player " + arrayOfBoxes[6] + " has won!";
        line5.style.display = "block";
        gameWon = true; 
        winnerLetter = arrayOfBoxes[6];

    } else if ((arrayOfBoxes[0] == arrayOfBoxes [3]) && (arrayOfBoxes[3] == arrayOfBoxes [6])){

        messageBox.innerText = "Player " + arrayOfBoxes[0] + " has won!";
        line1.style.display = "block";
        line1.style.transform = "initial";
        line1.style.transform = "translate(-99px, 140px) rotate(90deg)";
        line1.style.width = "223px";
        gameWon = true; 
        winnerLetter = arrayOfBoxes[0];

    } else if ((arrayOfBoxes[1] == arrayOfBoxes [4]) && (arrayOfBoxes[4] == arrayOfBoxes [7])){

        messageBox.innerText = "Player " + arrayOfBoxes[1] + " has won!";
        line2.style.display = "block";
        gameWon = true; 
        winnerLetter = arrayOfBoxes[1];

    } else if ((arrayOfBoxes[2] == arrayOfBoxes [5]) && (arrayOfBoxes[5] == arrayOfBoxes [8])){

        messageBox.innerText = "Player " + arrayOfBoxes[2] + " has won!";
        line3.style.display = "block";
        gameWon = true; 
        winnerLetter = arrayOfBoxes[2];

    } else if ((arrayOfBoxes[0] == arrayOfBoxes [4]) && (arrayOfBoxes[4] == arrayOfBoxes [8])){

        messageBox.innerText = "Player " + arrayOfBoxes[0] + " has won!";
        line1.style.display = "block";
        line1.style.transform = "initial";
        line1.style.transform = "translate(-1px, 140px) rotate(45deg)";
        line1.style.width = "300px";
        gameWon = true; 
        winnerLetter = arrayOfBoxes[0];

    } else if ((arrayOfBoxes[2] == arrayOfBoxes [4]) && (arrayOfBoxes[4] == arrayOfBoxes [6])){

        messageBox.innerText = "Player " + arrayOfBoxes[2] + " has won!";
        line1.style.display = "block";
        line1.style.transform = "initial";
        line1.style.transform = "translate(-4px, 140px) rotate(135deg)";
        line1.style.width = "300px";
        gameWon = true; 
        winnerLetter = arrayOfBoxes[2];

    }

    // if the game is won update the scorecard

    if (gameWon){
        if ( winnerLetter == "X" ) {

            xScore.innerText = "Player X has " + ++xWins + " points.";

            document.cookie = "XWINS=" + xWins;

        } else {

            oScore.innerText = "Player O has " + ++oWins + " points.";

            document.cookie = "OWINS=" + oWins;

        }
    }

}

function togglePinned() {

    let scoreCard = document.getElementsByClassName("scorecard");   // array

    (pinbox.checked) ? scoreCard[0].classList.add("scorecardpinned") 
                     : scoreCard[0].classList.remove("scorecardpinned");

}

function resetScore () {

    xWins = oWins = 0;

    xScore.innerText = "Player X has " + xWins + " points.";
    oScore.innerText = "Player O has " + oWins + " points.";

    document.cookie = "XWINS=" + xWins;
    document.cookie = "OWINS=" + oWins;
}

