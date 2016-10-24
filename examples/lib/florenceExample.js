'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('../../es6/occam-lexers'),
    FlorenceLexer = lexers.FlorenceLexer;

var Preprocessor = require('../../es6/preprocessor');

var Example = require('./example');

var grammar = require('../../es6/grammar/gallina');

var terminalSymbolsRegExpPattern = FlorenceLexer.terminalSymbolsRegExpPattern();

var FlorenceExample = function (_Example) {
  _inherits(FlorenceExample, _Example);

  function FlorenceExample() {
    _classCallCheck(this, FlorenceExample);

    var preprocessor = new Preprocessor();

    return _possibleConstructorReturn(this, (FlorenceExample.__proto__ || Object.getPrototypeOf(FlorenceExample)).call(this, FlorenceLexer, preprocessor));
  }

  _createClass(FlorenceExample, [{
    key: 'run',
    value: function run() {
      _get(FlorenceExample.prototype.__proto__ || Object.getPrototypeOf(FlorenceExample.prototype), 'setGrammar', this).call(this, grammar);

      _get(FlorenceExample.prototype.__proto__ || Object.getPrototypeOf(FlorenceExample.prototype), 'setTerminalSymbolsRegExpPattern', this).call(this, terminalSymbolsRegExpPattern);

      _get(FlorenceExample.prototype.__proto__ || Object.getPrototypeOf(FlorenceExample.prototype), 'run', this).call(this);
    }
  }]);

  return FlorenceExample;
}(Example);

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mbG9yZW5jZUV4YW1wbGUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkZsb3JlbmNlTGV4ZXIiLCJQcmVwcm9jZXNzb3IiLCJFeGFtcGxlIiwiZ3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJGbG9yZW5jZUV4YW1wbGUiLCJwcmVwcm9jZXNzb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSx3QkFBUixDQUFiO0FBQUEsSUFDSUMsZ0JBQWdCRixPQUFPRSxhQUQzQjs7QUFHQSxJQUFJQyxlQUFlRixRQUFTLHdCQUFULENBQW5COztBQUVBLElBQUlHLFVBQVVILFFBQVEsV0FBUixDQUFkOztBQUVBLElBQUlJLFVBQVVKLFFBQVMsMkJBQVQsQ0FBZDs7QUFFQSxJQUFJSywrQkFBK0JKLGNBQWNJLDRCQUFkLEVBQW5DOztJQUVNQyxlOzs7QUFDSiw2QkFBYztBQUFBOztBQUNaLFFBQUlDLGVBQWUsSUFBSUwsWUFBSixFQUFuQjs7QUFEWSw2SEFHTkQsYUFITSxFQUdTTSxZQUhUO0FBSWI7Ozs7MEJBRUs7QUFDSixtSUFBaUJILE9BQWpCOztBQUVBLHdKQUFzQ0MsNEJBQXRDOztBQUVBO0FBQ0Q7Ozs7RUFiMkJGLE87O0FBZ0I5QkssT0FBT0MsT0FBUCxHQUFpQkgsZUFBakIiLCJmaWxlIjoiZmxvcmVuY2VFeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnLi4vLi4vZXM2L29jY2FtLWxleGVycycpLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSBsZXhlcnMuRmxvcmVuY2VMZXhlcjtcblxudmFyIFByZXByb2Nlc3NvciA9IHJlcXVpcmUgKCcuLi8uLi9lczYvcHJlcHJvY2Vzc29yJyk7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlJyk7XG5cbnZhciBncmFtbWFyID0gcmVxdWlyZSAoJy4uLy4uL2VzNi9ncmFtbWFyL2dhbGxpbmEnKTtcblxudmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBGbG9yZW5jZUxleGVyLnRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oKTtcblxuY2xhc3MgRmxvcmVuY2VFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHZhciBwcmVwcm9jZXNzb3IgPSBuZXcgUHJlcHJvY2Vzc29yKCk7XG5cbiAgICBzdXBlcihGbG9yZW5jZUxleGVyLCBwcmVwcm9jZXNzb3IpO1xuICB9XG5cbiAgcnVuKCkge1xuICAgIHN1cGVyLnNldEdyYW1tYXIoZ3JhbW1hcik7XG5cbiAgICBzdXBlci5zZXRUZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4pO1xuXG4gICAgc3VwZXIucnVuKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUV4YW1wbGU7XG4iXX0=