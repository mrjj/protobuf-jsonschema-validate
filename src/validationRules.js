const omit = require('lodash.omit');
const pick = require('lodash.pick');
const get = require('lodash.get');
const set = require('lodash.set');
const cloneDeep = require('lodash.clonedeep');

const { isNumber } = require('./utils');

const isUndefined = x => typeof x === 'undefined';

const compParams = {
  min: { // g
    inclusive: { // gte
      simple: 'minimum',
      array: val => ({ minItems: val + 1 }),
      singleRange: (obj, val) =>
        (isUndefined(obj.maximum) || (obj.maximum >= val)) &&
        (isUndefined(obj.exclusiveMaximum) || (obj.exclusiveMaximum >= val)),
    },
    exclusive: { // gt
      simple: 'exclusiveMinimum',
      array: val => ({ minItems: val }),
      singleRange: (obj, val) =>
        (isUndefined(obj.maximum) || (obj.maximum >= val)) &&
        (isUndefined(obj.exclusiveMaximum) || (obj.exclusiveMaximum >= val)),
    },
  },
  max: { // l
    inclusive: { // lte
      simple: 'maximum',
      array: val => ({ maxItems: val - 1 }),
      singleRange: (obj, val) =>
        (isUndefined(obj.minimum) || (obj.minimum <= val)) &&
        (isUndefined(obj.exclusiveMinimum) || (obj.exclusiveMinimum <= val)),
    },
    exclusive: { // lt
      simple: 'exclusiveMaximum',
      array: val => ({ maxItems: val }),
      singleRange: (obj, val) =>
        (isUndefined(obj.minimum) || (obj.minimum <= val)) &&
        (isUndefined(obj.exclusiveMinimum) || (obj.exclusiveMinimum <= val)),
    },
  },
};

const makeComparison = (side = 'min', tail = 'inclusive') => {
  const otherSide = (side === 'min') ? 'max' : 'min';
  return (o, x, target) => {
    const obj = cloneDeep(target ? get(o, ['properties', target], {}) : o);

    if (!isNumber(x)) {
      return obj;
    }
    const val = parseInt(x, 10);

    const cleanObj = omit(obj, [
      compParams[side].inclusive.simple,
      compParams[side].exclusive.simple,
    ]);
    if (obj.items) {
      return { ...cleanObj, type: 'array', ...compParams[side].array };
    }

    const condition = { ...cleanObj, [compParams[side][tail].simple]: val };

    if (compParams[side][tail].singleRange(obj, val)) {
      return target ? {
        type: 'object',
        required: obj.required,
        ...pick(obj, ['required']),
        properties: { [target]: condition },
      } : condition;
    }
    const excludedRange = {
      oneOf: [
        cleanObj,
        omit(condition, [
          compParams[otherSide].inclusive.simple,
          compParams[otherSide].exclusive.simple,
        ]),
      ],
    };
    return target ? {
      type: 'object',
      ...pick(obj, ['required']),
      // required: [target],
      properties: { [target]: excludedRange },
    } : excludedRange;
  };
};

