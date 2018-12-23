const path = require('path');
const fs = require('fs');

const ajv = require('ajv');
const protobufjs = require('protobufjs');
const { DUMP_DEBUG_SCHEMA, DEBUG_SCHEMA_PATH } = require('./consts');

const constructorConverters = require('./protoTypesConverters');

const escapeUnquotedOptions = (str) =>
  (str || '').replace(/(\[[^=]+= *)([{\[][^;]*[\]}])(] *;)/ig, '$1\'$2\'$3');

const recursive = (current, acc, currentNamespace) => {
  const convertFn = constructorConverters[current.constructor.name];
  const processNested = (current, acc, fns) => {
    if (current.fieldsArray) {
      current.fieldsArray.forEach(function (field) {
        recursive(field, acc, fns);
      });
    }
    if (current.oneofsArray) {
      current.oneofsArray.forEach(function (oneof) {
        recursive(oneof, acc, fns);
      });
    }
    if (current.methodsArray) {
      current.methodsArray.forEach(function (method) {
        recursive(method, acc, fns);
      });
    }
    if (current.nestedArray) {
      current.nestedArray.forEach(function (nested) {
        recursive(nested, acc, fns);
      });
    }
    return acc;
  };
  let namespace = currentNamespace;
  if (current.constructor.name === 'Namespace') {
    namespace = current.fullName.replace(/^\./, '');
  }
  if (['Namespace', 'Root', 'Type'].indexOf(current.constructor.name) !== -1) {
    if (convertFn) {
      const name = current.fullName.replace(`.${namespace}.`, '');
      acc[namespace] = acc[namespace] || {};
      acc[namespace][name] = convertFn(current, namespace);
    }
    // Dont save to acc
    processNested(current, acc, namespace); //({ $id: current.fullName, definitions: processNested(current, {}) });
  }
  return acc;
};

const protoToSchema = (protoPaths) => {
  const root = new protobufjs.Root();
  root.loadSync(path.join(__dirname, '..', 'node_modules/google-proto-files/google/protobuf/duration.proto'), {
    alternateCommentMode: true,
    keepCase: true
  });

  const protoSchema = (protobufjs.loadSync(protoPaths, root)).resolveAll();
  const definitions = recursive(protoSchema, {}, '');
  const result = Object.keys(definitions).map(k => ({
    $id: k,
    $schema: 'http://json-schema.org/draft-07/schema#',
    description: `Automatically generated`,
    // description: `Automatically generated from:\n${protoPaths.join('\n')}`,
    type: 'object',
    definitions: definitions[k],
  }));
  return result;
};

const safeStringify = (obj) => {
  let product = [];
  const result = JSON.stringify(obj, function (key, value) {
    if (typeof value === 'object' && value !== null) {
      if (product.indexOf(value) !== -1) {
        try {
          return JSON.parse(JSON.stringify(value));
        } catch (error) {
          return {};
        }
      }
      product.push(value);
    }
    return value;
  });
  product = null;
  return result;
};
const protoToValidator = (protoPath, schemaId) => {
  if (DUMP_DEBUG_SCHEMA) {
    if (fs.existsSync(DEBUG_SCHEMA_PATH)) {
      fs.unlink(DEBUG_SCHEMA_PATH);
    }
  }
  fs.writeFileSync(DEBUG_SCHEMA_PATH, JSON.stringify(protoToSchema(protoPath, schemaId), null, 2));
  return new ajv({
    schemas: [
      // TODO(Ilya): Use to change version
      // require('ajv/lib/refs/json-schema-draft-07.json'),
      ...protoToSchema(protoPath, schemaId).map(s => {
        return JSON.parse(safeStringify(s));
      }),
    ],
  });
};

const toStdout = (ajvSchema, pretty = true) => (
  pretty
    ? JSON.stringify(ajv.serialize(ajvSchema), null, 2)
    : JSON.stringify(ajv.serialize(ajvSchema))
);

module.exports = { protoToSchema, toStdout, protoToValidator, escapeUnquotedOptions };
