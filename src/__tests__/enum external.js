const { validateData } = require('../utils');
describe('defined_only', () => {
  test('enum external - defined_only - valid',
    () => expect(validateData('EnumExternal', Root.lookupType('Embed_VALUE'))).toBe(true));
  test('enum external - defined_only - invalid',
    () => expect(validateData('EnumExternal', 0x7fffffff)).toBe(false));
  });
