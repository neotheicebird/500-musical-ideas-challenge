//Transcribe notes of The Mountain (Parvat) by Gorillaz
// The last song by Ashaji
// Notes by HobbyCue link: https://www.youtube.com/watch?v=vLYU-L7J6Vg

setcpm(18 / 4);
//-@14 for tabla
let introC1 = chord("D F#m G A D");
// tune1 = ..............gpS.....gpn...ndpmd...dpmgp.grs.
let introN1 = note("2 4 7@6 2 4 6@4 6 5 4 3 5@4 5 4 3 2 4@2 2 1 0@2").scale(
  "D:Major",
);

let introC2 = chord("A D D A G Em Gm D");
// tune2 = srp.sgp.sgp.mgr.
let introN2 = note(
  "0 1 4@2 0 2 4@2 0 2 4@2 3 2 1@2 0 1 3@2 0 1 3@2 0 1 4@2 2 1 0@2",
).scale("D:Major");

$: arrange(
  [
    1,
    stack(
      introN1.s("piano").dec(0.2).room(1).roomsize(10),
      introC1.voicing().s("piano").struct("x x x x x"),
    ),
  ],
  [
    1,
    stack(
      introN2.s("piano").dec(0.2).room(1).roomsize(10),
      introC2.voicing().s("piano").struct("x x x x x x x x"),
    ),
  ],
);

// let seq = "2 4 7@6 2 4 6@4 6 5 4 3 5@4 5 4 3 2 4@2 2 1 0@2".slow(4)
// $: note(seq).scale("D3:major").sound("gm_voice_oohs:3")
// $: note(seq).scale("D4:major").sound("gm_voice_oohs:3")
// $: note(seq.add(4)).scale("D3:major").sound("gm_voice_oohs:3").gain(0.35)
// $: note(seq.add(4)).scale("D4:major").sound("gm_voice_oohs:3").gain(0.35)
// $: note(seq.add(7)).scale("D3:major").sound("gm_voice_oohs:3").gain(0.15)
// $: note(seq.add(7)).scale("D4:major").sound("gm_voice_oohs:3").gain(0.15)
