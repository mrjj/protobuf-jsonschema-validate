const {
  validateData
} = require('../testsUtils');
describe('const', () => {
  test('enum alias - const - valid', () => expect(
    validateData('EnumAliasConst', 'TestEnumAlias_C')
  ).toBe(true));
  test('enum alias - const - valid (alias)', () => expect(
    validateData('EnumAliasConst', 'TestEnumAlias_GAMMA')
  ).toBe(true));
  test('enum alias - const - invalid', () => expect(
    validateData('EnumAliasConst', 'TestEnumAlias_ALPHA')
  ).toBe(false));
});

describe('defined_only', () => {
  test('enum alias - defined_only - valid', () => expect(
    validateData('EnumAliasDefined', 1)
  ).toBe(true));
  test('enum alias - defined_only - invalid', () => expect(
    validateData('EnumAliasDefined', 0x7fffffff)
  ).toBe(false));
});

describe('in', () => {
  test('enum alias - in - valid', () => expect(
    validateData('EnumAliasIn', 'TestEnumAlias_A')
  ).toBe(true));
  test('enum alias - in - valid (alias)', () => expect(
    validateData('EnumAliasIn', 'TestEnumAlias_ALPHA')
  ).toBe(true));
  test('enum alias - in - invalid', () => expect(
    validateData('EnumAliasIn', 'TestEnumAlias_BETA')
  ).toBe(false));
});

describe('not in', () => {
  test('enum alias - not in - valid', () => expect(
    validateData('EnumAliasNotIn', 'TestEnumAlias_ALPHA')
  ).toBe(true));
  test('enum alias - not in - invalid', () => expect(
    validateData('EnumAliasNotIn', 'TestEnumAlias_B')
  ).toBe(false));
  test('enum alias - not in - invalid (alias)', () => expect(
    validateData('EnumAliasNotIn', 'TestEnumAlias_BETA')
  ).toBe(false));
});
