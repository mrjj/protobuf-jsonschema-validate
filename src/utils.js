const { TEST_PROTOS_PATHS } = require('./consts');
const { protoToValidator } = require('./index');

/*
  Extensions are no longer available. Use google.protobuf.Any instead.
  Special exception is granted for google/protobuf/descriptor.proto
  for backward and runtime compatibility reasons.
 */
const protoPaths = [
  `${__dirname}/../node_modules/google-proto-files/google/protobuf/descriptor.proto`,
  `${__dirname}/../node_modules/google-proto-files/google/protobuf/duration.proto`,
  `${__dirname}/../node_modules/google-proto-files/google/protobuf/timestamp.proto`,
  `${__dirname}/protos/validate/validate.proto`,
  ...TEST_PROTOS_PATHS,
];

const ajv = protoToValidator(protoPaths, 'root');

module.exports = {
  validateData: (protoMessageName, data) => {
    const validate = ajv.getSchema(`tests.harness.cases#/definitions/${protoMessageName}`);
    const result = validate({ val: data });
    if (validate.errors) {
      process.stderr.write(`${JSON.stringify(validate.errors, null, 2)}\n`);
    }
    return result;
  }
};
