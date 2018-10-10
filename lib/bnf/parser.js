'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bnf = require('./bnf'),
    Rule = require('./rule'),
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
    key: 'rulesNodeFromTokens',
    value: function rulesNodeFromTokens(tokens) {
      var node = this.parse(tokens),
          rulesNode = node; ///

      return rulesNode;
    }
  }], [{
    key: 'generateRules',
    value: function generateRules(rulesNode) {
      var rules = rulesNode !== null ? rulesNode.generateRules(Rule) : [];

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

Object.assign(BNFParser, {
  bnf: bnf
});

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImJuZiIsInJlcXVpcmUiLCJSdWxlIiwiQ29tbW9uUGFyc2VyIiwiUGFydFJ1bGUiLCJSdWxlUnVsZSIsIlJ1bGVzUnVsZSIsIkVwc2lsb25SdWxlIiwiV2lsZGNhcmRSdWxlIiwiUnVsZU5hbWVSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsIkRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwiUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIkJORlBhcnNlciIsInRva2VucyIsIm5vZGUiLCJwYXJzZSIsInJ1bGVzTm9kZSIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsInBhcnRSdWxlIiwicnVsZVJ1bGUiLCJydWxlc1J1bGUiLCJlcHNpbG9uUnVsZSIsIndpbGRjYXJkUnVsZSIsInJ1bGVOYW1lUnVsZSIsImVuZE9mTGluZVJ1bGUiLCJkZWZpbml0aW9uUnVsZSIsImRlZmluaXRpb25zUnVsZSIsInRlcm1pbmFsU3ltYm9sUnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJibmZQYXJzZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxRQUFSLENBRGI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUcsV0FBV0gsUUFBUSxhQUFSLENBSGpCO0FBQUEsSUFJTUksV0FBV0osUUFBUSxhQUFSLENBSmpCO0FBQUEsSUFLTUssWUFBWUwsUUFBUSxjQUFSLENBTGxCO0FBQUEsSUFNTU0sY0FBY04sUUFBUSxnQkFBUixDQU5wQjtBQUFBLElBT01PLGVBQWVQLFFBQVEsaUJBQVIsQ0FQckI7QUFBQSxJQVFNUSxlQUFlUixRQUFRLGlCQUFSLENBUnJCO0FBQUEsSUFTTVMsZ0JBQWdCVCxRQUFRLGtCQUFSLENBVHRCO0FBQUEsSUFVTVUsaUJBQWlCVixRQUFRLG1CQUFSLENBVnZCO0FBQUEsSUFXTVcsa0JBQWtCWCxRQUFRLG9CQUFSLENBWHhCO0FBQUEsSUFZTVkscUJBQXFCWixRQUFRLHVCQUFSLENBWjNCO0FBQUEsSUFhTWEsd0JBQXdCYixRQUFRLDBCQUFSLENBYjlCO0FBQUEsSUFjTWMseUJBQXlCZCxRQUFRLDJCQUFSLENBZC9CO0FBQUEsSUFlTWUsMkJBQTJCZixRQUFRLDZCQUFSLENBZmpDOztJQWlCTWdCLFM7Ozs7Ozs7Ozs7O3dDQUNlQyxNLEVBQVE7QUFDekIsVUFBTUMsT0FBTyxLQUFLQyxLQUFMLENBQVdGLE1BQVgsQ0FBYjtBQUFBLFVBQ01HLFlBQVlGLElBRGxCLENBRHlCLENBRUQ7O0FBRXhCLGFBQU9FLFNBQVA7QUFDRDs7O2tDQUVvQkEsUyxFQUFXO0FBQzlCLFVBQU1DLFFBQVNELGNBQWMsSUFBZixHQUNHQSxVQUFVRSxhQUFWLENBQXdCckIsSUFBeEIsQ0FESCxHQUVLLEVBRm5COztBQUlBLGFBQU9vQixLQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUUsV0FBVyxJQUFJcEIsUUFBSixFQUFqQjtBQUFBLFVBQ01xQixXQUFXLElBQUlwQixRQUFKLEVBRGpCO0FBQUEsVUFFTXFCLFlBQVksSUFBSXBCLFNBQUosRUFGbEI7QUFBQSxVQUdNcUIsY0FBYyxJQUFJcEIsV0FBSixFQUhwQjtBQUFBLFVBSU1xQixlQUFlLElBQUlwQixZQUFKLEVBSnJCO0FBQUEsVUFLTXFCLGVBQWUsSUFBSXBCLFlBQUosRUFMckI7QUFBQSxVQU1NcUIsZ0JBQWdCLElBQUlwQixhQUFKLEVBTnRCO0FBQUEsVUFPTXFCLGlCQUFpQixJQUFJcEIsY0FBSixFQVB2QjtBQUFBLFVBUU1xQixrQkFBa0IsSUFBSXBCLGVBQUosRUFSeEI7QUFBQSxVQVNNcUIscUJBQXFCLElBQUlwQixrQkFBSixFQVQzQjtBQUFBLFVBVU1xQix3QkFBd0IsSUFBSXBCLHFCQUFKLEVBVjlCO0FBQUEsVUFXTXFCLHlCQUF5QixJQUFJcEIsc0JBQUosRUFYL0I7QUFBQSxVQVlNcUIsMkJBQTJCLElBQUlwQix3QkFBSixFQVpqQzs7QUFjQSxVQUFJTSxRQUFRLENBQ1ZJLFNBRFUsRUFFVkQsUUFGVSxFQUdWTyxlQUhVLEVBSVZELGNBSlUsRUFLVlAsUUFMVSxFQU1WSyxZQU5VLEVBT1ZLLHFCQVBVLEVBUVZFLHdCQVJVLEVBU1ZILGtCQVRVLEVBVVZILGFBVlUsRUFXVkgsV0FYVSxFQVlWQyxZQVpVLEVBYVZPLHNCQWJVLENBQVo7O0FBZ0JBLFVBQU1FLFlBQVksSUFBSXBCLFNBQUosQ0FBY0ssS0FBZCxDQUFsQjs7QUFFQSxhQUFPZSxTQUFQO0FBQ0Q7Ozs7RUFsRHFCbEMsWTs7QUFxRHhCbUMsT0FBT0MsTUFBUCxDQUFjdEIsU0FBZCxFQUF5QjtBQUN2QmpCO0FBRHVCLENBQXpCOztBQUlBd0MsT0FBT0MsT0FBUCxHQUFpQnhCLFNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3BhcnQnKSxcbiAgICAgIFJ1bGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3J1bGUnKSxcbiAgICAgIFJ1bGVzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlcycpLFxuICAgICAgRXBzaWxvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZXBzaWxvbicpLFxuICAgICAgV2lsZGNhcmRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3dpbGRjYXJkJyksXG4gICAgICBSdWxlTmFtZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZU5hbWUnKSxcbiAgICAgIEVuZE9mTGluZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZW5kT2ZMaW5lJyksXG4gICAgICBEZWZpbml0aW9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kZWZpbml0aW9uJyksXG4gICAgICBEZWZpbml0aW9uc1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvZGVmaW5pdGlvbnMnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3JpZ2h0UmVjdXJzaXZlUGFydCcpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIEJORlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG5cdHJ1bGVzTm9kZUZyb21Ub2tlbnModG9rZW5zKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICBydWxlc05vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBydWxlc05vZGU7XG4gIH1cblxuICBzdGF0aWMgZ2VuZXJhdGVSdWxlcyhydWxlc05vZGUpIHtcbiAgICBjb25zdCBydWxlcyA9IChydWxlc05vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHJ1bGVzTm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgW107XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcGFydFJ1bGUgPSBuZXcgUGFydFJ1bGUoKSxcbiAgICAgICAgICBydWxlUnVsZSA9IG5ldyBSdWxlUnVsZSgpLFxuICAgICAgICAgIHJ1bGVzUnVsZSA9IG5ldyBSdWxlc1J1bGUoKSxcbiAgICAgICAgICBlcHNpbG9uUnVsZSA9IG5ldyBFcHNpbG9uUnVsZSgpLFxuICAgICAgICAgIHdpbGRjYXJkUnVsZSA9IG5ldyBXaWxkY2FyZFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGUgPSBuZXcgUnVsZU5hbWVSdWxlKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IG5ldyBFbmRPZkxpbmVSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBuZXcgRGVmaW5pdGlvblJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGUgPSBuZXcgRGVmaW5pdGlvbnNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gbmV3IFRlcm1pbmFsU3ltYm9sUnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlID0gbmV3IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBbXG4gICAgICBydWxlc1J1bGUsXG4gICAgICBydWxlUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgcGFydFJ1bGUsXG4gICAgICBydWxlTmFtZVJ1bGUsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUsXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUsXG4gICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUsXG4gICAgICBlbmRPZkxpbmVSdWxlLFxuICAgICAgZXBzaWxvblJ1bGUsXG4gICAgICB3aWxkY2FyZFJ1bGUsXG4gICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlXG4gICAgXTtcblxuICAgIGNvbnN0IGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIocnVsZXMpO1xuICAgIFxuICAgIHJldHVybiBibmZQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihCTkZQYXJzZXIsIHtcbiAgYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG4iXX0=