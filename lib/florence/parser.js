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
        'type(s)Declaration': TransparentNode,
        'specialOrUnassigned': TransparentNode,
        '(un)labelledStatement': TransparentNode,
        '(typed)Variable(s)Declaration': TransparentNode,
        'typedConstructor(s)Declaration': TransparentNode,
        'subLemmaOr(un)labelledStatement': TransparentNode,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJUcmFuc3BhcmVudE5vZGUiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUiLCJCTkZMZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsIm1hcHBpbmdzIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImZsb3JlbmNlUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUksa0JBQWtCSixRQUFRLHdDQUFSLENBSHhCO0FBQUEsSUFJTUsseUJBQXlCTCxRQUFRLCtDQUFSLENBSi9CO0FBQUEsSUFLTU0sZ0NBQWdDTixRQUFRLHNEQUFSLENBTHRDOztJQU9RTyxRLEdBQTRCUixNLENBQTVCUSxRO0lBQVVDLGEsR0FBa0JULE0sQ0FBbEJTLGE7O0lBRVpDLGM7Ozs7Ozs7Ozs7O2dDQUNlQyxRLEVBQVU7QUFDM0IsVUFBTUMsUUFBUUosU0FBU0ssZ0JBQVQsQ0FBMEJYLE9BQTFCLENBQWQ7QUFBQSxVQUNNWSx3QkFBd0JMLGNBQWNNLHdCQUFkLEVBRDlCOztBQUdBSixpQkFBV0ssT0FBT0MsTUFBUCxDQUFjO0FBQ3ZCLGdCQUFRWixlQURlO0FBRXZCLG1CQUFXQSxlQUZZO0FBR3ZCLG9CQUFZQSxlQUhXO0FBSXZCLHFCQUFhQSxlQUpVO0FBS3ZCLHdCQUFnQkEsZUFMTztBQU12QiwyQkFBbUJBLGVBTkk7QUFPdkIsMkJBQW1CQSxlQVBJO0FBUXZCLDRCQUFvQkEsZUFSRztBQVN2Qiw4QkFBc0JBLGVBVEM7QUFVdkIsK0JBQXVCQSxlQVZBO0FBV3ZCLGlDQUF5QkEsZUFYRjtBQVl2Qix5Q0FBaUNBLGVBWlY7QUFhdkIsMENBQWtDQSxlQWJYO0FBY3ZCLDJDQUFtQ0EsZUFkWjtBQWV2QixzQkFBY0Msc0JBZlM7QUFnQnZCLHNCQUFjQSxzQkFoQlM7QUFpQnZCLHlCQUFpQkEsc0JBakJNO0FBa0J2Qiw0QkFBb0JBLHNCQWxCRztBQW1CdkIsNkJBQXFCQSxzQkFuQkU7QUFvQnZCLHlCQUFpQkMsNkJBcEJNO0FBcUJ2QiwwQkFBa0JBLDZCQXJCSztBQXNCdkIsaUNBQXlCQSw2QkF0QkY7QUF1QnZCLG9DQUE0QkEsNkJBdkJMO0FBd0J2QixxQ0FBNkJBLDZCQXhCTjtBQXlCdkIsaUNBQXlCQSw2QkF6QkY7QUEwQnZCLGtDQUEwQkE7QUExQkgsT0FBZCxFQTJCUkksUUEzQlEsQ0FBWDs7QUE2QkEsVUFBTU8sY0FBY2YsVUFBVWdCLEtBQVYsQ0FBZ0JQLEtBQWhCLEVBQXVCRSxxQkFBdkIsRUFBOENILFFBQTlDLENBQXBCO0FBQUEsVUFDTVMsaUJBQWlCLElBQUlWLGNBQUosQ0FBbUJRLFdBQW5CLENBRHZCOztBQUdBLGFBQU9FLGNBQVA7QUFDRDs7OztFQXRDMEJoQixZOztBQXlDN0JpQixPQUFPQyxPQUFQLEdBQWlCWixjQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBUcmFuc3BhcmVudE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudCcpLFxuICAgICAgRGlzY2FyZFNlY29uZENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL2Rpc2NhcmRTZWNvbmRDaGlsZCcpLFxuICAgICAgVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIsIEZsb3JlbmNlTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcobWFwcGluZ3MpIHtcbiAgICBjb25zdCBsaW5lcyA9IEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gRmxvcmVuY2VMZXhlci5nZXRTaWduaWZpY2FudFRva2VuVHlwZXMoKTtcblxuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAncGFydCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdwcmVtaXNlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3ByZW1pc2VzJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3N0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICd2YXJpYWJsZU5hbWUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnKHR5cGVkKVZhcmlhYmxlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ2NvbnN0cnVjdG9yTmFtZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdtZXRhdmFyaWFibGVOYW1lJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3R5cGUocylEZWNsYXJhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdzcGVjaWFsT3JVbmFzc2lnbmVkJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJyh1bilsYWJlbGxlZFN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICcodHlwZWQpVmFyaWFibGUocylEZWNsYXJhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICd0eXBlZENvbnN0cnVjdG9yKHMpRGVjbGFyYXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnc3ViTGVtbWFPcih1bilsYWJlbGxlZFN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdwcmVtaXNlKHMpJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICdjb25jbHVzaW9uJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICd0eXBlZFZhcmlhYmxlJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICd0eXBlZENvbnN0cnVjdG9yJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICdsYWJlbGxlZFN0YXRlbWVudCc6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAnY29tbWFUaGVuVHlwZSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJ2NvbW1hVGhlbkxhYmVsJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnY29tbWFUaGVuTWV0YXZhcmlhYmxlJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnY29tbWFUaGVuKFR5cGVkKVZhcmlhYmxlJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnY29tbWFUaGVuVHlwZWRDb25zdHJ1Y3Rvcic6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJ3BhcmVudGhlc2lzZWRUeXBlTGlzdCc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJ3BhcmVudGhlc2lzZWRMYWJlbExpc3QnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZVxuICAgIH0sIG1hcHBpbmdzKTtcblxuICAgIGNvbnN0IHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiJdfQ==