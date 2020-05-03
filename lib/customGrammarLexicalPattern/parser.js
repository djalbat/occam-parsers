"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _bnf = _interopRequireDefault(require("./bnf"));

var _parser = _interopRequireDefault(require("../bnf/parser"));

var _parser2 = _interopRequireDefault(require("../common/parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomGrammarLexicalPatternParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(CustomGrammarLexicalPatternParser, _CommonParser);

  function CustomGrammarLexicalPatternParser() {
    _classCallCheck(this, CustomGrammarLexicalPatternParser);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomGrammarLexicalPatternParser).apply(this, arguments));
  }

  _createClass(CustomGrammarLexicalPatternParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      var bnfLexer = _occamLexers.BNFLexer.fromNothing(),
          bnfParser = _parser["default"].fromNothing(),
          tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          customGrammarLexicalPatternParser = new CustomGrammarLexicalPatternParser(rules);

      return customGrammarLexicalPatternParser;
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      var customGrammarLexicalPatternParser = CustomGrammarLexicalPatternParser.fromBNF(_bnf["default"]);
      return customGrammarLexicalPatternParser;
    }
  }]);

  return CustomGrammarLexicalPatternParser;
}(_parser2["default"]);

exports["default"] = CustomGrammarLexicalPatternParser;

_defineProperty(CustomGrammarLexicalPatternParser, "bnf", _bnf["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIiLCJibmYiLCJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIiLCJmcm9tQk5GIiwiQ29tbW9uUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGlDOzs7Ozs7Ozs7Ozs0QkFHSkMsRyxFQUFLO0FBQ2xCLFVBQU1DLFFBQVEsR0FBR0Msc0JBQVNDLFdBQVQsRUFBakI7QUFBQSxVQUNNQyxTQUFTLEdBQUdDLG1CQUFVRixXQUFWLEVBRGxCO0FBQUEsVUFFTUcsTUFBTSxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUJQLEdBQXZCLENBRmY7QUFBQSxVQUdNUSxLQUFLLEdBQUdKLFNBQVMsQ0FBQ0ssZUFBVixDQUEwQkgsTUFBMUIsQ0FIZDtBQUFBLFVBSU1JLGlDQUFpQyxHQUFHLElBQUlYLGlDQUFKLENBQXNDUyxLQUF0QyxDQUoxQzs7QUFNQSxhQUFPRSxpQ0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1BLGlDQUFpQyxHQUFHWCxpQ0FBaUMsQ0FBQ1ksT0FBbEMsQ0FBMENYLGVBQTFDLENBQTFDO0FBRUEsYUFBT1UsaUNBQVA7QUFDRDs7OztFQWpCNERFLG1COzs7O2dCQUExQ2IsaUMsU0FDTkMsZSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcbmltcG9ydCBCTkZQYXJzZXIgZnJvbSBcIi4uL2JuZi9wYXJzZXJcIjtcbmltcG9ydCBDb21tb25QYXJzZXIgZnJvbSBcIi4uL2NvbW1vbi9wYXJzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBjb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciA9IG5ldyBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIgPSBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIuZnJvbUJORihibmYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlcjtcbiAgfVxufVxuIl19