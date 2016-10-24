'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('../../es6/occam-lexers'),
    GallinaLexer = lexers.GallinaLexer;

var Example = require('./example');

var grammar = require('../../es6/grammar/gallina');

var terminalSymbolsRegExpPattern = GallinaLexer.terminalSymbolsRegExpPattern();

var GallinaExample = function (_Example) {
  _inherits(GallinaExample, _Example);

  function GallinaExample() {
    _classCallCheck(this, GallinaExample);

    var preprocessor = null;

    return _possibleConstructorReturn(this, (GallinaExample.__proto__ || Object.getPrototypeOf(GallinaExample)).call(this, GallinaLexer, preprocessor));
  }

  _createClass(GallinaExample, [{
    key: 'run',
    value: function run() {
      _get(GallinaExample.prototype.__proto__ || Object.getPrototypeOf(GallinaExample.prototype), 'setGrammar', this).call(this, grammar);

      _get(GallinaExample.prototype.__proto__ || Object.getPrototypeOf(GallinaExample.prototype), 'setTerminalSymbolsRegExpPattern', this).call(this, terminalSymbolsRegExpPattern);

      _get(GallinaExample.prototype.__proto__ || Object.getPrototypeOf(GallinaExample.prototype), 'run', this).call(this);
    }
  }]);

  return GallinaExample;
}(Example);

module.exports = GallinaExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9nYWxsaW5hRXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiR2FsbGluYUxleGVyIiwiRXhhbXBsZSIsImdyYW1tYXIiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwiR2FsbGluYUV4YW1wbGUiLCJwcmVwcm9jZXNzb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSx3QkFBUixDQUFiO0FBQUEsSUFDSUMsZUFBZUYsT0FBT0UsWUFEMUI7O0FBR0EsSUFBSUMsVUFBVUYsUUFBUSxXQUFSLENBQWQ7O0FBRUEsSUFBSUcsVUFBVUgsUUFBUywyQkFBVCxDQUFkOztBQUVBLElBQUlJLCtCQUErQkgsYUFBYUcsNEJBQWIsRUFBbkM7O0lBRU1DLGM7OztBQUNKLDRCQUFjO0FBQUE7O0FBQ1osUUFBSUMsZUFBZSxJQUFuQjs7QUFEWSwySEFHTkwsWUFITSxFQUdRSyxZQUhSO0FBSWI7Ozs7MEJBRUs7QUFDSixpSUFBaUJILE9BQWpCOztBQUVBLHNKQUFzQ0MsNEJBQXRDOztBQUVBO0FBQ0Q7Ozs7RUFiMEJGLE87O0FBZ0I3QkssT0FBT0MsT0FBUCxHQUFpQkgsY0FBakIiLCJmaWxlIjoiZ2FsbGluYUV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCcuLi8uLi9lczYvb2NjYW0tbGV4ZXJzJyksXG4gICAgR2FsbGluYUxleGVyID0gbGV4ZXJzLkdhbGxpbmFMZXhlcjtcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuL2V4YW1wbGUnKTtcblxudmFyIGdyYW1tYXIgPSByZXF1aXJlICgnLi4vLi4vZXM2L2dyYW1tYXIvZ2FsbGluYScpO1xuXG52YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IEdhbGxpbmFMZXhlci50ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKCk7XG5cbmNsYXNzIEdhbGxpbmFFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHZhciBwcmVwcm9jZXNzb3IgPSBudWxsO1xuXG4gICAgc3VwZXIoR2FsbGluYUxleGVyLCBwcmVwcm9jZXNzb3IpO1xuICB9XG5cbiAgcnVuKCkge1xuICAgIHN1cGVyLnNldEdyYW1tYXIoZ3JhbW1hcik7XG5cbiAgICBzdXBlci5zZXRUZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4pO1xuXG4gICAgc3VwZXIucnVuKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYWxsaW5hRXhhbXBsZTtcbiJdfQ==