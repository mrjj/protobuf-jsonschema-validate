const { validateData } = require('../testsUtils');


describe('const', () => {
  test('double - const - valid', () => expect(
    validateData('DoubleConst', 1.23)
  ).toBe(true));
  test('double - const - invalid', () => expect(
    validateData('DoubleConst', 4.56)
  ).toBe(false));
});

describe('exclusive gt & lt', () => {
  test('double - exclusive gt & lt - valid (above)', () => expect(
    validateData('DoubleExLTGT', 11)
  ).toBe(true));
  test('double - exclusive gt & lt - valid (below)', () => expect(
    validateData('DoubleExLTGT', -1)
  ).toBe(true));
  test('double - exclusive gt & lt - invalid', () => expect(
    validateData('DoubleExLTGT', 5)
  ).toBe(false));
  test('double - exclusive gt & lt - invalid (max)', () => expect(
    validateData('DoubleExLTGT', 10)
  ).toBe(false));
  test('double - exclusive gt & lt - invalid (min)', () => expect(
    validateData('DoubleExLTGT', 0)
  ).toBe(false));
});

describe('exclusive gte & lte', () => {
  test('double - exclusive gte & lte - valid (above)', () => expect(
    validateData('DoubleExGTELTE', 300)
  ).toBe(true));
  test('double - exclusive gte & lte - valid (below)', () => expect(
    validateData('DoubleExGTELTE', 100)
  ).toBe(true));
  test('double - exclusive gte & lte - valid (max)', () => expect(
    validateData('DoubleExGTELTE', 256)
  ).toBe(true));
  test('double - exclusive gte & lte - valid (min)', () => expect(
    validateData('DoubleExGTELTE', 128)
  ).toBe(true));
  test('double - exclusive gte & lte - invalid', () => expect(
    validateData('DoubleExGTELTE', 200)
  ).toBe(false));
});

describe('gt', () => {
  test('double - gt - valid', () => expect(
    validateData('DoubleGT', 17)
  ).toBe(true));
  test('double - gt - invalid (equal)', () => expect(
    validateData('DoubleGT', 16)
  ).toBe(false));
  test('double - gt - invalid', () => expect(
    validateData('DoubleGT', 15)
  ).toBe(false));
});

describe('gt & lt', () => {
  test('double - gt & lt - valid', () => expect(
    validateData('DoubleGTLT', 5)
  ).toBe(true));
  test('double - gt & lt - invalid (above)', () => expect(
    validateData('DoubleGTLT', 11)
  ).toBe(false));
  test('double - gt & lt - invalid (below)', () => expect(
    validateData('DoubleGTLT', -1)
  ).toBe(false));
  test('double - gt & lt - invalid (max)', () => expect(
    validateData('DoubleGTLT', 10)
  ).toBe(false));
  test('double - gt & lt - invalid (min)', () => expect(
    validateData('DoubleGTLT', 0)
  ).toBe(false));
});

describe('gte', () => {
  test('double - gte - valid', () => expect(
    validateData('DoubleGTE', 9)
  ).toBe(true));
  test('double - gte - valid (equal)', () => expect(
    validateData('DoubleGTE', 8)
  ).toBe(true));
  test('double - gte - invalid', () => expect(
    validateData('DoubleGTE', 7)
  ).toBe(false));
});

describe('gte & lte', () => {
  test('double - gte & lte - valid', () => expect(
    validateData('DoubleGTELTE', 200)
  ).toBe(true));
  test('double - gte & lte - valid (max)', () => expect(
    validateData('DoubleGTELTE', 256)
  ).toBe(true));
  test('double - gte & lte - valid (min)', () => expect(
    validateData('DoubleGTELTE', 128)
  ).toBe(true));
  test('double - gte & lte - invalid (above)', () => expect(
    validateData('DoubleGTELTE', 300)
  ).toBe(false));
  test('double - gte & lte - invalid (below)', () => expect(
    validateData('DoubleGTELTE', 100)
  ).toBe(false));
});

describe('in', () => {
  test('double - in - valid', () => expect(
    validateData('DoubleIn', 7.89)
  ).toBe(true));
  test('double - in - invalid', () => expect(
    validateData('DoubleIn', 10.11)
  ).toBe(false));
});

describe('lt', () => {
  test('double - lt - valid', () => expect(
    validateData('DoubleLT', -1)
  ).toBe(true));
  test('double - lt - invalid (equal)', () => expect(
    validateData('DoubleLT', 0)
  ).toBe(false));
  test('double - lt - invalid', () => expect(
    validateData('DoubleLT', 1)
  ).toBe(false));
});

describe('lte', () => {
  test('double - lte - valid', () => expect(
    validateData('DoubleLTE', 63)
  ).toBe(true));
  test('double - lte - valid (equal)', () => expect(
    validateData('DoubleLTE', 64)
  ).toBe(true));
  test('double - lte - invalid', () => expect(
    validateData('DoubleLTE', 65)
  ).toBe(false));
});

describe('none', () => {
  test('double - none - valid', () => expect(
    validateData('DoubleNone', -1.23456)
  ).toBe(true));
});

describe('not in', () => {
  test('double - not in - valid', () => expect(
    validateData('DoubleNotIn', 1)
  ).toBe(true));
  test('double - not in - invalid', () => expect(
    validateData('DoubleNotIn', 0)
  ).toBe(false));
});
