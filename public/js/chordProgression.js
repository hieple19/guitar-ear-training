var gameOver = false;
// var playLoop = true;
var playIndex = 0;
var gameCount = 1;

function getChords() {
  var randomChords = [];
  for (var i = 0; i < chords.length; i++) {
    randomChords.push(chords[Math.floor(Math.random() * 3)]);
  }
  console.log(randomChords);
  return randomChords;
}

var currentChords = getChords();
var guessedChords = [];
playChords();

function playChords() {
  playLoop = true;
  playIndex = 0;
  sounds[currentChords[0]].sound.play();
}

function newGame() {
  currentChords = getChords();
  guessedChords.length = 0;
  gameOver = false;
  playChords();
  $("#result").text("");
}

$(".game__guess-buttons").on("click", function() {
  if (!gameOver) {
    update($(this).text());
  }
});

$("#newgame").on("click", function() {
  newGame();
});

$("#listen").on("click", function() {
  playChords(currentChords);
});

function update(guessedChord) {
  guessedChords.push(guessedChord);
  $("#result").text(guessedChords);
  console.log("Guessed " + guessedChords);
  if (guessedChords.length === currentChords.length) {
    checkResults();
    console.log("Guessed " + guessedChords);
    console.log("Current " + currentChords);
    gameOver = true;
  }
}

function checkResults() {
  if (compareArrays(guessedChords, currentChords)) {
    $("#result").text("Correct");
  } else {
    $("#result").text("Wrong!");
  }
  var toAdd =
    gameCount +
    ". Guessed: " +
    guessedChords +
    " Correct: " +
    currentChords;
  $(".past").append("<p>" + toAdd + "</p>");
  gameCount++;
}

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i].toLowerCase() !== arr2[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