// noinspection JSUnusedGlobalSymbols
module.exports = {// TODO SUPPORT FUNCTIONS
  const: (obj, x, target) => {
    const condition = { const: x, additionalProperties: false };
    return target
      ? set(
        obj,
        ['properties', target],
        { ...get(obj, ['properties', target], {}), ...condition },
      )
      : { ...obj, ...condition };
  },
  map: obj => obj,
  message: obj => obj,
  repeated: obj => obj,
  duration: obj => obj,
  timestamp: obj => (obj.properties ? cloneDeep(obj) : ({
    // ...obj,
    type: 'object',
    properties: {
      seconds: {
        type: 'number',
      },
      nanos: {
        type: 'number',
        default: 0,
      },
    },
    // fromtimestamplvl1: true,
    additionalProperties: false,
    required: ['seconds', 'nanos'],
  })),
  disabled: obj => obj,
  defined_only: obj => ({ ...obj, additionalProperties: false }),
  email: (obj, x) => (x ? ({ ...obj, format: 'email', type: 'string' }) : obj),
  // const: the field must be exactly the specified value.
  // FIXME State x = 1 [(validate.rules).enum.const = 2];
  enum: obj => obj,
  gt_now: obj => obj, // FIXME (v) => v > new Date(),

  gt: makeComparison('min', 'exclusive'),
  gte: makeComparison('min', 'inclusive'),
  lt: makeComparison('max', 'exclusive'),
  lte: makeComparison('max', 'inclusive'),

  hostname: (obj, x) => (x ? ({ ...obj, format: 'hostname', type: 'string' }) : obj),
  in: (obj, x) => ({ ...obj, enum: JSON.parse(x) }), // FIXME
  ip: (obj, x) => (x ? {
    ...obj,
    oneOf: [
      { format: 'ipv4', type: 'string' },
      { format: 'ipv6', type: 'string' },
    ],
  } : obj),
  ipv4: (obj, x) => (x ? { ...obj, format: 'ipv4', type: 'string' } : obj),
  ipv6: (obj, x) => (x ? { ...obj, format: 'ipv6', type: 'string' } : obj),
  items: obj => obj, // (obj, x) => ({ ...obj, type: 'array' }),//({ type: 'array', items: x }),
  len: (obj, x) => ({ ...obj, minLength: parseInt(x, 10), maxLength: parseInt(x, 10) }),
  len_bytes: (obj, x) => ({  // FIXME (v, $) => ArrayBuffer.from(v).length === $
    ...obj, minLength: parseInt(x, 10), maxLength: parseInt(x, 10),
  }),
  lt_now: obj => obj, // FIXME (v) => v > new Date(),
  max_bytes: (obj, x) => ({ // FIXME (v, $) => ArrayBuffer.from(v).length < $,
    ...obj, maxLength: parseInt(x, 10),
  }),
  max_items: (obj, x) => ({ ...obj, maxItems: parseInt(x, 10) }),
  max_len: (obj, x) => ({ ...obj, maxLength: parseInt(x, 10) }),
  max_pairs: (obj, x) => ({ ...obj, maxProperties: parseInt(x, 10) }), // FIXME
  min_bytes: (obj, x) => ({ // FIXME (v, $) => ArrayBuffer.from(v).length < $,
    ...obj, minLength: parseInt(x, 10),
  }),
  min_items: (obj, x) => ({ ...obj, minItems: parseInt(x, 10) }),
  min_len: (obj, x) => ({ ...obj, minLength: parseInt(x, 10) }),
  min_pairs: (obj, x) => ({ ...obj, minProperties: parseInt(x, 10) }), // FIXME
  /* FIXME { additionalProperties: { type: } }. Use patternProperties ?
  documentation: no_sparse: for map properties with message values,
  setting this rule to true disallows keys with unset values. */
  no_sparse: obj => ({ ...obj, additionalProperties: false }),
  not_in: (obj, x) => ({ ...obj, not: { enum: JSON.parse(x) } }),
  pattern: (obj, x) => ({ ...obj, pattern: x.toString() }),
  contains: (obj, x) => ({ ...obj, pattern: x.toString() }),
  prefix: (obj, x) => ({ ...obj, pattern: `^${x}` }),
  // TODO(Ilya): `required` support
  required: obj => obj,
  skip: obj => obj, // FIXME: make skip
  suffix: (obj, x) => Object.assign({}, obj, { pattern: `${x}$` }),
  unique: (obj, x) => ({ ...obj, uniqueItems: x }),
  uri: (obj, x) => (x ? ({ ...obj, format: 'uri', type: 'string' }) : obj),
  uri_ref: (obj, x) => (x ? ({ ...obj, format: 'uri-reference', type: 'string' }) : obj),
  // TODO(Ilya): add `keys` support: this rule specifies constraints that are
  // applied to the keys in the field.
  keys: obj => ({ ...obj, additionalProperties: false }),
  // TODO(Ilya): add `values` support: this rule specifies constraints that are
  // be applied to each value in the field.
  // Repeated message fields also have their validation rules applied unless
  // skip is specified on this constraint.
  values: obj => ({ ...obj, additionalProperties: false }),
  within: obj => obj, // FIXME
  any: obj => obj,
  'any.in': (obj, x) => {
    const val = (typeof x === 'string') ? JSON.parse(x)
      .map(v => ({ $ref: v })) : [x];
    return isUndefined(obj.anyOf) ? {
      anyOf: [...val],
    } : { anyOf: [...obj.anyOf, ...val] };
  },
  'any.not_in': (obj, x) => {
    const val = (typeof x === 'string') ? JSON.parse(x)
      .map(v => ({ $ref: v })) : [x];
    return isUndefined(obj.not) ? {
      not: { anyOf: [...val] },
    } : { not: { anyOf: [...obj.anyOf, ...val] } };
  },
};
