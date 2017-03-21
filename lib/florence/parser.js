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
    TransparentNode = require('../common/node/nonTerminal/transparent'),
    DiscardSecondChildNode = require('../common/node/nonTerminal/discardSecondChild'),
    TransparentThenKeepSecondNode = require('../common/node/nonTerminal/transparentThenKeepSecond');

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
                        'premise(s)': DiscardSecondChildNode,
                        'conclusion': DiscardSecondChildNode,
                        'commaThenLabel': TransparentThenKeepSecondNode,
                        'labelledStatement': DiscardSecondChildNode,
                        'parenthesisedLabels': TransparentThenKeepSecondNode,
                        '(un)labelledStatement': TransparentNode,
                        'specialOrUnassigned': TransparentNode,
                        'subLemmaOr(un)labelledStatement': TransparentNode
                  }, mappings);

                  var productions = BNFParser.parse(lines, significantTokenTypes, mappings),
                      florenceParser = new FlorenceParser(productions);

                  return florenceParser;
            }
      }]);

      return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJUcmFuc3BhcmVudE5vZGUiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUiLCJGbG9yZW5jZVBhcnNlciIsIm1hcHBpbmdzIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImZsb3JlbmNlUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjtBQUFBLElBQ01DLFdBQVdGLE9BQU9FLFFBRHhCO0FBQUEsSUFFTUMsZ0JBQWdCSCxPQUFPRyxhQUY3Qjs7QUFJQSxJQUFNQyxVQUFVSCxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNSSxZQUFZSixRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNSyxlQUFlTCxRQUFRLGtCQUFSLENBRnJCO0FBQUEsSUFHTU0sa0JBQWtCTixRQUFRLHdDQUFSLENBSHhCO0FBQUEsSUFJTU8seUJBQXlCUCxRQUFRLCtDQUFSLENBSi9CO0FBQUEsSUFLTVEsZ0NBQWdDUixRQUFRLHNEQUFSLENBTHRDOztJQU9NUyxjOzs7Ozs7Ozs7Ozt3Q0FDZUMsUSxFQUFVO0FBQzNCLHNCQUFNQyxRQUFRVixTQUFTVyxnQkFBVCxDQUEwQlQsT0FBMUIsQ0FBZDtBQUFBLHNCQUNNVSx3QkFBd0JYLGNBQWNZLHdCQUFkLEVBRDlCOztBQUdBSiw2QkFBV0ssT0FBT0MsTUFBUCxDQUFjO0FBQ3ZCLGdDQUFRVixlQURlO0FBRXZCLG1DQUFXQSxlQUZZO0FBR3ZCLG9DQUFZQSxlQUhXO0FBSXZCLHFDQUFhQSxlQUpVO0FBS3ZCLHNDQUFjQyxzQkFMUztBQU12QixzQ0FBY0Esc0JBTlM7QUFPdkIsMENBQWtCQyw2QkFQSztBQVF2Qiw2Q0FBcUJELHNCQVJFO0FBU3ZCLCtDQUF1QkMsNkJBVEE7QUFVdkIsaURBQXlCRixlQVZGO0FBV3ZCLCtDQUF1QkEsZUFYQTtBQVl2QiwyREFBbUNBO0FBWlosbUJBQWQsRUFhUkksUUFiUSxDQUFYOztBQWVBLHNCQUFNTyxjQUFjYixVQUFVYyxLQUFWLENBQWdCUCxLQUFoQixFQUF1QkUscUJBQXZCLEVBQThDSCxRQUE5QyxDQUFwQjtBQUFBLHNCQUNNUyxpQkFBaUIsSUFBSVYsY0FBSixDQUFtQlEsV0FBbkIsQ0FEdkI7O0FBR0EseUJBQU9FLGNBQVA7QUFDRDs7OztFQXhCMEJkLFk7O0FBMkI3QmUsT0FBT0MsT0FBUCxHQUFpQlosY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIEJORkxleGVyID0gbGV4ZXJzLkJORkxleGVyLFxuICAgICAgRmxvcmVuY2VMZXhlciA9IGxleGVycy5GbG9yZW5jZUxleGVyO1xuXG5jb25zdCBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBUcmFuc3BhcmVudE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudCcpLFxuICAgICAgRGlzY2FyZFNlY29uZENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL2Rpc2NhcmRTZWNvbmRDaGlsZCcpLFxuICAgICAgVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kJyk7XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEZsb3JlbmNlTGV4ZXIuZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzKCk7XG5cbiAgICBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ3BhcnQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncHJlbWlzZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdwcmVtaXNlcyc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdzdGF0ZW1lbnQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncHJlbWlzZShzKSc6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAnY29uY2x1c2lvbic6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAnY29tbWFUaGVuTGFiZWwnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICdsYWJlbGxlZFN0YXRlbWVudCc6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAncGFyZW50aGVzaXNlZExhYmVscyc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJyh1bilsYWJlbGxlZFN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdzcGVjaWFsT3JVbmFzc2lnbmVkJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3N1YkxlbW1hT3IodW4pbGFiZWxsZWRTdGF0ZW1lbnQnOiBUcmFuc3BhcmVudE5vZGVcbiAgICB9LCBtYXBwaW5ncyk7XG5cbiAgICBjb25zdCBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=