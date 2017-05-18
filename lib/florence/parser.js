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

        'name': TransparentNode,
        'part': TransparentNode,
        'premise': TransparentNode,
        'premises': TransparentNode,
        'statement': TransparentNode,
        'subDerivation': TransparentNode,
        'proofDerivation': TransparentNode,
        'parenthesisedType': TransparentNode,
        'abridgedProofDerivation': TransparentNode,

        'typeName': TransparentNode,
        'labelName': TransparentNode,
        'variableName': TransparentNode,
        'constructorName': TransparentNode,
        'metavariableName': TransparentNode,

        'premise(s)': TransparentNode,
        'type(s)Declaration': TransparentNode,
        '(typed)Variable(s)Declaration': TransparentNode,
        'typedConstructor(s)Declaration': TransparentNode,
        '(qualified)Metavariable(s)Declaration': TransparentNode,

        '(typed)Variable': TransparentNode,
        '(qualified)Metavariable': TransparentNode,
        '(abridged)ProofDerivation': TransparentNode,

        'byOrFrom': TransparentNode,
        'typeOrTerm': TransparentNode,
        'unjustifiedStatementOrUnknown': TransparentNode,
        '(un)justifiedStatementOrUnknown': TransparentNode,
        'specialUnassignedOrMinorKeywords': TransparentNode,

        'commaThenTerm': TransparentThenKeepSecondNode,
        'commaThenType': TransparentThenKeepSecondNode,
        'commaThenLabel': TransparentThenKeepSecondNode,
        'commaThenMetavariable': TransparentThenKeepSecondNode,
        'commaThen(typed)Variable': TransparentThenKeepSecondNode,
        'commaThenTypedConstructor': TransparentThenKeepSecondNode,
        'commaThen(qualified)Metavariable': TransparentThenKeepSecondNode,

        'parenthesisedTermList': TransparentThenKeepSecondNode,
        'parenthesisedTypeList': TransparentThenKeepSecondNode,
        'parenthesisedLabelList': TransparentThenKeepSecondNode,

        'conclusion': DiscardSecondChildNode,
        'typedVariable': DiscardSecondChildNode,
        'typedConstructor': DiscardSecondChildNode

      }, mappings);

      var productions = BNFParser.parse(lines, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJUcmFuc3BhcmVudE5vZGUiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUiLCJCTkZMZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsIm1hcHBpbmdzIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImZsb3JlbmNlUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUksa0JBQWtCSixRQUFRLHdDQUFSLENBSHhCO0FBQUEsSUFJTUsseUJBQXlCTCxRQUFRLCtDQUFSLENBSi9CO0FBQUEsSUFLTU0sZ0NBQWdDTixRQUFRLHNEQUFSLENBTHRDOztJQU9RTyxRLEdBQTRCUixNLENBQTVCUSxRO0lBQVVDLGEsR0FBa0JULE0sQ0FBbEJTLGE7O0lBRVpDLGM7Ozs7Ozs7Ozs7O2dDQUNlQyxRLEVBQVU7QUFDM0IsVUFBTUMsUUFBUUosU0FBU0ssZ0JBQVQsQ0FBMEJYLE9BQTFCLENBQWQ7QUFBQSxVQUNNWSx3QkFBd0JMLGNBQWNNLHdCQUFkLEVBRDlCOztBQUdBSixpQkFBV0ssT0FBT0MsTUFBUCxDQUFjOztBQUV2QixnQkFBUVosZUFGZTtBQUd2QixnQkFBUUEsZUFIZTtBQUl2QixtQkFBV0EsZUFKWTtBQUt2QixvQkFBWUEsZUFMVztBQU12QixxQkFBYUEsZUFOVTtBQU92Qix5QkFBaUJBLGVBUE07QUFRdkIsMkJBQW1CQSxlQVJJO0FBU3ZCLDZCQUFxQkEsZUFURTtBQVV2QixtQ0FBMkJBLGVBVko7O0FBWXZCLG9CQUFZQSxlQVpXO0FBYXZCLHFCQUFhQSxlQWJVO0FBY3ZCLHdCQUFnQkEsZUFkTztBQWV2QiwyQkFBbUJBLGVBZkk7QUFnQnZCLDRCQUFvQkEsZUFoQkc7O0FBa0J2QixzQkFBY0EsZUFsQlM7QUFtQnZCLDhCQUFzQkEsZUFuQkM7QUFvQnZCLHlDQUFpQ0EsZUFwQlY7QUFxQnZCLDBDQUFrQ0EsZUFyQlg7QUFzQnZCLGlEQUF5Q0EsZUF0QmxCOztBQXdCdkIsMkJBQW1CQSxlQXhCSTtBQXlCdkIsbUNBQTJCQSxlQXpCSjtBQTBCdkIscUNBQTZCQSxlQTFCTjs7QUE0QnZCLG9CQUFZQSxlQTVCVztBQTZCdkIsc0JBQWNBLGVBN0JTO0FBOEJ2Qix5Q0FBaUNBLGVBOUJWO0FBK0J2QiwyQ0FBbUNBLGVBL0JaO0FBZ0N2Qiw0Q0FBb0NBLGVBaENiOztBQWtDdkIseUJBQWlCRSw2QkFsQ007QUFtQ3ZCLHlCQUFpQkEsNkJBbkNNO0FBb0N2QiwwQkFBa0JBLDZCQXBDSztBQXFDdkIsaUNBQXlCQSw2QkFyQ0Y7QUFzQ3ZCLG9DQUE0QkEsNkJBdENMO0FBdUN2QixxQ0FBNkJBLDZCQXZDTjtBQXdDdkIsNENBQW9DQSw2QkF4Q2I7O0FBMEN2QixpQ0FBeUJBLDZCQTFDRjtBQTJDdkIsaUNBQXlCQSw2QkEzQ0Y7QUE0Q3ZCLGtDQUEwQkEsNkJBNUNIOztBQThDdkIsc0JBQWNELHNCQTlDUztBQStDdkIseUJBQWlCQSxzQkEvQ007QUFnRHZCLDRCQUFvQkE7O0FBaERHLE9BQWQsRUFrRFJLLFFBbERRLENBQVg7O0FBb0RBLFVBQU1PLGNBQWNmLFVBQVVnQixLQUFWLENBQWdCUCxLQUFoQixFQUF1QkUscUJBQXZCLEVBQThDSCxRQUE5QyxDQUFwQjtBQUFBLFVBQ01TLGlCQUFpQixJQUFJVixjQUFKLENBQW1CUSxXQUFuQixDQUR2Qjs7QUFHQSxhQUFPRSxjQUFQO0FBQ0Q7Ozs7RUE3RDBCaEIsWTs7QUFnRTdCaUIsT0FBT0MsT0FBUCxHQUFpQlosY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgVHJhbnNwYXJlbnROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwvdHJhbnNwYXJlbnQnKSxcbiAgICAgIERpc2NhcmRTZWNvbmRDaGlsZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9kaXNjYXJkU2Vjb25kQ2hpbGQnKSxcbiAgICAgIFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwvdHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZCcpO1xuXG5jb25zdCB7IEJORkxleGVyLCBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnM7XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEZsb3JlbmNlTGV4ZXIuZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzKCk7XG5cbiAgICBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24oe1xuXG4gICAgICAnbmFtZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdwYXJ0JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3ByZW1pc2UnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncHJlbWlzZXMnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnc3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3N1YkRlcml2YXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncHJvb2ZEZXJpdmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3BhcmVudGhlc2lzZWRUeXBlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ2FicmlkZ2VkUHJvb2ZEZXJpdmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuXG4gICAgICAndHlwZU5hbWUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnbGFiZWxOYW1lJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3ZhcmlhYmxlTmFtZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdjb25zdHJ1Y3Rvck5hbWUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnbWV0YXZhcmlhYmxlTmFtZSc6IFRyYW5zcGFyZW50Tm9kZSxcblxuICAgICAgJ3ByZW1pc2UocyknOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAndHlwZShzKURlY2xhcmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJyh0eXBlZClWYXJpYWJsZShzKURlY2xhcmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3R5cGVkQ29uc3RydWN0b3IocylEZWNsYXJhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICcocXVhbGlmaWVkKU1ldGF2YXJpYWJsZShzKURlY2xhcmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuXG4gICAgICAnKHR5cGVkKVZhcmlhYmxlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJyhxdWFsaWZpZWQpTWV0YXZhcmlhYmxlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJyhhYnJpZGdlZClQcm9vZkRlcml2YXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG5cbiAgICAgICdieU9yRnJvbSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICd0eXBlT3JUZXJtJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3VuanVzdGlmaWVkU3RhdGVtZW50T3JVbmtub3duJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJyh1bilqdXN0aWZpZWRTdGF0ZW1lbnRPclVua25vd24nOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnc3BlY2lhbFVuYXNzaWduZWRPck1pbm9yS2V5d29yZHMnOiBUcmFuc3BhcmVudE5vZGUsXG5cbiAgICAgICdjb21tYVRoZW5UZXJtJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnY29tbWFUaGVuVHlwZSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJ2NvbW1hVGhlbkxhYmVsJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnY29tbWFUaGVuTWV0YXZhcmlhYmxlJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnY29tbWFUaGVuKHR5cGVkKVZhcmlhYmxlJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnY29tbWFUaGVuVHlwZWRDb25zdHJ1Y3Rvcic6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJ2NvbW1hVGhlbihxdWFsaWZpZWQpTWV0YXZhcmlhYmxlJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG5cbiAgICAgICdwYXJlbnRoZXNpc2VkVGVybUxpc3QnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICdwYXJlbnRoZXNpc2VkVHlwZUxpc3QnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICdwYXJlbnRoZXNpc2VkTGFiZWxMaXN0JzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG5cbiAgICAgICdjb25jbHVzaW9uJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICd0eXBlZFZhcmlhYmxlJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICd0eXBlZENvbnN0cnVjdG9yJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZVxuXG4gICAgfSwgbWFwcGluZ3MpO1xuXG4gICAgY29uc3QgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIucGFyc2UobGluZXMsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuIl19