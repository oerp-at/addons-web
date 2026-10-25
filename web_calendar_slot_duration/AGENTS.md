# web_calendar_slot_duration

## Purpose

Calendar views take their slot length from the action context
(`calendar_slot_duration`, e.g. `"00:30:00"`); new timed events get that duration.

## Notes for 20.0

- Migrated from 19.0 in this fork; code and Hoot tests taken over from the closed
  OCA/web#3725.
- Patches `CalendarCommonRenderer.options` and `CalendarModel.buildRawRecord`;
  both read `env.searchModel.context`.

## Tests

- Hoot unit tests in `static/tests/`, run by `--test-tags /web_calendar_slot_duration`
  (web's `WebSuite` picks the module).
