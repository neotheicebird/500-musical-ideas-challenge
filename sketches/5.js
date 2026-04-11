// basic chord shapes
// [0 4 7] - Maj, [0 3 7] - Min, [0 3 6] - Sus, [0 4 8] - Aug
// Adding 12, 24 to any note in chord leads to inversions
// Deciding upon the notes in a chord understanding that there are multiple ways to voice it, is called voicing
// two chords played together might flow smoothly or feel jumpy based on the voicing of each chord
// to tune voicing to harmonize two or more chords is called voice leading

// 1 - voicing axis of awesome chord progression is I-V-vi-IV
let prog =
  "<[0, 4, 7, 12, 24] [0, 4, 7, -5, 19] [0, 3, 7, -5, 19] [0, 4, 7, 16, 19]>"
    .add("<1 5 6 4>")
    .add("<d>");

// play sequence
$: note(prog)
  .sound("piano")
  .struct("[x!2 - x!2 - x!2 - x!2] - x!2 - x!4 x!2 -")
  .dec(0.2)
  .room(0.5)
  .roomsize(10)
  .delay(0.25)
  .color("cyan")
  .punchcard({ labels: true });
