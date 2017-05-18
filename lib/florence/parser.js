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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJUcmFuc3BhcmVudE5vZGUiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUiLCJCTkZMZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsIm1hcHBpbmdzIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImZsb3JlbmNlUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNRyxlQUFlSCxRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTUksa0JBQWtCSixRQUFRLHdDQUFSLENBSHhCO0FBQUEsSUFJTUsseUJBQXlCTCxRQUFRLCtDQUFSLENBSi9CO0FBQUEsSUFLTU0sZ0NBQWdDTixRQUFRLHNEQUFSLENBTHRDOztJQU9RTyxRLEdBQTRCUixNLENBQTVCUSxRO0lBQVVDLGEsR0FBa0JULE0sQ0FBbEJTLGE7O0lBRVpDLGM7Ozs7Ozs7Ozs7O2dDQUNlQyxRLEVBQVU7QUFDM0IsVUFBTUMsUUFBUUosU0FBU0ssZ0JBQVQsQ0FBMEJYLE9BQTFCLENBQWQ7QUFBQSxVQUNNWSx3QkFBd0JMLGNBQWNNLHdCQUFkLEVBRDlCOztBQUdBSixpQkFBV0ssT0FBT0MsTUFBUCxDQUFjO0FBQ3ZCLGdCQUFRWixlQURlO0FBRXZCLG1CQUFXQSxlQUZZO0FBR3ZCLG9CQUFZQSxlQUhXO0FBSXZCLG9CQUFZQSxlQUpXO0FBS3ZCLHdCQUFnQkEsZUFMTztBQU12Qix5QkFBaUJBLGVBTk07QUFPdkIseUJBQWlCQSxlQVBNO0FBUXZCLDJCQUFtQkEsZUFSSTtBQVN2QiwyQkFBbUJBLGVBVEk7QUFVdkIsMkJBQW1CQSxlQVZJO0FBV3ZCLDRCQUFvQkEsZUFYRztBQVl2Qiw2QkFBcUJBLGVBWkU7QUFhdkIsOEJBQXNCQSxlQWJDO0FBY3ZCLCtCQUF1QkEsZUFkQTtBQWV2QixrQ0FBMEJBLGVBZkg7QUFnQnZCLG1DQUEyQkEsZUFoQko7QUFpQnZCLG1DQUEyQkEsZUFqQko7QUFrQnZCLHFDQUE2QkEsZUFsQk47QUFtQnZCLHlDQUFpQ0EsZUFuQlY7QUFvQnZCLDBDQUFrQ0EsZUFwQlg7QUFxQnZCLDhDQUFzQ0EsZUFyQmY7QUFzQnZCLGlEQUF5Q0EsZUF0QmxCO0FBdUJ2QiwrREFBdURBLGVBdkJoQztBQXdCdkIsc0JBQWNDLHNCQXhCUztBQXlCdkIsc0JBQWNBLHNCQXpCUztBQTBCdkIseUJBQWlCQSxzQkExQk07QUEyQnZCLDRCQUFvQkEsc0JBM0JHO0FBNEJ2Qix5QkFBaUJDLDZCQTVCTTtBQTZCdkIsMEJBQWtCQSw2QkE3Qks7QUE4QnZCLGlDQUF5QkEsNkJBOUJGO0FBK0J2QixvQ0FBNEJBLDZCQS9CTDtBQWdDdkIscUNBQTZCQSw2QkFoQ047QUFpQ3ZCLDRDQUFvQ0EsNkJBakNiO0FBa0N2QixpQ0FBeUJBLDZCQWxDRjtBQW1DdkIsa0NBQTBCQTtBQW5DSCxPQUFkLEVBb0NSSSxRQXBDUSxDQUFYOztBQXNDQSxVQUFNTyxjQUFjZixVQUFVZ0IsS0FBVixDQUFnQlAsS0FBaEIsRUFBdUJFLHFCQUF2QixFQUE4Q0gsUUFBOUMsQ0FBcEI7QUFBQSxVQUNNUyxpQkFBaUIsSUFBSVYsY0FBSixDQUFtQlEsV0FBbkIsQ0FEdkI7O0FBR0EsYUFBT0UsY0FBUDtBQUNEOzs7O0VBL0MwQmhCLFk7O0FBa0Q3QmlCLE9BQU9DLE9BQVAsR0FBaUJaLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFRyYW5zcGFyZW50Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50JyksXG4gICAgICBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwvZGlzY2FyZFNlY29uZENoaWxkJyksXG4gICAgICBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50VGhlbktlZXBTZWNvbmQnKTtcblxuY29uc3QgeyBCTkZMZXhlciwgRmxvcmVuY2VMZXhlciB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZyhtYXBwaW5ncykge1xuICAgIGNvbnN0IGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLmdldFNpZ25pZmljYW50VG9rZW5UeXBlcygpO1xuXG4gICAgbWFwcGluZ3MgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICdwYXJ0JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3ByZW1pc2UnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncHJlbWlzZXMnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnYnlPckZyb20nOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAndmFyaWFibGVOYW1lJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ2J5T3JGcm9tTGFiZWwnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnc3ViRGVyaXZhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdwcm9vZkRlcml2YXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnKHR5cGVkKVZhcmlhYmxlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ2NvbnN0cnVjdG9yTmFtZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdtZXRhdmFyaWFibGVOYW1lJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3BhcmVudGhlc2lzZWRUeXBlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3R5cGUocylEZWNsYXJhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdzcGVjaWFsT3JVbmFzc2lnbmVkJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJyh1bilqdXN0aWZpZWRTdGF0ZW1lbnQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnKHF1YWxpZmllZClNZXRhdmFyaWFibGUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnYWJyaWRnZWRQcm9vZkRlcml2YXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnKGFicmlkZ2VkKVByb29mRGVyaXZhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICcodHlwZWQpVmFyaWFibGUocylEZWNsYXJhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICd0eXBlZENvbnN0cnVjdG9yKHMpRGVjbGFyYXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnc3ViTGVtbWFPclN0YXRlbWVudChieU9yRnJvbUxhYmVsKSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICcocXVhbGlmaWVkKU1ldGF2YXJpYWJsZShzKURlY2xhcmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3N1YkxlbW1hT3JTdGF0ZW1lbnQoYnlPckZyb21MYWJlbClUaGVuVmVydGljYWxTcGFjZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdwcmVtaXNlKHMpJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICdjb25jbHVzaW9uJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICd0eXBlZFZhcmlhYmxlJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICd0eXBlZENvbnN0cnVjdG9yJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICdjb21tYVRoZW5UeXBlJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnY29tbWFUaGVuTGFiZWwnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICdjb21tYVRoZW5NZXRhdmFyaWFibGUnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICdjb21tYVRoZW4oVHlwZWQpVmFyaWFibGUnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICdjb21tYVRoZW5UeXBlZENvbnN0cnVjdG9yJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnY29tbWFUaGVuKHF1YWxpZmllZClNZXRhdmFyaWFibGUnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICdwYXJlbnRoZXNpc2VkVHlwZUxpc3QnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICdwYXJlbnRoZXNpc2VkTGFiZWxMaXN0JzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGVcbiAgICB9LCBtYXBwaW5ncyk7XG5cbiAgICBjb25zdCBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=