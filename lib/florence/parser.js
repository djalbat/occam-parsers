'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    LabelNode = require('./node/label'),
    IncludeDirectiveNode = require('./node/includeDirective'),
    TransparentNode = require('../common/node/transparent'),
    DiscardChildrenNode = require('../common/node/discardChildren'),
    DiscardFirstChildNode = require('../common/node/discardFirstChild'),
    DiscardSecondChildNode = require('../common/node/discardSecondChild'),
    TransparentThenSecondNode = require('../common/node/transparentThenSecond'),
    TransparentThenDiscardFirstNode = require('../common/node/transparentThenDiscardFirst');

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromNothing',
    value: function fromNothing() {
      var lines = BNFLexer.linesFromGrammar(grammar),
          terminalSymbolsRegExpPattern = FlorenceLexer.terminalSymbolsRegExpPattern(),
          significantTokenTypes = FlorenceLexer.significantTokenTypes(),
          mappings = {
        'part': TransparentNode,
        'rule': DiscardFirstChildNode,
        'label': LabelNode,
        'premise': TransparentThenSecondNode,
        'premises': TransparentThenDiscardFirstNode,
        'directive': TransparentNode,
        'then': DiscardFirstChildNode,
        'hence': DiscardFirstChildNode,
        'proof': DiscardFirstChildNode,
        'suppose': DiscardFirstChildNode,
        'therefore': TransparentThenDiscardFirstNode,
        'conclusion': DiscardFirstChildNode,
        'endsOfLines': DiscardChildrenNode,
        'commaThenLabel': TransparentThenSecondNode,
        'includeDirective': IncludeDirectiveNode,
        'parenthesisedLabels': TransparentThenSecondNode,
        'labelledStatement': DiscardSecondChildNode,
        '(labelled)Statement': TransparentNode,
        'subLemmaOr(labelled)Statement': TransparentNode
      },
          productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJMYWJlbE5vZGUiLCJJbmNsdWRlRGlyZWN0aXZlTm9kZSIsIlRyYW5zcGFyZW50Tm9kZSIsIkRpc2NhcmRDaGlsZHJlbk5vZGUiLCJEaXNjYXJkRmlyc3RDaGlsZE5vZGUiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRUaGVuU2Vjb25kTm9kZSIsIlRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUiLCJGbG9yZW5jZVBhcnNlciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJmbG9yZW5jZVBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0QjtBQUFBLElBRUlDLGdCQUFnQkgsT0FBT0csYUFGM0I7O0FBSUEsSUFBSUMsVUFBVUgsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJSSxZQUFZSixRQUFRLGVBQVIsQ0FEaEI7QUFBQSxJQUVJSyxlQUFlTCxRQUFRLGtCQUFSLENBRm5CO0FBQUEsSUFHSU0sWUFBWU4sUUFBUSxjQUFSLENBSGhCO0FBQUEsSUFJSU8sdUJBQXVCUCxRQUFRLHlCQUFSLENBSjNCO0FBQUEsSUFLSVEsa0JBQWtCUixRQUFRLDRCQUFSLENBTHRCO0FBQUEsSUFNSVMsc0JBQXNCVCxRQUFRLGdDQUFSLENBTjFCO0FBQUEsSUFPSVUsd0JBQXdCVixRQUFRLGtDQUFSLENBUDVCO0FBQUEsSUFRSVcseUJBQXlCWCxRQUFRLG1DQUFSLENBUjdCO0FBQUEsSUFTSVksNEJBQTRCWixRQUFRLHNDQUFSLENBVGhDO0FBQUEsSUFVSWEsa0NBQWtDYixRQUFRLDRDQUFSLENBVnRDOztJQVlNYyxjOzs7Ozs7Ozs7OztrQ0FDaUI7QUFDbkIsVUFBSUMsUUFBUWQsU0FBU2UsZ0JBQVQsQ0FBMEJiLE9BQTFCLENBQVo7QUFBQSxVQUNJYywrQkFBK0JmLGNBQWNlLDRCQUFkLEVBRG5DO0FBQUEsVUFFSUMsd0JBQXdCaEIsY0FBY2dCLHFCQUFkLEVBRjVCO0FBQUEsVUFHSUMsV0FBVztBQUNULGdCQUFRWCxlQURDO0FBRVQsZ0JBQVFFLHFCQUZDO0FBR1QsaUJBQVNKLFNBSEE7QUFJVCxtQkFBV00seUJBSkY7QUFLVCxvQkFBWUMsK0JBTEg7QUFNVCxxQkFBYUwsZUFOSjtBQU9ULGdCQUFRRSxxQkFQQztBQVFULGlCQUFTQSxxQkFSQTtBQVNULGlCQUFTQSxxQkFUQTtBQVVULG1CQUFXQSxxQkFWRjtBQVdULHFCQUFhRywrQkFYSjtBQVlULHNCQUFjSCxxQkFaTDtBQWFULHVCQUFlRCxtQkFiTjtBQWNULDBCQUFrQkcseUJBZFQ7QUFlVCw0QkFBb0JMLG9CQWZYO0FBZ0JULCtCQUF1QksseUJBaEJkO0FBaUJULDZCQUFxQkQsc0JBakJaO0FBa0JULCtCQUF1QkgsZUFsQmQ7QUFtQlQseUNBQWlDQTtBQW5CeEIsT0FIZjtBQUFBLFVBd0JJWSxjQUFjaEIsVUFBVWlCLEtBQVYsQ0FBZ0JOLEtBQWhCLEVBQXVCRSw0QkFBdkIsRUFBcURDLHFCQUFyRCxFQUE0RUMsUUFBNUUsQ0F4QmxCO0FBQUEsVUF5QklHLGlCQUFpQixJQUFJUixjQUFKLENBQW1CTSxXQUFuQixDQXpCckI7O0FBMkJBLGFBQU9FLGNBQVA7QUFDRDs7OztFQTlCMEJqQixZOztBQWlDN0JrQixPQUFPQyxPQUFQLEdBQWlCVixjQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBCTkZMZXhlciA9IGxleGVycy5CTkZMZXhlcixcbiAgICBGbG9yZW5jZUxleGVyID0gbGV4ZXJzLkZsb3JlbmNlTGV4ZXI7XG5cbnZhciBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICBMYWJlbE5vZGUgPSByZXF1aXJlKCcuL25vZGUvbGFiZWwnKSxcbiAgICBJbmNsdWRlRGlyZWN0aXZlTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9pbmNsdWRlRGlyZWN0aXZlJyksXG4gICAgVHJhbnNwYXJlbnROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdHJhbnNwYXJlbnQnKSxcbiAgICBEaXNjYXJkQ2hpbGRyZW5Ob2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZENoaWxkcmVuJyksXG4gICAgRGlzY2FyZEZpcnN0Q2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZEZpcnN0Q2hpbGQnKSxcbiAgICBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZFNlY29uZENoaWxkJyksXG4gICAgVHJhbnNwYXJlbnRUaGVuU2Vjb25kTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50VGhlblNlY29uZCcpLFxuICAgIFRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90cmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3QnKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgdmFyIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IEZsb3JlbmNlTGV4ZXIudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpLFxuICAgICAgICBtYXBwaW5ncyA9IHtcbiAgICAgICAgICAncGFydCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAncnVsZSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnbGFiZWwnOiBMYWJlbE5vZGUsXG4gICAgICAgICAgJ3ByZW1pc2UnOiBUcmFuc3BhcmVudFRoZW5TZWNvbmROb2RlLFxuICAgICAgICAgICdwcmVtaXNlcyc6IFRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUsXG4gICAgICAgICAgJ2RpcmVjdGl2ZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAndGhlbic6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnaGVuY2UnOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ3Byb29mJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICdzdXBwb3NlJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICd0aGVyZWZvcmUnOiBUcmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3ROb2RlLFxuICAgICAgICAgICdjb25jbHVzaW9uJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICdlbmRzT2ZMaW5lcyc6IERpc2NhcmRDaGlsZHJlbk5vZGUsXG4gICAgICAgICAgJ2NvbW1hVGhlbkxhYmVsJzogVHJhbnNwYXJlbnRUaGVuU2Vjb25kTm9kZSxcbiAgICAgICAgICAnaW5jbHVkZURpcmVjdGl2ZSc6IEluY2x1ZGVEaXJlY3RpdmVOb2RlLFxuICAgICAgICAgICdwYXJlbnRoZXNpc2VkTGFiZWxzJzogVHJhbnNwYXJlbnRUaGVuU2Vjb25kTm9kZSxcbiAgICAgICAgICAnbGFiZWxsZWRTdGF0ZW1lbnQnOiBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlLFxuICAgICAgICAgICcobGFiZWxsZWQpU3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgICAgICdzdWJMZW1tYU9yKGxhYmVsbGVkKVN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZVxuICAgICAgICB9LFxuICAgICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuIl19