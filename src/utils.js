const fs = require('fs');
const path = require('path');

const ajv = require('ajv');

const getName = fullName =>
  (fullName || '.').split('.').filter(p => p && p[0].match(/[A-Z]/)).join('.');

const getNs = fullName =>
  (fullName || '.').split('.').filter(p => p && p[0].match(/[a-z]/)).join('.');


const fullNameToRef = (fullName, schemaIdPrefix, schemaIdSuffix) =>
  `${schemaIdPrefix}${getNs(fullName)}${schemaIdSuffix}#/definitions/${getName(fullName)}`;

const isNil = val => (typeof val === 'undefined') || val === null;

const isNumber = val => typeof val === 'number';

const safeStringify = (obj) => {
  let product = [];
  const result = JSON.stringify(obj, (key, value) => {
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

const toStdout = (ajvSchema, pretty = true) => (
  pretty
    ? JSON.stringify(ajv.serialize(ajvSchema), null, 2)
    : JSON.stringify(ajv.serialize(ajvSchema))
);

// eslint-disable-next-line
const escapeUnquotedOptions = str =>
  (str || '').replace(/(\[[^=]+= *)([{[][^;]*[\]}])(] *;)/ig, '$1\'$2\'$3');


/**
 * Taken from https://github.com/szwacz/fs-jetpack/blob/master/lib/list.js
 * @param dirPath
 * @returns {*}
 */
const listSync = (dirPath) => {
  try {
    return fs.readdirSync(dirPath).map(fp => path.join(dirPath, fp));
  } catch (err) {
    if (err.code === 'ENOENT') {
      // Doesn't exist. Return undefined instead of throwing.
      return undefined;
    }
    throw err;
  }
};

/**
 * Recursively remove directory like `rm -rf`
 * Taken from: https://stackoverflow.com/a/32197381
 * @param dirPath {string} - path to remove
 */
const rmrf = (dirPath) => {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = `${path}/${file}`;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        rmrf(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dirPath);
  }
};

const mkdirP = (p, mode, f) => {
  const cb = f || (() => {});
  if (p.charAt(0) !== '/') {
    cb(`Relative path: ${p}`);
    return null;
  }

  const ps = path.normalize(p).split('/');
  const exists = fs.existsSync(p);
  if (exists) {
    cb(null);
  } else {
    mkdirP(ps.slice(0, -1).join('/'), mode, (err) => {
      if (err && err.errno !== process.EEXIST) {
        cb(err);
      } else {
        fs.mkdir(p, mode, cb);
      }
    });
  }
  return null;
};

// noinspection JSUnusedGlobalSymbols
module.exports = {
  fullNameToRef,
  getName,
  getNs,
  isNil,
  isNumber,
  listSync,
  mkdirP,
  rmrf,
  safeStringify,
  toStdout,
};
