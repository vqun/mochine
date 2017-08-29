'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = string;

var _utils = require('../lib/utils');

var _int = require('./int');

var _int2 = _interopRequireDefault(_int);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// min: min length; max: max length
// 字符串
function string() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;

  if (isNaN(min = Number(min))) min = 0;
  if (isNaN(max = Number(max))) max = 12;
  var len = (0, _int2.default)(min, max);
  var strGen = function strGen() {
    var l = len();
    var s = (0, _utils.random)().toString(36).slice(2);
    var sl = s.length;
    return Array(Math.ceil(l / sl)).join(s) + s.slice(0, l % sl);
  };
  strGen.__name__ = 'string';
  strGen.toString = _utils.toNative;
  return strGen;
}