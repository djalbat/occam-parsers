"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _choiceOfParts = _interopRequireDefault(require("./rule/choiceOfParts"));

var _terminalSymbol = _interopRequireDefault(require("./rule/terminalSymbol"));

var _nonTerminalPart = _interopRequireDefault(require("./rule/nonTerminalPart"));

var _sequenceOfParts = _interopRequireDefault(require("./rule/sequenceOfParts"));

var _noWhitespacePart = _interopRequireDefault(require("./rule/noWhitespacePart"));

var _lookAheadModifier = _interopRequireDefault(require("./rule/lookAheadModifier"));

var _regularExpression = _interopRequireDefault(require("./rule/regularExpression"));

var _optionalQuantifier = _interopRequireDefault(require("./rule/optionalQuantifier"));

var _oneOrMoreQuantifier = _interopRequireDefault(require("./rule/oneOrMoreQuantifier"));

var _zeroOrMoreQuantifier = _interopRequireDefault(require("./rule/zeroOrMoreQuantifier"));

var _significantTokenType = _interopRequireDefault(require("./rule/significantTokenType"));

var _array = require("../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      var rules;
      var node = this.parse(tokens);

      if (node === null) {
        throw new Error("There is no node.");
      }

      rules = node.generateRules(_rule["default"]);
      var rulesLength = rules.length;

      if (rulesLength === 0) {
        throw new Error("There are no rules.");
      }

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
          choiceOfPartsRule = new _choiceOfParts["default"](),
          terminalSymbolRule = new _terminalSymbol["default"](),
          nonTerminalPartRule = new _nonTerminalPart["default"](),
          sequenceOfPartsRule = new _sequenceOfParts["default"](),
          noWhitespacePartRule = new _noWhitespacePart["default"](),
          regularExpressionRule = new _regularExpression["default"](),
          lookAheadModifierRule = new _lookAheadModifier["default"](),
          optionalQuantifierRule = new _optionalQuantifier["default"](),
          oneOrMoreQuantifierRule = new _oneOrMoreQuantifier["default"](),
          zeroOrMoreQuantifierRule = new _zeroOrMoreQuantifier["default"](),
          significantTokenTypeRule = new _significantTokenType["default"]();
      var rules = [documentRule, ruleRule, nameRule, definitionsRule, definitionRule, partRule, nonTerminalPartRule, terminalPartRule, noWhitespacePartRule, sequenceOfPartsRule, choiceOfPartsRule, ruleNameRule, significantTokenTypeRule, regularExpressionRule, terminalSymbolRule, endOfLineRule, epsilonRule, wildcardRule, quantifierRule, lookAheadModifierRule, optionalQuantifierRule, oneOrMoreQuantifierRule, zeroOrMoreQuantifierRule, errorRule];
      var firstRule = (0, _array.first)(rules),
          startRule = firstRule,
          ///
      ruleMap = rules.reduce(function (ruleMap, rule) {
        var ruleName = rule.getName();
        ruleMap[ruleName] = rule;
        return ruleMap;
      }, {}),
          bnfParser = new BNFParser(startRule, ruleMap);
      return bnfParser;
    }
  }]);

  return BNFParser;
}(_parser["default"]);

exports["default"] = BNFParser;

