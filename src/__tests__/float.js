const { validateData } = require('../utils');
describe('const', () => {
  test('float - const - valid',
    () => expect(validateData('FloatConst', 1.23)).toBe(true));
  test('float - const - invalid',
    () => expect(validateData('FloatConst', 4.56)).toBe(false));
  });

describe('exclusive gt & lt', () => {
  test('float - exclusive gt & lt - valid (above)',
    () => expect(validateData('FloatExLTGT', 11)).toBe(true));
  test('float - exclusive gt & lt - valid (below)',
    () => expect(validateData('FloatExLTGT', -1)).toBe(true));
  test('float - exclusive gt & lt - invalid',
    () => expect(validateData('FloatExLTGT', 5)).toBe(false));
  test('float - exclusive gt & lt - invalid (max)',
    () => expect(validateData('FloatExLTGT', 10)).toBe(false));
  test('float - exclusive gt & lt - invalid (min)',
    () => expect(validateData('FloatExLTGT', 0)).toBe(false));
  });

describe('exclusive gte & lte', () => {
  test('float - exclusive gte & lte - valid (above)',
    () => expect(validateData('FloatExGTELTE', 300)).toBe(true));
  test('float - exclusive gte & lte - valid (below)',
    () => expect(validateData('FloatExGTELTE', 100)).toBe(true));
  test('float - exclusive gte & lte - valid (max)',
    () => expect(validateData('FloatExGTELTE', 256)).toBe(true));
  test('float - exclusive gte & lte - valid (min)',
    () => expect(validateData('FloatExGTELTE', 128)).toBe(true));
  test('float - exclusive gte & lte - invalid',
    () => expect(validateData('FloatExGTELTE', 200)).toBe(false));
  });

describe('gt', () => {
  test('float - gt - valid',
    () => expect(validateData('FloatGT', 17)).toBe(true));
  test('float - gt - invalid (equal)',
    () => expect(validateData('FloatGT', 16)).toBe(false));
  test('float - gt - invalid',
    () => expect(validateData('FloatGT', 15)).toBe(false));
  });

describe('gt & lt', () => {
  test('float - gt & lt - valid',
    () => expect(validateData('FloatGTLT', 5)).toBe(true));
  test('float - gt & lt - invalid (above)',
    () => expect(validateData('FloatGTLT', 11)).toBe(false));
  test('float - gt & lt - invalid (below)',
    () => expect(validateData('FloatGTLT', -1)).toBe(false));
  test('float - gt & lt - invalid (max)',
    () => expect(validateData('FloatGTLT', 10)).toBe(false));
  test('float - gt & lt - invalid (min)',
    () => expect(validateData('FloatGTLT', 0)).toBe(false));
  });

describe('gte', () => {
  test('float - gte - valid',
    () => expect(validateData('FloatGTE', 9)).toBe(true));
  test('float - gte - valid (equal)',
    () => expect(validateData('FloatGTE', 8)).toBe(true));
  test('float - gte - invalid',
    () => expect(validateData('FloatGTE', 7)).toBe(false));
  });

describe('gte & lte', () => {
  test('float - gte & lte - valid',
    () => expect(validateData('FloatGTELTE', 200)).toBe(true));
  test('float - gte & lte - valid (max)',
    () => expect(validateData('FloatGTELTE', 256)).toBe(true));
  test('float - gte & lte - valid (min)',
    () => expect(validateData('FloatGTELTE', 128)).toBe(true));
  test('float - gte & lte - invalid (above)',
    () => expect(validateData('FloatGTELTE', 300)).toBe(false));
  test('float - gte & lte - invalid (below)',
    () => expect(validateData('FloatGTELTE', 100)).toBe(false));
  });

describe('in', () => {
  test('float - in - valid',
    () => expect(validateData('FloatIn', 7.89)).toBe(true));
  test('float - in - invalid',
    () => expect(validateData('FloatIn', 10.11)).toBe(false));
  });

describe('lt', () => {
  test('float - lt - valid',
    () => expect(validateData('FloatLT', -1)).toBe(true));
  test('float - lt - invalid (equal)',
    () => expect(validateData('FloatLT', 0)).toBe(false));
  test('float - lt - invalid',
    () => expect(validateData('FloatLT', 1)).toBe(false));
  });

describe('lte', () => {
  test('float - lte - valid',
    () => expect(validateData('FloatLTE', 63)).toBe(true));
  test('float - lte - valid (equal)',
    () => expect(validateData('FloatLTE', 64)).toBe(true));
  test('float - lte - invalid',
    () => expect(validateData('FloatLTE', 65)).toBe(false));
  });

describe('none', () => {
  test('float - none - valid',
    () => expect(validateData('FloatNone', -1.23456)).toBe(true));
  });

describe('not in', () => {
  test('float - not in - valid',
    () => expect(validateData('FloatNotIn', 1)).toBe(true));
  test('float - not in - invalid',
    () => expect(validateData('FloatNotIn', 0)).toBe(false));
  });
