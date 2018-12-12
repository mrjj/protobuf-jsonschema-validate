const { validateData } = require('../utils');
describe('const', () => {
  test('fixed64 - const - valid',
    () => expect(validateData('Fixed64Const', 1)).toBe(true));
  test('fixed64 - const - invalid',
    () => expect(validateData('Fixed64Const', 2)).toBe(false));
  });

describe('exclusive gt & lt', () => {
  test('fixed64 - exclusive gt & lt - valid (above)',
    () => expect(validateData('Fixed64ExLTGT', 11)).toBe(true));
  test('fixed64 - exclusive gt & lt - valid (below)',
    () => expect(validateData('Fixed64ExLTGT', 4)).toBe(true));
  test('fixed64 - exclusive gt & lt - invalid',
    () => expect(validateData('Fixed64ExLTGT', 7)).toBe(false));
  test('fixed64 - exclusive gt & lt - invalid (max)',
    () => expect(validateData('Fixed64ExLTGT', 10)).toBe(false));
  test('fixed64 - exclusive gt & lt - invalid (min)',
    () => expect(validateData('Fixed64ExLTGT', 5)).toBe(false));
  });

describe('exclusive gte & lte', () => {
  test('fixed64 - exclusive gte & lte - valid (above)',
    () => expect(validateData('Fixed64ExGTELTE', 300)).toBe(true));
  test('fixed64 - exclusive gte & lte - valid (below)',
    () => expect(validateData('Fixed64ExGTELTE', 100)).toBe(true));
  test('fixed64 - exclusive gte & lte - valid (max)',
    () => expect(validateData('Fixed64ExGTELTE', 256)).toBe(true));
  test('fixed64 - exclusive gte & lte - valid (min)',
    () => expect(validateData('Fixed64ExGTELTE', 128)).toBe(true));
  test('fixed64 - exclusive gte & lte - invalid',
    () => expect(validateData('Fixed64ExGTELTE', 200)).toBe(false));
  });

describe('gt', () => {
  test('fixed64 - gt - valid',
    () => expect(validateData('Fixed64GT', 17)).toBe(true));
  test('fixed64 - gt - invalid (equal)',
    () => expect(validateData('Fixed64GT', 16)).toBe(false));
  test('fixed64 - gt - invalid',
    () => expect(validateData('Fixed64GT', 15)).toBe(false));
  });

describe('gt & lt', () => {
  test('fixed64 - gt & lt - valid',
    () => expect(validateData('Fixed64GTLT', 7)).toBe(true));
  test('fixed64 - gt & lt - invalid (above)',
    () => expect(validateData('Fixed64GTLT', 11)).toBe(false));
  test('fixed64 - gt & lt - invalid (below)',
    () => expect(validateData('Fixed64GTLT', 1)).toBe(false));
  test('fixed64 - gt & lt - invalid (max)',
    () => expect(validateData('Fixed64GTLT', 10)).toBe(false));
  test('fixed64 - gt & lt - invalid (min)',
    () => expect(validateData('Fixed64GTLT', 5)).toBe(false));
  });

describe('gte', () => {
  test('fixed64 - gte - valid',
    () => expect(validateData('Fixed64GTE', 9)).toBe(true));
  test('fixed64 - gte - valid (equal)',
    () => expect(validateData('Fixed64GTE', 8)).toBe(true));
  test('fixed64 - gte - invalid',
    () => expect(validateData('Fixed64GTE', 7)).toBe(false));
  });

describe('gte & lte', () => {
  test('fixed64 - gte & lte - valid',
    () => expect(validateData('Fixed64GTELTE', 200)).toBe(true));
  test('fixed64 - gte & lte - valid (max)',
    () => expect(validateData('Fixed64GTELTE', 256)).toBe(true));
  test('fixed64 - gte & lte - valid (min)',
    () => expect(validateData('Fixed64GTELTE', 128)).toBe(true));
  test('fixed64 - gte & lte - invalid (above)',
    () => expect(validateData('Fixed64GTELTE', 300)).toBe(false));
  test('fixed64 - gte & lte - invalid (below)',
    () => expect(validateData('Fixed64GTELTE', 100)).toBe(false));
  });

describe('in', () => {
  test('fixed64 - in - valid',
    () => expect(validateData('Fixed64In', 3)).toBe(true));
  test('fixed64 - in - invalid',
    () => expect(validateData('Fixed64In', 5)).toBe(false));
  });

describe('lt', () => {
  test('fixed64 - lt - valid',
    () => expect(validateData('Fixed64LT', 4)).toBe(true));
  test('fixed64 - lt - invalid (equal)',
    () => expect(validateData('Fixed64LT', 5)).toBe(false));
  test('fixed64 - lt - invalid',
    () => expect(validateData('Fixed64LT', 6)).toBe(false));
  });

describe('lte', () => {
  test('fixed64 - lte - valid',
    () => expect(validateData('Fixed64LTE', 63)).toBe(true));
  test('fixed64 - lte - valid (equal)',
    () => expect(validateData('Fixed64LTE', 64)).toBe(true));
  test('fixed64 - lte - invalid',
    () => expect(validateData('Fixed64LTE', 65)).toBe(false));
  });

describe('none', () => {
  test('fixed64 - none - valid',
    () => expect(validateData('Fixed64None', 123)).toBe(true));
  });

describe('not in', () => {
  test('fixed64 - not in - valid',
    () => expect(validateData('Fixed64NotIn', 1)).toBe(true));
  test('fixed64 - not in - invalid',
    () => expect(validateData('Fixed64NotIn', 0)).toBe(false));
  });
