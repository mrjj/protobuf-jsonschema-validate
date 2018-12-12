const { validateData } = require('../utils');
describe('const', () => {
  test('uint32 - const - valid',
    () => expect(validateData('UInt32Const', 1)).toBe(true));
  test('uint32 - const - invalid',
    () => expect(validateData('UInt32Const', 2)).toBe(false));
  });

describe('exclusive gt & lt', () => {
  test('uint32 - exclusive gt & lt - valid (above)',
    () => expect(validateData('UInt32ExLTGT', 11)).toBe(true));
  test('uint32 - exclusive gt & lt - valid (below)',
    () => expect(validateData('UInt32ExLTGT', 4)).toBe(true));
  test('uint32 - exclusive gt & lt - invalid',
    () => expect(validateData('UInt32ExLTGT', 7)).toBe(false));
  test('uint32 - exclusive gt & lt - invalid (max)',
    () => expect(validateData('UInt32ExLTGT', 10)).toBe(false));
  test('uint32 - exclusive gt & lt - invalid (min)',
    () => expect(validateData('UInt32ExLTGT', 5)).toBe(false));
  });

describe('exclusive gte & lte', () => {
  test('uint32 - exclusive gte & lte - valid (above)',
    () => expect(validateData('UInt32ExGTELTE', 300)).toBe(true));
  test('uint32 - exclusive gte & lte - valid (below)',
    () => expect(validateData('UInt32ExGTELTE', 100)).toBe(true));
  test('uint32 - exclusive gte & lte - valid (max)',
    () => expect(validateData('UInt32ExGTELTE', 256)).toBe(true));
  test('uint32 - exclusive gte & lte - valid (min)',
    () => expect(validateData('UInt32ExGTELTE', 128)).toBe(true));
  test('uint32 - exclusive gte & lte - invalid',
    () => expect(validateData('UInt32ExGTELTE', 200)).toBe(false));
  });

describe('gt', () => {
  test('uint32 - gt - valid',
    () => expect(validateData('UInt32GT', 17)).toBe(true));
  test('uint32 - gt - invalid (equal)',
    () => expect(validateData('UInt32GT', 16)).toBe(false));
  test('uint32 - gt - invalid',
    () => expect(validateData('UInt32GT', 15)).toBe(false));
  });

describe('gt & lt', () => {
  test('uint32 - gt & lt - valid',
    () => expect(validateData('UInt32GTLT', 7)).toBe(true));
  test('uint32 - gt & lt - invalid (above)',
    () => expect(validateData('UInt32GTLT', 11)).toBe(false));
  test('uint32 - gt & lt - invalid (below)',
    () => expect(validateData('UInt32GTLT', 1)).toBe(false));
  test('uint32 - gt & lt - invalid (max)',
    () => expect(validateData('UInt32GTLT', 10)).toBe(false));
  test('uint32 - gt & lt - invalid (min)',
    () => expect(validateData('UInt32GTLT', 5)).toBe(false));
  });

describe('gte', () => {
  test('uint32 - gte - valid',
    () => expect(validateData('UInt32GTE', 9)).toBe(true));
  test('uint32 - gte - valid (equal)',
    () => expect(validateData('UInt32GTE', 8)).toBe(true));
  test('uint32 - gte - invalid',
    () => expect(validateData('UInt32GTE', 7)).toBe(false));
  });

describe('gte & lte', () => {
  test('uint32 - gte & lte - valid',
    () => expect(validateData('UInt32GTELTE', 200)).toBe(true));
  test('uint32 - gte & lte - valid (max)',
    () => expect(validateData('UInt32GTELTE', 256)).toBe(true));
  test('uint32 - gte & lte - valid (min)',
    () => expect(validateData('UInt32GTELTE', 128)).toBe(true));
  test('uint32 - gte & lte - invalid (above)',
    () => expect(validateData('UInt32GTELTE', 300)).toBe(false));
  test('uint32 - gte & lte - invalid (below)',
    () => expect(validateData('UInt32GTELTE', 100)).toBe(false));
  });

describe('in', () => {
  test('uint32 - in - valid',
    () => expect(validateData('UInt32In', 3)).toBe(true));
  test('uint32 - in - invalid',
    () => expect(validateData('UInt32In', 5)).toBe(false));
  });

describe('lt', () => {
  test('uint32 - lt - valid',
    () => expect(validateData('UInt32LT', 4)).toBe(true));
  test('uint32 - lt - invalid (equal)',
    () => expect(validateData('UInt32LT', 5)).toBe(false));
  test('uint32 - lt - invalid',
    () => expect(validateData('UInt32LT', 6)).toBe(false));
  });

describe('lte', () => {
  test('uint32 - lte - valid',
    () => expect(validateData('UInt32LTE', 63)).toBe(true));
  test('uint32 - lte - valid (equal)',
    () => expect(validateData('UInt32LTE', 64)).toBe(true));
  test('uint32 - lte - invalid',
    () => expect(validateData('UInt32LTE', 65)).toBe(false));
  });

describe('none', () => {
  test('uint32 - none - valid',
    () => expect(validateData('UInt32None', 123)).toBe(true));
  });

describe('not in', () => {
  test('uint32 - not in - valid',
    () => expect(validateData('UInt32NotIn', 1)).toBe(true));
  test('uint32 - not in - invalid',
    () => expect(validateData('UInt32NotIn', 0)).toBe(false));
  });
