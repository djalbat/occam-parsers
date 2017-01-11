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
    SecondChildNode = require('./node/secondChild');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJNaXNzaW5nTm9kZSIsIlRyYW5zcGFyZW50Tm9kZSIsIlNlY29uZENoaWxkTm9kZSIsIkZsb3JlbmNlUGFyc2VyIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImZsb3JlbmNlUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLFdBQVdGLE9BQU9FLFFBRHRCO0FBQUEsSUFFSUMsZ0JBQWdCSCxPQUFPRyxhQUYzQjs7QUFJQSxJQUFJQyxVQUFVSCxRQUFRLFdBQVIsQ0FBZDtBQUFBLElBQ0lJLFlBQVlKLFFBQVEsZUFBUixDQURoQjtBQUFBLElBRUlLLGVBQWVMLFFBQVEsa0JBQVIsQ0FGbkI7QUFBQSxJQUdJTSxjQUFjTixRQUFRLGdCQUFSLENBSGxCO0FBQUEsSUFJSU8sa0JBQWtCUCxRQUFRLG9CQUFSLENBSnRCO0FBQUEsSUFLSVEsa0JBQWtCUixRQUFRLG9CQUFSLENBTHRCOztJQU9NUyxjOzs7Ozs7Ozs7OztzQ0FDaUI7QUFDbkIsZ0JBQUlDLFFBQVFULFNBQVNVLGdCQUFULENBQTBCUixPQUExQixDQUFaO0FBQUEsZ0JBQ0lTLCtCQUErQlYsY0FBY1UsNEJBQWQsRUFEbkM7QUFBQSxnQkFFSUMsd0JBQXdCWCxjQUFjVyxxQkFBZCxFQUY1QjtBQUFBLGdCQUdJQyxXQUFXO0FBQ1Qsd0JBQVFQLGVBREM7QUFFVCwrQkFBZUQsV0FGTjtBQUdULGtDQUFrQkUsZUFIVDtBQUlULHVDQUF1QkEsZUFKZDtBQUtULHVDQUF1QkQ7QUFMZCxhQUhmO0FBQUEsZ0JBVUlRLGNBQWNYLFVBQVVZLEtBQVYsQ0FBZ0JOLEtBQWhCLEVBQXVCRSw0QkFBdkIsRUFBcURDLHFCQUFyRCxFQUE0RUMsUUFBNUUsQ0FWbEI7QUFBQSxnQkFXSUcsaUJBQWlCLElBQUlSLGNBQUosQ0FBbUJNLFdBQW5CLENBWHJCOztBQWFBLG1CQUFPRSxjQUFQO0FBQ0Q7Ozs7RUFoQjBCWixZOztBQW1CN0JhLE9BQU9DLE9BQVAsR0FBaUJWLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEJORkxleGVyID0gbGV4ZXJzLkJORkxleGVyLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSBsZXhlcnMuRmxvcmVuY2VMZXhlcjtcblxudmFyIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgIE1pc3NpbmdOb2RlID0gcmVxdWlyZSgnLi9ub2RlL21pc3NpbmcnKSxcbiAgICBUcmFuc3BhcmVudE5vZGUgPSByZXF1aXJlKCcuL25vZGUvdHJhbnNwYXJlbnQnKSxcbiAgICBTZWNvbmRDaGlsZE5vZGUgPSByZXF1aXJlKCcuL25vZGUvc2Vjb25kQ2hpbGQnKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgdmFyIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IEZsb3JlbmNlTGV4ZXIudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpLFxuICAgICAgICBtYXBwaW5ncyA9IHtcbiAgICAgICAgICAncGFydCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAnZW5kc09mTGluZXMnOiBNaXNzaW5nTm9kZSxcbiAgICAgICAgICAnY29tbWFUaGVuTGFiZWwnOiBTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAgICAgJ3BhcmVudGhlc2lzZWRMYWJlbHMnOiBTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAgICAgJyhsYWJlbGxlZClzdGF0ZW1lbnQnOiBUcmFuc3BhcmVudE5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIucGFyc2UobGluZXMsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpLFxuICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiJdfQ==