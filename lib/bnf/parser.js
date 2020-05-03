"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var bnf = require("./bnf"),
    Rule = require("./rule"),
    CommonParser = require("../common/parser"),
    NameRule = require("./rule/name"),
    PartRule = require("./rule/part"),
    RuleRule = require("./rule/rule"),
    ErrorRule = require("./rule/error"),
    EpsilonRule = require("./rule/epsilon"),
    DocumentRule = require("./rule/document"),
    RuleNameRule = require("./rule/ruleName"),
    WildcardRule = require("./rule/wildcard"),
    EndOfLineRule = require("./rule/endOfLine"),
    QuantifierRule = require("./rule/quantifier"),
    DefinitionRule = require("./rule/definition"),
    DefinitionsRule = require("./rule/definitions"),
    TerminalPartRule = require("./rule/terminalPart"),
    GroupOfPartsRule = require("./rule/groupOfParts"),
    ChoiceOfPartsRule = require("./rule/choiceOfParts"),
    TerminalSymbolRule = require("./rule/terminalSymbol"),
    NonTerminalPartRule = require("./rule/nonTerminalPart"),
    NoWhitespacePartRule = require("./rule/noWhitespacePart"),
    LookAheadModifierRule = require("./rule/lookAheadModifier"),
    RegularExpressionRule = require("./rule/regularExpression"),
    OptionalQuantifierRule = require("./rule/optionalQuantifier"),
    OneOrMoreQuantifierRule = require("./rule/oneOrMoreQuantifier"),
    ZeroOrMoreQuantifierRule = require("./rule/zeroOrMoreQuantifier"),
    SignificantTokenTypeRule = require("./rule/significantTokenType");

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
          rules = node !== null ? node.generateRules(Rule) : [];
      return rules;
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var nameRule = new NameRule(),
          partRule = new PartRule(),
          ruleRule = new RuleRule(),
          errorRule = new ErrorRule(),
          epsilonRule = new EpsilonRule(),
          documentRule = new DocumentRule(),
          ruleNameRule = new RuleNameRule(),
          wildcardRule = new WildcardRule(),
          endOfLineRule = new EndOfLineRule(),
          quantifierRule = new QuantifierRule(),
          definitionRule = new DefinitionRule(),
          definitionsRule = new DefinitionsRule(),
          terminalPartRule = new TerminalPartRule(),
          groupOfPartsRule = new GroupOfPartsRule(),
          choiceOfPartsRule = new ChoiceOfPartsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          nonTerminalPartRule = new NonTerminalPartRule(),
          noWhitespacePartRule = new NoWhitespacePartRule(),
          regularExpressionRule = new RegularExpressionRule(),
          lookAheadModifierRule = new LookAheadModifierRule(),
          optionalQuantifierRule = new OptionalQuantifierRule(),
          oneOrMoreQuantifierRule = new OneOrMoreQuantifierRule(),
          zeroOrMoreQuantifierRule = new ZeroOrMoreQuantifierRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule();
      var rules = [documentRule, ruleRule, nameRule, definitionsRule, definitionRule, partRule, nonTerminalPartRule, terminalPartRule, noWhitespacePartRule, choiceOfPartsRule, groupOfPartsRule, ruleNameRule, significantTokenTypeRule, regularExpressionRule, terminalSymbolRule, endOfLineRule, epsilonRule, wildcardRule, quantifierRule, lookAheadModifierRule, optionalQuantifierRule, oneOrMoreQuantifierRule, zeroOrMoreQuantifierRule, errorRule];
      var bnfParser = new BNFParser(rules);
      return bnfParser;
    }
  }]);

  return BNFParser;
}(CommonParser);

