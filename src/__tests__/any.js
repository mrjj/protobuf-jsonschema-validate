const {
  validateData
} = require('../testsUtils');

describe('in', () => {
  test('any - in - valid', () => expect(
    validateData('AnyIn', { seconds: 10, nanos: 1000 })
  ).toBe(true));
  test('any - in - valid (empty)', () => expect(
    validateData('AnyIn', undefined)
  ).toBe(true));
  test('any - in - invalid', () => expect(
    validateData('AnyIn', { invalidField: 1000 })
  ).toBe(false));
});

describe('none', () => {
  test('any - none - valid', () => expect(
    validateData('AnyNone', null)
  ).toBe(true));
});

describe('not in', () => {
  test('any - not in - valid', () => expect(
    validateData('AnyNotIn', null)
  ).toBe(true));
  test('any - not in - valid (empty)', () => expect(
    validateData('AnyIn', undefined)
  ).toBe(true));
  test('any - not in - invalid', () => expect(
    validateData('AnyNotIn', { seconds: 10, nanos: 1000 })
  ).toBe(false));
});

describe('required', () => {
  test('any - required - valid', () => expect(
    validateData('AnyRequired', {})
  ).toBe(true));
  test('any - required - invalid', () => expect(
    validateData('AnyRequired', null)
  ).toBe(false));
});
