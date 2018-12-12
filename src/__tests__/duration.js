const { validateData } = require('../utils');
describe('const', () => {
  test('duration - const - valid',
    () => expect(validateData('DurationConst', {Duration: {seconds: 3}})).toBe(true));
  test('duration - const - valid (empty)',
    () => expect(validateData({DurationConst: {}})).toBe(true));
  test('duration - const - invalid',
    () => expect(validateData('DurationConst', {Duration: {nanos: 3}})).toBe(false));
  });

describe('exclusive gt & lt', () => {
  test('duration - exclusive gt & lt - valid (empty)',
    () => expect(validateData({DurationExLTGT: {}})).toBe(true));
  test('duration - exclusive gt & lt - valid (above)',
    () => expect(validateData('DurationExLTGT', {Duration: {seconds: 2}})).toBe(true));
  test('duration - exclusive gt & lt - valid (below)',
    () => expect(validateData('DurationExLTGT', {Duration: {nanos: -1}})).toBe(true));
  test('duration - exclusive gt & lt - invalid',
    () => expect(validateData('DurationExLTGT', {Duration: {nanos: 1000}})).toBe(false));
  test('duration - exclusive gt & lt - invalid (max)',
    () => expect(validateData('DurationExLTGT', {Duration: {seconds: 1}})).toBe(false));
  test('duration - exclusive gt & lt - invalid (min)',
    () => expect(validateData('DurationExLTGT', {Duration: {}})).toBe(false));
  });

describe('exclusive gte & lte', () => {
  test('duration - exclusive gte & lte - valid (above)',
    () => expect(validateData('DurationExGTELTE', {Duration: {seconds: 3601}})).toBe(true));
  test('duration - exclusive gte & lte - valid (below)',
    () => expect(validateData('DurationExGTELTE', {Duration: {}})).toBe(true));
  test('duration - exclusive gte & lte - valid (max)',
    () => expect(validateData('DurationExGTELTE', {Duration: {seconds: 3600}})).toBe(true));
  test('duration - exclusive gte & lte - valid (min)',
    () => expect(validateData('DurationExGTELTE', {Duration: {seconds: 60}})).toBe(true));
  test('duration - exclusive gte & lte - invalid',
    () => expect(validateData('DurationExGTELTE', {Duration: {seconds: 61}})).toBe(false));
  });

describe('fields with other fields', () => {
  test('duration - fields with other fields - invalid other field',
    () => expect(validateData({DurationFieldWithOtherFields: {durationval: null, intval: 12}})).toBe(false));
  });

describe('gt', () => {
  test('duration - gt - valid',
    () => expect(validateData('DurationGT', {Duration: {seconds: 1}})).toBe(true));
  test('duration - gt - valid (empty)',
    () => expect(validateData({DurationGT: {}})).toBe(true));
  test('duration - gt - invalid (equal)',
    () => expect(validateData('DurationGT', {Duration: {nanos: 1000}})).toBe(false));
  test('duration - gt - invalid',
    () => expect(validateData('DurationGT', {Duration: {}})).toBe(false));
  });

describe('gt & lt', () => {
  test('duration - gt & lt - valid',
    () => expect(validateData('DurationGTLT', {Duration: {nanos: 1000}})).toBe(true));
  test('duration - gt & lt - valid (empty)',
    () => expect(validateData({DurationGTLT: {}})).toBe(true));
  test('duration - gt & lt - invalid (above)',
    () => expect(validateData('DurationGTLT', {Duration: {seconds: 1000}})).toBe(false));
  test('duration - gt & lt - invalid (below)',
    () => expect(validateData('DurationGTLT', {Duration: {nanos: -1000}})).toBe(false));
  test('duration - gt & lt - invalid (max)',
    () => expect(validateData('DurationGTLT', {Duration: {seconds: 1}})).toBe(false));
  test('duration - gt & lt - invalid (min)',
    () => expect(validateData('DurationGTLT', {Duration: {}})).toBe(false));
  });

