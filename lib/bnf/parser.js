'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var bnf = require('./bnf'),
    Rule = require('./rule'),
    CommonParser = require('../common/parser'),
    NameRule = require('./rule/name'),
    PartRule = require('./rule/part'),
    RuleRule = require('./rule/rule'),
    ErrorRule = require('./rule/error'),
    EpsilonRule = require('./rule/epsilon'),
    DocumentRule = require('./rule/document'),
    RuleNameRule = require('./rule/ruleName'),
    WildcardRule = require('./rule/wildcard'),
    EndOfLineRule = require('./rule/endOfLine'),
    QuantifierRule = require('./rule/quantifier'),
    DefinitionRule = require('./rule/definition'),
    DefinitionsRule = require('./rule/definitions'),
    TerminalPartRule = require('./rule/terminalPart'),
    GroupOfPartsRule = require('./rule/groupOfParts'),
    ChoiceOfPartsRule = require('./rule/choiceOfParts'),
    TerminalSymbolRule = require('./rule/terminalSymbol'),
    NonTerminalPartRule = require('./rule/nonTerminalPart'),
    NoWhitespacePartRule = require('./rule/noWhitespacePart'),
    LookAheadModifierRule = require('./rule/lookAheadModifier'),
    RegularExpressionRule = require('./rule/regularExpression'),
    OptionalQuantifierRule = require('./rule/optionalQuantifier'),
    OneOrMoreQuantifierRule = require('./rule/oneOrMoreQuantifier'),
    ZeroOrMoreQuantifierRule = require('./rule/zeroOrMoreQuantifier'),
    SignificantTokenTypeRule = require('./rule/significantTokenType');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJibmYiLCJyZXF1aXJlIiwiUnVsZSIsIkNvbW1vblBhcnNlciIsIk5hbWVSdWxlIiwiUGFydFJ1bGUiLCJSdWxlUnVsZSIsIkVycm9yUnVsZSIsIkVwc2lsb25SdWxlIiwiRG9jdW1lbnRSdWxlIiwiUnVsZU5hbWVSdWxlIiwiV2lsZGNhcmRSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsIlF1YW50aWZpZXJSdWxlIiwiRGVmaW5pdGlvblJ1bGUiLCJEZWZpbml0aW9uc1J1bGUiLCJUZXJtaW5hbFBhcnRSdWxlIiwiR3JvdXBPZlBhcnRzUnVsZSIsIkNob2ljZU9mUGFydHNSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwiTm9uVGVybWluYWxQYXJ0UnVsZSIsIk5vV2hpdGVzcGFjZVBhcnRSdWxlIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiQk5GUGFyc2VyIiwidG9rZW5zIiwibm9kZSIsInBhcnNlIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwibmFtZVJ1bGUiLCJwYXJ0UnVsZSIsInJ1bGVSdWxlIiwiZXJyb3JSdWxlIiwiZXBzaWxvblJ1bGUiLCJkb2N1bWVudFJ1bGUiLCJydWxlTmFtZVJ1bGUiLCJ3aWxkY2FyZFJ1bGUiLCJlbmRPZkxpbmVSdWxlIiwicXVhbnRpZmllclJ1bGUiLCJkZWZpbml0aW9uUnVsZSIsImRlZmluaXRpb25zUnVsZSIsInRlcm1pbmFsUGFydFJ1bGUiLCJncm91cE9mUGFydHNSdWxlIiwiY2hvaWNlT2ZQYXJ0c1J1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJub25UZXJtaW5hbFBhcnRSdWxlIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJibmZQYXJzZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQW5CO0FBQUEsSUFDTUMsSUFBSSxHQUFHRCxPQUFPLENBQUMsUUFBRCxDQURwQjtBQUFBLElBRU1FLFlBQVksR0FBR0YsT0FBTyxDQUFDLGtCQUFELENBRjVCO0FBQUEsSUFHTUcsUUFBUSxHQUFHSCxPQUFPLENBQUMsYUFBRCxDQUh4QjtBQUFBLElBSU1JLFFBQVEsR0FBR0osT0FBTyxDQUFDLGFBQUQsQ0FKeEI7QUFBQSxJQUtNSyxRQUFRLEdBQUdMLE9BQU8sQ0FBQyxhQUFELENBTHhCO0FBQUEsSUFNTU0sU0FBUyxHQUFHTixPQUFPLENBQUMsY0FBRCxDQU56QjtBQUFBLElBT01PLFdBQVcsR0FBR1AsT0FBTyxDQUFDLGdCQUFELENBUDNCO0FBQUEsSUFRTVEsWUFBWSxHQUFHUixPQUFPLENBQUMsaUJBQUQsQ0FSNUI7QUFBQSxJQVNNUyxZQUFZLEdBQUdULE9BQU8sQ0FBQyxpQkFBRCxDQVQ1QjtBQUFBLElBVU1VLFlBQVksR0FBR1YsT0FBTyxDQUFDLGlCQUFELENBVjVCO0FBQUEsSUFXTVcsYUFBYSxHQUFHWCxPQUFPLENBQUMsa0JBQUQsQ0FYN0I7QUFBQSxJQVlNWSxjQUFjLEdBQUdaLE9BQU8sQ0FBQyxtQkFBRCxDQVo5QjtBQUFBLElBYU1hLGNBQWMsR0FBR2IsT0FBTyxDQUFDLG1CQUFELENBYjlCO0FBQUEsSUFjTWMsZUFBZSxHQUFHZCxPQUFPLENBQUMsb0JBQUQsQ0FkL0I7QUFBQSxJQWVNZSxnQkFBZ0Is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VUFBSUssS0FBSyxHQUFHLENBQ1ZPLFlBRFUsRUFFVkgsUUFGVSxFQUdWRixRQUhVLEVBSVZXLGVBSlUsRUFLVkQsY0FMVSxFQU1WVCxRQU5VLEVBT1ZlLG1CQVBVLEVBUVZKLGdCQVJVLEVBU1ZLLG9CQVRVLEVBVVZILGlCQVZVLEVBV1ZELGdCQVhVLEVBWVZQLFlBWlUsRUFhVmlCLHdCQWJVLEVBY1ZMLHFCQWRVLEVBZVZILGtCQWZVLEVBZ0JWUCxhQWhCVSxFQWlCVkosV0FqQlUsRUFrQlZHLFlBbEJVLEVBbUJWRSxjQW5CVSxFQW9CVlUscUJBcEJVLEVBcUJWQyxzQkFyQlUsRUFzQlZDLHVCQXRCVSxFQXVCVkMsd0JBdkJVLEVBd0JWbkIsU0F4QlUsQ0FBWjtBQTJCQSxVQUFNcUIsU0FBUyxHQUFHLElBQUk5QixTQUFKLENBQWNJLEtBQWQsQ0FBbEI7QUFFQSxhQUFPMEIsU0FBUDtBQUNEOzs7O0VBbEVxQnZELFk7O0FBcUV4QndELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEMsU0FBZCxFQUF5QjtBQUN2QjVCLEVBQUFBLEdBQUcsRUFBSEE7QUFEdUIsQ0FBekI7QUFJQTZELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxDLFNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgTmFtZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvbmFtZScpLFxuICAgICAgUGFydFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcGFydCcpLFxuICAgICAgUnVsZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZScpLFxuICAgICAgRXJyb3JSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2Vycm9yJyksXG4gICAgICBFcHNpbG9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9lcHNpbG9uJyksXG4gICAgICBEb2N1bWVudFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZG9jdW1lbnQnKSxcbiAgICAgIFJ1bGVOYW1lUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlTmFtZScpLFxuICAgICAgV2lsZGNhcmRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3dpbGRjYXJkJyksXG4gICAgICBFbmRPZkxpbmVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2VuZE9mTGluZScpLFxuICAgICAgUXVhbnRpZmllclJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcXVhbnRpZmllcicpLFxuICAgICAgRGVmaW5pdGlvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZGVmaW5pdGlvbicpLFxuICAgICAgRGVmaW5pdGlvbnNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2RlZmluaXRpb25zJyksXG4gICAgICBUZXJtaW5hbFBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3Rlcm1pbmFsUGFydCcpLFxuICAgICAgR3JvdXBPZlBhcnRzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ncm91cE9mUGFydHMnKSxcbiAgICAgIENob2ljZU9mUGFydHNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2Nob2ljZU9mUGFydHMnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgTm9uVGVybWluYWxQYXJ0UnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ub25UZXJtaW5hbFBhcnQnKSxcbiAgICAgIE5vV2hpdGVzcGFjZVBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL25vV2hpdGVzcGFjZVBhcnQnKSxcbiAgICAgIExvb2tBaGVhZE1vZGlmaWVyUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9sb29rQWhlYWRNb2RpZmllcicpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgICBPcHRpb25hbFF1YW50aWZpZXJSdWxlID0gcmVxdWlyZSgnLi9ydWxlL29wdGlvbmFsUXVhbnRpZmllcicpLFxuICAgICAgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvb25lT3JNb3JlUXVhbnRpZmllcicpLFxuICAgICAgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3plcm9Pck1vcmVRdWFudGlmaWVyJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgQk5GUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcblx0cnVsZXNGcm9tVG9rZW5zKHRva2Vucykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgcnVsZXMgPSAobm9kZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICBub2RlLmdlbmVyYXRlUnVsZXMoUnVsZSkgOlxuICAgICAgICAgICAgICAgICAgICAgIFtdO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWVSdWxlID0gbmV3IE5hbWVSdWxlKCksXG4gICAgICAgICAgcGFydFJ1bGUgPSBuZXcgUGFydFJ1bGUoKSxcbiAgICAgICAgICBydWxlUnVsZSA9IG5ldyBSdWxlUnVsZSgpLFxuICAgICAgICAgIGVycm9yUnVsZSA9IG5ldyBFcnJvclJ1bGUoKSxcbiAgICAgICAgICBlcHNpbG9uUnVsZSA9IG5ldyBFcHNpbG9uUnVsZSgpLFxuICAgICAgICAgIGRvY3VtZW50UnVsZSA9IG5ldyBEb2N1bWVudFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGUgPSBuZXcgUnVsZU5hbWVSdWxlKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gbmV3IFdpbGRjYXJkUnVsZSgpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGUgPSBuZXcgRW5kT2ZMaW5lUnVsZSgpLFxuICAgICAgICAgIHF1YW50aWZpZXJSdWxlID0gbmV3IFF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBuZXcgRGVmaW5pdGlvblJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGUgPSBuZXcgRGVmaW5pdGlvbnNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZSA9IG5ldyBUZXJtaW5hbFBhcnRSdWxlKCksXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUnVsZSA9IG5ldyBHcm91cE9mUGFydHNSdWxlKCksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1J1bGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUgPSBuZXcgVGVybWluYWxTeW1ib2xSdWxlKCksXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSA9IG5ldyBOb25UZXJtaW5hbFBhcnRSdWxlKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUgPSBuZXcgTm9XaGl0ZXNwYWNlUGFydFJ1bGUoKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSBuZXcgUmVndWxhckV4cHJlc3Npb25SdWxlKCksXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlID0gbmV3IExvb2tBaGVhZE1vZGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUgPSBuZXcgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUoKTtcblxuICAgIGxldCBydWxlcyA9IFtcbiAgICAgIGRvY3VtZW50UnVsZSxcbiAgICAgIHJ1bGVSdWxlLFxuICAgICAgbmFtZVJ1bGUsXG4gICAgICBkZWZpbml0aW9uc1J1bGUsXG4gICAgICBkZWZpbml0aW9uUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIHRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSxcbiAgICAgIGNob2ljZU9mUGFydHNSdWxlLFxuICAgICAgZ3JvdXBPZlBhcnRzUnVsZSxcbiAgICAgIHJ1bGVOYW1lUnVsZSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSxcbiAgICAgIGVuZE9mTGluZVJ1bGUsXG4gICAgICBlcHNpbG9uUnVsZSxcbiAgICAgIHdpbGRjYXJkUnVsZSxcbiAgICAgIHF1YW50aWZpZXJSdWxlLFxuICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlLFxuICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSxcbiAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgZXJyb3JSdWxlXG4gICAgXTtcblxuICAgIGNvbnN0IGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIocnVsZXMpO1xuICAgIFxuICAgIHJldHVybiBibmZQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihCTkZQYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG4iXX0=