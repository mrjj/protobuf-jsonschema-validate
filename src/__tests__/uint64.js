const { validateData } = require('../testsUtils');

describe('const', () => {
  test('uint64 - const - valid', () => expect(
    validateData('UInt64Const', 1)
  ).toBe(true));
  test('uint64 - const - invalid', () => expect(
    validateData('UInt64Const', 2)
  ).toBe(false));
});

describe('exclusive gt & lt', () => {
  test('uint64 - exclusive gt & lt - valid (above)', () => expect(
    validateData('UInt64ExLTGT', 11)
  ).toBe(true));
  test('uint64 - exclusive gt & lt - valid (below)', () => expect(
    validateData('UInt64ExLTGT', 4)
  ).toBe(true));
  test('uint64 - exclusive gt & lt - invalid', () => expect(
    validateData('UInt64ExLTGT', 7)
  ).toBe(false));
  test('uint64 - exclusive gt & lt - invalid (max)', () => expect(
    validateData('UInt64ExLTGT', 10)
  ).toBe(false));
  test('uint64 - exclusive gt & lt - invalid (min)', () => expect(
    validateData('UInt64ExLTGT', 5)
  ).toBe(false));
});

describe('exclusive gte & lte', () => {
  test('uint64 - exclusive gte & lte - valid (above)', () => expect(
    validateData('UInt64ExGTELTE', 300)
  ).toBe(true));
  test('uint64 - exclusive gte & lte - valid (below)', () => expect(
    validateData('UInt64ExGTELTE', 100)
  ).toBe(true));
  test('uint64 - exclusive gte & lte - valid (max)', () => expect(
    validateData('UInt64ExGTELTE', 256)
  ).toBe(true));
  test('uint64 - exclusive gte & lte - valid (min)', () => expect(
    validateData('UInt64ExGTELTE', 128)
  ).toBe(true));
  test('uint64 - exclusive gte & lte - invalid', () => expect(
    validateData('UInt64ExGTELTE', 200)
  ).toBe(false));
});

describe('gt', () => {
  test('uint64 - gt - valid', () => expect(
    validateData('UInt64GT', 17)
  ).toBe(true));
  test('uint64 - gt - invalid (equal)', () => expect(
    validateData('UInt64GT', 16)
  ).toBe(false));
  test('uint64 - gt - invalid', () => expect(
    validateData('UInt64GT', 15)
  ).toBe(false));
});

describe('gt & lt', () => {
  test('uint64 - gt & lt - valid', () => expect(
    validateData('UInt64GTLT', 7)
  ).toBe(true));
  test('uint64 - gt & lt - invalid (above)', () => expect(
    validateData('UInt64GTLT', 11)
  ).toBe(false));
  test('uint64 - gt & lt - invalid (below)', () => expect(
    validateData('UInt64GTLT', 1)
  ).toBe(false));
  test('uint64 - gt & lt - invalid (max)', () => expect(
    validateData('UInt64GTLT', 10)
  ).toBe(false));
  test('uint64 - gt & lt - invalid (min)', () => expect(
    validateData('UInt64GTLT', 5)
  ).toBe(false));
});

describe('gte', () => {
  test('uint64 - gte - valid', () => expect(
    validateData('UInt64GTE', 9)
  ).toBe(true));
  test('uint64 - gte - valid (equal)', () => expect(
    validateData('UInt64GTE', 8)
  ).toBe(true));
  test('uint64 - gte - invalid', () => expect(
    validateData('UInt64GTE', 7)
  ).toBe(false));
});

describe('gte & lte', () => {
  test('uint64 - gte & lte - valid', () => expect(
    validateData('UInt64GTELTE', 200)
  ).toBe(true));
  test('uint64 - gte & lte - valid (max)', () => expect(
    validateData('UInt64GTELTE', 256)
  ).toBe(true));
  test('uint64 - gte & lte - valid (min)', () => expect(
    validateData('UInt64GTELTE', 128)
  ).toBe(true));
  test('uint64 - gte & lte - invalid (above)', () => expect(
    validateData('UInt64GTELTE', 300)
  ).toBe(false));
  test('uint64 - gte & lte - invalid (below)', () => expect(
    validateData('UInt64GTELTE', 100)
  ).toBe(false));
});

describe('in', () => {
  test('uint64 - in - valid', () => expect(
    validateData('UInt64In', 3)
  ).toBe(true));
  test('uint64 - in - invalid', () => expect(
    validateData('UInt64In', 5)
  ).toBe(false));
});

describe('lt', () => {
  test('uint64 - lt - valid', () => expect(
    validateData('UInt64LT', 4)
  ).toBe(true));
  test('uint64 - lt - invalid (equal)', () => expect(
    validateData('UInt64LT', 5)
  ).toBe(false));
  test('uint64 - lt - invalid', () => expect(
    validateData('UInt64LT', 6)
  ).toBe(false));
});

describe('lte', () => {
  test('uint64 - lte - valid', () => expect(
    validateData('UInt64LTE', 63)
  ).toBe(true));
  test('uint64 - lte - valid (equal)', () => expect(
    validateData('UInt64LTE', 64)
  ).toBe(true));
  test('uint64 - lte - invalid', () => expect(
    validateData('UInt64LTE', 65)
  ).toBe(false));
});

describe('none', () => {
  test('uint64 - none - valid', () => expect(
    validateData('UInt64None', 123)
  ).toBe(true));
});

describe('not in', () => {
  test('uint64 - not in - valid', () => expect(
    validateData('UInt64NotIn', 1)
  ).toBe(true));
  test('uint64 - not in - invalid', () => expect(
    validateData('UInt64NotIn', 0)
  ).toBe(false));
});
