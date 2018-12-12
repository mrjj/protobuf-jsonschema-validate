const { validateData } = require('../utils');

describe('const', () => {
  test('int32 - const - valid',
    () => expect(validateData('Int32Const', 1)).toBe(true));
  test('int32 - const - invalid',
    () => expect(validateData('Int32Const', 2)).toBe(false));
  });

describe('exclusive gt & lt', () => {
  test('int32 - exclusive gt & lt - valid (above)',
    () => expect(validateData('Int32ExLTGT', 11)).toBe(true));
  test('int32 - exclusive gt & lt - valid (below)',
    () => expect(validateData('Int32ExLTGT', -1)).toBe(true));
  test('int32 - exclusive gt & lt - invalid',
    () => expect(validateData('Int32ExLTGT', 5)).toBe(false));
  test('int32 - exclusive gt & lt - invalid (max)',
    () => expect(validateData('Int32ExLTGT', 10)).toBe(false));
  test('int32 - exclusive gt & lt - invalid (min)',
    () => expect(validateData('Int32ExLTGT', 0)).toBe(false));
  });

describe('exclusive gte & lte', () => {
  test('int32 - exclusive gte & lte - valid (above)',
    () => expect(validateData('Int32ExGTELTE', 300)).toBe(true));
  test('int32 - exclusive gte & lte - valid (below)',
    () => expect(validateData('Int32ExGTELTE', 100)).toBe(true));
  test('int32 - exclusive gte & lte - valid (max)',
    () => expect(validateData('Int32ExGTELTE', 256)).toBe(true));
  test('int32 - exclusive gte & lte - valid (min)',
    () => expect(validateData('Int32ExGTELTE', 128)).toBe(true));
  test('int32 - exclusive gte & lte - invalid',
    () => expect(validateData('Int32ExGTELTE', 200)).toBe(false));
  });

describe('gt', () => {
  test('int32 - gt - valid',
    () => expect(validateData('Int32GT', 17)).toBe(true));
  test('int32 - gt - invalid (equal)',
    () => expect(validateData('Int32GT', 16)).toBe(false));
  test('int32 - gt - invalid',
    () => expect(validateData('Int32GT', 15)).toBe(false));
  });

describe('gt & lt', () => {
  test('int32 - gt & lt - valid',
    () => expect(validateData('Int32GTLT', 5)).toBe(true));
  test('int32 - gt & lt - invalid (above)',
    () => expect(validateData('Int32GTLT', 11)).toBe(false));
  test('int32 - gt & lt - invalid (below)',
    () => expect(validateData('Int32GTLT', -1)).toBe(false));
  test('int32 - gt & lt - invalid (max)',
    () => expect(validateData('Int32GTLT', 10)).toBe(false));
  test('int32 - gt & lt - invalid (min)',
    () => expect(validateData('Int32GTLT', 0)).toBe(false));
  });

describe('gte', () => {
  test('int32 - gte - valid',
    () => expect(validateData('Int32GTE', 9)).toBe(true));
  test('int32 - gte - valid (equal)',
    () => expect(validateData('Int32GTE', 8)).toBe(true));
  test('int32 - gte - invalid',
    () => expect(validateData('Int32GTE', 7)).toBe(false));
  });

describe('gte & lte', () => {
  test('int32 - gte & lte - valid',
    () => expect(validateData('Int32GTELTE', 200)).toBe(true));
  test('int32 - gte & lte - valid (max)',
    () => expect(validateData('Int32GTELTE', 256)).toBe(true));
  test('int32 - gte & lte - valid (min)',
    () => expect(validateData('Int32GTELTE', 128)).toBe(true));
  test('int32 - gte & lte - invalid (above)',
    () => expect(validateData('Int32GTELTE', 300)).toBe(false));
  test('int32 - gte & lte - invalid (below)',
    () => expect(validateData('Int32GTELTE', 100)).toBe(false));
  });

describe('in', () => {
  test('int32 - in - valid',
    () => expect(validateData('Int32In', 3)).toBe(true));
  test('int32 - in - invalid',
    () => expect(validateData('Int32In', 5)).toBe(false));
  });

describe('lt', () => {
  test('int32 - lt - valid',
    () => expect(validateData('Int32LT', -1)).toBe(true));
  test('int32 - lt - invalid (equal)',
    () => expect(validateData('Int32LT', 0)).toBe(false));
  test('int32 - lt - invalid',
    () => expect(validateData('Int32LT', 1)).toBe(false));
  });

describe('lte', () => {
  test('int32 - lte - valid',
    () => expect(validateData('Int32LTE', 63)).toBe(true));
  test('int32 - lte - valid (equal)',
    () => expect(validateData('Int32LTE', 64)).toBe(true));
  test('int32 - lte - invalid',
    () => expect(validateData('Int32LTE', 65)).toBe(false));
  });

describe('none', () => {
  test('int32 - none - valid',
    () => expect(validateData('Int32None', 123)).toBe(true));
  });

describe('not in', () => {
  test('int32 - not in - valid',
    () => expect(validateData('Int32NotIn', 1)).toBe(true));
  test('int32 - not in - invalid',
    () => expect(validateData('Int32NotIn', 0)).toBe(false));
  });
