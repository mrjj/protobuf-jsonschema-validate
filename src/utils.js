const getName = fullName =>
  (fullName || '.').split('.').filter(p => p && p[0].match(/[A-Z]/)).join('.');

const getNs = fullName =>
  (fullName || '.').split('.').filter(p => p && p[0].match(/[a-z]/)).join('.');


const fullNameToRef = fullName =>
  `${getNs(fullName)}#/definitions/${getName(fullName)}`;

const isNil = val => (typeof val === 'undefined') || val === null;

const isNumber = val => typeof val === 'number';

module.exports = {
  isNil,
  isNumber,
  getName,
  getNs,
  fullNameToRef,
};
