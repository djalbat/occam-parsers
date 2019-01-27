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
    ErrorRule = require('./rule/error'),
    EpsilonRule = require('./rule/epsilon'),
    DocumentRule = require('./rule/document'),
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
    key: 'rulesFromTokens',
    value: function rulesFromTokens(tokens) {
      var node = this.parse(tokens),
          rules = node.generateRules(Rule);

      return rules;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var partRule = new PartRule(),
          ruleRule = new RuleRule(),
          errorRule = new ErrorRule(),
          epsilonRule = new EpsilonRule(),
          documentRule = new DocumentRule(),
          wildcardRule = new WildcardRule(),
          ruleNameRule = new RuleNameRule(),
          endOfLineRule = new EndOfLineRule(),
          definitionRule = new DefinitionRule(),
          definitionsRule = new DefinitionsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          regularExpressionRule = new RegularExpressionRule(),
          rightRecursivePartRule = new RightRecursivePartRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule();

      var rules = [documentRule, ruleRule, definitionsRule, definitionRule, partRule, ruleNameRule, regularExpressionRule, significantTokenTypeRule, terminalSymbolRule, endOfLineRule, epsilonRule, wildcardRule, rightRecursivePartRule, errorRule];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImJuZiIsInJlcXVpcmUiLCJSdWxlIiwiQ29tbW9uUGFyc2VyIiwiUGFydFJ1bGUiLCJSdWxlUnVsZSIsIkVycm9yUnVsZSIsIkVwc2lsb25SdWxlIiwiRG9jdW1lbnRSdWxlIiwiV2lsZGNhcmRSdWxlIiwiUnVsZU5hbWVSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsIkRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwiUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIkJORlBhcnNlciIsInRva2VucyIsIm5vZGUiLCJwYXJzZSIsInJ1bGVzIiwiZ2VuZXJhdGVSdWxlcyIsInBhcnRSdWxlIiwicnVsZVJ1bGUiLCJlcnJvclJ1bGUiLCJlcHNpbG9uUnVsZSIsImRvY3VtZW50UnVsZSIsIndpbGRjYXJkUnVsZSIsInJ1bGVOYW1lUnVsZSIsImVuZE9mTGluZVJ1bGUiLCJkZWZpbml0aW9uUnVsZSIsImRlZmluaXRpb25zUnVsZSIsInRlcm1pbmFsU3ltYm9sUnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsInJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJibmZQYXJzZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEsT0FBUixDQUFaO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxRQUFSLENBRGI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUcsV0FBV0gsUUFBUSxhQUFSLENBSGpCO0FBQUEsSUFJTUksV0FBV0osUUFBUSxhQUFSLENBSmpCO0FBQUEsSUFLTUssWUFBWUwsUUFBUSxjQUFSLENBTGxCO0FBQUEsSUFNTU0sY0FBY04sUUFBUSxnQkFBUixDQU5wQjtBQUFBLElBT01PLGVBQWVQLFFBQVEsaUJBQVIsQ0FQckI7QUFBQSxJQVFNUSxlQUFlUixRQUFRLGlCQUFSLENBUnJCO0FBQUEsSUFTTVMsZUFBZVQsUUFBUSxpQkFBUixDQVRyQjtBQUFBLElBVU1VLGdCQUFnQlYsUUFBUSxrQkFBUixDQVZ0QjtBQUFBLElBV01XLGlCQUFpQlgsUUFBUSxtQkFBUixDQVh2QjtBQUFBLElBWU1ZLGtCQUFrQlosUUFBUSxvQkFBUixDQVp4QjtBQUFBLElBYU1hLHFCQUFxQmIsUUFBUSx1QkFBUixDQWIzQjtBQUFBLElBY01jLHdCQUF3QmQsUUFBUSwwQkFBUixDQWQ5QjtBQUFBLElBZU1lLHlCQUF5QmYsUUFBUSwyQkFBUixDQWYvQjtBQUFBLElBZ0JNZ0IsMkJBQTJCaEIsUUFBUSw2QkFBUixDQWhCakM7O0lBa0JNaUIsUzs7Ozs7Ozs7Ozs7b0NBQ1dDLE0sRUFBUTtBQUNyQixVQUFNQyxPQUFPLEtBQUtDLEtBQUwsQ0FBV0YsTUFBWCxDQUFiO0FBQUEsVUFDTUcsUUFBUUYsS0FBS0csYUFBTCxDQUFtQnJCLElBQW5CLENBRGQ7O0FBR0EsYUFBT29CLEtBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNRSxXQUFXLElBQUlwQixRQUFKLEVBQWpCO0FBQUEsVUFDTXFCLFdBQVcsSUFBSXBCLFFBQUosRUFEakI7QUFBQSxVQUVNcUIsWUFBWSxJQUFJcEIsU0FBSixFQUZsQjtBQUFBLFVBR01xQixjQUFjLElBQUlwQixXQUFKLEVBSHBCO0FBQUEsVUFJTXFCLGVBQWUsSUFBSXBCLFlBQUosRUFKckI7QUFBQSxVQUtNcUIsZUFBZSxJQUFJcEIsWUFBSixFQUxyQjtBQUFBLFVBTU1xQixlQUFlLElBQUlwQixZQUFKLEVBTnJCO0FBQUEsVUFPTXFCLGdCQUFnQixJQUFJcEIsYUFBSixFQVB0QjtBQUFBLFVBUU1xQixpQkFBaUIsSUFBSXBCLGNBQUosRUFSdkI7QUFBQSxVQVNNcUIsa0JBQWtCLElBQUlwQixlQUFKLEVBVHhCO0FBQUEsVUFVTXFCLHFCQUFxQixJQUFJcEIsa0JBQUosRUFWM0I7QUFBQSxVQVdNcUIsd0JBQXdCLElBQUlwQixxQkFBSixFQVg5QjtBQUFBLFVBWU1xQix5QkFBeUIsSUFBSXBCLHNCQUFKLEVBWi9CO0FBQUEsVUFhTXFCLDJCQUEyQixJQUFJcEIsd0JBQUosRUFiakM7O0FBZUEsVUFBSUssUUFBUSxDQUNWTSxZQURVLEVBRVZILFFBRlUsRUFHVlEsZUFIVSxFQUlWRCxjQUpVLEVBS1ZSLFFBTFUsRUFNVk0sWUFOVSxFQU9WSyxxQkFQVSxFQVFWRSx3QkFSVSxFQVNWSCxrQkFUVSxFQVVWSCxhQVZVLEVBV1ZKLFdBWFUsRUFZVkUsWUFaVSxFQWFWTyxzQkFiVSxFQWNWVixTQWRVLENBQVo7O0FBaUJBLFVBQU1ZLFlBQVksSUFBSXBCLFNBQUosQ0FBY0ksS0FBZCxDQUFsQjs7QUFFQSxhQUFPZ0IsU0FBUDtBQUNEOzs7O0VBNUNxQm5DLFk7O0FBK0N4Qm9DLE9BQU9DLE1BQVAsQ0FBY3RCLFNBQWQsRUFBeUI7QUFDdkJsQjtBQUR1QixDQUF6Qjs7QUFJQXlDLE9BQU9DLE9BQVAsR0FBaUJ4QixTQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoJy4vYm5mJyksXG4gICAgICBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBQYXJ0UnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9wYXJ0JyksXG4gICAgICBSdWxlUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlJyksXG4gICAgICBFcnJvclJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZXJyb3InKSxcbiAgICAgIEVwc2lsb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL2Vwc2lsb24nKSxcbiAgICAgIERvY3VtZW50UnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kb2N1bWVudCcpLFxuICAgICAgV2lsZGNhcmRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3dpbGRjYXJkJyksXG4gICAgICBSdWxlTmFtZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZU5hbWUnKSxcbiAgICAgIEVuZE9mTGluZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZW5kT2ZMaW5lJyksXG4gICAgICBEZWZpbml0aW9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kZWZpbml0aW9uJyksXG4gICAgICBEZWZpbml0aW9uc1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvZGVmaW5pdGlvbnMnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3JpZ2h0UmVjdXJzaXZlUGFydCcpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIEJORlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG5cdHJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVzID0gbm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUpO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUoKSxcbiAgICAgICAgICBlcnJvclJ1bGUgPSBuZXcgRXJyb3JSdWxlKCksXG4gICAgICAgICAgZXBzaWxvblJ1bGUgPSBuZXcgRXBzaWxvblJ1bGUoKSxcbiAgICAgICAgICBkb2N1bWVudFJ1bGUgPSBuZXcgRG9jdW1lbnRSdWxlKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gbmV3IFdpbGRjYXJkUnVsZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZSA9IG5ldyBSdWxlTmFtZVJ1bGUoKSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlID0gbmV3IEVuZE9mTGluZVJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uUnVsZSA9IG5ldyBEZWZpbml0aW9uUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZSA9IG5ldyBEZWZpbml0aW9uc1J1bGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUgPSBuZXcgVGVybWluYWxTeW1ib2xSdWxlKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUnVsZSgpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUgPSBuZXcgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUoKTtcblxuICAgIGxldCBydWxlcyA9IFtcbiAgICAgIGRvY3VtZW50UnVsZSxcbiAgICAgIHJ1bGVSdWxlLFxuICAgICAgZGVmaW5pdGlvbnNSdWxlLFxuICAgICAgZGVmaW5pdGlvblJ1bGUsXG4gICAgICBwYXJ0UnVsZSxcbiAgICAgIHJ1bGVOYW1lUnVsZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSxcbiAgICAgIGVuZE9mTGluZVJ1bGUsXG4gICAgICBlcHNpbG9uUnVsZSxcbiAgICAgIHdpbGRjYXJkUnVsZSxcbiAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUsXG4gICAgICBlcnJvclJ1bGVcbiAgICBdO1xuXG4gICAgY29uc3QgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihydWxlcyk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEJORlBhcnNlciwge1xuICBibmZcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcbiJdfQ==