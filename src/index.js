const path = require('path');

const ajv = require('ajv');
const protobufjs = require('protobufjs');

const constructorConverters = require('./protoTypesConverters');

const escapeUnquotedOptions = (str) =>
  (str || '').replace(/(\[[^=]+= *)([{\[][^;]*[\]}])(] *;)/ig, '$1\'$2\'$3');


const recursive = (current, acc) => {
  const convFn = constructorConverters[current.constructor.name];
  const processNested = (current, acc) => {
    if (current.fieldsArray) {
      current.fieldsArray.forEach(function (field) {
        recursive(field, acc);
      });
    }
    if (current.oneofsArray) {
      current.oneofsArray.forEach(function (oneof) {
        recursive(oneof, acc);
      });
    }
    if (current.methodsArray) {
      current.methodsArray.forEach(function (method) {
        recursive(method, acc);
      });
    }
    if (current.nestedArray) {
      current.nestedArray.forEach(function (nested) {
        recursive(nested, acc);
      });
    }
    return acc;
  };

  if (current.constructor.name === 'Namespace') {
    // Dont save to acc
    processNested(current, acc); //({ $id: current.fullName, definitions: processNested(current, {}) });
  } else if (current.constructor.name === 'Root') {
    processNested(current, acc);
  } else if (convFn) {
    const ns = current.fullName.split('.').slice(1, -1).join('.');
    acc[ns] = acc[ns] || {};
    acc[ns][current.name] = convFn(current);
  } else {
    throw new Error(`Cant process type: ${current.constructor.name} name: ${current.name}`);
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
  const definitions = recursive(protoSchema, {});
  return Object.keys(definitions).map(k => ({
    $id: k,
    $schema: 'http://json-schema.org/draft-07/schema#',
    description: `Automatically generated`,
    // description: `Automatically generated from:\n${protoPaths.join('\n')}`,
    type: 'object',
    definitions: definitions[k],
  }));
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
  // console.log(safeStringify(protoToSchema(protoPath, schemaId)));
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
