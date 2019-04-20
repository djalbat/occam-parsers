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
          definitionRule = new DefinitionRule(),
          definitionsRule = new DefinitionsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          regularExpressionRule = new RegularExpressionRule(),
          rightRecursivePartRule = new RightRecursivePartRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule();

      var rules = [documentRule, ruleRule, definitionsRule, definitionRule, partRule, nameRule, ruleNameRule, regularExpressionRule, significantTokenTypeRule, terminalSymbolRule, endOfLineRule, epsilonRule, wildcardRule, rightRecursivePartRule, errorRule];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImJuZiIsInJlcXVpcmUiLCJSdWxlIiwiQ29tbW9uUGFyc2VyIiwiTmFtZVJ1bGUiLCJQYXJ0UnVsZSIsIlJ1bGVSdWxlIiwiRXJyb3JSdWxlIiwiRXBzaWxvblJ1bGUiLCJEb2N1bWVudFJ1bGUiLCJSdWxlTmFtZVJ1bGUiLCJXaWxkY2FyZFJ1bGUiLCJFbmRPZkxpbmVSdWxlIiwiRGVmaW5pdGlvblJ1bGUiLCJEZWZpbml0aW9uc1J1bGUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJSZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiQk5GUGFyc2VyIiwidG9rZW5zIiwibm9kZSIsInBhcnNlIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwibmFtZVJ1bGUiLCJwYXJ0UnVsZSIsInJ1bGVSdWxlIiwiZXJyb3JSdWxlIiwiZXBzaWxvblJ1bGUiLCJkb2N1bWVudFJ1bGUiLCJydWxlTmFtZVJ1bGUiLCJ3aWxkY2FyZFJ1bGUiLCJlbmRPZkxpbmVSdWxlIiwiZGVmaW5pdGlvblJ1bGUiLCJkZWZpbml0aW9uc1J1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiYm5mUGFyc2VyIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLE9BQVIsQ0FBWjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsUUFBUixDQURiO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSxrQkFBUixDQUZyQjtBQUFBLElBR01HLFdBQVdILFFBQVEsYUFBUixDQUhqQjtBQUFBLElBSU1JLFdBQVdKLFFBQVEsYUFBUixDQUpqQjtBQUFBLElBS01LLFdBQVdMLFFBQVEsYUFBUixDQUxqQjtBQUFBLElBTU1NLFlBQVlOLFFBQVEsY0FBUixDQU5sQjtBQUFBLElBT01PLGNBQWNQLFFBQVEsZ0JBQVIsQ0FQcEI7QUFBQSxJQVFNUSxlQUFlUixRQUFRLGlCQUFSLENBUnJCO0FBQUEsSUFTTVMsZUFBZVQsUUFBUSxpQkFBUixDQVRyQjtBQUFBLElBVU1VLGVBQWVWLFFBQVEsaUJBQVIsQ0FWckI7QUFBQSxJQVdNVyxnQkFBZ0JYLFFBQVEsa0JBQVIsQ0FYdEI7QUFBQSxJQVlNWSxpQkFBaUJaLFFBQVEsbUJBQVIsQ0FadkI7QUFBQSxJQWFNYSxrQkFBa0JiLFFBQVEsb0JBQVIsQ0FieEI7QUFBQSxJQWNNYyxxQkFBcUJkLFFBQVEsdUJBQVIsQ0FkM0I7QUFBQSxJQWVNZSx3QkFBd0JmLFFBQVEsMEJBQVIsQ0FmOUI7QUFBQSxJQWdCTWdCLHlCQUF5QmhCLFFBQVEsMkJBQVIsQ0FoQi9CO0FBQUEsSUFpQk1pQiwyQkFBMkJqQixRQUFRLDZCQUFSLENBakJqQzs7SUFtQk1rQixTOzs7Ozs7Ozs7OztvQ0FDV0MsTSxFQUFRO0FBQ3JCLFVBQU1DLE9BQU8sS0FBS0MsS0FBTCxDQUFXRixNQUFYLENBQWI7QUFBQSxVQUNNRyxRQUFTRixTQUFTLElBQVYsR0FDRUEsS0FBS0csYUFBTCxDQUFtQnRCLElBQW5CLENBREYsR0FFSSxFQUhsQjs7QUFLQSxhQUFPcUIsS0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1FLFdBQVcsSUFBSXJCLFFBQUosRUFBakI7QUFBQSxVQUNNc0IsV0FBVyxJQUFJckIsUUFBSixFQURqQjtBQUFBLFVBRU1zQixXQUFXLElBQUlyQixRQUFKLEVBRmpCO0FBQUEsVUFHTXNCLFlBQVksSUFBSXJCLFNBQUosRUFIbEI7QUFBQSxVQUlNc0IsY0FBYyxJQUFJckIsV0FBSixFQUpwQjtBQUFBLFVBS01zQixlQUFlLElBQUlyQixZQUFKLEVBTHJCO0FBQUEsVUFNTXNCLGVBQWUsSUFBSXJCLFlBQUosRUFOckI7QUFBQSxVQU9Nc0IsZUFBZSxJQUFJckIsWUFBSixFQVByQjtBQUFBLFVBUU1zQixnQkFBZ0IsSUFBSXJCLGFBQUosRUFSdEI7QUFBQSxVQVNNc0IsaUJBQWlCLElBQUlyQixjQUFKLEVBVHZCO0FBQUEsVUFVTXNCLGtCQUFrQixJQUFJckIsZUFBSixFQVZ4QjtBQUFBLFVBV01zQixxQkFBcUIsSUFBSXJCLGtCQUFKLEVBWDNCO0FBQUEsVUFZTXNCLHdCQUF3QixJQUFJckIscUJBQUosRUFaOUI7QUFBQSxVQWFNc0IseUJBQXlCLElBQUlyQixzQkFBSixFQWIvQjtBQUFBLFVBY01zQiwyQkFBMkIsSUFBSXJCLHdCQUFKLEVBZGpDOztBQWdCQSxVQUFJSyxRQUFRLENBQ1ZPLFlBRFUsRUFFVkgsUUFGVSxFQUdWUSxlQUhVLEVBSVZELGNBSlUsRUFLVlIsUUFMVSxFQU1WRCxRQU5VLEVBT1ZNLFlBUFUsRUFRVk0scUJBUlUsRUFTVkUsd0JBVFUsRUFVVkgsa0JBVlUsRUFXVkgsYUFYVSxFQVlWSixXQVpVLEVBYVZHLFlBYlUsRUFjVk0sc0JBZFUsRUFlVlYsU0FmVSxDQUFaOztBQWtCQSxVQUFNWSxZQUFZLElBQUlyQixTQUFKLENBQWNJLEtBQWQsQ0FBbEI7O0FBRUEsYUFBT2lCLFNBQVA7QUFDRDs7OztFQWhEcUJyQyxZOztBQW1EeEJzQyxPQUFPQyxNQUFQLENBQWN2QixTQUFkLEVBQXlCO0FBQ3ZCbkI7QUFEdUIsQ0FBekI7O0FBSUEyQyxPQUFPQyxPQUFQLEdBQWlCekIsU0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgTmFtZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvbmFtZScpLFxuICAgICAgUGFydFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcGFydCcpLFxuICAgICAgUnVsZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZScpLFxuICAgICAgRXJyb3JSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2Vycm9yJyksXG4gICAgICBFcHNpbG9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9lcHNpbG9uJyksXG4gICAgICBEb2N1bWVudFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZG9jdW1lbnQnKSxcbiAgICAgIFJ1bGVOYW1lUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlTmFtZScpLFxuICAgICAgV2lsZGNhcmRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3dpbGRjYXJkJyksXG4gICAgICBFbmRPZkxpbmVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2VuZE9mTGluZScpLFxuICAgICAgRGVmaW5pdGlvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZGVmaW5pdGlvbicpLFxuICAgICAgRGVmaW5pdGlvbnNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2RlZmluaXRpb25zJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9yaWdodFJlY3Vyc2l2ZVBhcnQnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuXHRydWxlc0Zyb21Ub2tlbnModG9rZW5zKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICBydWxlcyA9IChub2RlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2VuZXJhdGVSdWxlcyhSdWxlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgW107XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZVJ1bGUgPSBuZXcgTmFtZVJ1bGUoKSxcbiAgICAgICAgICBwYXJ0UnVsZSA9IG5ldyBQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJ1bGVSdWxlID0gbmV3IFJ1bGVSdWxlKCksXG4gICAgICAgICAgZXJyb3JSdWxlID0gbmV3IEVycm9yUnVsZSgpLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gbmV3IEVwc2lsb25SdWxlKCksXG4gICAgICAgICAgZG9jdW1lbnRSdWxlID0gbmV3IERvY3VtZW50UnVsZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZSA9IG5ldyBSdWxlTmFtZVJ1bGUoKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGUgPSBuZXcgV2lsZGNhcmRSdWxlKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IG5ldyBFbmRPZkxpbmVSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBuZXcgRGVmaW5pdGlvblJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGUgPSBuZXcgRGVmaW5pdGlvbnNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gbmV3IFRlcm1pbmFsU3ltYm9sUnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlID0gbmV3IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBbXG4gICAgICBkb2N1bWVudFJ1bGUsXG4gICAgICBydWxlUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgcGFydFJ1bGUsXG4gICAgICBuYW1lUnVsZSxcbiAgICAgIHJ1bGVOYW1lUnVsZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSxcbiAgICAgIGVuZE9mTGluZVJ1bGUsXG4gICAgICBlcHNpbG9uUnVsZSxcbiAgICAgIHdpbGRjYXJkUnVsZSxcbiAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUsXG4gICAgICBlcnJvclJ1bGVcbiAgICBdO1xuXG4gICAgY29uc3QgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihydWxlcyk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEJORlBhcnNlciwge1xuICBibmZcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcbiJdfQ==