'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bool;

var _utils = require('../lib/utils');

function bool() {
  var boolGen = function boolGen() {
    return (0, _utils.random)() >= 0.5;
  };
  boolGen.__name__ = 'boolean';
  boolGen.toString = _utils.toNative;
  return boolGen;
} // 布尔