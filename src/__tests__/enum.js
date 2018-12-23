const {
  validateData
} = require('../testsUtils');
describe('const', () => {
  test('enum - const - valid', () => expect(
    validateData('EnumConst', 'TWO')
  ).toBe(true));
  test('enum - const - invalid', () => expect(
    validateData('EnumConst', 'ONE')
  ).toBe(false));
});

describe('defined_only', () => {
  test('enum - defined_only - valid', () => expect(
    validateData('EnumDefined', 0)
  ).toBe(true));
  test('enum - defined_only - invalid', () => expect(
    validateData('EnumDefined', 0x7fffffff)
  ).toBe(false));
});

describe('in', () => {
  test('enum - in - valid', () => expect(
    validateData('EnumIn', 'TestEnum_TWO')
  ).toBe(true));
  test('enum - in - invalid', () => expect(
    validateData('EnumIn', 'TestEnum_ONE')
  ).toBe(false));
});

describe('none', () => {
  test('enum - none - valid', () => expect(
    validateData('EnumNone', 'TestEnum_ONE')
  ).toBe(true));
});

describe('not in', () => {
  test('enum - not in - valid', () => expect(
    validateData('EnumNotIn', 'TestEnum_ZERO')
  ).toBe(true));
  test('enum - not in - valid (undefined)', () => expect(
    validateData('EnumNotIn', 0x7fffffff)
  ).toBe(true));
  test('enum - not in - invalid', () => expect(
    validateData('EnumNotIn', 'TestEnum_ONE')
  ).toBe(false));
});