describe('gte', () => {
  test('duration - gte - valid',
    () => expect(validateData('DurationGTE', {Duration: {seconds: 3}})).toBe(true));
  test('duration - gte - valid (empty)',
    () => expect(validateData({DurationGTE: {}})).toBe(true));
  test('duration - gte - valid (equal)',
    () => expect(validateData('DurationGTE', {Duration: {nanos: 1000000}})).toBe(true));
  test('duration - gte - invalid',
    () => expect(validateData('DurationGTE', {Duration: {seconds: -1}})).toBe(false));
  });

describe('gte & lte', () => {
  test('duration - gte & lte - valid',
    () => expect(validateData('DurationGTELTE', {Duration: {seconds: 60, nanos: 1}})).toBe(true));
  test('duration - gte & lte - valid (empty)',
    () => expect(validateData({DurationGTELTE: {}})).toBe(true));
  test('duration - gte & lte - valid (max)',
    () => expect(validateData('DurationGTELTE', {Duration: {seconds: 3600}})).toBe(true));
  test('duration - gte & lte - valid (min)',
    () => expect(validateData('DurationGTELTE', {Duration: {seconds: 60}})).toBe(true));
  test('duration - gte & lte - invalid (above)',
    () => expect(validateData('DurationGTELTE', {Duration: {seconds: 3600, nanos: 1}})).toBe(false));
  test('duration - gte & lte - invalid (below)',
    () => expect(validateData('DurationGTELTE', {Duration: {seconds: 59}})).toBe(false));
  test('duration - gte & lte - valid (empty)',
    () => expect(validateData({DurationExGTELTE: {}})).toBe(true));
  });

describe('in', () => {
  test('duration - in - valid',
    () => expect(validateData('DurationIn', {Duration: {seconds: 1}})).toBe(true));
  test('duration - in - valid (empty)',
    () => expect(validateData({DurationIn: {}})).toBe(true));
  test('duration - in - invalid',
    () => expect(validateData('DurationIn', {Duration: {}})).toBe(false));
  });

describe('lt', () => {
  test('duration - lt - valid',
    () => expect(validateData('DurationLT', {Duration: {nanos: -1}})).toBe(true));
  test('duration - lt - valid (empty)',
    () => expect(validateData({DurationLT: {}})).toBe(true));
  test('duration - lt - invalid (equal)',
    () => expect(validateData('DurationLT', {Duration: {}})).toBe(false));
  test('duration - lt - invalid',
    () => expect(validateData('DurationLT', {Duration: {seconds: 1}})).toBe(false));
  });

describe('lte', () => {
  test('duration - lte - valid',
    () => expect(validateData('DurationLTE', {Duration: {}})).toBe(true));
  test('duration - lte - valid (empty)',
    () => expect(validateData({DurationLTE: {}})).toBe(true));
  test('duration - lte - valid (equal)',
    () => expect(validateData('DurationLTE', {Duration: {seconds: 1}})).toBe(true));
  test('duration - lte - invalid',
    () => expect(validateData('DurationLTE', {Duration: {seconds: 1, nanos: 1}})).toBe(false));
  });

describe('none', () => {
  test('duration - none - valid',
    () => expect(validateData('DurationNone', {Duration: {seconds: 123}})).toBe(true));
  });

describe('not in', () => {
  test('duration - not in - valid',
    () => expect(validateData('DurationNotIn', {Duration: {nanos: 1}})).toBe(true));
  test('duration - not in - valid (empty)',
    () => expect(validateData({DurationNotIn: {}})).toBe(true));
  test('duration - not in - invalid',
    () => expect(validateData('DurationNotIn', {Duration: {}})).toBe(false));
  });

describe('required', () => {
  test('duration - required - valid',
    () => expect(validateData('DurationRequired', {Duration: {}})).toBe(true));
  test('duration - required - invalid',
    () => expect(validateData('DurationRequired', null)).toBe(false));
  });
