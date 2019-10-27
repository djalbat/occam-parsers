'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var BNFParser = function (_CommonParser) {
  _inherits(BNFParser, _CommonParser);

  function BNFParser() {
    _classCallCheck(this, BNFParser);

    return _possibleConstructorReturn(this, (BNFParser.__proto__ || Object.getPrototypeOf(BNFParser)).apply(this, arguments));
  }

  _createClass(BNFParser, [{
    key: 'rulesFromTokens',
    value: function rulesFromTokens(tokens) {
      var node = this.parse(tokens),
          rules = node !== null ? node.generateRules(Rule) : [];

      return rules;
    }
  }], [{
    key: 'fromNothing',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImJuZiIsInJlcXVpcmUiLCJSdWxlIiwiQ29tbW9uUGFyc2VyIiwiTmFtZVJ1bGUiLCJQYXJ0UnVsZSIsIlJ1bGVSdWxlIiwiRXJyb3JSdWxlIiwiRXBzaWxvblJ1bGUiLCJEb2N1bWVudFJ1bGUiLCJSdWxlTmFtZVJ1bGUiLCJXaWxkY2FyZFJ1bGUiLCJFbmRPZkxpbmVSdWxlIiwiUXVhbnRpZmllclJ1bGUiLCJEZWZpbml0aW9uUnVsZSIsIkRlZmluaXRpb25zUnVsZSIsIlRlcm1pbmFsUGFydFJ1bGUiLCJHcm91cE9mUGFydHNSdWxlIiwiQ2hvaWNlT2ZQYXJ0c1J1bGUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJOb25UZXJtaW5hbFBhcnRSdWxlIiwiTm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGUiLCJSZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJCTkZQYXJzZXIiLCJ0b2tlbnMiLCJub2RlIiwicGFyc2UiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJuYW1lUnVsZSIsInBhcnRSdWxlIiwicnVsZVJ1bGUiLCJlcnJvclJ1bGUiLCJlcHNpbG9uUnVsZSIsImRvY3VtZW50UnVsZSIsInJ1bGVOYW1lUnVsZSIsIndpbGRjYXJkUnVsZSIsImVuZE9mTGluZVJ1bGUiLCJxdWFudGlmaWVyUnVsZSIsImRlZmluaXRpb25SdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwidGVybWluYWxQYXJ0UnVsZSIsImdyb3VwT2ZQYXJ0c1J1bGUiLCJjaG9pY2VPZlBhcnRzUnVsZSIsInRlcm1pbmFsU3ltYm9sUnVsZSIsIm5vblRlcm1pbmFsUGFydFJ1bGUiLCJub1doaXRlc3BhY2VQYXJ0UnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsImJuZlBhcnNlciIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSxPQUFSLENBQVo7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLFFBQVIsQ0FEYjtBQUFBLElBRU1FLGVBQWVGLFFBQVEsa0JBQVIsQ0FGckI7QUFBQSxJQUdNRyxXQUFXSCxRQUFRLGFBQVIsQ0FIakI7QUFBQSxJQUlNSSxXQUFXSixRQUFRLGFBQVIsQ0FKakI7QUFBQSxJQUtNSyxXQUFXTCxRQUFRLGFBQVIsQ0FMakI7QUFBQSxJQU1NTSxZQUFZTixRQUFRLGNBQVIsQ0FObEI7QUFBQSxJQU9NTyxjQUFjUCxRQUFRLGdCQUFSLENBUHBCO0FBQUEsSUFRTVEsZUFBZVIsUUFBUSxpQkFBUixDQVJyQjtBQUFBLElBU01TLGVBQWVULFFBQVEsaUJBQVIsQ0FUckI7QUFBQSxJQVVNVSxlQUFlVixRQUFRLGlCQUFSLENBVnJCO0FBQUEsSUFXTVcsZ0JBQWdCWCxRQUFRLGtCQUFSLENBWHRCO0FBQUEsSUFZTVksaUJBQWlCWixRQUFRLG1CQUFSLENBWnZCO0FBQUEsSUFhTWEsaUJBQWlCYixRQUFRLG1CQUFSLENBYnZCO0FBQUEsSUFjTWMsa0JBQWtCZCxRQUFRLG9CQUFSLENBZHhCO0FBQUEsSUFlTWUsbUJBQW1CZixRQUFRLHFCQUFSLENBZnpCO0FBQUEsSUFnQk1nQixtQkFBbUJoQixRQUFRLHFCQUFSLENBaEJ6QjtBQUFBLElBaUJNaUIsb0JBQW9CakIsUUFBUSxzQkFBUixDQWpCMUI7QUFBQSxJQWtCTWtCLHFCQUFxQmxCLFFBQVEsdUJBQVIsQ0FsQjNCO0FBQUEsSUFtQk1tQixzQkFBc0JuQixRQUFRLHdCQUFSLENBbkI1QjtBQUFBLElBb0JNb0IsdUJBQXVCcEIsUUFBUSx5QkFBUixDQXBCN0I7QUFBQSxJQXFCTXFCLHdCQUF3QnJCLFFBQVEsMEJBQVIsQ0FyQjlCO0FBQUEsSUFzQk1zQix3QkFBd0J0QixRQUFRLDBCQUFSLENBdEI5QjtBQUFBLElBdUJNdUIseUJBQXlCdkIsUUFBUSwyQkFBUixDQXZCL0I7QUFBQSxJQXdCTXdCLDBCQUEwQnhCLFFBQVEsNEJBQVIsQ0F4QmhDO0FBQUEsSUF5Qk15QiwyQkFBMkJ6QixRQUFRLDZCQUFSLENBekJqQztBQUFBLElBMEJNMEIsMkJBQTJCMUIsUUFBUSw2QkFBUixDQTFCakM7O0lBNEJNMkIsUzs7Ozs7Ozs7Ozs7b0NBQ1dDLE0sRUFBUTtBQUNyQixVQUFNQyxPQUFPLEtBQUtDLEtBQUwsQ0FBV0YsTUFBWCxDQUFiO0FBQUEsVUFDTUcsUUFBU0YsU0FBUyxJQUFWLEdBQ0VBLEtBQUtHLGFBQUwsQ0FBbUIvQixJQUFuQixDQURGLEdBRUksRUFIbEI7O0FBS0EsYUFBTzhCLEtBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNRSxXQUFXLElBQUk5QixRQUFKLEVBQWpCO0FBQUEsVUFDTStCLFdBQVcsSUFBSTlCLFFBQUosRUFEakI7QUFBQSxVQUVNK0IsV0FBVyxJQUFJOUIsUUFBSixFQUZqQjtBQUFBLFVBR00rQixZQUFZLElBQUk5QixTQUFKLEVBSGxCO0FBQUEsVUFJTStCLGNBQWMsSUFBSTlCLFdBQUosRUFKcEI7QUFBQSxVQUtNK0IsZUFBZSxJQUFJOUIsWUFBSixFQUxyQjtBQUFBLFVBTU0rQixlQUFlLElBQUk5QixZQUFKLEVBTnJCO0FBQUEsVUFPTStCLGVBQWUsSUFBSTlCLFlBQUosRUFQckI7QUFBQSxVQVFNK0IsZ0JBQWdCLElBQUk5QixhQUFKLEVBUnRCO0FBQUEsVUFTTStCLGlCQUFpQixJQUFJOUIsY0FBSixFQVR2QjtBQUFBLFVBVU0rQixpQkFBaUIsSUFBSTlCLGNBQUosRUFWdkI7QUFBQSxVQVdNK0Isa0JBQWtCLElBQUk5QixlQUFKLEVBWHhCO0FBQUEsVUFZTStCLG1CQUFtQixJQUFJOUIsZ0JBQUosRUFaekI7QUFBQSxVQWFNK0IsbUJBQW1CLElBQUk5QixnQkFBSixFQWJ6QjtBQUFBLFVBY00rQixvQkFBb0IsSUFBSTlCLGlCQUFKLEVBZDFCO0FBQUEsVUFlTStCLHFCQUFxQixJQUFJOUIsa0JBQUosRUFmM0I7QUFBQSxVQWdCTStCLHNCQUFzQixJQUFJOUIsbUJBQUosRUFoQjVCO0FBQUEsVUFpQk0rQix1QkFBdUIsSUFBSTlCLG9CQUFKLEVBakI3QjtBQUFBLFVBa0JNK0Isd0JBQXdCLElBQUk3QixxQkFBSixFQWxCOUI7QUFBQSxVQW1CTThCLHdCQUF3QixJQUFJL0IscUJBQUosRUFuQjlCO0FBQUEsVUFvQk1nQyx5QkFBeUIsSUFBSTlCLHNCQUFKLEVBcEIvQjtBQUFBLFVBcUJNK0IsMEJBQTBCLElBQUk5Qix1QkFBSixFQXJCaEM7QUFBQSxVQXNCTStCLDJCQUEyQixJQUFJOUIsd0JBQUosRUF0QmpDO0FBQUEsVUF1Qk0rQiwyQkFBMkIsSUFBSTlCLHdCQUFKLEVBdkJqQzs7QUF5QkEsVUFBSUssUUFBUSxDQUNWTyxZQURVLEVBRVZILFFBRlUsRUFHVkYsUUFIVSxFQUlWVyxlQUpVLEVBS1ZELGNBTFUsRUFNVlQsUUFOVSxFQU9WZSxtQkFQVSxFQVFWSixnQkFSVSxFQVNWSyxvQkFUVSxFQVVWSCxpQkFWVSxFQVdWRCxnQkFYVSxFQVlWUCxZQVpVLEVBYVZpQix3QkFiVSxFQWNWTCxxQkFkVSxFQWVWSCxrQkFmVSxFQWdCVlAsYUFoQlUsRUFpQlZKLFdBakJVLEVBa0JWRyxZQWxCVSxFQW1CVkUsY0FuQlUsRUFvQlZVLHFCQXBCVSxFQXFCVkMsc0JBckJVLEVBc0JWQyx1QkF0QlUsRUF1QlZDLHdCQXZCVSxFQXdCVm5CLFNBeEJVLENBQVo7O0FBMkJBLFVBQU1xQixZQUFZLElBQUk5QixTQUFKLENBQWNJLEtBQWQsQ0FBbEI7O0FBRUEsYUFBTzBCLFNBQVA7QUFDRDs7OztFQWxFcUJ2RCxZOztBQXFFeEJ3RCxPQUFPQyxNQUFQLENBQWNoQyxTQUFkLEVBQXlCO0FBQ3ZCNUI7QUFEdUIsQ0FBekI7O0FBSUE2RCxPQUFPQyxPQUFQLEdBQWlCbEMsU0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgTmFtZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvbmFtZScpLFxuICAgICAgUGFydFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcGFydCcpLFxuICAgICAgUnVsZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZScpLFxuICAgICAgRXJyb3JSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2Vycm9yJyksXG4gICAgICBFcHNpbG9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9lcHNpbG9uJyksXG4gICAgICBEb2N1bWVudFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZG9jdW1lbnQnKSxcbiAgICAgIFJ1bGVOYW1lUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlTmFtZScpLFxuICAgICAgV2lsZGNhcmRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3dpbGRjYXJkJyksXG4gICAgICBFbmRPZkxpbmVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2VuZE9mTGluZScpLFxuICAgICAgUXVhbnRpZmllclJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcXVhbnRpZmllcicpLFxuICAgICAgRGVmaW5pdGlvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZGVmaW5pdGlvbicpLFxuICAgICAgRGVmaW5pdGlvbnNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2RlZmluaXRpb25zJyksXG4gICAgICBUZXJtaW5hbFBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3Rlcm1pbmFsUGFydCcpLFxuICAgICAgR3JvdXBPZlBhcnRzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ncm91cE9mUGFydHMnKSxcbiAgICAgIENob2ljZU9mUGFydHNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2Nob2ljZU9mUGFydHMnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgTm9uVGVybWluYWxQYXJ0UnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ub25UZXJtaW5hbFBhcnQnKSxcbiAgICAgIE5vV2hpdGVzcGFjZVBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL25vV2hpdGVzcGFjZVBhcnQnKSxcbiAgICAgIExvb2tBaGVhZE1vZGlmaWVyUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9sb29rQWhlYWRNb2RpZmllcicpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgICBPcHRpb25hbFF1YW50aWZpZXJSdWxlID0gcmVxdWlyZSgnLi9ydWxlL29wdGlvbmFsUXVhbnRpZmllcicpLFxuICAgICAgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvb25lT3JNb3JlUXVhbnRpZmllcicpLFxuICAgICAgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3plcm9Pck1vcmVRdWFudGlmaWVyJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgQk5GUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcblx0cnVsZXNGcm9tVG9rZW5zKHRva2Vucykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgcnVsZXMgPSAobm9kZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICBub2RlLmdlbmVyYXRlUnVsZXMoUnVsZSkgOlxuICAgICAgICAgICAgICAgICAgICAgIFtdO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWVSdWxlID0gbmV3IE5hbWVSdWxlKCksXG4gICAgICAgICAgcGFydFJ1bGUgPSBuZXcgUGFydFJ1bGUoKSxcbiAgICAgICAgICBydWxlUnVsZSA9IG5ldyBSdWxlUnVsZSgpLFxuICAgICAgICAgIGVycm9yUnVsZSA9IG5ldyBFcnJvclJ1bGUoKSxcbiAgICAgICAgICBlcHNpbG9uUnVsZSA9IG5ldyBFcHNpbG9uUnVsZSgpLFxuICAgICAgICAgIGRvY3VtZW50UnVsZSA9IG5ldyBEb2N1bWVudFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGUgPSBuZXcgUnVsZU5hbWVSdWxlKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gbmV3IFdpbGRjYXJkUnVsZSgpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGUgPSBuZXcgRW5kT2ZMaW5lUnVsZSgpLFxuICAgICAgICAgIHF1YW50aWZpZXJSdWxlID0gbmV3IFF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBuZXcgRGVmaW5pdGlvblJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGUgPSBuZXcgRGVmaW5pdGlvbnNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZSA9IG5ldyBUZXJtaW5hbFBhcnRSdWxlKCksXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUnVsZSA9IG5ldyBHcm91cE9mUGFydHNSdWxlKCksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1J1bGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUgPSBuZXcgVGVybWluYWxTeW1ib2xSdWxlKCksXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSA9IG5ldyBOb25UZXJtaW5hbFBhcnRSdWxlKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUgPSBuZXcgTm9XaGl0ZXNwYWNlUGFydFJ1bGUoKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSBuZXcgUmVndWxhckV4cHJlc3Npb25SdWxlKCksXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlID0gbmV3IExvb2tBaGVhZE1vZGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUgPSBuZXcgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUoKTtcblxuICAgIGxldCBydWxlcyA9IFtcbiAgICAgIGRvY3VtZW50UnVsZSxcbiAgICAgIHJ1bGVSdWxlLFxuICAgICAgbmFtZVJ1bGUsXG4gICAgICBkZWZpbml0aW9uc1J1bGUsXG4gICAgICBkZWZpbml0aW9uUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIHRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSxcbiAgICAgIGNob2ljZU9mUGFydHNSdWxlLFxuICAgICAgZ3JvdXBPZlBhcnRzUnVsZSxcbiAgICAgIHJ1bGVOYW1lUnVsZSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSxcbiAgICAgIGVuZE9mTGluZVJ1bGUsXG4gICAgICBlcHNpbG9uUnVsZSxcbiAgICAgIHdpbGRjYXJkUnVsZSxcbiAgICAgIHF1YW50aWZpZXJSdWxlLFxuICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlLFxuICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSxcbiAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgZXJyb3JSdWxlXG4gICAgXTtcblxuICAgIGNvbnN0IGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIocnVsZXMpO1xuICAgIFxuICAgIHJldHVybiBibmZQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihCTkZQYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG4iXX0=