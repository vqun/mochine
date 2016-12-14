'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Typegines = undefined;
exports.default = Mochine;

var _mocker = require('./lib/mocker');

var _mocker2 = _interopRequireDefault(_mocker);

var _typegines = require('./typegines');

var _typegines2 = _interopRequireDefault(_typegines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// descriptor: 描述器
/* exp: 
 *  descriptor = {
 *    name: string(2, 10), // 2 <= string.length <= 10
 *    age: number(0, 100), // number in [0, 100]
 *    one: array(number(2, 10)), // array of number which is in [2, 10]
 *    anArray: array(10), // array.length = 10, string type[default]
 *    isGood: boolean(true), // boolean, default true
 *    birthday: date("2010-10-20")
 *  }
 */

function Mochine(descriptor) {
  return new _mocker2.default(descriptor);
}

exports.Typegines = _typegines2.default;