Object.assign(BNFParser, {
  bnf: bnf
});
module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJibmYiLCJyZXF1aXJlIiwiUnVsZSIsIkNvbW1vblBhcnNlciIsIk5hbWVSdWxlIiwiUGFydFJ1bGUiLCJSdWxlUnVsZSIsIkVycm9yUnVsZSIsIkVwc2lsb25SdWxlIiwiRG9jdW1lbnRSdWxlIiwiUnVsZU5hbWVSdWxlIiwiV2lsZGNhcmRSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsIlF1YW50aWZpZXJSdWxlIiwiRGVmaW5pdGlvblJ1bGUiLCJEZWZpbml0aW9uc1J1bGUiLCJUZXJtaW5hbFBhcnRSdWxlIiwiR3JvdXBPZlBhcnRzUnVsZSIsIkNob2ljZU9mUGFydHNSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwiTm9uVGVybWluYWxQYXJ0UnVsZSIsIk5vV2hpdGVzcGFjZVBhcnRSdWxlIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiQk5GUGFyc2VyIiwidG9rZW5zIiwibm9kZSIsInBhcnNlIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwibmFtZVJ1bGUiLCJwYXJ0UnVsZSIsInJ1bGVSdWxlIiwiZXJyb3JSdWxlIiwiZXBzaWxvblJ1bGUiLCJkb2N1bWVudFJ1bGUiLCJydWxlTmFtZVJ1bGUiLCJ3aWxkY2FyZFJ1bGUiLCJlbmRPZkxpbmVSdWxlIiwicXVhbnRpZmllclJ1bGUiLCJkZWZpbml0aW9uUnVsZSIsImRlZmluaXRpb25zUnVsZSIsInRlcm1pbmFsUGFydFJ1bGUiLCJncm91cE9mUGFydHNSdWxlIiwiY2hvaWNlT2ZQYXJ0c1J1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJub25UZXJtaW5hbFBhcnRSdWxlIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJibmZQYXJzZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQW5CO0FBQUEsSUFDTUMsSUFBSSxHQUFHRCxPQUFPLENBQUMsUUFBRCxDQURwQjtBQUFBLElBRU1FLFlBQVksR0FBR0YsT0FBTyxDQUFDLGtCQUFELENBRjVCO0FBQUEsSUFHTUcsUUFBUSxHQUFHSCxPQUFPLENBQUMsYUFBRCxDQUh4QjtBQUFBLElBSU1JLFFBQVEsR0FBR0osT0FBTyxDQUFDLGFBQUQsQ0FKeEI7QUFBQSxJQUtNSyxRQUFRLEdBQUdMLE9BQU8sQ0FBQyxhQUFELENBTHhCO0FBQUEsSUFNTU0sU0FBUyxHQUFHTixPQUFPLENBQUMsY0FBRCxDQU56QjtBQUFBLElBT01PLFdBQVcsR0FBR1AsT0FBTyxDQUFDLGdCQUFELENBUDNCO0FBQUEsSUFRTVEsWUFBWSxHQUFHUixPQUFPLENBQUMsaUJBQUQsQ0FSNUI7QUFBQSxJQVNNUyxZQUFZLEdBQUdULE9BQU8sQ0FBQyxpQkFBRCxDQVQ1QjtBQUFBLElBVU1VLFlBQVksR0FBR1YsT0FBTyxDQUFDLGlCQUFELENBVjVCO0FBQUEsSUFXTVcsYUFBYSxHQUFHWCxPQUFPLENBQUMsa0JBQUQsQ0FYN0I7QUFBQSxJQVlNWSxjQUFjLEdBQUdaLE9BQU8sQ0FBQyxtQkFBRCxDQVo5QjtBQUFBLElBYU1hLGNBQWMsR0FBR2IsT0FBTyxDQUFDLG1CQUFELENBYjlCO0FBQUEsSUFjTWMsZUFBZSxHQUFHZCxPQUFPLENBQUMsb0JBQUQsQ0FkL0I7QUFBQSxJQWVNZSxnQkFBZ0Is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VUFBSUssS0FBSyxHQUFHLENBQ1ZPLFlBRFUsRUFFVkgsUUFGVSxFQUdWRixRQUhVLEVBSVZXLGVBSlUsRUFLVkQsY0FMVSxFQU1WVCxRQU5VLEVBT1ZlLG1CQVBVLEVBUVZKLGdCQVJVLEVBU1ZLLG9CQVRVLEVBVVZILGlCQVZVLEVBV1ZELGdCQVhVLEVBWVZQLFlBWlUsRUFhVmlCLHdCQWJVLEVBY1ZMLHFCQWRVLEVBZVZILGtCQWZVLEVBZ0JWUCxhQWhCVSxFQWlCVkosV0FqQlUsRUFrQlZHLFlBbEJVLEVBbUJWRSxjQW5CVSxFQW9CVlUscUJBcEJVLEVBcUJWQyxzQkFyQlUsRUFzQlZDLHVCQXRCVSxFQXVCVkMsd0JBdkJVLEVBd0JWbkIsU0F4QlUsQ0FBWjtBQTJCQSxVQUFNcUIsU0FBUyxHQUFHLElBQUk5QixTQUFKLENBQWNJLEtBQWQsQ0FBbEI7QUFFQSxhQUFPMEIsU0FBUDtBQUNEOzs7O0VBbEVxQnZELFk7O0FBcUV4QndELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEMsU0FBZCxFQUF5QjtBQUN2QjVCLEVBQUFBLEdBQUcsRUFBSEE7QUFEdUIsQ0FBekI7QUFJQTZELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxDLFNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoXCIuL2JuZlwiKSxcbiAgICAgIFJ1bGUgPSByZXF1aXJlKFwiLi9ydWxlXCIpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZShcIi4uL2NvbW1vbi9wYXJzZXJcIiksXG4gICAgICBOYW1lUnVsZSA9IHJlcXVpcmUoXCIuL3J1bGUvbmFtZVwiKSxcbiAgICAgIFBhcnRSdWxlID0gcmVxdWlyZShcIi4vcnVsZS9wYXJ0XCIpLFxuICAgICAgUnVsZVJ1bGUgPSByZXF1aXJlKFwiLi9ydWxlL3J1bGVcIiksXG4gICAgICBFcnJvclJ1bGUgPSByZXF1aXJlKFwiLi9ydWxlL2Vycm9yXCIpLFxuICAgICAgRXBzaWxvblJ1bGUgPSByZXF1aXJlKFwiLi9ydWxlL2Vwc2lsb25cIiksXG4gICAgICBEb2N1bWVudFJ1bGUgPSByZXF1aXJlKFwiLi9ydWxlL2RvY3VtZW50XCIpLFxuICAgICAgUnVsZU5hbWVSdWxlID0gcmVxdWlyZShcIi4vcnVsZS9ydWxlTmFtZVwiKSxcbiAgICAgIFdpbGRjYXJkUnVsZSA9IHJlcXVpcmUoXCIuL3J1bGUvd2lsZGNhcmRcIiksXG4gICAgICBFbmRPZkxpbmVSdWxlID0gcmVxdWlyZShcIi4vcnVsZS9lbmRPZkxpbmVcIiksXG4gICAgICBRdWFudGlmaWVyUnVsZSA9IHJlcXVpcmUoXCIuL3J1bGUvcXVhbnRpZmllclwiKSxcbiAgICAgIERlZmluaXRpb25SdWxlID0gcmVxdWlyZShcIi4vcnVsZS9kZWZpbml0aW9uXCIpLFxuICAgICAgRGVmaW5pdGlvbnNSdWxlID0gcmVxdWlyZShcIi4vcnVsZS9kZWZpbml0aW9uc1wiKSxcbiAgICAgIFRlcm1pbmFsUGFydFJ1bGUgPSByZXF1aXJlKFwiLi9ydWxlL3Rlcm1pbmFsUGFydFwiKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c1J1bGUgPSByZXF1aXJlKFwiLi9ydWxlL2dyb3VwT2ZQYXJ0c1wiKSxcbiAgICAgIENob2ljZU9mUGFydHNSdWxlID0gcmVxdWlyZShcIi4vcnVsZS9jaG9pY2VPZlBhcnRzXCIpLFxuICAgICAgVGVybWluYWxTeW1ib2xSdWxlID0gcmVxdWlyZShcIi4vcnVsZS90ZXJtaW5hbFN5bWJvbFwiKSxcbiAgICAgIE5vblRlcm1pbmFsUGFydFJ1bGUgPSByZXF1aXJlKFwiLi9ydWxlL25vblRlcm1pbmFsUGFydFwiKSxcbiAgICAgIE5vV2hpdGVzcGFjZVBhcnRSdWxlID0gcmVxdWlyZShcIi4vcnVsZS9ub1doaXRlc3BhY2VQYXJ0XCIpLFxuICAgICAgTG9va0FoZWFkTW9kaWZpZXJSdWxlID0gcmVxdWlyZShcIi4vcnVsZS9sb29rQWhlYWRNb2RpZmllclwiKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IHJlcXVpcmUoXCIuL3J1bGUvcmVndWxhckV4cHJlc3Npb25cIiksXG4gICAgICBPcHRpb25hbFF1YW50aWZpZXJSdWxlID0gcmVxdWlyZShcIi4vcnVsZS9vcHRpb25hbFF1YW50aWZpZXJcIiksXG4gICAgICBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSA9IHJlcXVpcmUoXCIuL3J1bGUvb25lT3JNb3JlUXVhbnRpZmllclwiKSxcbiAgICAgIFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSA9IHJlcXVpcmUoXCIuL3J1bGUvemVyb09yTW9yZVF1YW50aWZpZXJcIiksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSByZXF1aXJlKFwiLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlXCIpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuXHRydWxlc0Zyb21Ub2tlbnModG9rZW5zKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICBydWxlcyA9IChub2RlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2VuZXJhdGVSdWxlcyhSdWxlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgW107XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZVJ1bGUgPSBuZXcgTmFtZVJ1bGUoKSxcbiAgICAgICAgICBwYXJ0UnVsZSA9IG5ldyBQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJ1bGVSdWxlID0gbmV3IFJ1bGVSdWxlKCksXG4gICAgICAgICAgZXJyb3JSdWxlID0gbmV3IEVycm9yUnVsZSgpLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gbmV3IEVwc2lsb25SdWxlKCksXG4gICAgICAgICAgZG9jdW1lbnRSdWxlID0gbmV3IERvY3VtZW50UnVsZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZSA9IG5ldyBSdWxlTmFtZVJ1bGUoKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGUgPSBuZXcgV2lsZGNhcmRSdWxlKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IG5ldyBFbmRPZkxpbmVSdWxlKCksXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGUgPSBuZXcgUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uUnVsZSA9IG5ldyBEZWZpbml0aW9uUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZSA9IG5ldyBEZWZpbml0aW9uc1J1bGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlID0gbmV3IFRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBncm91cE9mUGFydHNSdWxlID0gbmV3IEdyb3VwT2ZQYXJ0c1J1bGUoKSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZSA9IG5ldyBDaG9pY2VPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSA9IG5ldyBUZXJtaW5hbFN5bWJvbFJ1bGUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlID0gbmV3IE5vblRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUgPSBuZXcgTG9va0FoZWFkTW9kaWZpZXJSdWxlKCksXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSA9IG5ldyBPcHRpb25hbFF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBuZXcgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBuZXcgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSgpO1xuXG4gICAgbGV0IHJ1bGVzID0gW1xuICAgICAgZG9jdW1lbnRSdWxlLFxuICAgICAgcnVsZVJ1bGUsXG4gICAgICBuYW1lUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgcGFydFJ1bGUsXG4gICAgICBub25UZXJtaW5hbFBhcnRSdWxlLFxuICAgICAgdGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlLFxuICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUsXG4gICAgICBncm91cE9mUGFydHNSdWxlLFxuICAgICAgcnVsZU5hbWVSdWxlLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgdGVybWluYWxTeW1ib2xSdWxlLFxuICAgICAgZW5kT2ZMaW5lUnVsZSxcbiAgICAgIGVwc2lsb25SdWxlLFxuICAgICAgd2lsZGNhcmRSdWxlLFxuICAgICAgcXVhbnRpZmllclJ1bGUsXG4gICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUsXG4gICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlLFxuICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGUsXG4gICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUsXG4gICAgICBlcnJvclJ1bGVcbiAgICBdO1xuXG4gICAgY29uc3QgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihydWxlcyk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEJORlBhcnNlciwge1xuICBibmZcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcbiJdfQ==