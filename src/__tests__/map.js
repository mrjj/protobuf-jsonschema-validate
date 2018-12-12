const { validateData } = require('../utils');
describe('exact', () => {
  test('map - exact - valid',
    () => expect(validateData('MapExact', { 1: 'a', 2: 'b', 3: 'c' }))
      .toBe(true));
  test('map - exact - invalid (below)',
    () => expect(validateData('MapExact', { 1: 'a', 2: 'b' })).toBe(false));
  test('map - exact - invalid (above)',
    () => expect(validateData({
      MapExact: {
        val: {
          1: 'a',
          2: 'b',
          3: 'c',
          4: 'd'
        }
      }
    })).toBe(false));
  });

describe('keys', () => {
  test('map - keys - valid',
    () => expect(validateData('MapKeys', { '-1': 'a', '-2': 'b' }))
      .toBe(true));
  test('map - keys - valid (empty)',
    () => expect(validateData('MapKeys', {})).toBe(true));
  test('map - keys - valid (pattern)',
    () => expect(validateData('MapKeysPattern', { 'A': 'a' })).toBe(true));
  test('map - keys - invalid',
    () => expect(validateData('MapKeys', { 1: 'a' })).toBe(false));
  test('map - keys - invalid (pattern)',
    () => expect(validateData({
      MapKeysPattern: {
        val: {
          'A': 'a',
          '!@#$%^&*()': 'b'
        }
      }
    })).toBe(false));
  });

describe('max pairs', () => {
  test('map - max pairs - valid',
    () => expect(validateData('MapMax', { 1: 2, 3: 4 })).toBe(true));
  test('map - max pairs - valid (equal)',
    () => expect(validateData('MapMax', { 1: 2, 3: 4, 5: 6 })).toBe(true));
  test('map - max pairs - invalid',
    () => expect(validateData('MapMax', { 1: 2, 3: 4, 5: 6, 7: 8 }))
      .toBe(false));
  });

describe('min pairs', () => {
  test('map - min pairs - valid',
    () => expect(validateData('MapMin', { 1: 2, 3: 4, 5: 6 })).toBe(true));
  test('map - min pairs - valid (equal)',
    () => expect(validateData('MapMin', { 1: 2, 3: 4 })).toBe(true));
  test('map - min pairs - invalid',
    () => expect(validateData('MapMin', { 1: 2 })).toBe(false));
  });

describe('min/max', () => {
  test('map - min/max - valid',
    () => expect(validateData({
      MapMinMax: {
        val: {
          'a': true,
          'b': false,
          'c': true
        }
      }
    })).toBe(true));
  test('map - min/max - valid (min)',
    () => expect(validateData('MapMinMax', { 'a': true, 'b': false }))
      .toBe(true));
  test('map - min/max - valid (max)',
    () => expect(validateData({
      MapMinMax: {
        val: {
          'a': true,
          'b': false,
          'c': true,
          'd': false
        }
      }
    })).toBe(true));
  test('map - min/max - invalid (below)',
    () => expect(validateData('MapMinMax', {})).toBe(false));
  test('map - min/max - invalid (above)',
    () => expect(validateData({
      MapMinMax: {
        val: {
          'a': true,
          'b': false,
          'c': true,
          'd': false,
          'e': true
        }
      }
    })).toBe(false));
  });

describe('no sparse', () => {
  test('map - no sparse - valid',
    () => expect(validateData({
      MapNoSparse: {
        val: {
          MapNoSparse_Msg: {
            1: ({}),
            2: ({})
          }
        }
      }
    })).toBe(true));
  test('map - no sparse - valid (empty)',
    () => expect(validateData('MapNoSparse', { MapNoSparse_Msg: {} }))
      .toBe(true));
  test('map - no sparse - invalid',
    () => expect(validateData({
      MapNoSparse: {
        val: {
          MapNoSparse_Msg: {
            1: {},
            2: null
          }
        }
      }})).toBe(false));
  });

describe('none', () => {
  test('map - none - valid',
    () => expect(validateData('MapNone', { 123: true, 456: false }))
      .toBe(true));
  });

describe('values', () => {
  test('map - values - valid',
    () => expect(validateData('MapValues', { 'a': 'Alpha', 'b': 'Beta' }))
      .toBe(true));
  test('map - values - valid (empty)',
    () => expect(validateData('MapValues', {})).toBe(true));
  test('map - values - valid (pattern)',
    () => expect(validateData('MapValuesPattern', { 'a': 'A' })).toBe(true));
  test('map - values - invalid',
    () => expect(validateData('MapValues', { 'a': 'A', 'b': 'B' }))
      .toBe(false));
  test('map - values - invalid (pattern)',
    () => expect(validateData({
      MapValuesPattern: {
        val: {
          'a': 'A',
          'b': '!@#$%^&*()'
        }
      }
    })).toBe(false));
  });
