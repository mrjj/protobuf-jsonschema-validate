const { validateData } = require('../utils');
describe('bool', () => {
  test('wrapper - bool - valid',
    () => expect(validateData('WrapperBool', { BoolValue: { value: true } }))
      .toBe(true));
  test('wrapper - bool - valid (empty)',
    () => expect(validateData('WrapperBool', null)).toBe(true));
  test('wrapper - bool - invalid',
    () => expect(validateData('WrapperBool', { BoolValue: { value: false } }))
      .toBe(false));
  });

describe('bytes', () => {
  test('wrapper - bytes - valid',
    () => expect(validateData('WrapperBytes', { BytesValue: { value: Uint8Array.from('foo') } }))
      .toBe(true));
  test('wrapper - bytes - valid (empty)',
    () => expect(validateData('WrapperBytes', null)).toBe(true));
  test('wrapper - bytes - invalid',
    () => expect(validateData('WrapperBytes', { BytesValue: { value: Uint8Array.from('x') } }))
      .toBe(false));
  });

describe('double', () => {
  test('wrapper - double - valid',
    () => expect(validateData('WrapperDouble', { DoubleValue: { value: 1 } }))
      .toBe(true));
  test('wrapper - double - valid (empty)',
    () => expect(validateData('WrapperDouble', null)).toBe(true));
  test('wrapper - double - invalid',
    () => expect(validateData('WrapperDouble', { DoubleValue: { value: 0 } }))
      .toBe(false));
  });

describe('float', () => {
  test('wrapper - float - valid',
    () => expect(validateData('WrapperFloat', { FloatValue: { value: 1 } }))
      .toBe(true));
  test('wrapper - float - valid (empty)',
    () => expect(validateData('WrapperFloat', null)).toBe(true));
  test('wrapper - float - invalid',
    () => expect(validateData('WrapperFloat', { FloatValue: { value: 0 } }))
      .toBe(false));
  });

describe('int32', () => {
  test('wrapper - int32 - valid',
    () => expect(validateData('WrapperInt32', { Int32Value: { value: 1 } }))
      .toBe(true));
  test('wrapper - int32 - valid (empty)',
    () => expect(validateData('WrapperInt32', null)).toBe(true));
  test('wrapper - int32 - invalid',
    () => expect(validateData('WrapperInt32', { Int32Value: { value: 0 } }))
      .toBe(false));
  });

describe('int64', () => {
  test('wrapper - int64 - valid',
    () => expect(validateData('WrapperInt64', { Int64Value: { value: 1 } }))
      .toBe(true));
  test('wrapper - int64 - valid (empty)',
    () => expect(validateData('WrapperInt64', null)).toBe(true));
  test('wrapper - int64 - invalid',
    () => expect(validateData('WrapperInt64', { Int64Value: { value: 0 } }))
      .toBe(false));
  });

describe('none', () => {
  test('wrapper - none - valid',
    () => expect(validateData('WrapperNone', { Int32Value: { value: 123 } }))
      .toBe(true));
  test('wrapper - none - valid (empty)',
    () => expect(validateData('WrapperNone', null)).toBe(true));
  });

describe('string', () => {
  test('wrapper - string - valid',
    () => expect(validateData('WrapperString', { StringValue: { value: 'foobar' } }))
      .toBe(true));
  test('wrapper - string - valid (empty)',
    () => expect(validateData('WrapperString', null)).toBe(true));
  test('wrapper - string - invalid',
    () => expect(validateData('WrapperString', { StringValue: { value: 'fizzbuzz' } }))
      .toBe(false));
  });

describe('uint32', () => {
  test('wrapper - uint32 - valid',
    () => expect(validateData('WrapperUInt32', { UInt32Value: { value: 1 } }))
      .toBe(true));
  test('wrapper - uint32 - valid (empty)',
    () => expect(validateData('WrapperUInt32', null)).toBe(true));
  test('wrapper - uint32 - invalid',
    () => expect(validateData('WrapperUInt32', { UInt32Value: { value: 0 } }))
      .toBe(false));
  });

describe('uint64', () => {
  test('wrapper - uint64 - valid',
    () => expect(validateData('WrapperUInt64', { UInt64Value: { value: 1 } }))
      .toBe(true));
  test('wrapper - uint64 - valid (empty)',
    () => expect(validateData('WrapperUInt64', null)).toBe(true));
  test('wrapper - uint64 - invalid',
    () => expect(validateData('WrapperUInt64', { UInt64Value: { value: 0 } }))
      .toBe(false));
  });
