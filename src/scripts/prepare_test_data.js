const { PROTOC_GEN_VALIDATE_URI, PROTOC_GEN_VALIDATE_VERSION, TEST_DATA_DIR } = require('../consts');
const { escapeUnquotedOptions } = require('../index');

const fs = require('fs');
const path = require('path');
const download = require('download-tarball');

/**
 * Remove directory recursively
 * @param {string} dir_path
 * @see https://stackoverflow.com/a/42505874/3027390
 */
function rimraf(dir_path) {
  if (fs.existsSync(dir_path)) {
    fs.readdirSync(dir_path).forEach(function (entry) {
      const entry_path = path.join(dir_path, entry);
      if (fs.lstatSync(entry_path).isDirectory()) {
        rimraf(entry_path);
      } else {
        fs.unlinkSync(entry_path);
      }
    });
    fs.rmdirSync(dir_path);
  }
}


rimraf(TEST_DATA_DIR);
fs.mkdirSync(TEST_DATA_DIR);

process.stdout.write(`Downloading test data ${PROTOC_GEN_VALIDATE_URI} -> ${TEST_DATA_DIR}\n`);
download({
  url: PROTOC_GEN_VALIDATE_URI,
  dir: TEST_DATA_DIR,
  gotOpts: {
    headers: {
      beep: 'boop'
    }
  }
}).then(() => {
  const casesDir = path.join(TEST_DATA_DIR, `${PROTOC_GEN_VALIDATE_VERSION}/tests/harness/cases`);
  fs.readdirSync(casesDir).forEach(file => {
    const fp = path.join(casesDir, file);
    if (path.extname(file) === '.proto') {
      const data = escapeUnquotedOptions(fs.readFileSync(fp).toString());
      fs.writeFileSync(fp, data);
    }
  });
  process.stdout.write(`Test data is successfully saved to\n${TEST_DATA_DIR}\n`);
})
  .catch(err => {
    process.stderr.write(`Failed to download ${PROTOC_GEN_VALIDATE_URI}\n`);
    process.stderr.write(`${err.message}\n`);
    process.stderr.write(`${err.stack.toString()}\n`);
  });
