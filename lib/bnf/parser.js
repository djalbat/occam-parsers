"use strict";

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BNFParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(BNFParser, _CommonParser);

  function BNFParser() {
    _classCallCheck(this, BNFParser);

    return _possibleConstructorReturn(this, _getPrototypeOf(BNFParser).apply(this, arguments));
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

Object.assign(BNFParser, {
  bnf: _bnf["default"]
});
module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJCTkZQYXJzZXIiLCJ0b2tlbnMiLCJub2RlIiwicGFyc2UiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJSdWxlIiwibmFtZVJ1bGUiLCJOYW1lUnVsZSIsInBhcnRSdWxlIiwiUGFydFJ1bGUiLCJydWxlUnVsZSIsIlJ1bGVSdWxlIiwiZXJyb3JSdWxlIiwiRXJyb3JSdWxlIiwiZXBzaWxvblJ1bGUiLCJFcHNpbG9uUnVsZSIsImRvY3VtZW50UnVsZSIsIkRvY3VtZW50UnVsZSIsInJ1bGVOYW1lUnVsZSIsIlJ1bGVOYW1lUnVsZSIsIndpbGRjYXJkUnVsZSIsIldpbGRjYXJkUnVsZSIsImVuZE9mTGluZVJ1bGUiLCJFbmRPZkxpbmVSdWxlIiwicXVhbnRpZmllclJ1bGUiLCJRdWFudGlmaWVyUnVsZSIsImRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvblJ1bGUiLCJkZWZpbml0aW9uc1J1bGUiLCJEZWZpbml0aW9uc1J1bGUiLCJ0ZXJtaW5hbFBhcnRSdWxlIiwiVGVybWluYWxQYXJ0UnVsZSIsImdyb3VwT2ZQYXJ0c1J1bGUiLCJHcm91cE9mUGFydHNSdWxlIiwiY2hvaWNlT2ZQYXJ0c1J1bGUiLCJDaG9pY2VPZlBhcnRzUnVsZSIsInRlcm1pbmFsU3ltYm9sUnVsZSIsIlRlcm1pbmFsU3ltYm9sUnVsZSIsIm5vblRlcm1pbmFsUGFydFJ1bGUiLCJOb25UZXJtaW5hbFBhcnRSdWxlIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJOb1doaXRlc3BhY2VQYXJ0UnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJPbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsImJuZlBhcnNlciIsIkNvbW1vblBhcnNlciIsIk9iamVjdCIsImFzc2lnbiIsImJuZiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFM7Ozs7Ozs7Ozs7O29DQUNXQyxNLEVBQVE7QUFDckIsVUFBTUMsSUFBSSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0YsTUFBWCxDQUFiO0FBQUEsVUFDTUcsS0FBSyxHQUFJRixJQUFJLEtBQUssSUFBVixHQUNFQSxJQUFJLENBQUNHLGFBQUwsQ0FBbUJDLGdCQUFuQixDQURGLEdBRUksRUFIbEI7QUFLQSxhQUFPRixLQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUcsUUFBUSxHQUFHLElBQUlDLGdCQUFKLEVBQWpCO0FBQUEsVUFDTUMsUUFBUSxHQUFHLElBQUlDLGdCQUFKLEVBRGpCO0FBQUEsVUFFTUMsUUFBUSxHQUFHLElBQUlDLGlCQUFKLEVBRmpCO0FBQUEsVUFHTUMsU0FBUyxHQUFHLElBQUlDLGlCQUFKLEVBSGxCO0FBQUEsVUFJTUMsV0FBVyxHQUFHLElBQUlDLG1CQUFKLEVBSnBCO0FBQUEsVUFLTUMsWUFBWSxHQUFHLElBQUlDLG9CQUFKLEVBTHJCO0FBQUEsVUFNTUMsWUFBWSxHQUFHLElBQUlDLG9CQUFKLEVBTnJCO0FBQUEsVUFPTUMsWUFBWSxHQUFHLElBQUlDLG9CQUFKLEVBUHJCO0FBQUEsVUFRTUMsYUFBYSxHQUFHLElBQUlDLHFCQUFKLEVBUnRCO0FBQUEsVUFTTUMsY0FBYyxHQUFHLElBQUlDLHNCQUFKLEVBVHZCO0FBQUEsVUFVTUMsY0FBYyxHQUFHLElBQUlDLHNCQUFKLEVBVnZCO0FBQUEsVUFXTUMsZUFBZSxHQUFHLElBQUlDLHVCQUFKLEVBWHhCO0FBQUEsVUFZTUMsZ0JBQWdCLEdBQUcsSUFBSUMsd0JBQUosRUFaekI7QUFBQSxVQWFNQyxnQkFBZ0IsR0FBRyxJQUFJQyx3QkFBSixFQWJ6QjtBQUFBLFVBY01DLGlCQUFpQixHQUFHLElBQUlDLHlCQUFKLEVBZDFCO0FBQUEsVUFlTUMsa0JBQWtCLEdBQUcsSUFBSUMsMEJBQUosRUFmM0I7QUFBQSxVQWdCTUMsbUJBQW1CLEdBQUcsSUFBSUMsMkJBQUosRUFoQjVCO0FBQUEsVUFpQk1DLG9CQUFvQixHQUFHLElBQUlDLDRCQUFKLEVBakI3QjtBQUFBLFVBa0JNQyxxQkFBcUIsR0FBRyxJQUFJQyw2QkFBSixFQWxCOUI7QUFBQSxVQW1CTUMscUJBQXFCLEdBQUcsSUFBSUMsNkJBQUosRUFuQjlCO0FBQUEsVUFvQk1DLHNCQUFzQixHQUFHLElBQUlDLDhCQUFKLEVBcEIvQjtBQUFBLFVBcUJNQyx1QkFBdUIsR0FBRyxJQUFJQywrQkFBSixFQXJCaEM7QUFBQSxVQXNCTUMsd0JBQXdCLEdBQUcsSUFBSUMsZ0NBQUosRUF0QmpDO0FBQUEsVUF1Qk1DLHdCQUF3QixHQUFHLElBQUlDLGdDQUFKLEVBdkJqQztBQXlCQSxVQUFJbEQsS0FBSyxHQUFHLENBQ1ZhLFlBRFUsRUFFVk4sUUFGVSxFQUdWSixRQUhVLEVBSVZzQixlQUpVLEVBS1ZGLGNBTFUsRUFNVmxCLFFBTlUsRUFPVjhCLG1CQVBVLEVBUVZSLGdCQVJVLEVBU1ZVLG9CQVRVLEVBVVZOLGlCQVZVLEVBV1ZGLGdCQVhVLEVBWVZkLFlBWlUsRUFhVmtDLHdCQWJVLEVBY1ZWLHFCQWRVLEVBZVZOLGtCQWZVLEVBZ0JWZCxhQWhCVSxFQWlCVlIsV0FqQlUsRUFrQlZNLFlBbEJVLEVBbUJWSSxjQW5CVSxFQW9CVm9CLHFCQXBCVSxFQXFCVkUsc0JBckJVLEVBc0JWRSx1QkF0QlUsRUF1QlZFLHdCQXZCVSxFQXdCVnRDLFNBeEJVLENBQVo7QUEyQkEsVUFBTTBDLFNBQVMsR0FBRyxJQUFJdkQsU0FBSixDQUFjSSxLQUFkLENBQWxCO0FBRUEsYUFBT21ELFNBQVA7QUFDRDs7OztFQWxFcUJDLGtCOztBQXFFeEJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjMUQsU0FBZCxFQUF5QjtBQUN2QjJELEVBQUFBLEdBQUcsRUFBSEE7QUFEdUIsQ0FBekI7QUFJQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCN0QsU0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcbmltcG9ydCBSdWxlIGZyb20gXCIuL3J1bGVcIjtcbmltcG9ydCBOYW1lUnVsZSBmcm9tIFwiLi9ydWxlL25hbWVcIjtcbmltcG9ydCBQYXJ0UnVsZSBmcm9tIFwiLi9ydWxlL3BhcnRcIjtcbmltcG9ydCBSdWxlUnVsZSBmcm9tIFwiLi9ydWxlL3J1bGVcIjtcbmltcG9ydCBFcnJvclJ1bGUgZnJvbSBcIi4vcnVsZS9lcnJvclwiO1xuaW1wb3J0IEVwc2lsb25SdWxlIGZyb20gXCIuL3J1bGUvZXBzaWxvblwiO1xuaW1wb3J0IENvbW1vblBhcnNlciBmcm9tIFwiLi4vY29tbW9uL3BhcnNlclwiO1xuaW1wb3J0IERvY3VtZW50UnVsZSBmcm9tIFwiLi9ydWxlL2RvY3VtZW50XCI7XG5pbXBvcnQgUnVsZU5hbWVSdWxlIGZyb20gXCIuL3J1bGUvcnVsZU5hbWVcIjtcbmltcG9ydCBXaWxkY2FyZFJ1bGUgZnJvbSBcIi4vcnVsZS93aWxkY2FyZFwiO1xuaW1wb3J0IEVuZE9mTGluZVJ1bGUgZnJvbSBcIi4vcnVsZS9lbmRPZkxpbmVcIjtcbmltcG9ydCBRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi9ydWxlL3F1YW50aWZpZXJcIjtcbmltcG9ydCBEZWZpbml0aW9uUnVsZSBmcm9tIFwiLi9ydWxlL2RlZmluaXRpb25cIjtcbmltcG9ydCBEZWZpbml0aW9uc1J1bGUgZnJvbSBcIi4vcnVsZS9kZWZpbml0aW9uc1wiO1xuaW1wb3J0IFRlcm1pbmFsUGFydFJ1bGUgZnJvbSBcIi4vcnVsZS90ZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBHcm91cE9mUGFydHNSdWxlIGZyb20gXCIuL3J1bGUvZ3JvdXBPZlBhcnRzXCI7XG5pbXBvcnQgQ2hvaWNlT2ZQYXJ0c1J1bGUgZnJvbSBcIi4vcnVsZS9jaG9pY2VPZlBhcnRzXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xSdWxlIGZyb20gXCIuL3J1bGUvdGVybWluYWxTeW1ib2xcIjtcbmltcG9ydCBOb25UZXJtaW5hbFBhcnRSdWxlIGZyb20gXCIuL3J1bGUvbm9uVGVybWluYWxQYXJ0XCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydFJ1bGUgZnJvbSBcIi4vcnVsZS9ub1doaXRlc3BhY2VQYXJ0XCI7XG5pbXBvcnQgTG9va0FoZWFkTW9kaWZpZXJSdWxlIGZyb20gXCIuL3J1bGUvbG9va0FoZWFkTW9kaWZpZXJcIjtcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgZnJvbSBcIi4vcnVsZS9yZWd1bGFyRXhwcmVzc2lvblwiO1xuaW1wb3J0IE9wdGlvbmFsUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4vcnVsZS9vcHRpb25hbFF1YW50aWZpZXJcIjtcbmltcG9ydCBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi9ydWxlL29uZU9yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4vcnVsZS96ZXJvT3JNb3JlUXVhbnRpZmllclwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSBmcm9tIFwiLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmNsYXNzIEJORlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG5cdHJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVzID0gKG5vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUpIDpcbiAgICAgICAgICAgICAgICAgICAgICBbXTtcblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lUnVsZSA9IG5ldyBOYW1lUnVsZSgpLFxuICAgICAgICAgIHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUoKSxcbiAgICAgICAgICBlcnJvclJ1bGUgPSBuZXcgRXJyb3JSdWxlKCksXG4gICAgICAgICAgZXBzaWxvblJ1bGUgPSBuZXcgRXBzaWxvblJ1bGUoKSxcbiAgICAgICAgICBkb2N1bWVudFJ1bGUgPSBuZXcgRG9jdW1lbnRSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gbmV3IFJ1bGVOYW1lUnVsZSgpLFxuICAgICAgICAgIHdpbGRjYXJkUnVsZSA9IG5ldyBXaWxkY2FyZFJ1bGUoKSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlID0gbmV3IEVuZE9mTGluZVJ1bGUoKSxcbiAgICAgICAgICBxdWFudGlmaWVyUnVsZSA9IG5ldyBRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlID0gbmV3IERlZmluaXRpb25SdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gbmV3IERlZmluaXRpb25zUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGUgPSBuZXcgVGVybWluYWxQYXJ0UnVsZSgpLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1J1bGUgPSBuZXcgR3JvdXBPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlID0gbmV3IENob2ljZU9mUGFydHNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gbmV3IFRlcm1pbmFsU3ltYm9sUnVsZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGUgPSBuZXcgTm9uVGVybWluYWxQYXJ0UnVsZSgpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlID0gbmV3IE5vV2hpdGVzcGFjZVBhcnRSdWxlKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUnVsZSgpLFxuICAgICAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZSA9IG5ldyBMb29rQWhlYWRNb2RpZmllclJ1bGUoKSxcbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlID0gbmV3IE9wdGlvbmFsUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZSA9IG5ldyBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSA9IG5ldyBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBbXG4gICAgICBkb2N1bWVudFJ1bGUsXG4gICAgICBydWxlUnVsZSxcbiAgICAgIG5hbWVSdWxlLFxuICAgICAgZGVmaW5pdGlvbnNSdWxlLFxuICAgICAgZGVmaW5pdGlvblJ1bGUsXG4gICAgICBwYXJ0UnVsZSxcbiAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICB0ZXJtaW5hbFBhcnRSdWxlLFxuICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIGdyb3VwT2ZQYXJ0c1J1bGUsXG4gICAgICBydWxlTmFtZVJ1bGUsXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUsXG4gICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUsXG4gICAgICBlbmRPZkxpbmVSdWxlLFxuICAgICAgZXBzaWxvblJ1bGUsXG4gICAgICB3aWxkY2FyZFJ1bGUsXG4gICAgICBxdWFudGlmaWVyUnVsZSxcbiAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZSxcbiAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUsXG4gICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIGVycm9yUnVsZVxuICAgIF07XG5cbiAgICBjb25zdCBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHJ1bGVzKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GUGFyc2VyLCB7XG4gIGJuZlxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GUGFyc2VyO1xuIl19