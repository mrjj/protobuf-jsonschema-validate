const TYPE_VALIDATORS = require('./protoScalarValidators');
const VALUE_VALIDATORS = require('./validationRules');

const validators = { ...TYPE_VALIDATORS, ...VALUE_VALIDATORS };
const FIELDS_MAP = {
  comment: '$comment',
  default: 'default',
};

const fullNameToRef = (fullName) => ({
  $ref: [
    `${(fullName || '.').split('.').slice(0, -1).join('.')}#`,
    'definitions',
    `${fullName.split('.').slice(-1)[0]}`,
  ].join('/')
});

// const fullNameToDefinition = (fullName) => (fullName || '.').split('.').join('.');
// const nameToDefinition = (name) => `#/definitions/${name}`;


const makeJsonSchemaObject = (obj, mixins) => {
  let result = {};
  Object.keys(FIELDS_MAP).forEach(k => {
    if (obj[k]) {
      result[FIELDS_MAP[k]] = obj[k];
    }
  });
  result = Object.assign(result, mixins || undefined);
  Object.keys(obj.options || {}).forEach(option => {
    if (option.startsWith('(validate.rules)')) {
      const validatorNames = option.replace('(validate.rules).', '').split('.');
      if (validatorNames.length > 0) {
        let validatorOptions = obj.options[option];
        validatorNames.forEach(validatorName => {
          const validator = validators[validatorName];
          if (typeof validator !== 'undefined') {
            if (typeof validator === 'string') {
              result = { ...result, [validator]: result };
              // Functions are replacing existing value with their output
            } else if (typeof validator === 'function') {
              result = validator(result, validatorOptions);
            } else if (typeof validator === 'object') {
              result = { ...result, ...validator };
            }
          } else {
            throw new Error(`Unknown type name: ${validatorName}`);
          }
        });
      }
    }
  });
  return result;
};

const Field = obj => {
  const item = makeJsonSchemaObject(
    obj,
    {
      ...(validators[obj.type] ? validators[obj.type] : fullNameToRef(obj.type)),
      $id: `${obj.id}`,
    },
  );
  return (obj.repeated ? { type: 'array', items: item } : item);
};

const Type = (obj) => {
  const properties = {};
  const required = [];
  (obj.fieldsArray || []).forEach(f => {
    const name = f.name.split('.').slice(-1)[0];
    properties[name] = Field(f);
    if (properties[name].required || (properties[name].optional === false)) {
      required.push(name);
    }
  });
  return makeJsonSchemaObject(obj, {
    type: 'object',
    $id: `${obj.name}`,
    ...(required.length > 0 ? { required: required.sort() } : undefined),
    properties,
    additionalProperties: false,
  });
};

const Enum = obj => makeJsonSchemaObject(
  obj,
  {
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
