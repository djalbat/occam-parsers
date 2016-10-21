'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easyui = require('easyui'),
    lexers = require('occam-lexers'),
    Div = easyui.Div,
    BNFLexer = lexers.BNFLexer,
    GallinaLexer = lexers.GallinaLexer;

var NonBasicExample = require('./nonBasicExample'),
    Parser = require('../../es6/parser'),
    BNFParser = require('../../es6/bnfParser'),
    grammar = require('../../es6/grammar/gallina');

var preprocessor = undefined,
    lexer = undefined,
    parser = undefined,
    containerDivSelector = 'div.container',
    containerDiv = new Div(containerDivSelector);

var GallinaExample = function (_NonBasicExample) {
    _inherits(GallinaExample, _NonBasicExample);

    function GallinaExample() {
        _classCallCheck(this, GallinaExample);

        return _possibleConstructorReturn(this, (GallinaExample.__proto__ || Object.getPrototypeOf(GallinaExample)).apply(this, arguments));
    }

    _createClass(GallinaExample, null, [{
        key: 'run',
        value: function run() {
            lexer = GallinaLexer.fromNothing();

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

    return GallinaExample;
}(NonBasicExample);

module.exports = GallinaExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9nYWxsaW5hRXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJlYXN5dWkiLCJyZXF1aXJlIiwibGV4ZXJzIiwiRGl2IiwiQk5GTGV4ZXIiLCJHYWxsaW5hTGV4ZXIiLCJOb25CYXNpY0V4YW1wbGUiLCJQYXJzZXIiLCJCTkZQYXJzZXIiLCJncmFtbWFyIiwicHJlcHJvY2Vzc29yIiwidW5kZWZpbmVkIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250YWluZXJEaXZTZWxlY3RvciIsImNvbnRhaW5lckRpdiIsIkdhbGxpbmFFeGFtcGxlIiwiZnJvbU5vdGhpbmciLCJncmFtbWFyVGV4dEFyZWFWYWx1ZSIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJncmFtbWFyVGV4dEFyZWEiLCJzZXRWYWx1ZSIsImNvbnRlbnRUZXh0QXJlYSIsIm9uQ2hhbmdlIiwidXBkYXRlUGFyc2VUcmVlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsU0FBU0QsUUFBUSxjQUFSLENBRGI7QUFBQSxJQUVJRSxNQUFNSCxPQUFPRyxHQUZqQjtBQUFBLElBR0lDLFdBQVdGLE9BQU9FLFFBSHRCO0FBQUEsSUFJSUMsZUFBZUgsT0FBT0csWUFKMUI7O0FBTUEsSUFBSUMsa0JBQWtCTCxRQUFRLG1CQUFSLENBQXRCO0FBQUEsSUFDSU0sU0FBU04sUUFBUyxrQkFBVCxDQURiO0FBQUEsSUFFSU8sWUFBWVAsUUFBUyxxQkFBVCxDQUZoQjtBQUFBLElBR0lRLFVBQVVSLFFBQVMsMkJBQVQsQ0FIZDs7QUFLQSxJQUFJUyxlQUFlQyxTQUFuQjtBQUFBLElBQ0lDLFFBQVFELFNBRFo7QUFBQSxJQUVJRSxTQUFTRixTQUZiO0FBQUEsSUFHSUcsdUJBQXVCLGVBSDNCO0FBQUEsSUFJSUMsZUFBZSxJQUFJWixHQUFKLENBQVFXLG9CQUFSLENBSm5COztJQU1NRSxjOzs7Ozs7Ozs7Ozs4QkFDUztBQUNYSixvQkFBUVAsYUFBYVksV0FBYixFQUFSOztBQUVBLGdCQUFJQyx1QkFBdUJULE9BQTNCO0FBQUEsZ0JBQW9DO0FBQ2hDVSxvQkFBUWYsU0FBU2dCLGdCQUFULENBQTBCWCxPQUExQixDQURaO0FBQUEsZ0JBRUlZLCtCQUErQlQsTUFBTVMsNEJBQU4sRUFGbkM7QUFBQSxnQkFHSUMsd0JBQXdCVixNQUFNVSxxQkFBTixFQUg1QjtBQUFBLGdCQUlJQyxXQUFXLEVBSmY7QUFBQSxnQkFLSUMsY0FBY2hCLFVBQVVpQixLQUFWLENBQWdCTixLQUFoQixFQUF1QkUsNEJBQXZCLEVBQXFEQyxxQkFBckQsRUFBNEVDLFFBQTVFLENBTGxCOztBQU9BVixxQkFBUyxJQUFJTixNQUFKLENBQVdpQixXQUFYLENBQVQ7O0FBRUFsQiw0QkFBZ0JvQixlQUFoQixDQUFnQ0MsUUFBaEMsQ0FBeUNULG9CQUF6Qzs7QUFFQVosNEJBQWdCc0IsZUFBaEIsQ0FBZ0NDLFFBQWhDLENBQXlDLFlBQVc7QUFDbER2QixnQ0FBZ0J3QixlQUFoQixDQUFnQ3BCLFlBQWhDLEVBQThDRSxLQUE5QyxFQUFxREMsTUFBckQ7QUFDRCxhQUZEOztBQUlBRSx5QkFBYWdCLFdBQWIsQ0FBeUIsUUFBekI7QUFDRDs7OztFQXBCMEJ6QixlOztBQXVCN0IwQixPQUFPQyxPQUFQLEdBQWlCakIsY0FBakIiLCJmaWxlIjoiZ2FsbGluYUV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBEaXYgPSBlYXN5dWkuRGl2LFxuICAgIEJORkxleGVyID0gbGV4ZXJzLkJORkxleGVyLFxuICAgIEdhbGxpbmFMZXhlciA9IGxleGVycy5HYWxsaW5hTGV4ZXI7XG5cbnZhciBOb25CYXNpY0V4YW1wbGUgPSByZXF1aXJlKCcuL25vbkJhc2ljRXhhbXBsZScpLFxuICAgIFBhcnNlciA9IHJlcXVpcmUgKCcuLi8uLi9lczYvcGFyc2VyJyksXG4gICAgQk5GUGFyc2VyID0gcmVxdWlyZSAoJy4uLy4uL2VzNi9ibmZQYXJzZXInKSxcbiAgICBncmFtbWFyID0gcmVxdWlyZSAoJy4uLy4uL2VzNi9ncmFtbWFyL2dhbGxpbmEnKTtcblxudmFyIHByZXByb2Nlc3NvciA9IHVuZGVmaW5lZCxcbiAgICBsZXhlciA9IHVuZGVmaW5lZCxcbiAgICBwYXJzZXIgPSB1bmRlZmluZWQsXG4gICAgY29udGFpbmVyRGl2U2VsZWN0b3IgPSAnZGl2LmNvbnRhaW5lcicsXG4gICAgY29udGFpbmVyRGl2ID0gbmV3IERpdihjb250YWluZXJEaXZTZWxlY3Rvcik7XG5cbmNsYXNzIEdhbGxpbmFFeGFtcGxlIGV4dGVuZHMgTm9uQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBsZXhlciA9IEdhbGxpbmFMZXhlci5mcm9tTm90aGluZygpO1xuXG4gICAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gZ3JhbW1hciwgLy8vXG4gICAgICAgIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGxleGVyLnRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gbGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzKCksXG4gICAgICAgIG1hcHBpbmdzID0ge30sXG4gICAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKTtcblxuICAgIHBhcnNlciA9IG5ldyBQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgTm9uQmFzaWNFeGFtcGxlLmdyYW1tYXJUZXh0QXJlYS5zZXRWYWx1ZShncmFtbWFyVGV4dEFyZWFWYWx1ZSk7XG5cbiAgICBOb25CYXNpY0V4YW1wbGUuY29udGVudFRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgTm9uQmFzaWNFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShwcmVwcm9jZXNzb3IsIGxleGVyLCBwYXJzZXIpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyRGl2LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFFeGFtcGxlO1xuIl19