const { validateData } = require('../testsUtils');

describe('const', () => {
  test('sfixed32 - const - valid', () => expect(
    validateData('SFixed32Const', 1)
  ).toBe(true));
  test('sfixed32 - const - invalid', () => expect(
    validateData('SFixed32Const', 2)
  ).toBe(false));
});

describe('exclusive gt & lt', () => {
  test('sfixed32 - exclusive gt & lt - valid (above)', () => expect(
    validateData('SFixed32ExLTGT', 11)
  ).toBe(true));
  test('sfixed32 - exclusive gt & lt - valid (below)', () => expect(
    validateData('SFixed32ExLTGT', -1)
  ).toBe(true));
  test('sfixed32 - exclusive gt & lt - invalid', () => expect(
    validateData('SFixed32ExLTGT', 5)
  ).toBe(false));
  test('sfixed32 - exclusive gt & lt - invalid (max)', () => expect(
    validateData('SFixed32ExLTGT', 10)
  ).toBe(false));
  test('sfixed32 - exclusive gt & lt - invalid (min)', () => expect(
    validateData('SFixed32ExLTGT', 0)
  ).toBe(false));
});

describe('exclusive gte & lte', () => {
  test('sfixed32 - exclusive gte & lte - valid (above)', () => expect(
    validateData('SFixed32ExGTELTE', 300)
  ).toBe(true));
  test('sfixed32 - exclusive gte & lte - valid (below)', () => expect(
    validateData('SFixed32ExGTELTE', 100)
  ).toBe(true));
  test('sfixed32 - exclusive gte & lte - valid (max)', () => expect(
    validateData('SFixed32ExGTELTE', 256)
  ).toBe(true));
  test('sfixed32 - exclusive gte & lte - valid (min)', () => expect(
    validateData('SFixed32ExGTELTE', 128)
  ).toBe(true));
  test('sfixed32 - exclusive gte & lte - invalid', () => expect(
    validateData('SFixed32ExGTELTE', 200)
  ).toBe(false));
});

describe('gt', () => {
  test('sfixed32 - gt - valid', () => expect(
    validateData('SFixed32GT', 17)
  ).toBe(true));
  test('sfixed32 - gt - invalid (equal)', () => expect(
    validateData('SFixed32GT', 16)
  ).toBe(false));
  test('sfixed32 - gt - invalid', () => expect(
    validateData('SFixed32GT', 15)
  ).toBe(false));
});

describe('gt & lt', () => {
  test('sfixed32 - gt & lt - valid', () => expect(
    validateData('SFixed32GTLT', 5)
  ).toBe(true));
  test('sfixed32 - gt & lt - invalid (above)', () => expect(
    validateData('SFixed32GTLT', 11)
  ).toBe(false));
  test('sfixed32 - gt & lt - invalid (below)', () => expect(
    validateData('SFixed32GTLT', -1)
  ).toBe(false));
  test('sfixed32 - gt & lt - invalid (max)', () => expect(
    validateData('SFixed32GTLT', 10)
  ).toBe(false));
  test('sfixed32 - gt & lt - invalid (min)', () => expect(
    validateData('SFixed32GTLT', 0)
  ).toBe(false));
});

describe('gte', () => {
  test('sfixed32 - gte - valid', () => expect(
    validateData('SFixed32GTE', 9)
  ).toBe(true));
  test('sfixed32 - gte - valid (equal)', () => expect(
    validateData('SFixed32GTE', 8)
  ).toBe(true));
  test('sfixed32 - gte - invalid', () => expect(
    validateData('SFixed32GTE', 7)
  ).toBe(false));
});

describe('gte & lte', () => {
  test('sfixed32 - gte & lte - valid', () => expect(
    validateData('SFixed32GTELTE', 200)
  ).toBe(true));
  test('sfixed32 - gte & lte - valid (max)', () => expect(
    validateData('SFixed32GTELTE', 256)
  ).toBe(true));
  test('sfixed32 - gte & lte - valid (min)', () => expect(
    validateData('SFixed32GTELTE', 128)
  ).toBe(true));
  test('sfixed32 - gte & lte - invalid (above)', () => expect(
    validateData('SFixed32GTELTE', 300)
  ).toBe(false));
  test('sfixed32 - gte & lte - invalid (below)', () => expect(
    validateData('SFixed32GTELTE', 100)
  ).toBe(false));
});

describe('in', () => {
  test('sfixed32 - in - valid', () => expect(
    validateData('SFixed32In', 3)
  ).toBe(true));
  test('sfixed32 - in - invalid', () => expect(
    validateData('SFixed32In', 5)
  ).toBe(false));
});

describe('lt', () => {
  test('sfixed32 - lt - valid', () => expect(
    validateData('SFixed32LT', -1)
  ).toBe(true));
  test('sfixed32 - lt - invalid (equal)', () => expect(
    validateData('SFixed32LT', 0)
  ).toBe(false));
  test('sfixed32 - lt - invalid', () => expect(
    validateData('SFixed32LT', 1)
  ).toBe(false));
});

describe('lte', () => {
  test('sfixed32 - lte - valid', () => expect(
    validateData('SFixed32LTE', 63)
  ).toBe(true));
  test('sfixed32 - lte - valid (equal)', () => expect(
    validateData('SFixed32LTE', 64)
  ).toBe(true));
  test('sfixed32 - lte - invalid', () => expect(
    validateData('SFixed32LTE', 65)
  ).toBe(false));
});

describe('none', () => {
  test('sfixed32 - none - valid', () => expect(
    validateData('SFixed32None', 123)
  ).toBe(true));
});

describe('not in', () => {
  test('sfixed32 - not in - valid', () => expect(
    validateData('SFixed32NotIn', 1)
  ).toBe(true));
  test('sfixed32 - not in - invalid', () => expect(
    validateData('SFixed32NotIn', 0)
  ).toBe(false));
});
