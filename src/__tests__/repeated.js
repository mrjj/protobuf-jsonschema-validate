const {
  validateData
} = require('../testsUtils');
describe('cross-package embed none', () => {
  test('repeated - cross-package embed none - valid', () => expect(
    validateData('RepeatedEmbedCrossPackageNone', 1)
  ).toBe(true));
  test('repeated - cross-package embed none - valid (null)', () => expect(
    validateData('RepeatedEmbedCrossPackageNone', null)
  ).toBe(true));
  test('repeated - cross-package embed none - valid (empty)', () => expect(
    validateData('RepeatedEmbedCrossPackageNone', undefined)
  ).toBe(true));
  test('repeated - cross-package embed none - invalid', () => expect(
    validateData('RepeatedEmbedCrossPackageNone', -1)
  ).toBe(false));
});

describe('embed none', () => {
  test('repeated - embed none - valid', () => expect(
    validateData('RepeatedEmbedNone', 1)
  ).toBe(true));
  test('repeated - embed none - valid (null)', () => expect(
    validateData('RepeatedEmbedNone', null)
  ).toBe(true));
  test('repeated - embed none - valid (empty)', () => expect(
    validateData('RepeatedEmbedNone', undefined)
  ).toBe(true));
  test('repeated - embed none - invalid', () => expect(
    validateData('RepeatedEmbedNone', -1)
  ).toBe(false));
});

describe('embed skip', () => {
  test('repeated - embed skip - valid', () => expect(
    validateData('RepeatedEmbedSkip', 1)
  ).toBe(true));
  test('repeated - embed skip - valid (invalid element)', () => expect(
    validateData('RepeatedEmbedSkip', -1)
  ).toBe(true));
});

describe('exact', () => {
  test('repeated - exact - valid', () => expect(
    validateData('RepeatedExact', [1, 2, 3])
  ).toBe(true));
  test('repeated - exact - invalid (below)', () => expect(
    validateData('RepeatedExact', [1, 2])
  ).toBe(false));
  test('repeated - exact - invalid (above)', () => expect(
    validateData('RepeatedExact', [1, 2, 3, 4])
  ).toBe(false));
});

describe('items', () => {
  test('repeated - items - valid', () => expect(
    validateData('RepeatedItemRule', [1, 2, 3])
  ).toBe(true));
  test('repeated - items - valid (empty)', () => expect(
    validateData('RepeatedItemRule', undefined)
  ).toBe(true));
  test('repeated - items - valid (pattern)', () => expect(
    validateData('RepeatedItemPattern', ['Alpha', 'Beta123']))
    .toBe(true));
  test('repeated - items - invalid', () => expect(
    validateData('RepeatedItemRule', [1, -2, 3])
  ).toBe(false));
  test('repeated - items - invalid (pattern)', () => expect(
    validateData('RepeatedItemPattern', ['Alpha', '!@#$%^&*()']))
    .toBe(false));
  test('repeated - items - invalid (in)', () => expect(
    validateData('RepeatedItemIn', ['baz'])
  ).toBe(false));
  test('repeated - items - valid (in)', () => expect(
    validateData('RepeatedItemIn', ['foo'])
  ).toBe(true));
  test('repeated - items - invalid (not_in)', () => expect(
    validateData('RepeatedItemNotIn', ['foo'])
  ).toBe(false));
  test('repeated - items - valid (not_in)', () => expect(
    validateData('RepeatedItemNotIn', ['baz'])
  ).toBe(true));
});

describe('max', () => {
  test('repeated - max - valid', () => expect(
    validateData('RepeatedMax', [1, 2])
  ).toBe(true));
  test('repeated - max - valid (equal)', () => expect(
    validateData('RepeatedMax', [1, 2, 3])
  ).toBe(true));
  test('repeated - max - invalid', () => expect(
    validateData('RepeatedMax', [1, 2, 3, 4])
  ).toBe(false));
});

describe('min', () => {
  test('repeated - min - valid', () => expect(
    validateData('RepeatedMin', [{ val: 1 }, { val: 2 }, { val: 3 }])
  ).toBe(true));
  test('repeated - min - valid (equal)', () => expect(
    validateData('RepeatedMin', [{ val: 1 }, { val: 2 }])
  ).toBe(true));
  test('repeated - min - invalid', () => expect(
    validateData('RepeatedMin', [{ val: 1 }])
  ).toBe(false));
  test('repeated - min - invalid (element)', () => expect(
    validateData('RepeatedMin', [{ val: 1 }, { val: -1 }])
  ).toBe(false));
});

describe('min/max', () => {
  test('repeated - min/max - valid', () => expect(
    validateData('RepeatedMinMax', [1, 2, 3])
  ).toBe(true));
  test('repeated - min/max - valid (min)', () => expect(
    validateData('RepeatedMinMax', [1, 2])
  ).toBe(true));
  test('repeated - min/max - valid (max)', () => expect(
    validateData('RepeatedMinMax', [1, 2, 3, 4])
  ).toBe(true));
  test('repeated - min/max - invalid (below)', () => expect(
    validateData('RepeatedMinMax', [])
  ).toBe(false));
  test('repeated - min/max - invalid (above)', () => expect(
    validateData('RepeatedMinMax', [1, 2, 3, 4, 5]))
    .toBe(false));
});

describe('none', () => {
  test('repeated - none - valid', () => expect(
    validateData('RepeatedNone', [1, 2, 3])
  ).toBe(true));
});

describe('unique', () => {
  test('repeated - unique - valid', () => expect(
    validateData('RepeatedUnique', ['foo', 'bar', 'baz']))
    .toBe(true));
  test('repeated - unique - valid (empty)', () => expect(
    validateData('RepeatedUnique', undefined)
  ).toBe(true));
  test('repeated - unique - valid (case sensitivity)', () => expect(
    validateData('RepeatedUnique', ['foo', 'Foo'])
  ).toBe(true));
  test('repeated - unique - invalid', () => expect(
    validateData('RepeatedUnique', ['foo', 'bar', 'foo', 'baz']))
    .toBe(false));
});
