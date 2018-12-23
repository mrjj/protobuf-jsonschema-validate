const {
  validateData
} = require('../testsUtils');
describe('bool', () => {
  test('wrapper - bool - valid', () => expect(
    validateData('WrapperBool', { value: true }))
    .toBe(true));
  test('wrapper - bool - valid (empty)', () => expect(
    validateData('WrapperBool', undefined)
  ).toBe(true));
  test('wrapper - bool - invalid', () => expect(
    validateData('WrapperBool', { value: false })
  ).toBe(false));
});

describe.skip('bytes', () => {
  test('wrapper - bytes - valid', () => expect(
    validateData('WrapperBytes', { value: Uint8Array.from('foo') }))
    .toBe(true));
  test('wrapper - bytes - valid (empty)', () => expect(
    validateData('WrapperBytes', undefined)
  ).toBe(true));
  test('wrapper - bytes - invalid', () => expect(
    validateData('WrapperBytes', { value: Uint8Array.from('x') }))
    .toBe(false));
});

describe('double', () => {
  test('wrapper - double - valid', () => expect(
    validateData('WrapperDouble', { value: 1 }))
    .toBe(true));
  test('wrapper - double - valid (empty)', () => expect(
    validateData('WrapperDouble', undefined)
  ).toBe(true));
  test('wrapper - double - invalid', () => expect(
    validateData('WrapperDouble', { value: 0 })
  ).toBe(false));
});

describe('float', () => {
  test('wrapper - float - valid', () => expect(
    validateData('WrapperFloat', { value: 1 }))
    .toBe(true));
  test('wrapper - float - valid (empty)', () => expect(
    validateData('WrapperFloat', undefined)
  ).toBe(true));
  test('wrapper - float - invalid', () => expect(
    validateData('WrapperFloat', { value: 0 }))
    .toBe(false));
});

describe('int32', () => {
  test('wrapper - int32 - valid', () => expect(
    validateData('WrapperInt32', { value: 1 }))
    .toBe(true));
  test('wrapper - int32 - valid (empty)', () => expect(
    validateData('WrapperInt32', undefined)
  ).toBe(true));
  test('wrapper - int32 - invalid', () => expect(
    validateData('WrapperInt32', { value: 0 })
  ).toBe(false));
});

describe('int64', () => {
  test('wrapper - int64 - valid', () => expect(
    validateData('WrapperInt64', { value: 1 }))
    .toBe(true));
  test('wrapper - int64 - valid (empty)', () => expect(
    validateData('WrapperInt64', undefined)
  ).toBe(true));
  test('wrapper - int64 - invalid', () => expect(
    validateData('WrapperInt64', { value: 0 }))
    .toBe(false));
});

describe('none', () => {
  test('wrapper - none - valid', () => expect(
    validateData('WrapperNone', { value: 123 }))
    .toBe(true));
  test('wrapper - none - valid (empty)', () => expect(
    validateData('WrapperNone', undefined)
  ).toBe(true));
});

describe('string', () => {
  test('wrapper - string - valid', () => expect(
    validateData('WrapperString', { value: 'foobar' }))
    .toBe(true));
  test('wrapper - string - valid (empty)', () => expect(
    validateData('WrapperString', undefined)
  ).toBe(true));
  test('wrapper - string - invalid', () => expect(
    validateData('WrapperString', { value: 'fizzbuzz' }))
    .toBe(false));
});

describe('uint32', () => {
  test('wrapper - uint32 - valid', () => expect(
    validateData('WrapperUInt32', { value: 1 }))
    .toBe(true));
  test('wrapper - uint32 - valid (empty)', () => expect(
    validateData('WrapperUInt32', undefined)
  ).toBe(true));
  test('wrapper - uint32 - invalid', () => expect(
    validateData('WrapperUInt32', { value: 0 }))
    .toBe(false));
});

describe('uint64', () => {
  test('wrapper - uint64 - valid', () => expect(
    validateData('WrapperUInt64', { value: 1 }))
    .toBe(true));
  test('wrapper - uint64 - valid (empty)', () => expect(
    validateData('WrapperUInt64', undefined)
  ).toBe(true));
  test('wrapper - uint64 - invalid', () => expect(
    validateData('WrapperUInt64', { value: 0 }))
    .toBe(false));
});
