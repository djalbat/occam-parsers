'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    TransparentNode = require('../common/node/nonTerminal/transparent'),
    DiscardSecondChildNode = require('../common/node/nonTerminal/discardSecondChild'),
    TransparentThenKeepSecondNode = require('../common/node/nonTerminal/transparentThenKeepSecond');

var BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromNothing',
    value: function fromNothing(mappings) {
      var lines = BNFLexer.linesFromGrammar(grammar),
          significantTokenTypes = FlorenceLexer.getSignificantTokenTypes();

      mappings = Object.assign({
        'part': TransparentNode,
        'premise': TransparentNode,
        'premises': TransparentNode,
        'statement': TransparentNode,
        'variableName': TransparentNode,
        '(typed)Variable': TransparentNode,
        'constructorName': TransparentNode,
        'metavariableName': TransparentNode,
        'parenthesisedType': TransparentNode,
        'type(s)Declaration': TransparentNode,
        'specialOrUnassigned': TransparentNode,
        '(un)labelledStatement': TransparentNode,
        '(qualified)Metavariable': TransparentNode,
        '(typed)Variable(s)Declaration': TransparentNode,
        'typedConstructor(s)Declaration': TransparentNode,
        'subLemmaOr(un)labelledStatement': TransparentNode,
        '(qualified)Metavariable(s)Declaration': TransparentNode,
        'premise(s)': DiscardSecondChildNode,
        'conclusion': DiscardSecondChildNode,
        'typedVariable': DiscardSecondChildNode,
        'typedConstructor': DiscardSecondChildNode,
        'labelledStatement': DiscardSecondChildNode,
        'commaThenType': TransparentThenKeepSecondNode,
        'commaThenLabel': TransparentThenKeepSecondNode,
        'commaThenMetavariable': TransparentThenKeepSecondNode,
        'commaThen(Typed)Variable': TransparentThenKeepSecondNode,
        'commaThenTypedConstructor': TransparentThenKeepSecondNode,
        'commaThen(qualified)Metavariable': TransparentThenKeepSecondNode,
        'parenthesisedTypeList': TransparentThenKeepSecondNode,
        'parenthesisedLabelList': TransparentThenKeepSecondNode
      }, mappings);

      var productions = BNFParser.parse(lines, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJUcmFuc3BhcmVudE5vZGUiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUiLCJCTkZMZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsIm1hcHBpbmdzIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImZsb3JlbmNlUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUksa0JBQWtCSixRQUFRLHdDQUFSLENBSHhCO0FBQUEsSUFJTUsseUJBQXlCTCxRQUFRLCtDQUFSLENBSi9CO0FBQUEsSUFLTU0sZ0NBQWdDTixRQUFRLHNEQUFSLENBTHRDOztJQU9RTyxRLEdBQTRCUixNLENBQTVCUSxRO0lBQVVDLGEsR0FBa0JULE0sQ0FBbEJTLGE7O0lBRVpDLGM7Ozs7Ozs7Ozs7O2dDQUNlQyxRLEVBQVU7QUFDM0IsVUFBTUMsUUFBUUosU0FBU0ssZ0JBQVQsQ0FBMEJYLE9BQTFCLENBQWQ7QUFBQSxVQUNNWSx3QkFBd0JMLGNBQWNNLHdCQUFkLEVBRDlCOztBQUdBSixpQkFBV0ssT0FBT0MsTUFBUCxDQUFjO0FBQ3ZCLGdCQUFRWixlQURlO0FBRXZCLG1CQUFXQSxlQUZZO0FBR3ZCLG9CQUFZQSxlQUhXO0FBSXZCLHFCQUFhQSxlQUpVO0FBS3ZCLHdCQUFnQkEsZUFMTztBQU12QiwyQkFBbUJBLGVBTkk7QUFPdkIsMkJBQW1CQSxlQVBJO0FBUXZCLDRCQUFvQkEsZUFSRztBQVN2Qiw2QkFBcUJBLGVBVEU7QUFVdkIsOEJBQXNCQSxlQVZDO0FBV3ZCLCtCQUF1QkEsZUFYQTtBQVl2QixpQ0FBeUJBLGVBWkY7QUFhdkIsbUNBQTJCQSxlQWJKO0FBY3ZCLHlDQUFpQ0EsZUFkVjtBQWV2QiwwQ0FBa0NBLGVBZlg7QUFnQnZCLDJDQUFtQ0EsZUFoQlo7QUFpQnZCLGlEQUF5Q0EsZUFqQmxCO0FBa0J2QixzQkFBY0Msc0JBbEJTO0FBbUJ2QixzQkFBY0Esc0JBbkJTO0FBb0J2Qix5QkFBaUJBLHNCQXBCTTtBQXFCdkIsNEJBQW9CQSxzQkFyQkc7QUFzQnZCLDZCQUFxQkEsc0JBdEJFO0FBdUJ2Qix5QkFBaUJDLDZCQXZCTTtBQXdCdkIsMEJBQWtCQSw2QkF4Qks7QUF5QnZCLGlDQUF5QkEsNkJBekJGO0FBMEJ2QixvQ0FBNEJBLDZCQTFCTDtBQTJCdkIscUNBQTZCQSw2QkEzQk47QUE0QnZCLDRDQUFvQ0EsNkJBNUJiO0FBNkJ2QixpQ0FBeUJBLDZCQTdCRjtBQThCdkIsa0NBQTBCQTtBQTlCSCxPQUFkLEVBK0JSSSxRQS9CUSxDQUFYOztBQWlDQSxVQUFNTyxjQUFjZixVQUFVZ0IsS0FBVixDQUFnQlAsS0FBaEIsRUFBdUJFLHFCQUF2QixFQUE4Q0gsUUFBOUMsQ0FBcEI7QUFBQSxVQUNNUyxpQkFBaUIsSUFBSVYsY0FBSixDQUFtQlEsV0FBbkIsQ0FEdkI7O0FBR0EsYUFBT0UsY0FBUDtBQUNEOzs7O0VBMUMwQmhCLFk7O0FBNkM3QmlCLE9BQU9DLE9BQVAsR0FBaUJaLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFRyYW5zcGFyZW50Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50JyksXG4gICAgICBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwvZGlzY2FyZFNlY29uZENoaWxkJyksXG4gICAgICBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50VGhlbktlZXBTZWNvbmQnKTtcblxuY29uc3QgeyBCTkZMZXhlciwgRmxvcmVuY2VMZXhlciB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZyhtYXBwaW5ncykge1xuICAgIGNvbnN0IGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLmdldFNpZ25pZmljYW50VG9rZW5UeXBlcygpO1xuXG4gICAgbWFwcGluZ3MgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICdwYXJ0JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3ByZW1pc2UnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncHJlbWlzZXMnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnc3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3ZhcmlhYmxlTmFtZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICcodHlwZWQpVmFyaWFibGUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnY29uc3RydWN0b3JOYW1lJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ21ldGF2YXJpYWJsZU5hbWUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncGFyZW50aGVzaXNlZFR5cGUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAndHlwZShzKURlY2xhcmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3NwZWNpYWxPclVuYXNzaWduZWQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnKHVuKWxhYmVsbGVkU3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJyhxdWFsaWZpZWQpTWV0YXZhcmlhYmxlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJyh0eXBlZClWYXJpYWJsZShzKURlY2xhcmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3R5cGVkQ29uc3RydWN0b3IocylEZWNsYXJhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdzdWJMZW1tYU9yKHVuKWxhYmVsbGVkU3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJyhxdWFsaWZpZWQpTWV0YXZhcmlhYmxlKHMpRGVjbGFyYXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncHJlbWlzZShzKSc6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAnY29uY2x1c2lvbic6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAndHlwZWRWYXJpYWJsZSc6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAndHlwZWRDb25zdHJ1Y3Rvcic6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAnbGFiZWxsZWRTdGF0ZW1lbnQnOiBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlLFxuICAgICAgJ2NvbW1hVGhlblR5cGUnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICdjb21tYVRoZW5MYWJlbCc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJ2NvbW1hVGhlbk1ldGF2YXJpYWJsZSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJ2NvbW1hVGhlbihUeXBlZClWYXJpYWJsZSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJ2NvbW1hVGhlblR5cGVkQ29uc3RydWN0b3InOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICdjb21tYVRoZW4ocXVhbGlmaWVkKU1ldGF2YXJpYWJsZSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJ3BhcmVudGhlc2lzZWRUeXBlTGlzdCc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJ3BhcmVudGhlc2lzZWRMYWJlbExpc3QnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZVxuICAgIH0sIG1hcHBpbmdzKTtcblxuICAgIGNvbnN0IHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiJdfQ==