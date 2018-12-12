const { validateData } = require('../utils');
describe('const', () => {
  test('timestamp - const - valid',
    () => expect(validateData('TimestampConst', { 'google.protobuf.Timestamp': { seconds: 3 } })).toBe(true));
  test('timestamp - const - valid (empty)',
    () => expect(validateData({ TimestampConst: {} })).toBe(true));
  test('timestamp - const - invalid',
    () => expect(validateData('TimestampConst', { 'google.protobuf.Timestamp': { nanos: 3 } }))
      .toBe(false));
  });

describe('exclusive gt & lt', () => {
  test('timestamp - exclusive gt & lt - valid (empty)',
    () => expect(validateData({ TimestampExLTGT: {} })).toBe(true));
  test('timestamp - exclusive gt & lt - valid (above)',
    () => expect(validateData('TimestampExLTGT', { 'google.protobuf.Timestamp': { seconds: 2 } }))
      .toBe(true));
  test('timestamp - exclusive gt & lt - valid (below)',
    () => expect(validateData('TimestampExLTGT', { 'google.protobuf.Timestamp': { seconds: -1 } }))
      .toBe(true));
  test('timestamp - exclusive gt & lt - invalid',
    () => expect(validateData('TimestampExLTGT', { 'google.protobuf.Timestamp': { nanos: 1000 } }))
      .toBe(false));
  test('timestamp - exclusive gt & lt - invalid (max)',
    () => expect(validateData('TimestampExLTGT', { 'google.protobuf.Timestamp': { seconds: 1 } }))
      .toBe(false));
  test('timestamp - exclusive gt & lt - invalid (min)',
    () => expect(validateData('TimestampExLTGT', { 'google.protobuf.Timestamp': {} }))
      .toBe(false));
  });

describe('exclusive gte & lte', () => {
  test('timestamp - exclusive gte & lte - valid (above)',
    () => expect(validateData('TimestampExGTELTE', { 'google.protobuf.Timestamp': { seconds: 3601 } }))
      .toBe(true));
  test('timestamp - exclusive gte & lte - valid (below)',
    () => expect(validateData('TimestampExGTELTE', { 'google.protobuf.Timestamp': {} }))
      .toBe(true));
  test('timestamp - exclusive gte & lte - valid (max)',
    () => expect(validateData('TimestampExGTELTE', { 'google.protobuf.Timestamp': { seconds: 3600 } }))
      .toBe(true));
  test('timestamp - exclusive gte & lte - valid (min)',
    () => expect(validateData('TimestampExGTELTE', { 'google.protobuf.Timestamp': { seconds: 60 } }))
      .toBe(true));
  test('timestamp - exclusive gte & lte - invalid',
    () => expect(validateData('TimestampExGTELTE', { 'google.protobuf.Timestamp': { seconds: 61 } }))
      .toBe(false));
  });

describe('gt', () => {
  test('timestamp - gt - valid',
    () => expect(validateData('TimestampGT', { 'google.protobuf.Timestamp': { seconds: 1 } }))
      .toBe(true));
  test('timestamp - gt - valid (empty)',
    () => expect(validateData({ TimestampGT: {} })).toBe(true));
  test('timestamp - gt - invalid (equal)',
    () => expect(validateData('TimestampGT', { 'google.protobuf.Timestamp': { nanos: 1000 } }))
      .toBe(false));
  test('timestamp - gt - invalid',
    () => expect(validateData('TimestampGT', { 'google.protobuf.Timestamp': {} }))
      .toBe(false));
  });

describe('gt & lt', () => {
  test('timestamp - gt & lt - valid',
    () => expect(validateData('TimestampGTLT', { 'google.protobuf.Timestamp': { nanos: 1000 } }))
      .toBe(true));
  test('timestamp - gt & lt - valid (empty)',
    () => expect(validateData({ TimestampGTLT: {} })).toBe(true));
  test('timestamp - gt & lt - invalid (above)',
    () => expect(validateData('TimestampGTLT', { 'google.protobuf.Timestamp': { seconds: 1000 } }))
      .toBe(false));
  test('timestamp - gt & lt - invalid (below)',
    () => expect(validateData('TimestampGTLT', { 'google.protobuf.Timestamp': { seconds: -1000 } }))
      .toBe(false));
  test('timestamp - gt & lt - invalid (max)',
    () => expect(validateData('TimestampGTLT', { 'google.protobuf.Timestamp': { seconds: 1 } }))
      .toBe(false));
  test('timestamp - gt & lt - invalid (min)',
    () => expect(validateData('TimestampGTLT', { 'google.protobuf.Timestamp': {} }))
      .toBe(false));
  });

describe('gt now', () => {
  test('timestamp - gt now - valid',
    () => expect(validateData({
      TimestampGTNow: {
        val: {
          Timestamp: {
            seconds: time.Now()
              .Unix() + 7200
          }
        }
      }
    })).toBe(true));
  test('timestamp - gt now - valid (empty)',
    () => expect(validateData({ TimestampGTNow: {} })).toBe(true));
  test('timestamp - gt now - invalid',
    () => expect(validateData('TimestampGTNow', { 'google.protobuf.Timestamp': {} }))
      .toBe(false));
  });

