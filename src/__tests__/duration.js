const { validateData } = require('../testsUtils');

describe('const', () => {
  test('duration - const - valid', () => expect(
    validateData('DurationConst', { seconds: 3 })
  ).toBe(true));
  test('duration - const - valid (empty)', () => expect(
    validateData('DurationConst', undefined)
  ).toBe(true));
  test('duration - const - invalid', () => expect(
    validateData('DurationConst', { nanos: 3 })
  ).toBe(false));
});

describe('exclusive gt & lt', () => {
  test('duration - exclusive gt & lt - valid (empty)', () => expect(
    validateData('DurationExLTGT',  undefined)
  ).toBe(true));
  test('duration - exclusive gt & lt - valid (above)', () => expect(
    validateData('DurationExLTGT', { seconds: 2 })
  ).toBe(true));
  test('duration - exclusive gt & lt - valid (below)', () => expect(
    validateData('DurationExLTGT', { nanos: -1 })
  ).toBe(true));
  test('duration - exclusive gt & lt - invalid', () => expect(
    validateData('DurationExLTGT', { nanos: 1000 })
  ).toBe(false));
  test('duration - exclusive gt & lt - invalid (max)', () => expect(
    validateData('DurationExLTGT', { seconds: 1 })
  ).toBe(false));
  test('duration - exclusive gt & lt - invalid (min)', () => expect(
    validateData('DurationExLTGT', null)
  ).toBe(false));
});

describe('exclusive gte & lte', () => {
  test('duration - exclusive gte & lte - valid (above)', () => expect(
    validateData('DurationExGTELTE', { seconds: 3601 })
  ).toBe(true));
  test('duration - exclusive gte & lte - valid (below)', () => expect(
    validateData('DurationExGTELTE',  null)
  ).toBe(true));
  test('duration - exclusive gte & lte - valid (max)', () => expect(
    validateData('DurationExGTELTE', { seconds: 3600 })
  ).toBe(true));
  test('duration - exclusive gte & lte - valid (min)', () => expect(
    validateData('DurationExGTELTE', { seconds: 60 })
  ).toBe(true));
  test('duration - exclusive gte & lte - invalid', () => expect(
    validateData('DurationExGTELTE', { seconds: 61 })
  ).toBe(false));
});

describe('fields with other fields', () => {
  test('duration - fields with other fields - invalid other field', () => expect(
    validateData('DurationFieldWithOtherFields', { durationval: null, intval: 12 }))
    .toBe(false));
});

describe('gt', () => {
  test('duration - gt - valid', () => expect(
    validateData('DurationGT', { seconds: 1 })
  ).toBe(true));
  test('duration - gt - valid (empty)', () => expect(
    validateData('DurationGT', undefined)
  ).toBe(true));
  test('duration - gt - invalid (equal)', () => expect(
    validateData('DurationGT', { nanos: 1000 })
  ).toBe(false));
  test('duration - gt - invalid', () => expect(
    validateData('DurationGT', null)
  ).toBe(false));
});

describe('gt & lt', () => {
  test('duration - gt & lt - valid', () => expect(
    validateData('DurationGTLT', { nanos: 1000 })
  ).toBe(true));
  test('duration - gt & lt - valid (empty)', () => expect(
    validateData('DurationGTLT', undefined)
  ).toBe(true));
  test('duration - gt & lt - invalid (above)', () => expect(
    validateData('DurationGTLT', { seconds: 1000 })
  ).toBe(false));
  test('duration - gt & lt - invalid (below)', () => expect(
    validateData('DurationGTLT', { nanos: -1000 })
  ).toBe(false));
  test('duration - gt & lt - invalid (max)', () => expect(
    validateData('DurationGTLT', { seconds: 1 })
  ).toBe(false));
  test('duration - gt & lt - invalid (min)', () => expect(
    validateData('DurationGTLT', null)
  ).toBe(false));
});

describe('gte', () => {
  test('duration - gte - valid', () => expect(
    validateData('DurationGTE', { seconds: 3 })
  ).toBe(true));
  test('duration - gte - valid (empty)', () => expect(
    validateData('DurationGTE', undefined)
  ).toBe(true));
  test('duration - gte - valid (equal)', () => expect(
    validateData('DurationGTE', { nanos: 1000000 })
  ).toBe(true));
  test('duration - gte - invalid', () => expect(
    validateData('DurationGTE', { seconds: -1 })
  ).toBe(false));
});

describe('gte & lte', () => {
  test('duration - gte & lte - valid', () => expect(
    validateData('DurationGTELTE', { seconds: 60, nanos: 1 }))
    .toBe(true));
  test('duration - gte & lte - valid (empty)', () => expect(
    validateData('DurationGTELTE', undefined)
  ).toBe(true));
  test('duration - gte & lte - valid (max)', () => expect(
    validateData('DurationGTELTE', { seconds: 3600 })
  ).toBe(true));
  test('duration - gte & lte - valid (min)', () => expect(
    validateData('DurationGTELTE', { seconds: 60 })
  ).toBe(true));
  test('duration - gte & lte - invalid (above)', () => expect(
    validateData('DurationGTELTE', { seconds: 3600, nanos: 1 }))
    .toBe(false));
  test('duration - gte & lte - invalid (below)', () => expect(
    validateData('DurationGTELTE', { seconds: 59 })
  ).toBe(false));
  test('duration - gte & lte - valid (empty)', () => expect(
    validateData('DurationExGTELTE', undefined)
  ).toBe(true));
});

describe('in', () => {
  test('duration - in - valid', () => expect(
    validateData('DurationIn', { seconds: 1 })
  ).toBe(true));
  test('duration - in - valid (empty)', () => expect(
    validateData('DurationIn', undefined)
  ).toBe(true));
  test('duration - in - invalid', () => expect(
    validateData('DurationIn', null)
  ).toBe(false));
});

describe('lt', () => {
  test('duration - lt - valid', () => expect(
    validateData('DurationLT', { nanos: -1 })
  ).toBe(true));
  test('duration - lt - valid (empty)', () => expect(
    validateData('DurationLT', undefined)
  ).toBe(true));
  test('duration - lt - invalid (equal)', () => expect(
    validateData('DurationLT', null)
  ).toBe(false));
  test('duration - lt - invalid', () => expect(
    validateData('DurationLT', { seconds: 1 })
  ).toBe(false));
});

describe('lte', () => {
  test('duration - lte - valid', () => expect(
    validateData('DurationLTE', null)
  ).toBe(true));
  test('duration - lte - valid (empty)', () => expect(
    validateData('DurationLTE', undefined)
  ).toBe(true));
  test('duration - lte - valid (equal)', () => expect(
    validateData('DurationLTE', { seconds: 1 })
  ).toBe(true));
  test('duration - lte - invalid', () => expect(
    validateData('DurationLTE', { seconds: 1, nanos: 1 })
  ).toBe(false));
});

describe('none', () => {
  test('duration - none - valid', () => expect(
    validateData('DurationNone', { seconds: 123 })
  ).toBe(true));
});

describe('not in', () => {
  test('duration - not in - valid', () => expect(
    validateData('DurationNotIn', { nanos: 1 })
  ).toBe(true));
  test('duration - not in - valid (empty)', () => expect(
    validateData('DurationNotIn', undefined)
  ).toBe(true));
  test('duration - not in - invalid', () => expect(
    validateData('DurationNotIn', null)
  ).toBe(false));
});

describe('required', () => {
  test('duration - required - valid', () => expect(
    validateData('DurationRequired', null)
  ).toBe(true));
  test('duration - required - invalid', () => expect(
    validateData('DurationRequired', null)
  ).toBe(false));
});
