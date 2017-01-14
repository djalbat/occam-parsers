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
    DiscardNode = require('../common/node/discard'),
    TransparentNode = require('../common/node/transparent'),
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
        'endsOfLines': DiscardNode,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJMYWJlbE5vZGUiLCJJbmNsdWRlRGlyZWN0aXZlTm9kZSIsIkRpc2NhcmROb2RlIiwiVHJhbnNwYXJlbnROb2RlIiwiRGlzY2FyZEZpcnN0Q2hpbGROb2RlIiwiRGlzY2FyZFNlY29uZENoaWxkTm9kZSIsIlRyYW5zcGFyZW50VGhlblNlY29uZE5vZGUiLCJUcmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3ROb2RlIiwiRmxvcmVuY2VQYXJzZXIiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwibWFwcGluZ3MiLCJwcm9kdWN0aW9ucyIsInBhcnNlIiwiZmxvcmVuY2VQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsV0FBV0YsT0FBT0UsUUFEdEI7QUFBQSxJQUVJQyxnQkFBZ0JILE9BQU9HLGFBRjNCOztBQUlBLElBQUlDLFVBQVVILFFBQVEsV0FBUixDQUFkO0FBQUEsSUFDSUksWUFBWUosUUFBUSxlQUFSLENBRGhCO0FBQUEsSUFFSUssZUFBZUwsUUFBUSxrQkFBUixDQUZuQjtBQUFBLElBR0lNLFlBQVlOLFFBQVEsY0FBUixDQUhoQjtBQUFBLElBSUlPLHVCQUF1QlAsUUFBUSx5QkFBUixDQUozQjtBQUFBLElBS0lRLGNBQWNSLFFBQVEsd0JBQVIsQ0FMbEI7QUFBQSxJQU1JUyxrQkFBa0JULFFBQVEsNEJBQVIsQ0FOdEI7QUFBQSxJQU9JVSx3QkFBd0JWLFFBQVEsa0NBQVIsQ0FQNUI7QUFBQSxJQVFJVyx5QkFBeUJYLFFBQVEsbUNBQVIsQ0FSN0I7QUFBQSxJQVNJWSw0QkFBNEJaLFFBQVEsc0NBQVIsQ0FUaEM7QUFBQSxJQVVJYSxrQ0FBa0NiLFFBQVEsNENBQVIsQ0FWdEM7O0lBWU1jLGM7Ozs7Ozs7Ozs7O2tDQUNpQjtBQUNuQixVQUFJQyxRQUFRZCxTQUFTZSxnQkFBVCxDQUEwQmIsT0FBMUIsQ0FBWjtBQUFBLFVBQ0ljLCtCQUErQmYsY0FBY2UsNEJBQWQsRUFEbkM7QUFBQSxVQUVJQyx3QkFBd0JoQixjQUFjZ0IscUJBQWQsRUFGNUI7QUFBQSxVQUdJQyxXQUFXO0FBQ1QsZ0JBQVFWLGVBREM7QUFFVCxnQkFBUUMscUJBRkM7QUFHVCxpQkFBU0osU0FIQTtBQUlULG1CQUFXTSx5QkFKRjtBQUtULG9CQUFZQywrQkFMSDtBQU1ULHFCQUFhSixlQU5KO0FBT1QsZ0JBQVFDLHFCQVBDO0FBUVQsaUJBQVNBLHFCQVJBO0FBU1QsaUJBQVNBLHFCQVRBO0FBVVQsbUJBQVdBLHFCQVZGO0FBV1QscUJBQWFHLCtCQVhKO0FBWVQsc0JBQWNILHFCQVpMO0FBYVQsdUJBQWVGLFdBYk47QUFjVCwwQkFBa0JJLHlCQWRUO0FBZVQsNEJBQW9CTCxvQkFmWDtBQWdCVCwrQkFBdUJLLHlCQWhCZDtBQWlCVCw2QkFBcUJELHNCQWpCWjtBQWtCVCwrQkFBdUJGLGVBbEJkO0FBbUJULHlDQUFpQ0E7QUFuQnhCLE9BSGY7QUFBQSxVQXdCSVcsY0FBY2hCLFVBQVVpQixLQUFWLENBQWdCTixLQUFoQixFQUF1QkUsNEJBQXZCLEVBQXFEQyxxQkFBckQsRUFBNEVDLFFBQTVFLENBeEJsQjtBQUFBLFVBeUJJRyxpQkFBaUIsSUFBSVIsY0FBSixDQUFtQk0sV0FBbkIsQ0F6QnJCOztBQTJCQSxhQUFPRSxjQUFQO0FBQ0Q7Ozs7RUE5QjBCakIsWTs7QUFpQzdCa0IsT0FBT0MsT0FBUCxHQUFpQlYsY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgQk5GTGV4ZXIgPSBsZXhlcnMuQk5GTGV4ZXIsXG4gICAgRmxvcmVuY2VMZXhlciA9IGxleGVycy5GbG9yZW5jZUxleGVyO1xuXG52YXIgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgTGFiZWxOb2RlID0gcmVxdWlyZSgnLi9ub2RlL2xhYmVsJyksXG4gICAgSW5jbHVkZURpcmVjdGl2ZU5vZGUgPSByZXF1aXJlKCcuL25vZGUvaW5jbHVkZURpcmVjdGl2ZScpLFxuICAgIERpc2NhcmROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZCcpLFxuICAgIFRyYW5zcGFyZW50Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50JyksXG4gICAgRGlzY2FyZEZpcnN0Q2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZEZpcnN0Q2hpbGQnKSxcbiAgICBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZFNlY29uZENoaWxkJyksXG4gICAgVHJhbnNwYXJlbnRUaGVuU2Vjb25kTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50VGhlblNlY29uZCcpLFxuICAgIFRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90cmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3QnKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgdmFyIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IEZsb3JlbmNlTGV4ZXIudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpLFxuICAgICAgICBtYXBwaW5ncyA9IHtcbiAgICAgICAgICAncGFydCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAncnVsZSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnbGFiZWwnOiBMYWJlbE5vZGUsXG4gICAgICAgICAgJ3ByZW1pc2UnOiBUcmFuc3BhcmVudFRoZW5TZWNvbmROb2RlLFxuICAgICAgICAgICdwcmVtaXNlcyc6IFRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUsXG4gICAgICAgICAgJ2RpcmVjdGl2ZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAndGhlbic6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnaGVuY2UnOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ3Byb29mJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICdzdXBwb3NlJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICd0aGVyZWZvcmUnOiBUcmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3ROb2RlLFxuICAgICAgICAgICdjb25jbHVzaW9uJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICdlbmRzT2ZMaW5lcyc6IERpc2NhcmROb2RlLFxuICAgICAgICAgICdjb21tYVRoZW5MYWJlbCc6IFRyYW5zcGFyZW50VGhlblNlY29uZE5vZGUsXG4gICAgICAgICAgJ2luY2x1ZGVEaXJlY3RpdmUnOiBJbmNsdWRlRGlyZWN0aXZlTm9kZSxcbiAgICAgICAgICAncGFyZW50aGVzaXNlZExhYmVscyc6IFRyYW5zcGFyZW50VGhlblNlY29uZE5vZGUsXG4gICAgICAgICAgJ2xhYmVsbGVkU3RhdGVtZW50JzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICAgICAnKGxhYmVsbGVkKVN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAnc3ViTGVtbWFPcihsYWJlbGxlZClTdGF0ZW1lbnQnOiBUcmFuc3BhcmVudE5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIucGFyc2UobGluZXMsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpLFxuICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiJdfQ==