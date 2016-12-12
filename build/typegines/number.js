'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = number;

var _utils = require('../lib/utils');

// 默认保留两位小数
function number() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  if (isNaN(min = Number(min))) min = 0;
  if (isNaN(max = Number(max))) max = 100;
  return function () {
    return +((max - min) * (0, _utils.random)() + min).toFixed(2);
  };
} // 数字