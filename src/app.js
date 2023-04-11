import style from './main.css'

//variables
let word = "";
let timerOn = false;
let intervalId = "";
let lastClickedCell;
let currentCell;
let totalScore = 0;
let currentScore = 0;
let gameTime = 10; //should be 180
let playerName = "unkown";
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let isValid;
let boggleBoard;
let letters = []
let words = []
let boggleBoards = [];

//get html elements using jquery
const submitButton = $("#submit-btn");
const resetButton = $("#reset-btn");
const startButton = $("#start-btn");
const loadButton = $("#load-btn");
const btn = $(".btn");
const foundwords = $("#foundwords");
let score = $("#score");
let scoreboard = $("#scoreboard");
let timer = $("#timer");
let board = $("#board");
let cells = $("td");
let title = $("#title");

//css styles using jquery
$("#score,#timer,#submit-btn,#foundwords,#scoreboard").css({
    "display": "inline-block", "position": "relative"
});
$("#foundwords,#scoreboard").css({ "float": "right", "margin-top": "100px" });

//get 16 shuffled letters and generate a board with them
function getBoard() {
    $.ajax({
        url: "https://localhost:5000/api/Boggle/GetBoggleBoard",
        type: 'GET',
        contentType: "application/json",
        dataType: 'json'
    }
    ).done(function (data, textStatus, jqXHR) {
        boggleBoard = data;
        console.log(boggleBoard.boggleBoardId);
        generateBoard(boggleBoard); //puts the letters in clickable cells, which simulates a boggle board

    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error: " + textStatus + "\t" + errorThrown.toString());
    });
}

//get specific previously played board by id
function getOldBoard(oldBoggleBoardId) {

    let id = oldBoggleBoardId;
    $.ajax({
        url: "https://localhost:5000/api/Boggle/GetBoggleBoard" + id,
        type: 'GET',
        contentType: "application/json",
        dataType: 'json'
    }
    ).done(function (data, textStatus, jqXHR) {
        boggleBoard = data;
        generateBoard(boggleBoard); //puts the letters in clickable cells, which simulates a boggle board

    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error: " + textStatus + "\t" + errorThrown.toString());
    });
}

//checks if the word is valid 
function isValidWord() {

    let id = boggleBoard.boggleBoardId;
    $.ajax({
        url: "https://localhost:5000/api/Boggle/IsValidWord/" + id + "/" + word,
        type: 'GET',
        contentType: "application/json",
        dataType: 'json'
    }
    ).done(function (data, textStatus, jqXHR) {
        isValid = data;

        if (isValid) { //if submitted word is valid
            //add the word to found words list
            words.push(word);
            foundwords.append("<br>", word);
            scoreWord(); //get score of that word
            word = ""; //reset the word
        }

        else {
            alert('Word not valid!');
            word = ""; //reset the word
        }

    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error: " + textStatus + "\t" + errorThrown.toString());
    });

}

//calculate and get the score based on word length, then calculate total score
function scoreWord() {
    let lastWord = words[words.length - 1]
    $.ajax({
        url: "https://localhost:5000/api/Boggle/ScoreWord/" + lastWord,
        type: 'GET',
        contentType: "application/json",
        dataType: 'json'
    }
    ).done(function (data, textStatus, jqXHR) {
        currentScore = data;
        calculateTotalScore(currentScore); // calculate total score

    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error: " + textStatus + "\t" + errorThrown.toString());
    });
}

//click handlers for the buttons
//submit button
submitButton.click(function () {
    if (word.length > 0) {
        submitWord();
    }
})
//start button
startButton.click(function () {
    start();
})
//reset button
resetButton.click(function () {
    reset();
})
//load button
loadButton.click(function () {
     //ask for board Id and check if entered Id is valid
     const pattern = /^[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){4}[0-9a-fA-F]{8}$/i;
     let oldBoggleBoardId = prompt("Please enter board Id");
     if (pattern.test(oldBoggleBoardId)) {
         resetGame(); //reset the current game
         getOldBoard(oldBoggleBoardId); //generate new board with the old board Id
         startTimer(gameTime);
     } else {
         alert("Not valid Id!");
     }
   
})

//when submitting a word check if word is valid 
function submitWord() {

    if (word.length > 2) { //check word length so that we can alert the player in case its too short
        if (!words.includes(word)) { //make sure the word is not already entered

            isValidWord()

        } else {
            alert('This word has already been found');
        }
    } else {
        alert('The word should be 3 characters or longer!');
        word = ""; //reset the word
    }
    //remove player input from board 
    cells.removeClass("clicked");
    lastClickedCell = undefined;
    currentCell = undefined;

}

//start a game if none is ongoing, otherwise reset current game before starting a new one
function start() {
    if (!timerOn) {

        startTimer(gameTime); //start timer 
        getBoard();

    }
    else {
        resetGame();
        start();
    }
}

//remove player input from board
function reset() {
    cells.removeClass("clicked");
    word = "";
    lastClickedCell = undefined;
    currentCell = undefined;
}

