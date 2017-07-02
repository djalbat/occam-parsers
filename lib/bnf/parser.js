'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cycles = require('../grammar/cycles'),
    leftRecursion = require('../grammar/leftRecursion'),
    bnf = require('./bnf'),
    Rule = require('./rule'),
    Definition = require('./definition'),
    CommonParser = require('../common/parser'),
    PartRule = require('./rule/part'),
    RuleRule = require('./rule/rule'),
    RulesRule = require('./rule/rules'),
    RuleNameRule = require('./rule/ruleName'),
    EpsilonRule = require('./rule/epsilon'),
    WildcardRule = require('./rule/wildcard'),
    EndOfLineRule = require('./rule/endOfLine'),
    DefinitionRule = require('./rule/definition'),
    DefinitionsRule = require('./rule/definitions'),
    GroupOfPartsRule = require('./rule/groupOfParts'),
    ChoiceOfPartsRule = require('./rule/choiceOfParts'),
    OptionalPartRule = require('./rule/optionalPart'),
    ZeroOrMorePartsRule = require('./rule/zeroOrMoreParts'),
    OneOrMorePartsRule = require('./rule/oneOrMoreParts'),
    TerminalSymbolRule = require('./rule/terminalSymbol'),
    NoWhitespacePartRule = require('./rule/noWhitespacePart'),
    RegularExpressionRule = require('./rule/regularExpression'),
    SignificantTokenTypeRule = require('./rule/significantTokenType');

var BNFParser = function (_CommonParser) {
  _inherits(BNFParser, _CommonParser);

  function BNFParser() {
    _classCallCheck(this, BNFParser);

    return _possibleConstructorReturn(this, (BNFParser.__proto__ || Object.getPrototypeOf(BNFParser)).apply(this, arguments));
  }

  _createClass(BNFParser, null, [{
    key: 'generateRules',
    value: function generateRules(node) {
      var mappings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var rules = node !== null ? node.generateRules(Rule, Definition, mappings) : [];

      return rules;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var partRule = new PartRule(),
          ruleRule = new RuleRule(),
          rulesRule = new RulesRule(),
          ruleNameRule = new RuleNameRule(),
          epsilonRule = new EpsilonRule(),
          wildcardRule = new WildcardRule(),
          endOfLineRule = new EndOfLineRule(),
          definitionRule = new DefinitionRule(),
          definitionsRule = new DefinitionsRule(),
          groupOfPartsRule = new GroupOfPartsRule(),
          choiceOfPartsRule = new ChoiceOfPartsRule(),
          optionalPartRule = new OptionalPartRule(),
          zeroOrMorePartsRule = new ZeroOrMorePartsRule(),
          oneOrMorePartsRule = new OneOrMorePartsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          noWhitespacePartRule = new NoWhitespacePartRule(),
          regularExpressionRule = new RegularExpressionRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule();

      var rules = [rulesRule, ruleRule, definitionsRule, definitionRule, noWhitespacePartRule, optionalPartRule, zeroOrMorePartsRule, oneOrMorePartsRule, groupOfPartsRule, choiceOfPartsRule, partRule, ruleNameRule, regularExpressionRule, significantTokenTypeRule, terminalSymbolRule, endOfLineRule, epsilonRule, wildcardRule];

      rules = cycles.eliminate(rules); ///

      rules = leftRecursion.eliminate(rules); ///

      var bnfParser = new BNFParser(rules);

      return bnfParser;
    }
  }]);

  return BNFParser;
}(CommonParser);

module.exports = BNFParser;

