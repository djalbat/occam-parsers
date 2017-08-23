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

      var rules = rulesNode !== null ? rulesNode.generateRules(Rule, mappings) : [];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImJuZiIsInJlcXVpcmUiLCJSdWxlIiwiQ29tbW9uUGFyc2VyIiwiUGFydFJ1bGUiLCJSdWxlUnVsZSIsIlJ1bGVzUnVsZSIsIkVwc2lsb25SdWxlIiwiV2lsZGNhcmRSdWxlIiwiUnVsZU5hbWVSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsIkRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwiUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIkJORlBhcnNlciIsImxpbmVzIiwicnVsZSIsIm5vZGUiLCJub2RlRnJvbUxpbmVzIiwicnVsZXNOb2RlIiwibWFwcGluZ3MiLCJydWxlcyIsImdlbmVyYXRlUnVsZXMiLCJwYXJ0UnVsZSIsInJ1bGVSdWxlIiwicnVsZXNSdWxlIiwiZXBzaWxvblJ1bGUiLCJ3aWxkY2FyZFJ1bGUiLCJydWxlTmFtZVJ1bGUiLCJlbmRPZkxpbmVSdWxlIiwiZGVmaW5pdGlvblJ1bGUiLCJkZWZpbml0aW9uc1J1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJyaWdodFJlY3Vyc2l2ZVBhcnRSdWxlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiYm5mUGFyc2VyIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLE9BQVIsQ0FBWjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsUUFBUixDQURiO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSxrQkFBUixDQUZyQjtBQUFBLElBR01HLFdBQVdILFFBQVEsYUFBUixDQUhqQjtBQUFBLElBSU1JLFdBQVdKLFFBQVEsYUFBUixDQUpqQjtBQUFBLElBS01LLFlBQVlMLFFBQVEsY0FBUixDQUxsQjtBQUFBLElBTU1NLGNBQWNOLFFBQVEsZ0JBQVIsQ0FOcEI7QUFBQSxJQU9NTyxlQUFlUCxRQUFRLGlCQUFSLENBUHJCO0FBQUEsSUFRTVEsZUFBZVIsUUFBUSxpQkFBUixDQVJyQjtBQUFBLElBU01TLGdCQUFnQlQsUUFBUSxrQkFBUixDQVR0QjtBQUFBLElBVU1VLGlCQUFpQlYsUUFBUSxtQkFBUixDQVZ2QjtBQUFBLElBV01XLGtCQUFrQlgsUUFBUSxvQkFBUixDQVh4QjtBQUFBLElBWU1ZLHFCQUFxQlosUUFBUSx1QkFBUixDQVozQjtBQUFBLElBYU1hLHdCQUF3QmIsUUFBUSwwQkFBUixDQWI5QjtBQUFBLElBY01jLHlCQUF5QmQsUUFBUSwyQkFBUixDQWQvQjtBQUFBLElBZU1lLDJCQUEyQmYsUUFBUSw2QkFBUixDQWZqQzs7SUFpQk1nQixTOzs7Ozs7Ozs7Ozt1Q0FDZUMsSyxFQUFPQyxJLEVBQU07QUFDOUIsVUFBTUMsT0FBTyxLQUFLQyxhQUFMLENBQW1CSCxLQUFuQixFQUEwQkMsSUFBMUIsQ0FBYjtBQUFBLFVBQ01HLFlBQVlGLElBRGxCLENBRDhCLENBRU47O0FBRXhCLGFBQU9FLFNBQVA7QUFDRDs7O2tDQUVvQkEsUyxFQUEwQjtBQUFBLFVBQWZDLFFBQWUsdUVBQUosRUFBSTs7QUFDN0MsVUFBTUMsUUFBU0YsY0FBYyxJQUFmLEdBQ0dBLFVBQVVHLGFBQVYsQ0FBd0J2QixJQUF4QixFQUE4QnFCLFFBQTlCLENBREgsR0FFSyxFQUZuQjs7QUFJQSxhQUFPQyxLQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUUsV0FBVyxJQUFJdEIsUUFBSixFQUFqQjtBQUFBLFVBQ011QixXQUFXLElBQUl0QixRQUFKLEVBRGpCO0FBQUEsVUFFTXVCLFlBQVksSUFBSXRCLFNBQUosRUFGbEI7QUFBQSxVQUdNdUIsY0FBYyxJQUFJdEIsV0FBSixFQUhwQjtBQUFBLFVBSU11QixlQUFlLElBQUl0QixZQUFKLEVBSnJCO0FBQUEsVUFLTXVCLGVBQWUsSUFBSXRCLFlBQUosRUFMckI7QUFBQSxVQU1NdUIsZ0JBQWdCLElBQUl0QixhQUFKLEVBTnRCO0FBQUEsVUFPTXVCLGlCQUFpQixJQUFJdEIsY0FBSixFQVB2QjtBQUFBLFVBUU11QixrQkFBa0IsSUFBSXRCLGVBQUosRUFSeEI7QUFBQSxVQVNNdUIscUJBQXFCLElBQUl0QixrQkFBSixFQVQzQjtBQUFBLFVBVU11Qix3QkFBd0IsSUFBSXRCLHFCQUFKLEVBVjlCO0FBQUEsVUFXTXVCLHlCQUF5QixJQUFJdEIsc0JBQUosRUFYL0I7QUFBQSxVQVlNdUIsMkJBQTJCLElBQUl0Qix3QkFBSixFQVpqQzs7QUFjQSxVQUFJUSxRQUFRLENBQ1ZJLFNBRFUsRUFFVkQsUUFGVSxFQUdWTyxlQUhVLEVBSVZELGNBSlUsRUFLVlAsUUFMVSxFQU1WSyxZQU5VLEVBT1ZLLHFCQVBVLEVBUVZFLHdCQVJVLEVBU1ZILGtCQVRVLEVBVVZILGFBVlUsRUFXVkgsV0FYVSxFQVlWQyxZQVpVLEVBYVZPLHNCQWJVLENBQVo7O0FBZ0JBLFVBQU1FLFlBQVksSUFBSXRCLFNBQUosQ0FBY08sS0FBZCxDQUFsQjs7QUFFQSxhQUFPZSxTQUFQO0FBQ0Q7Ozs7RUFsRHFCcEMsWTs7QUFxRHhCcUMsT0FBT0MsTUFBUCxDQUFjeEIsU0FBZCxFQUF5QjtBQUN2QmpCLE9BQUtBO0FBRGtCLENBQXpCOztBQUlBMEMsT0FBT0MsT0FBUCxHQUFpQjFCLFNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3BhcnQnKSxcbiAgICAgIFJ1bGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3J1bGUnKSxcbiAgICAgIFJ1bGVzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlcycpLFxuICAgICAgRXBzaWxvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZXBzaWxvbicpLFxuICAgICAgV2lsZGNhcmRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3dpbGRjYXJkJyksXG4gICAgICBSdWxlTmFtZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZU5hbWUnKSxcbiAgICAgIEVuZE9mTGluZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZW5kT2ZMaW5lJyksXG4gICAgICBEZWZpbml0aW9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kZWZpbml0aW9uJyksXG4gICAgICBEZWZpbml0aW9uc1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvZGVmaW5pdGlvbnMnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3JpZ2h0UmVjdXJzaXZlUGFydCcpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIEJORlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHJ1bGVzTm9kZUZyb21MaW5lcyhsaW5lcywgcnVsZSkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVGcm9tTGluZXMobGluZXMsIHJ1bGUpLFxuICAgICAgICAgIHJ1bGVzTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVzTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBnZW5lcmF0ZVJ1bGVzKHJ1bGVzTm9kZSwgbWFwcGluZ3MgPSB7fSkge1xuICAgIGNvbnN0IHJ1bGVzID0gKHJ1bGVzTm9kZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgcnVsZXNOb2RlLmdlbmVyYXRlUnVsZXMoUnVsZSwgbWFwcGluZ3MpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgW107XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcGFydFJ1bGUgPSBuZXcgUGFydFJ1bGUoKSxcbiAgICAgICAgICBydWxlUnVsZSA9IG5ldyBSdWxlUnVsZSgpLFxuICAgICAgICAgIHJ1bGVzUnVsZSA9IG5ldyBSdWxlc1J1bGUoKSxcbiAgICAgICAgICBlcHNpbG9uUnVsZSA9IG5ldyBFcHNpbG9uUnVsZSgpLFxuICAgICAgICAgIHdpbGRjYXJkUnVsZSA9IG5ldyBXaWxkY2FyZFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGUgPSBuZXcgUnVsZU5hbWVSdWxlKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IG5ldyBFbmRPZkxpbmVSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBuZXcgRGVmaW5pdGlvblJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGUgPSBuZXcgRGVmaW5pdGlvbnNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gbmV3IFRlcm1pbmFsU3ltYm9sUnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlID0gbmV3IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBbXG4gICAgICBydWxlc1J1bGUsXG4gICAgICBydWxlUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgcGFydFJ1bGUsXG4gICAgICBydWxlTmFtZVJ1bGUsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUsXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUsXG4gICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUsXG4gICAgICBlbmRPZkxpbmVSdWxlLFxuICAgICAgZXBzaWxvblJ1bGUsXG4gICAgICB3aWxkY2FyZFJ1bGUsXG4gICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlXG4gICAgXTtcblxuICAgIGNvbnN0IGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIocnVsZXMpO1xuICAgIFxuICAgIHJldHVybiBibmZQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihCTkZQYXJzZXIsIHtcbiAgYm5mOiBibmZcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcbiJdfQ==