const { validateData } = require('../utils');
describe('const', () => {
  test('sint64 - const - valid',
    () => expect(validateData('SInt64Const', 1)).toBe(true));
  test('sint64 - const - invalid',
    () => expect(validateData('SInt64Const', 2)).toBe(false));
  });

describe('exclusive gt & lt', () => {
  test('sint64 - exclusive gt & lt - valid (above)',
    () => expect(validateData('SInt64ExLTGT', 11)).toBe(true));
  test('sint64 - exclusive gt & lt - valid (below)',
    () => expect(validateData('SInt64ExLTGT', -1)).toBe(true));
  test('sint64 - exclusive gt & lt - invalid',
    () => expect(validateData('SInt64ExLTGT', 5)).toBe(false));
  test('sint64 - exclusive gt & lt - invalid (max)',
    () => expect(validateData('SInt64ExLTGT', 10)).toBe(false));
  test('sint64 - exclusive gt & lt - invalid (min)',
    () => expect(validateData('SInt64ExLTGT', 0)).toBe(false));
  });

describe('exclusive gte & lte', () => {
  test('sint64 - exclusive gte & lte - valid (above)',
    () => expect(validateData('SInt64ExGTELTE', 300)).toBe(true));
  test('sint64 - exclusive gte & lte - valid (below)',
    () => expect(validateData('SInt64ExGTELTE', 100)).toBe(true));
  test('sint64 - exclusive gte & lte - valid (max)',
    () => expect(validateData('SInt64ExGTELTE', 256)).toBe(true));
  test('sint64 - exclusive gte & lte - valid (min)',
    () => expect(validateData('SInt64ExGTELTE', 128)).toBe(true));
  test('sint64 - exclusive gte & lte - invalid',
    () => expect(validateData('SInt64ExGTELTE', 200)).toBe(false));
  });

describe('gt', () => {
  test('sint64 - gt - valid',
    () => expect(validateData('SInt64GT', 17)).toBe(true));
  test('sint64 - gt - invalid (equal)',
    () => expect(validateData('SInt64GT', 16)).toBe(false));
  test('sint64 - gt - invalid',
    () => expect(validateData('SInt64GT', 15)).toBe(false));
  });

describe('gt & lt', () => {
  test('sint64 - gt & lt - valid',
    () => expect(validateData('SInt64GTLT', 5)).toBe(true));
  test('sint64 - gt & lt - invalid (above)',
    () => expect(validateData('SInt64GTLT', 11)).toBe(false));
  test('sint64 - gt & lt - invalid (below)',
    () => expect(validateData('SInt64GTLT', -1)).toBe(false));
  test('sint64 - gt & lt - invalid (max)',
    () => expect(validateData('SInt64GTLT', 10)).toBe(false));
  test('sint64 - gt & lt - invalid (min)',
    () => expect(validateData('SInt64GTLT', 0)).toBe(false));
  });

describe('gte', () => {
  test('sint64 - gte - valid',
    () => expect(validateData('SInt64GTE', 9)).toBe(true));
  test('sint64 - gte - valid (equal)',
    () => expect(validateData('SInt64GTE', 8)).toBe(true));
  test('sint64 - gte - invalid',
    () => expect(validateData('SInt64GTE', 7)).toBe(false));
  });

describe('gte & lte', () => {
  test('sint64 - gte & lte - valid',
    () => expect(validateData('SInt64GTELTE', 200)).toBe(true));
  test('sint64 - gte & lte - valid (max)',
    () => expect(validateData('SInt64GTELTE', 256)).toBe(true));
  test('sint64 - gte & lte - valid (min)',
    () => expect(validateData('SInt64GTELTE', 128)).toBe(true));
  test('sint64 - gte & lte - invalid (above)',
    () => expect(validateData('SInt64GTELTE', 300)).toBe(false));
  test('sint64 - gte & lte - invalid (below)',
    () => expect(validateData('SInt64GTELTE', 100)).toBe(false));
  });

describe('in', () => {
  test('sint64 - in - valid',
    () => expect(validateData('SInt64In', 3)).toBe(true));
  test('sint64 - in - invalid',
    () => expect(validateData('SInt64In', 5)).toBe(false));
  });

describe('lt', () => {
  test('sint64 - lt - valid',
    () => expect(validateData('SInt64LT', -1)).toBe(true));
  test('sint64 - lt - invalid (equal)',
    () => expect(validateData('SInt64LT', 0)).toBe(false));
  test('sint64 - lt - invalid',
    () => expect(validateData('SInt64LT', 1)).toBe(false));
  });

describe('lte', () => {
  test('sint64 - lte - valid',
    () => expect(validateData('SInt64LTE', 63)).toBe(true));
  test('sint64 - lte - valid (equal)',
    () => expect(validateData('SInt64LTE', 64)).toBe(true));
  test('sint64 - lte - invalid',
    () => expect(validateData('SInt64LTE', 65)).toBe(false));
  });

describe('none', () => {
  test('sint64 - none - valid',
    () => expect(validateData('SInt64None', 123)).toBe(true));
  });

describe('not in', () => {
  test('sint64 - not in - valid',
    () => expect(validateData('SInt64NotIn', 1)).toBe(true));
  test('sint64 - not in - invalid',
    () => expect(validateData('SInt64NotIn', 0)).toBe(false));
  });
