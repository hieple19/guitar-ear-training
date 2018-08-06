var chords = ["Am", "Dm", "Em"];
var prevChords = ["A", "D", "E"];
var plusMode = false;

$(".plusMode").on("click", () => {
  plusMode = !plusMode;
  if (plusMode) {
    chords.push(...prevChords);
  } else if (!plusMode) {
    chords.filter(item => !prevChords.includes(item));
  }
});
