'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easyui = require('easyui'),
    lexers = require('occam-lexers'),
    Div = easyui.Div,
    BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var NonBasicExample = require('./nonBasicExample'),
    Parser = require('../../es6/parser'),
    BNFParser = require('../../es6/bnfParser'),
    PreProcessor = require('../../es6/preprocessor'),
    grammar = require('../../es6/grammar/florence');

var preprocessor = new PreProcessor(),
    lexer = undefined,
    parser = undefined,
    containerDivSelector = 'div.container',
    containerDiv = new Div(containerDivSelector);

var FlorenceExample = function (_NonBasicExample) {
    _inherits(FlorenceExample, _NonBasicExample);

    function FlorenceExample() {
        _classCallCheck(this, FlorenceExample);

        return _possibleConstructorReturn(this, (FlorenceExample.__proto__ || Object.getPrototypeOf(FlorenceExample)).apply(this, arguments));
    }

    _createClass(FlorenceExample, null, [{
        key: 'run',
        value: function run() {
            lexer = FlorenceLexer.fromNothing();

            var grammarTextAreaValue = grammar,
                ///
            lines = BNFLexer.linesFromGrammar(grammar),
                terminalSymbolsRegExpPattern = lexer.terminalSymbolsRegExpPattern(),
                significantTokenTypes = lexer.significantTokenTypes(),
                mappings = {},
                productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings);

            parser = new Parser(productions);

            NonBasicExample.grammarTextArea.setValue(grammarTextAreaValue);

            NonBasicExample.contentTextArea.onChange(function () {
                NonBasicExample.updateParseTree(preprocessor, lexer, parser);
            });

            containerDiv.removeClass('hidden');
        }
    }]);

    return FlorenceExample;
}(NonBasicExample);

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mbG9yZW5jZUV4YW1wbGUuanMiXSwibmFtZXMiOlsiZWFzeXVpIiwicmVxdWlyZSIsImxleGVycyIsIkRpdiIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsIk5vbkJhc2ljRXhhbXBsZSIsIlBhcnNlciIsIkJORlBhcnNlciIsIlByZVByb2Nlc3NvciIsImdyYW1tYXIiLCJwcmVwcm9jZXNzb3IiLCJsZXhlciIsInVuZGVmaW5lZCIsInBhcnNlciIsImNvbnRhaW5lckRpdlNlbGVjdG9yIiwiY29udGFpbmVyRGl2IiwiRmxvcmVuY2VFeGFtcGxlIiwiZnJvbU5vdGhpbmciLCJncmFtbWFyVGV4dEFyZWFWYWx1ZSIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJncmFtbWFyVGV4dEFyZWEiLCJzZXRWYWx1ZSIsImNvbnRlbnRUZXh0QXJlYSIsIm9uQ2hhbmdlIiwidXBkYXRlUGFyc2VUcmVlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsU0FBU0QsUUFBUSxjQUFSLENBRGI7QUFBQSxJQUVJRSxNQUFNSCxPQUFPRyxHQUZqQjtBQUFBLElBR0lDLFdBQVdGLE9BQU9FLFFBSHRCO0FBQUEsSUFJSUMsZ0JBQWdCSCxPQUFPRyxhQUozQjs7QUFNQSxJQUFJQyxrQkFBa0JMLFFBQVEsbUJBQVIsQ0FBdEI7QUFBQSxJQUNJTSxTQUFTTixRQUFTLGtCQUFULENBRGI7QUFBQSxJQUVJTyxZQUFZUCxRQUFTLHFCQUFULENBRmhCO0FBQUEsSUFHSVEsZUFBZVIsUUFBUSx3QkFBUixDQUhuQjtBQUFBLElBSUlTLFVBQVVULFFBQVMsNEJBQVQsQ0FKZDs7QUFNQSxJQUFJVSxlQUFlLElBQUlGLFlBQUosRUFBbkI7QUFBQSxJQUNJRyxRQUFRQyxTQURaO0FBQUEsSUFFSUMsU0FBU0QsU0FGYjtBQUFBLElBR0lFLHVCQUF1QixlQUgzQjtBQUFBLElBSUlDLGVBQWUsSUFBSWIsR0FBSixDQUFRWSxvQkFBUixDQUpuQjs7SUFNTUUsZTs7Ozs7Ozs7Ozs7OEJBQ1M7QUFDWEwsb0JBQVFQLGNBQWNhLFdBQWQsRUFBUjs7QUFFQSxnQkFBSUMsdUJBQXVCVCxPQUEzQjtBQUFBLGdCQUFvQztBQUNoQ1Usb0JBQVFoQixTQUFTaUIsZ0JBQVQsQ0FBMEJYLE9BQTFCLENBRFo7QUFBQSxnQkFFSVksK0JBQStCVixNQUFNVSw0QkFBTixFQUZuQztBQUFBLGdCQUdJQyx3QkFBd0JYLE1BQU1XLHFCQUFOLEVBSDVCO0FBQUEsZ0JBSUlDLFdBQVcsRUFKZjtBQUFBLGdCQUtJQyxjQUFjakIsVUFBVWtCLEtBQVYsQ0FBZ0JOLEtBQWhCLEVBQXVCRSw0QkFBdkIsRUFBcURDLHFCQUFyRCxFQUE0RUMsUUFBNUUsQ0FMbEI7O0FBT0FWLHFCQUFTLElBQUlQLE1BQUosQ0FBV2tCLFdBQVgsQ0FBVDs7QUFFQW5CLDRCQUFnQnFCLGVBQWhCLENBQWdDQyxRQUFoQyxDQUF5Q1Qsb0JBQXpDOztBQUVBYiw0QkFBZ0J1QixlQUFoQixDQUFnQ0MsUUFBaEMsQ0FBeUMsWUFBVztBQUNsRHhCLGdDQUFnQnlCLGVBQWhCLENBQWdDcEIsWUFBaEMsRUFBOENDLEtBQTlDLEVBQXFERSxNQUFyRDtBQUNELGFBRkQ7O0FBSUFFLHlCQUFhZ0IsV0FBYixDQUF5QixRQUF6QjtBQUNEOzs7O0VBcEIyQjFCLGU7O0FBdUI5QjJCLE9BQU9DLE9BQVAsR0FBaUJqQixlQUFqQiIsImZpbGUiOiJmbG9yZW5jZUV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBEaXYgPSBlYXN5dWkuRGl2LFxuICAgIEJORkxleGVyID0gbGV4ZXJzLkJORkxleGVyLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSBsZXhlcnMuRmxvcmVuY2VMZXhlcjtcblxudmFyIE5vbkJhc2ljRXhhbXBsZSA9IHJlcXVpcmUoJy4vbm9uQmFzaWNFeGFtcGxlJyksXG4gICAgUGFyc2VyID0gcmVxdWlyZSAoJy4uLy4uL2VzNi9wYXJzZXInKSxcbiAgICBCTkZQYXJzZXIgPSByZXF1aXJlICgnLi4vLi4vZXM2L2JuZlBhcnNlcicpLFxuICAgIFByZVByb2Nlc3NvciA9IHJlcXVpcmUoJy4uLy4uL2VzNi9wcmVwcm9jZXNzb3InKSxcbiAgICBncmFtbWFyID0gcmVxdWlyZSAoJy4uLy4uL2VzNi9ncmFtbWFyL2Zsb3JlbmNlJyk7XG5cbnZhciBwcmVwcm9jZXNzb3IgPSBuZXcgUHJlUHJvY2Vzc29yKCksXG4gICAgbGV4ZXIgPSB1bmRlZmluZWQsXG4gICAgcGFyc2VyID0gdW5kZWZpbmVkLFxuICAgIGNvbnRhaW5lckRpdlNlbGVjdG9yID0gJ2Rpdi5jb250YWluZXInLFxuICAgIGNvbnRhaW5lckRpdiA9IG5ldyBEaXYoY29udGFpbmVyRGl2U2VsZWN0b3IpO1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGUgZXh0ZW5kcyBOb25CYXNpY0V4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tTm90aGluZygpO1xuXG4gICAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gZ3JhbW1hciwgLy8vXG4gICAgICAgIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGxleGVyLnRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gbGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzKCksXG4gICAgICAgIG1hcHBpbmdzID0ge30sXG4gICAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKTtcblxuICAgIHBhcnNlciA9IG5ldyBQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgTm9uQmFzaWNFeGFtcGxlLmdyYW1tYXJUZXh0QXJlYS5zZXRWYWx1ZShncmFtbWFyVGV4dEFyZWFWYWx1ZSk7XG5cbiAgICBOb25CYXNpY0V4YW1wbGUuY29udGVudFRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgTm9uQmFzaWNFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShwcmVwcm9jZXNzb3IsIGxleGVyLCBwYXJzZXIpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyRGl2LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcbiJdfQ==