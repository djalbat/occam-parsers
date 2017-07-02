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
    PartRule = require('./rule/part.old'),
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
    SignificantTokenTypeRule = require('./rule/significantTokenType'),
    RightRecursivePartRule = require('./rule/rightRecursivePart');

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
          significantTokenTypeRule = new SignificantTokenTypeRule(),
          rightRecursivePartRule = new RightRecursivePartRule();

      var rules = [rulesRule, ruleRule, definitionsRule, definitionRule, noWhitespacePartRule, optionalPartRule, zeroOrMorePartsRule, oneOrMorePartsRule, groupOfPartsRule, choiceOfPartsRule, partRule, ruleNameRule, regularExpressionRule, significantTokenTypeRule, terminalSymbolRule, endOfLineRule, epsilonRule, wildcardRule, rightRecursivePartRule];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLm9sZC5qcyJdLCJuYW1lcyI6WyJjeWNsZXMiLCJyZXF1aXJlIiwibGVmdFJlY3Vyc2lvbiIsImJuZiIsIlJ1bGUiLCJEZWZpbml0aW9uIiwiQ29tbW9uUGFyc2VyIiwiUGFydFJ1bGUiLCJSdWxlUnVsZSIsIlJ1bGVzUnVsZSIsIlJ1bGVOYW1lUnVsZSIsIkVwc2lsb25SdWxlIiwiV2lsZGNhcmRSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsIkRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwiR3JvdXBPZlBhcnRzUnVsZSIsIkNob2ljZU9mUGFydHNSdWxlIiwiT3B0aW9uYWxQYXJ0UnVsZSIsIlplcm9Pck1vcmVQYXJ0c1J1bGUiLCJPbmVPck1vcmVQYXJ0c1J1bGUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJOb1doaXRlc3BhY2VQYXJ0UnVsZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIlJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUiLCJCTkZQYXJzZXIiLCJub2RlIiwibWFwcGluZ3MiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJwYXJ0UnVsZSIsInJ1bGVSdWxlIiwicnVsZXNSdWxlIiwicnVsZU5hbWVSdWxlIiwiZXBzaWxvblJ1bGUiLCJ3aWxkY2FyZFJ1bGUiLCJlbmRPZkxpbmVSdWxlIiwiZGVmaW5pdGlvblJ1bGUiLCJkZWZpbml0aW9uc1J1bGUiLCJncm91cE9mUGFydHNSdWxlIiwiY2hvaWNlT2ZQYXJ0c1J1bGUiLCJvcHRpb25hbFBhcnRSdWxlIiwiemVyb09yTW9yZVBhcnRzUnVsZSIsIm9uZU9yTW9yZVBhcnRzUnVsZSIsInRlcm1pbmFsU3ltYm9sUnVsZSIsIm5vV2hpdGVzcGFjZVBhcnRSdWxlIiwicmVndWxhckV4cHJlc3Npb25SdWxlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwicmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSIsImVsaW1p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VUFpQk15QiwyQkFBMkIsSUFBSXhCLHdCQUFKLEVBakJqQztBQUFBLFVBa0JNeUIseUJBQXlCLElBQUl4QixzQkFBSixFQWxCL0I7O0FBb0JBLFVBQUlJLFFBQVEsQ0FDVkksU0FEVSxFQUVWRCxRQUZVLEVBR1ZPLGVBSFUsRUFJVkQsY0FKVSxFQUtWUSxvQkFMVSxFQU1WSixnQkFOVSxFQU9WQyxtQkFQVSxFQVFWQyxrQkFSVSxFQVNWSixnQkFUVSxFQVVWQyxpQkFWVSxFQVdWVixRQVhVLEVBWVZHLFlBWlUsRUFhVmEscUJBYlUsRUFjVkMsd0JBZFUsRUFlVkgsa0JBZlUsRUFnQlZSLGFBaEJVLEVBaUJWRixXQWpCVSxFQWtCVkMsWUFsQlUsRUFtQlZhLHNCQW5CVSxDQUFaOztBQXNCQXBCLGNBQVE3QixPQUFPa0QsU0FBUCxDQUFpQnJCLEtBQWpCLENBQVIsQ0EzQ21CLENBMkNlOztBQUVsQ0EsY0FBUTNCLGNBQWNnRCxTQUFkLENBQXdCckIsS0FBeEIsQ0FBUixDQTdDbUIsQ0E2Q3NCOztBQUV6QyxVQUFNc0IsWUFBWSxJQUFJekIsU0FBSixDQUFjRyxLQUFkLENBQWxCOztBQUVBLGFBQU9zQixTQUFQO0FBQ0Q7Ozs7RUEzRHFCN0MsWTs7QUE4RHhCOEMsT0FBT0MsT0FBUCxHQUFpQjNCLFNBQWpCOztBQUVBQSxVQUFVdkIsR0FBVixHQUFnQkEsR0FBaEIiLCJmaWxlIjoicGFyc2VyLm9sZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3ljbGVzID0gcmVxdWlyZSgnLi4vZ3JhbW1hci9jeWNsZXMnKSxcbiAgICAgIGxlZnRSZWN1cnNpb24gPSByZXF1aXJlKCcuLi9ncmFtbWFyL2xlZnRSZWN1cnNpb24nKSxcbiAgICAgIGJuZiA9IHJlcXVpcmUoJy4vYm5mJyksXG4gICAgICBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi9kZWZpbml0aW9uJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBQYXJ0UnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9wYXJ0Lm9sZCcpLFxuICAgICAgUnVsZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZScpLFxuICAgICAgUnVsZXNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3J1bGVzJyksXG4gICAgICBSdWxlTmFtZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZU5hbWUnKSxcbiAgICAgIEVwc2lsb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL2Vwc2lsb24nKSxcbiAgICAgIFdpbGRjYXJkUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS93aWxkY2FyZCcpLFxuICAgICAgRW5kT2ZMaW5lUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9lbmRPZkxpbmUnKSxcbiAgICAgIERlZmluaXRpb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL2RlZmluaXRpb24nKSxcbiAgICAgIERlZmluaXRpb25zUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kZWZpbml0aW9ucycpLFxuICAgICAgR3JvdXBPZlBhcnRzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ncm91cE9mUGFydHMnKSxcbiAgICAgIENob2ljZU9mUGFydHNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2Nob2ljZU9mUGFydHMnKSxcbiAgICAgIE9wdGlvbmFsUGFydFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvb3B0aW9uYWxQYXJ0JyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3plcm9Pck1vcmVQYXJ0cycpLFxuICAgICAgT25lT3JNb3JlUGFydHNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIE5vV2hpdGVzcGFjZVBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL25vV2hpdGVzcGFjZVBhcnQnKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3JpZ2h0UmVjdXJzaXZlUGFydCcpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZ2VuZXJhdGVSdWxlcyhub2RlLCBtYXBwaW5ncyA9IHt9KSB7XG4gICAgY29uc3QgcnVsZXMgPSAobm9kZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUsIERlZmluaXRpb24sIG1hcHBpbmdzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIFtdO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUoKSxcbiAgICAgICAgICBydWxlc1J1bGUgPSBuZXcgUnVsZXNSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gbmV3IFJ1bGVOYW1lUnVsZSgpLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gbmV3IEVwc2lsb25SdWxlKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gbmV3IFdpbGRjYXJkUnVsZSgpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGUgPSBuZXcgRW5kT2ZMaW5lUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlID0gbmV3IERlZmluaXRpb25SdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gbmV3IERlZmluaXRpb25zUnVsZSgpLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1J1bGUgPSBuZXcgR3JvdXBPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlID0gbmV3IENob2ljZU9mUGFydHNSdWxlKCksXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UnVsZSA9IG5ldyBPcHRpb25hbFBhcnRSdWxlKCksXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUnVsZSA9IG5ldyBaZXJvT3JNb3JlUGFydHNSdWxlKCksXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNSdWxlID0gbmV3IE9uZU9yTW9yZVBhcnRzUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSA9IG5ldyBUZXJtaW5hbFN5bWJvbFJ1bGUoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKCksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSA9IG5ldyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBbXG4gICAgICBydWxlc1J1bGUsXG4gICAgICBydWxlUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUsXG4gICAgICBvcHRpb25hbFBhcnRSdWxlLFxuICAgICAgemVyb09yTW9yZVBhcnRzUnVsZSxcbiAgICAgIG9uZU9yTW9yZVBhcnRzUnVsZSxcbiAgICAgIGdyb3VwT2ZQYXJ0c1J1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgcnVsZU5hbWVSdWxlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLFxuICAgICAgdGVybWluYWxTeW1ib2xSdWxlLFxuICAgICAgZW5kT2ZMaW5lUnVsZSxcbiAgICAgIGVwc2lsb25SdWxlLFxuICAgICAgd2lsZGNhcmRSdWxlLFxuICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZVxuICAgIF07XG5cbiAgICBydWxlcyA9IGN5Y2xlcy5lbGltaW5hdGUocnVsZXMpOyAgLy8vXG5cbiAgICBydWxlcyA9IGxlZnRSZWN1cnNpb24uZWxpbWluYXRlKHJ1bGVzKTsgIC8vL1xuXG4gICAgY29uc3QgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihydWxlcyk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcblxuQk5GUGFyc2VyLmJuZiA9IGJuZjtcbiJdfQ==