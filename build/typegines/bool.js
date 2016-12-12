'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bool;

var _utils = require('../lib/utils');

function bool() {
  return function () {
    return (0, _utils.random)() >= 0.5;
  };
} // 布尔