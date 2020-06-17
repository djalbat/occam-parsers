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

var MetaJSONParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(MetaJSONParser, _CommonParser);

  var _super = _createSuper(MetaJSONParser);

  function MetaJSONParser() {
    _classCallCheck(this, MetaJSONParser);

    return _super.apply(this, arguments);
  }

  _createClass(MetaJSONParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          metaJSONParser = MetaJSONParser.fromRules(rules);
      return metaJSONParser;
    }
  }, {
    key: "fromRules",
    value: function fromRules(rules) {
      return _parser2["default"].fromRules(MetaJSONParser, rules);
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      return MetaJSONParser.fromBNF(_bnf["default"]);
    }
  }]);

  return MetaJSONParser;
}(_parser2["default"]);

exports["default"] = MetaJSONParser;

_defineProperty(MetaJSONParser, "bnf", _bnf["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJNZXRhSlNPTlBhcnNlciIsImJuZiIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsIm1ldGFKU09OUGFyc2VyIiwiZnJvbVJ1bGVzIiwiQ29tbW9uUGFyc2VyIiwiZnJvbUJORiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0Msc0JBQVNDLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxTQUFTLEdBQUdDLG1CQUFVRixXQUFWLEVBRGxCOztJQUdxQkcsYzs7Ozs7Ozs7Ozs7Ozs0QkFHSkMsRyxFQUFLO0FBQ2xCLFVBQU1DLE1BQU0sR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCRixHQUF2QixDQUFmO0FBQUEsVUFDTUcsS0FBSyxHQUFHTixTQUFTLENBQUNPLGVBQVYsQ0FBMEJILE1BQTFCLENBRGQ7QUFBQSxVQUVNSSxjQUFjLEdBQUdOLGNBQWMsQ0FBQ08sU0FBZixDQUF5QkgsS0FBekIsQ0FGdkI7QUFJQSxhQUFPRSxjQUFQO0FBQ0Q7Ozs4QkFFZ0JGLEssRUFBTztBQUFFLGFBQU9JLG9CQUFhRCxTQUFiLENBQXVCUCxjQUF2QixFQUF1Q0ksS0FBdkMsQ0FBUDtBQUF1RDs7O2tDQUU1RDtBQUFFLGFBQU9KLGNBQWMsQ0FBQ1MsT0FBZixDQUF1QlIsZUFBdkIsQ0FBUDtBQUFxQzs7OztFQWJsQk8sbUI7Ozs7Z0JBQXZCUixjLFNBQ05DLGUiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5pbXBvcnQgQk5GUGFyc2VyIGZyb20gXCIuLi9ibmYvcGFyc2VyXCI7XG5pbXBvcnQgQ29tbW9uUGFyc2VyIGZyb20gXCIuLi9jb21tb24vcGFyc2VyXCI7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhSlNPTlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIG1ldGFKU09OUGFyc2VyID0gTWV0YUpTT05QYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgIHJldHVybiBtZXRhSlNPTlBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tUnVsZXMoTWV0YUpTT05QYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIE1ldGFKU09OUGFyc2VyLmZyb21CTkYoYm5mKTsgfVxufVxuIl19