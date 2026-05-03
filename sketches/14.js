/* Started from copying the drums from

https://strudel.cc/#Ci8vICJCaWcgU2hpcCAoQ29kYSkiCi8vIHNvbmcgQGJ5IENhcmRpYWNzCi8vIHNjcmlwdCBAYnkgZWVmYW5vCnNldERlZmF1bHRWb2ljaW5ncygnbGVnYWN5JykKY29uc3QgcHJvZ3IgPSAiPEFtITIgRCBGIEFtIERAMiBBbSEyIEEjIEFtIEVAMiBDIEYgQW0gREA0PiIuZmFzdCgyKTsKY29uc3QgYW5jaHIgPSAiPEE1IEY1IEY1IEY1IEY1IEc1QDIgQTUgRjUgRyM1IEY1IEU1QDIgRTUgRjUgRjUgRzVAND4iLmZhc3QoMik7CgpzdGFjaygKIG4oIi0yIC0xIDAgMiAwIDEiKS5jaG9yZChwcm9ncikuYW5jaG9yKCJHNSIpLnZvaWNpbmcoKS5zKCdnbV92aW9saW4nKS5jbGlwKDEpLmdhaW4oMC4zKS5yb29tKDAuMSkKLCBjaG9yZChwcm9ncikuYW5jaG9yKGFuY2hyKS52b2ljaW5nKCkucygnZ21fZHJhd2Jhcl9vcmdhbicpLmNsaXAoMSkuZ2FpbigwLjkpLnJvb20oMC4zKQosIGNob3JkKHByb2dyKS5yb290Tm90ZXMoMSkuc3RydWN0KCJ4KjIiKS5zKCdnbV9lbGVjdHJpY19iYXNzX2ZpbmdlcicpLmNsaXAoMSkuZ2FpbigxKQogIAosIHMoIltiZCEyIH4gYmRdKjIiKS5iYW5rKCJBa2FpTGlubiIpLmxwZigyMDApLmdhaW4oMC4zNSkKLCBzKCJbfiA8W3NkIH4gfiBzZF0gc2Q%2BXSoyIikuYmFuaygiQWthaUxpbm4iKS5ocGYoMjUwKS5scGYoNDAwMCkuZ2FpbigwLjMwKQosIHMoIm9oKjQiKS5nYWluKDAuMTUpIAoKKS5jcG0oMTIwLzQpLnJvb20oMC4zKS8vLnBpYW5vcm9sbCgp

Got this motif download and did the sa,pa,sa trial and error to land on a very similar tune to what I had in mind
*/
let notes = `<
[[4 1] [1 [1 1]]]
[[-1 1] [1 [1 1]]]
[[-1 1] [2 3]]
[4 ~]
[4 3 1 3]
[4 3 1 3]
[~ ~ ~ ~]
[~ ~ ~ ~]
>/0.5`;

stack(
  note(notes)
    .scale("D4:Major")
    .sound("gm_soprano_sax:0")
    .gain(slider(0.8, 0.0, 1.0, 0.1))
    .room(0.5)
    .roomsize(5)
    .phaser(notes)
    .phaserdepth(0.55)
    ._pianoroll({ labels: true }),
  s("[bd!2 ~ bd]*2").bank("AkaiLinn").lpf(200).gain(0.35),
  s("[~ <[sd ~ ~ sd] sd>]*2").bank("AkaiLinn").hpf(250).lpf(4000).gain(0.3),
  s("oh*4").gain(0.15),
)
  .cpm(120 / 4)
  .room(0.3); //.pianoroll()
