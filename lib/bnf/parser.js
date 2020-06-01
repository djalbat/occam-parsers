"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bnf = _interopRequireDefault(require("./bnf"));

var _rule = _interopRequireDefault(require("./rule"));

var _name = _interopRequireDefault(require("./rule/name"));

var _part = _interopRequireDefault(require("./rule/part"));

var _rule2 = _interopRequireDefault(require("./rule/rule"));

var _error = _interopRequireDefault(require("./rule/error"));

var _epsilon = _interopRequireDefault(require("./rule/epsilon"));

var _parser = _interopRequireDefault(require("../common/parser"));

var _document = _interopRequireDefault(require("./rule/document"));

var _ruleName = _interopRequireDefault(require("./rule/ruleName"));

var _wildcard = _interopRequireDefault(require("./rule/wildcard"));

var _endOfLine = _interopRequireDefault(require("./rule/endOfLine"));

var _quantifier = _interopRequireDefault(require("./rule/quantifier"));

var _definition = _interopRequireDefault(require("./rule/definition"));

var _definitions = _interopRequireDefault(require("./rule/definitions"));

var _terminalPart = _interopRequireDefault(require("./rule/terminalPart"));

var _groupOfParts = _interopRequireDefault(require("./rule/groupOfParts"));

var _choiceOfParts = _interopRequireDefault(require("./rule/choiceOfParts"));

var _terminalSymbol = _interopRequireDefault(require("./rule/terminalSymbol"));

var _nonTerminalPart = _interopRequireDefault(require("./rule/nonTerminalPart"));

var _noWhitespacePart = _interopRequireDefault(require("./rule/noWhitespacePart"));

var _lookAheadModifier = _interopRequireDefault(require("./rule/lookAheadModifier"));

var _regularExpression = _interopRequireDefault(require("./rule/regularExpression"));

var _optionalQuantifier = _interopRequireDefault(require("./rule/optionalQuantifier"));

var _oneOrMoreQuantifier = _interopRequireDefault(require("./rule/oneOrMoreQuantifier"));

var _zeroOrMoreQuantifier = _interopRequireDefault(require("./rule/zeroOrMoreQuantifier"));

var _significantTokenType = _interopRequireDefault(require("./rule/significantTokenType"));

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

var BNFParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(BNFParser, _CommonParser);

  var _super = _createSuper(BNFParser);

  function BNFParser() {
    _classCallCheck(this, BNFParser);

    return _super.apply(this, arguments);
  }

  _createClass(BNFParser, [{
    key: "rulesFromTokens",
    value: function rulesFromTokens(tokens) {
      var node = this.parse(tokens),
          rules = node !== null ? node.generateRules(_rule["default"]) : [];
      return rules;
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var nameRule = new _name["default"](),
          partRule = new _part["default"](),
          ruleRule = new _rule2["default"](),
          errorRule = new _error["default"](),
          epsilonRule = new _epsilon["default"](),
          documentRule = new _document["default"](),
          ruleNameRule = new _ruleName["default"](),
          wildcardRule = new _wildcard["default"](),
          endOfLineRule = new _endOfLine["default"](),
          quantifierRule = new _quantifier["default"](),
          definitionRule = new _definition["default"](),
          definitionsRule = new _definitions["default"](),
          terminalPartRule = new _terminalPart["default"](),
          groupOfPartsRule = new _groupOfParts["default"](),
          choiceOfPartsRule = new _choiceOfParts["default"](),
          terminalSymbolRule = new _terminalSymbol["default"](),
          nonTerminalPartRule = new _nonTerminalPart["default"](),
          noWhitespacePartRule = new _noWhitespacePart["default"](),
          regularExpressionRule = new _regularExpression["default"](),
          lookAheadModifierRule = new _lookAheadModifier["default"](),
          optionalQuantifierRule = new _optionalQuantifier["default"](),
          oneOrMoreQuantifierRule = new _oneOrMoreQuantifier["default"](),
          zeroOrMoreQuantifierRule = new _zeroOrMoreQuantifier["default"](),
          significantTokenTypeRule = new _significantTokenType["default"]();
      var rules = [documentRule, ruleRule, nameRule, definitionsRule, definitionRule, partRule, nonTerminalPartRule, terminalPartRule, noWhitespacePartRule, choiceOfPartsRule, groupOfPartsRule, ruleNameRule, significantTokenTypeRule, regularExpressionRule, terminalSymbolRule, endOfLineRule, epsilonRule, wildcardRule, quantifierRule, lookAheadModifierRule, optionalQuantifierRule, oneOrMoreQuantifierRule, zeroOrMoreQuantifierRule, errorRule];
      var bnfParser = new BNFParser(rules);
      return bnfParser;
    }
  }]);

  return BNFParser;
}(_parser["default"]);

