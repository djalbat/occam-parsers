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
          regularExpressionRule = new RegularExpressionRule(),
          lookAheadModifierRule = new LookAheadModifierRule(),
          optionalQuantifierRule = new OptionalQuantifierRule(),
          oneOrMoreQuantifierRule = new OneOrMoreQuantifierRule(),
          zeroOrMoreQuantifierRule = new ZeroOrMoreQuantifierRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule();

      var rules = [documentRule, ruleRule, nameRule, definitionsRule, definitionRule, partRule, nonTerminalPartRule, terminalPartRule, choiceOfPartsRule, groupOfPartsRule, ruleNameRule, significantTokenTypeRule, regularExpressionRule, terminalSymbolRule, endOfLineRule, epsilonRule, wildcardRule, quantifierRule, lookAheadModifierRule, optionalQuantifierRule, oneOrMoreQuantifierRule, zeroOrMoreQuantifierRule, errorRule];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImJuZiIsInJlcXVpcmUiLCJSdWxlIiwiQ29tbW9uUGFyc2VyIiwiTmFtZVJ1bGUiLCJQYXJ0UnVsZSIsIlJ1bGVSdWxlIiwiRXJyb3JSdWxlIiwiRXBzaWxvblJ1bGUiLCJEb2N1bWVudFJ1bGUiLCJSdWxlTmFtZVJ1bGUiLCJXaWxkY2FyZFJ1bGUiLCJFbmRPZkxpbmVSdWxlIiwiUXVhbnRpZmllclJ1bGUiLCJEZWZpbml0aW9uUnVsZSIsIkRlZmluaXRpb25zUnVsZSIsIlRlcm1pbmFsUGFydFJ1bGUiLCJHcm91cE9mUGFydHNSdWxlIiwiQ2hvaWNlT2ZQYXJ0c1J1bGUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJOb25UZXJtaW5hbFBhcnRSdWxlIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiQk5GUGFyc2VyIiwidG9rZW5zIiwibm9kZSIsInBhcnNlIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwibmFtZVJ1bGUiLCJwYXJ0UnVsZSIsInJ1bGVSdWxlIiwiZXJyb3JSdWxlIiwiZXBzaWxvblJ1bGUiLCJkb2N1bWVudFJ1bGUiLCJydWxlTmFtZVJ1bGUiLCJ3aWxkY2FyZFJ1bGUiLCJlbmRPZkxpbmVSdWxlIiwicXVhbnRpZmllclJ1bGUiLCJkZWZpbml0aW9uUnVsZSIsImRlZmluaXRpb25zUnVsZSIsInRlcm1pbmFsUGFydFJ1bGUiLCJncm91cE9mUGFydHNSdWxlIiwiY2hvaWNlT2ZQYXJ0c1J1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJub25UZXJtaW5hbFBhcnRSdWxlIiwicmVndWxhckV4cHJlc3Npb25SdWxlIiwibG9va0FoZWFkTW9kaWZpZXJSdWxlIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiYm5mUGFyc2VyIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLE9BQVIsQ0FBWjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsUUFBUixDQURiO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSxrQkFBUixDQUZyQjtBQUFBLElBR01HLFdBQVdILFFBQVEsYUFBUixDQUhqQjtBQUFBLElBSU1JLFdBQVdKLFFBQVEsYUFBUixDQUpqQjtBQUFBLElBS01LLFdBQVdMLFFBQVEsYUFBUixDQUxqQjtBQUFBLElBTU1NLFlBQVlOLFFBQVEsY0FBUixDQU5sQjtBQUFBLElBT01PLGNBQWNQLFFBQVEsZ0JBQVIsQ0FQcEI7QUFBQSxJQVFNUSxlQUFlUixRQUFRLGlCQUFSLENBUnJCO0FBQUEsSUFTTVMsZUFBZVQsUUFBUSxpQkFBUixDQVRyQjtBQUFBLElBVU1VLGVBQWVWLFFBQVEsaUJBQVIsQ0FWckI7QUFBQSxJQVdNVyxnQkFBZ0JYLFFBQVEsa0JBQVIsQ0FYdEI7QUFBQSxJQVlNWSxpQkFBaUJaLFFBQVEsbUJBQVIsQ0FadkI7QUFBQSxJQWFNYSxpQkFBaUJiLFFBQVEsbUJBQVIsQ0FidkI7QUFBQSxJQWNNYyxrQkFBa0JkLFFBQVEsb0JBQVIsQ0FkeEI7QUFBQSxJQWVNZSxtQkFBbUJmLFFBQVEscUJBQVIsQ0FmekI7QUFBQSxJQWdCTWdCLG1CQUFtQmhCLFFBQVEscUJBQVIsQ0FoQnpCO0FBQUEsSUFpQk1pQixvQkFBb0JqQixRQUFRLHNCQUFSLENBakIxQjtBQUFBLElBa0JNa0IscUJBQXFCbEIsUUFBUSx1QkFBUixDQWxCM0I7QUFBQSxJQW1CTW1CLHNCQUFzQm5CLFFBQVEsd0JBQVIsQ0FuQjVCO0FBQUEsSUFvQk1vQix3QkFBd0JwQixRQUFRLDBCQUFSLENBcEI5QjtBQUFBLElBcUJNcUIsd0JBQXdCckIsUUFBUSwwQkFBUixDQXJCOUI7QUFBQSxJQXNCTXNCLHlCQUF5QnRCLFFBQVEsMkJBQVIsQ0F0Qi9CO0FBQUEsSUF1Qk11QiwwQkFBMEJ2QixRQUFRLDRCQUFSLENBdkJoQztBQUFBLElBd0JNd0IsMkJBQTJCeEIsUUFBUSw2QkFBUixDQXhCakM7QUFBQSxJQXlCTXlCLDJCQUEyQnpCLFFBQVEsNkJBQVIsQ0F6QmpDOztJQTJCTTBCLFM7Ozs7Ozs7Ozs7O29DQUNXQyxNLEVBQVE7QUFDckIsVUFBTUMsT0FBTyxLQUFLQyxLQUFMLENBQVdGLE1BQVgsQ0FBYjtBQUFBLFVBQ01HLFFBQVNGLFNBQVMsSUFBVixHQUNFQSxLQUFLRyxhQUFMLENBQW1COUIsSUFBbkIsQ0FERixHQUVJLEVBSGxCOztBQUtBLGFBQU82QixLQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUUsV0FBVyxJQUFJN0IsUUFBSixFQUFqQjtBQUFBLFVBQ004QixXQUFXLElBQUk3QixRQUFKLEVBRGpCO0FBQUEsVUFFTThCLFdBQVcsSUFBSTdCLFFBQUosRUFGakI7QUFBQSxVQUdNOEIsWUFBWSxJQUFJN0IsU0FBSixFQUhsQjtBQUFBLFVBSU04QixjQUFjLElBQUk3QixXQUFKLEVBSnBCO0FBQUEsVUFLTThCLGVBQWUsSUFBSTdCLFlBQUosRUFMckI7QUFBQSxVQU1NOEIsZUFBZSxJQUFJN0IsWUFBSixFQU5yQjtBQUFBLFVBT004QixlQUFlLElBQUk3QixZQUFKLEVBUHJCO0FBQUEsVUFRTThCLGdCQUFnQixJQUFJN0IsYUFBSixFQVJ0QjtBQUFBLFVBU004QixpQkFBaUIsSUFBSTdCLGNBQUosRUFUdkI7QUFBQSxVQVVNOEIsaUJBQWlCLElBQUk3QixjQUFKLEVBVnZCO0FBQUEsVUFXTThCLGtCQUFrQixJQUFJN0IsZUFBSixFQVh4QjtBQUFBLFVBWU04QixtQkFBbUIsSUFBSTdCLGdCQUFKLEVBWnpCO0FBQUEsVUFhTThCLG1CQUFtQixJQUFJN0IsZ0JBQUosRUFiekI7QUFBQSxVQWNNOEIsb0JBQW9CLElBQUk3QixpQkFBSixFQWQxQjtBQUFBLFVBZU04QixxQkFBcUIsSUFBSTdCLGtCQUFKLEVBZjNCO0FBQUEsVUFnQk04QixzQkFBc0IsSUFBSTdCLG1CQUFKLEVBaEI1QjtBQUFBLFVBaUJNOEIsd0JBQXdCLElBQUk1QixxQkFBSixFQWpCOUI7QUFBQSxVQWtCTTZCLHdCQUF3QixJQUFJOUIscUJBQUosRUFsQjlCO0FBQUEsVUFtQk0rQix5QkFBeUIsSUFBSTdCLHNCQUFKLEVBbkIvQjtBQUFBLFVBb0JNOEIsMEJBQTBCLElBQUk3Qix1QkFBSixFQXBCaEM7QUFBQSxVQXFCTThCLDJCQUEyQixJQUFJN0Isd0JBQUosRUFyQmpDO0FBQUEsVUFzQk04QiwyQkFBMkIsSUFBSTdCLHdCQUFKLEVBdEJqQzs7QUF3QkEsVUFBSUssUUFBUSxDQUNWTyxZQURVLEVBRVZILFFBRlUsRUFHVkYsUUFIVSxFQUlWVyxlQUpVLEVBS1ZELGNBTFUsRUFNVlQsUUFOVSxFQU9WZSxtQkFQVSxFQVFWSixnQkFSVSxFQVNWRSxpQkFUVSxFQVVWRCxnQkFWVSxFQVdWUCxZQVhVLEVBWVZnQix3QkFaVSxFQWFWTCxxQkFiVSxFQWNWRixrQkFkVSxFQWVWUCxhQWZVLEVBZ0JWSixXQWhCVSxFQWlCVkcsWUFqQlUsRUFrQlZFLGNBbEJVLEVBbUJWUyxxQkFuQlUsRUFvQlZDLHNCQXBCVSxFQXFCVkMsdUJBckJVLEVBc0JWQyx3QkF0QlUsRUF1QlZsQixTQXZCVSxDQUFaOztBQTBCQSxVQUFNb0IsWUFBWSxJQUFJN0IsU0FBSixDQUFjSSxLQUFkLENBQWxCOztBQUVBLGFBQU95QixTQUFQO0FBQ0Q7Ozs7RUFoRXFCckQsWTs7QUFtRXhCc0QsT0FBT0MsTUFBUCxDQUFjL0IsU0FBZCxFQUF5QjtBQUN2QjNCO0FBRHVCLENBQXpCOztBQUlBMkQsT0FBT0MsT0FBUCxHQUFpQmpDLFNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIE5hbWVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL25hbWUnKSxcbiAgICAgIFBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3BhcnQnKSxcbiAgICAgIFJ1bGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3J1bGUnKSxcbiAgICAgIEVycm9yUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9lcnJvcicpLFxuICAgICAgRXBzaWxvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZXBzaWxvbicpLFxuICAgICAgRG9jdW1lbnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2RvY3VtZW50JyksXG4gICAgICBSdWxlTmFtZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZU5hbWUnKSxcbiAgICAgIFdpbGRjYXJkUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS93aWxkY2FyZCcpLFxuICAgICAgRW5kT2ZMaW5lUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9lbmRPZkxpbmUnKSxcbiAgICAgIFF1YW50aWZpZXJSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3F1YW50aWZpZXInKSxcbiAgICAgIERlZmluaXRpb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL2RlZmluaXRpb24nKSxcbiAgICAgIERlZmluaXRpb25zUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kZWZpbml0aW9ucycpLFxuICAgICAgVGVybWluYWxQYXJ0UnVsZSA9IHJlcXVpcmUoJy4vcnVsZS90ZXJtaW5hbFBhcnQnKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvZ3JvdXBPZlBhcnRzJyksXG4gICAgICBDaG9pY2VPZlBhcnRzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9jaG9pY2VPZlBhcnRzJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIE5vblRlcm1pbmFsUGFydFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvbm9uVGVybWluYWxQYXJ0JyksXG4gICAgICBMb29rQWhlYWRNb2RpZmllclJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvbG9va0FoZWFkTW9kaWZpZXInKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9vcHRpb25hbFF1YW50aWZpZXInKSxcbiAgICAgIE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlID0gcmVxdWlyZSgnLi9ydWxlL29uZU9yTW9yZVF1YW50aWZpZXInKSxcbiAgICAgIFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS96ZXJvT3JNb3JlUXVhbnRpZmllcicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIEJORlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG5cdHJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVzID0gKG5vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUpIDpcbiAgICAgICAgICAgICAgICAgICAgICBbXTtcblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lUnVsZSA9IG5ldyBOYW1lUnVsZSgpLFxuICAgICAgICAgIHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUoKSxcbiAgICAgICAgICBlcnJvclJ1bGUgPSBuZXcgRXJyb3JSdWxlKCksXG4gICAgICAgICAgZXBzaWxvblJ1bGUgPSBuZXcgRXBzaWxvblJ1bGUoKSxcbiAgICAgICAgICBkb2N1bWVudFJ1bGUgPSBuZXcgRG9jdW1lbnRSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gbmV3IFJ1bGVOYW1lUnVsZSgpLFxuICAgICAgICAgIHdpbGRjYXJkUnVsZSA9IG5ldyBXaWxkY2FyZFJ1bGUoKSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlID0gbmV3IEVuZE9mTGluZVJ1bGUoKSxcbiAgICAgICAgICBxdWFudGlmaWVyUnVsZSA9IG5ldyBRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlID0gbmV3IERlZmluaXRpb25SdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gbmV3IERlZmluaXRpb25zUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGUgPSBuZXcgVGVybWluYWxQYXJ0UnVsZSgpLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1J1bGUgPSBuZXcgR3JvdXBPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlID0gbmV3IENob2ljZU9mUGFydHNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gbmV3IFRlcm1pbmFsU3ltYm9sUnVsZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGUgPSBuZXcgTm9uVGVybWluYWxQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUgPSBuZXcgTG9va0FoZWFkTW9kaWZpZXJSdWxlKCksXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSA9IG5ldyBPcHRpb25hbFF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBuZXcgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBuZXcgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSgpO1xuXG4gICAgbGV0IHJ1bGVzID0gW1xuICAgICAgZG9jdW1lbnRSdWxlLFxuICAgICAgcnVsZVJ1bGUsXG4gICAgICBuYW1lUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgcGFydFJ1bGUsXG4gICAgICBub25UZXJtaW5hbFBhcnRSdWxlLFxuICAgICAgdGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIGNob2ljZU9mUGFydHNSdWxlLFxuICAgICAgZ3JvdXBPZlBhcnRzUnVsZSxcbiAgICAgIHJ1bGVOYW1lUnVsZSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSxcbiAgICAgIGVuZE9mTGluZVJ1bGUsXG4gICAgICBlcHNpbG9uUnVsZSxcbiAgICAgIHdpbGRjYXJkUnVsZSxcbiAgICAgIHF1YW50aWZpZXJSdWxlLFxuICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlLFxuICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSxcbiAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgZXJyb3JSdWxlXG4gICAgXTtcblxuICAgIGNvbnN0IGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIocnVsZXMpO1xuICAgIFxuICAgIHJldHVybiBibmZQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihCTkZQYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG4iXX0=