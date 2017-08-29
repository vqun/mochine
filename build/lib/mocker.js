'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _compiler = require('./compiler');

var _compiler2 = _interopRequireDefault(_compiler);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var run = function run(o) {
  return travel(o, function (name, gen) {
    return (0, _utils.isFunction)(gen) ? gen() : gen;
  });
};

var Mocker = function () {
  function Mocker(descriptor) {
    _classCallCheck(this, Mocker);

    this.descriptor = descriptor;
    this.runner = Runner(descriptor);
    this.parse();
    return this.runner;
  }

  _createClass(Mocker, [{
    key: 'parse',
    value: function parse() {
      var o = this.descriptor;
      var runner = this.runner;
      if ((0, _utils.isPlainObject)(o) || (0, _utils.isArray)(o)) {
        (0, _utils.isArray)(o) && (runner.__length__ = o.length);
        for (var k in o) {
          if (o.hasOwnProperty(k)) {
            // 如果已经存在，则使其可写，覆盖之
            // 像name这种，function的name是不可写的，必须重新定义
            if (runner.hasOwnProperty(k) && Object.defineProperty) Object.defineProperty(runner, k, { writable: true });
            var ok = o[k];
            runner[k] = new this.constructor(ok);
          }
        }
      }
    }
  }]);

  return Mocker;
}();

exports.default = Mocker;


function Runner(descriptor) {
  if ((0, _utils.isString)(descriptor)) {
    return _compiler2.default.parse(descriptor);
  }
  if ((0, _utils.isFunction)(descriptor)) return descriptor;
  var runner = function runner() {
    return run(runner);
  };
  return runner;
}

function travel(o) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (name, value) {
    return value;
  };

  var ret = {};
  for (var k in o) {
    if (o.hasOwnProperty(k)) {
      if (k === '__length__') {
        ret.length = o[k];
      } else {
        ret[k] = fn(k, o[k]);
      }
    }
  }
  return typeof ret.length !== 'undefined' ? (0, _utils.arrayFrom)(ret) : ret;
}