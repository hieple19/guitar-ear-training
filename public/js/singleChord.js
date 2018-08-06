$(".game__guess-buttons").on("click", function() {
  if (!gameOver) {
    check(
      $(this)
        .text()
        .toLowerCase()
    );
    update($(this).text());
  }
});

$("#newgame").on("click", function() {
  newgame();
});

$("#listen").on("click", function() {
  listen();
});

function chooseOne() {
  return chords[Math.floor(Math.random() * 3)];
}

var currentChord = chooseOne();
var gameOver = false;
console.log(currentChord);

function listen() {
  sounds[currentChord].sound.play();
}
function newgame() {
  currentChord = chooseOne();
  console.log(currentChord);
  sounds[currentChord].sound.play();
  gameOver = false;
  $("#result").text("");
}

function check(guessedChord) {
  if (guessedChord === currentChord) {
    $("#result").text("Correct!");
  } else {
    $("#result").text("Wrong!");
  }
  gameOver = true;
}

let count = 1;
function update(guessed) {
  var toAdd =
    count + ". Guessed: " + guessed + " Correct: " + currentChord.toUpperCase();
  $(".past").append("<p>" + toAdd + "</p>");
  count++;
}
