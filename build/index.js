'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Mochine;

var _compile = require('./lib/compile');

var _compile2 = _interopRequireDefault(_compile);

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
  return (0, _compile2.default)(descriptor);
}

window.Mochine = Mochine;