describe('gte', () => {
  test('timestamp - gte - valid',
    () => expect(validateData('TimestampGTE', { 'google.protobuf.Timestamp': { seconds: 3 } }))
      .toBe(true));
  test('timestamp - gte - valid (empty)',
    () => expect(validateData({ TimestampGTE: {} })).toBe(true));
  test('timestamp - gte - valid (equal)',
    () => expect(validateData('TimestampGTE', { 'google.protobuf.Timestamp': { nanos: 1000000 } }))
      .toBe(true));
  test('timestamp - gte - invalid',
    () => expect(validateData('TimestampGTE', { 'google.protobuf.Timestamp': { seconds: -1 } }))
      .toBe(false));
  });

describe('gte & lte', () => {
  test('timestamp - gte & lte - valid',
    () => expect(validateData({
      TimestampGTELTE: {
        val: {
          Timestamp: {
            seconds: 60,
            nanos: 1
          }
        }
      }
    })).toBe(true));
  test('timestamp - gte & lte - valid (empty)',
    () => expect(validateData({ TimestampGTELTE: {} })).toBe(true));
  test('timestamp - gte & lte - valid (max)',
    () => expect(validateData('TimestampGTELTE', { 'google.protobuf.Timestamp': { seconds: 3600 } }))
      .toBe(true));
  test('timestamp - gte & lte - valid (min)',
    () => expect(validateData('TimestampGTELTE', { 'google.protobuf.Timestamp': { seconds: 60 } }))
      .toBe(true));
  test('timestamp - gte & lte - invalid (above)',
    () => expect(validateData({
      TimestampGTELTE: {
        val: {
          Timestamp: {
            seconds: 3600,
            nanos: 1
          }
        }
      }
    })).toBe(false));
  test('timestamp - gte & lte - invalid (below)',
    () => expect(validateData('TimestampGTELTE', { 'google.protobuf.Timestamp': { seconds: 59 } }))
      .toBe(false));
  test('timestamp - gte & lte - valid (empty)',
    () => expect(validateData({ TimestampExGTELTE: {} })).toBe(true));
  });

describe('lt', () => {
  test('timestamp - lt - valid',
    () => expect(validateData('TimestampLT', { 'google.protobuf.Timestamp': { seconds: -1 } }))
      .toBe(true));
  test('timestamp - lt - valid (empty)',
    () => expect(validateData({ TimestampLT: {} })).toBe(true));
  test('timestamp - lt - invalid (equal)',
    () => expect(validateData('TimestampLT', { 'google.protobuf.Timestamp': {} }))
      .toBe(false));
  test('timestamp - lt - invalid',
    () => expect(validateData('TimestampLT', { 'google.protobuf.Timestamp': { seconds: 1 } }))
      .toBe(false));
  test('timestamp - lt - now - invalid',
    () => expect(validateData({
      TimestampLTNow: {
        val: {
          Timestamp: {
            seconds: time.Now()
              .Unix() + 7200
          }
        }
      }
    })).toBe(false));
  });

describe('lt now', () => {
  test('timestamp - lt now - valid',
    () => expect(validateData('TimestampLTNow', { 'google.protobuf.Timestamp': {} }))
      .toBe(true));
  test('timestamp - lt now - valid (empty)',
    () => expect(validateData({ TimestampLTNow: {} })).toBe(true));
  });

describe('lte', () => {
  test('timestamp - lte - valid',
    () => expect(validateData('TimestampLTE', { 'google.protobuf.Timestamp': {} }))
      .toBe(true));
  test('timestamp - lte - valid (empty)',
    () => expect(validateData({ TimestampLTE: {} })).toBe(true));
  test('timestamp - lte - valid (equal)',
    () => expect(validateData('TimestampLTE', { 'google.protobuf.Timestamp': { seconds: 1 } }))
      .toBe(true));
  test('timestamp - lte - invalid',
    () => expect(validateData({
      TimestampLTE: {
        val: {
          Timestamp: {
            seconds: 1,
            nanos: 1
          }
        }
      }
    })).toBe(false));
  });

describe('none', () => {
  test('timestamp - none - valid',
    () => expect(validateData('TimestampNone', { 'google.protobuf.Timestamp': { seconds: 123 } }))
      .toBe(true));
  });

describe('required', () => {
  test('timestamp - required - valid',
    () => expect(validateData('TimestampRequired', { 'google.protobuf.Timestamp': {} }))
      .toBe(true));
  test('timestamp - required - invalid',
    () => expect(validateData('TimestampRequired', null)).toBe(false));
  });

describe('within', () => {
  test('timestamp - within - valid',
    () => expect(validateData('TimestampWithin', ptypes.TimestampNow()))
      .toBe(true));
  test('timestamp - within - valid (empty)',
    () => expect(validateData({ TimestampWithin: {} })).toBe(true));
  test('timestamp - within - invalid (below)',
    () => expect(validateData('TimestampWithin', { 'google.protobuf.Timestamp': {} }))
      .toBe(false));
  test('timestamp - within - invalid (above)',
    () => expect(validateData({
      TimestampWithin: {
        val: {
          Timestamp: {
            seconds: time.Now()
              .Unix() + 7200
          }
        }
      }
    })).toBe(false));
  });
