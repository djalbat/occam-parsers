'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bnf = require('./bnf'),
    Rule = require('./rule'),
    Definition = require('./definition'),
    CommonParser = require('../common/parser'),
    PartRule = require('./rule/part'),
    RuleRule = require('./rule/rule'),
    RulesRule = require('./rule/rules'),
    EpsilonRule = require('./rule/epsilon'),
    WildcardRule = require('./rule/wildcard'),
    RuleNameRule = require('./rule/ruleName'),
    EndOfLineRule = require('./rule/endOfLine'),
    DefinitionRule = require('./rule/definition'),
    DefinitionsRule = require('./rule/definitions'),
    TerminalSymbolRule = require('./rule/terminalSymbol'),
    RegularExpressionRule = require('./rule/regularExpression'),
    RightRecursivePartRule = require('./rule/rightRecursivePart'),
    SignificantTokenTypeRule = require('./rule/significantTokenType');

var BNFParser = function (_CommonParser) {
  _inherits(BNFParser, _CommonParser);

  function BNFParser() {
    _classCallCheck(this, BNFParser);

    return _possibleConstructorReturn(this, (BNFParser.__proto__ || Object.getPrototypeOf(BNFParser)).apply(this, arguments));
  }

  _createClass(BNFParser, [{
    key: 'rulesNodeFromLines',
    value: function rulesNodeFromLines(lines, rule) {
      var node = this.nodeFromLines(lines, rule),
          rulesNode = node; ///

      return rulesNode;
    }
  }], [{
    key: 'generateRules',
    value: function generateRules(rulesNode) {
      var mappings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var rules = rulesNode !== null ? rulesNode.generateRules(Rule, Definition, mappings) : [];

      return rules;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var partRule = new PartRule(),
          ruleRule = new RuleRule(),
          rulesRule = new RulesRule(),
          epsilonRule = new EpsilonRule(),
          wildcardRule = new WildcardRule(),
          ruleNameRule = new RuleNameRule(),
          endOfLineRule = new EndOfLineRule(),
          definitionRule = new DefinitionRule(),
          definitionsRule = new DefinitionsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          regularExpressionRule = new RegularExpressionRule(),
          rightRecursivePartRule = new RightRecursivePartRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule();

      var rules = [rulesRule, ruleRule, definitionsRule, definitionRule, partRule, ruleNameRule, regularExpressionRule, significantTokenTypeRule, terminalSymbolRule, endOfLineRule, epsilonRule, wildcardRule, rightRecursivePartRule];

      var bnfParser = new BNFParser(rules);

      return bnfParser;
    }
  }]);

  return BNFParser;
}(CommonParser);

module.exports = BNFParser;

