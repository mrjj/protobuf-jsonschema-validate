const TYPE_VALIDATORS = require('./protoScalarValidators');
const VALUE_VALIDATORS = require('./validationRules');
const omit = require('lodash.omit');
const cloneDeep = require('lodash.clonedeep');

const { fullNameToRef } = require('./utils');

const validators = { ...TYPE_VALIDATORS, ...VALUE_VALIDATORS };

const makeJsonSchemaObject = (obj) => {
  let result = {
    ...(obj.comment ? { $comment: obj.comment } : {}),
    ...(obj.default ? { default: obj.default } : {})
  };

  if (validators[obj.type]) {
    result = validators[obj.type](result);
  }
  Object.keys(obj.options || {}).forEach(option => {
    if (option.startsWith('(validate.rules)')) {
      const validatorStr = option.replace('(validate.rules).', '');
      const optValue = obj.options[option];
      if (validators[validatorStr]) {
        result = validators[validatorStr](cloneDeep(result), optValue);
      } else {
        const [typeValidator, ruleValidator, ...targetParts] = validatorStr.split('.');
        const target = (targetParts.length > 0) ? targetParts.join('.') : null;
        result = validators[typeValidator](cloneDeep(result), optValue, target);
        result = validators[ruleValidator](cloneDeep(result), optValue, target);
      }
    }
  });

  return result;
};

const Field = obj => {
  const item = makeJsonSchemaObject(obj);
  console.log(item);
  return (obj.repeated ? { type: 'array', ...(item ? ({ items: item }) : {}) } : item);
};

const Type = (obj, prefix) => {
  const properties = {};
  const required = [];
  (obj.fieldsArray || []).forEach(f => {
    const name = f.name.split('.').slice(-1)[0];
    properties[name] = Field(f);
    // $id: `${prefix ? `${prefix}.` : ''}${name}`
    if (
      (f.optional === false) ||
      (Object.keys(f.options || {}).filter(k => k.match(/\.required/g)).length > 0)
    ) {
      required.push(name);
    }
  });
  return {
    type: 'object',
    $id: `${prefix ? `${prefix}.` : ''}${obj.name}`,
    ...(required.length > 0 ? { required: required.sort() } : {}),
    ...(Object.keys(properties).length > 0 ? { properties } : {}),
    additionalProperties: false,
  };
  // return makeJsonSchemaObject(obj, schema);
};

const Enum = (obj, prefix) => makeJsonSchemaObject(
  obj,
  {
    $id: `${prefix ? `${prefix}.` : ''}${obj.name}`,
    oneOf: Object.keys(obj.values)
      .sort((a, b) => obj.values[b] - obj.values[a])
      .map(k => Object.assign(
        {
          $id: `${obj.values[k]}`,
          const: k,
        },
        obj.comments[k] ? { $comment: obj.comments[k] } : undefined),
      ),
    // Not using naive JSON schema `enum` field due to the lack of per-value `$id` and `comment`.
    // Example of naive implementation code:
    // `enum: Object.keys(obj.values).sort((a, b) => obj.values[b] - obj.values[a])`
  },
);

const Map = obj => makeJsonSchemaObject(obj, {
  type: 'object',
  $id: `${obj.name}`,
  additionalProperties: true,
});

module.exports = { Type, Enum, Map, Field };
