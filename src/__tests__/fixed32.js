const { validateData } = require('../utils');
describe('const', () => {
  test('fixed32 - const - valid',
    () => expect(validateData('Fixed32Const', 1)).toBe(true));
  test('fixed32 - const - invalid',
    () => expect(validateData('Fixed32Const', 2)).toBe(false));
  });

describe('exclusive gt & lt', () => {
  test('fixed32 - exclusive gt & lt - valid (above)',
    () => expect(validateData('Fixed32ExLTGT', 11)).toBe(true));
  test('fixed32 - exclusive gt & lt - valid (below)',
    () => expect(validateData('Fixed32ExLTGT', 4)).toBe(true));
  test('fixed32 - exclusive gt & lt - invalid',
    () => expect(validateData('Fixed32ExLTGT', 7)).toBe(false));
  test('fixed32 - exclusive gt & lt - invalid (max)',
    () => expect(validateData('Fixed32ExLTGT', 10)).toBe(false));
  test('fixed32 - exclusive gt & lt - invalid (min)',
    () => expect(validateData('Fixed32ExLTGT', 5)).toBe(false));
  });

describe('exclusive gte & lte', () => {
  test('fixed32 - exclusive gte & lte - valid (above)',
    () => expect(validateData('Fixed32ExGTELTE', 300)).toBe(true));
  test('fixed32 - exclusive gte & lte - valid (below)',
    () => expect(validateData('Fixed32ExGTELTE', 100)).toBe(true));
  test('fixed32 - exclusive gte & lte - valid (max)',
    () => expect(validateData('Fixed32ExGTELTE', 256)).toBe(true));
  test('fixed32 - exclusive gte & lte - valid (min)',
    () => expect(validateData('Fixed32ExGTELTE', 128)).toBe(true));
  test('fixed32 - exclusive gte & lte - invalid',
    () => expect(validateData('Fixed32ExGTELTE', 200)).toBe(false));
  });

describe('gt', () => {
  test('fixed32 - gt - valid',
    () => expect(validateData('Fixed32GT', 17)).toBe(true));
  test('fixed32 - gt - invalid (equal)',
    () => expect(validateData('Fixed32GT', 16)).toBe(false));
  test('fixed32 - gt - invalid',
    () => expect(validateData('Fixed32GT', 15)).toBe(false));
  });

describe('gt & lt', () => {
  test('fixed32 - gt & lt - valid',
    () => expect(validateData('Fixed32GTLT', 7)).toBe(true));
  test('fixed32 - gt & lt - invalid (above)',
    () => expect(validateData('Fixed32GTLT', 11)).toBe(false));
  test('fixed32 - gt & lt - invalid (below)',
    () => expect(validateData('Fixed32GTLT', 1)).toBe(false));
  test('fixed32 - gt & lt - invalid (max)',
    () => expect(validateData('Fixed32GTLT', 10)).toBe(false));
  test('fixed32 - gt & lt - invalid (min)',
    () => expect(validateData('Fixed32GTLT', 5)).toBe(false));
  });

describe('gte', () => {
  test('fixed32 - gte - valid',
    () => expect(validateData('Fixed32GTE', 9)).toBe(true));
  test('fixed32 - gte - valid (equal)',
    () => expect(validateData('Fixed32GTE', 8)).toBe(true));
  test('fixed32 - gte - invalid',
    () => expect(validateData('Fixed32GTE', 7)).toBe(false));
  });

describe('gte & lte', () => {
  test('fixed32 - gte & lte - valid',
    () => expect(validateData('Fixed32GTELTE', 200)).toBe(true));
  test('fixed32 - gte & lte - valid (max)',
    () => expect(validateData('Fixed32GTELTE', 256)).toBe(true));
  test('fixed32 - gte & lte - valid (min)',
    () => expect(validateData('Fixed32GTELTE', 128)).toBe(true));
  test('fixed32 - gte & lte - invalid (above)',
    () => expect(validateData('Fixed32GTELTE', 300)).toBe(false));
  test('fixed32 - gte & lte - invalid (below)',
    () => expect(validateData('Fixed32GTELTE', 100)).toBe(false));
  });

describe('in', () => {
  test('fixed32 - in - valid',
    () => expect(validateData('Fixed32In', 3)).toBe(true));
  test('fixed32 - in - invalid',
    () => expect(validateData('Fixed32In', 5)).toBe(false));
  });

describe('lt', () => {
  test('fixed32 - lt - valid',
    () => expect(validateData('Fixed32LT', 4)).toBe(true));
  test('fixed32 - lt - invalid (equal)',
    () => expect(validateData('Fixed32LT', 5)).toBe(false));
  test('fixed32 - lt - invalid',
    () => expect(validateData('Fixed32LT', 6)).toBe(false));
  });

describe('lte', () => {
  test('fixed32 - lte - valid',
    () => expect(validateData('Fixed32LTE', 63)).toBe(true));
  test('fixed32 - lte - valid (equal)',
    () => expect(validateData('Fixed32LTE', 64)).toBe(true));
  test('fixed32 - lte - invalid',
    () => expect(validateData('Fixed32LTE', 65)).toBe(false));
  });

describe('none', () => {
  test('fixed32 - none - valid',
    () => expect(validateData('Fixed32None', 123)).toBe(true));
  });

describe('not in', () => {
  test('fixed32 - not in - valid',
    () => expect(validateData('Fixed32NotIn', 1)).toBe(true));
  test('fixed32 - not in - invalid',
    () => expect(validateData('Fixed32NotIn', 0)).toBe(false));
  });
