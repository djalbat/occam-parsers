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
        'byOrFrom': TransparentNode,
        'typeName': TransparentNode,
        'statement': TransparentNode,
        'variableName': TransparentNode,
        'byOrFromLabel': TransparentNode,
        'subDerivation': TransparentNode,
        'proofDerivation': TransparentNode,
        '(typed)Variable': TransparentNode,
        'constructorName': TransparentNode,
        'metavariableName': TransparentNode,
        'parenthesisedType': TransparentNode,
        'type(s)Declaration': TransparentNode,
        'specialOrUnassigned': TransparentNode,
        'unassignedOrSpecial': TransparentNode,
        '(un)justifiedStatement': TransparentNode,
        '(qualified)Metavariable': TransparentNode,
        'abridgedProofDerivation': TransparentNode,
        '(abridged)ProofDerivation': TransparentNode,
        '(typed)Variable(s)Declaration': TransparentNode,
        'typedConstructor(s)Declaration': TransparentNode,
        'subLemmaOrStatement(byOrFromLabel)': TransparentNode,
        '(qualified)Metavariable(s)Declaration': TransparentNode,
        'subLemmaOrStatement(byOrFromLabel)ThenVerticalSpace': TransparentNode,
        'premise(s)': DiscardSecondChildNode,
        'conclusion': DiscardSecondChildNode,
        'typedVariable': DiscardSecondChildNode,
        'typedConstructor': DiscardSecondChildNode,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJUcmFuc3BhcmVudE5vZGUiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUiLCJCTkZMZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsIm1hcHBpbmdzIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImZsb3JlbmNlUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUksa0JBQWtCSixRQUFRLHdDQUFSLENBSHhCO0FBQUEsSUFJTUsseUJBQXlCTCxRQUFRLCtDQUFSLENBSi9CO0FBQUEsSUFLTU0sZ0NBQWdDTixRQUFRLHNEQUFSLENBTHRDOztJQU9RTyxRLEdBQTRCUixNLENBQTVCUSxRO0lBQVVDLGEsR0FBa0JULE0sQ0FBbEJTLGE7O0lBRVpDLGM7Ozs7Ozs7Ozs7O2dDQUNlQyxRLEVBQVU7QUFDM0IsVUFBTUMsUUFBUUosU0FBU0ssZ0JBQVQsQ0FBMEJYLE9BQTFCLENBQWQ7QUFBQSxVQUNNWSx3QkFBd0JMLGNBQWNNLHdCQUFkLEVBRDlCOztBQUdBSixpQkFBV0ssT0FBT0MsTUFBUCxDQUFjO0FBQ3ZCLGdCQUFRWixlQURlO0FBRXZCLG1CQUFXQSxlQUZZO0FBR3ZCLG9CQUFZQSxlQUhXO0FBSXZCLG9CQUFZQSxlQUpXO0FBS3ZCLG9CQUFZQSxlQUxXO0FBTXZCLHFCQUFhQSxlQU5VO0FBT3ZCLHdCQUFnQkEsZUFQTztBQVF2Qix5QkFBaUJBLGVBUk07QUFTdkIseUJBQWlCQSxlQVRNO0FBVXZCLDJCQUFtQkEsZUFWSTtBQVd2QiwyQkFBbUJBLGVBWEk7QUFZdkIsMkJBQW1CQSxlQVpJO0FBYXZCLDRCQUFvQkEsZUFiRztBQWN2Qiw2QkFBcUJBLGVBZEU7QUFldkIsOEJBQXNCQSxlQWZDO0FBZ0J2QiwrQkFBdUJBLGVBaEJBO0FBaUJ2QiwrQkFBdUJBLGVBakJBO0FBa0J2QixrQ0FBMEJBLGVBbEJIO0FBbUJ2QixtQ0FBMkJBLGVBbkJKO0FBb0J2QixtQ0FBMkJBLGVBcEJKO0FBcUJ2QixxQ0FBNkJBLGVBckJOO0FBc0J2Qix5Q0FBaUNBLGVBdEJWO0FBdUJ2QiwwQ0FBa0NBLGVBdkJYO0FBd0J2Qiw4Q0FBc0NBLGVBeEJmO0FBeUJ2QixpREFBeUNBLGVBekJsQjtBQTBCdkIsK0RBQXVEQSxlQTFCaEM7QUEyQnZCLHNCQUFjQyxzQkEzQlM7QUE0QnZCLHNCQUFjQSxzQkE1QlM7QUE2QnZCLHlCQUFpQkEsc0JBN0JNO0FBOEJ2Qiw0QkFBb0JBLHNCQTlCRztBQStCdkIseUJBQWlCQyw2QkEvQk07QUFnQ3ZCLDBCQUFrQkEsNkJBaENLO0FBaUN2QixpQ0FBeUJBLDZCQWpDRjtBQWtDdkIsb0NBQTRCQSw2QkFsQ0w7QUFtQ3ZCLHFDQUE2QkEsNkJBbkNOO0FBb0N2Qiw0Q0FBb0NBLDZCQXBDYjtBQXFDdkIsaUNBQXlCQSw2QkFyQ0Y7QUFzQ3ZCLGtDQUEwQkE7QUF0Q0gsT0FBZCxFQXVDUkksUUF2Q1EsQ0FBWDs7QUF5Q0EsVUFBTU8sY0FBY2YsVUFBVWdCLEtBQVYsQ0FBZ0JQLEtBQWhCLEVBQXVCRSxxQkFBdkIsRUFBOENILFFBQTlDLENBQXBCO0FBQUEsVUFDTVMsaUJBQWlCLElBQUlWLGNBQUosQ0FBbUJRLFdBQW5CLENBRHZCOztBQUdBLGFBQU9FLGNBQVA7QUFDRDs7OztFQWxEMEJoQixZOztBQXFEN0JpQixPQUFPQyxPQUFQLEdBQWlCWixjQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBUcmFuc3BhcmVudE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudCcpLFxuICAgICAgRGlzY2FyZFNlY29uZENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL2Rpc2NhcmRTZWNvbmRDaGlsZCcpLFxuICAgICAgVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIsIEZsb3JlbmNlTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcobWFwcGluZ3MpIHtcbiAgICBjb25zdCBsaW5lcyA9IEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gRmxvcmVuY2VMZXhlci5nZXRTaWduaWZpY2FudFRva2VuVHlwZXMoKTtcblxuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAncGFydCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdwcmVtaXNlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3ByZW1pc2VzJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ2J5T3JGcm9tJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3R5cGVOYW1lJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3N0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICd2YXJpYWJsZU5hbWUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnYnlPckZyb21MYWJlbCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdzdWJEZXJpdmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3Byb29mRGVyaXZhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICcodHlwZWQpVmFyaWFibGUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnY29uc3RydWN0b3JOYW1lJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ21ldGF2YXJpYWJsZU5hbWUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncGFyZW50aGVzaXNlZFR5cGUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAndHlwZShzKURlY2xhcmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3NwZWNpYWxPclVuYXNzaWduZWQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAndW5hc3NpZ25lZE9yU3BlY2lhbCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICcodW4panVzdGlmaWVkU3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJyhxdWFsaWZpZWQpTWV0YXZhcmlhYmxlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ2FicmlkZ2VkUHJvb2ZEZXJpdmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJyhhYnJpZGdlZClQcm9vZkRlcml2YXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnKHR5cGVkKVZhcmlhYmxlKHMpRGVjbGFyYXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAndHlwZWRDb25zdHJ1Y3RvcihzKURlY2xhcmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3N1YkxlbW1hT3JTdGF0ZW1lbnQoYnlPckZyb21MYWJlbCknOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnKHF1YWxpZmllZClNZXRhdmFyaWFibGUocylEZWNsYXJhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdzdWJMZW1tYU9yU3RhdGVtZW50KGJ5T3JGcm9tTGFiZWwpVGhlblZlcnRpY2FsU3BhY2UnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncHJlbWlzZShzKSc6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAnY29uY2x1c2lvbic6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAndHlwZWRWYXJpYWJsZSc6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAndHlwZWRDb25zdHJ1Y3Rvcic6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAnY29tbWFUaGVuVHlwZSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJ2NvbW1hVGhlbkxhYmVsJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnY29tbWFUaGVuTWV0YXZhcmlhYmxlJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnY29tbWFUaGVuKFR5cGVkKVZhcmlhYmxlJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnY29tbWFUaGVuVHlwZWRDb25zdHJ1Y3Rvcic6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJ2NvbW1hVGhlbihxdWFsaWZpZWQpTWV0YXZhcmlhYmxlJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAncGFyZW50aGVzaXNlZFR5cGVMaXN0JzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAncGFyZW50aGVzaXNlZExhYmVsTGlzdCc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlXG4gICAgfSwgbWFwcGluZ3MpO1xuXG4gICAgY29uc3QgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIucGFyc2UobGluZXMsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuIl19