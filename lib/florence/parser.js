'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var bnf = require('./bnf'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    defaultCustomGrammarBNF = require('./defaultCustomGrammarBNF');

var BNFLexer = lexers.BNFLexer;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing();

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromBNF',
    value: function fromBNF(bnf) {
      bnf = '' + bnf + defaultCustomGrammarBNF; ///

      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          florenceParser = new FlorenceParser(rules);

      return florenceParser;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var florenceParser = FlorenceParser.fromBNF(bnf);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

Object.assign(FlorenceParser, {
  bnf: bnf
});

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsImRlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwiQk5GTGV4ZXIiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiRmxvcmVuY2VQYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJmbG9yZW5jZVBhcnNlciIsImZyb21CTkYiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLE1BQU1ELFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxlQUFSLENBRGxCO0FBQUEsSUFFTUcsZUFBZUgsUUFBUSxrQkFBUixDQUZyQjtBQUFBLElBR01JLDBCQUEwQkosUUFBUSwyQkFBUixDQUhoQzs7SUFLUUssUSxHQUFhTixNLENBQWJNLFE7OztBQUVSLElBQU1DLFdBQVdELFNBQVNFLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxZQUFZTixVQUFVSyxXQUFWLEVBRGxCOztJQUdNRSxjOzs7Ozs7Ozs7Ozs0QkFDV1IsRyxFQUFLO0FBQ2xCQSxpQkFBU0EsR0FBVCxHQUFlRyx1QkFBZixDQURrQixDQUN3Qjs7QUFFMUMsVUFBTU0sU0FBU0osU0FBU0ssYUFBVCxDQUF1QlYsR0FBdkIsQ0FBZjtBQUFBLFVBQ01XLFFBQVFKLFVBQVVLLGVBQVYsQ0FBMEJILE1BQTFCLENBRGQ7QUFBQSxVQUVNSSxpQkFBaUIsSUFBSUwsY0FBSixDQUFtQkcsS0FBbkIsQ0FGdkI7O0FBSUEsYUFBT0UsY0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLGlCQUFpQkwsZUFBZU0sT0FBZixDQUF1QmQsR0FBdkIsQ0FBdkI7O0FBRUEsYUFBT2EsY0FBUDtBQUNEOzs7O0VBZjBCWCxZOztBQWtCN0JhLE9BQU9DLE1BQVAsQ0FBY1IsY0FBZCxFQUE4QjtBQUM1QlI7QUFENEIsQ0FBOUI7O0FBSUFpQixPQUFPQyxPQUFQLEdBQWlCVixjQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYgPSByZXF1aXJlKCcuL2RlZmF1bHRDdXN0b21HcmFtbWFyQk5GJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgYm5mID0gYCR7Ym5mfSR7ZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZ9YDsgLy8vXG5cbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUJORihibmYpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VQYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiJdfQ==