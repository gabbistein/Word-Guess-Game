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


// YOUR GAME GOES HERE:

function resetGame() {
    remainingGuesses = totalGuesses;
    gameStarted = false;
    lettersGuessed = [];
    goalWord = [];
    updateDisplay();
}

function updateDisplay() {

    // This stores how many guesses you have made.
    var remainingGuesses = [];

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

    // This runs through your target word's array and recognizes if you have a value at any index within the target array. If so, push that value (aka the index #) into the variable "index".
    function findIndex(arr, value) {
        var index = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === value) {
                index.push(i);
            }
        }
        return index;
    }

    document.onkeyup = function (event) {

        // These are the letters you've guessed. 
        var keyPresses;
        if (typeof event !== "undefined") {
            keyPresses = event.keyCode;
        } else if (event) {
            keyPresses = event.which;
        }
        lettersGuessed.push(String.fromCharCode(keyPresses).toLowerCase());
        console.log(lettersGuessed);

        // For all keyPresses, subtract one from totalGuesses.
        // This is how many guesses you have left before you lose.
        var urGuesses = (totalGuesses - lettersGuessed.length);
        console.log(urGuesses);
        document.getElementById("guessesLeft").innerHTML = urGuesses;

        // This is running your index "checking" function, findIndex.
        var indexValue = findIndex(wordChoices, event.key);
        console.log(findIndex(wordChoices, event.key));


        // If correct, replace underscore(s) in the letter's position.
        // If incorrect, log into div id badGuesses.
        if (indexValue.length > 0) {
            for (let i = 0; i < indexValue.length; i++) {
                goalWord[indexValue[i]] = event.key;
                document.getElementById("yourWord").innerHTML = goalWord.join("");
            }
            console.log("YUUUUUP");
        } else {
            wrongLetters.push(event.key);
            document.getElementById("badGuesses").innerHTML = wrongLetters.join(", ");
            console.log("NAH");
        }

        // You win when all underscores are gone from goalWord.



        // You lose when totalGuesses = 0.



    };
};

resetGame();

// initialize();