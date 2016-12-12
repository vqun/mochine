'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = int;

var _number = require('./number');

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var floor = Math.floor; // 整型
function int(min, max) {
  var n = (0, _number2.default)(min, max);
  return function () {
    return floor(n());
  };
}