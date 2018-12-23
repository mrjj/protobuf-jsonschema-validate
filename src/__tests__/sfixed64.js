const { validateData } = require('../testsUtils');

describe('const', () => {
  test('sfixed64 - const - valid', () => expect(
    validateData('SFixed64Const', 1)
  ).toBe(true));
  test('sfixed64 - const - invalid', () => expect(
    validateData('SFixed64Const', 2)
  ).toBe(false));
});

describe('exclusive gt & lt', () => {
  test('sfixed64 - exclusive gt & lt - valid (above)', () => expect(
    validateData('SFixed64ExLTGT', 11)
  ).toBe(true));
  test('sfixed64 - exclusive gt & lt - valid (below)', () => expect(
    validateData('SFixed64ExLTGT', -1)
  ).toBe(true));
  test('sfixed64 - exclusive gt & lt - invalid', () => expect(
    validateData('SFixed64ExLTGT', 5)
  ).toBe(false));
  test('sfixed64 - exclusive gt & lt - invalid (max)', () => expect(
    validateData('SFixed64ExLTGT', 10)
  ).toBe(false));
  test('sfixed64 - exclusive gt & lt - invalid (min)', () => expect(
    validateData('SFixed64ExLTGT', 0)
  ).toBe(false));
});

describe('exclusive gte & lte', () => {
  test('sfixed64 - exclusive gte & lte - valid (above)', () => expect(
    validateData('SFixed64ExGTELTE', 300)
  ).toBe(true));
  test('sfixed64 - exclusive gte & lte - valid (below)', () => expect(
    validateData('SFixed64ExGTELTE', 100)
  ).toBe(true));
  test('sfixed64 - exclusive gte & lte - valid (max)', () => expect(
    validateData('SFixed64ExGTELTE', 256)
  ).toBe(true));
  test('sfixed64 - exclusive gte & lte - valid (min)', () => expect(
    validateData('SFixed64ExGTELTE', 128)
  ).toBe(true));
  test('sfixed64 - exclusive gte & lte - invalid', () => expect(
    validateData('SFixed64ExGTELTE', 200)
  ).toBe(false));
});

describe('gt', () => {
  test('sfixed64 - gt - valid', () => expect(
    validateData('SFixed64GT', 17)
  ).toBe(true));
  test('sfixed64 - gt - invalid (equal)', () => expect(
    validateData('SFixed64GT', 16)
  ).toBe(false));
  test('sfixed64 - gt - invalid', () => expect(
    validateData('SFixed64GT', 15)
  ).toBe(false));
});

describe('gt & lt', () => {
  test('sfixed64 - gt & lt - valid', () => expect(
    validateData('SFixed64GTLT', 5)
  ).toBe(true));
  test('sfixed64 - gt & lt - invalid (above)', () => expect(
    validateData('SFixed64GTLT', 11)
  ).toBe(false));
  test('sfixed64 - gt & lt - invalid (below)', () => expect(
    validateData('SFixed64GTLT', -1)
  ).toBe(false));
  test('sfixed64 - gt & lt - invalid (max)', () => expect(
    validateData('SFixed64GTLT', 10)
  ).toBe(false));
  test('sfixed64 - gt & lt - invalid (min)', () => expect(
    validateData('SFixed64GTLT', 0)
  ).toBe(false));
});

describe('gte', () => {
  test('sfixed64 - gte - valid', () => expect(
    validateData('SFixed64GTE', 9)
  ).toBe(true));
  test('sfixed64 - gte - valid (equal)', () => expect(
    validateData('SFixed64GTE', 8)
  ).toBe(true));
  test('sfixed64 - gte - invalid', () => expect(
    validateData('SFixed64GTE', 7)
  ).toBe(false));
});

describe('gte & lte', () => {
  test('sfixed64 - gte & lte - valid', () => expect(
    validateData('SFixed64GTELTE', 200)
  ).toBe(true));
  test('sfixed64 - gte & lte - valid (max)', () => expect(
    validateData('SFixed64GTELTE', 256)
  ).toBe(true));
  test('sfixed64 - gte & lte - valid (min)', () => expect(
    validateData('SFixed64GTELTE', 128)
  ).toBe(true));
  test('sfixed64 - gte & lte - invalid (above)', () => expect(
    validateData('SFixed64GTELTE', 300)
  ).toBe(false));
  test('sfixed64 - gte & lte - invalid (below)', () => expect(
    validateData('SFixed64GTELTE', 100)
  ).toBe(false));
});

describe('in', () => {
  test('sfixed64 - in - valid', () => expect(
    validateData('SFixed64In', 3)
  ).toBe(true));
  test('sfixed64 - in - invalid', () => expect(
    validateData('SFixed64In', 5)
  ).toBe(false));
});

describe('lt', () => {
  test('sfixed64 - lt - valid', () => expect(
    validateData('SFixed64LT', -1)
  ).toBe(true));
  test('sfixed64 - lt - invalid (equal)', () => expect(
    validateData('SFixed64LT', 0)
  ).toBe(false));
  test('sfixed64 - lt - invalid', () => expect(
    validateData('SFixed64LT', 1)
  ).toBe(false));
});

describe('lte', () => {
  test('sfixed64 - lte - valid', () => expect(
    validateData('SFixed64LTE', 63)
  ).toBe(true));
  test('sfixed64 - lte - valid (equal)', () => expect(
    validateData('SFixed64LTE', 64)
  ).toBe(true));
  test('sfixed64 - lte - invalid', () => expect(
    validateData('SFixed64LTE', 65)
  ).toBe(false));
});

describe('none', () => {
  test('sfixed64 - none - valid', () => expect(
    validateData('SFixed64None', 123)
  ).toBe(true));
});

describe('not in', () => {
  test('sfixed64 - not in - valid', () => expect(
    validateData('SFixed64NotIn', 1)
  ).toBe(true));
  test('sfixed64 - not in - invalid', () => expect(
    validateData('SFixed64NotIn', 0)
  ).toBe(false));
});
