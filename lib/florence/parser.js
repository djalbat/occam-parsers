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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJFcnJvck5vZGUiLCJMYWJlbE5vZGUiLCJJbmNsdWRlRGlyZWN0aXZlTm9kZSIsIlRyYW5zcGFyZW50Tm9kZSIsIkRpc2NhcmRDaGlsZHJlbk5vZGUiLCJEaXNjYXJkRmlyc3RDaGlsZE5vZGUiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRUaGVuU2Vjb25kTm9kZSIsIlRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUiLCJGbG9yZW5jZVBhcnNlciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJmbG9yZW5jZVBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0QjtBQUFBLElBRUlDLGdCQUFnQkgsT0FBT0csYUFGM0I7O0FBSUEsSUFBSUMsVUFBVUgsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJSSxZQUFZSixRQUFRLGVBQVIsQ0FEaEI7QUFBQSxJQUVJSyxlQUFlTCxRQUFRLGtCQUFSLENBRm5CO0FBQUEsSUFHSU0sWUFBWU4sUUFBUSxjQUFSLENBSGhCO0FBQUEsSUFJSU8sWUFBWVAsUUFBUSxjQUFSLENBSmhCO0FBQUEsSUFLSVEsdUJBQXVCUixRQUFRLHlCQUFSLENBTDNCO0FBQUEsSUFNSVMsa0JBQWtCVCxRQUFRLDRCQUFSLENBTnRCO0FBQUEsSUFPSVUsc0JBQXNCVixRQUFRLGdDQUFSLENBUDFCO0FBQUEsSUFRSVcsd0JBQXdCWCxRQUFRLGtDQUFSLENBUjVCO0FBQUEsSUFTSVkseUJBQXlCWixRQUFRLG1DQUFSLENBVDdCO0FBQUEsSUFVSWEsNEJBQTRCYixRQUFRLHNDQUFSLENBVmhDO0FBQUEsSUFXSWMsa0NBQWtDZCxRQUFRLDRDQUFSLENBWHRDOztJQWFNZSxjOzs7Ozs7Ozs7OztrQ0FDaUI7QUFDbkIsVUFBSUMsUUFBUWYsU0FBU2dCLGdCQUFULENBQTBCZCxPQUExQixDQUFaO0FBQUEsVUFDSWUsK0JBQStCaEIsY0FBY2dCLDRCQUFkLEVBRG5DO0FBQUEsVUFFSUMsd0JBQXdCakIsY0FBY2lCLHFCQUFkLEVBRjVCO0FBQUEsVUFHSUMsV0FBVztBQUNULGdCQUFRWCxlQURDO0FBRVQsZ0JBQVFFLHFCQUZDO0FBR1QsaUJBQVNMLFNBSEE7QUFJVCxpQkFBU0MsU0FKQTtBQUtULG1CQUFXTSx5QkFMRjtBQU1ULG9CQUFZQywrQkFOSDtBQU9ULHFCQUFhTCxlQVBKO0FBUVQsZ0JBQVFFLHFCQVJDO0FBU1QsaUJBQVNBLHFCQVRBO0FBVVQsaUJBQVNBLHFCQVZBO0FBV1QsbUJBQVdBLHFCQVhGO0FBWVQscUJBQWFHLCtCQVpKO0FBYVQsc0JBQWNILHFCQWJMO0FBY1QsdUJBQWVELG1CQWROO0FBZVQsMEJBQWtCRyx5QkFmVDtBQWdCVCw0QkFBb0JMLG9CQWhCWDtBQWlCVCwrQkFBdUJLLHlCQWpCZDtBQWtCVCw2QkFBcUJELHNCQWxCWjtBQW1CVCwrQkFBdUJILGVBbkJkO0FBb0JULHlDQUFpQ0E7QUFwQnhCLE9BSGY7QUFBQSxVQXlCSVksY0FBY2pCLFVBQVVrQixLQUFWLENBQWdCTixLQUFoQixFQUF1QkUsNEJBQXZCLEVBQXFEQyxxQkFBckQsRUFBNEVDLFFBQTVFLENBekJsQjtBQUFBLFVBMEJJRyxpQkFBaUIsSUFBSVIsY0FBSixDQUFtQk0sV0FBbkIsQ0ExQnJCOztBQTRCQSxhQUFPRSxjQUFQO0FBQ0Q7Ozs7RUEvQjBCbEIsWTs7QUFrQzdCbUIsT0FBT0MsT0FBUCxHQUFpQlYsY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgQk5GTGV4ZXIgPSBsZXhlcnMuQk5GTGV4ZXIsXG4gICAgRmxvcmVuY2VMZXhlciA9IGxleGVycy5GbG9yZW5jZUxleGVyO1xuXG52YXIgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgRXJyb3JOb2RlID0gcmVxdWlyZSgnLi9ub2RlL2Vycm9yJyksXG4gICAgTGFiZWxOb2RlID0gcmVxdWlyZSgnLi9ub2RlL2xhYmVsJyksXG4gICAgSW5jbHVkZURpcmVjdGl2ZU5vZGUgPSByZXF1aXJlKCcuL25vZGUvaW5jbHVkZURpcmVjdGl2ZScpLFxuICAgIFRyYW5zcGFyZW50Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50JyksXG4gICAgRGlzY2FyZENoaWxkcmVuTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL2Rpc2NhcmRDaGlsZHJlbicpLFxuICAgIERpc2NhcmRGaXJzdENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL2Rpc2NhcmRGaXJzdENoaWxkJyksXG4gICAgRGlzY2FyZFNlY29uZENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL2Rpc2NhcmRTZWNvbmRDaGlsZCcpLFxuICAgIFRyYW5zcGFyZW50VGhlblNlY29uZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90cmFuc3BhcmVudFRoZW5TZWNvbmQnKSxcbiAgICBUcmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3ROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Jyk7XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIHZhciBsaW5lcyA9IEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBGbG9yZW5jZUxleGVyLnRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gRmxvcmVuY2VMZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXMoKSxcbiAgICAgICAgbWFwcGluZ3MgPSB7XG4gICAgICAgICAgJ3BhcnQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAgICAgJ3J1bGUnOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ2Vycm9yJzogRXJyb3JOb2RlLFxuICAgICAgICAgICdsYWJlbCc6IExhYmVsTm9kZSxcbiAgICAgICAgICAncHJlbWlzZSc6IFRyYW5zcGFyZW50VGhlblNlY29uZE5vZGUsXG4gICAgICAgICAgJ3ByZW1pc2VzJzogVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZSxcbiAgICAgICAgICAnZGlyZWN0aXZlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgICAgICd0aGVuJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICdoZW5jZSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAncHJvb2YnOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ3N1cHBvc2UnOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ3RoZXJlZm9yZSc6IFRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUsXG4gICAgICAgICAgJ2NvbmNsdXNpb24nOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ2VuZHNPZkxpbmVzJzogRGlzY2FyZENoaWxkcmVuTm9kZSxcbiAgICAgICAgICAnY29tbWFUaGVuTGFiZWwnOiBUcmFuc3BhcmVudFRoZW5TZWNvbmROb2RlLFxuICAgICAgICAgICdpbmNsdWRlRGlyZWN0aXZlJzogSW5jbHVkZURpcmVjdGl2ZU5vZGUsXG4gICAgICAgICAgJ3BhcmVudGhlc2lzZWRMYWJlbHMnOiBUcmFuc3BhcmVudFRoZW5TZWNvbmROb2RlLFxuICAgICAgICAgICdsYWJlbGxlZFN0YXRlbWVudCc6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAgICAgJyhsYWJlbGxlZClTdGF0ZW1lbnQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAgICAgJ3N1YkxlbW1hT3IobGFiZWxsZWQpU3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlXG4gICAgICAgIH0sXG4gICAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=