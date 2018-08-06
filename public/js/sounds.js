var onEnd = function() {
  console.log("onEnd");
  console.log(playIndex);
  console.log(playLoop);
  if (playLoop === true) {
    if (playIndex + 1 !== currentChords.length) {
      playIndex = playIndex + 1;
      sounds[currentChords[playIndex]].sound.play();
    } else {
      playLoop = false;
    }
  }
};

var sounds = {
  A: {
    sound: new Howl({
      src: ["../public/lib/src/A.wav"],
      onend: onEnd
    }),
    name: "A"
  },
  D: {
    sound: new Howl({
      src: ["../public/lib/src/D.wav"],
      onend: onEnd
    }),
    name: "D"
  },
  E: {
    sound: new Howl({
      src: ["../public/lib/src/E.wav"],
      onend: onEnd
    }),
    name: "E"
  }
};


