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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leHRlbmRlZEJORi9wYXJzZXIuanMiXSwibmFtZXMiOlsiY3ljbGVzIiwicmVxdWlyZSIsImxlZnRSZWN1cnNpb24iLCJleHRlbmRlZEJORiIsIlJ1bGUiLCJEZWZpbml0aW9uIiwiQ29tbW9uUGFyc2VyIiwiUGFydFJ1bGUiLCJSdWxlUnVsZSIsIlJ1bGVzUnVsZSIsIlJ1bGVOYW1lUnVsZSIsIkVwc2lsb25SdWxlIiwiV2lsZGNhcmRSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsIkRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwiR3JvdXBPZlBhcnRzUnVsZSIsIkNob2ljZU9mUGFydHNSdWxlIiwiT3B0aW9uYWxQYXJ0UnVsZSIsIlplcm9Pck1vcmVQYXJ0c1J1bGUiLCJPbmVPck1vcmVQYXJ0c1J1bGUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJOb1doaXRlc3BhY2VQYXJ0UnVsZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIkV4dGVuZGVkQk5GUGFyc2VyIiwibm9kZSIsIm1hcHBpbmdzIiwicnVsZXMiLCJnZW5lcmF0ZVJ1bGVzIiwicGFydFJ1bGUiLCJydWxlUnVsZSIsInJ1bGVzUnVsZSIsInJ1bGVOYW1lUnVsZSIsImVwc2lsb25SdWxlIiwid2lsZGNhcmRSdWxlIiwiZW5kT2ZMaW5lUnVsZSIsImRlZmluaXRpb25SdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwiZ3JvdXBPZlBhcnRzUnVsZSIsImNob2ljZU9mUGFydHNSdWxlIiwib3B0aW9uYWxQYXJ0UnVsZSIsInplcm9Pck1vcmVQYXJ0c1J1bGUiLCJvbmVPck1vcmVQYXJ0c1J1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJub1doaXRlc3BhY2VQYXJ0UnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsImVsaW1pbmF0ZSIsImV4dGVuZGVkQk5GUGFyc2VyIiwibW9k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RFUsRUFFVkQsUUFGVSxFQUdWTyxlQUhVLEVBSVZELGNBSlUsRUFLVlEsb0JBTFUsRUFNVkosZ0JBTlUsRUFPVkMsbUJBUFUsRUFRVkMsa0JBUlUsRUFTVkosZ0JBVFUsRUFVVkMsaUJBVlUsRUFXVlYsUUFYVSxFQVlWRyxZQVpVLEVBYVZhLHFCQWJVLEVBY1ZDLHdCQWRVLEVBZVZILGtCQWZVLEVBZ0JWUixhQWhCVSxFQWlCVkYsV0FqQlUsRUFrQlZDLFlBbEJVLENBQVo7O0FBcUJBUCxjQUFRNUIsT0FBT2dELFNBQVAsQ0FBaUJwQixLQUFqQixDQUFSLENBekNtQixDQXlDZTs7QUFFbENBLGNBQVExQixjQUFjOEMsU0FBZCxDQUF3QnBCLEtBQXhCLENBQVIsQ0EzQ21CLENBMkNzQjs7QUFFekMsVUFBTXFCLG9CQUFvQixJQUFJeEIsaUJBQUosQ0FBc0JHLEtBQXRCLENBQTFCOztBQUVBLGFBQU9xQixpQkFBUDtBQUNEOzs7O0VBekQ2QjNDLFk7O0FBNERoQzRDLE9BQU9DLE9BQVAsR0FBaUIxQixpQkFBakI7O0FBRUFBLGtCQUFrQnRCLFdBQWxCLEdBQWdDQSxXQUFoQyIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN5Y2xlcyA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvY3ljbGVzJyksXG4gICAgICBsZWZ0UmVjdXJzaW9uID0gcmVxdWlyZSgnLi4vZ3JhbW1hci9sZWZ0UmVjdXJzaW9uJyksXG4gICAgICBleHRlbmRlZEJORiA9IHJlcXVpcmUoJy4vZXh0ZW5kZWRCTkYnKSxcbiAgICAgIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuL2RlZmluaXRpb24nKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3BhcnQnKSxcbiAgICAgIFJ1bGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3J1bGUnKSxcbiAgICAgIFJ1bGVzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlcycpLFxuICAgICAgUnVsZU5hbWVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3J1bGVOYW1lJyksXG4gICAgICBFcHNpbG9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9lcHNpbG9uJyksXG4gICAgICBXaWxkY2FyZFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvd2lsZGNhcmQnKSxcbiAgICAgIEVuZE9mTGluZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZW5kT2ZMaW5lJyksXG4gICAgICBEZWZpbml0aW9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kZWZpbml0aW9uJyksXG4gICAgICBEZWZpbml0aW9uc1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvZGVmaW5pdGlvbnMnKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvZ3JvdXBPZlBhcnRzJyksXG4gICAgICBDaG9pY2VPZlBhcnRzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9jaG9pY2VPZlBhcnRzJyksXG4gICAgICBPcHRpb25hbFBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL29wdGlvbmFsUGFydCcpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS96ZXJvT3JNb3JlUGFydHMnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgVGVybWluYWxTeW1ib2xSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBOb1doaXRlc3BhY2VQYXJ0UnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ub1doaXRlc3BhY2VQYXJ0JyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcmVndWxhckV4cHJlc3Npb24nKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBFeHRlbmRlZEJORlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBnZW5lcmF0ZVJ1bGVzKG5vZGUsIG1hcHBpbmdzID0ge30pIHtcbiAgICBjb25zdCBydWxlcyA9IChub2RlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICBub2RlLmdlbmVyYXRlUnVsZXMoUnVsZSwgRGVmaW5pdGlvbiwgbWFwcGluZ3MpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgW107XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcGFydFJ1bGUgPSBuZXcgUGFydFJ1bGUoKSxcbiAgICAgICAgICBydWxlUnVsZSA9IG5ldyBSdWxlUnVsZSgpLFxuICAgICAgICAgIHJ1bGVzUnVsZSA9IG5ldyBSdWxlc1J1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGUgPSBuZXcgUnVsZU5hbWVSdWxlKCksXG4gICAgICAgICAgZXBzaWxvblJ1bGUgPSBuZXcgRXBzaWxvblJ1bGUoKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGUgPSBuZXcgV2lsZGNhcmRSdWxlKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IG5ldyBFbmRPZkxpbmVSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBuZXcgRGVmaW5pdGlvblJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGUgPSBuZXcgRGVmaW5pdGlvbnNSdWxlKCksXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUnVsZSA9IG5ldyBHcm91cE9mUGFydHNSdWxlKCksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1J1bGUoKSxcbiAgICAgICAgICBvcHRpb25hbFBhcnRSdWxlID0gbmV3IE9wdGlvbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNSdWxlID0gbmV3IFplcm9Pck1vcmVQYXJ0c1J1bGUoKSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0c1J1bGUgPSBuZXcgT25lT3JNb3JlUGFydHNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gbmV3IFRlcm1pbmFsU3ltYm9sUnVsZSgpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlID0gbmV3IE5vV2hpdGVzcGFjZVBhcnRSdWxlKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUnVsZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUoKTtcblxuICAgIGxldCBydWxlcyA9IFtcbiAgICAgIHJ1bGVzUnVsZSxcbiAgICAgIHJ1bGVSdWxlLFxuICAgICAgZGVmaW5pdGlvbnNSdWxlLFxuICAgICAgZGVmaW5pdGlvblJ1bGUsXG4gICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSxcbiAgICAgIG9wdGlvbmFsUGFydFJ1bGUsXG4gICAgICB6ZXJvT3JNb3JlUGFydHNSdWxlLFxuICAgICAgb25lT3JNb3JlUGFydHNSdWxlLFxuICAgICAgZ3JvdXBPZlBhcnRzUnVsZSxcbiAgICAgIGNob2ljZU9mUGFydHNSdWxlLFxuICAgICAgcGFydFJ1bGUsXG4gICAgICBydWxlTmFtZVJ1bGUsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUsXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUsXG4gICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUsXG4gICAgICBlbmRPZkxpbmVSdWxlLFxuICAgICAgZXBzaWxvblJ1bGUsXG4gICAgICB3aWxkY2FyZFJ1bGVcbiAgICBdO1xuXG4gICAgcnVsZXMgPSBjeWNsZXMuZWxpbWluYXRlKHJ1bGVzKTsgIC8vL1xuXG4gICAgcnVsZXMgPSBsZWZ0UmVjdXJzaW9uLmVsaW1pbmF0ZShydWxlcyk7ICAvLy9cblxuICAgIGNvbnN0IGV4dGVuZGVkQk5GUGFyc2VyID0gbmV3IEV4dGVuZGVkQk5GUGFyc2VyKHJ1bGVzKTtcbiAgICBcbiAgICByZXR1cm4gZXh0ZW5kZWRCTkZQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeHRlbmRlZEJORlBhcnNlcjtcblxuRXh0ZW5kZWRCTkZQYXJzZXIuZXh0ZW5kZWRCTkYgPSBleHRlbmRlZEJORjtcbiJdfQ==