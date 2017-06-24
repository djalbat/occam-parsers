'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var grammar = require('./grammar'),
    Definition = require('./definition'),
    Rule = require('./rule'),
    cycles = require('../grammar/cycles'),
    leftRecursion = require('../grammar/leftRecursion'),
    CommonParser = require('../common/parser'),
    PartRule = require('./rule/part'),
    EpsilonRule = require('./rule/epsilon'),
    WildcardRule = require('./rule/wildcard'),
    EndOfLineRule = require('./rule/endOfLine'),
    DefinitionRule = require('./rule/definition'),
    RuleRule = require('./rule/rule'),
    DefinitionsRule = require('./rule/definitions'),
    RulesRule = require('./rule/rules'),
    GroupOfPartsRule = require('./rule/groupOfParts'),
    ChoiceOfPartsRule = require('./rule/choiceOfParts'),
    OptionalPartRule = require('./rule/optionalPart'),
    ZeroOrMorePartsRule = require('./rule/zeroOrMoreParts'),
    OneOrMorePartsRule = require('./rule/oneOrMoreParts'),
    RuleNameRule = require('./rule/ruleName'),
    TerminalSymbolRule = require('./rule/terminalSymbol'),
    NoWhitespacePartRule = require('./rule/noWhitespacePart'),
    RegularExpressionRule = require('./rule/regularExpression'),
    SignificantTokenTypeRule = require('./rule/significantTokenType');

var ExtendedBNFParser = function (_CommonParser) {
  _inherits(ExtendedBNFParser, _CommonParser);

  function ExtendedBNFParser() {
    _classCallCheck(this, ExtendedBNFParser);

    return _possibleConstructorReturn(this, (ExtendedBNFParser.__proto__ || Object.getPrototypeOf(ExtendedBNFParser)).apply(this, arguments));
  }

  _createClass(ExtendedBNFParser, null, [{
    key: 'generateRules',
    value: function generateRules(node) {
      var mappings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var rules = node !== null ? node.generateRules(Rule, Definition, mappings) : [];

      rules = cycles.eliminate(rules); ///

      rules = leftRecursion.eliminate(rules); ///

      return rules;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var partRule = new PartRule(),
          epsilonRule = new EpsilonRule(),
          wildcardRule = new WildcardRule(),
          endOfLineRule = new EndOfLineRule(),
          definitionRule = new DefinitionRule(),
          ruleRule = new RuleRule(),
          definitionsRule = new DefinitionsRule(),
          rulesRule = new RulesRule(),
          groupOfPartsRule = new GroupOfPartsRule(),
          choiceOfPartsRule = new ChoiceOfPartsRule(),
          optionalPartRule = new OptionalPartRule(),
          zeroOrMorePartsRule = new ZeroOrMorePartsRule(),
          oneOrMorePartsRule = new OneOrMorePartsRule(),
          ruleNameRule = new RuleNameRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          noWhitespacePartRule = new NoWhitespacePartRule(),
          regularExpressionRule = new RegularExpressionRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule();

      var rules = [rulesRule, ruleRule, definitionsRule, definitionRule, noWhitespacePartRule, optionalPartRule, zeroOrMorePartsRule, oneOrMorePartsRule, groupOfPartsRule, choiceOfPartsRule, partRule, ruleNameRule, regularExpressionRule, significantTokenTypeRule, terminalSymbolRule, endOfLineRule, epsilonRule, wildcardRule];

      rules = cycles.eliminate(rules); ///

      rules = leftRecursion.eliminate(rules); ///

      var extendedBNFParser = new ExtendedBNFParser(rules);

      return extendedBNFParser;
    }
  }]);

  return ExtendedBNFParser;
}(CommonParser);

module.exports = ExtendedBNFParser;

