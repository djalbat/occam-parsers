'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var Query = require('../query'),
    grammar = require('./grammar'),
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

var errorQuery = Query.fromExpression('//error'),
    labelQuery = Query.fromExpression('//label');

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
        var errorNodes = errorQuery.nodesFromNode(documentNode);

        errorNodes.forEach(function (errorNode) {
          errorNode.update();
        });

        var labelNodes = labelQuery.nodesFromNode(documentNode);

        labelNodes.forEach(function (labelNode) {
          labelNode.update();
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsIlF1ZXJ5IiwiZ3JhbW1hciIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkVycm9yTm9kZSIsIkxhYmVsTm9kZSIsIkluY2x1ZGVEaXJlY3RpdmVOb2RlIiwiVHJhbnNwYXJlbnROb2RlIiwiRGlzY2FyZENoaWxkcmVuTm9kZSIsIkRpc2NhcmRGaXJzdENoaWxkTm9kZSIsIkRpc2NhcmRTZWNvbmRDaGlsZE5vZGUiLCJUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSIsIlRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUiLCJlcnJvclF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJsYWJlbFF1ZXJ5IiwiRmxvcmVuY2VQYXJzZXIiLCJ0b2tlbnMiLCJkb2N1bWVudE5vZGUiLCJlcnJvck5vZGVzIiwibm9kZXNGcm9tTm9kZSIsImZvckVhY2giLCJlcnJvck5vZGUiLCJ1cGRhdGUiLCJsYWJlbE5vZGVzIiwibGFiZWxOb2RlIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzIiwibWFwcGluZ3MiLCJwcm9kdWN0aW9ucyIsInBhcnNlIiwiZmxvcmVuY2VQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0QjtBQUFBLElBRUlDLGdCQUFnQkgsT0FBT0csYUFGM0I7O0FBSUEsSUFBSUMsUUFBUUgsUUFBUSxVQUFSLENBQVo7QUFBQSxJQUNJSSxVQUFVSixRQUFRLFdBQVIsQ0FEZDtBQUFBLElBRUlLLFlBQVlMLFFBQVEsZUFBUixDQUZoQjtBQUFBLElBR0lNLGVBQWVOLFFBQVEsa0JBQVIsQ0FIbkI7QUFBQSxJQUlJTyxZQUFZUCxRQUFRLGNBQVIsQ0FKaEI7QUFBQSxJQUtJUSxZQUFZUixRQUFRLGNBQVIsQ0FMaEI7QUFBQSxJQU1JUyx1QkFBdUJULFFBQVEseUJBQVIsQ0FOM0I7QUFBQSxJQU9JVSxrQkFBa0JWLFFBQVEsNEJBQVIsQ0FQdEI7QUFBQSxJQVFJVyxzQkFBc0JYLFFBQVEsZ0NBQVIsQ0FSMUI7QUFBQSxJQVNJWSx3QkFBd0JaLFFBQVEsa0NBQVIsQ0FUNUI7QUFBQSxJQVVJYSx5QkFBeUJiLFFBQVEsbUNBQVIsQ0FWN0I7QUFBQSxJQVdJYyxnQ0FBZ0NkLFFBQVEsMENBQVIsQ0FYcEM7QUFBQSxJQVlJZSxrQ0FBa0NmLFFBQVEsNENBQVIsQ0FadEM7O0FBY0EsSUFBSWdCLGFBQWFiLE1BQU1jLGNBQU4sQ0FBcUIsU0FBckIsQ0FBakI7QUFBQSxJQUNJQyxhQUFhZixNQUFNYyxjQUFOLENBQXFCLFNBQXJCLENBRGpCOztJQUdNRSxjOzs7Ozs7Ozs7OzswQkFDRUMsTSxFQUFRO0FBQ1osVUFBSUMscUlBQTJCRCxNQUEzQixDQUFKOztBQUVBLFVBQUlDLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6QixZQUFJQyxhQUFhTixXQUFXTyxhQUFYLENBQXlCRixZQUF6QixDQUFqQjs7QUFFQUMsbUJBQVdFLE9BQVgsQ0FBbUIsVUFBU0MsU0FBVCxFQUFvQjtBQUNyQ0Esb0JBQVVDLE1BQVY7QUFDRCxTQUZEOztBQUlBLFlBQUlDLGFBQWFULFdBQVdLLGFBQVgsQ0FBeUJGLFlBQXpCLENBQWpCOztBQUVBTSxtQkFBV0gsT0FBWCxDQUFtQixVQUFTSSxTQUFULEVBQW9CO0FBQ3JDQSxvQkFBVUYsTUFBVjtBQUNELFNBRkQ7QUFHRDs7QUFFRCxhQUFPTCxZQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBSVEsUUFBUTVCLFNBQVM2QixnQkFBVCxDQUEwQjFCLE9BQTFCLENBQVo7QUFBQSxVQUNJMkIsd0JBQXdCN0IsY0FBYzhCLHdCQUFkLEVBRDVCO0FBQUEsVUFFSUMsV0FBVztBQUNULGdCQUFRdkIsZUFEQztBQUVULGdCQUFRRSxxQkFGQztBQUdULGlCQUFTTCxTQUhBO0FBSVQsaUJBQVNDLFNBSkE7QUFLVCxtQkFBV00sNkJBTEY7QUFNVCxvQkFBWUMsK0JBTkg7QUFPVCxxQkFBYUwsZUFQSjtBQVFULGdCQUFRRSxxQkFSQztBQVNULGlCQUFTQSxxQkFUQTtBQVVULGlCQUFTQSxxQkFWQTtBQVdULGlCQUFTQSxxQkFYQTtBQVlULG1CQUFXQSxxQkFaRjtBQWFULG1CQUFXQSxxQkFiRjtBQWNULHFCQUFhRywrQkFkSjtBQWVULHNCQUFjSCxxQkFmTDtBQWdCVCx1QkFBZUQsbUJBaEJOO0FBaUJULHlCQUFpQkQsZUFqQlI7QUFrQlQsMEJBQWtCSSw2QkFsQlQ7QUFtQlQsNEJBQW9CTCxvQkFuQlg7QUFvQlQsK0JBQXVCSyw2QkFwQmQ7QUFxQlQsNkJBQXFCRCxzQkFyQlo7QUFzQlQsK0JBQXVCSCxlQXRCZDtBQXVCVCwrQkFBdUJBLGVBdkJkO0FBd0JULHlDQUFpQ0E7QUF4QnhCLE9BRmY7QUFBQSxVQTRCSXdCLGNBQWM3QixVQUFVOEIsS0FBVixDQUFnQk4sS0FBaEIsRUFBdUJFLHFCQUF2QixFQUE4Q0UsUUFBOUMsQ0E1QmxCO0FBQUEsVUE2QklHLGlCQUFpQixJQUFJakIsY0FBSixDQUFtQmUsV0FBbkIsQ0E3QnJCOztBQStCQSxhQUFPRSxjQUFQO0FBQ0Q7Ozs7RUF0RDBCOUIsWTs7QUF5RDdCK0IsT0FBT0MsT0FBUCxHQUFpQm5CLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEJORkxleGVyID0gbGV4ZXJzLkJORkxleGVyLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSBsZXhlcnMuRmxvcmVuY2VMZXhlcjtcblxudmFyIFF1ZXJ5ID0gcmVxdWlyZSgnLi4vcXVlcnknKSxcbiAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICBFcnJvck5vZGUgPSByZXF1aXJlKCcuL25vZGUvZXJyb3InKSxcbiAgICBMYWJlbE5vZGUgPSByZXF1aXJlKCcuL25vZGUvbGFiZWwnKSxcbiAgICBJbmNsdWRlRGlyZWN0aXZlTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9pbmNsdWRlRGlyZWN0aXZlJyksXG4gICAgVHJhbnNwYXJlbnROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdHJhbnNwYXJlbnQnKSxcbiAgICBEaXNjYXJkQ2hpbGRyZW5Ob2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZENoaWxkcmVuJyksXG4gICAgRGlzY2FyZEZpcnN0Q2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZEZpcnN0Q2hpbGQnKSxcbiAgICBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZFNlY29uZENoaWxkJyksXG4gICAgVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90cmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kJyksXG4gICAgVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdCcpO1xuXG52YXIgZXJyb3JRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKCcvL2Vycm9yJyksXG4gICAgbGFiZWxRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKCcvL2xhYmVsJyk7XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgcGFyc2UodG9rZW5zKSB7XG4gICAgdmFyIGRvY3VtZW50Tm9kZSA9IHN1cGVyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAoZG9jdW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICB2YXIgZXJyb3JOb2RlcyA9IGVycm9yUXVlcnkubm9kZXNGcm9tTm9kZShkb2N1bWVudE5vZGUpO1xuXG4gICAgICBlcnJvck5vZGVzLmZvckVhY2goZnVuY3Rpb24oZXJyb3JOb2RlKSB7XG4gICAgICAgIGVycm9yTm9kZS51cGRhdGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgbGFiZWxOb2RlcyA9IGxhYmVsUXVlcnkubm9kZXNGcm9tTm9kZShkb2N1bWVudE5vZGUpO1xuXG4gICAgICBsYWJlbE5vZGVzLmZvckVhY2goZnVuY3Rpb24obGFiZWxOb2RlKSB7XG4gICAgICAgIGxhYmVsTm9kZS51cGRhdGUoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgdmFyIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gRmxvcmVuY2VMZXhlci5nZXRTaWduaWZpY2FudFRva2VuVHlwZXMoKSxcbiAgICAgICAgbWFwcGluZ3MgPSB7XG4gICAgICAgICAgJ3BhcnQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAgICAgJ3J1bGUnOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ2Vycm9yJzogRXJyb3JOb2RlLFxuICAgICAgICAgICdsYWJlbCc6IExhYmVsTm9kZSxcbiAgICAgICAgICAncHJlbWlzZSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgICAgICdwcmVtaXNlcyc6IFRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUsXG4gICAgICAgICAgJ2RpcmVjdGl2ZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAndGhlbic6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnaGVuY2UnOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ3Byb29mJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICdsZW1tYSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAndGhlb3JlbSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnc3VwcG9zZSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAndGhlcmVmb3JlJzogVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZSxcbiAgICAgICAgICAnY29uY2x1c2lvbic6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnZW5kc09mTGluZXMnOiBEaXNjYXJkQ2hpbGRyZW5Ob2RlLFxuICAgICAgICAgICdzdGF0ZW1lbnRCb2R5JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgICAgICdjb21tYVRoZW5MYWJlbCc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgICAgICdpbmNsdWRlRGlyZWN0aXZlJzogSW5jbHVkZURpcmVjdGl2ZU5vZGUsXG4gICAgICAgICAgJ3BhcmVudGhlc2lzZWRMYWJlbHMnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICAgICAnbGFiZWxsZWRTdGF0ZW1lbnQnOiBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlLFxuICAgICAgICAgICcobGFiZWxsZWQpU3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgICAgICdzcGVjaWFsT3JVbmFzc2lnbmVkJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgICAgICdzdWJMZW1tYU9yKGxhYmVsbGVkKVN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZVxuICAgICAgICB9LFxuICAgICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuIl19