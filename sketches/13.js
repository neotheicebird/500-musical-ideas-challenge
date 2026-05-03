// drum basics: bd, sd, hh, oh, mt, lt, rim (sd), rd, cr
// use bank to change drumset like 9000, bossdr110, oberheimdmx
// use delay to delay the beat by say half a beat, val depends on cycle size

/* * BASSLINE LOGIC:
 * 1. n("0") selects the root; n("1") selects the 3rd of the active chord in .set().
 * 2. .mode("root") forces the voicing engine to keep the root note as the
 * lowest pitch, preventing inversions that might "flip" the bassline.
 * 3. Use .octave(3) or .transpose(-12) to shift the pattern into the bass range.
 */

setcpm(110 / 4);
// drums
$: sound("bd hh sd hh").bank("9000").gain(0.5).room(0.25)._pianoroll();
$: sound("bd - sd -")
  .bank("9000")
  .delay(0.125)
  .room(0.25)
  .duckorbit("2")
  .duckattack(0.1)
  .duckdepth(0.5)
  ._pianoroll();
$: sound("hh*8")
  .sometimes((x) => x.delay(0.125))
  .bank("9000")
  .room(0.25)
  .gain(0.25);
$: sound("- - - rim rim rim - rim").bank("9000").room(0.25).gain(0.25);

let chords = chord(`<
 FM7 G7 Em7 Am7
 FM7 G7 Em7 Am7
 D A Bm F#m G D G A
 >`);

$melody: n("0 4 0 3 2 1 1 [7 0]")
  .set(chords)
  .voicing()
  .s("saxello_stacc")
  .gain(0.5)
  .orbit(2);

$bassline: n("0 - 1 -")
  .set(chords)
  .mode("root")
  .voicing()
  .s("supersaw")
  .octave(1)
  .room(0.8)
  .delay(0.25)
  .phaser("4")
  .gain(0.75)
  .lpf(750);
