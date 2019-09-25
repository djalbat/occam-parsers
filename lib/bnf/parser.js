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

      var rules = [documentRule, ruleRule, nameRule, definitionsRule, definitionRule, partRule, nonTerminalPartRule, terminalPartRule, choiceOfPartsRule, groupOfPartsRule, ruleNameRule, regularExpressionRule, significantTokenTypeRule, terminalSymbolRule, endOfLineRule, epsilonRule, wildcardRule, quantifierRule, optionalQuantifierRule, oneOrMoreQuantifierRule, zeroOrMoreQuantifierRule, lookAheadModifierRule, errorRule];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImJuZiIsInJlcXVpcmUiLCJSdWxlIiwiQ29tbW9uUGFyc2VyIiwiTmFtZVJ1bGUiLCJQYXJ0UnVsZSIsIlJ1bGVSdWxlIiwiRXJyb3JSdWxlIiwiRXBzaWxvblJ1bGUiLCJEb2N1bWVudFJ1bGUiLCJSdWxlTmFtZVJ1bGUiLCJXaWxkY2FyZFJ1bGUiLCJFbmRPZkxpbmVSdWxlIiwiUXVhbnRpZmllclJ1bGUiLCJEZWZpbml0aW9uUnVsZSIsIkRlZmluaXRpb25zUnVsZSIsIlRlcm1pbmFsUGFydFJ1bGUiLCJHcm91cE9mUGFydHNSdWxlIiwiQ2hvaWNlT2ZQYXJ0c1J1bGUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJOb25UZXJtaW5hbFBhcnRSdWxlIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiQk5GUGFyc2VyIiwidG9rZW5zIiwibm9kZSIsInBhcnNlIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwibmFtZVJ1bGUiLCJwYXJ0UnVsZSIsInJ1bGVSdWxlIiwiZXJyb3JSdWxlIiwiZXBzaWxvblJ1bGUiLCJkb2N1bWVudFJ1bGUiLCJydWxlTmFtZVJ1bGUiLCJ3aWxkY2FyZFJ1bGUiLCJlbmRPZkxpbmVSdWxlIiwicXVhbnRpZmllclJ1bGUiLCJkZWZpbml0aW9uUnVsZSIsImRlZmluaXRpb25zUnVsZSIsInRlcm1pbmFsUGFydFJ1bGUiLCJncm91cE9mUGFydHNSdWxlIiwiY2hvaWNlT2ZQYXJ0c1J1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJub25UZXJtaW5hbFBhcnRSdWxlIiwicmVndWxhckV4cHJlc3Npb25SdWxlIiwibG9va0FoZWFkTW9kaWZpZXJSdWxlIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiYm5mUGFyc2VyIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLE9BQVIsQ0FBWjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsUUFBUixDQURiO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSxrQkFBUixDQUZyQjtBQUFBLElBR01HLFdBQVdILFFBQVEsYUFBUixDQUhqQjtBQUFBLElBSU1JLFdBQVdKLFFBQVEsYUFBUixDQUpqQjtBQUFBLElBS01LLFdBQVdMLFFBQVEsYUFBUixDQUxqQjtBQUFBLElBTU1NLFlBQVlOLFFBQVEsY0FBUixDQU5sQjtBQUFBLElBT01PLGNBQWNQLFFBQVEsZ0JBQVIsQ0FQcEI7QUFBQSxJQVFNUSxlQUFlUixRQUFRLGlCQUFSLENBUnJCO0FBQUEsSUFTTVMsZUFBZVQsUUFBUSxpQkFBUixDQVRyQjtBQUFBLElBVU1VLGVBQWVWLFFBQVEsaUJBQVIsQ0FWckI7QUFBQSxJQVdNVyxnQkFBZ0JYLFFBQVEsa0JBQVIsQ0FYdEI7QUFBQSxJQVlNWSxpQkFBaUJaLFFBQVEsbUJBQVIsQ0FadkI7QUFBQSxJQWFNYSxpQkFBaUJiLFFBQVEsbUJBQVIsQ0FidkI7QUFBQSxJQWNNYyxrQkFBa0JkLFFBQVEsb0JBQVIsQ0FkeEI7QUFBQSxJQWVNZSxtQkFBbUJmLFFBQVEscUJBQVIsQ0FmekI7QUFBQSxJQWdCTWdCLG1CQUFtQmhCLFFBQVEscUJBQVIsQ0FoQnpCO0FBQUEsSUFpQk1pQixvQkFBb0JqQixRQUFRLHNCQUFSLENBakIxQjtBQUFBLElBa0JNa0IscUJBQXFCbEIsUUFBUSx1QkFBUixDQWxCM0I7QUFBQSxJQW1CTW1CLHNCQUFzQm5CLFFBQVEsd0JBQVIsQ0FuQjVCO0FBQUEsSUFv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IHN0cmljdCc7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoJy4vYm5mJyksXG4gICAgICBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBOYW1lUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9uYW1lJyksXG4gICAgICBQYXJ0UnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9wYXJ0JyksXG4gICAgICBSdWxlUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlJyksXG4gICAgICBFcnJvclJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZXJyb3InKSxcbiAgICAgIEVwc2lsb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL2Vwc2lsb24nKSxcbiAgICAgIERvY3VtZW50UnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kb2N1bWVudCcpLFxuICAgICAgUnVsZU5hbWVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3J1bGVOYW1lJyksXG4gICAgICBXaWxkY2FyZFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvd2lsZGNhcmQnKSxcbiAgICAgIEVuZE9mTGluZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZW5kT2ZMaW5lJyksXG4gICAgICBRdWFudGlmaWVyUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9xdWFudGlmaWVyJyksXG4gICAgICBEZWZpbml0aW9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kZWZpbml0aW9uJyksXG4gICAgICBEZWZpbml0aW9uc1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvZGVmaW5pdGlvbnMnKSxcbiAgICAgIFRlcm1pbmFsUGFydFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvdGVybWluYWxQYXJ0JyksXG4gICAgICBHcm91cE9mUGFydHNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2dyb3VwT2ZQYXJ0cycpLFxuICAgICAgQ2hvaWNlT2ZQYXJ0c1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvY2hvaWNlT2ZQYXJ0cycpLFxuICAgICAgVGVybWluYWxTeW1ib2xSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBOb25UZXJtaW5hbFBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL25vblRlcm1pbmFsUGFydCcpLFxuICAgICAgTG9va0FoZWFkTW9kaWZpZXJSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2xvb2tBaGVhZE1vZGlmaWVyJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcmVndWxhckV4cHJlc3Npb24nKSxcbiAgICAgIE9wdGlvbmFsUXVhbnRpZmllclJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvb3B0aW9uYWxRdWFudGlmaWVyJyksXG4gICAgICBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9vbmVPck1vcmVRdWFudGlmaWVyJyksXG4gICAgICBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvemVyb09yTW9yZVF1YW50aWZpZXInKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuXHRydWxlc0Zyb21Ub2tlbnModG9rZW5zKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICBydWxlcyA9IChub2RlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2VuZXJhdGVSdWxlcyhSdWxlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgW107XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZVJ1bGUgPSBuZXcgTmFtZVJ1bGUoKSxcbiAgICAgICAgICBwYXJ0UnVsZSA9IG5ldyBQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJ1bGVSdWxlID0gbmV3IFJ1bGVSdWxlKCksXG4gICAgICAgICAgZXJyb3JSdWxlID0gbmV3IEVycm9yUnVsZSgpLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gbmV3IEVwc2lsb25SdWxlKCksXG4gICAgICAgICAgZG9jdW1lbnRSdWxlID0gbmV3IERvY3VtZW50UnVsZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZSA9IG5ldyBSdWxlTmFtZVJ1bGUoKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGUgPSBuZXcgV2lsZGNhcmRSdWxlKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IG5ldyBFbmRPZkxpbmVSdWxlKCksXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGUgPSBuZXcgUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uUnVsZSA9IG5ldyBEZWZpbml0aW9uUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZSA9IG5ldyBEZWZpbml0aW9uc1J1bGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlID0gbmV3IFRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBncm91cE9mUGFydHNSdWxlID0gbmV3IEdyb3VwT2ZQYXJ0c1J1bGUoKSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZSA9IG5ldyBDaG9pY2VPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSA9IG5ldyBUZXJtaW5hbFN5bWJvbFJ1bGUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlID0gbmV3IE5vblRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSBuZXcgUmVndWxhckV4cHJlc3Npb25SdWxlKCksXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlID0gbmV3IExvb2tBaGVhZE1vZGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUgPSBuZXcgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUoKTtcblxuICAgIGxldCBydWxlcyA9IFtcbiAgICAgIGRvY3VtZW50UnVsZSxcbiAgICAgIHJ1bGVSdWxlLFxuICAgICAgbmFtZVJ1bGUsXG4gICAgICBkZWZpbml0aW9uc1J1bGUsXG4gICAgICBkZWZpbml0aW9uUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIHRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIGdyb3VwT2ZQYXJ0c1J1bGUsXG4gICAgICBydWxlTmFtZVJ1bGUsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUsXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUsXG4gICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUsXG4gICAgICBlbmRPZkxpbmVSdWxlLFxuICAgICAgZXBzaWxvblJ1bGUsXG4gICAgICB3aWxkY2FyZFJ1bGUsXG4gICAgICBxdWFudGlmaWVyUnVsZSxcbiAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUsXG4gICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZSxcbiAgICAgIGVycm9yUnVsZVxuICAgIF07XG5cbiAgICBjb25zdCBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHJ1bGVzKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GUGFyc2VyLCB7XG4gIGJuZlxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GUGFyc2VyO1xuIl19