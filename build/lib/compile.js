'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compile;

var _utils = require('./utils');

var _compiler = require('./compiler');

var _compiler2 = _interopRequireDefault(_compiler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compile(descriptor) {
  return (0, _utils.travel)(descriptor, function (name, description) {
    return (0, _utils.isFunction)(description) ? descriptor : _compiler2.default.parse(description);
  });
}