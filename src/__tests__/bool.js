const { validateData } = require('../utils');

describe('const (false)', () => {
  test('bool - const (false) - valid',
    () => expect(validateData('BoolConstFalse', false)).toBe(true));
  test('bool - const (false) - invalid',
    () => expect(validateData('BoolConstFalse', true)).toBe(false));
});

describe('const (true)', () => {
  test('bool - const (true) - valid',
    () => expect(validateData('BoolConstTrue', true)).toBe(true));
  test('bool - const (true) - invalid',
    () => expect(validateData('BoolConstTrue', false)).toBe(false));
});

describe('none', () => {
  test('bool - none - valid',
    () => expect(validateData('BoolNone', true)).toBe(true));
});
