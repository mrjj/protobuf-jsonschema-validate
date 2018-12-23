const {
  validateData
} = require('../testsUtils');
describe('defined_only', () => {
  test('enum external - defined_only - valid', () => expect(
    validateData('EnumExternal', 'VALUE')
  ).toBe(true));
  test('enum external - defined_only - invalid', () => expect(
    validateData('EnumExternal', 0x7fffffff)
  ).toBe(false));
});
