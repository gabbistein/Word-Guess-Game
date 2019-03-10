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

// This is the random word from the "words" array for your game.
// var wordChoices = words[Math.floor(Math.random() * words.length)];

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

// This figures out how many guesses (out of 15) you have left.
// var updatedGuessesRemaining = function(event) {
   
// }

// // This updates your remainingGuesses to reflect how many times you've pressed a key.
// var something = 


// This makes your game initialize to the press of any key.
document.onkeyup = function(event) {
    var wordChoices = words[Math.floor(Math.random() * words.length)];
    console.log(wordChoices);
    var wordLength = wordChoices.length;
    console.log(wordLength);
    var blankWord = (underscore.repeat(wordLength));
    document.getElementById("yourWord").innerHTML = blankWord;
}



// // This is how the variable "lettesGuessed" is filled by your keystrokes.



// // This is how the game knows you've won or lost.
