'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cycles = require('../grammar/cycles'),
    leftRecursion = require('../grammar/leftRecursion'),
    extendedBNF = require('./extendedBNF'),
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
    GroupOfPartsRule = require('./rule/groupOfParts'),
    ChoiceOfPartsRule = require('./rule/choiceOfParts'),
    OptionalPartRule = require('./rule/optionalPart'),
    ZeroOrMorePartsRule = require('./rule/zeroOrMoreParts'),
    OneOrMorePartsRule = require('./rule/oneOrMoreParts'),
    TerminalSymbolRule = require('./rule/terminalSymbol'),
    NoWhitespacePartRule = require('./rule/noWhitespacePart'),
    RegularExpressionRule = require('./rule/regularExpression'),
    SignificantTokenTypeRule = require('./rule/significantTokenType');

var ExtendedBNFParser = function (_CommonParser) {
  _inherits(ExtendedBNFParser, _CommonParser);

  function ExtendedBNFParser() {
    _classCallCheck(this, ExtendedBNFParser);

    return _possibleConstructorReturn(this, (ExtendedBNFParser.__proto__ || Object.getPrototypeOf(ExtendedBNFParser)).apply(this, arguments));
  }

  _createClass(ExtendedBNFParser, null, [{
    key: 'generateRules',
    value: function generateRules(node) {
      var mappings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var rules = node !== null ? node.generateRules(Rule, Definition, mappings) : [];

      rules = cycles.eliminate(rules); ///

      rules = leftRecursion.eliminate(rules); ///

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
          groupOfPartsRule = new GroupOfPartsRule(),
          choiceOfPartsRule = new ChoiceOfPartsRule(),
          optionalPartRule = new OptionalPartRule(),
          zeroOrMorePartsRule = new ZeroOrMorePartsRule(),
          oneOrMorePartsRule = new OneOrMorePartsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          noWhitespacePartRule = new NoWhitespacePartRule(),
          regularExpressionRule = new RegularExpressionRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule();

      var rules = [rulesRule, ruleRule, definitionsRule, definitionRule, noWhitespacePartRule, optionalPartRule, zeroOrMorePartsRule, oneOrMorePartsRule, groupOfPartsRule, choiceOfPartsRule, partRule, ruleNameRule, regularExpressionRule, significantTokenTypeRule, terminalSymbolRule, endOfLineRule, epsilonRule, wildcardRule];

      rules = cycles.eliminate(rules); ///

      rules = leftRecursion.eliminate(rules); ///

      var extendedBNFParser = new ExtendedBNFParser(rules);

      return extendedBNFParser;
    }
  }]);

  return ExtendedBNFParser;
}(CommonParser);

module.exports = ExtendedBNFParser;

