// inspired by this video: https://youtu.be/6aezSL_GvZA?si=qbSY47jBOPewdoVv
let royal_chords = chord("<FM7 G7 Em7 Am7>"); // Royal Road Progression in C Major
let canon_chords = chord("<D A Bm F#m G D G A>"); // canon progression in D

// play 8 cycles of first prog then 8 cycles of 2nd to play each progression twice in seq
let chords = arrange([8, royal_chords], [8, canon_chords]);

$: n("7 8 [10 9] 8").set(chords).voicing().dec(0.2); // notes voiced to chord based on current chord's base note?
$: chords.struct("- [x x] - x").voicing().room(0.5).gain(0.5); // chord pattern
$: n("0 - 1 -").set(chords).mode("root:c2").voicing().s("triangle").lpf(500); // bass
// TODO: The bass root should change to d2 when playing canon chords
