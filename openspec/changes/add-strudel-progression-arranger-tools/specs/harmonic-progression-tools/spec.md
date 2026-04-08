## ADDED Requirements

### Requirement: Progression Playback Helper
The system SHALL provide a progression playback helper that accepts a chord-progression string and an optional instrument name defaulting to `piano`, and SHALL expose `room`, `delay`, and `roomsize` controls.

#### Scenario: Play progression with default instrument
- **WHEN** a user calls the playback helper with a valid progression string and no instrument argument
- **THEN** the progression is rendered using `piano` by default
- **AND** the helper returns/produces a Strudel-compatible playable pattern

#### Scenario: Play progression with explicit FX controls
- **WHEN** a user passes progression, instrument, and `room`/`delay`/`roomsize` options
- **THEN** playback applies the requested instrument and effects parameters

### Requirement: Color-Tone Enrichment Helper
The system SHALL provide a helper that converts basic chord progressions into richer variants by adding musically appropriate color tones (for example 7ths, add9, or sus tones) using deterministic theory-based rules.

#### Scenario: Enrich basic diatonic progression
- **WHEN** a user submits a simple progression such as `C Am F G`
- **THEN** the helper returns a transformed progression containing color-tone variants that remain harmonically compatible
- **AND** the output format remains compatible with downstream chaining

### Requirement: Passing-Chord Insertion Helper
The system SHALL provide a helper that inserts one passing chord between adjacent chords in a source progression based on the source-target pair.

#### Scenario: Insert passing chord between two chords
- **WHEN** a user transforms `C Am`
- **THEN** the helper inserts a valid passing chord between `C` and `Am`
- **AND** the result preserves source chord order around the inserted transition chord

### Requirement: Secondary Dominant Insertion Helper
The system SHALL provide a helper that inserts a dominant-of-target chord between adjacent chords where a secondary dominant is applicable.

#### Scenario: Insert dominant of target minor chord
- **WHEN** a user transforms `C Am`
- **THEN** the helper inserts `E7` (or an equivalent dominant-of-`Am`) between `C` and `Am`

### Requirement: II-V Insertion Helper
The system SHALL provide a helper that inserts a ii-V pair before target chords based on harmonic function.

#### Scenario: Insert ii-V before target chord
- **WHEN** a user transforms `C Am`
- **THEN** the helper inserts a ii chord and a V chord before `Am` (for example `Bm7 E7`)
- **AND** original progression order is retained with inserted approach chords

### Requirement: Fixed Duration Preservation for Inserted Chords
The system SHALL preserve total duration for each original transition window when inserted chords are added using fixed insertion sizing rules.
Inserted chords SHALL be no longer than one quarter cycle each.

#### Scenario: Preserve total transition duration
- **WHEN** one chord is inserted between two original chords
- **THEN** the sum of durations over the transformed transition equals the original total duration
- **AND** the inserted chord duration is fixed at one quarter cycle

#### Scenario: Preserve total transition duration with two inserted chords
- **WHEN** a ii-V pair is inserted before a target chord
- **THEN** the total duration over the source transition window remains equal to the original duration
- **AND** each inserted chord duration is fixed at one quarter cycle

### Requirement: Chainable Transformation Pipeline
The system SHALL ensure playback and transform helpers are chainable so users can process a progression with one transform helper and feed the result directly into playback.

#### Scenario: Chain transform into playback
- **WHEN** a user applies one transform helper and then calls playback
- **THEN** no manual restructuring is required between calls
- **AND** the resulting sequence is playable in Strudel

### Requirement: Session Demonstrations in One Sketch File
The system SHALL provide one new sketch file that defines the helpers and includes multiple demonstration arrangements using base progression `C Am F G`.

#### Scenario: Demonstrate requested progression variants
- **WHEN** a user opens the new sketch file
- **THEN** they can find examples for base playback, color tones, passing chords, secondary dominants, and ii-V transformations
- **AND** examples include `pianoroll` and/or `punchcard` visualization calls

### Requirement: Optional Notation Export Guidance
The system SHALL document or provide an optional pathway for sheet-notation export to help users understand transformed harmonies.

#### Scenario: Notation support available or documented
- **WHEN** a user reviews the demonstration section
- **THEN** they can access either direct notation export usage or explicit instructions/limitations for obtaining notation output