exports["default"] = BNFParser;

_defineProperty(BNFParser, "bnf", _bnf["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJCTkZQYXJzZXIiLCJ0b2tlbnMiLCJub2RlIiwicGFyc2UiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJSdWxlIiwibmFtZVJ1bGUiLCJOYW1lUnVsZSIsInBhcnRSdWxlIiwiUGFydFJ1bGUiLCJydWxlUnVsZSIsIlJ1bGVSdWxlIiwiZXJyb3JSdWxlIiwiRXJyb3JSdWxlIiwiZXBzaWxvblJ1bGUiLCJFcHNpbG9uUnVsZSIsImRvY3VtZW50UnVsZSIsIkRvY3VtZW50UnVsZSIsInJ1bGVOYW1lUnVsZSIsIlJ1bGVOYW1lUnVsZSIsIndpbGRjYXJkUnVsZSIsIldpbGRjYXJkUnVsZSIsImVuZE9mTGluZVJ1bGUiLCJFbmRPZkxpbmVSdWxlIiwicXVhbnRpZmllclJ1bGUiLCJRdWFudGlmaWVyUnVsZSIsImRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvblJ1bGUiLCJkZWZpbml0aW9uc1J1bGUiLCJEZWZpbml0aW9uc1J1bGUiLCJ0ZXJtaW5hbFBhcnRSdWxlIiwiVGVybWluYWxQYXJ0UnVsZSIsImdyb3VwT2ZQYXJ0c1J1bGUiLCJHcm91cE9mUGFydHNSdWxlIiwiY2hvaWNlT2ZQYXJ0c1J1bGUiLCJDaG9pY2VPZlBhcnRzUnVsZSIsInRlcm1pbmFsU3ltYm9sUnVsZSIsIlRlcm1pbmFsU3ltYm9sUnVsZSIsIm5vblRlcm1pbmFsUGFydFJ1bGUiLCJOb25UZXJtaW5hbFBhcnRSdWxlIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJOb1doaXRlc3BhY2VQYXJ0UnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJPbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsImJuZlBhcnNlciIsIkNvbW1vblBhcnNlciIsImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7OztvQ0FHSkMsTSxFQUFRO0FBQ3JCLFVBQU1DLElBQUksR0FBRyxLQUFLQyxLQUFMLENBQVdGLE1BQVgsQ0FBYjtBQUFBLFVBQ01HLEtBQUssR0FBSUYsSUFBSSxLQUFLLElBQVYsR0FDRUEsSUFBSSxDQUFDRyxhQUFMLENBQW1CQyxnQkFBbkIsQ0FERixHQUVJLEVBSGxCO0FBS0EsYUFBT0YsS0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1HLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixFQUFqQjtBQUFBLFVBQ01DLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixFQURqQjtBQUFBLFVBRU1DLFFBQVEsR0FBRyxJQUFJQyxpQkFBSixFQUZqQjtBQUFBLFVBR01DLFNBQVMsR0FBRyxJQUFJQyxpQkFBSixFQUhsQjtBQUFBLFVBSU1DLFdBQVcsR0FBRyxJQUFJQyxtQkFBSixFQUpwQjtBQUFBLFVBS01DLFlBQVksR0FBRyxJQUFJQyxvQkFBSixFQUxyQjtBQUFBLFVBTU1DLFlBQVksR0FBRyxJQUFJQyxvQkFBSixFQU5yQjtBQUFBLFVBT01DLFlBQVksR0FBRyxJQUFJQyxvQkFBSixFQVByQjtBQUFBLFVBUU1DLGFBQWEsR0FBRyxJQUFJQyxxQkFBSixFQVJ0QjtBQUFBLFVBU01DLGNBQWMsR0FBRyxJQUFJQyxzQkFBSixFQVR2QjtBQUFBLFVBVU1DLGNBQWMsR0FBRyxJQUFJQyxzQkFBSixFQVZ2QjtBQUFBLFVBV01DLGVBQWUsR0FBRyxJQUFJQyx1QkFBSixFQVh4QjtBQUFBLFVBWU1DLGdCQUFnQixHQUFHLElBQUlDLHdCQUFKLEVBWnpCO0FBQUEsVUFhTUMsZ0JBQWdCLEdBQUcsSUFBSUMsd0JBQUosRUFiekI7QUFBQSxVQWNNQyxpQkFBaUIsR0FBRyxJQUFJQyx5QkFBSixFQWQxQjtBQUFBLFVBZU1DLGtCQUFrQixHQUFHLElBQUlDLDBCQUFKLEVBZjNCO0FBQUEsVUFnQk1DLG1CQUFtQixHQUFHLElBQUlDLDJCQUFKLEVBaEI1QjtBQUFBLFVBaUJNQyxvQkFBb0IsR0FBRyxJQUFJQyw0QkFBSixFQWpCN0I7QUFBQSxVQWtCTUMscUJBQXFCLEdBQUcsSUFBSUMsNkJBQUosRUFsQjlCO0FBQUEsVUFtQk1DLHFCQUFxQixHQUFHLElBQUlDLDZCQUFKLEVBbkI5QjtBQUFBLFVBb0JNQyxzQkFBc0IsR0FBRyxJQUFJQyw4QkFBSixFQXBCL0I7QUFBQSxVQXFCTUMsdUJBQXVCLEdBQUcsSUFBSUMsK0JBQUosRUFyQmhDO0FBQUEsVUFzQk1DLHdCQUF3QixHQUFHLElBQUlDLGdDQUFKLEVBdEJqQztBQUFBLFVBdUJNQyx3QkFBd0IsR0FBRyxJQUFJQyxnQ0FBSixFQXZCakM7QUF5QkEsVUFBSWxELEtBQUssR0FBRyxDQUNWYSxZQURVLEVBRVZOLFFBRlUsRUFHVkosUUFIVSxFQUlWc0IsZUFKVSxFQUtWRixjQUxVLEVBTVZsQixRQU5VLEVBT1Y4QixtQkFQVSxFQVFWUixnQkFSVSxFQVNWVSxvQkFUVSxFQVVWTixpQkFWVSxFQVdWRixnQkFYVSxFQVlWZCxZQVpVLEVBYVZrQyx3QkFiVSxFQWNWVixxQkFkVSxFQWVWTixrQkFmVSxFQWdCVmQsYUFoQlUsRUFpQlZSLFdBakJVLEVBa0JWTSxZQWxCVSxFQW1CVkksY0FuQlUsRUFvQlZvQixxQkFwQlUsRUFxQlZFLHNCQXJCVSxFQXNCVkUsdUJBdEJVLEVBdUJWRSx3QkF2QlUsRUF3QlZ0QyxTQXhCVSxDQUFaO0FBMkJBLFVBQU0wQyxTQUFTLEdBQUcsSUFBSXZELFNBQUosQ0FBY0ksS0FBZCxDQUFsQjtBQUVBLGFBQU9tRCxTQUFQO0FBQ0Q7Ozs7RUFwRW9DQyxrQjs7OztnQkFBbEJ4RCxTLFNBQ055RCxlIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5pbXBvcnQgUnVsZSBmcm9tIFwiLi9ydWxlXCI7XG5pbXBvcnQgTmFtZVJ1bGUgZnJvbSBcIi4vcnVsZS9uYW1lXCI7XG5pbXBvcnQgUGFydFJ1bGUgZnJvbSBcIi4vcnVsZS9wYXJ0XCI7XG5pbXBvcnQgUnVsZVJ1bGUgZnJvbSBcIi4vcnVsZS9ydWxlXCI7XG5pbXBvcnQgRXJyb3JSdWxlIGZyb20gXCIuL3J1bGUvZXJyb3JcIjtcbmltcG9ydCBFcHNpbG9uUnVsZSBmcm9tIFwiLi9ydWxlL2Vwc2lsb25cIjtcbmltcG9ydCBDb21tb25QYXJzZXIgZnJvbSBcIi4uL2NvbW1vbi9wYXJzZXJcIjtcbmltcG9ydCBEb2N1bWVudFJ1bGUgZnJvbSBcIi4vcnVsZS9kb2N1bWVudFwiO1xuaW1wb3J0IFJ1bGVOYW1lUnVsZSBmcm9tIFwiLi9ydWxlL3J1bGVOYW1lXCI7XG5pbXBvcnQgV2lsZGNhcmRSdWxlIGZyb20gXCIuL3J1bGUvd2lsZGNhcmRcIjtcbmltcG9ydCBFbmRPZkxpbmVSdWxlIGZyb20gXCIuL3J1bGUvZW5kT2ZMaW5lXCI7XG5pbXBvcnQgUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4vcnVsZS9xdWFudGlmaWVyXCI7XG5pbXBvcnQgRGVmaW5pdGlvblJ1bGUgZnJvbSBcIi4vcnVsZS9kZWZpbml0aW9uXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNSdWxlIGZyb20gXCIuL3J1bGUvZGVmaW5pdGlvbnNcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnRSdWxlIGZyb20gXCIuL3J1bGUvdGVybWluYWxQYXJ0XCI7XG5pbXBvcnQgR3JvdXBPZlBhcnRzUnVsZSBmcm9tIFwiLi9ydWxlL2dyb3VwT2ZQYXJ0c1wiO1xuaW1wb3J0IENob2ljZU9mUGFydHNSdWxlIGZyb20gXCIuL3J1bGUvY2hvaWNlT2ZQYXJ0c1wiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUnVsZSBmcm9tIFwiLi9ydWxlL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi9ydWxlL25vblRlcm1pbmFsUGFydFwiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnRSdWxlIGZyb20gXCIuL3J1bGUvbm9XaGl0ZXNwYWNlUGFydFwiO1xuaW1wb3J0IExvb2tBaGVhZE1vZGlmaWVyUnVsZSBmcm9tIFwiLi9ydWxlL2xvb2tBaGVhZE1vZGlmaWVyXCI7XG5pbXBvcnQgUmVndWxhckV4cHJlc3Npb25SdWxlIGZyb20gXCIuL3J1bGUvcmVndWxhckV4cHJlc3Npb25cIjtcbmltcG9ydCBPcHRpb25hbFF1YW50aWZpZXJSdWxlIGZyb20gXCIuL3J1bGUvb3B0aW9uYWxRdWFudGlmaWVyXCI7XG5pbXBvcnQgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4vcnVsZS9vbmVPck1vcmVRdWFudGlmaWVyXCI7XG5pbXBvcnQgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlIGZyb20gXCIuL3J1bGUvemVyb09yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgZnJvbSBcIi4vcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG5cdHJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVzID0gKG5vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUpIDpcbiAgICAgICAgICAgICAgICAgICAgICBbXTtcblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lUnVsZSA9IG5ldyBOYW1lUnVsZSgpLFxuICAgICAgICAgIHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUoKSxcbiAgICAgICAgICBlcnJvclJ1bGUgPSBuZXcgRXJyb3JSdWxlKCksXG4gICAgICAgICAgZXBzaWxvblJ1bGUgPSBuZXcgRXBzaWxvblJ1bGUoKSxcbiAgICAgICAgICBkb2N1bWVudFJ1bGUgPSBuZXcgRG9jdW1lbnRSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gbmV3IFJ1bGVOYW1lUnVsZSgpLFxuICAgICAgICAgIHdpbGRjYXJkUnVsZSA9IG5ldyBXaWxkY2FyZFJ1bGUoKSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlID0gbmV3IEVuZE9mTGluZVJ1bGUoKSxcbiAgICAgICAgICBxdWFudGlmaWVyUnVsZSA9IG5ldyBRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlID0gbmV3IERlZmluaXRpb25SdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gbmV3IERlZmluaXRpb25zUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGUgPSBuZXcgVGVybWluYWxQYXJ0UnVsZSgpLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1J1bGUgPSBuZXcgR3JvdXBPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlID0gbmV3IENob2ljZU9mUGFydHNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gbmV3IFRlcm1pbmFsU3ltYm9sUnVsZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGUgPSBuZXcgTm9uVGVybWluYWxQYXJ0UnVsZSgpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlID0gbmV3IE5vV2hpdGVzcGFjZVBhcnRSdWxlKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUnVsZSgpLFxuICAgICAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZSA9IG5ldyBMb29rQWhlYWRNb2RpZmllclJ1bGUoKSxcbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlID0gbmV3IE9wdGlvbmFsUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZSA9IG5ldyBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSA9IG5ldyBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBbXG4gICAgICBkb2N1bWVudFJ1bGUsXG4gICAgICBydWxlUnVsZSxcbiAgICAgIG5hbWVSdWxlLFxuICAgICAgZGVmaW5pdGlvbnNSdWxlLFxuICAgICAgZGVmaW5pdGlvblJ1bGUsXG4gICAgICBwYXJ0UnVsZSxcbiAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICB0ZXJtaW5hbFBhcnRSdWxlLFxuICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIGdyb3VwT2ZQYXJ0c1J1bGUsXG4gICAgICBydWxlTmFtZVJ1bGUsXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUsXG4gICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUsXG4gICAgICBlbmRPZkxpbmVSdWxlLFxuICAgICAgZXBzaWxvblJ1bGUsXG4gICAgICB3aWxkY2FyZFJ1bGUsXG4gICAgICBxdWFudGlmaWVyUnVsZSxcbiAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZSxcbiAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUsXG4gICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIGVycm9yUnVsZVxuICAgIF07XG5cbiAgICBjb25zdCBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHJ1bGVzKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG4iXX0=