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

var _parser3 = _interopRequireDefault(require("../customGrammarLexicalPattern/parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bnfLexer = _occamLexers.BNFLexer.fromNothing(),
    bnfParser = _parser["default"].fromNothing();

var FlorenceParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  var _super = _createSuper(FlorenceParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _super.apply(this, arguments);
  }

  _createClass(FlorenceParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      bnf = "\n    \n      ".concat(bnf, "\n      \n      ").concat(_defaultCustomGrammar.termBNF, "\n      \n      ").concat(_defaultCustomGrammar.expressionBNF, "\n      \n      ").concat(_defaultCustomGrammar.statementBNF, "\n      \n      ").concat(_defaultCustomGrammar.metastatementBNF, "\n      \n    "); ///

      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          florenceParser = FlorenceParser.fromRules(rules);
      return florenceParser;
    }
  }, {
    key: "fromRules",
    value: function fromRules(rules) {
      return _parser2["default"].fromRules(FlorenceParser, rules);
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      return FlorenceParser.fromBNF(_bnf["default"]);
    }
  }]);

  return FlorenceParser;
}(_parser2["default"]);

exports["default"] = FlorenceParser;

_defineProperty(FlorenceParser, "bnf", _bnf["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJGbG9yZW5jZVBhcnNlciIsImJuZiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbVJ1bGVzIiwiQ29tbW9uUGFyc2VyIiwiZnJvbUJORiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0Msc0JBQVNDLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxTQUFTLEdBQUdDLG1CQUFVRixXQUFWLEVBRGxCOztJQUdxQkcsYzs7Ozs7Ozs7Ozs7Ozs0QkFHSkMsRyxFQUFLO0FBQ2xCQSxNQUFBQSxHQUFHLDJCQUVDQSxHQUZELDZCQUlDQyw2QkFKRCw2QkFNQ0MsbUNBTkQsNkJBUUNDLGtDQVJELDZCQVVDQyxzQ0FWRCxtQkFBSCxDQURrQixDQWFmOztBQUVILFVBQU1DLE1BQU0sR0FBR1gsUUFBUSxDQUFDWSxhQUFULENBQXVCTixHQUF2QixDQUFmO0FBQUEsVUFDTU8sS0FBSyxHQUFHVixTQUFTLENBQUNXLGVBQVYsQ0FBMEJILE1BQTFCLENBRGQ7QUFBQSxVQUVNSSxjQUFjLEdBQUdWLGNBQWMsQ0FBQ1csU0FBZixDQUF5QkgsS0FBekIsQ0FGdkI7QUFJQSxhQUFPRSxjQUFQO0FBQ0Q7Ozs4QkFFZ0JGLEssRUFBTztBQUFFLGFBQU9JLG9CQUFhRCxTQUFiLENBQXVCWCxjQUF2QixFQUF1Q1EsS0FBdkMsQ0FBUDtBQUF1RDs7O2tDQUU1RDtBQUFFLGFBQU9SLGNBQWMsQ0FBQ2EsT0FBZixDQUF1QlosZUFBdkIsQ0FBUDtBQUFxQzs7OztFQTNCbEJXLG1COzs7O2dCQUF2QlosYyxTQUNOQyxlIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IEJORlBhcnNlciBmcm9tIFwiLi4vYm5mL3BhcnNlclwiO1xuaW1wb3J0IENvbW1vblBhcnNlciBmcm9tIFwiLi4vY29tbW9uL3BhcnNlclwiO1xuXG5pbXBvcnQgeyB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYgfSBmcm9tIFwiLi9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuaW1wb3J0IEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuL3BhcnNlclwiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGJuZiA9IGBcbiAgICBcbiAgICAgICR7Ym5mfVxuICAgICAgXG4gICAgICAke3Rlcm1CTkZ9XG4gICAgICBcbiAgICAgICR7ZXhwcmVzc2lvbkJORn1cbiAgICAgIFxuICAgICAgJHtzdGF0ZW1lbnRCTkZ9XG4gICAgICBcbiAgICAgICR7bWV0YXN0YXRlbWVudEJORn1cbiAgICAgIFxuICAgIGA7IC8vL1xuXG4gICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tUnVsZXMoRmxvcmVuY2VQYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEZsb3JlbmNlUGFyc2VyLmZyb21CTkYoYm5mKTsgfVxufVxuIl19