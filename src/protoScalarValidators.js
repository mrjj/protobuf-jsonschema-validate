/**
 * Taken from: https://github.com/devongovett/protobuf-jsonschema
 * https://github.com/devongovett/protobuf-jsonschema/blob/0ebe901ce6879c1c1233712a02ee1b0d780a2f70/types.js
 * @type {number}
 */
// eslint-disable-next-line
const MAX_SAFE_INT = Math.pow(2, 53) - 1;
const MIN_SAFE_INT = -MAX_SAFE_INT;
const MAX_INTEGER32 = 0x7fffffff;
const MIN_INTEGER32 = -0x80000000;

const isUndefined = x => typeof x === 'undefined';
module.exports = {
  bytes: obj => ({
    type: 'array',     // type: 'string'
    ...obj,
  }),
  string: obj => ({
    type: 'string',
    ...obj,
  }),
  bool: obj => ({
    type: 'boolean',
    ...obj,
  }),
  int32: obj => (isUndefined(obj.oneOf) ? {
    type: 'integer',
    ...(isUndefined(obj.minimum) && isUndefined(obj.exclusiveMinimum)
      ? { minimum: MIN_INTEGER32 } : {}),
    ...(isUndefined(obj.maximum) && isUndefined(obj.exclusiveMaximum)
      ? { maximum: MAX_INTEGER32 } : {}),
    ...obj,
  } : { ...obj }),
  sint32: obj => (isUndefined(obj.oneOf)
    ? {
      type: 'integer',
      ...(isUndefined(obj.minimum) && isUndefined(obj.exclusiveMinimum)
        ? { minimum: MIN_INTEGER32 } : {}),
      ...(isUndefined(obj.maximum) && isUndefined(obj.exclusiveMaximum)
        ? { maximum: MAX_INTEGER32 } : {}),
      ...obj,
    } : { ...obj }),
  uint32: obj => (isUndefined(obj.oneOf)
    ? {
      type: 'integer',
      ...(isUndefined(obj.minimum) && isUndefined(obj.exclusiveMinimum)
        ? { minimum: 0 } : {}),
      ...(isUndefined(obj.maximum) && isUndefined(obj.exclusiveMaximum)
        ? { maximum: MAX_INTEGER32 } : {}),
      ...obj,
    } : { ...obj }),
  int64: obj => (isUndefined(obj.oneOf)
    ? {
      type: 'integer',
      ...(isUndefined(obj.minimum) && isUndefined(obj.exclusiveMinimum)
        ? { minimum: MIN_SAFE_INT } : {}),
      ...(isUndefined(obj.maximum) && isUndefined(obj.exclusiveMaximum)
        ? { maximum: MAX_SAFE_INT } : {}),
      ...obj,
    } : { ...obj }),
  sint64: obj => (isUndefined(obj.oneOf)
    ? {
      type: 'integer',
      ...(isUndefined(obj.minimum) && isUndefined(obj.exclusiveMinimum)
        ? { minimum: MIN_SAFE_INT } : {}),
      ...(isUndefined(obj.maximum) && isUndefined(obj.exclusiveMaximum)
        ? { maximum: MAX_SAFE_INT } : {}),
      ...obj,
    } : { ...obj }),
  uint64: obj => (isUndefined(obj.oneOf)
    ? {
      type: 'integer',
      ...(isUndefined(obj.minimum) && isUndefined(obj.exclusiveMinimum)
        ? { minimum: 0 } : {}),
      ...(isUndefined(obj.maximum) && isUndefined(obj.exclusiveMaximum)
        ? { maximum: MAX_SAFE_INT } : {}),
      ...obj,
    } : { ...obj }),
  fixed32: obj => (isUndefined(obj.oneOf) ? { type: 'number', ...obj } : { ...obj }),
  fixed64: obj => (isUndefined(obj.oneOf) ? { type: 'number', ...obj } : { ...obj }),
  sfixed32: obj => (isUndefined(obj.oneOf) ? { type: 'number', ...obj } : { ...obj }),
  sfixed64: obj => (isUndefined(obj.oneOf) ? { type: 'number', ...obj } : { ...obj }),
  float: obj => (isUndefined(obj.oneOf) ? { type: 'number', ...obj } : { ...obj }),
  double: obj => (isUndefined(obj.oneOf) ? { type: 'number', ...obj } : { ...obj }),
};
