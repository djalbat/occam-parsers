'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      var _Object$assign;

      var lines = BNFLexer.linesFromGrammar(grammar),
          significantTokenTypes = FlorenceLexer.getSignificantTokenTypes();

      mappings = Object.assign((_Object$assign = {
        'part': TransparentNode,
        'premise': TransparentNode,
        'premises': TransparentNode,
        'statement': TransparentNode,
        'premise(s)': DiscardSecondChildNode,
        'conclusion': DiscardSecondChildNode,
        'commaThenLabel': TransparentThenKeepSecondNode,
        'typedVariable': DiscardSecondChildNode,
        'typedConstructor': DiscardSecondChildNode,
        'labelledStatement': DiscardSecondChildNode
      }, _defineProperty(_Object$assign, 'labelledStatement', DiscardSecondChildNode), _defineProperty(_Object$assign, 'parenthesisedLabels', TransparentThenKeepSecondNode), _defineProperty(_Object$assign, '(un)labelledStatement', TransparentNode), _defineProperty(_Object$assign, 'specialOrUnassigned', TransparentNode), _defineProperty(_Object$assign, 'subLemmaOr(un)labelledStatement', TransparentNode), _defineProperty(_Object$assign, 'commaThen(Typed)Variable', TransparentThenKeepSecondNode), _defineProperty(_Object$assign, 'constructorName', TransparentNode), _defineProperty(_Object$assign, 'variableName', TransparentNode), _defineProperty(_Object$assign, '(typed)Variable', TransparentNode), _defineProperty(_Object$assign, 'type(s)Declaration', TransparentNode), _defineProperty(_Object$assign, 'typedConstructor(s)Declaration', TransparentNode), _defineProperty(_Object$assign, '(typed)Variable(s)Declaration', TransparentNode), _Object$assign), mappings);

      var productions = BNFParser.parse(lines, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJUcmFuc3BhcmVudE5vZGUiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUiLCJCTkZMZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsIm1hcHBpbmdzIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImZsb3JlbmNlUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFVBQVVELFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsZUFBUixDQURsQjtBQUFBLElBRU1HLGVBQWVILFFBQVEsa0JBQVIsQ0FGckI7QUFBQSxJQUdNSSxrQkFBa0JKLFFBQVEsd0NBQVIsQ0FIeEI7QUFBQSxJQUlNSyx5QkFBeUJMLFFBQVEsK0NBQVIsQ0FKL0I7QUFBQSxJQUtNTSxnQ0FBZ0NOLFFBQVEsc0RBQVIsQ0FMdEM7O0lBT1FPLFEsR0FBNEJSLE0sQ0FBNUJRLFE7SUFBVUMsYSxHQUFrQlQsTSxDQUFsQlMsYTs7SUFFWkMsYzs7Ozs7Ozs7Ozs7Z0NBQ2VDLFEsRUFBVTtBQUFBOztBQUMzQixVQUFNQyxRQUFRSixTQUFTSyxnQkFBVCxDQUEwQlgsT0FBMUIsQ0FBZDtBQUFBLFVBQ01ZLHdCQUF3QkwsY0FBY00sd0JBQWQsRUFEOUI7O0FBR0FKLGlCQUFXSyxPQUFPQyxNQUFQO0FBQ1QsZ0JBQVFaLGVBREM7QUFFVCxtQkFBV0EsZUFGRjtBQUdULG9CQUFZQSxlQUhIO0FBSVQscUJBQWFBLGVBSko7QUFLVCxzQkFBY0Msc0JBTEw7QUFNVCxzQkFBY0Esc0JBTkw7QUFPVCwwQkFBa0JDLDZCQVBUO0FBUVQseUJBQWlCRCxzQkFSUjtBQVNULDRCQUFvQkEsc0JBVFg7QUFVVCw2QkFBcUJBO0FBVlosOERBV1lBLHNCQVhaLG1DQVlULHFCQVpTLEVBWWNDLDZCQVpkLG1DQWFULHVCQWJTLEVBYWdCRixlQWJoQixtQ0FjVCxxQkFkUyxFQWNjQSxlQWRkLG1DQWVULGlDQWZTLEVBZTBCQSxlQWYxQixtQ0FnQlQsMEJBaEJTLEVBZ0JtQkUsNkJBaEJuQixtQ0FpQlQsaUJBakJTLEVBaUJVRixlQWpCVixtQ0FrQlQsY0FsQlMsRUFrQk9BLGVBbEJQLG1DQW1CVCxpQkFuQlMsRUFtQlVBLGVBbkJWLG1DQW9CVCxvQkFwQlMsRUFvQmFBLGVBcEJiLG1DQXFCVCxnQ0FyQlMsRUFxQnlCQSxlQXJCekIsbUNBc0JULCtCQXRCUyxFQXNCd0JBLGVBdEJ4QixvQkF1QlJNLFFBdkJRLENBQVg7O0FBeUJBLFVBQU1PLGNBQWNmLFVBQVVnQixLQUFWLENBQWdCUCxLQUFoQixFQUF1QkUscUJBQXZCLEVBQThDSCxRQUE5QyxDQUFwQjtBQUFBLFVBQ01TLGlCQUFpQixJQUFJVixjQUFKLENBQW1CUSxXQUFuQixDQUR2Qjs7QUFHQSxhQUFPRSxjQUFQO0FBQ0Q7Ozs7RUFsQzBCaEIsWTs7QUFxQzdCaUIsT0FBT0MsT0FBUCxHQUFpQlosY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgVHJhbnNwYXJlbnROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwvdHJhbnNwYXJlbnQnKSxcbiAgICAgIERpc2NhcmRTZWNvbmRDaGlsZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9kaXNjYXJkU2Vjb25kQ2hpbGQnKSxcbiAgICAgIFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwvdHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZCcpO1xuXG5jb25zdCB7IEJORkxleGVyLCBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnM7XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEZsb3JlbmNlTGV4ZXIuZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzKCk7XG5cbiAgICBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ3BhcnQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncHJlbWlzZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdwcmVtaXNlcyc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdzdGF0ZW1lbnQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncHJlbWlzZShzKSc6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAnY29uY2x1c2lvbic6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAnY29tbWFUaGVuTGFiZWwnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICd0eXBlZFZhcmlhYmxlJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICd0eXBlZENvbnN0cnVjdG9yJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICdsYWJlbGxlZFN0YXRlbWVudCc6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAnbGFiZWxsZWRTdGF0ZW1lbnQnOiBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlLFxuICAgICAgJ3BhcmVudGhlc2lzZWRMYWJlbHMnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICcodW4pbGFiZWxsZWRTdGF0ZW1lbnQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnc3BlY2lhbE9yVW5hc3NpZ25lZCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdzdWJMZW1tYU9yKHVuKWxhYmVsbGVkU3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ2NvbW1hVGhlbihUeXBlZClWYXJpYWJsZSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJ2NvbnN0cnVjdG9yTmFtZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICd2YXJpYWJsZU5hbWUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnKHR5cGVkKVZhcmlhYmxlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3R5cGUocylEZWNsYXJhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICd0eXBlZENvbnN0cnVjdG9yKHMpRGVjbGFyYXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnKHR5cGVkKVZhcmlhYmxlKHMpRGVjbGFyYXRpb24nOiBUcmFuc3BhcmVudE5vZGVcbiAgICB9LCBtYXBwaW5ncyk7XG5cbiAgICBjb25zdCBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=