'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easyui = require('easyui'),
    lexers = require('../../es6/occam-lexers'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9nYWxsaW5hRXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJlYXN5dWkiLCJyZXF1aXJlIiwibGV4ZXJzIiwiRGl2IiwiQk5GTGV4ZXIiLCJHYWxsaW5hTGV4ZXIiLCJOb25CYXNpY0V4YW1wbGUiLCJQYXJzZXIiLCJCTkZQYXJzZXIiLCJncmFtbWFyIiwicHJlcHJvY2Vzc29yIiwidW5kZWZpbmVkIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250YWluZXJEaXZTZWxlY3RvciIsImNvbnRhaW5lckRpdiIsIkdhbGxpbmFFeGFtcGxlIiwiZnJvbU5vdGhpbmciLCJncmFtbWFyVGV4dEFyZWFWYWx1ZSIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJncmFtbWFyVGV4dEFyZWEiLCJzZXRWYWx1ZSIsImNvbnRlbnRUZXh0QXJlYSIsIm9uQ2hhbmdlIiwidXBkYXRlUGFyc2VUcmVlIiwicmVtb3ZlQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsU0FBU0QsUUFBUSx3QkFBUixDQURiO0FBQUEsSUFFSUUsTUFBTUgsT0FBT0csR0FGakI7QUFBQSxJQUdJQyxXQUFXRixPQUFPRSxRQUh0QjtBQUFBLElBSUlDLGVBQWVILE9BQU9HLFlBSjFCOztBQU1BLElBQUlDLGtCQUFrQkwsUUFBUSxtQkFBUixDQUF0QjtBQUFBLElBQ0lNLFNBQVNOLFFBQVMsa0JBQVQsQ0FEYjtBQUFBLElBRUlPLFlBQVlQLFFBQVMscUJBQVQsQ0FGaEI7QUFBQSxJQUdJUSxVQUFVUixRQUFTLDJCQUFULENBSGQ7O0FBS0EsSUFBSVMsZUFBZUMsU0FBbkI7QUFBQSxJQUNJQyxRQUFRRCxTQURaO0FBQUEsSUFFSUUsU0FBU0YsU0FGYjtBQUFBLElBR0lHLHVCQUF1QixlQUgzQjtBQUFBLElBSUlDLGVBQWUsSUFBSVosR0FBSixDQUFRVyxvQkFBUixDQUpuQjs7SUFNTUUsYzs7Ozs7Ozs7Ozs7OEJBQ1M7QUFDWEosb0JBQVFQLGFBQWFZLFdBQWIsRUFBUjs7QUFFQSxnQkFBSUMsdUJBQXVCVCxPQUEzQjtBQUFBLGdCQUFvQztBQUNoQ1Usb0JBQVFmLFNBQVNnQixnQkFBVCxDQUEwQlgsT0FBMUIsQ0FEWjtBQUFBLGdCQUVJWSwrQkFBK0JULE1BQU1TLDRCQUFOLEVBRm5DO0FBQUEsZ0JBR0lDLHdCQUF3QlYsTUFBTVUscUJBQU4sRUFINUI7QUFBQSxnQkFJSUMsV0FBVyxFQUpmO0FBQUEsZ0JBS0lDLGNBQWNoQixVQUFVaUIsS0FBVixDQUFnQk4sS0FBaEIsRUFBdUJFLDRCQUF2QixFQUFxREMscUJBQXJELEVBQTRFQyxRQUE1RSxDQUxsQjs7QUFPQVYscUJBQVMsSUFBSU4sTUFBSixDQUFXaUIsV0FBWCxDQUFUOztBQUVBbEIsNEJBQWdCb0IsZUFBaEIsQ0FBZ0NDLFFBQWhDLENBQXlDVCxvQkFBekM7O0FBRUFaLDRCQUFnQnNCLGVBQWhCLENBQWdDQyxRQUFoQyxDQUF5QyxZQUFXO0FBQ2xEdkIsZ0NBQWdCd0IsZUFBaEIsQ0FBZ0NwQixZQUFoQyxFQUE4Q0UsS0FBOUMsRUFBcURDLE1BQXJEO0FBQ0QsYUFGRDs7QUFJQUUseUJBQWFnQixXQUFiLENBQXlCLFFBQXpCO0FBQ0Q7Ozs7RUFwQjBCekIsZTs7QUF1QjdCMEIsT0FBT0MsT0FBUCxHQUFpQmpCLGNBQWpCIiwiZmlsZSI6ImdhbGxpbmFFeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgbGV4ZXJzID0gcmVxdWlyZSgnLi4vLi4vZXM2L29jY2FtLWxleGVycycpLFxuICAgIERpdiA9IGVhc3l1aS5EaXYsXG4gICAgQk5GTGV4ZXIgPSBsZXhlcnMuQk5GTGV4ZXIsXG4gICAgR2FsbGluYUxleGVyID0gbGV4ZXJzLkdhbGxpbmFMZXhlcjtcblxudmFyIE5vbkJhc2ljRXhhbXBsZSA9IHJlcXVpcmUoJy4vbm9uQmFzaWNFeGFtcGxlJyksXG4gICAgUGFyc2VyID0gcmVxdWlyZSAoJy4uLy4uL2VzNi9wYXJzZXInKSxcbiAgICBCTkZQYXJzZXIgPSByZXF1aXJlICgnLi4vLi4vZXM2L2JuZlBhcnNlcicpLFxuICAgIGdyYW1tYXIgPSByZXF1aXJlICgnLi4vLi4vZXM2L2dyYW1tYXIvZ2FsbGluYScpO1xuXG52YXIgcHJlcHJvY2Vzc29yID0gdW5kZWZpbmVkLFxuICAgIGxleGVyID0gdW5kZWZpbmVkLFxuICAgIHBhcnNlciA9IHVuZGVmaW5lZCxcbiAgICBjb250YWluZXJEaXZTZWxlY3RvciA9ICdkaXYuY29udGFpbmVyJyxcbiAgICBjb250YWluZXJEaXYgPSBuZXcgRGl2KGNvbnRhaW5lckRpdlNlbGVjdG9yKTtcblxuY2xhc3MgR2FsbGluYUV4YW1wbGUgZXh0ZW5kcyBOb25CYXNpY0V4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGxleGVyID0gR2FsbGluYUxleGVyLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB2YXIgZ3JhbW1hclRleHRBcmVhVmFsdWUgPSBncmFtbWFyLCAvLy9cbiAgICAgICAgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gbGV4ZXIudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBsZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXMoKSxcbiAgICAgICAgbWFwcGluZ3MgPSB7fSxcbiAgICAgICAgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIucGFyc2UobGluZXMsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpO1xuXG4gICAgcGFyc2VyID0gbmV3IFBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICBOb25CYXNpY0V4YW1wbGUuZ3JhbW1hclRleHRBcmVhLnNldFZhbHVlKGdyYW1tYXJUZXh0QXJlYVZhbHVlKTtcblxuICAgIE5vbkJhc2ljRXhhbXBsZS5jb250ZW50VGV4dEFyZWEub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICBOb25CYXNpY0V4YW1wbGUudXBkYXRlUGFyc2VUcmVlKHByZXByb2Nlc3NvciwgbGV4ZXIsIHBhcnNlcik7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXJEaXYucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FsbGluYUV4YW1wbGU7XG4iXX0=