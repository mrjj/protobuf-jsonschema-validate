const { validateData } = require('../utils');
describe('field', () => {
  test('oneof - field - valid (X)',
    () => expect(validateData('OneOf',  {o: {OneOf_X: {x: "foobar"}}}).toBe(true)));
  test('oneof - field - valid (Y)',
    () => expect(validateData('OneOf',  {o: {OneOf_Y: {y: 123}}}).toBe(true)));
  test('oneof - field - valid (Z)',
    () => expect(validateData('OneOf',  {o: {OneOf_Z: {z: {TestOneOfMsg: {val: true}}}}}).toBe(true)));
  test('oneof - field - valid (empty)',
    () => expect(validateData('OneOf',  {}).toBe(true)));
  test('oneof - field - invalid (X)',
    () => expect(validateData('OneOf',  {o: {OneOf_X: {x: "fizzbuzz"}}}).toBe(false)));
  test('oneof - field - invalid (Y)',
    () => expect(validateData('OneOf',  {o: {OneOf_Y: {y: -1}}}).toBe(false)));
  });

describe('filed', () => {
  test('oneof - filed - invalid (Z)',
    () => expect(validateData('OneOf',  {o: {OneOf_Z: {z: {TestOneOfMsg: {}}}}}).toBe(false)));
  });

describe('none', () => {
  test('oneof - none - valid',
    () => expect(validateData('OneOfNone',  {o: {OneOfNone_X: {x: "foo"}}}).toBe(true)));
  test('oneof - none - valid (empty)',
    () => expect(validateData('OneOfNone',  {}).toBe(true)));
  });

describe('require', () => {
  test('oneof - require - invalid',
    () => expect(validateData('OneOfRequired',  {}).toBe(false)));
  });

describe('required', () => {
  test('oneof - required - valid',
    () => expect(validateData('OneOfRequired',  {o: {OneOfRequired_X: {x: ""}}}).toBe(true)));
  });
