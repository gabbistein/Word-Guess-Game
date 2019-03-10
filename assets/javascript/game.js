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

// You get 15 tries/guesses each game.
var totalGuesses = 15;

// This stores how many guesses you have left.
var remainingGuesses = [];

// This array will store the letters you've guessed this turn.
var lettersGuessed = [];

// This will store the word you're building during your turn.
var playerWordBuilder = [];

// This is what I'm using to build my blank word to guess.
var underscore = " __ ";


// THE ENTIRETY OF YOUR GAME GOES HERE:
document.onkeyup = function(event) {
    var wordChoices = words[Math.floor(Math.random() * words.length)];
    console.log(wordChoices);
    var wordLength = wordChoices.length;
    console.log(wordLength);
    var blankWord = (underscore.repeat(wordLength));
    document.getElementById("yourWord").innerHTML = blankWord;


}




// How many guesses (out of 15) do you have left?

// Update your remainingGuesses to reflect how many times you've pressed a key.

// Make a confirm when you win or lose (game is over) to get back to the initial screen without the blank letter slots.