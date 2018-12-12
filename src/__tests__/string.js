const { validateData } = require('../utils');
describe('IP', () => {
  test('string - IP - valid (v4)',
    () => expect(validateData('StringIP', "192.168.0.1")).toBe(true));
  test('string - IP - valid (v6)',
    () => expect(validateData('StringIP', "3e::99")).toBe(true));
  test('string - IP - invalid',
    () => expect(validateData('StringIP', "foobar")).toBe(false));
  });

describe('IPv4', () => {
  test('string - IPv4 - valid',
    () => expect(validateData('StringIPv4', "192.168.0.1")).toBe(true));
  test('string - IPv4 - invalid',
    () => expect(validateData('StringIPv4', "foobar")).toBe(false));
  test('string - IPv4 - invalid (erroneous)',
    () => expect(validateData('StringIPv4', "256.0.0.0")).toBe(false));
  test('string - IPv4 - invalid (v6)',
    () => expect(validateData('StringIPv4', "3e::99")).toBe(false));
  });

describe('IPv6', () => {
  test('string - IPv6 - valid',
    () => expect(validateData('StringIPv6', "2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toBe(true));
  test('string - IPv6 - valid (collapsed)',
    () => expect(validateData('StringIPv6', "2001:db8:85a3::8a2e:370:7334")).toBe(true));
  test('string - IPv6 - invalid',
    () => expect(validateData('StringIPv6', "foobar")).toBe(false));
  test('string - IPv6 - invalid (v4)',
    () => expect(validateData('StringIPv6', "192.168.0.1")).toBe(false));
  test('string - IPv6 - invalid (erroneous)',
    () => expect(validateData('StringIPv6', "ff::fff::0b")).toBe(false));
  });

describe('URI', () => {
  test('string - URI - valid',
    () => expect(validateData('StringURI', "http://example.com/foo/bar?baz=quux")).toBe(true));
  test('string - URI - invalid',
    () => expect(validateData('StringURI', "!@#$%^&*%$#")).toBe(false));
  test('string - URI - invalid (relative)',
    () => expect(validateData('StringURI', "/foo/bar?baz=quux")).toBe(false));
  test('string - URI - valid',
    () => expect(validateData('StringURIRef', "http://example.com/foo/bar?baz=quux")).toBe(true));
  test('string - URI - valid (relative)',
    () => expect(validateData('StringURIRef', "/foo/bar?baz=quux")).toBe(true));
  test('string - URI - invalid',
    () => expect(validateData('StringURIRef', "!@#$%^&*%$#")).toBe(false));
  });

describe('const', () => {
  test('string - const - valid',
    () => expect(validateData('StringConst', "foo")).toBe(true));
  test('string - const - invalid',
    () => expect(validateData('StringConst', "bar")).toBe(false));
  });

describe('contains', () => {
  test('string - contains - valid',
    () => expect(validateData('StringContains', "candy bars")).toBe(true));
  test('string - contains - valid (only)',
    () => expect(validateData('StringContains', "bar")).toBe(true));
  test('string - contains - invalid',
    () => expect(validateData('StringContains', "candy bazs")).toBe(false));
  test('string - contains - invalid (case-sensitive)',
    () => expect(validateData('StringContains', "Candy Bars")).toBe(false));
  });

describe('email', () => {
  test('string - email - valid',
    () => expect(validateData('StringEmail', "foo@bar.com")).toBe(true));
  test('string - email - valid (name)',
    () => expect(validateData('StringEmail', 'John Smith <foo@bar.com>')).toBe(true));
  test('string - email - invalid',
    () => expect(validateData('StringEmail', "foobar")).toBe(false));
  test('string - email - invalid (local segment too long)',
    () => expect(validateData('StringEmail', "x0123456789012345678901234567890123456789012345678901234567890123456789@example.com")).toBe(false));
  test('string - email - invalid (hostname too long)',
    () => expect(validateData('StringEmail', "foo@x0123456789012345678901234567890123456789012345678901234567890123456789.com")).toBe(false));
  test('string - email - invalid (bad hostname)',
    () => expect(validateData('StringEmail', "foo@-bar.com")).toBe(false));
  });

describe('equal min/max bytes', () => {
  test('string - equal min/max bytes - valid',
    () => expect(validateData('StringEqualMinMaxBytes', "protoc")).toBe(true));
  test('string - equal min/max bytes - invalid',
    () => expect(validateData('StringEqualMinMaxBytes', "foo")).toBe(false));
  });

describe('equal min/max len', () => {
  test('string - equal min/max len - valid',
    () => expect(validateData('StringEqualMinMaxLen', "proto")).toBe(true));
  test('string - equal min/max len - invalid',
    () => expect(validateData('StringEqualMinMaxLen', "validate")).toBe(false));
  });

describe('hostname', () => {
  test('string - hostname - valid',
    () => expect(validateData('StringHostname', "example.com")).toBe(true));
  test('string - hostname - invalid',
    () => expect(validateData('StringHostname', "!@#$%^&")).toBe(false));
  test('string - hostname - invalid (underscore)',
    () => expect(validateData('StringHostname', "foo_bar.com")).toBe(false));
  test('string - hostname - invalid (too long)',
    () => expect(validateData('StringHostname', "x0123456789012345678901234567890123456789012345678901234567890123456789.com")).toBe(false));
  test('string - hostname - invalid (IDNs)',
    () => expect(validateData('StringHostname', "你好.com")).toBe(false));
  });

describe('in', () => {
  test('string - in - valid',
    () => expect(validateData('StringIn', "bar")).toBe(true));
  test('string - in - invalid',
    () => expect(validateData('StringIn', "quux")).toBe(false));
  });

describe('len', () => {
  test('string - len - valid',
    () => expect(validateData('StringLen', "baz")).toBe(true));
  test('string - len - valid (multibyte)',
    () => expect(validateData('StringLen', "你好吖")).toBe(true));
  test('string - len - invalid (lt)',
    () => expect(validateData('StringLen', "go")).toBe(false));
  test('string - len - invalid (gt)',
    () => expect(validateData('StringLen', "fizz")).toBe(false));
  test('string - len - invalid (multibyte)',
    () => expect(validateData('StringLen', "你好")).toBe(false));
  });

describe('len bytes', () => {
  test('string - len bytes - valid',
    () => expect(validateData('StringLenBytes', "pace")).toBe(true));
  test('string - len bytes - invalid (lt)',
    () => expect(validateData('StringLenBytes', "val")).toBe(false));
  test('string - len bytes - invalid (gt)',
    () => expect(validateData('StringLenBytes', "world")).toBe(false));
  test('string - len bytes - invalid (multibyte)',
    () => expect(validateData('StringLenBytes', "世界和平")).toBe(false));
  });

describe('max bytes', () => {
  test('string - max bytes - valid',
    () => expect(validateData('StringMaxBytes', "foo")).toBe(true));
  test('string - max bytes - valid (max)',
    () => expect(validateData('StringMaxBytes', "12345678")).toBe(true));
  test('string - max bytes - invalid',
    () => expect(validateData('StringMaxBytes', "123456789")).toBe(false));
  test('string - max bytes - invalid (multibyte)',
    () => expect(validateData('StringMaxBytes', "你好你好你好")).toBe(false));
  });

describe('max len', () => {
  test('string - max len - valid',
    () => expect(validateData('StringMaxLen', "foo")).toBe(true));
  test('string - max len - valid (max)',
    () => expect(validateData('StringMaxLen', "proto")).toBe(true));
  test('string - max len - valid (multibyte)',
    () => expect(validateData('StringMaxLen', "你好你好")).toBe(true));
  test('string - max len - invalid',
    () => expect(validateData('StringMaxLen', "1234567890")).toBe(false));
  });

describe('min bytes', () => {
  test('string - min bytes - valid',
    () => expect(validateData('StringMinBytes', "proto")).toBe(true));
  test('string - min bytes - valid (min)',
    () => expect(validateData('StringMinBytes', "quux")).toBe(true));
  test('string - min bytes - valid (multibyte)',
    () => expect(validateData('StringMinBytes', "你好")).toBe(true));
  test('string - min bytes - invalid',
    () => expect(validateData('StringMinBytes', "")).toBe(false));
  });

describe('min len', () => {
  test('string - min len - valid',
    () => expect(validateData('StringMinLen', "protoc")).toBe(true));
  test('string - min len - valid (min)',
    () => expect(validateData('StringMinLen', "baz")).toBe(true));
  test('string - min len - invalid',
    () => expect(validateData('StringMinLen', "go")).toBe(false));
  test('string - min len - invalid (multibyte)',
    () => expect(validateData('StringMinLen', "你好")).toBe(false));
  });

describe('min/max bytes', () => {
  test('string - min/max bytes - valid',
    () => expect(validateData('StringMinMaxBytes', "protoc")).toBe(true));
  test('string - min/max bytes - valid (min)',
    () => expect(validateData('StringMinMaxBytes', "quux")).toBe(true));
  test('string - min/max bytes - valid (max)',
    () => expect(validateData('StringMinMaxBytes', "fizzbuzz")).toBe(true));
  test('string - min/max bytes - valid (multibyte)',
    () => expect(validateData('StringMinMaxBytes', "你好")).toBe(true));
  test('string - min/max bytes - invalid (below)',
    () => expect(validateData('StringMinMaxBytes', "foo")).toBe(false));
  test('string - min/max bytes - invalid (above)',
    () => expect(validateData('StringMinMaxBytes', "你好你好你")).toBe(false));
  });

describe('min/max len', () => {
  test('string - min/max len - valid',
    () => expect(validateData('StringMinMaxLen', "quux")).toBe(true));
  test('string - min/max len - valid (min)',
    () => expect(validateData('StringMinMaxLen', "foo")).toBe(true));
  test('string - min/max len - valid (max)',
    () => expect(validateData('StringMinMaxLen', "proto")).toBe(true));
  test('string - min/max len - valid (multibyte)',
    () => expect(validateData('StringMinMaxLen', "你好你好")).toBe(true));
  test('string - min/max len - invalid (below)',
    () => expect(validateData('StringMinMaxLen', "go")).toBe(false));
  test('string - min/max len - invalid (above)',
    () => expect(validateData('StringMinMaxLen', "validate")).toBe(false));
  });

describe('none', () => {
  test('string - none - valid',
    () => expect(validateData('StringNone', "quux")).toBe(true));
  });

describe('not in', () => {
  test('string - not in - valid',
    () => expect(validateData('StringNotIn', "quux")).toBe(true));
  test('string - not in - invalid',
    () => expect(validateData('StringNotIn', "fizz")).toBe(false));
  });

describe('pattern', () => {
  test('string - pattern - valid',
    () => expect(validateData('StringPattern', "Foo123")).toBe(true));
  test('string - pattern - invalid',
    () => expect(validateData('StringPattern', "!@#$%^&*()")).toBe(false));
  test('string - pattern - invalid (empty)',
    () => expect(validateData('StringPattern', "")).toBe(false));
  });

describe('pattern (escapes)', () => {
  test('string - pattern (escapes) - valid',
    () => expect(validateData('StringPatternEscapes', "* \\ x")).toBe(true));
  test('string - pattern (escapes) - invalid',
    () => expect(validateData('StringPatternEscapes', "invalid")).toBe(false));
  test('string - pattern (escapes) - invalid (empty)',
    () => expect(validateData('StringPatternEscapes', "")).toBe(false));
  });

describe('prefix', () => {
  test('string - prefix - valid',
    () => expect(validateData('StringPrefix', "foobar")).toBe(true));
  test('string - prefix - valid (only)',
    () => expect(validateData('StringPrefix', "foo")).toBe(true));
  test('string - prefix - invalid',
    () => expect(validateData('StringPrefix', "bar")).toBe(false));
  test('string - prefix - invalid (case-sensitive)',
    () => expect(validateData('StringPrefix', "Foobar")).toBe(false));
  });

describe('suffix', () => {
  test('string - suffix - valid',
    () => expect(validateData('StringSuffix', "foobaz")).toBe(true));
  test('string - suffix - valid (only)',
    () => expect(validateData('StringSuffix', "baz")).toBe(true));
  test('string - suffix - invalid',
    () => expect(validateData('StringSuffix', "foobar")).toBe(false));
  test('string - suffix - invalid (case-sensitive)',
    () => expect(validateData('StringSuffix', "FooBaz")).toBe(false));
  });
