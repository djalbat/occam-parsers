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

exports["default"] = BNFParser;
Object.assign(BNFParser, {
  bnf: _bnf["default"]
});
module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJCTkZQYXJzZXIiLCJ0b2tlbnMiLCJub2RlIiwicGFyc2UiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJSdWxlIiwibmFtZVJ1bGUiLCJOYW1lUnVsZSIsInBhcnRSdWxlIiwiUGFydFJ1bGUiLCJydWxlUnVsZSIsIlJ1bGVSdWxlIiwiZXJyb3JSdWxlIiwiRXJyb3JSdWxlIiwiZXBzaWxvblJ1bGUiLCJFcHNpbG9uUnVsZSIsImRvY3VtZW50UnVsZSIsIkRvY3VtZW50UnVsZSIsInJ1bGVOYW1lUnVsZSIsIlJ1bGVOYW1lUnVsZSIsIndpbGRjYXJkUnVsZSIsIldpbGRjYXJkUnVsZSIsImVuZE9mTGluZVJ1bGUiLCJFbmRPZkxpbmVSdWxlIiwicXVhbnRpZmllclJ1bGUiLCJRdWFudGlmaWVyUnVsZSIsImRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvblJ1bGUiLCJkZWZpbml0aW9uc1J1bGUiLCJEZWZpbml0aW9uc1J1bGUiLCJ0ZXJtaW5hbFBhcnRSdWxlIiwiVGVybWluYWxQYXJ0UnVsZSIsImdyb3VwT2ZQYXJ0c1J1bGUiLCJHcm91cE9mUGFydHNSdWxlIiwiY2hvaWNlT2ZQYXJ0c1J1bGUiLCJDaG9pY2VPZlBhcnRzUnVsZSIsInRlcm1pbmFsU3ltYm9sUnVsZSIsIlRlcm1pbmFsU3ltYm9sUnVsZSIsIm5vblRlcm1pbmFsUGFydFJ1bGUiLCJOb25UZXJtaW5hbFBhcnRSdWxlIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJOb1doaXRlc3BhY2VQYXJ0UnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJPbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsImJuZlBhcnNlciIsIkNvbW1vblBhcnNlciIsIk9iamVjdCIsImFzc2lnbiIsImJuZiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7O29DQUNKQyxNLEVBQVE7QUFDckIsVUFBTUMsSUFBSSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0YsTUFBWCxDQUFiO0FBQUEsVUFDTUcsS0FBSyxHQUFJRixJQUFJLEtBQUssSUFBVixHQUNFQSxJQUFJLENBQUNHLGFBQUwsQ0FBbUJDLGdCQUFuQixDQURGLEdBRUksRUFIbEI7QUFLQSxhQUFPRixLQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUcsUUFBUSxHQUFHLElBQUlDLGdCQUFKLEVBQWpCO0FBQUEsVUFDTUMsUUFBUSxHQUFHLElBQUlDLGdCQUFKLEVBRGpCO0FBQUEsVUFFTUMsUUFBUSxHQUFHLElBQUlDLGlCQUFKLEVBRmpCO0FBQUEsVUFHTUMsU0FBUyxHQUFHLElBQUlDLGlCQUFKLEVBSGxCO0FBQUEsVUFJTUMsV0FBVyxHQUFHLElBQUlDLG1CQUFKLEVBSnBCO0FBQUEsVUFLTUMsWUFBWSxHQUFHLElBQUlDLG9CQUFKLEVBTHJCO0FBQUEsVUFNTUMsWUFBWSxHQUFHLElBQUlDLG9CQUFKLEVBTnJCO0FBQUEsVUFPTUMsWUFBWSxHQUFHLElBQUlDLG9CQUFKLEVBUHJCO0FBQUEsVUFRTUMsYUFBYSxHQUFHLElBQUlDLHFCQUFKLEVBUnRCO0FBQUEsVUFTTUMsY0FBYyxHQUFHLElBQUlDLHNCQUFKLEVBVHZCO0FBQUEsVUFVTUMsY0FBYyxHQUFHLElBQUlDLHNCQUFKLEVBVnZCO0FBQUEsVUFXTUMsZUFBZSxHQUFHLElBQUlDLHVCQUFKLEVBWHhCO0FBQUEsVUFZTUMsZ0JBQWdCLEdBQUcsSUFBSUMsd0JBQUosRUFaekI7QUFBQSxVQWFNQyxnQkFBZ0IsR0FBRyxJQUFJQyx3QkFBSixFQWJ6QjtBQUFBLFVBY01DLGlCQUFpQixHQUFHLElBQUlDLHlCQUFKLEVBZDFCO0FBQUEsVUFlTUMsa0JBQWtCLEdBQUcsSUFBSUMsMEJBQUosRUFmM0I7QUFBQSxVQWdCTUMsbUJBQW1CLEdBQUcsSUFBSUMsMkJBQUosRUFoQjVCO0FBQUEsVUFpQk1DLG9CQUFvQixHQUFHLElBQUlDLDRCQUFKLEVBakI3QjtBQUFBLFVBa0JNQyxxQkFBcUIsR0FBRyxJQUFJQyw2QkFBSixFQWxCOUI7QUFBQSxVQW1CTUMscUJBQXFCLEdBQUcsSUFBSUMsNkJBQUosRUFuQjlCO0FBQUEsVUFvQk1DLHNCQUFzQixHQUFHLElBQUlDLDhCQUFKLEVBcEIvQjtBQUFBLFVBcUJNQyx1QkFBdUIsR0FBRyxJQUFJQywrQkFBSixFQXJCaEM7QUFBQSxVQXNCTUMsd0JBQXdCLEdBQUcsSUFBSUMsZ0NBQUosRUF0QmpDO0FBQUEsVUF1Qk1DLHdCQUF3QixHQUFHLElBQUlDLGdDQUFKLEVBdkJqQztBQXlCQSxVQUFJbEQsS0FBSyxHQUFHLENBQ1ZhLFlBRFUsRUFFVk4sUUFGVSxFQUdWSixRQUhVLEVBSVZzQixlQUpVLEVBS1ZGLGNBTFUsRUFNVmxCLFFBTlUsRUFPVjhCLG1CQVBVLEVBUVZSLGdCQVJVLEVBU1ZVLG9CQVRVLEVBVVZOLGlCQVZVLEVBV1ZGLGdCQVhVLEVBWVZkLFlBWlUsRUFhVmtDLHdCQWJVLEVBY1ZWLHFCQWRVLEVBZVZOLGtCQWZVLEVBZ0JWZCxhQWhCVSxFQWlCVlIsV0FqQlUsRUFrQlZNLFlBbEJVLEVBbUJWSSxjQW5CVSxFQW9CVm9CLHFCQXBCVSxFQXFCVkUsc0JBckJVLEVBc0JWRSx1QkF0QlUsRUF1QlZFLHdCQXZCVSxFQXdCVnRDLFNBeEJVLENBQVo7QUEyQkEsVUFBTTBDLFNBQVMsR0FBRyxJQUFJdkQsU0FBSixDQUFjSSxLQUFkLENBQWxCO0FBRUEsYUFBT21ELFNBQVA7QUFDRDs7OztFQWxFb0NDLGtCOzs7QUFxRXZDQyxNQUFNLENBQUNDLE1BQVAsQ0FBYzFELFNBQWQsRUFBeUI7QUFDdkIyRCxFQUFBQSxHQUFHLEVBQUhBO0FBRHVCLENBQXpCO0FBSUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjdELFNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5pbXBvcnQgUnVsZSBmcm9tIFwiLi9ydWxlXCI7XG5pbXBvcnQgTmFtZVJ1bGUgZnJvbSBcIi4vcnVsZS9uYW1lXCI7XG5pbXBvcnQgUGFydFJ1bGUgZnJvbSBcIi4vcnVsZS9wYXJ0XCI7XG5pbXBvcnQgUnVsZVJ1bGUgZnJvbSBcIi4vcnVsZS9ydWxlXCI7XG5pbXBvcnQgRXJyb3JSdWxlIGZyb20gXCIuL3J1bGUvZXJyb3JcIjtcbmltcG9ydCBFcHNpbG9uUnVsZSBmcm9tIFwiLi9ydWxlL2Vwc2lsb25cIjtcbmltcG9ydCBDb21tb25QYXJzZXIgZnJvbSBcIi4uL2NvbW1vbi9wYXJzZXJcIjtcbmltcG9ydCBEb2N1bWVudFJ1bGUgZnJvbSBcIi4vcnVsZS9kb2N1bWVudFwiO1xuaW1wb3J0IFJ1bGVOYW1lUnVsZSBmcm9tIFwiLi9ydWxlL3J1bGVOYW1lXCI7XG5pbXBvcnQgV2lsZGNhcmRSdWxlIGZyb20gXCIuL3J1bGUvd2lsZGNhcmRcIjtcbmltcG9ydCBFbmRPZkxpbmVSdWxlIGZyb20gXCIuL3J1bGUvZW5kT2ZMaW5lXCI7XG5pbXBvcnQgUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4vcnVsZS9xdWFudGlmaWVyXCI7XG5pbXBvcnQgRGVmaW5pdGlvblJ1bGUgZnJvbSBcIi4vcnVsZS9kZWZpbml0aW9uXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNSdWxlIGZyb20gXCIuL3J1bGUvZGVmaW5pdGlvbnNcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnRSdWxlIGZyb20gXCIuL3J1bGUvdGVybWluYWxQYXJ0XCI7XG5pbXBvcnQgR3JvdXBPZlBhcnRzUnVsZSBmcm9tIFwiLi9ydWxlL2dyb3VwT2ZQYXJ0c1wiO1xuaW1wb3J0IENob2ljZU9mUGFydHNSdWxlIGZyb20gXCIuL3J1bGUvY2hvaWNlT2ZQYXJ0c1wiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUnVsZSBmcm9tIFwiLi9ydWxlL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi9ydWxlL25vblRlcm1pbmFsUGFydFwiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnRSdWxlIGZyb20gXCIuL3J1bGUvbm9XaGl0ZXNwYWNlUGFydFwiO1xuaW1wb3J0IExvb2tBaGVhZE1vZGlmaWVyUnVsZSBmcm9tIFwiLi9ydWxlL2xvb2tBaGVhZE1vZGlmaWVyXCI7XG5pbXBvcnQgUmVndWxhckV4cHJlc3Npb25SdWxlIGZyb20gXCIuL3J1bGUvcmVndWxhckV4cHJlc3Npb25cIjtcbmltcG9ydCBPcHRpb25hbFF1YW50aWZpZXJSdWxlIGZyb20gXCIuL3J1bGUvb3B0aW9uYWxRdWFudGlmaWVyXCI7XG5pbXBvcnQgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4vcnVsZS9vbmVPck1vcmVRdWFudGlmaWVyXCI7XG5pbXBvcnQgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlIGZyb20gXCIuL3J1bGUvemVyb09yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgZnJvbSBcIi4vcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuXHRydWxlc0Zyb21Ub2tlbnModG9rZW5zKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICBydWxlcyA9IChub2RlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2VuZXJhdGVSdWxlcyhSdWxlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgW107XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZVJ1bGUgPSBuZXcgTmFtZVJ1bGUoKSxcbiAgICAgICAgICBwYXJ0UnVsZSA9IG5ldyBQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJ1bGVSdWxlID0gbmV3IFJ1bGVSdWxlKCksXG4gICAgICAgICAgZXJyb3JSdWxlID0gbmV3IEVycm9yUnVsZSgpLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gbmV3IEVwc2lsb25SdWxlKCksXG4gICAgICAgICAgZG9jdW1lbnRSdWxlID0gbmV3IERvY3VtZW50UnVsZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZSA9IG5ldyBSdWxlTmFtZVJ1bGUoKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGUgPSBuZXcgV2lsZGNhcmRSdWxlKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IG5ldyBFbmRPZkxpbmVSdWxlKCksXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGUgPSBuZXcgUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uUnVsZSA9IG5ldyBEZWZpbml0aW9uUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZSA9IG5ldyBEZWZpbml0aW9uc1J1bGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlID0gbmV3IFRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBncm91cE9mUGFydHNSdWxlID0gbmV3IEdyb3VwT2ZQYXJ0c1J1bGUoKSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZSA9IG5ldyBDaG9pY2VPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSA9IG5ldyBUZXJtaW5hbFN5bWJvbFJ1bGUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlID0gbmV3IE5vblRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUgPSBuZXcgTG9va0FoZWFkTW9kaWZpZXJSdWxlKCksXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSA9IG5ldyBPcHRpb25hbFF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBuZXcgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBuZXcgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSgpO1xuXG4gICAgbGV0IHJ1bGVzID0gW1xuICAgICAgZG9jdW1lbnRSdWxlLFxuICAgICAgcnVsZVJ1bGUsXG4gICAgICBuYW1lUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgcGFydFJ1bGUsXG4gICAgICBub25UZXJtaW5hbFBhcnRSdWxlLFxuICAgICAgdGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlLFxuICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUsXG4gICAgICBncm91cE9mUGFydHNSdWxlLFxuICAgICAgcnVsZU5hbWVSdWxlLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgdGVybWluYWxTeW1ib2xSdWxlLFxuICAgICAgZW5kT2ZMaW5lUnVsZSxcbiAgICAgIGVwc2lsb25SdWxlLFxuICAgICAgd2lsZGNhcmRSdWxlLFxuICAgICAgcXVhbnRpZmllclJ1bGUsXG4gICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUsXG4gICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlLFxuICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGUsXG4gICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUsXG4gICAgICBlcnJvclJ1bGVcbiAgICBdO1xuXG4gICAgY29uc3QgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihydWxlcyk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEJORlBhcnNlciwge1xuICBibmZcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcbiJdfQ==