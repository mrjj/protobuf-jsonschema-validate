const { validateData } = require('../testsUtils');

describe('const', () => {
  test('sint32 - const - valid', () => expect(
    validateData('SInt32Const', 1)
  ).toBe(true));
  test('sint32 - const - invalid', () => expect(
    validateData('SInt32Const', 2)
  ).toBe(false));
});

describe('exclusive gt & lt', () => {
  test('sint32 - exclusive gt & lt - valid (above)', () => expect(
    validateData('SInt32ExLTGT', 11)
  ).toBe(true));
  test('sint32 - exclusive gt & lt - valid (below)', () => expect(
    validateData('SInt32ExLTGT', -1)
  ).toBe(true));
  test('sint32 - exclusive gt & lt - invalid', () => expect(
    validateData('SInt32ExLTGT', 5)
  ).toBe(false));
  test('sint32 - exclusive gt & lt - invalid (max)', () => expect(
    validateData('SInt32ExLTGT', 10)
  ).toBe(false));
  test('sint32 - exclusive gt & lt - invalid (min)', () => expect(
    validateData('SInt32ExLTGT', 0)
  ).toBe(false));
});

describe('exclusive gte & lte', () => {
  test('sint32 - exclusive gte & lte - valid (above)', () => expect(
    validateData('SInt32ExGTELTE', 300)
  ).toBe(true));
  test('sint32 - exclusive gte & lte - valid (below)', () => expect(
    validateData('SInt32ExGTELTE', 100)
  ).toBe(true));
  test('sint32 - exclusive gte & lte - valid (max)', () => expect(
    validateData('SInt32ExGTELTE', 256)
  ).toBe(true));
  test('sint32 - exclusive gte & lte - valid (min)', () => expect(
    validateData('SInt32ExGTELTE', 128)
  ).toBe(true));
  test('sint32 - exclusive gte & lte - invalid', () => expect(
    validateData('SInt32ExGTELTE', 200)
  ).toBe(false));
});

describe('gt', () => {
  test('sint32 - gt - valid', () => expect(
    validateData('SInt32GT', 17)
  ).toBe(true));
  test('sint32 - gt - invalid (equal)', () => expect(
    validateData('SInt32GT', 16)
  ).toBe(false));
  test('sint32 - gt - invalid', () => expect(
    validateData('SInt32GT', 15)
  ).toBe(false));
});

describe('gt & lt', () => {
  test('sint32 - gt & lt - valid', () => expect(
    validateData('SInt32GTLT', 5)
  ).toBe(true));
  test('sint32 - gt & lt - invalid (above)', () => expect(
    validateData('SInt32GTLT', 11)
  ).toBe(false));
  test('sint32 - gt & lt - invalid (below)', () => expect(
    validateData('SInt32GTLT', -1)
  ).toBe(false));
  test('sint32 - gt & lt - invalid (max)', () => expect(
    validateData('SInt32GTLT', 10)
  ).toBe(false));
  test('sint32 - gt & lt - invalid (min)', () => expect(
    validateData('SInt32GTLT', 0)
  ).toBe(false));
});

describe('gte', () => {
  test('sint32 - gte - valid', () => expect(
    validateData('SInt32GTE', 9)
  ).toBe(true));
  test('sint32 - gte - valid (equal)', () => expect(
    validateData('SInt32GTE', 8)
  ).toBe(true));
  test('sint32 - gte - invalid', () => expect(
    validateData('SInt32GTE', 7)
  ).toBe(false));
});

describe('gte & lte', () => {
  test('sint32 - gte & lte - valid', () => expect(
    validateData('SInt32GTELTE', 200)
  ).toBe(true));
  test('sint32 - gte & lte - valid (max)', () => expect(
    validateData('SInt32GTELTE', 256)
  ).toBe(true));
  test('sint32 - gte & lte - valid (min)', () => expect(
    validateData('SInt32GTELTE', 128)
  ).toBe(true));
  test('sint32 - gte & lte - invalid (above)', () => expect(
    validateData('SInt32GTELTE', 300)
  ).toBe(false));
  test('sint32 - gte & lte - invalid (below)', () => expect(
    validateData('SInt32GTELTE', 100)
  ).toBe(false));
});

describe('in', () => {
  test('sint32 - in - valid', () => expect(
    validateData('SInt32In', 3)
  ).toBe(true));
  test('sint32 - in - invalid', () => expect(
    validateData('SInt32In', 5)
  ).toBe(false));
});

describe('lt', () => {
  test('sint32 - lt - valid', () => expect(
    validateData('SInt32LT', -1)
  ).toBe(true));
  test('sint32 - lt - invalid (equal)', () => expect(
    validateData('SInt32LT', 0)
  ).toBe(false));
  test('sint32 - lt - invalid', () => expect(
    validateData('SInt32LT', 1)
  ).toBe(false));
});

describe('lte', () => {
  test('sint32 - lte - valid', () => expect(
    validateData('SInt32LTE', 63)
  ).toBe(true));
  test('sint32 - lte - valid (equal)', () => expect(
    validateData('SInt32LTE', 64)
  ).toBe(true));
  test('sint32 - lte - invalid', () => expect(
    validateData('SInt32LTE', 65)
  ).toBe(false));
});

describe('none', () => {
  test('sint32 - none - valid', () => expect(
    validateData('SInt32None', 123)
  ).toBe(true));
});

describe('not in', () => {
  test('sint32 - not in - valid', () => expect(
    validateData('SInt32NotIn', 1)
  ).toBe(true));
  test('sint32 - not in - invalid', () => expect(
    validateData('SInt32NotIn', 0)
  ).toBe(false));
});
