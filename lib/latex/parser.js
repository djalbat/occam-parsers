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

var LaTeXParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(LaTeXParser, _CommonParser);

  function LaTeXParser() {
    _classCallCheck(this, LaTeXParser);

    return _possibleConstructorReturn(this, _getPrototypeOf(LaTeXParser).apply(this, arguments));
  }

  _createClass(LaTeXParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      var bnfLexer = _occamLexers.BNFLexer.fromNothing(),
          bnfParser = _parser["default"].fromNothing(),
          tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          laTeXParser = new LaTeXParser(rules);

      return laTeXParser;
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      var laTeXParser = LaTeXParser.fromBNF(_bnf["default"]);
      return laTeXParser;
    }
  }]);

  return LaTeXParser;
}(_parser2["default"]);

exports["default"] = LaTeXParser;

_defineProperty(LaTeXParser, "bnf", _bnf["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJMYVRlWFBhcnNlciIsImJuZiIsImJuZkxleGVyIiwiQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkJORlBhcnNlciIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsImxhVGVYUGFyc2VyIiwiZnJvbUJORiIsIkNvbW1vblBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs0QkFHSkMsRyxFQUFLO0FBQ2xCLFVBQU1DLFFBQVEsR0FBR0Msc0JBQVNDLFdBQVQsRUFBakI7QUFBQSxVQUNNQyxTQUFTLEdBQUdDLG1CQUFVRixXQUFWLEVBRGxCO0FBQUEsVUFFTUcsTUFBTSxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUJQLEdBQXZCLENBRmY7QUFBQSxVQUdNUSxLQUFLLEdBQUdKLFNBQVMsQ0FBQ0ssZUFBVixDQUEwQkgsTUFBMUIsQ0FIZDtBQUFBLFVBSU1JLFdBQVcsR0FBRyxJQUFJWCxXQUFKLENBQWdCUyxLQUFoQixDQUpwQjs7QUFNQSxhQUFPRSxXQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsV0FBVyxHQUFHWCxXQUFXLENBQUNZLE9BQVosQ0FBb0JYLGVBQXBCLENBQXBCO0FBRUEsYUFBT1UsV0FBUDtBQUNEOzs7O0VBakJzQ0UsbUI7Ozs7Z0JBQXBCYixXLFNBQ05DLGUiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5pbXBvcnQgQk5GUGFyc2VyIGZyb20gXCIuLi9ibmYvcGFyc2VyXCI7XG5pbXBvcnQgQ29tbW9uUGFyc2VyIGZyb20gXCIuLi9jb21tb24vcGFyc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhVGVYUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbUJORihibmYpIHtcbiAgICBjb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIGxhVGVYUGFyc2VyID0gbmV3IExhVGVYUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBsYVRlWFBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBsYVRlWFBhcnNlciA9IExhVGVYUGFyc2VyLmZyb21CTkYoYm5mKTtcblxuICAgIHJldHVybiBsYVRlWFBhcnNlcjtcbiAgfVxufVxuIl19