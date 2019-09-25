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
    ModifierRule = require('./rule/modifier'),
    WildcardRule = require('./rule/wildcard'),
    EndOfLineRule = require('./rule/endOfLine'),
    DefinitionRule = require('./rule/definition'),
    DefinitionsRule = require('./rule/definitions'),
    TerminalPartRule = require('./rule/terminalPart'),
    GroupOfPartsRule = require('./rule/groupOfParts'),
    ChoiceOfPartsRule = require('./rule/choiceOfParts'),
    TerminalSymbolRule = require('./rule/terminalSymbol'),
    NonTerminalPartRule = require('./rule/nonTerminalPart'),
    OptionalModifierRule = require('./rule/optionalModifier'),
    LookAheadModifierRule = require('./rule/lookAheadModifier'),
    RegularExpressionRule = require('./rule/regularExpression'),
    OneOrMoreModifierRule = require('./rule/oneOrMoreModifier'),
    ZeroOrMoreModifierRule = require('./rule/zeroOrMoreModifier'),
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
          modifierRule = new ModifierRule(),
          wildcardRule = new WildcardRule(),
          endOfLineRule = new EndOfLineRule(),
          definitionRule = new DefinitionRule(),
          definitionsRule = new DefinitionsRule(),
          terminalPartRule = new TerminalPartRule(),
          groupOfPartsRule = new GroupOfPartsRule(),
          choiceOfPartsRule = new ChoiceOfPartsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          nonTerminalPartRule = new NonTerminalPartRule(),
          optionalModifierRule = new OptionalModifierRule(),
          lookAheadModifierRule = new LookAheadModifierRule(),
          oneOrMoreModifierRule = new OneOrMoreModifierRule(),
          regularExpressionRule = new RegularExpressionRule(),
          zeroOrMoreModifierRule = new ZeroOrMoreModifierRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule();

      var rules = [documentRule, ruleRule, nameRule, definitionsRule, definitionRule, partRule, nonTerminalPartRule, terminalPartRule, choiceOfPartsRule, groupOfPartsRule, ruleNameRule, regularExpressionRule, significantTokenTypeRule, terminalSymbolRule, endOfLineRule, epsilonRule, wildcardRule, modifierRule, optionalModifierRule, oneOrMoreModifierRule, zeroOrMoreModifierRule, lookAheadModifierRule, errorRule];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImJuZiIsInJlcXVpcmUiLCJSdWxlIiwiQ29tbW9uUGFyc2VyIiwiTmFtZVJ1bGUiLCJQYXJ0UnVsZSIsIlJ1bGVSdWxlIiwiRXJyb3JSdWxlIiwiRXBzaWxvblJ1bGUiLCJEb2N1bWVudFJ1bGUiLCJSdWxlTmFtZVJ1bGUiLCJNb2RpZmllclJ1bGUiLCJXaWxkY2FyZFJ1bGUiLCJFbmRPZkxpbmVSdWxlIiwiRGVmaW5pdGlvblJ1bGUiLCJEZWZpbml0aW9uc1J1bGUiLCJUZXJtaW5hbFBhcnRSdWxlIiwiR3JvdXBPZlBhcnRzUnVsZSIsIkNob2ljZU9mUGFydHNSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwiTm9uVGVybWluYWxQYXJ0UnVsZSIsIk9wdGlvbmFsTW9kaWZpZXJSdWxlIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwiT25lT3JNb3JlTW9kaWZpZXJSdWxlIiwiWmVyb09yTW9yZU1vZGlmaWVyUnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIkJORlBhcnNlciIsInRva2VucyIsIm5vZGUiLCJwYXJzZSIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsIm5hbWVSdWxlIiwicGFydFJ1bGUiLCJydWxlUnVsZSIsImVycm9yUnVsZSIsImVwc2lsb25SdWxlIiwiZG9jdW1lbnRSdWxlIiwicnVsZU5hbWVSdWxlIiwibW9kaWZpZXJSdWxlIiwid2lsZGNhcmRSdWxlIiwiZW5kT2ZMaW5lUnVsZSIsImRlZmluaXRpb25SdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwidGVybWluYWxQYXJ0UnVsZSIsImdyb3VwT2ZQYXJ0c1J1bGUiLCJjaG9pY2VPZlBhcnRzUnVsZSIsInRlcm1pbmFsU3ltYm9sUnVsZSIsIm5vblRlcm1pbmFsUGFydFJ1bGUiLCJvcHRpb25hbE1vZGlmaWVyUnVsZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIm9uZU9yTW9yZU1vZGlmaWVyUnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsInplcm9Pck1vcmVNb2RpZmllclJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJibmZQYXJzZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxRQUFSLENBRGI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUcsV0FBV0gsUUFBUSxhQUFSLENBSGpCO0FBQUEsSUFJTUksV0FBV0osUUFBUSxhQUFSLENBSmpCO0FBQUEsSUFLTUssV0FBV0wsUUFBUSxhQUFSLENBTGpCO0FBQUEsSUFNTU0sWUFBWU4sUUFBUSxjQUFSLENBTmxCO0FBQUEsSUFPTU8sY0FBY1AsUUFBUSxnQkFBUixDQVBwQjtBQUFBLElBUU1RLGVBQWVSLFFBQVEsaUJBQVIsQ0FSckI7QUFBQSxJQVNNUyxlQUFlVCxRQUFRLGlCQUFSLENBVHJCO0FBQUEsSUFVTVUsZUFBZVYsUUFBUSxpQkFBUixDQVZyQjtBQUFBLElBV01XLGVBQWVYLFFBQVEsaUJBQVIsQ0FYckI7QUFBQSxJQVlNWSxnQkFBZ0JaLFFBQVEsa0JBQVIsQ0FadEI7QUFBQSxJQWFNYSxpQkFBaUJiLFFBQVEsbUJBQVIsQ0FidkI7QUFBQSxJQWNNYyxrQkFBa0JkLFFBQVEsb0JBQVIsQ0FkeEI7QUFBQSxJQWVNZSxtQkFBbUJmLFFBQVEscUJBQVIsQ0FmekI7QUFBQSxJQWdCTWdCLG1CQUFtQmhCLFFBQVEscUJBQVIsQ0FoQnpCO0FBQUEsSUFpQk1pQixvQkFBb0JqQixRQUFRLHNCQUFSLENBakIxQjtBQUFBLElBa0JNa0IscUJBQXFCbEIsUUFBUSx1QkFBUixDQWxCM0I7QUFBQSxJQW1CTW1CLHNCQUFzQm5CLFFBQVEsd0JBQVIsQ0FuQjVCO0FBQUEsSUFvQk1vQix1QkFBdUJwQixRQUFR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bmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgTmFtZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvbmFtZScpLFxuICAgICAgUGFydFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcGFydCcpLFxuICAgICAgUnVsZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZScpLFxuICAgICAgRXJyb3JSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2Vycm9yJyksXG4gICAgICBFcHNpbG9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9lcHNpbG9uJyksXG4gICAgICBEb2N1bWVudFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZG9jdW1lbnQnKSxcbiAgICAgIFJ1bGVOYW1lUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlTmFtZScpLFxuICAgICAgTW9kaWZpZXJSdWxlID0gcmVxdWlyZSgnLi9ydWxlL21vZGlmaWVyJyksXG4gICAgICBXaWxkY2FyZFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvd2lsZGNhcmQnKSxcbiAgICAgIEVuZE9mTGluZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZW5kT2ZMaW5lJyksXG4gICAgICBEZWZpbml0aW9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kZWZpbml0aW9uJyksXG4gICAgICBEZWZpbml0aW9uc1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvZGVmaW5pdGlvbnMnKSxcbiAgICAgIFRlcm1pbmFsUGFydFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvdGVybWluYWxQYXJ0JyksXG4gICAgICBHcm91cE9mUGFydHNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2dyb3VwT2ZQYXJ0cycpLFxuICAgICAgQ2hvaWNlT2ZQYXJ0c1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvY2hvaWNlT2ZQYXJ0cycpLFxuICAgICAgVGVybWluYWxTeW1ib2xSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBOb25UZXJtaW5hbFBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL25vblRlcm1pbmFsUGFydCcpLFxuICAgICAgT3B0aW9uYWxNb2RpZmllclJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvb3B0aW9uYWxNb2RpZmllcicpLFxuICAgICAgTG9va0FoZWFkTW9kaWZpZXJSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2xvb2tBaGVhZE1vZGlmaWVyJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcmVndWxhckV4cHJlc3Npb24nKSxcbiAgICAgIE9uZU9yTW9yZU1vZGlmaWVyUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9vbmVPck1vcmVNb2RpZmllcicpLFxuICAgICAgWmVyb09yTW9yZU1vZGlmaWVyUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS96ZXJvT3JNb3JlTW9kaWZpZXInKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuXHRydWxlc0Zyb21Ub2tlbnModG9rZW5zKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICBydWxlcyA9IChub2RlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2VuZXJhdGVSdWxlcyhSdWxlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgW107XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZVJ1bGUgPSBuZXcgTmFtZVJ1bGUoKSxcbiAgICAgICAgICBwYXJ0UnVsZSA9IG5ldyBQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJ1bGVSdWxlID0gbmV3IFJ1bGVSdWxlKCksXG4gICAgICAgICAgZXJyb3JSdWxlID0gbmV3IEVycm9yUnVsZSgpLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gbmV3IEVwc2lsb25SdWxlKCksXG4gICAgICAgICAgZG9jdW1lbnRSdWxlID0gbmV3IERvY3VtZW50UnVsZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZSA9IG5ldyBSdWxlTmFtZVJ1bGUoKSxcbiAgICAgICAgICBtb2RpZmllclJ1bGUgPSBuZXcgTW9kaWZpZXJSdWxlKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gbmV3IFdpbGRjYXJkUnVsZSgpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGUgPSBuZXcgRW5kT2ZMaW5lUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlID0gbmV3IERlZmluaXRpb25SdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gbmV3IERlZmluaXRpb25zUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGUgPSBuZXcgVGVybWluYWxQYXJ0UnVsZSgpLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1J1bGUgPSBuZXcgR3JvdXBPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlID0gbmV3IENob2ljZU9mUGFydHNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gbmV3IFRlcm1pbmFsU3ltYm9sUnVsZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGUgPSBuZXcgTm9uVGVybWluYWxQYXJ0UnVsZSgpLFxuICAgICAgICAgIG9wdGlvbmFsTW9kaWZpZXJSdWxlID0gbmV3IE9wdGlvbmFsTW9kaWZpZXJSdWxlKCksXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlID0gbmV3IExvb2tBaGVhZE1vZGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9uZU9yTW9yZU1vZGlmaWVyUnVsZSA9IG5ldyBPbmVPck1vcmVNb2RpZmllclJ1bGUoKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSBuZXcgUmVndWxhckV4cHJlc3Npb25SdWxlKCksXG4gICAgICAgICAgemVyb09yTW9yZU1vZGlmaWVyUnVsZSA9IG5ldyBaZXJvT3JNb3JlTW9kaWZpZXJSdWxlKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSgpO1xuXG4gICAgbGV0IHJ1bGVzID0gW1xuICAgICAgZG9jdW1lbnRSdWxlLFxuICAgICAgcnVsZVJ1bGUsXG4gICAgICBuYW1lUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgcGFydFJ1bGUsXG4gICAgICBub25UZXJtaW5hbFBhcnRSdWxlLFxuICAgICAgdGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIGNob2ljZU9mUGFydHNSdWxlLFxuICAgICAgZ3JvdXBPZlBhcnRzUnVsZSxcbiAgICAgIHJ1bGVOYW1lUnVsZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSxcbiAgICAgIGVuZE9mTGluZVJ1bGUsXG4gICAgICBlcHNpbG9uUnVsZSxcbiAgICAgIHdpbGRjYXJkUnVsZSxcbiAgICAgIG1vZGlmaWVyUnVsZSxcbiAgICAgIG9wdGlvbmFsTW9kaWZpZXJSdWxlLFxuICAgICAgb25lT3JNb3JlTW9kaWZpZXJSdWxlLFxuICAgICAgemVyb09yTW9yZU1vZGlmaWVyUnVsZSxcbiAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZSxcbiAgICAgIGVycm9yUnVsZVxuICAgIF07XG5cbiAgICBjb25zdCBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHJ1bGVzKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GUGFyc2VyLCB7XG4gIGJuZlxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GUGFyc2VyO1xuIl19