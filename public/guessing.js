var stage1 = ["a", "d", "e"];

$("#a").on("click", function() {
  if (!gameOver) {
    check($(this).attr("id"));
    // guessed = $(this).attr("id");
    guessed = $(this).textContent;
    update($(this).text());
  }
});

$("#d").on("click", function() {
  if (!gameOver) {
    check($(this).attr("id"));
    // guessed = $(this).attr("id");
    guessed = $(this).textContent;
    update($(this).text());
  }
});

$("#e").on("click", function() {
  if (!gameOver) {
    check($(this).attr("id"));
    // guessed = $(this).attr("id");
    guessed = $(this).textContent;
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
  return stage1[Math.floor(Math.random() * 3)];
}

var currentChord = chooseOne();
console.log(currentChord);

var gameOver = false;
var guessed = "";

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
  var toAdd = count + ". Guessed: " + guessed + " Correct: " + currentChord.toUpperCase();
  $(".past").append("<p>" + toAdd + "</p>");
  count++;
}
