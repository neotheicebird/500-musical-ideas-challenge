## Context
This change introduces a small harmony-transformation toolkit inside a single Strudel sketch file. The toolkit needs deterministic behavior (so users can understand and trust transformations) while still sounding musically pleasing for common pop/jazz progressions.

## Goals / Non-Goals
- Goals:
  - Provide simple string-based progression helpers that are easy to call in Strudel.
  - Keep total transition timing stable when adding inserted chords.
  - Maintain composability between transform and playback helpers.
  - Keep implementation local to one sketch file for learning and experimentation.
- Non-Goals:
  - Full harmonic analysis for all enharmonic edge cases.
  - Automatic key detection robust to arbitrary borrowed/altered harmony.
  - MIDI or notation engine integration beyond lightweight optional export workflow.

## Decisions
- Decision: Use a canonical internal progression representation (array of chord tokens + duration metadata) and provide helper adapters to/from plain progression strings.
  - Why: makes duration-preserving insertions and chainability straightforward.
- Decision: Apply deterministic music-theory heuristics for each transform.
  - Why: keeps behavior predictable and educational.
- Decision: Inserted transitions default to shorter duration shares than primary chords, with user override.
  - Why: aligns with common arranging practice and requested behavior.

## Risks / Trade-offs
- Limited chord parser coverage may reject or simplify complex chord spellings.
  - Mitigation: document supported forms and fail clearly.
- Deterministic rules may sound conservative in some contexts.
  - Mitigation: expose optional parameters for user tuning.

## Migration Plan
1. Add new sketch file with helper definitions.
2. Add demonstrations using the target base progression.
3. Validate behavior in Strudel REPL and iterate parameter defaults.

## Open Questions
- Final exported function names (`playseq` vs renamed aliases).
- Whether notation export is implemented directly or documented as optional/manual workflow.
