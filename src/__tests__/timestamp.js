const { validateData } = require('../testsUtils');

describe('const', () => {
  test('timestamp - const - valid', () => expect(
    validateData('TimestampConst', { seconds: 3 })
  ).toBe(true));
  test('timestamp - const - valid (empty)', () => expect(
    validateData('TimestampConst', undefined)
  ).toBe(true));
  test('timestamp - const - invalid', () => expect(
    validateData('TimestampConst', { nanos: 3 })
  ).toBe(false));
});

describe('exclusive gt & lt', () => {
  test('timestamp - exclusive gt & lt - valid (empty)', () => expect(
    validateData('TimestampExLTGT', undefined)
  ).toBe(true));
  test('timestamp - exclusive gt & lt - valid (above)', () => expect(
    validateData('TimestampExLTGT', { seconds: 2 })
  ).toBe(true));
  test('timestamp - exclusive gt & lt - valid (below)', () => expect(
    validateData('TimestampExLTGT', { seconds: -1 })
  ).toBe(true));
  test('timestamp - exclusive gt & lt - invalid', () => expect(
    validateData('TimestampExLTGT', { nanos: 1000 })
  ).
  toBe(false));
  test('timestamp - exclusive gt & lt - invalid (max)', () => expect(
    validateData('TimestampExLTGT', { seconds: 1 })
  ).toBe(false));
  test('timestamp - exclusive gt & lt - invalid (min)', () => expect(
    validateData('TimestampExLTGT', null)
  ).toBe(false));
});

describe('exclusive gte & lte', () => {
  test('timestamp - exclusive gte & lte - valid (above)', () => expect(
    validateData('TimestampExGTELTE', { seconds: 3601 })
  ).toBe(true));
  test('timestamp - exclusive gte & lte - valid (below)', () => expect(
    validateData('TimestampExGTELTE', undefined)
  ).toBe(true));
  test('timestamp - exclusive gte & lte - valid (max)', () => expect(
    validateData('TimestampExGTELTE', { seconds: 3600 })
  ).toBe(true));
  test('timestamp - exclusive gte & lte - valid (min)', () => expect(
    validateData('TimestampExGTELTE', { seconds: 60 })
  ).toBe(true));
  test('timestamp - exclusive gte & lte - invalid', () => expect(
    validateData('TimestampExGTELTE', { seconds: 61 })
  ).toBe(false));
});

describe('gt', () => {
  test('timestamp - gt - valid', () => expect(
    validateData('TimestampGT', { seconds: 1 })
  ).toBe(true));
  test('timestamp - gt - valid (empty)', () => expect(
    validateData('TimestampGT', undefined)
  ).toBe(true));
  test('timestamp - gt - invalid (equal)', () => expect(
    validateData('TimestampGT', { nanos: 1000 })
  ).toBe(false));
  test('timestamp - gt - invalid (equal)', () => expect(
    validateData('TimestampGT', { nanos: 1001 })
  ).toBe(true));
  test('timestamp - gt - invalid', () => expect(
    validateData('TimestampGT', null)
  ).toBe(false));
});

describe('gt & lt', () => {
  test('timestamp - gt & lt - valid', () => expect(
    validateData('TimestampGTLT', { nanos: 1000 })
  ).toBe(true));
  test('timestamp - gt & lt - valid (empty)', () => expect(
    validateData('TimestampGTLT', undefined)
  ).toBe(true));
  test('timestamp - gt & lt - invalid (above)', () => expect(
    validateData('TimestampGTLT', { seconds: 1000 })
  ).toBe(false));
  test('timestamp - gt & lt - invalid (below)', () => expect(
    validateData('TimestampGTLT', { seconds: -1000 })
  ).toBe(false));
  test('timestamp - gt & lt - invalid (max)', () => expect(
    validateData('TimestampGTLT', { seconds: 1 })
  ).toBe(false));
  test('timestamp - gt & lt - invalid (min)', () => expect(
    validateData('TimestampGTLT', null)
  ).toBe(false));
});

describe.skip('gt now', () => { // FIXME
  test('timestamp - gt now - valid', () => expect(
    validateData('TimestampGTNow', {
      seconds: (new Date()).getTime() + 7200
    })
  ).toBe(true));
  test('timestamp - gt now - valid (empty)', () => expect(
    validateData('TimestampGTNow', undefined)
  ).toBe(true));
  test('timestamp - gt now - invalid', () => expect(
    validateData('TimestampGTNow', null)
  ).toBe(false));
});

