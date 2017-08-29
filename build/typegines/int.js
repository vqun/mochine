'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = int;

var _utils = require('../lib/utils');

var _number = require('./number');

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 整型
var floor = Math.floor;

function int(min, max) {
  var n = (0, _number2.default)(min, max);
  var intGen = function intGen() {
    return floor(n());
  };
  intGen.__name__ = 'int';
  intGen.toString = _utils.toNative;
  return intGen;
}