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
    MissingNode = require('./node/missing'),
    TransparentNode = require('./node/transparent'),
    SecondChildNode = require('./node/secondChild'),
    MissingFirstChildNode = require('./node/missingFirstChild');

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromNothing',
    value: function fromNothing() {
      var lines = BNFLexer.linesFromGrammar(grammar),
          terminalSymbolsRegExpPattern = FlorenceLexer.terminalSymbolsRegExpPattern(),
          significantTokenTypes = FlorenceLexer.significantTokenTypes(),
          mappings = {
        'part': TransparentNode,
        'label': TransparentNode,
        'rule': MissingFirstChildNode,
        'premise': SecondChildNode,
        'conclusion': MissingFirstChildNode,
        'endsOfLines': MissingNode,
        'commaThenLabel': SecondChildNode,
        'parenthesisedLabels': SecondChildNode,
        '(labelled)statement': TransparentNode
      },
          productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJNaXNzaW5nTm9kZSIsIlRyYW5zcGFyZW50Tm9kZSIsIlNlY29uZENoaWxkTm9kZSIsIk1pc3NpbmdGaXJzdENoaWxkTm9kZSIsIkZsb3JlbmNlUGFyc2VyIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImZsb3JlbmNlUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLFdBQVdGLE9BQU9FLFFBRHRCO0FBQUEsSUFFSUMsZ0JBQWdCSCxPQUFPRyxhQUYzQjs7QUFJQSxJQUFJQyxVQUFVSCxRQUFRLFdBQVIsQ0FBZDtBQUFBLElBQ0lJLFlBQVlKLFFBQVEsZUFBUixDQURoQjtBQUFBLElBRUlLLGVBQWVMLFFBQVEsa0JBQVIsQ0FGbkI7QUFBQSxJQUdJTSxjQUFjTixRQUFRLGdCQUFSLENBSGxCO0FBQUEsSUFJSU8sa0JBQWtCUCxRQUFRLG9CQUFSLENBSnRCO0FBQUEsSUFLSVEsa0JBQWtCUixRQUFRLG9CQUFSLENBTHRCO0FBQUEsSUFNSVMsd0JBQXdCVCxRQUFRLDBCQUFSLENBTjVCOztJQVFNVSxjOzs7Ozs7Ozs7OztrQ0FDaUI7QUFDbkIsVUFBSUMsUUFBUVYsU0FBU1csZ0JBQVQsQ0FBMEJULE9BQTFCLENBQVo7QUFBQSxVQUNJVSwrQkFBK0JYLGNBQWNXLDRCQUFkLEVBRG5DO0FBQUEsVUFFSUMsd0JBQXdCWixjQUFjWSxxQkFBZCxFQUY1QjtBQUFBLFVBR0lDLFdBQVc7QUFDVCxnQkFBUVIsZUFEQztBQUVULGlCQUFTQSxlQUZBO0FBR1QsZ0JBQVFFLHFCQUhDO0FBSVQsbUJBQVdELGVBSkY7QUFLVCxzQkFBY0MscUJBTEw7QUFNVCx1QkFBZUgsV0FOTjtBQU9ULDBCQUFrQkUsZUFQVDtBQVFULCtCQUF1QkEsZUFSZDtBQVNULCtCQUF1QkQ7QUFUZCxPQUhmO0FBQUEsVUFjSVMsY0FBY1osVUFBVWEsS0FBVixDQUFnQk4sS0FBaEIsRUFBdUJFLDRCQUF2QixFQUFxREMscUJBQXJELEVBQTRFQyxRQUE1RSxDQWRsQjtBQUFBLFVBZUlHLGlCQUFpQixJQUFJUixjQUFKLENBQW1CTSxXQUFuQixDQWZyQjs7QUFpQkEsYUFBT0UsY0FBUDtBQUNEOzs7O0VBcEIwQmIsWTs7QUF1QjdCYyxPQUFPQyxPQUFQLEdBQWlCVixjQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBCTkZMZXhlciA9IGxleGVycy5CTkZMZXhlcixcbiAgICBGbG9yZW5jZUxleGVyID0gbGV4ZXJzLkZsb3JlbmNlTGV4ZXI7XG5cbnZhciBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICBNaXNzaW5nTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9taXNzaW5nJyksXG4gICAgVHJhbnNwYXJlbnROb2RlID0gcmVxdWlyZSgnLi9ub2RlL3RyYW5zcGFyZW50JyksXG4gICAgU2Vjb25kQ2hpbGROb2RlID0gcmVxdWlyZSgnLi9ub2RlL3NlY29uZENoaWxkJyksXG4gICAgTWlzc2luZ0ZpcnN0Q2hpbGROb2RlID0gcmVxdWlyZSgnLi9ub2RlL21pc3NpbmdGaXJzdENoaWxkJyk7XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIHZhciBsaW5lcyA9IEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBGbG9yZW5jZUxleGVyLnRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gRmxvcmVuY2VMZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXMoKSxcbiAgICAgICAgbWFwcGluZ3MgPSB7XG4gICAgICAgICAgJ3BhcnQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAgICAgJ2xhYmVsJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgICAgICdydWxlJzogTWlzc2luZ0ZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICdwcmVtaXNlJzogU2Vjb25kQ2hpbGROb2RlLFxuICAgICAgICAgICdjb25jbHVzaW9uJzogTWlzc2luZ0ZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgICdlbmRzT2ZMaW5lcyc6IE1pc3NpbmdOb2RlLFxuICAgICAgICAgICdjb21tYVRoZW5MYWJlbCc6IFNlY29uZENoaWxkTm9kZSxcbiAgICAgICAgICAncGFyZW50aGVzaXNlZExhYmVscyc6IFNlY29uZENoaWxkTm9kZSxcbiAgICAgICAgICAnKGxhYmVsbGVkKXN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZVxuICAgICAgICB9LFxuICAgICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuIl19