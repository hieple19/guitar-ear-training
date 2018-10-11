var gameOver = false;
var noChords = 1;
var playIndex = 0;
var gameCount = 1;


function hideResult(){
  $(".game__results").css("display","none");
};



function getChords() {
  var randomChords = [];
  // hideResult();
  $(".game__results").css("display","none");
  for (var i = 0; i < noChords; i++) {
    randomChords.push(chords[Math.floor(Math.random() * chords.length)]);
  }
  console.log("Random chords " + randomChords);
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
  // stopSound();
  console.log("running");
  currentChords = getChords();
  guessedChords.length = 0;
  gameOver = false;
  playChords();
  $(".game__status-progress").text("");
}

$(".game__guess-buttons").on("click", function() {
  if (!gameOver) {
    update($(this).text());
  }
});

$(".game__status-next_icon").on("click", function() {
  newGame();
});

$(".game__status-replay_icon").on("click", function() {
  playChords();
});

function formatArrayString(arrayString) {
  return arrayString.toString().replace(/,/g, " ");
}

function update(guessedChord) {
  guessedChords.push(guessedChord);
  $(".game__status-progress").text(formatArrayString(guessedChords));
  if (guessedChords.length === currentChords.length) {
    checkResults();
    // console.log("Guessed " + guessedChords);
    // console.log("Current " + currentChords);
    gameOver = true;
  }
}

function checkResults() {
  if (compareArrays(guessedChords, currentChords)) {
    $(".game__results").css("display","flex");
    $(".game__results-correct").css("display", "block");
    $(".game__results-wrong").css("display", "none");
    $(".game__results-actual").css("display", "none");
  } else {
    $(".game__results").css("display","flex");
    $(".game__results-wrong").css("display", "block");
    $(".game__results-correct").css("display", "none");
    $(".game__results-actual").css("display", "block");
    $(".game__results-actual-chord").text(formatArrayString(currentChords));
  }
  // var toAdd =
  //   gameCount + ". Guessed: " + guessedChords + " Correct: " + currentChords;
  // $(".past").append("<p>" + toAdd + "</p>");
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
