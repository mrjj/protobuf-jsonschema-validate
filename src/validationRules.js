const omit = require('lodash.omit');

module.exports = {// TODO SUPPORT FUNCTIONS
  const: (obj, x) => Object.assign(omit(obj, ['type']), { const: x }),
  map: {},
  message: {},
  repeated: {},
  any: {},
  duration: {},
  timestamp: {},
  seconds: {},
  disabled: {},
  defined_only: { additionalProperties: false },
  email: (obj, x) => x ? ({ ...obj, format: 'email', type: 'string' }) : obj,
  // const: the field must be exactly the specified value.
  // FIXME State x = 1 [(validate.rules).enum.const = 2];
  enum: {},
  gt_now: {}, // FIXME (v) => v > new Date(),
  gt: (obj, x) => (obj.items
    ? { ...obj, minItems: parseInt(x, 10) + 1 }
    : { ...obj, exclusiveMinimum: parseInt(x, 10) }),
  gte: (obj, x) => (obj.items
    ? { ...obj, minItems: parseInt(x, 10) }
    : { ...obj, minimum: parseInt(x, 10) }),
  hostname: (obj, x) => x ? ({ ...obj, format: 'hostname', type: 'string' }) : obj,
  in: (obj, x) => ({ ...obj, 'enum': JSON.parse(x) }), // FIXME
  ip: (obj, x) => (x ? {
    ...obj,
    oneOf: [
      { format: 'ipv4', type: 'string' },
      { format: 'ipv6', type: 'string' },
    ]
  } : obj),
  ipv4: (obj, x) => (x ? { ...obj, format: 'ipv4', type: 'string' } : obj),
  ipv6: (obj, x) => (x ? { ...obj, format: 'ipv6', type: 'string' } : obj),
  items: {}, //(obj, x) => ({ ...obj, type: 'array' }),//({ type: 'array', items: x }),
  len: (obj, x) => ({ ...obj, length: parseInt(x, 10) }),
  len_bytes: (obj, x) => ({ ...obj, length: parseInt(x, 10) }), // FIXME (v, $) => ArrayBuffer.from(v).length === $,
  lt_now: {}, // FIXME (v) => v > new Date(),
  lt: (obj, x) => (obj.items
    ? { ...obj, maxItems: parseInt(x, 10) - 1 }
    : { ...obj, exclusiveMaximum: parseInt(x, 10) }),
  lte: (obj, x) => (obj.items
    ? { ...obj, maxItems: parseInt(x, 10) }
    : { ...obj, maximum: parseInt(x, 10) }),
  max_bytes: (obj, x) => ({ ...obj, maxLength: parseInt(x, 10) }), // FIXME (v, $) => ArrayBuffer.from(v).length < $,
  max_items: (obj, x) => ({ ...obj, maxItems: parseInt(x, 10) }),
  max_len: (obj, x) => ({ ...obj, maxLength: parseInt(x, 10) }),
  max_pairs: (obj, x) => ({ ...obj, maxProperties: parseInt(x, 10) }), // FIXME
  min_bytes: (obj, x) => ({ ...obj, minLength: parseInt(x, 10) }), // FIXME (v, $) => ArrayBuffer.from(v).length < $,
  min_items: (obj, x) => ({ ...obj, minItems: parseInt(x, 10) }),
  min_len: (obj, x) => ({ ...obj, minLength: parseInt(x, 10) }),
  min_pairs: (obj, x) => ({ ...obj, minProperties: parseInt(x, 10) }), // FIXME
  /* FIXME { additionalProperties: { type: } }. Use patternProperties ?
  documentation: no_sparse: for map properties with message values,
  setting this rule to true disallows keys with unset values. */
  no_sparse: { additionalProperties: false },
  not_in: (obj, x) => ({ ...obj, not: { 'enum': JSON.parse(x) } }),
  pattern: (obj, x) => ({ ...obj, pattern: x.toString() }),
  contains: (obj, x) => ({ ...obj, pattern: x.toString() }),
  prefix: (obj, x) => ({ ...obj, 'pattern': `^${x}` }),
  // TODO(Ilya): `required` support
  required: (obj, x) => ({ ...obj }),
  skip: {}, // FIXME: make skip
  suffix: (obj, x) => Object.assign({}, obj, { 'pattern': `${x}$` }),
  unique: (obj, x) => ({ ...obj, uniqueItems: x }),
  uri: (obj, x) => x ? ({ ...obj, format: 'uri', type: 'string' }) : obj,
  uri_ref: (obj, x) => x ? ({ ...obj, format: 'uri-reference', type: 'string' }) : obj,
  // TODO(Ilya): add `keys` support: this rule specifies constraints that are applied to the keys in the field.
  keys: (obj, x) => ({ ...obj, additionalProperties: false }),
  // TODO(Ilya): add `values` support: this rule specifies constraints that are be applied to each value in the field.
  // Repeated message fields also have their validation rules applied unless skip is specified on this constraint.
  values: (obj, x) => ({ ...obj, additionalProperties: false }),
  within: {}, // FIXME
};
