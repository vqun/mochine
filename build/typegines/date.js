'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = date;

var _utils = require('../lib/utils');

var _int = require('./int');

var _int2 = _interopRequireDefault(_int);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 日期
var zeroize4 = function zeroize4(d) {
  return (0, _utils.zeroize)(d, 4);
};
var MethodMap = {
  Y: 'getFullYear',
  M: 'getMonth',
  D: 'getDate',
  H: 'getHours',
  I: 'getMinutes',
  S: 'getSeconds'
};

var DAY_30 = 30 * 24 * 60 * 60 * 1000;

function date(format, start, end) {
  var s = parse(start).getTime();
  var e = parse(end).getTime();
  var gen = (0, _int2.default)(0, e - s || DAY_30); // e === s, use 30 days
  if (typeof format !== 'string') {
    format = 'YYYY-MM-DD';
  } else {
    format = format.toUpperCase();
  }
  var dateGen = function dateGen() {
    var d = new Date(s + gen());
    return format.replace(/(Y|M|D|H|I|S)+/gi, function (m0, m1) {
      return zeroize4((m1 === 'M' ? 1 : 0) + d[MethodMap[m1]]()).slice(-m0.length);
    });
  };
  dateGen.__name__ = 'date';
  dateGen.toString = _utils.toNative;
  return dateGen;
}

var SEP = /\D+/gm;
var NAN = /^\D+|\D$/gm;

function parse(s) {
  if (typeof s !== 'string') return new Date();
  var info = s.replace(NAN, '').split(SEP);
  if (info.length < 1) return new Date();
  return new Date(+info[0], (+info[1] || 1) - 1, +info[2] || 1, +info[3] || 0, +info[4] || 0, +info[5] || 0);
}