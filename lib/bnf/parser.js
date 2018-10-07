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
    value: function generateRules(rulesNode, mappings) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImJuZiIsInJlcXVpcmUiLCJSdWxlIiwiQ29tbW9uUGFyc2VyIiwiUGFydFJ1bGUiLCJSdWxlUnVsZSIsIlJ1bGVzUnVsZSIsIkVwc2lsb25SdWxlIiwiV2lsZGNhcmRSdWxlIiwiUnVsZU5hbWVSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsIkRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwiUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIkJORlBhcnNlciIsInRva2VucyIsIm5vZGUiLCJwYXJzZSIsInJ1bGVzTm9kZSIsIm1hcHBpbmdzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwicGFydFJ1bGUiLCJydWxlUnVsZSIsInJ1bGVzUnVsZSIsImVwc2lsb25SdWxlIiwid2lsZGNhcmRSdWxlIiwicnVsZU5hbWVSdWxlIiwiZW5kT2ZMaW5lUnVsZSIsImRlZmluaXRpb25SdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwidGVybWluYWxTeW1ib2xSdWxlIiwicmVndWxhckV4cHJlc3Npb25SdWxlIiwicmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsImJuZlBhcnNlciIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSxPQUFSLENBQVo7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLFFBQVIsQ0FEYjtBQUFBLElBRU1FLGVBQWVGLFFBQVEsa0JBQVIsQ0FGckI7QUFBQSxJQUdNRyxXQUFXSCxRQUFRLGFBQVIsQ0FIakI7QUFBQSxJQUlNSSxXQUFXSixRQUFRLGFBQVIsQ0FKakI7QUFBQSxJQUtNSyxZQUFZTCxRQUFRLGNBQVIsQ0FMbEI7QUFBQSxJQU1NTSxjQUFjTixRQUFRLGdCQUFSLENBTnBCO0FBQUEsSUFPTU8sZUFBZVAsUUFBUSxpQkFBUixDQVByQjtBQUFBLElBUU1RLGVBQWVSLFFBQVEsaUJBQVIsQ0FSckI7QUFBQSxJQVNNUyxnQkFBZ0JULFFBQVEsa0JBQVIsQ0FUdEI7QUFBQSxJQVVNVSxpQkFBaUJWLFFBQVEsbUJBQVIsQ0FWdkI7QUFBQSxJQVdNVyxrQkFBa0JYLFFBQVEsb0JBQVIsQ0FYeEI7QUFBQSxJQVlNWSxxQkFBcUJaLFFBQVEsdUJBQVIsQ0FaM0I7QUFBQSxJQWFNYSx3QkFBd0JiLFFBQVEsMEJBQVIsQ0FiOUI7QUFBQSxJQWNNYyx5QkFBeUJkLFFBQVEsMkJBQVIsQ0FkL0I7QUFBQSxJQWVNZSwyQkFBMkJmLFFBQVEsNkJBQVIsQ0FmakM7O0lBaUJNZ0IsUzs7Ozs7Ozs7Ozs7d0NBQ2VDLE0sRUFBUTtBQUN6QixVQUFNQyxPQUFPLEtBQUtDLEtBQUwsQ0FBV0YsTUFBWCxDQUFiO0FBQUEsVUFDTUcsWUFBWUYsSUFEbEIsQ0FEeUIsQ0FFRDs7QUFFeEIsYUFBT0UsU0FBUDtBQUNEOzs7a0NBRW9CQSxTLEVBQVdDLFEsRUFBVTtBQUN4QyxVQUFNQyxRQUFTRixjQUFjLElBQWYsR0FDR0EsVUFBVUcsYUFBVixDQUF3QnRCLElBQXhCLEVBQThCb0IsUUFBOUIsQ0FESCxHQUVLLEVBRm5COztBQUlBLGFBQU9DLEtBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNRSxXQUFXLElBQUlyQixRQUFKLEVBQWpCO0FBQUEsVUFDTXNCLFdBQVcsSUFBSXJCLFFBQUosRUFEakI7QUFBQSxVQUVNc0IsWUFBWSxJQUFJckIsU0FBSixFQUZsQjtBQUFBLFVBR01zQixjQUFjLElBQUlyQixXQUFKLEVBSHBCO0FBQUEsVUFJTXNCLGVBQWUsSUFBSXJCLFlBQUosRUFKckI7QUFBQSxVQUtNc0IsZUFBZSxJQUFJckIsWUFBSixFQUxyQjtBQUFBLFVBTU1zQixnQkFBZ0IsSUFBSXJCLGFBQUosRUFOdEI7QUFBQSxVQU9Nc0IsaUJBQWlCLElBQUlyQixjQUFKLEVBUHZCO0FBQUEsVUFRTXNCLGtCQUFrQixJQUFJckIsZUFBSixFQVJ4QjtBQUFBLFVBU01zQixxQkFBcUIsSUFBSXJCLGtCQUFKLEVBVDNCO0FBQUEsVUFVTXNCLHdCQUF3QixJQUFJckIscUJBQUosRUFWOUI7QUFBQSxVQVdNc0IseUJBQXlCLElBQUlyQixzQkFBSixFQVgvQjtBQUFBLFVBWU1zQiwyQkFBMkIsSUFBSXJCLHdCQUFKLEVBWmpDOztBQWNBLFVBQUlPLFFBQVEsQ0FDVkksU0FEVSxFQUVWRCxRQUZVLEVBR1ZPLGVBSFUsRUFJVkQsY0FKVSxFQUtWUCxRQUxVLEVBTVZLLFlBTlUsRUFPVksscUJBUFUsRUFRVkUsd0JBUlUsRUFTVkgsa0JBVFUsRUFVVkgsYUFWVSxFQVdWSCxXQVhVLEVBWVZDLFlBWlUsRUFhVk8sc0JBYlUsQ0FBWjs7QUFnQkEsVUFBTUUsWUFBWSxJQUFJckIsU0FBSixDQUFjTSxLQUFkLENBQWxCOztBQUVBLGFBQU9lLFNBQVA7QUFDRDs7OztFQWxEcUJuQyxZOztBQXFEeEJvQyxPQUFPQyxNQUFQLENBQWN2QixTQUFkLEVBQXlCO0FBQ3ZCakI7QUFEdUIsQ0FBekI7O0FBSUF5QyxPQUFPQyxPQUFQLEdBQWlCekIsU0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuL2JuZicpLFxuICAgICAgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgUGFydFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcGFydCcpLFxuICAgICAgUnVsZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZScpLFxuICAgICAgUnVsZXNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3J1bGVzJyksXG4gICAgICBFcHNpbG9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9lcHNpbG9uJyksXG4gICAgICBXaWxkY2FyZFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvd2lsZGNhcmQnKSxcbiAgICAgIFJ1bGVOYW1lUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlTmFtZScpLFxuICAgICAgRW5kT2ZMaW5lUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9lbmRPZkxpbmUnKSxcbiAgICAgIERlZmluaXRpb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL2RlZmluaXRpb24nKSxcbiAgICAgIERlZmluaXRpb25zUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kZWZpbml0aW9ucycpLFxuICAgICAgVGVybWluYWxTeW1ib2xSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcmVndWxhckV4cHJlc3Npb24nKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcmlnaHRSZWN1cnNpdmVQYXJ0JyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgQk5GUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcblx0cnVsZXNOb2RlRnJvbVRva2Vucyh0b2tlbnMpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVzTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVzTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBnZW5lcmF0ZVJ1bGVzKHJ1bGVzTm9kZSwgbWFwcGluZ3MpIHtcbiAgICBjb25zdCBydWxlcyA9IChydWxlc05vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIHJ1bGVzTm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUsIG1hcHBpbmdzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIFtdO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUoKSxcbiAgICAgICAgICBydWxlc1J1bGUgPSBuZXcgUnVsZXNSdWxlKCksXG4gICAgICAgICAgZXBzaWxvblJ1bGUgPSBuZXcgRXBzaWxvblJ1bGUoKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGUgPSBuZXcgV2lsZGNhcmRSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gbmV3IFJ1bGVOYW1lUnVsZSgpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGUgPSBuZXcgRW5kT2ZMaW5lUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlID0gbmV3IERlZmluaXRpb25SdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gbmV3IERlZmluaXRpb25zUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSA9IG5ldyBUZXJtaW5hbFN5bWJvbFJ1bGUoKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSBuZXcgUmVndWxhckV4cHJlc3Npb25SdWxlKCksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSA9IG5ldyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSgpO1xuXG4gICAgbGV0IHJ1bGVzID0gW1xuICAgICAgcnVsZXNSdWxlLFxuICAgICAgcnVsZVJ1bGUsXG4gICAgICBkZWZpbml0aW9uc1J1bGUsXG4gICAgICBkZWZpbml0aW9uUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgcnVsZU5hbWVSdWxlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLFxuICAgICAgdGVybWluYWxTeW1ib2xSdWxlLFxuICAgICAgZW5kT2ZMaW5lUnVsZSxcbiAgICAgIGVwc2lsb25SdWxlLFxuICAgICAgd2lsZGNhcmRSdWxlLFxuICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZVxuICAgIF07XG5cbiAgICBjb25zdCBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHJ1bGVzKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GUGFyc2VyLCB7XG4gIGJuZlxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GUGFyc2VyO1xuIl19