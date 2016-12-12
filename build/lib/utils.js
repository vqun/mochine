'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zeroize = zeroize;
exports.is = is;
exports.travel = travel;
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

var keys = exports.keys = isFunction(Object.keys) ? Object.keys : function (o) {
  var kis = [];
  if (isArray(o)) {
    var k = o.length;
    while (k--) {
      kis.unshift(k);
    }
  } else {
    for (var _k in o) {
      o.hasOwnProperty(_k) && kis.push(_k);
    }
  }
  return kis;
};

function travel(o) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (name, value) {
    return value;
  };

  if (isPlainObject(o)) {
    var ret = {};
    for (var k in o) {
      if (o.hasOwnProperty(k)) {
        var ok = o[k];
        ret[k] = travel(ok, fn);
      }
    }
    return ret;
  }
  if (isArray(o)) {
    var _ret = [];
    for (var _k2 = o.length; _k2--;) {
      var _ok = o[_k2];
      _ret.unshift(travel(_ok, fn));
    }
    return _ret;
  }
  return fn(o.name || 'undefined', o);
}