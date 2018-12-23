const path = require('path');
const { protoToSchema } = require('../index');
const { TEST_PROTOS_SUBDIR } = require('../consts');

/**
 * __tests__ refs are taken from
 * https://github.com/lyft/protoc-gen-validate/blob/master/__tests__/harness/executor/cases.go
 */
test('bool.proto', () => {
  const protoPath = path.join(TEST_PROTOS_SUBDIR, 'bool.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
}, 2000);

test('bytes.proto', () => {
  const protoPath = path.join(TEST_PROTOS_SUBDIR, 'bytes.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
}, 2000);

test('enums.proto', () => {
  const protoPath = path.join(TEST_PROTOS_SUBDIR, 'enums.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
}, 2000);

test('maps.proto', () => {
  const protoPath = path.join(TEST_PROTOS_SUBDIR, 'maps.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
}, 2000);

test('messages.proto', () => {
  const protoPath = path.join(TEST_PROTOS_SUBDIR, 'messages.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
}, 2000);

test('numbers.proto', () => {
  const protoPath = path.join(TEST_PROTOS_SUBDIR, 'numbers.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
}, 2000);

test('oneofs.proto', () => {
  const protoPath = path.join(TEST_PROTOS_SUBDIR, 'oneofs.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
}, 2000);

test('repeated.proto', () => {
  const protoPath = path.join(TEST_PROTOS_SUBDIR, 'repeated.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
}, 2000);

test('strings.proto', () => {
  const protoPath = path.join(TEST_PROTOS_SUBDIR, 'strings.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
}, 2000);

test('wkt_any.proto', () => {
  const protoPath = path.join(TEST_PROTOS_SUBDIR, 'wkt_any.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
}, 2000);


test.only('wkt_duration.proto', () => {
  const protoPath = path.join(TEST_PROTOS_SUBDIR, 'wkt_duration.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
}, 2000);


test('wkt_timestamp.proto', () => {
  const protoPath = path.join(TEST_PROTOS_SUBDIR, 'wkt_timestamp.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
}, 2000);


test('wkt_wrappers.proto', () => {
  const protoPath = path.join(TEST_PROTOS_SUBDIR, 'wkt_wrappers.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
}, 2000);

