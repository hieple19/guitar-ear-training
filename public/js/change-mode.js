var plusMode = false;

$(".nav-bar__plus-mode").on("click", () => {
  plusMode = !plusMode;
  if (plusMode) {
    console.log("plusMode");

    $(".plus-chord")
      .toArray()
      .forEach(button => {
        button.style.display = "static";
      });
    chords.push(...prevChords);
    console.log(chords);
  } else if (!plusMode) {
    console.log("not plusMode");
    chords = chords.filter(item => !prevChords.includes(item));

    $(".plus-chord")
      .toArray()
      .forEach(button => {
        button.style.display = "none";
      });
    console.log(chords);
  }
  newGame();
});

$(".nav-bar__scr-mode").on("click", () => {
  if (noChords !== 1) {
    noChords = 1;
    newGame();
  }
});

$(".nav-bar__cpr-mode").on("click", () => {
  if (noChords !== 4) {
    noChords = 4;
    newGame();
  }
});
