const path = require('path');

const { TEST_PROTOS_PATHS } = require('./consts');
const { protoToValidator } = require('./index');
/*
  Extensions are no longer available. Use google.protobuf.Any instead.
  Special exception is granted for google/protobuf/descriptor.proto
  for backward and runtime compatibility reasons.
 */

let ajv;
const init = () => {
  const protoPaths = [
    ...([
      '../node_modules/google-proto-files/google/protobuf/descriptor.proto',
      '../node_modules/google-proto-files/google/protobuf/duration.proto',
      '../node_modules/google-proto-files/google/protobuf/timestamp.proto',
      '../node_modules/google-proto-files/google/protobuf/any.proto',
      'protos/validate/validate.proto',
    ].map(p => path.join(path.dirname(__filename), p))),
    ...TEST_PROTOS_PATHS,
  ].map(p => path.resolve(p));
  ajv = protoToValidator(protoPaths, 'root');
  return ajv;
};

const validateData = (protoMessageName, data) => {
  if (!ajv) {
    init();
  }
  const validate = ajv.getSchema(`tests.harness.cases#/definitions/${protoMessageName}`);
  if (!validate) {
    process.stderr.write(`Cant find validator for message: "${JSON.stringify(protoMessageName)}"`);
    return null;
  }
  const val = typeof data === 'undefined' ? {} : (data === null ? { val: null } : { val: data });
  const result = validate(val);
  if (validate.errors) {
    process.stderr.write(`Error with proto message: "${protoMessageName}" val: "${JSON.stringify(val)}" ${JSON.stringify(validate.errors, null, 2)}\n`);
  }
  return result;
};


module.exports = {
  validateData,
  init,
};
