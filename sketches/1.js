// Simple drum loop
samples(
  {
    drumloop: ["samples/adinkra_audio-diabara-drum-ensemble-296697.mp3"],
  },
  "https://raw.githubusercontent.com/neotheicebird/500-musical-ideas-challenge/main/",
);

s("drumloop")
  .loopAt(32) // sets total number of cycles (in this case beats) to stretch the entire audio file, at 32 it sounds natural, otherwise speeds up or slows down
  .chop(64) // chop into 64 pieces for any further processing like scramble(), here it just shows better on punch card
  .gain(0.8)
  // .lpf(4000) // low pass filter, cuts high hats
  ._punchcard({ fold: true });