ExtendedBNFParser.grammar = grammar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leHRlbmRlZEJORi9wYXJzZXIuanMiXSwibmFtZXMiOlsiZ3JhbW1hciIsInJlcXVpcmUiLCJEZWZpbml0aW9uIiwiUnVsZSIsImN5Y2xlcyIsImxlZnRSZWN1cnNpb24iLCJDb21tb25QYXJzZXIiLCJQYXJ0UnVsZSIsIkVwc2lsb25SdWxlIiwiV2lsZGNhcmRSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsIkRlZmluaXRpb25SdWxlIiwiUnVsZVJ1bGUiLCJEZWZpbml0aW9uc1J1bGUiLCJSdWxlc1J1bGUiLCJHcm91cE9mUGFydHNSdWxlIiwiQ2hvaWNlT2ZQYXJ0c1J1bGUiLCJPcHRpb25hbFBhcnRSdWxlIiwiWmVyb09yTW9yZVBhcnRzUnVsZSIsIk9uZU9yTW9yZVBhcnRzUnVsZSIsIlJ1bGVOYW1lUnVsZSIsIlRlcm1pbmFsU3ltYm9sUnVsZSIsIk5vV2hpdGVzcGFjZVBhcnRSdWxlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiRXh0ZW5kZWRCTkZQYXJzZXIiLCJub2RlIiwibWFwcGluZ3MiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJlbGltaW5hdGUiLCJwYXJ0UnVsZSIsImVwc2lsb25SdWxlIiwid2lsZGNhcmRSdWxlIiwiZW5kT2ZMaW5lUnVsZSIsImRlZmluaXRpb25SdWxlIiwicnVsZVJ1bGUiLCJkZWZpbml0aW9uc1J1bGUiLCJydWxlc1J1bGUiLCJncm91cE9mUGFydHNSdWxlIiwiY2hvaWNlT2ZQYXJ0c1J1bGUiLCJvcHRpb25hbFBhcnRSdWxlIiwiemVyb09yTW9yZVBhcnRzUnVsZSIsIm9uZU9yTW9yZVBhcnRzUnVsZSIsInJ1bGVOYW1lUnVsZSIsInRlcm1pbmFsU3ltYm9sUnVsZSIsIm5vV2hpdGVzcGFjZVBhcnRSdWxlIiwicmVndWxhckV4cHJlc3Npb25SdWxlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiZXh0ZW5kZWRCTkZQYXJzZXIiLCJtb2R1bGUi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QjtBQUFBLFVBZ0JNeUIsd0JBQXdCLElBQUl4QixxQkFBSixFQWhCOUI7QUFBQSxVQWlCTXlCLDJCQUEyQixJQUFJeEIsd0JBQUosRUFqQmpDOztBQW1CQSxVQUFJSSxRQUFRLENBQ1ZVLFNBRFUsRUFFVkYsUUFGVSxFQUdWQyxlQUhVLEVBSVZGLGNBSlUsRUFLVlcsb0JBTFUsRUFNVkwsZ0JBTlUsRUFPVkMsbUJBUFUsRUFRVkMsa0JBUlUsRUFTVkosZ0JBVFUsRUFVVkMsaUJBVlUsRUFXVlQsUUFYVSxFQVlWYSxZQVpVLEVBYVZHLHFCQWJVLEVBY1ZDLHdCQWRVLEVBZVZILGtCQWZVLEVBZ0JWWCxhQWhCVSxFQWlCVkYsV0FqQlUsRUFrQlZDLFlBbEJVLENBQVo7O0FBcUJBTCxjQUFReEIsT0FBTzBCLFNBQVAsQ0FBaUJGLEtBQWpCLENBQVIsQ0F6Q21CLENBeUNlOztBQUVsQ0EsY0FBUXZCLGNBQWN5QixTQUFkLENBQXdCRixLQUF4QixDQUFSLENBM0NtQixDQTJDc0I7O0FBRXpDLFVBQU1xQixvQkFBb0IsSUFBSXhCLGlCQUFKLENBQXNCRyxLQUF0QixDQUExQjs7QUFFQSxhQUFPcUIsaUJBQVA7QUFDRDs7OztFQTdENkIzQyxZOztBQWdFaEM0QyxPQUFPQyxPQUFQLEdBQWlCMUIsaUJBQWpCOztBQUVBQSxrQkFBa0J6QixPQUFsQixHQUE0QkEsT0FBNUIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgICBjeWNsZXMgPSByZXF1aXJlKCcuLi9ncmFtbWFyL2N5Y2xlcycpLFxuICAgICAgbGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvbGVmdFJlY3Vyc2lvbicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgUGFydFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcGFydCcpLFxuICAgICAgRXBzaWxvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZXBzaWxvbicpLFxuICAgICAgV2lsZGNhcmRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3dpbGRjYXJkJyksXG4gICAgICBFbmRPZkxpbmVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2VuZE9mTGluZScpLFxuICAgICAgRGVmaW5pdGlvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZGVmaW5pdGlvbicpLFxuICAgICAgUnVsZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZScpLFxuICAgICAgRGVmaW5pdGlvbnNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2RlZmluaXRpb25zJyksXG4gICAgICBSdWxlc1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZXMnKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvZ3JvdXBPZlBhcnRzJyksXG4gICAgICBDaG9pY2VPZlBhcnRzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9jaG9pY2VPZlBhcnRzJyksXG4gICAgICBPcHRpb25hbFBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL29wdGlvbmFsUGFydCcpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS96ZXJvT3JNb3JlUGFydHMnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgUnVsZU5hbWVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3J1bGVOYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIE5vV2hpdGVzcGFjZVBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL25vV2hpdGVzcGFjZVBhcnQnKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIEV4dGVuZGVkQk5GUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGdlbmVyYXRlUnVsZXMobm9kZSwgbWFwcGluZ3MgPSB7fSkge1xuICAgIGxldCBydWxlcyA9IChub2RlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdlbmVyYXRlUnVsZXMoUnVsZSwgRGVmaW5pdGlvbiwgbWFwcGluZ3MpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW107XG5cbiAgICBydWxlcyA9IGN5Y2xlcy5lbGltaW5hdGUocnVsZXMpOyAgLy8vXG5cbiAgICBydWxlcyA9IGxlZnRSZWN1cnNpb24uZWxpbWluYXRlKHJ1bGVzKTsgIC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKCksXG4gICAgICAgICAgZXBzaWxvblJ1bGUgPSBuZXcgRXBzaWxvblJ1bGUoKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGUgPSBuZXcgV2lsZGNhcmRSdWxlKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IG5ldyBFbmRPZkxpbmVSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBuZXcgRGVmaW5pdGlvblJ1bGUoKSxcbiAgICAgICAgICBydWxlUnVsZSA9IG5ldyBSdWxlUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZSA9IG5ldyBEZWZpbml0aW9uc1J1bGUoKSxcbiAgICAgICAgICBydWxlc1J1bGUgPSBuZXcgUnVsZXNSdWxlKCksXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUnVsZSA9IG5ldyBHcm91cE9mUGFydHNSdWxlKCksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1J1bGUoKSxcbiAgICAgICAgICBvcHRpb25hbFBhcnRSdWxlID0gbmV3IE9wdGlvbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNSdWxlID0gbmV3IFplcm9Pck1vcmVQYXJ0c1J1bGUoKSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0c1J1bGUgPSBuZXcgT25lT3JNb3JlUGFydHNSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gbmV3IFJ1bGVOYW1lUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSA9IG5ldyBUZXJtaW5hbFN5bWJvbFJ1bGUoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBbXG4gICAgICBydWxlc1J1bGUsXG4gICAgICBydWxlUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUsXG4gICAgICBvcHRpb25hbFBhcnRSdWxlLFxuICAgICAgemVyb09yTW9yZVBhcnRzUnVsZSxcbiAgICAgIG9uZU9yTW9yZVBhcnRzUnVsZSxcbiAgICAgIGdyb3VwT2ZQYXJ0c1J1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgcnVsZU5hbWVSdWxlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLFxuICAgICAgdGVybWluYWxTeW1ib2xSdWxlLFxuICAgICAgZW5kT2ZMaW5lUnVsZSxcbiAgICAgIGVwc2lsb25SdWxlLFxuICAgICAgd2lsZGNhcmRSdWxlXG4gICAgXTtcblxuICAgIHJ1bGVzID0gY3ljbGVzLmVsaW1pbmF0ZShydWxlcyk7ICAvLy9cblxuICAgIHJ1bGVzID0gbGVmdFJlY3Vyc2lvbi5lbGltaW5hdGUocnVsZXMpOyAgLy8vXG5cbiAgICBjb25zdCBleHRlbmRlZEJORlBhcnNlciA9IG5ldyBFeHRlbmRlZEJORlBhcnNlcihydWxlcyk7XG4gICAgXG4gICAgcmV0dXJuIGV4dGVuZGVkQk5GUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXh0ZW5kZWRCTkZQYXJzZXI7XG5cbkV4dGVuZGVkQk5GUGFyc2VyLmdyYW1tYXIgPSBncmFtbWFyO1xuIl19