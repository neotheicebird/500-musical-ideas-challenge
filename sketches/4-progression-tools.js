// Session toolkit: harmonic progression helpers for Strudel.
// Uses fixed @N units where 4 units = 1 cycle and inserted chords use 1 unit.

function mod12(value) {
  return ((value % 12) + 12) % 12;
}

var NOTE_TO_SEMITONE = {
  C: 0,
  'C#': 1,
  Db: 1,
  D: 2,
  'D#': 3,
  Eb: 3,
  E: 4,
  F: 5,
  'F#': 6,
  Gb: 6,
  G: 7,
  'G#': 8,
  Ab: 8,
  A: 9,
  'A#': 10,
  Bb: 10,
  B: 11
};

var SEMITONE_TO_NOTE = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

function sanitizeChordToken(symbol) {
  var text = String(symbol).trim();
  var dq = String.fromCharCode(34);
  var sq = String.fromCharCode(39);
  return text.split(dq).join('').split(sq).join('');
}

function noteToSemitone(note) {
  var n = sanitizeChordToken(note);
  if (Object.prototype.hasOwnProperty.call(NOTE_TO_SEMITONE, n)) {
    return NOTE_TO_SEMITONE[n];
  }
  throw new Error('Unsupported note root: ' + note);
}

function semitoneToNote(value) {
  return SEMITONE_TO_NOTE[mod12(value)];
}

function parseChordSymbol(symbol) {
  var clean = sanitizeChordToken(symbol);
  var match = clean.match(/^([A-G](?:#|b)?)(.*)$/);

  if (!match) {
    throw new Error('Unsupported chord symbol: ' + symbol);
  }

  return {
    root: match[1],
    quality: match[2] || ''
  };
}

function parseProgressionToken(token) {
  var clean = sanitizeChordToken(token);
  var match = clean.match(/^([^@]+?)(?:@(\d+))?$/);
  var units;

  if (!match) {
    throw new Error('Invalid progression token: ' + token);
  }

  units = match[2] ? parseInt(match[2], 10) : 4;
  if (!Number.isFinite(units) || units < 1) {
    units = 4;
  }

  return {
    symbol: sanitizeChordToken(match[1]),
    units: units,
    dur: units / 4
  };
}

function progressionFrom(input) {
  var raw;
  var parts;
  var events;
  var i;

  if (typeof input === 'string') {
    raw = input.trim();
    if (!raw) {
      return { events: [] };
    }

    parts = raw.split(/\s+/);
    events = [];

    for (i = 0; i < parts.length; i += 1) {
      if (parts[i]) {
        events.push(parseProgressionToken(parts[i]));
      }
    }

    return { events: events };
  }

  if (input && Array.isArray(input.events)) {
    events = [];
    for (i = 0; i < input.events.length; i += 1) {
      var symbol = sanitizeChordToken(input.events[i].symbol);
      var units = Number.isFinite(input.events[i].units)
        ? Math.max(1, Math.round(input.events[i].units))
        : Number.isFinite(input.events[i].dur)
          ? Math.max(1, Math.round(input.events[i].dur * 4))
          : 4;

      events.push({
        symbol: symbol,
        units: units,
        dur: units / 4
      });
    }

    return { events: events };
  }

  throw new Error('Progression must be a string like C Am F G or a progression object');
}

function progressionToString(progressionInput) {
  var progression = progressionFrom(progressionInput);
  var out = [];
  var i;

  for (i = 0; i < progression.events.length; i += 1) {
    var event = progression.events[i];
    out.push(event.units === 4 ? event.symbol : event.symbol + '@' + event.units);
  }

  return out.join(' ');
}

function playseq(progressionInput, instrument, fx) {
  var instr = instrument || 'piano';
  var opts = fx || {};
  var room = Number.isFinite(opts.room) ? opts.room : 0.2;
  var delay = Number.isFinite(opts.delay) ? opts.delay : 0.1;
  var roomsize = Number.isFinite(opts.roomsize) ? opts.roomsize : 0.6;
  var dec = Number.isFinite(opts.dec) ? opts.dec : 0.25;
  var progression = progressionFrom(progressionInput);
  var segments = [];
  var i;

  for (i = 0; i < progression.events.length; i += 1) {
    var renderSymbol = sanitizeChordToken(String(progression.events[i].symbol).split('/')[0]);
    if (!renderSymbol) {
      continue;
    }

    segments.push([
      progression.events[i].dur,
      chord(renderSymbol).voicing().struct('x')
    ]);
  }

  if (!segments.length) {
    throw new Error('No playable chord symbols found in progression');
  }

  return arrange.apply(null, segments)
    .sound(instr)
    .dec(dec)
    .room(room)
    .delay(delay)
    .roomsize(roomsize);
}

function colorTones(progressionInput, options) {
  var progression = progressionFrom(progressionInput);
  var out = [];
  var i;

  for (i = 0; i < progression.events.length; i += 1) {
    var ev = progression.events[i];
    var parsed = parseChordSymbol(ev.symbol);
    var root = parsed.root;
    var quality = parsed.quality;

    if (/add|sus|7|9|11|13|dim|aug|m7b5|maj/i.test(quality)) {
      out.push({ symbol: ev.symbol, units: ev.units, dur: ev.dur });
      continue;
    }

    if (quality === 'm') {
      out.push({ symbol: root + 'm7', units: ev.units, dur: ev.dur });
      continue;
    }

    if (quality !== '') {
      out.push({ symbol: ev.symbol, units: ev.units, dur: ev.dur });
      continue;
    }

    out.push({ symbol: root + 'add9', units: ev.units, dur: ev.dur });
  }

  return progressionToString({ events: out });
}

function withInsertedTransitionsCircular(progressionInput, getInsertedSymbols) {
  var progression = progressionFrom(progressionInput);
  var source = progression.events;
  var out = [];
  var n = source.length;
  var i;

  if (!n) {
    return '';
  }

  if (n === 1) {
    return progressionToString(progression);
  }

  for (i = 0; i < n; i += 1) {
    var left = source[i];
    var right = source[(i + 1) % n];
    var insertSymbols = getInsertedSymbols(left.symbol, right.symbol, i) || [];
    var insertCount = Math.min(2, insertSymbols.length);
    var leftUnits = Math.max(1, left.units - insertCount);
    var j;

    out.push({ symbol: left.symbol, units: leftUnits, dur: leftUnits / 4 });

    for (j = 0; j < insertCount; j += 1) {
      var inserted = sanitizeChordToken(insertSymbols[j]);
      if (inserted) {
        out.push({ symbol: inserted, units: 1, dur: 0.25 });
      }
    }
  }

  return progressionToString({ events: out });
}

function passingChordBetween(_leftSymbol, rightSymbol) {
  var right = parseChordSymbol(rightSymbol);
  // TODO: Add optional inversion support (e.g., G/B) when Strudel inversion parsing is stable.
  return semitoneToNote(noteToSemitone(right.root) - 2);
}

function addPassingChords(progressionInput) {
  return withInsertedTransitionsCircular(progressionInput, function (left, right) {
    return [passingChordBetween(left, right)];
  });
}

function secondaryDominantOf(targetSymbol) {
  var target = parseChordSymbol(targetSymbol);
  return semitoneToNote(noteToSemitone(target.root) + 7) + '7';
}

function addSecondaryDominants(progressionInput) {
  return withInsertedTransitionsCircular(progressionInput, function (_left, right) {
    return [secondaryDominantOf(right)];
  });
}

function iiVof(targetSymbol) {
  var target = parseChordSymbol(targetSymbol);
  var targetSemi = noteToSemitone(target.root);
  return [
    semitoneToNote(targetSemi + 2) + 'm7',
    semitoneToNote(targetSemi + 7) + '7'
  ];
}

function addTwoFiveOne(progressionInput) {
  return withInsertedTransitionsCircular(progressionInput, function (_left, right) {
    return iiVof(right);
  });
}

// Demo usage (run one line at a time):
// var BASE = 'C Am F G';
// $: playseq(BASE, 'piano')._punchcard();
// $: playseq(colorTones(BASE), 'piano')._punchcard();
// $: playseq(addPassingChords(BASE), 'piano')._punchcard();
// $: playseq(addSecondaryDominants(BASE), 'piano')._punchcard();
// $: playseq(addTwoFiveOne(BASE), 'piano')._punchcard();
