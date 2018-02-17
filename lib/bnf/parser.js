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
    value: function rulesNodeFromTokens(tokens, rule) {
      var node = this.nodeFromTokens(tokens, rule),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImJuZiIsInJlcXVpcmUiLCJSdWxlIiwiQ29tbW9uUGFyc2VyIiwiUGFydFJ1bGUiLCJSdWxlUnVsZSIsIlJ1bGVzUnVsZSIsIkVwc2lsb25SdWxlIiwiV2lsZGNhcmRSdWxlIiwiUnVsZU5hbWVSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsIkRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwiUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIkJORlBhcnNlciIsInRva2VucyIsInJ1bGUiLCJub2RlIiwibm9kZUZyb21Ub2tlbnMiLCJydWxlc05vZGUiLCJtYXBwaW5ncyIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsInBhcnRSdWxlIiwicnVsZVJ1bGUiLCJydWxlc1J1bGUiLCJlcHNpbG9uUnVsZSIsIndpbGRjYXJkUnVsZSIsInJ1bGVOYW1lUnVsZSIsImVuZE9mTGluZVJ1bGUiLCJkZWZpbml0aW9uUnVsZSIsImRlZmluaXRpb25zUnVsZSIsInRlcm1pbmFsU3ltYm9sUnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJibmZQYXJzZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxRQUFSLENBRGI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUcsV0FBV0gsUUFBUSxhQUFSLENBSGpCO0FBQUEsSUFJTUksV0FBV0osUUFBUSxhQUFSLENBSmpCO0FBQUEsSUFLTUssWUFBWUwsUUFBUSxjQUFSLENBTGxCO0FBQUEsSUFNTU0sY0FBY04sUUFBUSxnQkFBUixDQU5wQjtBQUFBLElBT01PLGVBQWVQLFFBQVEsaUJBQVIsQ0FQckI7QUFBQSxJQVFNUSxlQUFlUixRQUFRLGlCQUFSLENBUnJCO0FBQUEsSUFTTVMsZ0JBQWdCVCxRQUFRLGtCQUFSLENBVHRCO0FBQUEsSUFVTVUsaUJBQWlCVixRQUFRLG1CQUFSLENBVnZCO0FBQUEsSUFXTVcsa0JBQWtCWCxRQUFRLG9CQUFSLENBWHhCO0FBQUEsSUFZTVkscUJBQXFCWixRQUFRLHVCQUFSLENBWjNCO0FBQUEsSUFhTWEsd0JBQXdCYixRQUFRLDBCQUFSLENBYjlCO0FBQUEsSUFjTWMseUJBQXlCZCxRQUFRLDJCQUFSLENBZC9CO0FBQUEsSUFlTWUsMkJBQTJCZixRQUFRLDZCQUFSLENBZmpDOztJQWlCTWdCLFM7Ozs7Ozs7Ozs7O3dDQUNnQkMsTSxFQUFRQyxJLEVBQU07QUFDaEMsVUFBTUMsT0FBTyxLQUFLQyxjQUFMLENBQW9CSCxNQUFwQixFQUE0QkMsSUFBNUIsQ0FBYjtBQUFBLFVBQ01HLFlBQVlGLElBRGxCLENBRGdDLENBRVI7O0FBRXhCLGFBQU9FLFNBQVA7QUFDRDs7O2tDQUVvQkEsUyxFQUEwQjtBQUFBLFVBQWZDLFFBQWUsdUVBQUosRUFBSTs7QUFDN0MsVUFBTUMsUUFBU0YsY0FBYyxJQUFmLEdBQ0dBLFVBQVVHLGFBQVYsQ0FBd0J2QixJQUF4QixFQUE4QnFCLFFBQTlCLENBREgsR0FFSyxFQUZuQjs7QUFJQSxhQUFPQyxLQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUUsV0FBVyxJQUFJdEIsUUFBSixFQUFqQjtBQUFBLFVBQ011QixXQUFXLElBQUl0QixRQUFKLEVBRGpCO0FBQUEsVUFFTXVCLFlBQVksSUFBSXRCLFNBQUosRUFGbEI7QUFBQSxVQUdNdUIsY0FBYyxJQUFJdEIsV0FBSixFQUhwQjtBQUFBLFVBSU11QixlQUFlLElBQUl0QixZQUFKLEVBSnJCO0FBQUEsVUFLTXVCLGVBQWUsSUFBSXRCLFlBQUosRUFMckI7QUFBQSxVQU1NdUIsZ0JBQWdCLElBQUl0QixhQUFKLEVBTnRCO0FBQUEsVUFPTXVCLGlCQUFpQixJQUFJdEIsY0FBSixFQVB2QjtBQUFBLFVBUU11QixrQkFBa0IsSUFBSXRCLGVBQUosRUFSeEI7QUFBQSxVQVNNdUIscUJBQXFCLElBQUl0QixrQkFBSixFQVQzQjtBQUFBLFVBVU11Qix3QkFBd0IsSUFBSXRCLHFCQUFKLEVBVjlCO0FBQUEsVUFXTXVCLHlCQUF5QixJQUFJdEIsc0JBQUosRUFYL0I7QUFBQSxVQVlNdUIsMkJBQTJCLElBQUl0Qix3QkFBSixFQVpqQzs7QUFjQSxVQUFJUSxRQUFRLENBQ1ZJLFNBRFUsRUFFVkQsUUFGVSxFQUdWTyxlQUhVLEVBSVZELGNBSlUsRUFLVlAsUUFMVSxFQU1WSyxZQU5VLEVBT1ZLLHFCQVBVLEVBUVZFLHdCQVJVLEVBU1ZILGtCQVRVLEVBVVZILGFBVlUsRUFXVkgsV0FYVSxFQVlWQyxZQVpVLEVBYVZPLHNCQWJVLENBQVo7O0FBZ0JBLFVBQU1FLFlBQVksSUFBSXRCLFNBQUosQ0FBY08sS0FBZCxDQUFsQjs7QUFFQSxhQUFPZSxTQUFQO0FBQ0Q7Ozs7RUFsRHFCcEMsWTs7QUFxRHhCcUMsT0FBT0MsTUFBUCxDQUFjeEIsU0FBZCxFQUF5QjtBQUN2QmpCLE9BQUtBO0FBRGtCLENBQXpCOztBQUlBMEMsT0FBT0MsT0FBUCxHQUFpQjFCLFNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3BhcnQnKSxcbiAgICAgIFJ1bGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3J1bGUnKSxcbiAgICAgIFJ1bGVzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlcycpLFxuICAgICAgRXBzaWxvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZXBzaWxvbicpLFxuICAgICAgV2lsZGNhcmRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3dpbGRjYXJkJyksXG4gICAgICBSdWxlTmFtZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZU5hbWUnKSxcbiAgICAgIEVuZE9mTGluZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZW5kT2ZMaW5lJyksXG4gICAgICBEZWZpbml0aW9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kZWZpbml0aW9uJyksXG4gICAgICBEZWZpbml0aW9uc1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvZGVmaW5pdGlvbnMnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3JpZ2h0UmVjdXJzaXZlUGFydCcpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIEJORlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHJ1bGVzTm9kZUZyb21Ub2tlbnModG9rZW5zLCBydWxlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZUZyb21Ub2tlbnModG9rZW5zLCBydWxlKSxcbiAgICAgICAgICBydWxlc05vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBydWxlc05vZGU7XG4gIH1cblxuICBzdGF0aWMgZ2VuZXJhdGVSdWxlcyhydWxlc05vZGUsIG1hcHBpbmdzID0ge30pIHtcbiAgICBjb25zdCBydWxlcyA9IChydWxlc05vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHJ1bGVzTm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUsIG1hcHBpbmdzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIFtdO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUoKSxcbiAgICAgICAgICBydWxlc1J1bGUgPSBuZXcgUnVsZXNSdWxlKCksXG4gICAgICAgICAgZXBzaWxvblJ1bGUgPSBuZXcgRXBzaWxvblJ1bGUoKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGUgPSBuZXcgV2lsZGNhcmRSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gbmV3IFJ1bGVOYW1lUnVsZSgpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGUgPSBuZXcgRW5kT2ZMaW5lUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlID0gbmV3IERlZmluaXRpb25SdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gbmV3IERlZmluaXRpb25zUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSA9IG5ldyBUZXJtaW5hbFN5bWJvbFJ1bGUoKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSBuZXcgUmVndWxhckV4cHJlc3Npb25SdWxlKCksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSA9IG5ldyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSgpO1xuXG4gICAgbGV0IHJ1bGVzID0gW1xuICAgICAgcnVsZXNSdWxlLFxuICAgICAgcnVsZVJ1bGUsXG4gICAgICBkZWZpbml0aW9uc1J1bGUsXG4gICAgICBkZWZpbml0aW9uUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgcnVsZU5hbWVSdWxlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLFxuICAgICAgdGVybWluYWxTeW1ib2xSdWxlLFxuICAgICAgZW5kT2ZMaW5lUnVsZSxcbiAgICAgIGVwc2lsb25SdWxlLFxuICAgICAgd2lsZGNhcmRSdWxlLFxuICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZVxuICAgIF07XG5cbiAgICBjb25zdCBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHJ1bGVzKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GUGFyc2VyLCB7XG4gIGJuZjogYm5mXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG4iXX0=