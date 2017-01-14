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
    MissingNode = require('../common/node/missing'),
    MissingFirstChildNode = require('../common/node/missingFirstChild'),
    TransparentNode = require('../common/node/transparent'),
    TransparentThenSecondNode = require('../common/node/transparentThenSecond'),
    TransparentThenMissingFirstNode = require('../common/node/transparentThenMissingFirst');

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
        'label': LabelNode,
        'rule': MissingFirstChildNode,
        'premise': TransparentThenSecondNode,
        'premises': TransparentThenMissingFirstNode,
        'directive': TransparentNode,
        'conclusion': MissingFirstChildNode,
        'endsOfLines': MissingNode,
        'includeDirective': IncludeDirectiveNode,
        'commaThenLabel': TransparentThenSecondNode,
        'parenthesisedLabels': TransparentThenSecondNode,
        '(labelled)statement': TransparentNode
      },
          productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJMYWJlbE5vZGUiLCJJbmNsdWRlRGlyZWN0aXZlTm9kZSIsIk1pc3NpbmdOb2RlIiwiTWlzc2luZ0ZpcnN0Q2hpbGROb2RlIiwiVHJhbnNwYXJlbnROb2RlIiwiVHJhbnNwYXJlbnRUaGVuU2Vjb25kTm9kZSIsIlRyYW5zcGFyZW50VGhlbk1pc3NpbmdGaXJzdE5vZGUiLCJGbG9yZW5jZVBhcnNlciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJmbG9yZW5jZVBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0QjtBQUFBLElBRUlDLGdCQUFnQkgsT0FBT0csYUFGM0I7O0FBSUEsSUFBSUMsVUFBVUgsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJSSxZQUFZSixRQUFRLGVBQVIsQ0FEaEI7QUFBQSxJQUVJSyxlQUFlTCxRQUFRLGtCQUFSLENBRm5CO0FBQUEsSUFHSU0sWUFBWU4sUUFBUSxjQUFSLENBSGhCO0FBQUEsSUFJSU8sdUJBQXVCUCxRQUFRLHlCQUFSLENBSjNCO0FBQUEsSUFLSVEsY0FBY1IsUUFBUSx3QkFBUixDQUxsQjtBQUFBLElBTUlTLHdCQUF3QlQsUUFBUSxrQ0FBUixDQU41QjtBQUFBLElBT0lVLGtCQUFrQlYsUUFBUSw0QkFBUixDQVB0QjtBQUFBLElBUUlXLDRCQUE0QlgsUUFBUSxzQ0FBUixDQVJoQztBQUFBLElBU0lZLGtDQUFrQ1osUUFBUSw0Q0FBUixDQVR0Qzs7SUFXTWEsYzs7Ozs7Ozs7Ozs7a0NBQ2lCO0FBQ25CLFVBQUlDLFFBQVFiLFNBQVNjLGdCQUFULENBQTBCWixPQUExQixDQUFaO0FBQUEsVUFDSWEsK0JBQStCZCxjQUFjYyw0QkFBZCxFQURuQztBQUFBLFVBRUlDLHdCQUF3QmYsY0FBY2UscUJBQWQsRUFGNUI7QUFBQSxVQUdJQyxXQUFXO0FBQ1QsZ0JBQVFSLGVBREM7QUFFVCxpQkFBU0osU0FGQTtBQUdULGdCQUFRRyxxQkFIQztBQUlULG1CQUFXRSx5QkFKRjtBQUtULG9CQUFZQywrQkFMSDtBQU1ULHFCQUFhRixlQU5KO0FBT1Qsc0JBQWNELHFCQVBMO0FBUVQsdUJBQWVELFdBUk47QUFTVCw0QkFBb0JELG9CQVRYO0FBVVQsMEJBQWtCSSx5QkFWVDtBQVdULCtCQUF1QkEseUJBWGQ7QUFZVCwrQkFBdUJEO0FBWmQsT0FIZjtBQUFBLFVBaUJJUyxjQUFjZixVQUFVZ0IsS0FBVixDQUFnQk4sS0FBaEIsRUFBdUJFLDRCQUF2QixFQUFxREMscUJBQXJELEVBQTRFQyxRQUE1RSxDQWpCbEI7QUFBQSxVQWtCSUcsaUJBQWlCLElBQUlSLGNBQUosQ0FBbUJNLFdBQW5CLENBbEJyQjs7QUFvQkEsYUFBT0UsY0FBUDtBQUNEOzs7O0VBdkIwQmhCLFk7O0FBMEI3QmlCLE9BQU9DLE9BQVAsR0FBaUJWLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEJORkxleGVyID0gbGV4ZXJzLkJORkxleGVyLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSBsZXhlcnMuRmxvcmVuY2VMZXhlcjtcblxudmFyIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgIExhYmVsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9sYWJlbCcpLFxuICAgIEluY2x1ZGVEaXJlY3RpdmVOb2RlID0gcmVxdWlyZSgnLi9ub2RlL2luY2x1ZGVEaXJlY3RpdmUnKSxcbiAgICBNaXNzaW5nTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL21pc3NpbmcnKSxcbiAgICBNaXNzaW5nRmlyc3RDaGlsZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9taXNzaW5nRmlyc3RDaGlsZCcpLFxuICAgIFRyYW5zcGFyZW50Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50JyksXG4gICAgVHJhbnNwYXJlbnRUaGVuU2Vjb25kTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50VGhlblNlY29uZCcpLFxuICAgIFRyYW5zcGFyZW50VGhlbk1pc3NpbmdGaXJzdE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90cmFuc3BhcmVudFRoZW5NaXNzaW5nRmlyc3QnKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgdmFyIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IEZsb3JlbmNlTGV4ZXIudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpLFxuICAgICAgICBtYXBwaW5ncyA9IHtcbiAgICAgICAgICAncGFydCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAnbGFiZWwnOiBMYWJlbE5vZGUsXG4gICAgICAgICAgJ3J1bGUnOiBNaXNzaW5nRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ3ByZW1pc2UnOiBUcmFuc3BhcmVudFRoZW5TZWNvbmROb2RlLFxuICAgICAgICAgICdwcmVtaXNlcyc6IFRyYW5zcGFyZW50VGhlbk1pc3NpbmdGaXJzdE5vZGUsXG4gICAgICAgICAgJ2RpcmVjdGl2ZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAnY29uY2x1c2lvbic6IE1pc3NpbmdGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnZW5kc09mTGluZXMnOiBNaXNzaW5nTm9kZSxcbiAgICAgICAgICAnaW5jbHVkZURpcmVjdGl2ZSc6IEluY2x1ZGVEaXJlY3RpdmVOb2RlLFxuICAgICAgICAgICdjb21tYVRoZW5MYWJlbCc6IFRyYW5zcGFyZW50VGhlblNlY29uZE5vZGUsXG4gICAgICAgICAgJ3BhcmVudGhlc2lzZWRMYWJlbHMnOiBUcmFuc3BhcmVudFRoZW5TZWNvbmROb2RlLFxuICAgICAgICAgICcobGFiZWxsZWQpc3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlXG4gICAgICAgIH0sXG4gICAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=