BNFParser.bnf = bnf;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImN5Y2xlcyIsInJlcXVpcmUiLCJsZWZ0UmVjdXJzaW9uIiwiYm5mIiwiUnVsZSIsIkRlZmluaXRpb24iLCJDb21tb25QYXJzZXIiLCJQYXJ0UnVsZSIsIlJ1bGVSdWxlIiwiUnVsZXNSdWxlIiwiUnVsZU5hbWVSdWxlIiwiRXBzaWxvblJ1bGUiLCJXaWxkY2FyZFJ1bGUiLCJFbmRPZkxpbmVSdWxlIiwiRGVmaW5pdGlvblJ1bGUiLCJEZWZpbml0aW9uc1J1bGUiLCJHcm91cE9mUGFydHNSdWxlIiwiQ2hvaWNlT2ZQYXJ0c1J1bGUiLCJPcHRpb25hbFBhcnRSdWxlIiwiWmVyb09yTW9yZVBhcnRzUnVsZSIsIk9uZU9yTW9yZVBhcnRzUnVsZSIsIlRlcm1pbmFsU3ltYm9sUnVsZSIsIk5vV2hpdGVzcGFjZVBhcnRSdWxlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiQk5GUGFyc2VyIiwibm9kZSIsIm1hcHBpbmdzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwicGFydFJ1bGUiLCJydWxlUnVsZSIsInJ1bGVzUnVsZSIsInJ1bGVOYW1lUnVsZSIsImVwc2lsb25SdWxlIiwid2lsZGNhcmRSdWxlIiwiZW5kT2ZMaW5lUnVsZSIsImRlZmluaXRpb25SdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwiZ3JvdXBPZlBhcnRzUnVsZSIsImNob2ljZU9mUGFydHNSdWxlIiwib3B0aW9uYWxQYXJ0UnVsZSIsInplcm9Pck1vcmVQYXJ0c1J1bGUiLCJvbmVPck1vcmVQYXJ0c1J1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJub1doaXRlc3BhY2VQYXJ0UnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsImVsaW1pbmF0ZSIsImJuZlBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxtQkFBUixDQUFmO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLDBCQUFSLENBRHRCO0FBQUEsSUFFTUUsTUFBTUYsUUFBUSxPQUFSLENBRlo7QUFBQSxJQUdNRyxPQUFPSCxRQUFRLFFBQVIsQ0FIYjtBQUFBLElBSU1JLGFBQWFKLFFBQVEsY0FBUixDQUpuQjtBQUFBLElBS01LLGVBQWVMLFFBQVEsa0JBQVIsQ0FMckI7QUFBQSxJQU1NTSxXQUFXTixRQUFRLGFBQVIsQ0FOakI7QUFBQSxJQU9NTyxXQUFXUCxRQUFRLGFBQVIsQ0FQakI7QUFBQSxJQVFNUSxZQUFZUixRQUFRLGNBQVIsQ0FSbEI7QUFBQSxJQVNNUyxlQUFlVCxRQUFRLGlCQUFSLENBVHJCO0FBQUEsSUFVTVUsY0FBY1YsUUFBUSxnQkFBUixDQVZwQjtBQUFBLElBV01XLGVBQWVYLFFBQVEsaUJBQVIsQ0FYckI7QUFBQSxJQVlNWSxnQkFBZ0JaLFFBQVEsa0JBQVIsQ0FadEI7QUFBQSxJQWFNYSxpQkFBaUJiLFFBQVEsbUJBQVIsQ0FidkI7QUFBQSxJQWNNYyxrQkFBa0JkLFFBQVEsb0JBQVIsQ0FkeEI7QUFBQSxJQWVNZSxtQkFBbUJmLFFBQVEscUJBQVIsQ0FmekI7QUFBQSxJQWdCTWdCLG9CQUFvQmhCLFFBQVEsc0JBQVIsQ0FoQjFCO0FBQUEsSUFpQk1pQixtQkFBbUJqQixRQUFRLHFCQUFSLENBakJ6QjtBQUFBLElBa0JNa0Isc0JBQXNCbEIsUUFBUSx3QkFBUixDQWxCNUI7QUFBQSxJQW1CTW1CLHFCQUFxQm5CLFFBQVEsdUJBQVIsQ0FuQjNCO0FBQUEsSUFvQk1vQixxQkFBcUJwQixRQUFRLHVCQUFSLENBcEIzQjtBQUFBLElBcUJNcUIsdUJBQXVCckIsUUFBUSx5QkFBUixDQXJCN0I7QUFBQSxJQXNCTXNCLHdCQUF3QnRCLFFBQVEsMEJBQVIsQ0F0QjlCO0FBQUEsSUF1Qk11QiwyQkFBMkJ2QixRQUFRLDZCQUFSLENBdkJqQzs7SUF5Qk13QixTOzs7Ozs7Ozs7OztrQ0FDaUJDLEksRUFBcUI7QUFBQSxVQUFmQyxRQUFlLHVFQUFKLEVBQUk7O0FBQ3hDLFVBQU1DLFFBQVNGLFNBQVMsSUFBVixHQUNHQSxLQUFLRyxhQUFMLENBQW1CekIsSUFBbkIsRUFBeUJDLFVBQXpCLEVBQXFDc0IsUUFBckMsQ0FESCxHQUVLLEVBRm5COztBQUlBLGFBQU9DLEtBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNRSxXQUFXLElBQUl2QixRQUFKLEVBQWpCO0FBQUEsVUFDTXdCLFdBQVcsSUFBSXZCLFFBQUosRUFEakI7QUFBQSxVQUVNd0IsWUFBWSxJQUFJdkIsU0FBSixFQUZsQjtBQUFBLFVBR013QixlQUFlLElBQUl2QixZQUFKLEVBSHJCO0FBQUEsVUFJTXdCLGNBQWMsSUFBSXZCLFdBQUosRUFKcEI7QUFBQSxVQUtNd0IsZUFBZSxJQUFJdkIsWUFBSixFQUxyQjtBQUFBLFVBTU13QixnQkFBZ0IsSUFBSXZCLGFBQUosRUFOdEI7QUFBQSxVQU9Nd0IsaUJBQWlCLElBQUl2QixjQUFKLEVBUHZCO0FBQUEsVUFRTXdCLGtCQUFrQixJQUFJdkIsZUFBSixFQVJ4QjtBQUFBLFVBU013QixtQkFBbUIsSUFBSXZCLGdCQUFKLEVBVHpCO0FBQUEsVUFVTXdCLG9CQUFvQixJQUFJdkIsaUJBQUosRUFWMUI7QUFBQSxVQVdNd0IsbUJBQW1CLElBQUl2QixnQkFBSixFQVh6QjtBQUFBLFVBWU13QixzQkFBc0IsSUFBSXZCLG1CQUFKLEVBWjVCO0FBQUEsVUFhTXdCLHFCQUFxQixJQUFJdkIsa0JBQUosRUFiM0I7QUFBQSxVQWNNd0IscUJBQXFCLElBQUl2QixrQkFBSixFQWQzQjtBQUFBLFVBZU13Qix1QkFBdUIsSUFBSXZCLG9CQUFKLEVBZjdCO0FBQUEsVUFnQk13Qix3QkFBd0IsSUFBSXZCLHFCQUFKLEVBaEI5QjtBQUFBLFVBaUJNd0IsMkJBQTJCLElBQUl2Qix3QkFBSixFQWpCakM7O0FBbUJBLFVBQUlJLFFBQVEsQ0FDVkksU0FEVSxFQUVWRCxRQUZVLEVBR1ZPLGVBSFUsRUFJVkQsY0FKVSxFQUtWUSxvQkFMVSxFQU1WSixnQkFOVSxFQU9WQyxtQkFQVSxFQVFWQyxrQkFSVSxFQVNWSixnQkFUVSxFQVVWQyxpQkFWVSxFQVdWVixRQVhVLEVBWVZHLFlBWlUsRUFhVmEscUJBYlUsRUFjVkMsd0JBZFUsRUFlVkgsa0JBZlUsRUFnQlZSLGFBaEJVLEVBaUJWRixXQWpCVSxFQWtCVkMsWUFsQlUsQ0FBWjs7QUFxQkFQLGNBQVE1QixPQUFPZ0QsU0FBUCxDQUFpQnBCLEtBQWpCLENBQVIsQ0F6Q21CLENBeUNlOztBQUVsQ0EsY0FBUTFCLGNBQWM4QyxTQUFkLENBQXdCcEIsS0FBeEIsQ0FBUixDQTNDbUIsQ0EyQ3NCOztBQUV6QyxVQUFNcUIsWUFBWSxJQUFJeEIsU0FBSixDQUFjRyxLQUFkLENBQWxCOztBQUVBLGFBQU9xQixTQUFQO0FBQ0Q7Ozs7RUF6RHFCM0MsWTs7QUE0RHhCNEMsT0FBT0MsT0FBUCxHQUFpQjFCLFNBQWpCOztBQUVBQSxVQUFVdEIsR0FBVixHQUFnQkEsR0FBaEIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjeWNsZXMgPSByZXF1aXJlKCcuLi9ncmFtbWFyL2N5Y2xlcycpLFxuICAgICAgbGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvbGVmdFJlY3Vyc2lvbicpLFxuICAgICAgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuL2RlZmluaXRpb24nKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3BhcnQnKSxcbiAgICAgIFJ1bGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3J1bGUnKSxcbiAgICAgIFJ1bGVzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlcycpLFxuICAgICAgUnVsZU5hbWVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3J1bGVOYW1lJyksXG4gICAgICBFcHNpbG9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9lcHNpbG9uJyksXG4gICAgICBXaWxkY2FyZFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvd2lsZGNhcmQnKSxcbiAgICAgIEVuZE9mTGluZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZW5kT2ZMaW5lJyksXG4gICAgICBEZWZpbml0aW9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kZWZpbml0aW9uJyksXG4gICAgICBEZWZpbml0aW9uc1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvZGVmaW5pdGlvbnMnKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvZ3JvdXBPZlBhcnRzJyksXG4gICAgICBDaG9pY2VPZlBhcnRzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9jaG9pY2VPZlBhcnRzJyksXG4gICAgICBPcHRpb25hbFBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL29wdGlvbmFsUGFydCcpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS96ZXJvT3JNb3JlUGFydHMnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgVGVybWluYWxTeW1ib2xSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBOb1doaXRlc3BhY2VQYXJ0UnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ub1doaXRlc3BhY2VQYXJ0JyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcmVndWxhckV4cHJlc3Npb24nKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZ2VuZXJhdGVSdWxlcyhub2RlLCBtYXBwaW5ncyA9IHt9KSB7XG4gICAgY29uc3QgcnVsZXMgPSAobm9kZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUsIERlZmluaXRpb24sIG1hcHBpbmdzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIFtdO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUoKSxcbiAgICAgICAgICBydWxlc1J1bGUgPSBuZXcgUnVsZXNSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gbmV3IFJ1bGVOYW1lUnVsZSgpLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gbmV3IEVwc2lsb25SdWxlKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gbmV3IFdpbGRjYXJkUnVsZSgpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGUgPSBuZXcgRW5kT2ZMaW5lUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlID0gbmV3IERlZmluaXRpb25SdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gbmV3IERlZmluaXRpb25zUnVsZSgpLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1J1bGUgPSBuZXcgR3JvdXBPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlID0gbmV3IENob2ljZU9mUGFydHNSdWxlKCksXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UnVsZSA9IG5ldyBPcHRpb25hbFBhcnRSdWxlKCksXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUnVsZSA9IG5ldyBaZXJvT3JNb3JlUGFydHNSdWxlKCksXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNSdWxlID0gbmV3IE9uZU9yTW9yZVBhcnRzUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSA9IG5ldyBUZXJtaW5hbFN5bWJvbFJ1bGUoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBbXG4gICAgICBydWxlc1J1bGUsXG4gICAgICBydWxlUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUsXG4gICAgICBvcHRpb25hbFBhcnRSdWxlLFxuICAgICAgemVyb09yTW9yZVBhcnRzUnVsZSxcbiAgICAgIG9uZU9yTW9yZVBhcnRzUnVsZSxcbiAgICAgIGdyb3VwT2ZQYXJ0c1J1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgcnVsZU5hbWVSdWxlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLFxuICAgICAgdGVybWluYWxTeW1ib2xSdWxlLFxuICAgICAgZW5kT2ZMaW5lUnVsZSxcbiAgICAgIGVwc2lsb25SdWxlLFxuICAgICAgd2lsZGNhcmRSdWxlXG4gICAgXTtcblxuICAgIHJ1bGVzID0gY3ljbGVzLmVsaW1pbmF0ZShydWxlcyk7ICAvLy9cblxuICAgIHJ1bGVzID0gbGVmdFJlY3Vyc2lvbi5lbGltaW5hdGUocnVsZXMpOyAgLy8vXG5cbiAgICBjb25zdCBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHJ1bGVzKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GUGFyc2VyO1xuXG5CTkZQYXJzZXIuYm5mID0gYm5mO1xuIl19