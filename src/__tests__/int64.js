const { validateData } = require('../utils');
describe('const', () => {
  test('int64 - const - valid',
    () => expect(validateData('Int64Const', 1)).toBe(true));
  test('int64 - const - invalid',
    () => expect(validateData('Int64Const', 2)).toBe(false));
  });

describe('exclusive gt & lt', () => {
  test('int64 - exclusive gt & lt - valid (above)',
    () => expect(validateData('Int64ExLTGT', 11)).toBe(true));
  test('int64 - exclusive gt & lt - valid (below)',
    () => expect(validateData('Int64ExLTGT', -1)).toBe(true));
  test('int64 - exclusive gt & lt - invalid',
    () => expect(validateData('Int64ExLTGT', 5)).toBe(false));
  test('int64 - exclusive gt & lt - invalid (max)',
    () => expect(validateData('Int64ExLTGT', 10)).toBe(false));
  test('int64 - exclusive gt & lt - invalid (min)',
    () => expect(validateData('Int64ExLTGT', 0)).toBe(false));
  });

describe('exclusive gte & lte', () => {
  test('int64 - exclusive gte & lte - valid (above)',
    () => expect(validateData('Int64ExGTELTE', 300)).toBe(true));
  test('int64 - exclusive gte & lte - valid (below)',
    () => expect(validateData('Int64ExGTELTE', 100)).toBe(true));
  test('int64 - exclusive gte & lte - valid (max)',
    () => expect(validateData('Int64ExGTELTE', 256)).toBe(true));
  test('int64 - exclusive gte & lte - valid (min)',
    () => expect(validateData('Int64ExGTELTE', 128)).toBe(true));
  test('int64 - exclusive gte & lte - invalid',
    () => expect(validateData('Int64ExGTELTE', 200)).toBe(false));
  });

describe('gt', () => {
  test('int64 - gt - valid',
    () => expect(validateData('Int64GT', 17)).toBe(true));
  test('int64 - gt - invalid (equal)',
    () => expect(validateData('Int64GT', 16)).toBe(false));
  test('int64 - gt - invalid',
    () => expect(validateData('Int64GT', 15)).toBe(false));
  });

describe('gt & lt', () => {
  test('int64 - gt & lt - valid',
    () => expect(validateData('Int64GTLT', 5)).toBe(true));
  test('int64 - gt & lt - invalid (above)',
    () => expect(validateData('Int64GTLT', 11)).toBe(false));
  test('int64 - gt & lt - invalid (below)',
    () => expect(validateData('Int64GTLT', -1)).toBe(false));
  test('int64 - gt & lt - invalid (max)',
    () => expect(validateData('Int64GTLT', 10)).toBe(false));
  test('int64 - gt & lt - invalid (min)',
    () => expect(validateData('Int64GTLT', 0)).toBe(false));
  });

describe('gte', () => {
  test('int64 - gte - valid',
    () => expect(validateData('Int64GTE', 9)).toBe(true));
  test('int64 - gte - valid (equal)',
    () => expect(validateData('Int64GTE', 8)).toBe(true));
  test('int64 - gte - invalid',
    () => expect(validateData('Int64GTE', 7)).toBe(false));
  });

describe('gte & lte', () => {
  test('int64 - gte & lte - valid',
    () => expect(validateData('Int64GTELTE', 200)).toBe(true));
  test('int64 - gte & lte - valid (max)',
    () => expect(validateData('Int64GTELTE', 256)).toBe(true));
  test('int64 - gte & lte - valid (min)',
    () => expect(validateData('Int64GTELTE', 128)).toBe(true));
  test('int64 - gte & lte - invalid (above)',
    () => expect(validateData('Int64GTELTE', 300)).toBe(false));
  test('int64 - gte & lte - invalid (below)',
    () => expect(validateData('Int64GTELTE', 100)).toBe(false));
  });

describe('in', () => {
  test('int64 - in - valid',
    () => expect(validateData('Int64In', 3)).toBe(true));
  test('int64 - in - invalid',
    () => expect(validateData('Int64In', 5)).toBe(false));
  });

describe('lt', () => {
  test('int64 - lt - valid',
    () => expect(validateData('Int64LT', -1)).toBe(true));
  test('int64 - lt - invalid (equal)',
    () => expect(validateData('Int64LT', 0)).toBe(false));
  test('int64 - lt - invalid',
    () => expect(validateData('Int64LT', 1)).toBe(false));
  });

describe('lte', () => {
  test('int64 - lte - valid',
    () => expect(validateData('Int64LTE', 63)).toBe(true));
  test('int64 - lte - valid (equal)',
    () => expect(validateData('Int64LTE', 64)).toBe(true));
  test('int64 - lte - invalid',
    () => expect(validateData('Int64LTE', 65)).toBe(false));
  });

describe('none', () => {
  test('int64 - none - valid',
    () => expect(validateData('Int64None', 123)).toBe(true));
  });

describe('not in', () => {
  test('int64 - not in - valid',
    () => expect(validateData('Int64NotIn', 1)).toBe(true));
  test('int64 - not in - invalid',
    () => expect(validateData('Int64NotIn', 0)).toBe(false));
  });
