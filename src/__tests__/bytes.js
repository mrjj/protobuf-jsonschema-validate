const {
  validateData
} = require('../testsUtils');
describe.skip('IP', () => {
  test('bytes - IP - valid (v4)', () => expect(
    validateData('BytesIP', Uint8Array.from([0xC0, 0xA8, 0x00, 0x01]))
  ).toBe(true));
  test('bytes - IP - valid (v6)', () => expect(
    validateData('BytesIP', Uint8Array.from('\x20\x01\x0D\xB8\x85\xA3\x00\x00\x00\x00\x8A\x2E\x03\x70\x73\x34')))
    .toBe(true));
  test('bytes - IP - invalid', () => expect(
    validateData('BytesIP', Uint8Array.from('foobar'))
  ).toBe(false));
});

describe.skip('IPv4', () => {
  test('bytes - IPv4 - valid', () => expect(
    validateData('BytesIPv4', Uint8Array.from([0xC0, 0xA8, 0x00, 0x01]))
  ).toBe(true));
  test('bytes - IPv4 - invalid', () => expect(
    validateData('BytesIPv4', Uint8Array.from('foobar'))
  ).toBe(false));
  test('bytes - IPv4 - invalid (v6)', () => expect(
    validateData('BytesIPv4', Uint8Array.from('\x20\x01\x0D\xB8\x85\xA3\x00\x00\x00\x00\x8A\x2E\x03\x70\x73\x34')))
    .toBe(false));
});

describe.skip('IPv6', () => {
  test('bytes - IPv6 - valid', () => expect(
    validateData('BytesIPv6', Uint8Array.from('\x20\x01\x0D\xB8\x85\xA3\x00\x00\x00\x00\x8A\x2E\x03\x70\x73\x34')))
    .toBe(true));
  test('bytes - IPv6 - invalid', () => expect(
    validateData('BytesIPv6', Uint8Array.from('fooar'))
  ).toBe(false));
  test('bytes - IPv6 - invalid (v4)', () => expect(
    validateData('BytesIPv6', Uint8Array.from([0xC0, 0xA8, 0x00, 0x01])))
    .toBe(false));
});

describe.skip('const', () => {
  test('bytes - const - valid', () => expect(
    validateData('BytesConst', Uint8Array.from('foo'))
  ).toBe(true));
  test('bytes - const - invalid', () => expect(
    validateData('BytesConst', Uint8Array.from('bar'))
  ).toBe(false));
});

describe.skip('contains', () => {
  test('bytes - contains - valid', () => expect(
    validateData('BytesContains', Uint8Array.from('candy bars'))
  ).toBe(true));
  test('bytes - contains - valid (only)', () => expect(
    validateData('BytesContains', Uint8Array.from('bar'))
  ).toBe(true));
  test('bytes - contains - invalid', () => expect(
    validateData('BytesContains', Uint8Array.from('candy bazs'))
  ).toBe(false));
});

describe.skip('equal min/max len', () => {
  test('bytes - equal min/max len - valid', () => expect(
    validateData('BytesEqualMinMaxLen', Uint8Array.from('proto'))
  ).toBe(true));
  test('bytes - equal min/max len - invalid', () => expect(
    validateData('BytesEqualMinMaxLen', Uint8Array.from('validate'))
  ).toBe(false));
});

describe.skip('in', () => {
  test('bytes - in - valid', () => expect(
    validateData('BytesIn', Uint8Array.from('bar'))
  ).toBe(true));
  test('bytes - in - invalid', () => expect(
    validateData('BytesIn', Uint8Array.from('quux'))
  ).toBe(false));
});

describe.skip('len', () => {
  test('bytes - len - valid', () => expect(
    validateData('BytesLen', Uint8Array.from('baz'))
  ).toBe(true));
  test('bytes - len - invalid (lt)', () => expect(
    validateData('BytesLen', Uint8Array.from('go'))
  ).toBe(false));
  test('bytes - len - invalid (gt)', () => expect(
    validateData('BytesLen', Uint8Array.from('fizz'))
  ).toBe(false));
});

