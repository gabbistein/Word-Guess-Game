// This stores all possible words for the game.
var words = [
    "phenotype",
    "biological",
    "creation",
    "wilderness",
    "glacier",
    "sunshine",
    "oxygen",
    "atmosphere",
    "environment",
    "geology",
    "wildlife",
    "organism",
    "civilization",
   ];

// You get 20 tries/guesses each game.
var totalGuesses = 20;

// This stores how many guesses you have made.
var remainingGuesses = [];

// This array will store the letters you've guessed this turn.
var lettersGuessed = [];

// This will store all the letters you guess that correspond correctly with your word.
var correctGuesses = [];

// This is what I'm using to build my blank word to guess.
var underscore = " _ ";

// This means the game has started.
var gameStarted = false;

// This means the game has finished.
var gameFinished = false;

// This is how many times you've won.
var wins = 0;

// This chooses your random word.
var wordChoices = words[Math.floor(Math.random() * words.length)].split("");
console.log(wordChoices);


// YOUR GAME GOES HERE:

function resetGame() {
    remainingGuesses = totalGuesses;
    gameStarted = false;
    lettersGuessed = [];
    correctGuesses = [];
    updateDisplay(); 
}

// function initialize() {
    // var wordLength = wordChoices.length;
    // console.log(wordLength);
    // var blankWord = (underscore.repeat(wordLength));

    for (let i = 0; i < wordChoices.length; i++) {
        correctGuesses[i] = underscore;        
    }
    console.log(correctGuesses);
    document.getElementById("yourWord").innerHTML = correctGuesses.join("");
    document.getElementById("guessesLeft").innerHTML = totalGuesses;


document.onkeyup = function(event) {

    // These are the letters you've guessed. 
    var keyPresses;  
    if (typeof event !== "undefined") {
        keyPresses = event.keyCode;
    } else if (event) {
        keyPresses = event.which;
    }
    lettersGuessed.push(String.fromCharCode(keyPresses));
    document.getElementById("badGuesses").innerHTML = lettersGuessed;
    console.log(keyPresses);

    // This is how many guesses you have left before you lose.
    var urGuesses = (totalGuesses-lettersGuessed.length);
    console.log(urGuesses);
    document.getElementById("guessesLeft").innerHTML = urGuesses;

    // This replaces the underscore with the key you typed.
    for (let i = 0; i < correctGuesses.length; i++) {
        if (correctGuesses[i].keyCode === keyPresses) {
            var urWord = [];
            urWord.push(String.fromCharCode(keyPresses));
            console.log(urWord);           
        }
    }
    };

// initialize();





// When you've typed one key and generated your random "word", the next key will either go to the incorrect key presses or replace any of the underscores.

// All key presses until your win or loss (you only get 20 guesses) will either populate the incorrect key presses or replace the underscores.

// Each key press (minus the first one) is counted towards a turn. You only get 20.

// Only allow letters to be counted as a turn/entered into incorrect key presses.

// When you reach 20 key presses (other than the first one) you lose.

// When you get the word guessed correctly (you've replaced the underscores correctly to uncover the letters "underneath") you win!

// When you win or lose, get a confirm to "Play again?"

