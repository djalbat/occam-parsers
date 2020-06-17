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

var CustomGrammarLexicalPatternParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(CustomGrammarLexicalPatternParser, _CommonParser);

  var _super = _createSuper(CustomGrammarLexicalPatternParser);

  function CustomGrammarLexicalPatternParser() {
    _classCallCheck(this, CustomGrammarLexicalPatternParser);

    return _super.apply(this, arguments);
  }

  _createClass(CustomGrammarLexicalPatternParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          customGrammarLexicalPatternParser = CustomGrammarLexicalPatternParser.fromRules(rules);
      return customGrammarLexicalPatternParser;
    }
  }, {
    key: "fromRules",
    value: function fromRules(rules) {
      return _parser2["default"].fromRules(CustomGrammarLexicalPatternParser, rules);
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      return CustomGrammarLexicalPatternParser.fromBNF(_bnf["default"]);
    }
  }]);

  return CustomGrammarLexicalPatternParser;
}(_parser2["default"]);

exports["default"] = CustomGrammarLexicalPatternParser;

_defineProperty(CustomGrammarLexicalPatternParser, "bnf", _bnf["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIiLCJibmYiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIiLCJmcm9tUnVsZXMiLCJDb21tb25QYXJzZXIiLCJmcm9tQk5GIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxzQkFBU0MsV0FBVCxFQUFqQjtBQUFBLElBQ01DLFNBQVMsR0FBR0MsbUJBQVVGLFdBQVYsRUFEbEI7O0lBR3FCRyxpQzs7Ozs7Ozs7Ozs7Ozs0QkFHSkMsRyxFQUFLO0FBQ2xCLFVBQU1DLE1BQU0sR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCRixHQUF2QixDQUFmO0FBQUEsVUFDTUcsS0FBSyxHQUFHTixTQUFTLENBQUNPLGVBQVYsQ0FBMEJILE1BQTFCLENBRGQ7QUFBQSxVQUVNSSxpQ0FBaUMsR0FBR04saUNBQWlDLENBQUNPLFNBQWxDLENBQTRDSCxLQUE1QyxDQUYxQztBQUlBLGFBQU9FLGlDQUFQO0FBQ0Q7Ozs4QkFFZ0JGLEssRUFBTztBQUFFLGFBQU9JLG9CQUFhRCxTQUFiLENBQXVCUCxpQ0FBdkIsRUFBMERJLEtBQTFELENBQVA7QUFBMEU7OztrQ0FFL0U7QUFBRSxhQUFPSixpQ0FBaUMsQ0FBQ1MsT0FBbEMsQ0FBMENSLGVBQTFDLENBQVA7QUFBd0Q7Ozs7RUFibEJPLG1COzs7O2dCQUExQ1IsaUMsU0FDTkMsZSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcbmltcG9ydCBCTkZQYXJzZXIgZnJvbSBcIi4uL2JuZi9wYXJzZXJcIjtcbmltcG9ydCBDb21tb25QYXJzZXIgZnJvbSBcIi4uL2NvbW1vbi9wYXJzZXJcIjtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciA9IEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlci5mcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tUnVsZXMoQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyLCBydWxlcyk7IH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIuZnJvbUJORihibmYpOyB9XG59XG4iXX0=