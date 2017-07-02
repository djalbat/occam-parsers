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
    RuleNameRule = require('./rule/ruleName'),
    EpsilonRule = require('./rule/epsilon'),
    WildcardRule = require('./rule/wildcard'),
    EndOfLineRule = require('./rule/endOfLine'),
    DefinitionRule = require('./rule/definition'),
    DefinitionsRule = require('./rule/definitions'),
    TerminalSymbolRule = require('./rule/terminalSymbol'),
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
          terminalSymbolRule = new TerminalSymbolRule(),
          regularExpressionRule = new RegularExpressionRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule(),
          rightRecursivePartRule = new RightRecursivePartRule();

      var rules = [rulesRule, ruleRule, definitionsRule, definitionRule, partRule, ruleNameRule, regularExpressionRule, significantTokenTypeRule, terminalSymbolRule, endOfLineRule, epsilonRule, wildcardRule, rightRecursivePartRule];

      var bnfParser = new BNFParser(rules);

      return bnfParser;
    }
  }]);

  return BNFParser;
}(CommonParser);

module.exports = BNFParser;

BNFParser.bnf = bnf;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImJuZiIsInJlcXVpcmUiLCJSdWxlIiwiRGVmaW5pdGlvbiIsIkNvbW1vblBhcnNlciIsIlBhcnRSdWxlIiwiUnVsZVJ1bGUiLCJSdWxlc1J1bGUiLCJSdWxlTmFtZVJ1bGUiLCJFcHNpbG9uUnVsZSIsIldpbGRjYXJkUnVsZSIsIkVuZE9mTGluZVJ1bGUiLCJEZWZpbml0aW9uUnVsZSIsIkRlZmluaXRpb25zUnVsZSIsIlRlcm1pbmFsU3ltYm9sUnVsZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIlJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUiLCJCTkZQYXJzZXIiLCJub2RlIiwibWFwcGluZ3MiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJwYXJ0UnVsZSIsInJ1bGVSdWxlIiwicnVsZXNSdWxlIiwicnVsZU5hbWVSdWxlIiwiZXBzaWxvblJ1bGUiLCJ3aWxkY2FyZFJ1bGUiLCJlbmRPZkxpbmVSdWxlIiwiZGVmaW5pdGlvblJ1bGUiLCJkZWZpbml0aW9uc1J1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlIiwiYm5mUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUVNQSxNQUFNQyxRQUFRLE9BQVIsQ0FGWjtBQUFBLElBR01DLE9BQU9ELFFBQVEsUUFBUixDQUhiO0FBQUEsSUFJTUUsYUFBYUYsUUFBUSxjQUFSLENBSm5CO0FBQUEsSUFLTUcsZUFBZUgsUUFBUSxrQkFBUixDQUxyQjtBQUFBLElBTU1JLFdBQVdKLFFBQVEsYUFBUixDQU5qQjtBQUFBLElBT01LLFdBQVdMLFFBQVEsYUFBUixDQVBqQjtBQUFBLElBUU1NLFlBQVlOLFFBQVEsY0FBUixDQVJsQjtBQUFBLElBU01PLGVBQWVQLFFBQVEsaUJBQVIsQ0FUckI7QUFBQSxJQVVNUSxjQUFjUixRQUFRLGdCQUFSLENBVnBCO0FBQUEsSUFXTVMsZUFBZVQsUUFBUSxpQkFBUixDQVhyQjtBQUFBLElBWU1VLGdCQUFnQlYsUUFBUSxrQkFBUixDQVp0QjtBQUFBLElBYU1XLGlCQUFpQlgsUUFBUSxtQkFBUixDQWJ2QjtBQUFBLElBY01ZLGtCQUFrQlosUUFBUSxvQkFBUixDQWR4QjtBQUFBLElBb0JNYSxxQkFBcUJiLFFBQVEsdUJBQVIsQ0FwQjNCO0FBQUEsSUFzQk1jLHdCQUF3QmQsUUFBUSwwQkFBUixDQXRCOUI7QUFBQSxJQXVCTWUsMkJBQTJCZixRQUFRLDZCQUFSLENBdkJqQztBQUFBLElBd0JNZ0IseUJBQXlCaEIsUUFBUSwyQkFBUixDQXhCL0I7O0lBMEJNaUIsUzs7Ozs7Ozs7Ozs7a0NBQ2lCQyxJLEVBQXFCO0FBQUEsVUFBZkMsUUFBZSx1RUFBSixFQUFJOztBQUN4QyxVQUFNQyxRQUFTRixTQUFTLElBQVYsR0FDR0EsS0FBS0csYUFBTCxDQUFtQnBCLElBQW5CLEVBQXlCQyxVQUF6QixFQUFxQ2lCLFFBQXJDLENBREgsR0FFSyxFQUZuQjs7QUFJQSxhQUFPQyxLQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUUsV0FBVyxJQUFJbEIsUUFBSixFQUFqQjtBQUFBLFVBQ01tQixXQUFXLElBQUlsQixRQUFKLEVBRGpCO0FBQUEsVUFFTW1CLFlBQVksSUFBSWxCLFNBQUosRUFGbEI7QUFBQSxVQUdNbUIsZUFBZSxJQUFJbEIsWUFBSixFQUhyQjtBQUFBLFVBSU1tQixjQUFjLElBQUlsQixXQUFKLEVBSnBCO0FBQUEsVUFLTW1CLGVBQWUsSUFBSWxCLFlBQUosRUFMckI7QUFBQSxVQU1NbUIsZ0JBQWdCLElBQUlsQixhQUFKLEVBTnRCO0FBQUEsVUFPTW1CLGlCQUFpQixJQUFJbEIsY0FBSixFQVB2QjtBQUFBLFVBUU1tQixrQkFBa0IsSUFBSWxCLGVBQUosRUFSeEI7QUFBQSxVQWNNbUIscUJBQXFCLElBQUlsQixrQkFBSixFQWQzQjtBQUFBLFVBZ0JNbUIsd0JBQXdCLElBQUlsQixxQkFBSixFQWhCOUI7QUFBQSxVQWlCTW1CLDJCQUEyQixJQUFJbEIsd0JBQUosRUFqQmpDO0FBQUEsVUFrQk1tQix5QkFBeUIsSUFBSWxCLHNCQUFKLEVBbEIvQjs7QUFvQkEsVUFBSUksUUFBUSxDQUNWSSxTQURVLEVBRVZELFFBRlUsRUFHVk8sZUFIVSxFQUlWRCxjQUpVLEVBV1ZQLFFBWFUsRUFZVkcsWUFaVSxFQWFWTyxxQkFiVSxFQWNWQyx3QkFkVSxFQWVWRixrQkFmVSxFQWdCVkgsYUFoQlUsRUFpQlZGLFdBakJVLEVBa0JWQyxZQWxCVSxFQW1CVk8sc0JBbkJVLENBQVo7O0FBMEJBLFVBQU1DLFlBQVksSUFBSWxCLFNBQUosQ0FBY0csS0FBZCxDQUFsQjs7QUFFQSxhQUFPZSxTQUFQO0FBQ0Q7Ozs7RUEzRHFCaEMsWTs7QUE4RHhCaUMsT0FBT0MsT0FBUCxHQUFpQnBCLFNBQWpCOztBQUVBQSxVQUFVbEIsR0FBVixHQUFnQkEsR0FBaEIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBcbiAgICBcbiAgICAgIGJuZiA9IHJlcXVpcmUoJy4vYm5mJyksXG4gICAgICBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi9kZWZpbml0aW9uJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBQYXJ0UnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9wYXJ0JyksXG4gICAgICBSdWxlUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlJyksXG4gICAgICBSdWxlc1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZXMnKSxcbiAgICAgIFJ1bGVOYW1lUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlTmFtZScpLFxuICAgICAgRXBzaWxvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZXBzaWxvbicpLFxuICAgICAgV2lsZGNhcmRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3dpbGRjYXJkJyksXG4gICAgICBFbmRPZkxpbmVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2VuZE9mTGluZScpLFxuICAgICAgRGVmaW5pdGlvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZGVmaW5pdGlvbicpLFxuICAgICAgRGVmaW5pdGlvbnNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2RlZmluaXRpb25zJyksXG5cblxuXG5cblxuICAgICAgVGVybWluYWxTeW1ib2xSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3Rlcm1pbmFsU3ltYm9sJyksXG5cbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3JpZ2h0UmVjdXJzaXZlUGFydCcpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZ2VuZXJhdGVSdWxlcyhub2RlLCBtYXBwaW5ncyA9IHt9KSB7XG4gICAgY29uc3QgcnVsZXMgPSAobm9kZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUsIERlZmluaXRpb24sIG1hcHBpbmdzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIFtdO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUoKSxcbiAgICAgICAgICBydWxlc1J1bGUgPSBuZXcgUnVsZXNSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gbmV3IFJ1bGVOYW1lUnVsZSgpLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gbmV3IEVwc2lsb25SdWxlKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gbmV3IFdpbGRjYXJkUnVsZSgpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGUgPSBuZXcgRW5kT2ZMaW5lUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlID0gbmV3IERlZmluaXRpb25SdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gbmV3IERlZmluaXRpb25zUnVsZSgpLFxuXG5cblxuXG5cbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUgPSBuZXcgVGVybWluYWxTeW1ib2xSdWxlKCksXG5cbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSBuZXcgUmVndWxhckV4cHJlc3Npb25SdWxlKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSgpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUgPSBuZXcgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSgpO1xuXG4gICAgbGV0IHJ1bGVzID0gW1xuICAgICAgcnVsZXNSdWxlLFxuICAgICAgcnVsZVJ1bGUsXG4gICAgICBkZWZpbml0aW9uc1J1bGUsXG4gICAgICBkZWZpbml0aW9uUnVsZSxcblxuXG5cblxuXG5cbiAgICAgIHBhcnRSdWxlLFxuICAgICAgcnVsZU5hbWVSdWxlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLFxuICAgICAgdGVybWluYWxTeW1ib2xSdWxlLFxuICAgICAgZW5kT2ZMaW5lUnVsZSxcbiAgICAgIGVwc2lsb25SdWxlLFxuICAgICAgd2lsZGNhcmRSdWxlLFxuICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZVxuICAgIF07XG5cblxuICAgIFxuXG4gICAgXG4gICAgY29uc3QgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihydWxlcyk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcblxuQk5GUGFyc2VyLmJuZiA9IGJuZjtcbiJdfQ==