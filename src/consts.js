const fs = require('fs');
const path = require('path');

const PROTOC_GEN_VALIDATE_REPO = 'https://github.com/lyft/protoc-gen-validate';
const PROTOC_GEN_VALIDATE_VERSION = '0.0.11';
const PROTOC_GEN_VALIDATE_URI = `${PROTOC_GEN_VALIDATE_REPO}/archive/v${PROTOC_GEN_VALIDATE_VERSION}.tar.gz`;

const TEST_DATA_DIR = './src/__tests__/protos';

const TEST_PROTOS_SUBDIR = path.join(TEST_DATA_DIR, `PGV-${PROTOC_GEN_VALIDATE_VERSION}/tests/harness/cases/`);

const TEST_PROTOS_PATHS = [
  ...fs.readdirSync(TEST_PROTOS_SUBDIR).filter(name => path.extname(name) === '.proto'),
  'other_package/embed.proto',
].map(name => path.join(TEST_PROTOS_SUBDIR, name));

module.exports = {
  TEST_PROTOS_PATHS,
  PROTOC_GEN_VALIDATE_REPO,
  PROTOC_GEN_VALIDATE_VERSION,
  PROTOC_GEN_VALIDATE_URI,

  TEST_DATA_DIR,
};
