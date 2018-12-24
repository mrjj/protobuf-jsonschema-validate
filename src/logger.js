/**
 * @fileOverview Logging wrapper
 */

const pino = require('pino');

const { DEFAULT_LOGGER_CONFIG } = require('./constants');

module.exports = (options = {}) => pino({
  ...(options || {}),
  ...DEFAULT_LOGGER_CONFIG,
});