_defineProperty(BNFParser, "bnf", _bnf["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJCTkZQYXJzZXIiLCJ0b2tlbnMiLCJydWxlcyIsIm5vZGUiLCJwYXJzZSIsIkVycm9yIiwiZ2VuZXJhdGVSdWxlcyIsIlJ1bGUiLCJydWxlc0xlbmd0aCIsImxlbmd0aCIsIm5hbWVSdWxlIiwiTmFtZVJ1bGUiLCJwYXJ0UnVsZSIsIlBhcnRSdWxlIiwicnVsZVJ1bGUiLCJSdWxlUnVsZSIsImVycm9yUnVsZSIsIkVycm9yUnVsZSIsImVwc2lsb25SdWxlIiwiRXBzaWxvblJ1bGUiLCJkb2N1bWVudFJ1bGUiLCJEb2N1bWVudFJ1bGUiLCJydWxlTmFtZVJ1bGUiLCJSdWxlTmFtZVJ1bGUiLCJ3aWxkY2FyZFJ1bGUiLCJXaWxkY2FyZFJ1bGUiLCJlbmRPZkxpbmVSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsInF1YW50aWZpZXJSdWxlIiwiUXVhbnRpZmllclJ1bGUiLCJkZWZpbml0aW9uUnVsZSIsIkRlZmluaXRpb25SdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwidGVybWluYWxQYXJ0UnVsZSIsIlRlcm1pbmFsUGFydFJ1bGUiLCJjaG9pY2VPZlBhcnRzUnVsZSIsIkNob2ljZU9mUGFydHNSdWxlIiwidGVybWluYWxTeW1ib2xSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwibm9uVGVybWluYWxQYXJ0UnVsZSIsIk5vblRlcm1pbmFsUGFydFJ1bGUiLCJzZXF1ZW5jZU9mUGFydHNSdWxlIiwiU2VxdWVuY2VPZlBhcnRzUnVsZSIsIm5vV2hpdGVzcGFjZVBhcnRSdWxlIiwiTm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJSZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJmaXJzdFJ1bGUiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwicmVkdWNlIiwicnVsZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImJuZlBhcnNlciIsIkNvbW1vblBhcnNlciIsImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7OztvQ0FHSkMsTSxFQUFRO0FBQ3RCLFVBQUlDLEtBQUo7QUFFQyxVQUFNQyxJQUFJLEdBQUcsS0FBS0MsS0FBTCxDQUFXSCxNQUFYLENBQWI7O0FBRUEsVUFBSUUsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsY0FBTSxJQUFJRSxLQUFKLHFCQUFOO0FBQ0Q7O0FBRURILE1BQUFBLEtBQUssR0FBR0MsSUFBSSxDQUFDRyxhQUFMLENBQW1CQyxnQkFBbkIsQ0FBUjtBQUVBLFVBQU1DLFdBQVcsR0FBR04sS0FBSyxDQUFDTyxNQUExQjs7QUFFQSxVQUFJRCxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDckIsY0FBTSxJQUFJSCxLQUFKLHVCQUFOO0FBQ0Q7O0FBRUQsYUFBT0gsS0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1RLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixFQUFqQjtBQUFBLFVBQ01DLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixFQURqQjtBQUFBLFVBRU1DLFFBQVEsR0FBRyxJQUFJQyxpQkFBSixFQUZqQjtBQUFBLFVBR01DLFNBQVMsR0FBRyxJQUFJQyxpQkFBSixFQUhsQjtBQUFBLFVBSU1DLFdBQVcsR0FBRyxJQUFJQyxtQkFBSixFQUpwQjtBQUFBLFVBS01DLFlBQVksR0FBRyxJQUFJQyxvQkFBSixFQUxyQjtBQUFBLFVBTU1DLFlBQVksR0FBRyxJQUFJQyxvQkFBSixFQU5yQjtBQUFBLFVBT01DLFlBQVksR0FBRyxJQUFJQyxvQkFBSixFQVByQjtBQUFBLFVBUU1DLGFBQWEsR0FBRyxJQUFJQyxxQkFBSixFQVJ0QjtBQUFBLFVBU01DLGNBQWMsR0FBRyxJQUFJQyxzQkFBSixFQVR2QjtBQUFBLFVBVU1DLGNBQWMsR0FBRyxJQUFJQyxzQkFBSixFQVZ2QjtBQUFBLFVBV01DLGVBQWUsR0FBRyxJQUFJQyx1QkFBSixFQVh4QjtBQUFBLFVBWU1DLGdCQUFnQixHQUFHLElBQUlDLHdCQUFKLEVBWnpCO0FBQUEsVUFhTUMsaUJBQWlCLEdBQUcsSUFBSUMseUJBQUosRUFiMUI7QUFBQSxVQWNNQyxrQkFBa0IsR0FBRyxJQUFJQywwQkFBSixFQWQzQjtBQUFBLFVBZU1DLG1CQUFtQixHQUFHLElBQUlDLDJCQUFKLEVBZjVCO0FBQUEsVUFnQk1DLG1CQUFtQixHQUFHLElBQUlDLDJCQUFKLEVBaEI1QjtBQUFBLFVBaUJNQyxvQkFBb0IsR0FBRyxJQUFJQyw0QkFBSixFQWpCN0I7QUFBQSxVQWtCTUMscUJBQXFCLEdBQUcsSUFBSUMsNkJBQUosRUFsQjlCO0FBQUEsVUFtQk1DLHFCQUFxQixHQUFHLElBQUlDLDZCQUFKLEVBbkI5QjtBQUFBLFVBb0JNQyxzQkFBc0IsR0FBRyxJQUFJQyw4QkFBSixFQXBCL0I7QUFBQSxVQXFCTUMsdUJBQXVCLEdBQUcsSUFBSUMsK0JBQUosRUFyQmhDO0FBQUEsVUFzQk1DLHdCQUF3QixHQUFHLElBQUlDLGdDQUFKLEVBdEJqQztBQUFBLFVBdUJNQyx3QkFBd0IsR0FBRyxJQUFJQyxnQ0FBSixFQXZCakM7QUF5QkEsVUFBSXZELEtBQUssR0FBRyxDQUNWa0IsWUFEVSxFQUVWTixRQUZVLEVBR1ZKLFFBSFUsRUFJVnNCLGVBSlUsRUFLVkYsY0FMVSxFQU1WbEIsUUFOVSxFQU9WNEIsbUJBUFUsRUFRVk4sZ0JBUlUsRUFTVlUsb0JBVFUsRUFVVkYsbUJBVlUsRUFXVk4saUJBWFUsRUFZVmQsWUFaVSxFQWFWa0Msd0JBYlUsRUFjVlYscUJBZFUsRUFlVlIsa0JBZlUsRUFnQlZaLGFBaEJVLEVBaUJWUixXQWpCVSxFQWtCVk0sWUFsQlUsRUFtQlZJLGNBbkJVLEVBb0JWb0IscUJBcEJVLEVBcUJWRSxzQkFyQlUsRUFzQlZFLHVCQXRCVSxFQXVCVkUsd0JBdkJVLEVBd0JWdEMsU0F4QlUsQ0FBWjtBQTJCQSxVQUFNMEMsU0FBUyxHQUFHLGtCQUFNeEQsS0FBTixDQUFsQjtBQUFBLFVBQ015RCxTQUFTLEdBQUdELFNBRGxCO0FBQUEsVUFDOEI7QUFDeEJFLE1BQUFBLE9BQU8sR0FBRzFELEtBQUssQ0FBQzJELE1BQU4sQ0FBYSxVQUFDRCxPQUFELEVBQVVFLElBQVYsRUFBbUI7QUFDeEMsWUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLE9BQUwsRUFBakI7QUFFQUosUUFBQUEsT0FBTyxDQUFDRyxRQUFELENBQVAsR0FBb0JELElBQXBCO0FBRUEsZUFBT0YsT0FBUDtBQUNELE9BTlMsRUFNUCxFQU5PLENBRmhCO0FBQUEsVUFTTUssU0FBUyxHQUFHLElBQUlqRSxTQUFKLENBQWMyRCxTQUFkLEVBQXlCQyxPQUF6QixDQVRsQjtBQVdBLGFBQU9LLFNBQVA7QUFDRDs7OztFQXhGb0NDLGtCOzs7O2dCQUFsQmxFLFMsU0FDTm1FLGUiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcbmltcG9ydCBSdWxlIGZyb20gXCIuL3J1bGVcIjtcbmltcG9ydCBOYW1lUnVsZSBmcm9tIFwiLi9ydWxlL25hbWVcIjtcbmltcG9ydCBQYXJ0UnVsZSBmcm9tIFwiLi9ydWxlL3BhcnRcIjtcbmltcG9ydCBSdWxlUnVsZSBmcm9tIFwiLi9ydWxlL3J1bGVcIjtcbmltcG9ydCBFcnJvclJ1bGUgZnJvbSBcIi4vcnVsZS9lcnJvclwiO1xuaW1wb3J0IEVwc2lsb25SdWxlIGZyb20gXCIuL3J1bGUvZXBzaWxvblwiO1xuaW1wb3J0IENvbW1vblBhcnNlciBmcm9tIFwiLi4vY29tbW9uL3BhcnNlclwiO1xuaW1wb3J0IERvY3VtZW50UnVsZSBmcm9tIFwiLi9ydWxlL2RvY3VtZW50XCI7XG5pbXBvcnQgUnVsZU5hbWVSdWxlIGZyb20gXCIuL3J1bGUvcnVsZU5hbWVcIjtcbmltcG9ydCBXaWxkY2FyZFJ1bGUgZnJvbSBcIi4vcnVsZS93aWxkY2FyZFwiO1xuaW1wb3J0IEVuZE9mTGluZVJ1bGUgZnJvbSBcIi4vcnVsZS9lbmRPZkxpbmVcIjtcbmltcG9ydCBRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi9ydWxlL3F1YW50aWZpZXJcIjtcbmltcG9ydCBEZWZpbml0aW9uUnVsZSBmcm9tIFwiLi9ydWxlL2RlZmluaXRpb25cIjtcbmltcG9ydCBEZWZpbml0aW9uc1J1bGUgZnJvbSBcIi4vcnVsZS9kZWZpbml0aW9uc1wiO1xuaW1wb3J0IFRlcm1pbmFsUGFydFJ1bGUgZnJvbSBcIi4vcnVsZS90ZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzUnVsZSBmcm9tIFwiLi9ydWxlL2Nob2ljZU9mUGFydHNcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFJ1bGUgZnJvbSBcIi4vcnVsZS90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IE5vblRlcm1pbmFsUGFydFJ1bGUgZnJvbSBcIi4vcnVsZS9ub25UZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNSdWxlIGZyb20gXCIuL3J1bGUvc2VxdWVuY2VPZlBhcnRzXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydFJ1bGUgZnJvbSBcIi4vcnVsZS9ub1doaXRlc3BhY2VQYXJ0XCI7XG5pbXBvcnQgTG9va0FoZWFkTW9kaWZpZXJSdWxlIGZyb20gXCIuL3J1bGUvbG9va0FoZWFkTW9kaWZpZXJcIjtcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgZnJvbSBcIi4vcnVsZS9yZWd1bGFyRXhwcmVzc2lvblwiO1xuaW1wb3J0IE9wdGlvbmFsUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4vcnVsZS9vcHRpb25hbFF1YW50aWZpZXJcIjtcbmltcG9ydCBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi9ydWxlL29uZU9yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4vcnVsZS96ZXJvT3JNb3JlUXVhbnRpZmllclwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSBmcm9tIFwiLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG5cdHJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpIHtcblx0ICBsZXQgcnVsZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gbm9kZS5gKTtcbiAgICB9XG5cbiAgICBydWxlcyA9IG5vZGUuZ2VuZXJhdGVSdWxlcyhSdWxlKTtcblxuICAgIGNvbnN0IHJ1bGVzTGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuXG4gICAgaWYgKHJ1bGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZSBubyBydWxlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZVJ1bGUgPSBuZXcgTmFtZVJ1bGUoKSxcbiAgICAgICAgICBwYXJ0UnVsZSA9IG5ldyBQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJ1bGVSdWxlID0gbmV3IFJ1bGVSdWxlKCksXG4gICAgICAgICAgZXJyb3JSdWxlID0gbmV3IEVycm9yUnVsZSgpLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gbmV3IEVwc2lsb25SdWxlKCksXG4gICAgICAgICAgZG9jdW1lbnRSdWxlID0gbmV3IERvY3VtZW50UnVsZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZSA9IG5ldyBSdWxlTmFtZVJ1bGUoKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGUgPSBuZXcgV2lsZGNhcmRSdWxlKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IG5ldyBFbmRPZkxpbmVSdWxlKCksXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGUgPSBuZXcgUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uUnVsZSA9IG5ldyBEZWZpbml0aW9uUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZSA9IG5ldyBEZWZpbml0aW9uc1J1bGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlID0gbmV3IFRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZSA9IG5ldyBDaG9pY2VPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSA9IG5ldyBUZXJtaW5hbFN5bWJvbFJ1bGUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlID0gbmV3IE5vblRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1J1bGUoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUgPSBuZXcgTG9va0FoZWFkTW9kaWZpZXJSdWxlKCksXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSA9IG5ldyBPcHRpb25hbFF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBuZXcgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBuZXcgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSgpO1xuXG4gICAgbGV0IHJ1bGVzID0gW1xuICAgICAgZG9jdW1lbnRSdWxlLFxuICAgICAgcnVsZVJ1bGUsXG4gICAgICBuYW1lUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgcGFydFJ1bGUsXG4gICAgICBub25UZXJtaW5hbFBhcnRSdWxlLFxuICAgICAgdGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlLFxuICAgICAgc2VxdWVuY2VPZlBhcnRzUnVsZSxcbiAgICAgIGNob2ljZU9mUGFydHNSdWxlLFxuICAgICAgcnVsZU5hbWVSdWxlLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgdGVybWluYWxTeW1ib2xSdWxlLFxuICAgICAgZW5kT2ZMaW5lUnVsZSxcbiAgICAgIGVwc2lsb25SdWxlLFxuICAgICAgd2lsZGNhcmRSdWxlLFxuICAgICAgcXVhbnRpZmllclJ1bGUsXG4gICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUsXG4gICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlLFxuICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGUsXG4gICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUsXG4gICAgICBlcnJvclJ1bGVcbiAgICBdO1xuXG4gICAgY29uc3QgZmlyc3RSdWxlID0gZmlyc3QocnVsZXMpLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IGZpcnN0UnVsZSwgIC8vL1xuICAgICAgICAgIHJ1bGVNYXAgPSBydWxlcy5yZWR1Y2UoKHJ1bGVNYXAsIHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgIHJ1bGVNYXBbcnVsZU5hbWVdID0gcnVsZTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVNYXA7XG4gICAgICAgICAgfSwge30pLFxuICAgICAgICAgIGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG4iXX0=