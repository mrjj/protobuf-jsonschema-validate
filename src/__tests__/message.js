const {
  validateData
} = require('../testsUtils');
describe('cross-package embed none', () => {
  test('message - cross-package embed none - valid', () => expect(
    validateData('MessageCrossPackage', 1)
  ).toBe(true));
  test('message - cross-package embed none - valid (null)', () => expect(
    validateData('MessageCrossPackage', null)
  ).toBe(true));
  test('message - cross-package embed none - valid (empty)', () => expect(
    validateData('MessageCrossPackage', undefined)
  ).toBe(false));
  test('message - cross-package embed none - invalid', () => expect(
    validateData('MessageCrossPackage', -1)
  ).toBe(false));
});

describe('disabled', () => {
  test('message - disabled - valid', () => expect(
    validateData('MessageDisabled', 456)
  ).toBe(true));
  test('message - disabled - valid (invalid field)', () => expect(
    validateData('MessageDisabled', 0)
  ).toBe(true));
});

describe('field', () => {
  test('message - field - valid', () => expect(
    validateData('TestMsg', 'foo')
  ).toBe(true));
  test('message - field - valid (unset)', () => expect(
    validateData('TestMsg', undefined)
  ).toBe(true));
  test('message - field - invalid', () => expect(
    validateData('TestMsg', null)
  ).toBe(false));
  test('message - field - invalid (transitive)', () => expect(
    validateData('TestMsg', { nested: null })
  ).toBe(false));
});

describe('none', () => {
  test('message - none - valid', () => expect(
    validateData('MessageNone', null)
  ).toBe(true));
  test('message - none - valid (unset)', () => expect(
    validateData('MessageNone', undefined)
  ).toBe(true));
});

describe('required', () => {
  test('message - required - valid', () => expect(
    validateData('MessageRequired', 'foo')
  ).toBe(true));
  test('message - required - invalid', () => expect(
    validateData('MessageRequired', undefined)
  ).toBe(false));
});

describe('skip', () => {
  test('message - skip - valid', () => expect(
    validateData('MessageSkip', { TestMsg: {} })
  ).toBe(true));
});