describe('gte', () => {
  test('timestamp - gte - valid', () => expect(
    validateData('TimestampGTE', { seconds: 3 })
  ).toBe(true));
  test('timestamp - gte - valid (empty)', () => expect(
    validateData('TimestampGTE', undefined)
  ).toBe(true));
  test('timestamp - gte - valid (equal)', () => expect(
    validateData('TimestampGTE', { nanos: 1000000 })
  ).toBe(true));
  test('timestamp - gte - invalid', () => expect(
    validateData('TimestampGTE', { seconds: -1 })
  ).toBe(false));
});

describe('gte & lte', () => {
  test('timestamp - gte & lte - valid', () => expect(
    validateData('TimestampGTELTE', { seconds: 60, nanos: 1 })
  ).toBe(true));
  test('timestamp - gte & lte - valid (empty)', () => expect(
    validateData('TimestampGTELTE', undefined)
  ).toBe(true));
  test('timestamp - gte & lte - valid (max)', () => expect(
    validateData('TimestampGTELTE', { seconds: 3600 })
  ).toBe(true));
  test('timestamp - gte & lte - valid (min)', () => expect(
    validateData('TimestampGTELTE', { seconds: 60 })
  ).toBe(true));
  test('timestamp - gte & lte - invalid (above)', () => expect(
    validateData('TimestampLT', { seconds: 3600, nanos: 1 })
  ).toBe(false));
  test('timestamp - gte & lte - invalid (below)', () => expect(
    validateData('TimestampGTELTE', { seconds: 59 })
  ).toBe(false));
  test('timestamp - gte & lte - valid (empty)', () => expect(
    validateData('TimestampExGTELTE', undefined)
  ).toBe(true));
});

describe('lt', () => {
  test('timestamp - lt - valid', () => expect(
    validateData('TimestampLT', { seconds: -1 })
  ).toBe(true));
  test('timestamp - lt - valid (empty)', () => expect(
    validateData('TimestampLT', undefined)
  ).toBe(true));
  test('timestamp - lt - invalid (equal)', () => expect(
    validateData('TimestampLT', null)
  ).toBe(false));
  test('timestamp - lt - invalid', () => expect(
    validateData('TimestampLT', { seconds: 1 })
  ).toBe(false));
  test.skip('timestamp - lt - now - invalid', () => expect( // FIXME
    validateData('TimestampLT', {
      seconds: (new Date()).getTime() + 7200
    })
  ).toBe(false));
});

describe.skip('lt now', () => { // FIXME
  test('timestamp - lt now - valid', () => expect(
    validateData('TimestampLTNow', {})
  ).toBe(true));
  test('timestamp - lt now - valid (empty)', () => expect(
    validateData('TimestampLTNow', {})
  ).toBe(true));
});

describe('lte', () => {
  test('timestamp - lte - valid', () => expect(
    validateData('TimestampLTE', null)
  ).toBe(true));
  test('timestamp - lte - valid (empty)', () => expect(
    validateData('TimestampLTE', undefined)
  ).toBe(true));
  test('timestamp - lte - valid (equal)', () => expect(
    validateData('TimestampLTE', { seconds: 1 })
  ).toBe(true));
  test('timestamp - lte - invalid', () => expect(
    validateData('TimestampLTE', { seconds: 1, nanos: 1 })
  ).toBe(false));
});

describe('none', () => {
  test('timestamp - none - valid', () => expect(
    validateData('TimestampNone', { seconds: 123 })
  ).toBe(true));
});

describe('required', () => {
  test('timestamp - required - valid', () => expect(
    validateData('TimestampRequired', undefined)
  ).toBe(true));
  test('timestamp - required - valid', () => expect(
    validateData('TimestampRequired', {seconds: 1, nanos: 12})
  ).toBe(true));
  test('timestamp - required - invalid', () => expect(
    validateData('TimestampRequired', null)
  ).toBe(false));
});

describe.skip('within', () => { // FIXME
  test('timestamp - within - valid', () => expect(
    validateData('TimestampWithin', {})
  ).toBe(true));
  test('timestamp - within - valid (empty)', () => expect(
    validateData('TimestampWithin', undefined)
  ).toBe(true));
  test('timestamp - within - invalid (below)', () => expect(
    validateData('TimestampWithin', null)
  ).toBe(false));
  test('timestamp - within - invalid (above)', () => expect(
    validateData({ seconds: (new Date()).getTime() + 7200 })
  ).toBe(false));
});
