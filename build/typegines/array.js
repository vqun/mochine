'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = array;

var _utils = require('../lib/utils');

var _string = require('./string');

var _string2 = _interopRequireDefault(_string);

var _int = require('./int');

var _int2 = _interopRequireDefault(_int);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LengthGen = (0, _int2.default)(0, 10); // 数组
function array() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var gen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _string2.default)();

  if ((0, _utils.isFunction)(length)) {
    gen = length;
    length = -1;
  }
  if (!(0, _utils.isNumber)(length)) length = -1;
  if (!(0, _utils.isFunction)(gen)) gen = (0, _string2.default)();
  var arrGen = function arrGen() {
    var k = length;
    var ret = [];
    if (k === -1) k = LengthGen();
    while (k--) {
      ret.push(gen());
    }return ret;
  };
  arrGen.__name__ = 'array';
  arrGen.toString = _utils.toNative;
  return arrGen;
}