// Transcribe notes of The Mountain (Parvat) by Gorillaz
// The last song by Ashaji
// Notes by HobbyCue link: https://www.youtube.com/watch?v=vLYU-L7J6Vg

setcps(0.4);
//-@14 for tabla
let introC1 = chord(`<[D D] [F#m F#m] [G G] [A D]>`)
  .voicing()
  .sound("piano")
  .gain(slider(0.5, 0.0, 1.0, 0.1))
  .room(0.5)
  .roomsize(10)
  .dec(0.5)
  .delay(0.125);
// tune1 = ..............gpS.....gpn...ndpmd...dpmgp.grs.
let introN1 = note(`<
[2 4 7@4 -@2]
[2 4 6@4 6 5]
[4 3 5@4 5 4]
[3 2 4@2 2 1 0@2]
>`)
  .scale("D:Major")
  .sound("gm_flute:1")
  .gain(slider(0.7, 0.0, 1.0, 0.1))
  .room(0.25)
  .roomsize(5);

let intro1 = stack(introN1, introC1);

let introC2 = chord(`<[A D] [D A] [G Em] [Gm D]>`)
  .voicing()
  .sound("piano")
  .gain(slider(0.5, 0.0, 1.0, 0.1))
  .room(0.5)
  .roomsize(10)
  .dec(0.5)
  .delay(0.125);
// tune2 = srp.sgp.sgp.mgr.
let introN2 = note(`<
  [0 1 4@2 0 2 4@2]
  [0 2 4@2 3 2 1@2]
  [0 1 3@2 0 1 3@2]
  [0 1 4@2 2 1 0@2]
  >`)
  .scale("D:Major")
  .sound("gm_flute:1")
  .gain(slider(0.5, 0.0, 1.0, 0.1))
  .room(0.25)
  .roomsize(5);

let intro2 = stack(introN2, introC2);

$: arrange([8, intro1], [8, intro2]);
