const { validateData } = require('../utils');

describe('in', () => {
  test('any - in - valid',
    () => expect(validateData('AnyIn', {Any: {typeurl: "type.googleapis.com/google.protobuf.Duration"}})).toBe(true));
  test('any - in - valid (empty)',
    () => expect(validateData({AnyIn: {}})).toBe(true));
  test('any - in - invalid',
    () => expect(validateData('AnyIn', {Any: {typeurl: "type.googleapis.com/google.protobuf.Timestamp"}})).toBe(false));
  });

describe('none', () => {
  test('any - none - valid',
    () => expect(validateData('AnyNone', {Any: {}})).toBe(true));
  });

describe('not in', () => {
  test('any - not in - valid',
    () => expect(validateData('AnyNotIn', {Any: {typeurl: "type.googleapis.com/google.protobuf.Duration"}})).toBe(true));
  test('any - not in - valid (empty)',
    () => expect(validateData({AnyNotIn: {}})).toBe(true));
  test('any - not in - invalid',
    () => expect(validateData('AnyNotIn', {Any: {typeurl: "type.googleapis.com/google.protobuf.Timestamp"}})).toBe(false));
  });

describe('required', () => {
  test('any - required - valid',
    () => expect(validateData('AnyRequired', {Any: {}})).toBe(true));
  test('any - required - invalid',
    () => expect(validateData('AnyRequired', null)).toBe(false));
  });
