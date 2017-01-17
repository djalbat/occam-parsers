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
    ErrorNode = require('./node/error'),
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
        'error': ErrorNode,
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
        'statementBody': TransparentNode,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJFcnJvck5vZGUiLCJMYWJlbE5vZGUiLCJJbmNsdWRlRGlyZWN0aXZlTm9kZSIsIlRyYW5zcGFyZW50Tm9kZSIsIkRpc2NhcmRDaGlsZHJlbk5vZGUiLCJEaXNjYXJkRmlyc3RDaGlsZE5vZGUiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRUaGVuU2Vjb25kTm9kZSIsIlRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUiLCJGbG9yZW5jZVBhcnNlciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJmbG9yZW5jZVBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0QjtBQUFBLElBRUlDLGdCQUFnQkgsT0FBT0csYUFGM0I7O0FBSUEsSUFBSUMsVUFBVUgsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJSSxZQUFZSixRQUFRLGVBQVIsQ0FEaEI7QUFBQSxJQUVJSyxlQUFlTCxRQUFRLGtCQUFSLENBRm5CO0FBQUEsSUFHSU0sWUFBWU4sUUFBUSxjQUFSLENBSGhCO0FBQUEsSUFJSU8sWUFBWVAsUUFBUSxjQUFSLENBSmhCO0FBQUEsSUFLSVEsdUJBQXVCUixRQUFRLHlCQUFSLENBTDNCO0FBQUEsSUFNSVMsa0JBQWtCVCxRQUFRLDRCQUFSLENBTnRCO0FBQUEsSUFPSVUsc0JBQXNCVixRQUFRLGdDQUFSLENBUDFCO0FBQUEsSUFRSVcsd0JBQXdCWCxRQUFRLGtDQUFSLENBUjVCO0FBQUEsSUFTSVkseUJBQXlCWixRQUFRLG1DQUFSLENBVDdCO0FBQUEsSUFVSWEsNEJBQTRCYixRQUFRLHNDQUFSLENBVmhDO0FBQUEsSUFXSWMsa0NBQWtDZCxRQUFRLDRDQUFSLENBWHRDOztJQWFNZSxjOzs7Ozs7Ozs7OztrQ0FDaUI7QUFDbkIsVUFBSUMsUUFBUWYsU0FBU2dCLGdCQUFULENBQTBCZCxPQUExQixDQUFaO0FBQUEsVUFDSWUsK0JBQStCaEIsY0FBY2dCLDRCQUFkLEVBRG5DO0FBQUEsVUFFSUMsd0JBQXdCakIsY0FBY2lCLHFCQUFkLEVBRjVCO0FBQUEsVUFHSUMsV0FBVztBQUNULGdCQUFRWCxlQURDO0FBRVQsZ0JBQVFFLHFCQUZDO0FBR1QsaUJBQVNMLFNBSEE7QUFJVCxpQkFBU0MsU0FKQTtBQUtULG1CQUFXTSx5QkFMRjtBQU1ULG9CQUFZQywrQkFOSDtBQU9ULHFCQUFhTCxlQVBKO0FBUVQsZ0JBQVFFLHFCQVJDO0FBU1QsaUJBQVNBLHFCQVRBO0FBVVQsaUJBQVNBLHFCQVZBO0FBV1QsbUJBQVdBLHFCQVhGO0FBWVQscUJBQWFHLCtCQVpKO0FBYVQsc0JBQWNILHFCQWJMO0FBY1QsdUJBQWVELG1CQWROO0FBZVQseUJBQWlCRCxlQWZSO0FBZ0JULDBCQUFrQkkseUJBaEJUO0FBaUJULDRCQUFvQkwsb0JBakJYO0FBa0JULCtCQUF1QksseUJBbEJkO0FBbUJULDZCQUFxQkQsc0JBbkJaO0FBb0JULCtCQUF1QkgsZUFwQmQ7QUFxQlQseUNBQWlDQTtBQXJCeEIsT0FIZjtBQUFBLFVBMEJJWSxjQUFjakIsVUFBVWtCLEtBQVYsQ0FBZ0JOLEtBQWhCLEVBQXVCRSw0QkFBdkIsRUFBcURDLHFCQUFyRCxFQUE0RUMsUUFBNUUsQ0ExQmxCO0FBQUEsVUEyQklHLGlCQUFpQixJQUFJUixjQUFKLENBQW1CTSxXQUFuQixDQTNCckI7O0FBNkJBLGFBQU9FLGNBQVA7QUFDRDs7OztFQWhDMEJsQixZOztBQW1DN0JtQixPQUFPQyxPQUFQLEdBQWlCVixjQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBCTkZMZXhlciA9IGxleGVycy5CTkZMZXhlcixcbiAgICBGbG9yZW5jZUxleGVyID0gbGV4ZXJzLkZsb3JlbmNlTGV4ZXI7XG5cbnZhciBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICBFcnJvck5vZGUgPSByZXF1aXJlKCcuL25vZGUvZXJyb3InKSxcbiAgICBMYWJlbE5vZGUgPSByZXF1aXJlKCcuL25vZGUvbGFiZWwnKSxcbiAgICBJbmNsdWRlRGlyZWN0aXZlTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9pbmNsdWRlRGlyZWN0aXZlJyksXG4gICAgVHJhbnNwYXJlbnROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdHJhbnNwYXJlbnQnKSxcbiAgICBEaXNjYXJkQ2hpbGRyZW5Ob2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZENoaWxkcmVuJyksXG4gICAgRGlzY2FyZEZpcnN0Q2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZEZpcnN0Q2hpbGQnKSxcbiAgICBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZFNlY29uZENoaWxkJyksXG4gICAgVHJhbnNwYXJlbnRUaGVuU2Vjb25kTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50VGhlblNlY29uZCcpLFxuICAgIFRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90cmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3QnKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgdmFyIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IEZsb3JlbmNlTGV4ZXIudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpLFxuICAgICAgICBtYXBwaW5ncyA9IHtcbiAgICAgICAgICAncGFydCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAncnVsZSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnZXJyb3InOiBFcnJvck5vZGUsXG4gICAgICAgICAgJ2xhYmVsJzogTGFiZWxOb2RlLFxuICAgICAgICAgICdwcmVtaXNlJzogVHJhbnNwYXJlbnRUaGVuU2Vjb25kTm9kZSxcbiAgICAgICAgICAncHJlbWlzZXMnOiBUcmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3ROb2RlLFxuICAgICAgICAgICdkaXJlY3RpdmUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAgICAgJ3RoZW4nOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ2hlbmNlJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICdwcm9vZic6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnc3VwcG9zZSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAndGhlcmVmb3JlJzogVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZSxcbiAgICAgICAgICAnY29uY2x1c2lvbic6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnZW5kc09mTGluZXMnOiBEaXNjYXJkQ2hpbGRyZW5Ob2RlLFxuICAgICAgICAgICdzdGF0ZW1lbnRCb2R5JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgICAgICdjb21tYVRoZW5MYWJlbCc6IFRyYW5zcGFyZW50VGhlblNlY29uZE5vZGUsXG4gICAgICAgICAgJ2luY2x1ZGVEaXJlY3RpdmUnOiBJbmNsdWRlRGlyZWN0aXZlTm9kZSxcbiAgICAgICAgICAncGFyZW50aGVzaXNlZExhYmVscyc6IFRyYW5zcGFyZW50VGhlblNlY29uZE5vZGUsXG4gICAgICAgICAgJ2xhYmVsbGVkU3RhdGVtZW50JzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICAgICAnKGxhYmVsbGVkKVN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAnc3ViTGVtbWFPcihsYWJlbGxlZClTdGF0ZW1lbnQnOiBUcmFuc3BhcmVudE5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIucGFyc2UobGluZXMsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpLFxuICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiJdfQ==