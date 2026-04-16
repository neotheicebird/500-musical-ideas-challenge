// take a melody example for mini notation mix ideas like sd beat sequence
// and a scrub of a large beats sample based on switchangels code

samples("github:yaxu/clean-breaks");

// mini notation example in docs
$fiddle: note(`<
[e5 [b4 c5] d5 [c5 b4]]
[a4 [a4 c5] e5 [d5 c5]]
[b4 [~ c5] d5 e5]
[c5 a4 a4 ~]
[[~ d5] [~ f5] a5 [g5 f5]]
[e5 [~ c5] e5 [d5 c5]]
[b4 [b4 c5] d5 e5]
[c5 a4 a4 ~]
,
[[e2 e3]*4]
[[a2 a3]*4]
[[g#2 g#3]*2 [e2 e3]*2]
[a2 a3 a2 a3 a2 a3 b1 c2]
[[d2 d3]*4]
[[c2 c3]*4]
[[b1 b2]*2 [e2 e3]*2]
[[a1 a2]*4]
>`)
  .sound("gm_fiddle:1")
  .room(0.5)
  .dec(0.2)
  .gain(slider(0.9, 0.1, 1.0, 0.1));

$beats: stack(
  s("bd:4")
    .beat("0,4,8,11,14", 16)
    .gain(slider(0.41, 0.01, 1.0, 0.2))
    ._scope(),
  //amen chop, switchangel: https://www.reddit.com/r/strudel/comments/1ncqms1/amen_chop/
  s("amen/4")
    .fit()
    .scrub(
      irand(16)
        .div(16)
        .seg(8)
        //.rib("<4 20 30>",1))
        //.rib("<21 30 30 4 21 30>",1))
        .rib(
          "<~ 30 ~ 21 ~ 30 ~ 4 30 30 21 21 30 30 21 21 30 30 21 21 30 30 21 4>",
          1,
        ),
    )
    .almostNever(ply("2 | 2 | 3 | 4"))
    .orbit(2)
    .attack(slider(0.02071, 0.01, 0.1))
    .room(slider(0.621586, 0.001, 1.5))
    .gain(slider(0.61687, 0.01, 1))
    ._scope(),
);