describe.skip('max len', () => {
  test('bytes - max len - valid', () => expect(
    validateData('BytesMaxLen', Uint8Array.from('foo'))
  ).toBe(true));
  test('bytes - max len - valid (max)', () => expect(
    validateData('BytesMaxLen', Uint8Array.from('proto'))
  ).toBe(true));
  test('bytes - max len - invalid', () => expect(
    validateData('BytesMaxLen', Uint8Array.from('1234567890'))
  ).toBe(false));
});

describe.skip('min len', () => {
  test('bytes - min len - valid', () => expect(
    validateData('BytesMinLen', Uint8Array.from('fizz'))
  ).toBe(true));
  test('bytes - min len - valid (min)', () => expect(
    validateData('BytesMinLen', Uint8Array.from('baz'))
  ).toBe(true));
  test('bytes - min len - invalid', () => expect(
    validateData('BytesMinLen', Uint8Array.from('go'))
  ).toBe(false));
});

describe.skip('min/max len', () => {
  test('bytes - min/max len - valid', () => expect(
    validateData('BytesMinMaxLen', Uint8Array.from('quux'))
  ).toBe(true));
  test('bytes - min/max len - valid (min)', () => expect(
    validateData('BytesMinMaxLen', Uint8Array.from('foo'))
  ).toBe(true));
  test('bytes - min/max len - valid (max)', () => expect(
    validateData('BytesMinMaxLen', Uint8Array.from('proto'))
  ).toBe(true));
  test('bytes - min/max len - invalid (below)', () => expect(
    validateData('BytesMinMaxLen', Uint8Array.from('go'))
  ).toBe(false));
  test('bytes - min/max len - invalid (above)', () => expect(
    validateData('BytesMinMaxLen', Uint8Array.from('validate'))
  ).toBe(false));
});

describe.skip('none', () => {
  test('bytes - none - valid', () => expect(
    validateData('BytesNone', Uint8Array.from('quux'))
  ).toBe(true));
});

describe.skip('not in', () => {
  test('bytes - not in - valid', () => expect(
    validateData('BytesNotIn', Uint8Array.from('quux'))
  ).toBe(true));
  test('bytes - not in - invalid', () => expect(
    validateData('BytesNotIn', Uint8Array.from('fizz'))
  ).toBe(false));
});

describe.skip('pattern', () => {
  test('bytes - pattern - valid', () => expect(
    validateData('BytesPattern', Uint8Array.from('Foo123'))
  ).toBe(true));
  test('bytes - pattern - invalid', () => expect(
    validateData('BytesPattern', Uint8Array.from('你好你好'))
  ).toBe(false));
  test('bytes - pattern - invalid (empty)', () => expect(
    validateData('BytesPattern', undefined)
  ).toBe(false));
});

describe.skip('prefix', () => {
  test('bytes - prefix - valid', () => expect(
    validateData('BytesPrefix', Uint8Array.from([0x99, 0x9f, 0x08]))
  ).toBe(true));
  test('bytes - prefix - valid (only)', () => expect(
    validateData('BytesPrefix', Uint8Array.from([0x99]))
  ).toBe(true));
  test('bytes - prefix - invalid', () => expect(
    validateData('BytesPrefix', Uint8Array.from('bar'))
  ).toBe(false));
});

describe.skip('suffix', () => {
  test('bytes - suffix - valid', () => expect(
    validateData('BytesSuffix', Uint8Array.from([0x62, 0x75, 0x7A, 0x7A])))
    .toBe(true));
  test('bytes - suffix - valid (only)', () => expect(
    validateData('BytesSuffix', Uint8Array.from('\x62\x75\x7A\x7A'))
  ).toBe(true));
  test('bytes - suffix - invalid', () => expect(
    validateData('BytesSuffix', Uint8Array.from('foobar'))
  ).toBe(false));
  test('bytes - suffix - invalid (case-sensitive)', () => expect(
    validateData('BytesSuffix', Uint8Array.from('FooBaz'))
  ).toBe(false));
});