ExtendedBNFParser.extendedBNF = extendedBNF;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leHRlbmRlZEJORi9wYXJzZXIuanMiXSwibmFtZXMiOlsiY3ljbGVzIiwicmVxdWlyZSIsImxlZnRSZWN1cnNpb24iLCJleHRlbmRlZEJORiIsIlJ1bGUiLCJEZWZpbml0aW9uIiwiQ29tbW9uUGFyc2VyIiwiUGFydFJ1bGUiLCJSdWxlUnVsZSIsIlJ1bGVzUnVsZSIsIlJ1bGVOYW1lUnVsZSIsIkVwc2lsb25SdWxlIiwiV2lsZGNhcmRSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsIkRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwiR3JvdXBPZlBhcnRzUnVsZSIsIkNob2ljZU9mUGFydHNSdWxlIiwiT3B0aW9uYWxQYXJ0UnVsZSIsIlplcm9Pck1vcmVQYXJ0c1J1bGUiLCJPbmVPck1vcmVQYXJ0c1J1bGUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJOb1doaXRlc3BhY2VQYXJ0UnVsZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIkV4dGVuZGVkQk5GUGFyc2VyIiwibm9kZSIsIm1hcHBpbmdzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwiZWxpbWluYXRlIiwicGFydFJ1bGUiLCJydWxlUnVsZSIsInJ1bGVzUnVsZSIsInJ1bGVOYW1lUnVsZSIsImVwc2lsb25SdWxlIiwid2lsZGNhcmRSdWxlIiwiZW5kT2ZMaW5lUnVsZSIsImRlZmluaXRpb25SdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwiZ3JvdXBPZlBhcnRzUnVsZSIsImNob2ljZU9mUGFydHNSdWxlIiwib3B0aW9uYWxQYXJ0UnVsZSIsInplcm9Pck1vcmVQYXJ0c1J1bGUiLCJvbmVPck1vcmVQYXJ0c1J1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJub1doaXRlc3BhY2VQYXJ0UnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsImV4dGVuZGVkQk5GUGFyc2VyIiwibW9k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RUFmN0I7QUFBQSxVQWdCTXlCLHdCQUF3QixJQUFJeEIscUJBQUosRUFoQjlCO0FBQUEsVUFpQk15QiwyQkFBMkIsSUFBSXhCLHdCQUFKLEVBakJqQzs7QUFtQkEsVUFBSUksUUFBUSxDQUNWSyxTQURVLEVBRVZELFFBRlUsRUFHVk8sZUFIVSxFQUlWRCxjQUpVLEVBS1ZRLG9CQUxVLEVBTVZKLGdCQU5VLEVBT1ZDLG1CQVBVLEVBUVZDLGtCQVJVLEVBU1ZKLGdCQVRVLEVBVVZDLGlCQVZVLEVBV1ZWLFFBWFUsRUFZVkcsWUFaVSxFQWFWYSxxQkFiVSxFQWNWQyx3QkFkVSxFQWVWSCxrQkFmVSxFQWdCVlIsYUFoQlUsRUFpQlZGLFdBakJVLEVBa0JWQyxZQWxCVSxDQUFaOztBQXFCQVIsY0FBUTVCLE9BQU84QixTQUFQLENBQWlCRixLQUFqQixDQUFSLENBekNtQixDQXlDZTs7QUFFbENBLGNBQVExQixjQUFjNEIsU0FBZCxDQUF3QkYsS0FBeEIsQ0FBUixDQTNDbUIsQ0EyQ3NCOztBQUV6QyxVQUFNcUIsb0JBQW9CLElBQUl4QixpQkFBSixDQUFzQkcsS0FBdEIsQ0FBMUI7O0FBRUEsYUFBT3FCLGlCQUFQO0FBQ0Q7Ozs7RUE3RDZCM0MsWTs7QUFnRWhDNEMsT0FBT0MsT0FBUCxHQUFpQjFCLGlCQUFqQjs7QUFFQUEsa0JBQWtCdEIsV0FBbEIsR0FBZ0NBLFdBQWhDIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3ljbGVzID0gcmVxdWlyZSgnLi4vZ3JhbW1hci9jeWNsZXMnKSxcbiAgICAgIGxlZnRSZWN1cnNpb24gPSByZXF1aXJlKCcuLi9ncmFtbWFyL2xlZnRSZWN1cnNpb24nKSxcbiAgICAgIGV4dGVuZGVkQk5GID0gcmVxdWlyZSgnLi9leHRlbmRlZEJORicpLFxuICAgICAgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgICAgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4vZGVmaW5pdGlvbicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgUGFydFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcGFydCcpLFxuICAgICAgUnVsZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZScpLFxuICAgICAgUnVsZXNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3J1bGVzJyksXG4gICAgICBSdWxlTmFtZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZU5hbWUnKSxcbiAgICAgIEVwc2lsb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL2Vwc2lsb24nKSxcbiAgICAgIFdpbGRjYXJkUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS93aWxkY2FyZCcpLFxuICAgICAgRW5kT2ZMaW5lUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9lbmRPZkxpbmUnKSxcbiAgICAgIERlZmluaXRpb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL2RlZmluaXRpb24nKSxcbiAgICAgIERlZmluaXRpb25zUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kZWZpbml0aW9ucycpLFxuICAgICAgR3JvdXBPZlBhcnRzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ncm91cE9mUGFydHMnKSxcbiAgICAgIENob2ljZU9mUGFydHNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL2Nob2ljZU9mUGFydHMnKSxcbiAgICAgIE9wdGlvbmFsUGFydFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvb3B0aW9uYWxQYXJ0JyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3plcm9Pck1vcmVQYXJ0cycpLFxuICAgICAgT25lT3JNb3JlUGFydHNSdWxlID0gcmVxdWlyZSgnLi9ydWxlL29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIE5vV2hpdGVzcGFjZVBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL25vV2hpdGVzcGFjZVBhcnQnKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIEV4dGVuZGVkQk5GUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGdlbmVyYXRlUnVsZXMobm9kZSwgbWFwcGluZ3MgPSB7fSkge1xuICAgIGxldCBydWxlcyA9IChub2RlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICBub2RlLmdlbmVyYXRlUnVsZXMoUnVsZSwgRGVmaW5pdGlvbiwgbWFwcGluZ3MpIDpcbiAgICAgICAgICAgICAgICAgICAgW107XG5cbiAgICBydWxlcyA9IGN5Y2xlcy5lbGltaW5hdGUocnVsZXMpOyAgLy8vXG5cbiAgICBydWxlcyA9IGxlZnRSZWN1cnNpb24uZWxpbWluYXRlKHJ1bGVzKTsgIC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUoKSxcbiAgICAgICAgICBydWxlc1J1bGUgPSBuZXcgUnVsZXNSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gbmV3IFJ1bGVOYW1lUnVsZSgpLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gbmV3IEVwc2lsb25SdWxlKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gbmV3IFdpbGRjYXJkUnVsZSgpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGUgPSBuZXcgRW5kT2ZMaW5lUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlID0gbmV3IERlZmluaXRpb25SdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gbmV3IERlZmluaXRpb25zUnVsZSgpLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1J1bGUgPSBuZXcgR3JvdXBPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlID0gbmV3IENob2ljZU9mUGFydHNSdWxlKCksXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UnVsZSA9IG5ldyBPcHRpb25hbFBhcnRSdWxlKCksXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUnVsZSA9IG5ldyBaZXJvT3JNb3JlUGFydHNSdWxlKCksXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNSdWxlID0gbmV3IE9uZU9yTW9yZVBhcnRzUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSA9IG5ldyBUZXJtaW5hbFN5bWJvbFJ1bGUoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBbXG4gICAgICBydWxlc1J1bGUsXG4gICAgICBydWxlUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUsXG4gICAgICBvcHRpb25hbFBhcnRSdWxlLFxuICAgICAgemVyb09yTW9yZVBhcnRzUnVsZSxcbiAgICAgIG9uZU9yTW9yZVBhcnRzUnVsZSxcbiAgICAgIGdyb3VwT2ZQYXJ0c1J1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgcnVsZU5hbWVSdWxlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLFxuICAgICAgdGVybWluYWxTeW1ib2xSdWxlLFxuICAgICAgZW5kT2ZMaW5lUnVsZSxcbiAgICAgIGVwc2lsb25SdWxlLFxuICAgICAgd2lsZGNhcmRSdWxlXG4gICAgXTtcblxuICAgIHJ1bGVzID0gY3ljbGVzLmVsaW1pbmF0ZShydWxlcyk7ICAvLy9cblxuICAgIHJ1bGVzID0gbGVmdFJlY3Vyc2lvbi5lbGltaW5hdGUocnVsZXMpOyAgLy8vXG5cbiAgICBjb25zdCBleHRlbmRlZEJORlBhcnNlciA9IG5ldyBFeHRlbmRlZEJORlBhcnNlcihydWxlcyk7XG4gICAgXG4gICAgcmV0dXJuIGV4dGVuZGVkQk5GUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXh0ZW5kZWRCTkZQYXJzZXI7XG5cbkV4dGVuZGVkQk5GUGFyc2VyLmV4dGVuZGVkQk5GID0gZXh0ZW5kZWRCTkY7XG4iXX0=