//generates boggle board
function generateBoard(_boggleBoard) {
    

    // Define the letters for the Boggle board
    // const letters = [
    //     "A", "A", "E", "E", "G", "N", "N", "R", "S", "W", "D", "K",
    //     "O", "T", "U", "L", "G", "Y", "B", "J", "X", "Q", "Z", "M",
    //     "C", "P", "F", "H", "V", "I"
    // ];

    // // Define the function to shuffle the letters
    // function shuffle(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // }

    // // Shuffle the letters
    // shuffle(letters);

    //convert 2D array of dice objects into an 1D array of characters
    _boggleBoard.dice.forEach(element => element.forEach(element => letters.push(element.value)));

    //build the board 
    for (let i = 0; i < 4; i++) {
        const row = $("<tr>");
        for (let j = 0; j < 4; j++) {
            const cell = $("<td>");
            cell.text(letters[i * 4 + j]);
            row.append(cell);
        }
        board.append(row);
    }
    cells = $("td");

    //add click events to each cell
    addClickEvents();

}

function addClickEvents() {
    // Attach click event listener to cells
    $('td').click(function () {
        // Get row and column index of clicked cell
        var rowIndex = $(this).parent().index();
        var colIndex = $(this).index();
        //get clicked cell
        currentCell = $(this);
        // Check if clicked cell is adjacent to last clicked cell
        if (lastClickedCell === undefined ||
            Math.abs(rowIndex - lastClickedCell.rowIndex) <= 1 &&
            Math.abs(colIndex - lastClickedCell.colIndex) <= 1) {
            // Allow click
            lastClickedCell = { rowIndex: rowIndex, colIndex: colIndex };
            //check if user is not clicking on previous cell
            if (!(currentCell.hasClass("clicked"))) {
                word += currentCell.text(); // append the clicked letter to the word
                currentCell.addClass("clicked"); // add the "clicked" class to the cell
                console.log(word); // log the updated word to the console
            }
            else {
                alert("You can't click same letter twice!");
            }
        }
        else {
            // Do not allow click
            alert('You can only click letters adjacent to the last clicked letter!');
        }
    });
}

//starts the countdown timer
function startTimer(_totalSeconds) {

    timerOn = true
    let totalSeconds = _totalSeconds;

    intervalId = setInterval(function () {


        if (totalSeconds === 0) {
            if (timerOn) {

                timerOn = false;
                finishGame();
            }
            clearInterval(intervalId);
        } else {
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = totalSeconds % 60;
            totalSeconds--;

            timer.text("Time: " + `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
        }
    }, 1000);

}

//deletes old board, generates new one, ask player to enter name for scoreboard
function finishGame() {

    alert('time is up!');

    //add current board to board list 
    boggleBoards.push(boggleBoard);

    // prompt for player name and create an anchor element with the name as the text content
    playerName = prompt("Please enter your name");

    //count amount of entries in scoreboard
    let entryCount = $("#scoreboard").find(".score-entry").length + 1;

    // create the scoreboard entry as a span element with a class name
    const entry = $("<span>").addClass('score-entry').html("<br>" + entryCount.toString() + ". " + playerName +
        " scored " + totalScore + " points on " + `${day}-${month}-${year}`)


    // add an event listener to the entry span element to alert the full entry string when clicked
    entry.on('click', () => {

        loadOldBoard(entryCount)
    });

    // append the entry to the scoreboard element
    scoreboard.append(entry);

    //remove the board
    reset();
    $("#board tr").remove();

    //reset score 
    totalScore = 0;
    currentScore = 0;
    score.text("Score: " + totalScore.toString());

    //empty the lists
    foundwords.html("Words found:");
    words = []
    letters = []

    //reset timer
    timerOn = false
    clearInterval(intervalId);
}
//restart the board with new letters
function resetGame() {

    //remove the board
    reset();
    $("#board tr").remove();

    //reset score 
    totalScore = 0;
    currentScore = 0;
    score.text("Score: " + totalScore.toString());

    //empty the lists
    foundwords.html("Words found:");
    words = []
    letters = []

    //reset the timer
    timerOn = false
    clearInterval(intervalId);

}
//calculate score of last entered word based on official boggle rules
function calculateTotalScore(_currentScore) {

    // let wordLength = word.length;
    // currentScore = 0;
    // if (wordLength == 3 || wordLength == 4) { currentScore = 1 }
    // else if (wordLength == 5) { currentScore = 2 }
    // else if (wordLength == 6) { currentScore = 3 }
    // else if (wordLength == 7) { currentScore = 5 }
    // else if (wordLength == 8 || wordLength > 8) { currentScore = 11 }

    totalScore += _currentScore;
    score.text("Score: " + totalScore.toString());
}
//load an older board
function loadOldBoard(_boardNr) {

    //restart the board and get the old board 
    resetGame();
    startTimer(gameTime);
    getOldBoard(boggleBoards[_boardNr - 1].boggleBoardId);

}



