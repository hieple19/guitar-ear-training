var plusMode = false;

$(".nav-bar__plus-mode").on("click", () => {
  plusMode = !plusMode;
  if (plusMode) {
    console.log("plusMode");
    $(".nav-bar__plus-mode").addClass("nav-bar__selected");
    $(".plus-chord").css("display", "inline-block");
    chords.push(...prevChords);
    console.log(chords);
  } else if (!plusMode) {
    console.log("not plusMode");
    chords = chords.filter(item => !prevChords.includes(item));
    $(".nav-bar__plus-mode").removeClass("nav-bar__selected");
    $(".plus-chord").css("display", "none");

    console.log(chords);
  }
  newGame();
});

$(".nav-bar__scr-mode").on("click", () => {
  if (noChords !== 1) {
    noChords = 1;
    $(".nav-bar__scr-mode").addClass("nav-bar__selected");
    $(".nav-bar__cpr-mode").removeClass("nav-bar__selected");
    newGame();
  }
});

$(".nav-bar__cpr-mode").on("click", () => {
  if (noChords !== 4) {
    noChords = 4;
    $(".nav-bar__cpr-mode").addClass("nav-bar__selected");
    $(".nav-bar__scr-mode").removeClass("nav-bar__selected");
    newGame();
  }
});