BNFParser.bnf = bnf;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImJuZiIsInJlcXVpcmUiLCJSdWxlIiwiRGVmaW5pdGlvbiIsIkNvbW1vblBhcnNlciIsIlBhcnRSdWxlIiwiUnVsZVJ1bGUiLCJSdWxlc1J1bGUiLCJFcHNpbG9uUnVsZSIsIldpbGRjYXJkUnVsZSIsIlJ1bGVOYW1lUnVsZSIsIkVuZE9mTGluZVJ1bGUiLCJEZWZpbml0aW9uUnVsZSIsIkRlZmluaXRpb25zUnVsZSIsIlRlcm1pbmFsU3ltYm9sUnVsZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIlJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJCTkZQYXJzZXIiLCJsaW5lcyIsInJ1bGUiLCJub2RlIiwibm9kZUZyb21MaW5lcyIsInJ1bGVzTm9kZSIsIm1hcHBpbmdzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwicGFydFJ1bGUiLCJydWxlUnVsZSIsInJ1bGVzUnVsZSIsImVwc2lsb25SdWxlIiwid2lsZGNhcmRSdWxlIiwicnVsZU5hbWVSdWxlIiwiZW5kT2ZMaW5lUnVsZSIsImRlZmluaXRpb25SdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwidGVybWluYWxTeW1ib2xSdWxlIiwicmVndWxhckV4cHJlc3Npb25SdWxlIiwicmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsImJuZlBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSxPQUFSLENBQVo7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLFFBQVIsQ0FEYjtBQUFBLElBRU1FLGFBQWFGLFFBQVEsY0FBUixDQUZuQjtBQUFBLElBR01HLGVBQWVILFFBQVEsa0JBQVIsQ0FIckI7QUFBQSxJQUlNSSxXQUFXSixRQUFRLGFBQVIsQ0FKakI7QUFBQSxJQUtNSyxXQUFXTCxRQUFRLGFBQVIsQ0FMakI7QUFBQSxJQU1NTSxZQUFZTixRQUFRLGNBQVIsQ0FObEI7QUFBQSxJQU9NTyxjQUFjUCxRQUFRLGdCQUFSLENBUHBCO0FBQUEsSUFRTVEsZUFBZVIsUUFBUSxpQkFBUixDQVJyQjtBQUFBLElBU01TLGVBQWVULFFBQVEsaUJBQVIsQ0FUckI7QUFBQSxJQVVNVSxnQkFBZ0JWLFFBQVEsa0JBQVIsQ0FWdEI7QUFBQSxJQVdNVyxpQkFBaUJYLFFBQVEsbUJBQVIsQ0FYdkI7QUFBQSxJQVlNWSxrQkFBa0JaLFFBQVEsb0JBQVIsQ0FaeEI7QUFBQSxJQWFNYSxxQkFBcUJiLFFBQVEsdUJBQVIsQ0FiM0I7QUFBQSxJQWNNYyx3QkFBd0JkLFFBQVEsMEJBQVIsQ0FkOUI7QUFBQSxJQWVNZSx5QkFBeUJmLFFBQVEsMkJBQVIsQ0FmL0I7QUFBQSxJQWdCTWdCLDJCQUEyQmhCLFFBQVEsNkJBQVIsQ0FoQmpDOztJQWtCTWlCLFM7Ozs7Ozs7Ozs7O3VDQUNlQyxLLEVBQU9DLEksRUFBTTtBQUM5QixVQUFNQyxPQUFPLEtBQUtDLGFBQUwsQ0FBbUJILEtBQW5CLEVBQTBCQyxJQUExQixDQUFiO0FBQUEsVUFDTUcsWUFBWUYsSUFEbEIsQ0FEOEIsQ0FFTjs7QUFFeEIsYUFBT0UsU0FBUDtBQUNEOzs7a0NBRW9CQSxTLEVBQTBCO0FBQUEsVUFBZkMsUUFBZSx1RUFBSixFQUFJOztBQUM3QyxVQUFNQyxRQUFTRixjQUFjLElBQWYsR0FDR0EsVUFBVUcsYUFBVixDQUF3QnhCLElBQXhCLEVBQThCQyxVQUE5QixFQUEwQ3FCLFFBQTFDLENBREgsR0FFSyxFQUZuQjs7QUFJQSxhQUFPQyxLQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUUsV0FBVyxJQUFJdEIsUUFBSixFQUFqQjtBQUFBLFVBQ011QixXQUFXLElBQUl0QixRQUFKLEVBRGpCO0FBQUEsVUFFTXVCLFlBQVksSUFBSXRCLFNBQUosRUFGbEI7QUFBQSxVQUdNdUIsY0FBYyxJQUFJdEIsV0FBSixFQUhwQjtBQUFBLFVBSU11QixlQUFlLElBQUl0QixZQUFKLEVBSnJCO0FBQUEsVUFLTXVCLGVBQWUsSUFBSXRCLFlBQUosRUFMckI7QUFBQSxVQU1NdUIsZ0JBQWdCLElBQUl0QixhQUFKLEVBTnRCO0FBQUEsVUFPTXVCLGlCQUFpQixJQUFJdEIsY0FBSixFQVB2QjtBQUFBLFVBUU11QixrQkFBa0IsSUFBSXRCLGVBQUosRUFSeEI7QUFBQSxVQVNNdUIscUJBQXFCLElBQUl0QixrQkFBSixFQVQzQjtBQUFBLFVBVU11Qix3QkFBd0IsSUFBSXRCLHFCQUFKLEVBVjlCO0FBQUEsVUFXTXVCLHlCQUF5QixJQUFJdEIsc0JBQUosRUFYL0I7QUFBQSxVQVlNdUIsMkJBQTJCLElBQUl0Qix3QkFBSixFQVpqQzs7QUFjQSxVQUFJUSxRQUFRLENBQ1ZJLFNBRFUsRUFFVkQsUUFGVSxFQUdWTyxlQUhVLEVBSVZELGNBSlUsRUFLVlAsUUFMVSxFQU1WSyxZQU5VLEVBT1ZLLHFCQVBVLEVBUVZFLHdCQVJVLEVBU1ZILGtCQVRVLEVBVVZILGFBVlUsRUFXVkgsV0FYVSxFQVlWQyxZQVpVLEVBYVZPLHNCQWJVLENBQVo7O0FBZ0JBLFVBQU1FLFlBQVksSUFBSXRCLFNBQUosQ0FBY08sS0FBZCxDQUFsQjs7QUFFQSxhQUFPZSxTQUFQO0FBQ0Q7Ozs7RUFsRHFCcEMsWTs7QUFxRHhCcUMsT0FBT0MsT0FBUCxHQUFpQnhCLFNBQWpCOztBQUVBQSxVQUFVbEIsR0FBVixHQUFnQkEsR0FBaEIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4vZGVmaW5pdGlvbicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgUGFydFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcGFydCcpLFxuICAgICAgUnVsZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZScpLFxuICAgICAgUnVsZXNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3J1bGVzJyksXG4gICAgICBFcHNpbG9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9lcHNpbG9uJyksXG4gICAgICBXaWxkY2FyZFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvd2lsZGNhcmQnKSxcbiAgICAgIFJ1bGVOYW1lUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlTmFtZScpLFxuICAgICAgRW5kT2ZMaW5lUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9lbmRPZkxpbmUnKSxcbiAgICAgIERlZmluaXRpb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL2RlZmluaXRpb24nKSxcbiAgICAgIERlZmluaXRpb25zUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kZWZpbml0aW9ucycpLFxuICAgICAgVGVybWluYWxTeW1ib2xSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcmVndWxhckV4cHJlc3Npb24nKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcmlnaHRSZWN1cnNpdmVQYXJ0JyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgQk5GUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgcnVsZXNOb2RlRnJvbUxpbmVzKGxpbmVzLCBydWxlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZUZyb21MaW5lcyhsaW5lcywgcnVsZSksXG4gICAgICAgICAgcnVsZXNOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcnVsZXNOb2RlO1xuICB9XG5cbiAgc3RhdGljIGdlbmVyYXRlUnVsZXMocnVsZXNOb2RlLCBtYXBwaW5ncyA9IHt9KSB7XG4gICAgY29uc3QgcnVsZXMgPSAocnVsZXNOb2RlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICBydWxlc05vZGUuZ2VuZXJhdGVSdWxlcyhSdWxlLCBEZWZpbml0aW9uLCBtYXBwaW5ncykgOlxuICAgICAgICAgICAgICAgICAgICAgICBbXTtcblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBwYXJ0UnVsZSA9IG5ldyBQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJ1bGVSdWxlID0gbmV3IFJ1bGVSdWxlKCksXG4gICAgICAgICAgcnVsZXNSdWxlID0gbmV3IFJ1bGVzUnVsZSgpLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gbmV3IEVwc2lsb25SdWxlKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gbmV3IFdpbGRjYXJkUnVsZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZSA9IG5ldyBSdWxlTmFtZVJ1bGUoKSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlID0gbmV3IEVuZE9mTGluZVJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uUnVsZSA9IG5ldyBEZWZpbml0aW9uUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZSA9IG5ldyBEZWZpbml0aW9uc1J1bGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUgPSBuZXcgVGVybWluYWxTeW1ib2xSdWxlKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUnVsZSgpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUgPSBuZXcgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUoKTtcblxuICAgIGxldCBydWxlcyA9IFtcbiAgICAgIHJ1bGVzUnVsZSxcbiAgICAgIHJ1bGVSdWxlLFxuICAgICAgZGVmaW5pdGlvbnNSdWxlLFxuICAgICAgZGVmaW5pdGlvblJ1bGUsXG4gICAgICBwYXJ0UnVsZSxcbiAgICAgIHJ1bGVOYW1lUnVsZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSxcbiAgICAgIGVuZE9mTGluZVJ1bGUsXG4gICAgICBlcHNpbG9uUnVsZSxcbiAgICAgIHdpbGRjYXJkUnVsZSxcbiAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVcbiAgICBdO1xuXG4gICAgY29uc3QgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihydWxlcyk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcblxuQk5GUGFyc2VyLmJuZiA9IGJuZjtcbiJdfQ==