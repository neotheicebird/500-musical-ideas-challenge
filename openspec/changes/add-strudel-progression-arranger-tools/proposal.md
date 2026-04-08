# Change: Add harmonic progression arranger tools for Strudel sketches

## Why
The session requires reusable, chainable harmony helpers so a basic progression can be transformed into richer arrangements and played directly in Strudel. Today the repository has simple sketch examples, but no shared API for progression playback, color tones, passing chords, secondary dominants, or II-V insertions.

## What Changes
- Add a progression playback helper (`playseq`, or a final equivalent name) that accepts a progression string and optional instrument, plus room/delay/roomsize controls.
- Add a color-tone enrichment helper that transforms basic chords into tasteful extended/suspended variants based on deterministic music-theory rules.
- Add a passing-chord insertion helper that computes transitional chords between adjacent progression chords.
- Add a secondary-dominant insertion helper that inserts V-of-target dominant chords between adjacent progression chords.
- Add a II-V insertion helper that inserts a diatonic/preferred ii chord plus dominant V chord before target chords.
- Define fixed timing rules for inserted chords so total duration per original chord span remains constant, with each inserted chord capped at one quarter cycle.
- Define chainability requirements so transform helpers can be composed and then passed into playback.
- Add one new Strudel sketch file containing the helper implementations and multiple demonstrations using the base progression `C Am F G`, including pianoroll/punchcard views.
- Define optional sheet-notation export guidance/output if practical in Strudel context.

## Impact
- Affected specs: `harmonic-progression-tools` (new capability)
- Affected code: new sketch file in `sketches/` (planned), plus optional updates to `README.md` usage notes
