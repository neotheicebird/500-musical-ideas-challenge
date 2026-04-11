// Check out the following cool idea. Uses beat pattern sequencer, lead pattern generation using run()
// orbit sets a channel, duckorbit can then be used to sidechain the channel(s) to a beat, here basedrum
// added white noise expecting some relaxed waves like effect
// finally added base notes, all working with the chord and muah, the bassline was like finally adding salt
// to a brilliant dish
setcpm(18);
let chords = chord("<FM7 G7 Em7 Am7>");
$: n(run(8)).set(chords).voicing().s("sawtooth").delay(0.7).orbit(2).gain(0.5); // change to run(16) and change melody instantly
$: s("hh*16").gain("[0.75 0.4]*8").orbit(3);
$: s("bd:4!4")
  .beat("0,4,8,11,14", 16)
  .duckorbit("2:3")
  .duckattack(0.1)
  .duckdepth(0.5);
$: s("sd:2!2").beat("0,8,15,16", 16).gain(0.5).room(0.5).roomsize(10);
$: s("white").gain(0.5).room(0.5).roomsize(10).delay(0.5).dec(0.25);
$: n("0 - 1 -").set(chords).mode("root:g2").voicing().s("triangle").lpf(500);
