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

// These are all ur bad guesses.
var wrongLetters = [];

// This is what I'm using to build my blank word to guess.
var underscore = " _ ";

// This means the game has started.
var gameStarted = false;

// This means the game has finished.
var gameFinished = false;

// This is how many times you've won.
var wins = 0;
var validKeyPress = false;


// YOUR GAME GOES HERE:

function resetGame() {
    totalGuesses = 20;
    wrongLetters = [];
    document.getElementById("badGuesses").innerHTML = wrongLetters.join(", ");
    remainingGuesses = totalGuesses;
    gameStarted = false;
    updateDisplay();
}

function updateDisplay() {

    // This array will store the letters you've guessed this turn.
    var lettersGuessed = [];

    // This will store all the letters you guess that correspond with your word, aka your correct word.
    var goalWord = [];

    var wordChoices = words[Math.floor(Math.random() * words.length)].split("");

    for (let i = 0; i < wordChoices.length; i++) {
        goalWord[i] = underscore;
    }
    console.log(wordChoices);

    document.getElementById("yourWord").innerHTML = goalWord.join("");
    document.getElementById("guessesLeft").innerHTML = totalGuesses;

    function findIndex(arr, value) {
        var index = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === value) {
                index.push(i);
            }
        }
        return index;
    }

    // This runs through your target word's array and recognizes if you have a value at any index within the target array. If so, push that value (aka the index #) into the variable "index".
    document.onkeyup = function (event) {

        // These are the letters you've guessed. 
        var keyPresses;
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            validKeyPress = true;
        } else {
            validKeyPress = false;
        }
        console.log(validKeyPress);

        if (validKeyPress === true) {
            keyPresses = String.fromCharCode(event.keyCode).toLowerCase();

            // This is how many guesses you have left before you lose.
            var urGuesses = (totalGuesses - wrongLetters.length);

            // This is running your index "checking" function, findIndex.
            var indexValue = findIndex(wordChoices, event.key);
            console.log(indexValue);

            // If correct, replace underscore(s) in the letter's position.
            // If incorrect, log into div id badGuesses.
            if (indexValue.length > 0) {
                for (let i = 0; i < indexValue.length; i++) {
                    goalWord[indexValue[i]] = event.key;
                    document.getElementById("yourWord").innerHTML = goalWord.join("");
                }
                console.log("YUUUUUP");
                checkWin();
            } else {
                wrongLetters.push(keyPresses);
                document.getElementById("badGuesses").innerHTML = wrongLetters.join(", ");
                urGuesses--;
                document.getElementById("guessesLeft").innerHTML = urGuesses;
                console.log("NAH");
                checkWin();
            }

            // You win when all underscores are gone from goalWord.
            function checkWin() {
                if (goalWord.includes(underscore) === false) {
                    alert("You win! Play again?");
                    resetGame();
                } else if ((urGuesses === 0 && goalWord.includes(underscore) === true)) {
                    alert("You lose! Play again?");
                    resetGame();
                }
            }
        }
    };
};

resetGame();