'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (e) {
  var data = null;
  try {
    data = JSON.parse(e);
    if (!(0, _utils.isArray)(data)) throw 'not array';
  } catch (e) {
    data = [].concat(Array.prototype.slice.call(arguments));
  }
  var g = (0, _int2.default)(0, data.length);
  var enumGen = function enumGen() {
    return data[g()];
  };
  enumGen.__name__ = 'enum';
  enumGen.toString = _utils.toNative;
  return enumGen;
};

var _utils = require('../lib/utils');

var _int = require('./int');

var _int2 = _interopRequireDefault(_int);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }