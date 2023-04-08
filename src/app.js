import style from './main.css'
// import { generateBoard, word } from './boggleboard.js'


//variables
let word = "";
let timerOn = false;
let lastClickedCell;
let currentCell;
let totalScore = 0;
let currentScore = 0;
let gameTime = 5;
let playerName = "unkown";
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

//jQuery
$(document).ready(function () {

    generateBoard();

    //get html elements using jquery
    const submitButton = $("#submit-btn");
    const resetButton = $("#reset-btn");
    const btn = $(".btn");
    const foundwords = $("#foundwords");
    let score = $("#score");
    let scoreboard = $("#scoreboard");
    let countdown = $("#countdown");
    let boggleboard = $("#boggle-board");
    let cells = $("td");
    let title = $("#title");

    //css styles using jquery
    $("#score,#countdown,#submit-btn,#foundwords,#scoreboard").css({
        "display": "inline-block", "position": "relative"
    });
    $("#foundwords,#scoreboard").css({ "float": "right", "margin-top": "100px" });

    //click handlers for the buttons
    //submit button
    submitButton.click(function () {
        if (word.length >= 3) {
            submitWord();
            reset();
        }
        else {
            alert('The minimum word lenght is 3 letters!');
        }

    })
    //reset button
    resetButton.click(function () {
        reset();
    })

    //adds latest word to submitted words overview
    function submitWord() {
        calculateScore();
        foundwords.append("<br>", word);
        word = "";
    }
    //remove player input from board
    function reset() {
        cells.removeClass("clicked");
        word = "";
        lastClickedCell = undefined;
        currentCell = undefined;
    }

    //generates boggle board
    function generateBoard() {
        //update the board
        boggleboard = $("#boggle-board");
        // Define the letters for the Boggle board
        const letters = [
            "A", "A", "E", "E", "G", "N", "N", "R", "S", "W", "D", "K",
            "O", "T", "U", "L", "G", "Y", "B", "J", "X", "Q", "Z", "M",
            "C", "P", "F", "H", "V", "I"
        ];

        // Define the function to shuffle the letters
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        // Shuffle the letters
        shuffle(letters);

        //build the board 
        for (let i = 0; i < 4; i++) {
            const row = $("<tr>");
            for (let j = 0; j < 4; j++) {
                const cell = $("<td>");
                cell.text(letters[i * 4 + j]);
                row.append(cell);
            }
            boggleboard.append(row);
        }
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
                    if (!timerOn) {
                        timerOn = true;
                        startTimer(gameTime, countdown); //start timer when clicking the first cell
                    }
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
    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text("Time: " + minutes + ":" + seconds);
            //timer has finished
            if (timerOn) {
                if (--timer < 0) {
                    timerOn = false;
                    finishGame();
                    timer = gameTime;
                }
            }
        }, 1000);
    }

    //deletes old board, generates new one, ask player to enter name for scoreboard
    function finishGame() {
        alert('time is up!');
        reset();
        $("#boggle-board tr").remove();
        generateBoard();
        boggleboard = $("boggle-board")
        cells = $("td");
        playerName = prompt("Please enter your name")
        scoreboard.append("<br>", playerName + " scored " + totalScore + " points on " + `${day}-${month}-${year}`);
        totalScore = 0;
        score.text(totalScore.toString());
        foundwords.html("");
    }
    //calculate score of last entered word based on official boggle rules
    function calculateScore() {

        let wordLength = word.length;
        currentScore = 0;
        if (wordLength == 3 || wordLength == 4) { currentScore = 1 }
        else if (wordLength == 5) { currentScore = 2 }
        else if (wordLength == 6) { currentScore = 3 }
        else if (wordLength == 7) { currentScore = 5 }
        else if (wordLength == 8 || wordLength > 8) { currentScore = 11 }

        totalScore += currentScore;
        score.text(totalScore.toString());
    }

















})
