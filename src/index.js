const fs = require('fs');

const ajv = require('ajv');
const protobufjs = require('protobufjs');

const { safeStringify } = require('./utils');
const {
  DUMP_DEBUG_SCHEMA, DEBUG_SCHEMA_PATH, DEFAULT_SCHEMA_ID_PREFIX, DEFAULT_SCHEMA_ID_SUFFIX,
} = require('./constants');

const constructorConverters = require('./protoTypesConverters');

const recursive = (current, acc, currentNamespace, schemaIdPrefix, schemaIdSuffix) => {
  const convertFn = constructorConverters[current.constructor.name];
  const processNested = (nCurrent, nAcc, fns) => {
    if (nCurrent.fieldsArray) {
      nCurrent.fieldsArray.forEach((field) => {
        recursive(field, nAcc, fns, schemaIdPrefix, schemaIdSuffix);
      });
    }
    if (nCurrent.oneofsArray) {
      nCurrent.oneofsArray.forEach((oneof) => {
        recursive(oneof, nAcc, fns, schemaIdPrefix, schemaIdSuffix);
      });
    }
    if (nCurrent.methodsArray) {
      nCurrent.methodsArray.forEach((method) => {
        recursive(method, nAcc, fns, schemaIdPrefix, schemaIdSuffix);
      });
    }
    if (nCurrent.nestedArray) {
      nCurrent.nestedArray.forEach((nested) => {
        recursive(nested, nAcc, fns, schemaIdPrefix, schemaIdSuffix);
      });
    }
    return nAcc;
  };
  let namespace = currentNamespace;
  if (current.constructor.name === 'Namespace') {
    namespace = current.fullName.replace(/^\./, '');
  }
  if (['Namespace', 'Root', 'Type'].indexOf(current.constructor.name) !== -1) {
    if (convertFn) {
      const name = current.fullName.replace(`.${namespace}.`, '');
      acc[namespace] = acc[namespace] || {};
      acc[namespace][name] = convertFn(current, namespace, schemaIdPrefix, schemaIdSuffix);
    }
    // Dont save to acc
    processNested(current, acc, namespace, schemaIdPrefix, schemaIdSuffix);
  }
  return acc;
};


/*
  "$id": "https://example.com/xxx.schema.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
 */
const protoToSchema = (
  protoPaths,
  schemaIdPrefix = DEFAULT_SCHEMA_ID_PREFIX,
  schemaIdSuffix = DEFAULT_SCHEMA_ID_SUFFIX,
) => {
  const root = new protobufjs.Root();
  const protoSchema = (protobufjs.loadSync(protoPaths, root)).resolveAll();
  const definitions = recursive(protoSchema, {}, '', schemaIdPrefix, schemaIdSuffix);
  return Object.keys(definitions).map(k => ({
    $id: `${schemaIdPrefix}${k}${schemaIdSuffix}`,
    $schema: 'http://json-schema.org/draft-07/schema#',
    description: 'Automatically generated',
    // description: `Automatically generated from:\n${protoPaths.join('\n')}`,
    type: 'object',
    definitions: definitions[k],
  }));
};


const protoToValidator = (protoPath) => {
  if (DUMP_DEBUG_SCHEMA) {
    if (fs.existsSync(DEBUG_SCHEMA_PATH)) {
      fs.unlink(DEBUG_SCHEMA_PATH);
    }
  }
  fs.writeFileSync(DEBUG_SCHEMA_PATH, JSON.stringify(
    protoToSchema(protoPath),
    null, 2));
  // eslint-disable-next-line
  return new ajv({
    schemas: [
      // TODO(Ilya): Use to change version
      // require('ajv/lib/refs/json-schema-draft-07.json'),
      ...protoToSchema(protoPath).map(s => JSON.parse(safeStringify(s))),
    ],
  });
};

module.exports = { protoToValidator };
