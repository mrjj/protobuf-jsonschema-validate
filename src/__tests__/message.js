const { validateData } = require('../utils');
describe('cross-package embed none', () => {
  test('message - cross-package embed none - valid',
    () => expect(validateData('MessageCrossPackage', { Embed: { val: 1 } }))
      .toBe(true));
  test('message - cross-package embed none - valid (null)',
    () => expect(validateData({ MessageCrossPackage: {} })).toBe(true));
  test('message - cross-package embed none - valid (empty)',
    () => expect(validateData('MessageCrossPackage', { Embed: {} }))
      .toBe(false));
  test('message - cross-package embed none - invalid',
    () => expect(validateData('MessageCrossPackage', { Embed: { val: -1 } }))
      .toBe(false));
  });

describe('disabled', () => {
  test('message - disabled - valid',
    () => expect(validateData('MessageDisabled', 456)).toBe(true));
  test('message - disabled - valid (invalid field)',
    () => expect(validateData('MessageDisabled', 0)).toBe(true));
  });

describe('field', () => {
  test('message - field - valid',
    () => expect(validateData('Message', { TestMsg: { const: 'foo' } }))
      .toBe(true));
  test('message - field - valid (unset)',
    () => expect(validateData({ Message: {} })).toBe(true));
  test('message - field - invalid',
    () => expect(validateData('Message', { TestMsg: {} })).toBe(false));
  test('message - field - invalid (transitive)',
    () => expect(validateData({
      Message: {
        val: {
          TestMsg: {
            const: 'foo',
            nested: { TestMsg: {} }
          }
        }
      }
    })).toBe(false));
  });

describe('none', () => {
  test('message - none - valid',
    () => expect(validateData('MessageNone', { MessageNone_NoneMsg: {} }))
      .toBe(true));
  test('message - none - valid (unset)',
    () => expect(validateData({ MessageNone: {} })).toBe(true));
  });

describe('required', () => {
  test('message - required - valid',
    () => expect(validateData('MessageRequired', { TestMsg: { const: 'foo' } }))
      .toBe(true));
  test('message - required - invalid',
    () => expect(validateData({ MessageRequired: {} })).toBe(false));
  });

describe('skip', () => {
  test('message - skip - valid',
    () => expect(validateData('MessageSkip', { TestMsg: {} })).toBe(true));
  });
