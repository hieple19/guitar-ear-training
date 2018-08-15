var onEnd = function() {
  console.log("onEnd");
  if (playLoop) {
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
  },
  Am: {
    sound: new Howl({
      src: ["../public/lib/src/Am.wav"],
      onend: onEnd
    }),
    name: "Am"
  },
  Dm: {
    sound: new Howl({
      src: ["../public/lib/src/Dm.wav"],
      onend: onEnd
    }),
    name: "Dm"
  },
  Em: {
    sound: new Howl({
      src: ["../public/lib/src/Em.wav"],
      onend: onEnd
    }),
    name: "Em"
  }
};

// function stopSound() {
//   for (var property in sounds) {
//     if (sounds.hasOwnProperty(property)) {
//       property.sound.stop();
//     }
//   }
// }
