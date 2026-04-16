// voice chimes based choral acopella

let seq = run(8);
$: note(seq).scale("D2:minor:pentatonic").sound("gm_voice_oohs:3");
$: note(seq).scale("D3:minor:pentatonic").sound("gm_voice_oohs:1");
$: note(seq.add(4)).scale("D2:minor:pentatonic").sound("gm_voice_oohs:3");
$: note(seq.add(4)).scale("D3:minor:pentatonic").sound("gm_voice_oohs:1");
$: note(seq.add(7)).scale("D2:minor:pentatonic").sound("gm_voice_oohs:3");
$: note(seq.add(7)).scale("D3:minor:pentatonic").sound("gm_voice_oohs:1");
$: note(seq.add(15)).scale("D2:minor:pentatonic").sound("gm_voice_oohs:0");

// tried indian sargam got chinese tune, pentatonic kicked in
// let seq = "0 1 2 3 4 5 6 7 8@2 7 5 6 4 5 3 4 2 3 1 2 1 0@2".slow(3)
// // $: note(seq).scale("D2:minor:pentatonic").sound("gm_voice_oohs:3")
// $: note(seq).scale("D2:minor:pentatonic").sound("gm_voice_oohs:3")
// // $: note(seq.add(4)).scale("D2:minor:pentatonic").sound("gm_voice_oohs:3")
// $: note(seq.add(4)).scale("D2:minor:pentatonic").sound("gm_voice_oohs:3")
// // $: note(seq.add(7)).scale("D2:minor:pentatonic").sound("gm_voice_oohs:3")
// $: note(seq.add(7)).scale("D2:minor:pentatonic").sound("gm_voice_oohs:3")
// $: note(seq.add(15)).scale("D1:minor:pentatonic").sound("gm_voice_oohs:4")
