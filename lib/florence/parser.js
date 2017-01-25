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
    TransparentThenKeepSecondNode = require('../common/node/transparentThenKeepSecond'),
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
          significantTokenTypes = FlorenceLexer.getSignificantTokenTypes(),
          mappings = {
        'includeDirective': IncludeDirectiveNode,
        'error': ErrorNode,
        'label': LabelNode,
        'part': TransparentNode,
        'rule': DiscardFirstChildNode,
        'then': DiscardFirstChildNode,
        'hence': DiscardFirstChildNode,
        'proof': DiscardFirstChildNode,
        'lemma': DiscardFirstChildNode,
        'theorem': DiscardFirstChildNode,
        'suppose': DiscardFirstChildNode,
        'premise': TransparentThenKeepSecondNode,
        'premises': TransparentThenDiscardFirstNode,
        'therefore': TransparentThenDiscardFirstNode,
        'directive': TransparentNode,
        'conclusion': DiscardFirstChildNode,
        'endsOfLines': DiscardChildrenNode,
        'statementBody': TransparentNode,
        'commaThenLabel': TransparentThenKeepSecondNode,
        'labelledStatement': DiscardSecondChildNode,
        'parenthesisedLabels': TransparentThenKeepSecondNode,
        '(labelled)Statement': TransparentNode,
        'specialOrUnassigned': TransparentNode,
        'subLemmaOr(labelled)Statement': TransparentNode
      },
          productions = BNFParser.parse(lines, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJFcnJvck5vZGUiLCJMYWJlbE5vZGUiLCJJbmNsdWRlRGlyZWN0aXZlTm9kZSIsIlRyYW5zcGFyZW50Tm9kZSIsIkRpc2NhcmRDaGlsZHJlbk5vZGUiLCJEaXNjYXJkRmlyc3RDaGlsZE5vZGUiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUiLCJUcmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3ROb2RlIiwiRmxvcmVuY2VQYXJzZXIiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJnZXRTaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJmbG9yZW5jZVBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0QjtBQUFBLElBRUlDLGdCQUFnQkgsT0FBT0csYUFGM0I7O0FBSUEsSUFBSUMsVUFBVUgsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJSSxZQUFZSixRQUFRLGVBQVIsQ0FEaEI7QUFBQSxJQUVJSyxlQUFlTCxRQUFRLGtCQUFSLENBRm5CO0FBQUEsSUFHSU0sWUFBWU4sUUFBUSxjQUFSLENBSGhCO0FBQUEsSUFJSU8sWUFBWVAsUUFBUSxjQUFSLENBSmhCO0FBQUEsSUFLSVEsdUJBQXVCUixRQUFRLHlCQUFSLENBTDNCO0FBQUEsSUFNSVMsa0JBQWtCVCxRQUFRLDRCQUFSLENBTnRCO0FBQUEsSUFPSVUsc0JBQXNCVixRQUFRLGdDQUFSLENBUDFCO0FBQUEsSUFRSVcsd0JBQXdCWCxRQUFRLGtDQUFSLENBUjVCO0FBQUEsSUFTSVkseUJBQXlCWixRQUFRLG1DQUFSLENBVDdCO0FBQUEsSUFVSWEsZ0NBQWdDYixRQUFRLDBDQUFSLENBVnBDO0FBQUEsSUFXSWMsa0NBQWtDZCxRQUFRLDRDQUFSLENBWHRDOztJQWFNZSxjOzs7Ozs7Ozs7OztrQ0FDaUI7QUFDbkIsVUFBSUMsUUFBUWYsU0FBU2dCLGdCQUFULENBQTBCZCxPQUExQixDQUFaO0FBQUEsVUFDSWUsd0JBQXdCaEIsY0FBY2lCLHdCQUFkLEVBRDVCO0FBQUEsVUFFSUMsV0FBVztBQUNULDRCQUFvQlosb0JBRFg7QUFFVCxpQkFBU0YsU0FGQTtBQUdULGlCQUFTQyxTQUhBO0FBSVQsZ0JBQVFFLGVBSkM7QUFLVCxnQkFBUUUscUJBTEM7QUFNVCxnQkFBUUEscUJBTkM7QUFPVCxpQkFBU0EscUJBUEE7QUFRVCxpQkFBU0EscUJBUkE7QUFTVCxpQkFBU0EscUJBVEE7QUFVVCxtQkFBV0EscUJBVkY7QUFXVCxtQkFBV0EscUJBWEY7QUFZVCxtQkFBV0UsNkJBWkY7QUFhVCxvQkFBWUMsK0JBYkg7QUFjVCxxQkFBYUEsK0JBZEo7QUFlVCxxQkFBYUwsZUFmSjtBQWdCVCxzQkFBY0UscUJBaEJMO0FBaUJULHVCQUFlRCxtQkFqQk47QUFrQlQseUJBQWlCRCxlQWxCUjtBQW1CVCwwQkFBa0JJLDZCQW5CVDtBQW9CVCw2QkFBcUJELHNCQXBCWjtBQXFCVCwrQkFBdUJDLDZCQXJCZDtBQXNCVCwrQkFBdUJKLGVBdEJkO0FBdUJULCtCQUF1QkEsZUF2QmQ7QUF3QlQseUNBQWlDQTtBQXhCeEIsT0FGZjtBQUFBLFVBNEJJWSxjQUFjakIsVUFBVWtCLEtBQVYsQ0FBZ0JOLEtBQWhCLEVBQXVCRSxxQkFBdkIsRUFBOENFLFFBQTlDLENBNUJsQjtBQUFBLFVBNkJJRyxpQkFBaUIsSUFBSVIsY0FBSixDQUFtQk0sV0FBbkIsQ0E3QnJCOztBQStCQSxhQUFPRSxjQUFQO0FBQ0Q7Ozs7RUFsQzBCbEIsWTs7QUFxQzdCbUIsT0FBT0MsT0FBUCxHQUFpQlYsY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgQk5GTGV4ZXIgPSBsZXhlcnMuQk5GTGV4ZXIsXG4gICAgRmxvcmVuY2VMZXhlciA9IGxleGVycy5GbG9yZW5jZUxleGVyO1xuXG52YXIgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgRXJyb3JOb2RlID0gcmVxdWlyZSgnLi9ub2RlL2Vycm9yJyksXG4gICAgTGFiZWxOb2RlID0gcmVxdWlyZSgnLi9ub2RlL2xhYmVsJyksXG4gICAgSW5jbHVkZURpcmVjdGl2ZU5vZGUgPSByZXF1aXJlKCcuL25vZGUvaW5jbHVkZURpcmVjdGl2ZScpLFxuICAgIFRyYW5zcGFyZW50Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50JyksXG4gICAgRGlzY2FyZENoaWxkcmVuTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL2Rpc2NhcmRDaGlsZHJlbicpLFxuICAgIERpc2NhcmRGaXJzdENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL2Rpc2NhcmRGaXJzdENoaWxkJyksXG4gICAgRGlzY2FyZFNlY29uZENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL2Rpc2NhcmRTZWNvbmRDaGlsZCcpLFxuICAgIFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZCcpLFxuICAgIFRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90cmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3QnKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgdmFyIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gRmxvcmVuY2VMZXhlci5nZXRTaWduaWZpY2FudFRva2VuVHlwZXMoKSxcbiAgICAgICAgbWFwcGluZ3MgPSB7XG4gICAgICAgICAgJ2luY2x1ZGVEaXJlY3RpdmUnOiBJbmNsdWRlRGlyZWN0aXZlTm9kZSxcbiAgICAgICAgICAnZXJyb3InOiBFcnJvck5vZGUsXG4gICAgICAgICAgJ2xhYmVsJzogTGFiZWxOb2RlLFxuICAgICAgICAgICdwYXJ0JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgICAgICdydWxlJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICd0aGVuJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICdoZW5jZSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAncHJvb2YnOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ2xlbW1hJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICd0aGVvcmVtJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICdzdXBwb3NlJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICdwcmVtaXNlJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAgICAgJ3ByZW1pc2VzJzogVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZSxcbiAgICAgICAgICAndGhlcmVmb3JlJzogVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZSxcbiAgICAgICAgICAnZGlyZWN0aXZlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgICAgICdjb25jbHVzaW9uJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICdlbmRzT2ZMaW5lcyc6IERpc2NhcmRDaGlsZHJlbk5vZGUsXG4gICAgICAgICAgJ3N0YXRlbWVudEJvZHknOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAgICAgJ2NvbW1hVGhlbkxhYmVsJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAgICAgJ2xhYmVsbGVkU3RhdGVtZW50JzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICAgICAncGFyZW50aGVzaXNlZExhYmVscyc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgICAgICcobGFiZWxsZWQpU3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgICAgICdzcGVjaWFsT3JVbmFzc2lnbmVkJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgICAgICdzdWJMZW1tYU9yKGxhYmVsbGVkKVN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZVxuICAgICAgICB9LFxuICAgICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuIl19