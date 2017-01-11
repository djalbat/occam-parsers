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
    PartNode = require('./node/part'),
    EndsOfLinesNode = require('./node/endsOfLines'),
    CommaThenLabelNode = require('./node/commaThenLabel'),
    ParenthesisedLabelsNode = require('./node/parenthesisedLabels');

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
                part: PartNode,
                endsOfLines: EndsOfLinesNode,
                commaThenLabel: CommaThenLabelNode,
                parenthesisedLabels: ParenthesisedLabelsNode
            },
                productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings),
                florenceParser = new FlorenceParser(productions);

            return florenceParser;
        }
    }]);

    return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJQYXJ0Tm9kZSIsIkVuZHNPZkxpbmVzTm9kZSIsIkNvbW1hVGhlbkxhYmVsTm9kZSIsIlBhcmVudGhlc2lzZWRMYWJlbHNOb2RlIiwiRmxvcmVuY2VQYXJzZXIiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwibWFwcGluZ3MiLCJwYXJ0IiwiZW5kc09mTGluZXMiLCJjb21tYVRoZW5MYWJlbCIsInBhcmVudGhlc2lzZWRMYWJlbHMiLCJwcm9kdWN0aW9ucyIsInBhcnNlIiwiZmxvcmVuY2VQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsV0FBV0YsT0FBT0UsUUFEdEI7QUFBQSxJQUVJQyxnQkFBZ0JILE9BQU9HLGFBRjNCOztBQUlBLElBQUlDLFVBQVVILFFBQVEsV0FBUixDQUFkO0FBQUEsSUFDSUksWUFBWUosUUFBUSxlQUFSLENBRGhCO0FBQUEsSUFFSUssZUFBZUwsUUFBUSxrQkFBUixDQUZuQjtBQUFBLElBR0lNLFdBQVdOLFFBQVEsYUFBUixDQUhmO0FBQUEsSUFJSU8sa0JBQWtCUCxRQUFRLG9CQUFSLENBSnRCO0FBQUEsSUFLSVEscUJBQXFCUixRQUFRLHVCQUFSLENBTHpCO0FBQUEsSUFNSVMsMEJBQTBCVCxRQUFRLDRCQUFSLENBTjlCOztJQVFNVSxjOzs7Ozs7Ozs7OztzQ0FDaUI7QUFDbkIsZ0JBQUlDLFFBQVFWLFNBQVNXLGdCQUFULENBQTBCVCxPQUExQixDQUFaO0FBQUEsZ0JBQ0lVLCtCQUErQlgsY0FBY1csNEJBQWQsRUFEbkM7QUFBQSxnQkFFSUMsd0JBQXdCWixjQUFjWSxxQkFBZCxFQUY1QjtBQUFBLGdCQUdJQyxXQUFXO0FBQ1RDLHNCQUFNVixRQURHO0FBRVRXLDZCQUFhVixlQUZKO0FBR1RXLGdDQUFnQlYsa0JBSFA7QUFJVFcscUNBQXFCVjtBQUpaLGFBSGY7QUFBQSxnQkFTSVcsY0FBY2hCLFVBQVVpQixLQUFWLENBQWdCVixLQUFoQixFQUF1QkUsNEJBQXZCLEVBQXFEQyxxQkFBckQsRUFBNEVDLFFBQTVFLENBVGxCO0FBQUEsZ0JBVUlPLGlCQUFpQixJQUFJWixjQUFKLENBQW1CVSxXQUFuQixDQVZyQjs7QUFZQSxtQkFBT0UsY0FBUDtBQUNEOzs7O0VBZjBCakIsWTs7QUFrQjdCa0IsT0FBT0MsT0FBUCxHQUFpQmQsY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgQk5GTGV4ZXIgPSBsZXhlcnMuQk5GTGV4ZXIsXG4gICAgRmxvcmVuY2VMZXhlciA9IGxleGVycy5GbG9yZW5jZUxleGVyO1xuXG52YXIgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgUGFydE5vZGUgPSByZXF1aXJlKCcuL25vZGUvcGFydCcpLFxuICAgIEVuZHNPZkxpbmVzTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9lbmRzT2ZMaW5lcycpLFxuICAgIENvbW1hVGhlbkxhYmVsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9jb21tYVRoZW5MYWJlbCcpLFxuICAgIFBhcmVudGhlc2lzZWRMYWJlbHNOb2RlID0gcmVxdWlyZSgnLi9ub2RlL3BhcmVudGhlc2lzZWRMYWJlbHMnKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgdmFyIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IEZsb3JlbmNlTGV4ZXIudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpLFxuICAgICAgICBtYXBwaW5ncyA9IHtcbiAgICAgICAgICBwYXJ0OiBQYXJ0Tm9kZSxcbiAgICAgICAgICBlbmRzT2ZMaW5lczogRW5kc09mTGluZXNOb2RlLFxuICAgICAgICAgIGNvbW1hVGhlbkxhYmVsOiBDb21tYVRoZW5MYWJlbE5vZGUsXG4gICAgICAgICAgcGFyZW50aGVzaXNlZExhYmVsczogUGFyZW50aGVzaXNlZExhYmVsc05vZGVcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIucGFyc2UobGluZXMsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpLFxuICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiJdfQ==