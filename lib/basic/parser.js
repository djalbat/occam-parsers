'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    BasicLexer = lexers.BasicLexer;

var BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiQmFzaWNMZXhlciIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJhc2ljUGFyc2VyIiwiZ3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJiYXNpY1BhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0QjtBQUFBLElBRUlDLGFBQWFILE9BQU9HLFVBRnhCOztBQUlBLElBQUlDLFlBQVlILFFBQVEsZUFBUixDQUFoQjtBQUFBLElBQ0lJLGVBQWVKLFFBQVEsa0JBQVIsQ0FEbkI7O0lBR01LLFc7Ozs7Ozs7Ozs7O21FQUM4Q0MsTyxFQUFTQyw0QixFQUE4QjtBQUN2RixnQkFBSUMsUUFBUVAsU0FBU1EsZ0JBQVQsQ0FBMEJILE9BQTFCLENBQVo7QUFBQSxnQkFDSUksd0JBQXdCUixXQUFXUSxxQkFBWCxFQUQ1QjtBQUFBLGdCQUVJQyxXQUFXLEVBRmY7QUFBQSxnQkFHSUMsY0FBY1QsVUFBVVUsS0FBVixDQUFnQkwsS0FBaEIsRUFBdUJELDRCQUF2QixFQUFxREcscUJBQXJELEVBQTRFQyxRQUE1RSxDQUhsQjtBQUFBLGdCQUlJRyxjQUFjLElBQUlULFdBQUosQ0FBZ0JPLFdBQWhCLENBSmxCOztBQU1BLG1CQUFPRSxXQUFQO0FBQ0Q7Ozs7RUFUdUJWLFk7O0FBWTFCVyxPQUFPQyxPQUFQLEdBQWlCWCxXQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBCTkZMZXhlciA9IGxleGVycy5CTkZMZXhlcixcbiAgICBCYXNpY0xleGVyID0gbGV4ZXJzLkJhc2ljTGV4ZXI7XG5cbnZhciBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpO1xuXG5jbGFzcyBCYXNpY1BhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tR3JhbW1hckFuZFRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oZ3JhbW1hciwgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybikge1xuICAgIHZhciBsaW5lcyA9IEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEJhc2ljTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzKCksXG4gICAgICAgIG1hcHBpbmdzID0ge30sXG4gICAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNQYXJzZXI7XG4iXX0=