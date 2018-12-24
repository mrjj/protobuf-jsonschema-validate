const fs = require('fs');
const path = require('path');

const PROTOC_GEN_VALIDATE_REPO = 'https://github.com/lyft/protoc-gen-validate';
const PROTOC_GEN_VALIDATE_VERSION = '0.0.11';
const PROTOC_GEN_VALIDATE_URI = `${PROTOC_GEN_VALIDATE_REPO}/archive/v${PROTOC_GEN_VALIDATE_VERSION}.tar.gz`;

const TEST_DATA_DIR = `${path.dirname(__filename)}/__tests__/protos`;

const TEST_PROTOS_SUBDIR = path.join(TEST_DATA_DIR, `PGV-${PROTOC_GEN_VALIDATE_VERSION}/tests/harness/cases/`);

const WKT_PATH = `${__dirname}/../node_modules/google-proto-files/google/protobuf/`;
const WKT_TYPE_PATH = `${__dirname}/../node_modules/google-proto-files/google/type/`;

const DEFAULT_LOGGER_CONFIG = {
  prettyPrint: true,
};

const TEST_PROTOS_PATHS = [
  ...fs.readdirSync(TEST_PROTOS_SUBDIR).filter(name => path.extname(name) === '.proto'),
  'other_package/embed.proto',
].map(name => path.join(TEST_PROTOS_SUBDIR, name));
const DUMP_DEBUG_SCHEMA = true;

const DEBUG_SCHEMA_PATH = './schema.json';
const DEFAULT_OUTPUT_PATH = './build/';

const DEFAULT_SCHEMA_ID_PREFIX = 'http://test.com/';
const DEFAULT_SCHEMA_ID_SUFFIX = '.schema.json';

module.exports = {
  DEFAULT_LOGGER_CONFIG,
  DEFAULT_OUTPUT_PATH,
  DEFAULT_SCHEMA_ID_PREFIX,
  DEFAULT_SCHEMA_ID_SUFFIX,
  TEST_PROTOS_PATHS,
  DUMP_DEBUG_SCHEMA,
  DEBUG_SCHEMA_PATH,
  PROTOC_GEN_VALIDATE_REPO,
  PROTOC_GEN_VALIDATE_VERSION,
  PROTOC_GEN_VALIDATE_URI,
  TEST_PROTOS_SUBDIR,
  TEST_DATA_DIR,
  WKT_PATH,
  WKT_TYPE_PATH,
};
