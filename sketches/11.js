//Gorillaz Parvat with Son Clave rhythm
setcps(0.38);

// $sonclave: s(`gm_woodblock:4`).beat("0,3,6,10,12", 16).gain(0.5)
$: s(`gm_woodblock:4`).beat("8, 14", 16).gain(0.5).room(0.5);
// 0,3,4,6,10,12 is sonclave, I added 13 to it, still same rhythm
$: s(`gm_woodblock:6`).beat("0,3,4,6,10,12,13", 16).gain(0.5);
$: s(`bd:4`).bank("RolandTR909").beat("8,9,14,15", 16).gain(0.25).room(0.5);

let notes = `<
[2 4 7@4 -@2]
[2 4 6@4 6 5]
[4 3 5@4 5 4]
[3 2 4@2 2 1 0@2]

[2 4 7@4 -@2]
[2 4 6@4 6 5]
[4 3 5@4 5 4]
[3 2 4@2 2 1 0@2]

[0 1 4@2 0 2 4@2]
[0 2 4@2 3 2 1@2]
[0 1 3@2 0 1 3@2]
[0 1 4@2 2 1 0@2]

[0 1 4@2 0 2 4@2]
[0 2 4@2 3 2 1@2]
[0 1 3@2 0 1 3@2]
[0 1 4@2 2 1 0@2]
>`;

$: note(notes)
  .scale("D:Major")
  .sound("gm_flute:1")
  .gain(slider(0.7, 0.0, 1.0, 0.1))
  .room(0.25)
  .roomsize(5)
  .phaser(notes)
  .phaserdepth(0.15);
