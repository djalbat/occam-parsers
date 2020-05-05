"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _bnf = _interopRequireDefault(require("./bnf"));

var _parser = _interopRequireDefault(require("../bnf/parser"));

var _parser2 = _interopRequireDefault(require("../common/parser"));

var _defaultCustomGrammar = require("./defaultCustomGrammar");

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

var FlorenceParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlorenceParser).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      bnf = "\n    \n      ".concat(bnf, "\n      \n      ").concat(_defaultCustomGrammar.termBNF, "\n      \n      ").concat(_defaultCustomGrammar.expressionBNF, "\n      \n      ").concat(_defaultCustomGrammar.statementBNF, "\n      \n      ").concat(_defaultCustomGrammar.metastatementBNF, "\n      \n    "); ///

      var bnfLexer = _occamLexers.BNFLexer.fromNothing(),
          bnfParser = _parser["default"].fromNothing(),
          tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          florenceParser = new FlorenceParser(rules);

      return florenceParser;
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      var florenceParser = FlorenceParser.fromBNF(_bnf["default"]);
      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(_parser2["default"]);

exports["default"] = FlorenceParser;

_defineProperty(FlorenceParser, "bnf", _bnf["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJGbG9yZW5jZVBhcnNlciIsImJuZiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsImJuZkxleGVyIiwiQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkJORlBhcnNlciIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUJORiIsIkNvbW1vblBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs0QkFHSkMsRyxFQUFLO0FBQ2xCQSxNQUFBQSxHQUFHLDJCQUVDQSxHQUZELDZCQUlDQyw2QkFKRCw2QkFNQ0MsbUNBTkQsNkJBUUNDLGtDQVJELDZCQVVDQyxzQ0FWRCxtQkFBSCxDQURrQixDQWFmOztBQUVILFVBQU1DLFFBQVEsR0FBR0Msc0JBQVNDLFdBQVQsRUFBakI7QUFBQSxVQUNNQyxTQUFTLEdBQUdDLG1CQUFVRixXQUFWLEVBRGxCO0FBQUEsVUFFTUcsTUFBTSxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUJYLEdBQXZCLENBRmY7QUFBQSxVQUdNWSxLQUFLLEdBQUdKLFNBQVMsQ0FBQ0ssZUFBVixDQUEwQkgsTUFBMUIsQ0FIZDtBQUFBLFVBSU1JLGNBQWMsR0FBRyxJQUFJZixjQUFKLENBQW1CYSxLQUFuQixDQUp2Qjs7QUFNQSxhQUFPRSxjQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUEsY0FBYyxHQUFHZixjQUFjLENBQUNnQixPQUFmLENBQXVCZixlQUF2QixDQUF2QjtBQUVBLGFBQU9jLGNBQVA7QUFDRDs7OztFQS9CeUNFLG1COzs7O2dCQUF2QmpCLGMsU0FDTkMsZSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcbmltcG9ydCBCTkZQYXJzZXIgZnJvbSBcIi4uL2JuZi9wYXJzZXJcIjtcbmltcG9ydCBDb21tb25QYXJzZXIgZnJvbSBcIi4uL2NvbW1vbi9wYXJzZXJcIjtcblxuaW1wb3J0IHsgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GIH0gZnJvbSBcIi4vZGVmYXVsdEN1c3RvbUdyYW1tYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGJuZiA9IGBcbiAgICBcbiAgICAgICR7Ym5mfVxuICAgICAgXG4gICAgICAke3Rlcm1CTkZ9XG4gICAgICBcbiAgICAgICR7ZXhwcmVzc2lvbkJORn1cbiAgICAgIFxuICAgICAgJHtzdGF0ZW1lbnRCTkZ9XG4gICAgICBcbiAgICAgICR7bWV0YXN0YXRlbWVudEJORn1cbiAgICAgIFxuICAgIGA7IC8vL1xuXG4gICAgY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tQk5GKGJuZik7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cbiJdfQ==