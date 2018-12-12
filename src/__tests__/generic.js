const path = require('path');
const { protoToSchema } = require('../index');
const { TEST_DATA_DIR, PROTOC_GEN_VALIDATE_VERSION } = require('../consts');

/**
 * Tests refs are taken from
 * https://github.com/lyft/protoc-gen-validate/blob/master/tests/harness/executor/cases.go
 */
test('bool.proto', () => {
  const protoPath = path.join(TEST_DATA_DIR, PROTOC_GEN_VALIDATE_VERSION, 'tests/harness/cases/bool.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
  }, 2000);

test('bytes.proto', () => {
  const protoPath = path.join(TEST_DATA_DIR, PROTOC_GEN_VALIDATE_VERSION, 'tests/harness/cases/bytes.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
  }, 2000);

test('enums.proto', () => {
  const protoPath = path.join(TEST_DATA_DIR, PROTOC_GEN_VALIDATE_VERSION, 'tests/harness/cases/enums.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
  }, 2000);

test('maps.proto', () => {
  const protoPath = path.join(TEST_DATA_DIR, PROTOC_GEN_VALIDATE_VERSION, 'tests/harness/cases/maps.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
  }, 2000);

test('messages.proto', () => {
  const protoPath = path.join(TEST_DATA_DIR, PROTOC_GEN_VALIDATE_VERSION, 'tests/harness/cases/messages.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
  }, 2000);

test('numbers.proto', () => {
  const protoPath = path.join(TEST_DATA_DIR, PROTOC_GEN_VALIDATE_VERSION, 'tests/harness/cases/numbers.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
  }, 2000);

test('oneofs.proto', () => {
  const protoPath = path.join(TEST_DATA_DIR, PROTOC_GEN_VALIDATE_VERSION, 'tests/harness/cases/oneofs.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
  }, 2000);

test('repeated.proto', () => {
  const protoPath = path.join(TEST_DATA_DIR, PROTOC_GEN_VALIDATE_VERSION, 'tests/harness/cases/repeated.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
  }, 2000);

test('strings.proto', () => {
  const protoPath = path.join(TEST_DATA_DIR, PROTOC_GEN_VALIDATE_VERSION, 'tests/harness/cases/strings.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
  }, 2000);

test('wkt_any.proto', () => {
  const protoPath = path.join(TEST_DATA_DIR, PROTOC_GEN_VALIDATE_VERSION, 'tests/harness/cases/wkt_any.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
  }, 2000);


test.only('wkt_duration.proto', () => {
  const protoPath = path.join(TEST_DATA_DIR, PROTOC_GEN_VALIDATE_VERSION, 'tests/harness/cases/wkt_duration.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
  }, 2000);


test('wkt_timestamp.proto', () => {
  const protoPath = path.join(TEST_DATA_DIR, PROTOC_GEN_VALIDATE_VERSION, 'tests/harness/cases/wkt_timestamp.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
  }, 2000);


test('wkt_wrappers.proto', () => {
  const protoPath = path.join(TEST_DATA_DIR, PROTOC_GEN_VALIDATE_VERSION, 'tests/harness/cases/wkt_wrappers.proto');
  const result = protoToSchema(protoPath);
  expect(result).toEqual({});
  }, 2000);

