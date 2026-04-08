## 1. Implementation
- [x] 1.1 Create a single new Strudel sketch file that contains all progression helper functions for this session.
- [x] 1.2 Implement progression playback helper with progression string input, optional instrument (default `piano`), and room/delay/roomsize parameters.
- [x] 1.3 Implement color-tone enrichment helper using explicit, documented mapping/heuristics for pleasing extensions from basic triads.
- [x] 1.4 Implement passing-chord insertion helper that computes one transitional chord between adjacent source chords.
- [x] 1.5 Implement secondary-dominant insertion helper that computes and inserts dominant-of-target chords.
- [x] 1.6 Implement II-V insertion helper that inserts ii then V before each target chord transition.
- [x] 1.7 Ensure inserted-chord timing preserves total duration of each original transition window using fixed insertion sizing.
- [x] 1.8 Ensure helpers are chainable so transformed progressions can be fed into playback without manual rewrites.
- [x] 1.9 Add multiple demonstrations built from `C Am F G` and include `pianoroll` / `punchcard` visualization examples.
- [x] 1.10 Add inline educational comments explaining intent, Strudel concepts, and harmony decisions.

## 2. Verification
- [ ] 2.1 Manually verify each helper output progression text and rendered playback behavior in Strudel REPL.
- [ ] 2.2 Confirm chainability by composing at least one transform helper with playback helper.
- [ ] 2.3 Validate that inserted transitions shorten primary-chord durations while preserving total cycle time.
- [ ] 2.4 Document any limitations (for example, unsupported chord spellings or edge-case voicings).
