'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

  _createClass(FlorenceParser, [{
    key: 'parse',
    value: function parse(tokens) {
      var documentNode = _get(FlorenceParser.prototype.__proto__ || Object.getPrototypeOf(FlorenceParser.prototype), 'parse', this).call(this, tokens);

      if (documentNode !== null) {
        var errorNodes = documentNode.query('//error');

        documentNode.update();
      }

      return documentNode;
    }
  }], [{
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
        'specialOrUnassigned': TransparentNode,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJFcnJvck5vZGUiLCJMYWJlbE5vZGUiLCJJbmNsdWRlRGlyZWN0aXZlTm9kZSIsIlRyYW5zcGFyZW50Tm9kZSIsIkRpc2NhcmRDaGlsZHJlbk5vZGUiLCJEaXNjYXJkRmlyc3RDaGlsZE5vZGUiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRUaGVuU2Vjb25kTm9kZSIsIlRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUiLCJGbG9yZW5jZVBhcnNlciIsInRva2VucyIsImRvY3VtZW50Tm9kZSIsImVycm9yTm9kZXMiLCJxdWVyeSIsInVwZGF0ZSIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJmbG9yZW5jZVBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLFdBQVdGLE9BQU9FLFFBRHRCO0FBQUEsSUFFSUMsZ0JBQWdCSCxPQUFPRyxhQUYzQjs7QUFJQSxJQUFJQyxVQUFVSCxRQUFRLFdBQVIsQ0FBZDtBQUFBLElBQ0lJLFlBQVlKLFFBQVEsZUFBUixDQURoQjtBQUFBLElBRUlLLGVBQWVMLFFBQVEsa0JBQVIsQ0FGbkI7QUFBQSxJQUdJTSxZQUFZTixRQUFRLGNBQVIsQ0FIaEI7QUFBQSxJQUlJTyxZQUFZUCxRQUFRLGNBQVIsQ0FKaEI7QUFBQSxJQUtJUSx1QkFBdUJSLFFBQVEseUJBQVIsQ0FMM0I7QUFBQSxJQU1JUyxrQkFBa0JULFFBQVEsNEJBQVIsQ0FOdEI7QUFBQSxJQU9JVSxzQkFBc0JWLFFBQVEsZ0NBQVIsQ0FQMUI7QUFBQSxJQVFJVyx3QkFBd0JYLFFBQVEsa0NBQVIsQ0FSNUI7QUFBQSxJQVNJWSx5QkFBeUJaLFFBQVEsbUNBQVIsQ0FUN0I7QUFBQSxJQVVJYSw0QkFBNEJiLFFBQVEsc0NBQVIsQ0FWaEM7QUFBQSxJQVdJYyxrQ0FBa0NkLFFBQVEsNENBQVIsQ0FYdEM7O0lBYU1lLGM7Ozs7Ozs7Ozs7OzBCQUNFQyxNLEVBQVE7QUFDWixVQUFJQyxxSUFBMkJELE1BQTNCLENBQUo7O0FBRUEsVUFBSUMsaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLFlBQUlDLGFBQWFELGFBQWFFLEtBQWIsQ0FBbUIsU0FBbkIsQ0FBakI7O0FBRUFGLHFCQUFhRyxNQUFiO0FBQ0Q7O0FBRUQsYUFBT0gsWUFBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQUlJLFFBQVFwQixTQUFTcUIsZ0JBQVQsQ0FBMEJuQixPQUExQixDQUFaO0FBQUEsVUFDSW9CLCtCQUErQnJCLGNBQWNxQiw0QkFBZCxFQURuQztBQUFBLFVBRUlDLHdCQUF3QnRCLGNBQWNzQixxQkFBZCxFQUY1QjtBQUFBLFVBR0lDLFdBQVc7QUFDVCxnQkFBUWhCLGVBREM7QUFFVCxnQkFBUUUscUJBRkM7QUFHVCxpQkFBU0wsU0FIQTtBQUlULGlCQUFTQyxTQUpBO0FBS1QsbUJBQVdNLHlCQUxGO0FBTVQsb0JBQVlDLCtCQU5IO0FBT1QscUJBQWFMLGVBUEo7QUFRVCxnQkFBUUUscUJBUkM7QUFTVCxpQkFBU0EscUJBVEE7QUFVVCxpQkFBU0EscUJBVkE7QUFXVCxtQkFBV0EscUJBWEY7QUFZVCxxQkFBYUcsK0JBWko7QUFhVCxzQkFBY0gscUJBYkw7QUFjVCx1QkFBZUQsbUJBZE47QUFlVCx5QkFBaUJELGVBZlI7QUFnQlQsMEJBQWtCSSx5QkFoQlQ7QUFpQlQsNEJBQW9CTCxvQkFqQlg7QUFrQlQsK0JBQXVCSyx5QkFsQmQ7QUFtQlQsNkJBQXFCRCxzQkFuQlo7QUFvQlQsK0JBQXVCSCxlQXBCZDtBQXFCVCwrQkFBdUJBLGVBckJkO0FBc0JULHlDQUFpQ0E7QUF0QnhCLE9BSGY7QUFBQSxVQTJCSWlCLGNBQWN0QixVQUFVdUIsS0FBVixDQUFnQk4sS0FBaEIsRUFBdUJFLDRCQUF2QixFQUFxREMscUJBQXJELEVBQTRFQyxRQUE1RSxDQTNCbEI7QUFBQSxVQTRCSUcsaUJBQWlCLElBQUliLGNBQUosQ0FBbUJXLFdBQW5CLENBNUJyQjs7QUE4QkEsYUFBT0UsY0FBUDtBQUNEOzs7O0VBN0MwQnZCLFk7O0FBZ0Q3QndCLE9BQU9DLE9BQVAsR0FBaUJmLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEJORkxleGVyID0gbGV4ZXJzLkJORkxleGVyLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSBsZXhlcnMuRmxvcmVuY2VMZXhlcjtcblxudmFyIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgIEVycm9yTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9lcnJvcicpLFxuICAgIExhYmVsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9sYWJlbCcpLFxuICAgIEluY2x1ZGVEaXJlY3RpdmVOb2RlID0gcmVxdWlyZSgnLi9ub2RlL2luY2x1ZGVEaXJlY3RpdmUnKSxcbiAgICBUcmFuc3BhcmVudE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90cmFuc3BhcmVudCcpLFxuICAgIERpc2NhcmRDaGlsZHJlbk5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9kaXNjYXJkQ2hpbGRyZW4nKSxcbiAgICBEaXNjYXJkRmlyc3RDaGlsZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9kaXNjYXJkRmlyc3RDaGlsZCcpLFxuICAgIERpc2NhcmRTZWNvbmRDaGlsZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9kaXNjYXJkU2Vjb25kQ2hpbGQnKSxcbiAgICBUcmFuc3BhcmVudFRoZW5TZWNvbmROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdHJhbnNwYXJlbnRUaGVuU2Vjb25kJyksXG4gICAgVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdCcpO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHBhcnNlKHRva2Vucykge1xuICAgIHZhciBkb2N1bWVudE5vZGUgPSBzdXBlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKGRvY3VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgdmFyIGVycm9yTm9kZXMgPSBkb2N1bWVudE5vZGUucXVlcnkoJy8vZXJyb3InKTtcblxuICAgICAgZG9jdW1lbnROb2RlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgdmFyIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IEZsb3JlbmNlTGV4ZXIudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpLFxuICAgICAgICBtYXBwaW5ncyA9IHtcbiAgICAgICAgICAncGFydCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAncnVsZSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnZXJyb3InOiBFcnJvck5vZGUsXG4gICAgICAgICAgJ2xhYmVsJzogTGFiZWxOb2RlLFxuICAgICAgICAgICdwcmVtaXNlJzogVHJhbnNwYXJlbnRUaGVuU2Vjb25kTm9kZSxcbiAgICAgICAgICAncHJlbWlzZXMnOiBUcmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3ROb2RlLFxuICAgICAgICAgICdkaXJlY3RpdmUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAgICAgJ3RoZW4nOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ2hlbmNlJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICdwcm9vZic6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnc3VwcG9zZSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAndGhlcmVmb3JlJzogVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZSxcbiAgICAgICAgICAnY29uY2x1c2lvbic6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnZW5kc09mTGluZXMnOiBEaXNjYXJkQ2hpbGRyZW5Ob2RlLFxuICAgICAgICAgICdzdGF0ZW1lbnRCb2R5JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgICAgICdjb21tYVRoZW5MYWJlbCc6IFRyYW5zcGFyZW50VGhlblNlY29uZE5vZGUsXG4gICAgICAgICAgJ2luY2x1ZGVEaXJlY3RpdmUnOiBJbmNsdWRlRGlyZWN0aXZlTm9kZSxcbiAgICAgICAgICAncGFyZW50aGVzaXNlZExhYmVscyc6IFRyYW5zcGFyZW50VGhlblNlY29uZE5vZGUsXG4gICAgICAgICAgJ2xhYmVsbGVkU3RhdGVtZW50JzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICAgICAnKGxhYmVsbGVkKVN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAnc3BlY2lhbE9yVW5hc3NpZ25lZCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAnc3ViTGVtbWFPcihsYWJlbGxlZClTdGF0ZW1lbnQnOiBUcmFuc3BhcmVudE5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIucGFyc2UobGluZXMsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpLFxuICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiJdfQ==