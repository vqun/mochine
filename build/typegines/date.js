'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = date;

var _utils = require('../lib/utils');

var zeroize4 = function zeroize4(d) {
  return (0, _utils.zeroize)(d, 4);
}; // 日期

var MethodMap = {
  Y: 'getFullYear',
  M: 'getMonth',
  D: 'getDate',
  H: 'getHours',
  I: 'getMinutes',
  S: 'getSeconds'
};

function date(format) {
  if (typeof format !== 'string') {
    format = 'YYYY-MM-DD';
  } else {
    format = format.toUpperCase();
  }
  var now = new Date();
  return function () {
    return format.replace(/(Y|M|D|H|I|S)+/gi, function (m0, m1) {
      return zeroize4(now[MethodMap[m1]]()).slice(-m0.length);
    });
  };
}