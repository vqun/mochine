'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zeroize = zeroize;
exports.is = is;
exports.arrayFrom = arrayFrom;
exports.toNative = toNative;
// see https://github.com/vqun/Vtils/blob/master/utils.js

var toString = Object.prototype.toString;

var random = exports.random = Math.random;

function zeroize(d) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  var zeroes = new Array(digits).join('0');
  return (zeroes + d).slice(-digits);
}

function is(o) {
  return toString.call(o).slice(8, -1).toLowerCase();
}

var isArray = exports.isArray = typeof Array.isArray === 'function' ? Array.isArray : function (arr) {
  return is(arr) === 'array';
};

var isNumber = exports.isNumber = function isNumber(n) {
  return is(n) === 'number';
};

var isFunction = exports.isFunction = function isFunction(fn) {
  return is(fn) === 'function';
};

var isPlainObject = exports.isPlainObject = function isPlainObject(o) {
  return is(o) === 'object';
};

var isString = exports.isString = function isString(s) {
  return is(s) === 'string';
};

var slice = Array.slice;
function arrayFrom(arrLike) {
  if (!('length' in arrLike)) {
    return [];
  }
  if ('from' in Array) {
    return Array.from(arrLike);
  }
  return slice.call(arrLike);
}

function toNative() {
  return this.__name__ + '() { [native code] }';
}