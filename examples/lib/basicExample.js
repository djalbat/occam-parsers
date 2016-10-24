'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('../../es6/occam-lexers'),
    BasicLexer = lexers.BasicLexer;

var Preprocessor = require('../../es6/preprocessor');

var Example = require('./example');

var grammar = '\n\n  expr                       ::= term operatorThenTerm*\n  \n  operatorThenTerm           ::= operator term\n  \n  operator                   ::= + | - | * | /\n  \n  term                       ::= naturalNumber\n  \n                               | parenthesizedExpr\n  \n  naturalNumber              ::= /d+/\n  \n  parenthesizedExpr          ::= ( expr )\n\n';

var terminalSymbolsRegExpPattern = '\\+|\\-|\\*|\\/|\\(|\\)|\\d+';

var BasicExample = function (_Example) {
  _inherits(BasicExample, _Example);

  function BasicExample() {
    _classCallCheck(this, BasicExample);

    var preprocessor = new Preprocessor();

    return _possibleConstructorReturn(this, (BasicExample.__proto__ || Object.getPrototypeOf(BasicExample)).call(this, BasicLexer, preprocessor, grammar, terminalSymbolsRegExpPattern));
  }

  _createClass(BasicExample, [{
    key: 'run',
    value: function run() {
      _get(BasicExample.prototype.__proto__ || Object.getPrototypeOf(BasicExample.prototype), 'setGrammar', this).call(this, grammar);

      _get(BasicExample.prototype.__proto__ || Object.getPrototypeOf(BasicExample.prototype), 'setTerminalSymbolsRegExpPattern', this).call(this, terminalSymbolsRegExpPattern);

      _get(BasicExample.prototype.__proto__ || Object.getPrototypeOf(BasicExample.prototype), 'run', this).call(this);
    }
  }]);

  return BasicExample;
}(Example);

module.exports = BasicExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9iYXNpY0V4YW1wbGUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJhc2ljTGV4ZXIiLCJQcmVwcm9jZXNzb3IiLCJFeGFtcGxlIiwiZ3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJCYXNpY0V4YW1wbGUiLCJwcmVwcm9jZXNzb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSx3QkFBUixDQUFiO0FBQUEsSUFDSUMsYUFBYUYsT0FBT0UsVUFEeEI7O0FBR0EsSUFBSUMsZUFBZUYsUUFBUyx3QkFBVCxDQUFuQjs7QUFFQSxJQUFJRyxVQUFVSCxRQUFRLFdBQVIsQ0FBZDs7QUFFQSxJQUFJSSx5WEFBSjs7QUFrQkEsSUFBSUMsNkRBQUo7O0lBRU1DLFk7OztBQUNKLDBCQUFjO0FBQUE7O0FBQ1osUUFBSUMsZUFBZSxJQUFJTCxZQUFKLEVBQW5COztBQURZLHVIQUdORCxVQUhNLEVBR01NLFlBSE4sRUFHb0JILE9BSHBCLEVBRzZCQyw0QkFIN0I7QUFJYjs7OzswQkFFSztBQUNKLDZIQUFpQkQsT0FBakI7O0FBRUEsa0pBQXNDQyw0QkFBdEM7O0FBRUE7QUFDRDs7OztFQWJ3QkYsTzs7QUFnQjNCSyxPQUFPQyxPQUFQLEdBQWlCSCxZQUFqQiIsImZpbGUiOiJiYXNpY0V4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCcuLi8uLi9lczYvb2NjYW0tbGV4ZXJzJyksXG4gICAgQmFzaWNMZXhlciA9IGxleGVycy5CYXNpY0xleGVyO1xuXG52YXIgUHJlcHJvY2Vzc29yID0gcmVxdWlyZSAoJy4uLy4uL2VzNi9wcmVwcm9jZXNzb3InKTtcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuL2V4YW1wbGUnKTtcblxudmFyIGdyYW1tYXIgPSBgXG5cbiAgZXhwciAgICAgICAgICAgICAgICAgICAgICAgOjo9IHRlcm0gb3BlcmF0b3JUaGVuVGVybSpcbiAgXG4gIG9wZXJhdG9yVGhlblRlcm0gICAgICAgICAgIDo6PSBvcGVyYXRvciB0ZXJtXG4gIFxuICBvcGVyYXRvciAgICAgICAgICAgICAgICAgICA6Oj0gKyB8IC0gfCAqIHwgL1xuICBcbiAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgOjo9IG5hdHVyYWxOdW1iZXJcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwYXJlbnRoZXNpemVkRXhwclxuICBcbiAgbmF0dXJhbE51bWJlciAgICAgICAgICAgICAgOjo9IC9cXGQrL1xuICBcbiAgcGFyZW50aGVzaXplZEV4cHIgICAgICAgICAgOjo9ICggZXhwciApXG5cbmA7XG5cbnZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gYFxcXFwrfFxcXFwtfFxcXFwqfFxcXFwvfFxcXFwofFxcXFwpfFxcXFxkK2A7XG5cbmNsYXNzIEJhc2ljRXhhbXBsZSBleHRlbmRzIEV4YW1wbGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB2YXIgcHJlcHJvY2Vzc29yID0gbmV3IFByZXByb2Nlc3NvcigpO1xuICAgIFxuICAgIHN1cGVyKEJhc2ljTGV4ZXIsIHByZXByb2Nlc3NvciwgZ3JhbW1hciwgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybik7XG4gIH1cbiAgXG4gIHJ1bigpIHtcbiAgICBzdXBlci5zZXRHcmFtbWFyKGdyYW1tYXIpO1xuICAgIFxuICAgIHN1cGVyLnNldFRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4odGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybik7XG4gICAgXG4gICAgc3VwZXIucnVuKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG4iXX0=