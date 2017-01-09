'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    BasicLexer = lexers.BasicLexer;

var BNFParser = require('../../es6/bnf/parser'),
    CommonParser = require('../../es6/common/parser');

var BasicParser = function (_CommonParser) {
    _inherits(BasicParser, _CommonParser);

    function BasicParser() {
        _classCallCheck(this, BasicParser);

        return _possibleConstructorReturn(this, (BasicParser.__proto__ || Object.getPrototypeOf(BasicParser)).apply(this, arguments));
    }

    _createClass(BasicParser, null, [{
        key: 'fromGrammarAndTerminalSymbolsRegExpPattern',
        value: function fromGrammarAndTerminalSymbolsRegExpPattern(grammar, terminalSymbolsRegExpPattern) {
            var lines = BNFLexer.linesFromGrammar(grammar),
                significantTokenTypes = BasicLexer.significantTokenTypes(),
                mappings = {},
                productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings),
                basicParser = new BasicParser(productions);

            return basicParser;
        }
    }]);

    return BasicParser;
}(CommonParser);

module.exports = BasicParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiQmFzaWNMZXhlciIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJhc2ljUGFyc2VyIiwiZ3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJiYXNpY1BhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0QjtBQUFBLElBRUlDLGFBQWFILE9BQU9HLFVBRnhCOztBQUlBLElBQUlDLFlBQVlILFFBQVEsc0JBQVIsQ0FBaEI7QUFBQSxJQUNJSSxlQUFlSixRQUFRLHlCQUFSLENBRG5COztJQUdNSyxXOzs7Ozs7Ozs7OzttRUFDOENDLE8sRUFBU0MsNEIsRUFBOEI7QUFDdkYsZ0JBQUlDLFFBQVFQLFNBQVNRLGdCQUFULENBQTBCSCxPQUExQixDQUFaO0FBQUEsZ0JBQ0lJLHdCQUF3QlIsV0FBV1EscUJBQVgsRUFENUI7QUFBQSxnQkFFSUMsV0FBVyxFQUZmO0FBQUEsZ0JBR0lDLGNBQWNULFVBQVVVLEtBQVYsQ0FBZ0JMLEtBQWhCLEVBQXVCRCw0QkFBdkIsRUFBcURHLHFCQUFyRCxFQUE0RUMsUUFBNUUsQ0FIbEI7QUFBQSxnQkFJSUcsY0FBYyxJQUFJVCxXQUFKLENBQWdCTyxXQUFoQixDQUpsQjs7QUFNQSxtQkFBT0UsV0FBUDtBQUNEOzs7O0VBVHVCVixZOztBQVkxQlcsT0FBT0MsT0FBUCxHQUFpQlgsV0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgQk5GTGV4ZXIgPSBsZXhlcnMuQk5GTGV4ZXIsXG4gICAgQmFzaWNMZXhlciA9IGxleGVycy5CYXNpY0xleGVyO1xuXG52YXIgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vLi4vZXM2L2JuZi9wYXJzZXInKSxcbiAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi8uLi9lczYvY29tbW9uL3BhcnNlcicpO1xuXG5jbGFzcyBCYXNpY1BhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tR3JhbW1hckFuZFRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oZ3JhbW1hciwgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybikge1xuICAgIHZhciBsaW5lcyA9IEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEJhc2ljTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzKCksXG4gICAgICAgIG1hcHBpbmdzID0ge30sXG4gICAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNQYXJzZXI7XG4iXX0=