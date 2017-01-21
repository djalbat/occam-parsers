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
    TransparentThenKeepSecondNode = require('../common/node/transparentThenKeepSecond'),
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
        documentNode.update();
      }

      return documentNode;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var lines = BNFLexer.linesFromGrammar(grammar),
          significantTokenTypes = FlorenceLexer.getSignificantTokenTypes(),
          mappings = {
        'part': TransparentNode,
        'rule': DiscardFirstChildNode,
        'error': ErrorNode,
        'label': LabelNode,
        'premise': TransparentThenKeepSecondNode,
        'premises': TransparentThenDiscardFirstNode,
        'directive': TransparentNode,
        'then': DiscardFirstChildNode,
        'hence': DiscardFirstChildNode,
        'proof': DiscardFirstChildNode,
        'lemma': DiscardFirstChildNode,
        'theorem': DiscardFirstChildNode,
        'suppose': DiscardFirstChildNode,
        'therefore': TransparentThenDiscardFirstNode,
        'conclusion': DiscardFirstChildNode,
        'endsOfLines': DiscardChildrenNode,
        'statementBody': TransparentNode,
        'commaThenLabel': TransparentThenKeepSecondNode,
        'includeDirective': IncludeDirectiveNode,
        'parenthesisedLabels': TransparentThenKeepSecondNode,
        'labelledStatement': DiscardSecondChildNode,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJFcnJvck5vZGUiLCJMYWJlbE5vZGUiLCJJbmNsdWRlRGlyZWN0aXZlTm9kZSIsIlRyYW5zcGFyZW50Tm9kZSIsIkRpc2NhcmRDaGlsZHJlbk5vZGUiLCJEaXNjYXJkRmlyc3RDaGlsZE5vZGUiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUiLCJUcmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3ROb2RlIiwiRmxvcmVuY2VQYXJzZXIiLCJ0b2tlbnMiLCJkb2N1bWVudE5vZGUiLCJ1cGRhdGUiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJnZXRTaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJmbG9yZW5jZVBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLFdBQVdGLE9BQU9FLFFBRHRCO0FBQUEsSUFFSUMsZ0JBQWdCSCxPQUFPRyxhQUYzQjs7QUFJQSxJQUFJQyxVQUFVSCxRQUFRLFdBQVIsQ0FBZDtBQUFBLElBQ0lJLFlBQVlKLFFBQVEsZUFBUixDQURoQjtBQUFBLElBRUlLLGVBQWVMLFFBQVEsa0JBQVIsQ0FGbkI7QUFBQSxJQUdJTSxZQUFZTixRQUFRLGNBQVIsQ0FIaEI7QUFBQSxJQUlJTyxZQUFZUCxRQUFRLGNBQVIsQ0FKaEI7QUFBQSxJQUtJUSx1QkFBdUJSLFFBQVEseUJBQVIsQ0FMM0I7QUFBQSxJQU1JUyxrQkFBa0JULFFBQVEsNEJBQVIsQ0FOdEI7QUFBQSxJQU9JVSxzQkFBc0JWLFFBQVEsZ0NBQVIsQ0FQMUI7QUFBQSxJQVFJVyx3QkFBd0JYLFFBQVEsa0NBQVIsQ0FSNUI7QUFBQSxJQVNJWSx5QkFBeUJaLFFBQVEsbUNBQVIsQ0FUN0I7QUFBQSxJQVVJYSxnQ0FBZ0NiLFFBQVEsMENBQVIsQ0FWcEM7QUFBQSxJQVdJYyxrQ0FBa0NkLFFBQVEsNENBQVIsQ0FYdEM7O0lBYU1lLGM7Ozs7Ozs7Ozs7OzBCQUNFQyxNLEVBQVE7QUFDWixVQUFJQyxxSUFBMkJELE1BQTNCLENBQUo7O0FBRUEsVUFBSUMsaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCQSxxQkFBYUMsTUFBYjtBQUNEOztBQUVELGFBQU9ELFlBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFJRSxRQUFRbEIsU0FBU21CLGdCQUFULENBQTBCakIsT0FBMUIsQ0FBWjtBQUFBLFVBQ0lrQix3QkFBd0JuQixjQUFjb0Isd0JBQWQsRUFENUI7QUFBQSxVQUVJQyxXQUFXO0FBQ1QsZ0JBQVFkLGVBREM7QUFFVCxnQkFBUUUscUJBRkM7QUFHVCxpQkFBU0wsU0FIQTtBQUlULGlCQUFTQyxTQUpBO0FBS1QsbUJBQVdNLDZCQUxGO0FBTVQsb0JBQVlDLCtCQU5IO0FBT1QscUJBQWFMLGVBUEo7QUFRVCxnQkFBUUUscUJBUkM7QUFTVCxpQkFBU0EscUJBVEE7QUFVVCxpQkFBU0EscUJBVkE7QUFXVCxpQkFBU0EscUJBWEE7QUFZVCxtQkFBV0EscUJBWkY7QUFhVCxtQkFBV0EscUJBYkY7QUFjVCxxQkFBYUcsK0JBZEo7QUFlVCxzQkFBY0gscUJBZkw7QUFnQlQsdUJBQWVELG1CQWhCTjtBQWlCVCx5QkFBaUJELGVBakJSO0FBa0JULDBCQUFrQkksNkJBbEJUO0FBbUJULDRCQUFvQkwsb0JBbkJYO0FBb0JULCtCQUF1QkssNkJBcEJkO0FBcUJULDZCQUFxQkQsc0JBckJaO0FBc0JULCtCQUF1QkgsZUF0QmQ7QUF1QlQsK0JBQXVCQSxlQXZCZDtBQXdCVCx5Q0FBaUNBO0FBeEJ4QixPQUZmO0FBQUEsVUE0QkllLGNBQWNwQixVQUFVcUIsS0FBVixDQUFnQk4sS0FBaEIsRUFBdUJFLHFCQUF2QixFQUE4Q0UsUUFBOUMsQ0E1QmxCO0FBQUEsVUE2QklHLGlCQUFpQixJQUFJWCxjQUFKLENBQW1CUyxXQUFuQixDQTdCckI7O0FBK0JBLGFBQU9FLGNBQVA7QUFDRDs7OztFQTVDMEJyQixZOztBQStDN0JzQixPQUFPQyxPQUFQLEdBQWlCYixjQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBCTkZMZXhlciA9IGxleGVycy5CTkZMZXhlcixcbiAgICBGbG9yZW5jZUxleGVyID0gbGV4ZXJzLkZsb3JlbmNlTGV4ZXI7XG5cbnZhciBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICBFcnJvck5vZGUgPSByZXF1aXJlKCcuL25vZGUvZXJyb3InKSxcbiAgICBMYWJlbE5vZGUgPSByZXF1aXJlKCcuL25vZGUvbGFiZWwnKSxcbiAgICBJbmNsdWRlRGlyZWN0aXZlTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9pbmNsdWRlRGlyZWN0aXZlJyksXG4gICAgVHJhbnNwYXJlbnROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdHJhbnNwYXJlbnQnKSxcbiAgICBEaXNjYXJkQ2hpbGRyZW5Ob2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZENoaWxkcmVuJyksXG4gICAgRGlzY2FyZEZpcnN0Q2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZEZpcnN0Q2hpbGQnKSxcbiAgICBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZFNlY29uZENoaWxkJyksXG4gICAgVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90cmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kJyksXG4gICAgVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdCcpO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHBhcnNlKHRva2Vucykge1xuICAgIHZhciBkb2N1bWVudE5vZGUgPSBzdXBlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKGRvY3VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgZG9jdW1lbnROb2RlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgdmFyIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gRmxvcmVuY2VMZXhlci5nZXRTaWduaWZpY2FudFRva2VuVHlwZXMoKSxcbiAgICAgICAgbWFwcGluZ3MgPSB7XG4gICAgICAgICAgJ3BhcnQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAgICAgJ3J1bGUnOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ2Vycm9yJzogRXJyb3JOb2RlLFxuICAgICAgICAgICdsYWJlbCc6IExhYmVsTm9kZSxcbiAgICAgICAgICAncHJlbWlzZSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgICAgICdwcmVtaXNlcyc6IFRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUsXG4gICAgICAgICAgJ2RpcmVjdGl2ZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAndGhlbic6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnaGVuY2UnOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ3Byb29mJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICdsZW1tYSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAndGhlb3JlbSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnc3VwcG9zZSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAndGhlcmVmb3JlJzogVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZSxcbiAgICAgICAgICAnY29uY2x1c2lvbic6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnZW5kc09mTGluZXMnOiBEaXNjYXJkQ2hpbGRyZW5Ob2RlLFxuICAgICAgICAgICdzdGF0ZW1lbnRCb2R5JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgICAgICdjb21tYVRoZW5MYWJlbCc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgICAgICdpbmNsdWRlRGlyZWN0aXZlJzogSW5jbHVkZURpcmVjdGl2ZU5vZGUsXG4gICAgICAgICAgJ3BhcmVudGhlc2lzZWRMYWJlbHMnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICAgICAnbGFiZWxsZWRTdGF0ZW1lbnQnOiBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlLFxuICAgICAgICAgICcobGFiZWxsZWQpU3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgICAgICdzcGVjaWFsT3JVbmFzc2lnbmVkJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgICAgICdzdWJMZW1tYU9yKGxhYmVsbGVkKVN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZVxuICAgICAgICB9LFxuICAgICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuIl19