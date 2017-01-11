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
    MissingFirstChildNode = require('./node/missingFirstChild'),
    TransparentSecondChildNode = require('./node/transparentSecondChild'),
    TransparentMissingFirstChildNode = require('./node/transparentMissingFirstChild');

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
        'premise': TransparentSecondChildNode,
        'premises': TransparentMissingFirstChildNode,
        'conclusion': MissingFirstChildNode,
        'endsOfLines': MissingNode,
        'commaThenLabel': TransparentSecondChildNode,
        'parenthesisedLabels': TransparentSecondChildNode,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJNaXNzaW5nTm9kZSIsIlRyYW5zcGFyZW50Tm9kZSIsIk1pc3NpbmdGaXJzdENoaWxkTm9kZSIsIlRyYW5zcGFyZW50U2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRNaXNzaW5nRmlyc3RDaGlsZE5vZGUiLCJGbG9yZW5jZVBhcnNlciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJmbG9yZW5jZVBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0QjtBQUFBLElBRUlDLGdCQUFnQkgsT0FBT0csYUFGM0I7O0FBSUEsSUFBSUMsVUFBVUgsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJSSxZQUFZSixRQUFRLGVBQVIsQ0FEaEI7QUFBQSxJQUVJSyxlQUFlTCxRQUFRLGtCQUFSLENBRm5CO0FBQUEsSUFHSU0sY0FBY04sUUFBUSxnQkFBUixDQUhsQjtBQUFBLElBSUlPLGtCQUFrQlAsUUFBUSxvQkFBUixDQUp0QjtBQUFBLElBS0lRLHdCQUF3QlIsUUFBUSwwQkFBUixDQUw1QjtBQUFBLElBTUlTLDZCQUE2QlQsUUFBUSwrQkFBUixDQU5qQztBQUFBLElBT0lVLG1DQUFtQ1YsUUFBUSxxQ0FBUixDQVB2Qzs7SUFTTVcsYzs7Ozs7Ozs7Ozs7a0NBQ2lCO0FBQ25CLFVBQUlDLFFBQVFYLFNBQVNZLGdCQUFULENBQTBCVixPQUExQixDQUFaO0FBQUEsVUFDSVcsK0JBQStCWixjQUFjWSw0QkFBZCxFQURuQztBQUFBLFVBRUlDLHdCQUF3QmIsY0FBY2EscUJBQWQsRUFGNUI7QUFBQSxVQUdJQyxXQUFXO0FBQ1QsZ0JBQVFULGVBREM7QUFFVCxpQkFBU0EsZUFGQTtBQUdULGdCQUFRQyxxQkFIQztBQUlULG1CQUFXQywwQkFKRjtBQUtULG9CQUFZQyxnQ0FMSDtBQU1ULHNCQUFjRixxQkFOTDtBQU9ULHVCQUFlRixXQVBOO0FBUVQsMEJBQWtCRywwQkFSVDtBQVNULCtCQUF1QkEsMEJBVGQ7QUFVVCwrQkFBdUJGO0FBVmQsT0FIZjtBQUFBLFVBZUlVLGNBQWNiLFVBQVVjLEtBQVYsQ0FBZ0JOLEtBQWhCLEVBQXVCRSw0QkFBdkIsRUFBcURDLHFCQUFyRCxFQUE0RUMsUUFBNUUsQ0FmbEI7QUFBQSxVQWdCSUcsaUJBQWlCLElBQUlSLGNBQUosQ0FBbUJNLFdBQW5CLENBaEJyQjs7QUFrQkEsYUFBT0UsY0FBUDtBQUNEOzs7O0VBckIwQmQsWTs7QUF3QjdCZSxPQUFPQyxPQUFQLEdBQWlCVixjQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBCTkZMZXhlciA9IGxleGVycy5CTkZMZXhlcixcbiAgICBGbG9yZW5jZUxleGVyID0gbGV4ZXJzLkZsb3JlbmNlTGV4ZXI7XG5cbnZhciBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICBNaXNzaW5nTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9taXNzaW5nJyksXG4gICAgVHJhbnNwYXJlbnROb2RlID0gcmVxdWlyZSgnLi9ub2RlL3RyYW5zcGFyZW50JyksXG4gICAgTWlzc2luZ0ZpcnN0Q2hpbGROb2RlID0gcmVxdWlyZSgnLi9ub2RlL21pc3NpbmdGaXJzdENoaWxkJyksXG4gICAgVHJhbnNwYXJlbnRTZWNvbmRDaGlsZE5vZGUgPSByZXF1aXJlKCcuL25vZGUvdHJhbnNwYXJlbnRTZWNvbmRDaGlsZCcpLFxuICAgIFRyYW5zcGFyZW50TWlzc2luZ0ZpcnN0Q2hpbGROb2RlID0gcmVxdWlyZSgnLi9ub2RlL3RyYW5zcGFyZW50TWlzc2luZ0ZpcnN0Q2hpbGQnKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgdmFyIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IEZsb3JlbmNlTGV4ZXIudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpLFxuICAgICAgICBtYXBwaW5ncyA9IHtcbiAgICAgICAgICAncGFydCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAnbGFiZWwnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAgICAgJ3J1bGUnOiBNaXNzaW5nRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ3ByZW1pc2UnOiBUcmFuc3BhcmVudFNlY29uZENoaWxkTm9kZSxcbiAgICAgICAgICAncHJlbWlzZXMnOiBUcmFuc3BhcmVudE1pc3NpbmdGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnY29uY2x1c2lvbic6IE1pc3NpbmdGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnZW5kc09mTGluZXMnOiBNaXNzaW5nTm9kZSxcbiAgICAgICAgICAnY29tbWFUaGVuTGFiZWwnOiBUcmFuc3BhcmVudFNlY29uZENoaWxkTm9kZSxcbiAgICAgICAgICAncGFyZW50aGVzaXNlZExhYmVscyc6IFRyYW5zcGFyZW50U2Vjb25kQ2hpbGROb2RlLFxuICAgICAgICAgICcobGFiZWxsZWQpc3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlXG4gICAgICAgIH0sXG4gICAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=