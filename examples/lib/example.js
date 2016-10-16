'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    easyuilayout = require('easyui-layout'),
    occamLexers = require('occam-lexers'),
    BNFLexer = occamLexers.BNFLexer,
    Input = easyui.Input,
    TextArea = easyui.TextArea,
    SizeableElement = easyuilayout.SizeableElement,
    VerticalSplitter = easyuilayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    contentTextAreaSelector = 'textArea#content',
    grammarTextAreaSelector = 'textArea#grammar',
    parseTreeTextAreaSelector = 'textArea#parseTree',
    terminalSymbolsRegExpPatternInputSelector = 'input#terminalSymbolsRegExpPattern',
    contentTextArea = new TextArea(contentTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    parseTreeTextArea = new TextArea(parseTreeTextAreaSelector),
    terminalSymbolsRegExpPatternInput = new Input(terminalSymbolsRegExpPatternInputSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var Parser = require('../../es6/parser'),
    BNFParser = require('../../es6/bnfParser');

var parser = undefined;

var Example = function () {
    function Example() {
        _classCallCheck(this, Example);
    }

    _createClass(Example, null, [{
        key: 'updateParser',
        value: function updateParser(mappings) {
            var grammarTextAreaValue = grammarTextArea.getValue(),
                terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternInput.getValue(),
                grammar = grammarTextAreaValue,
                ///
            terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,
                ///
            lines = BNFLexer.linesFromGrammar(grammar),
                productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, mappings);

            parser = new Parser(productions);
        }
    }, {
        key: 'updateParseTree',
        value: function updateParseTree(lexer) {
            var contentTextAreaValue = contentTextArea.getValue(),
                content = contentTextAreaValue,
                ///
            tokens = lexer.tokensFromContent(content),
                documentNode = parser.parse(tokens),
                parseTree = documentNode.getParseTree(),
                parseTreeStr = parseTree.toString(),
                parseTreeTextAreaHTML = parseTreeStr; ///

            parseTreeTextArea.html(parseTreeTextAreaHTML);
        }
    }]);

    return Example;
}();

Example.contentTextArea = contentTextArea;
Example.grammarTextArea = grammarTextArea;
Example.terminalSymbolsRegExpPatternInput = terminalSymbolsRegExpPatternInput;

module.exports = Example;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJvY2NhbUxleGVycyIsIkJORkxleGVyIiwiSW5wdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWFTZWxlY3RvciIsImdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFNlbGVjdG9yIiwiY29udGVudFRleHRBcmVhIiwiZ3JhbW1hclRleHRBcmVhIiwicGFyc2VUcmVlVGV4dEFyZWEiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQiLCJsZWZ0Q29sdW1uIiwiVE9fVEhFX1JJR0hUX09GIiwic2l0dWF0ZWQiLCJQYXJzZXIiLCJCTkZQYXJzZXIiLCJwYXJzZXIiLCJ1bmRlZmluZWQiLCJFeGFtcGxlIiwibWFwcGluZ3MiLCJncmFtbWFyVGV4dEFyZWFWYWx1ZSIsImdldFZhbHVlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUiLCJncmFtbWFyIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJsZXhlciIsImNvbnRlbnRUZXh0QXJlYVZhbHVlIiwiY29udGVudCIsInRva2VucyIsInRva2Vuc0Zyb21Db250ZW50IiwiZG9jdW1lbnROb2RlIiwicGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlU3RyIiwidG9TdHJpbmciLCJwYXJzZVRyZWVUZXh0QXJlYUhUTUwiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsZUFBZUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFSUUsY0FBY0YsUUFBUSxjQUFSLENBRmxCO0FBQUEsSUFHSUcsV0FBV0QsWUFBWUMsUUFIM0I7QUFBQSxJQUlJQyxRQUFRTCxPQUFPSyxLQUpuQjtBQUFBLElBS0lDLFdBQVdOLE9BQU9NLFFBTHRCO0FBQUEsSUFNSUMsa0JBQWtCTCxhQUFhSyxlQU5uQztBQUFBLElBT0lDLG1CQUFtQk4sYUFBYU0sZ0JBUHBDOztBQVNBLElBQUlDLHFCQUFxQixhQUF6QjtBQUFBLElBQ0lDLDBCQUEwQixrQkFEOUI7QUFBQSxJQUVJQywwQkFBMEIsa0JBRjlCO0FBQUEsSUFHSUMsNEJBQTRCLG9CQUhoQztBQUFBLElBSUlDLDRDQUE0QyxvQ0FKaEQ7QUFBQSxJQUtJQyxrQkFBa0IsSUFBSVIsUUFBSixDQUFhSSx1QkFBYixDQUx0QjtBQUFBLElBTUlLLGtCQUFrQixJQUFJVCxRQUFKLENBQWFLLHVCQUFiLENBTnRCO0FBQUEsSUFPSUssb0JBQW9CLElBQUlWLFFBQUosQ0FBYU0seUJBQWIsQ0FQeEI7QUFBQSxJQVFJSyxvQ0FBb0MsSUFBSVosS0FBSixDQUFVUSx5Q0FBVixDQVJ4QztBQUFBLElBU0lLLGFBQWEsSUFBSVgsZUFBSixDQUFvQkUsa0JBQXBCLENBVGpCO0FBQUEsSUFVSVUsa0JBQWtCWCxpQkFBaUJZLFFBQWpCLENBQTBCRCxlQVZoRDs7QUFZQSxJQUFJWCxnQkFBSixDQUFxQix5QkFBckIsRUFBZ0RXLGVBQWhELEVBQWlFRCxVQUFqRTs7QUFFQSxJQUFJRyxTQUFTcEIsUUFBUyxrQkFBVCxDQUFiO0FBQUEsSUFDSXFCLFlBQVlyQixRQUFTLHFCQUFULENBRGhCOztBQUdBLElBQUlzQixTQUFTQyxTQUFiOztJQUVNQyxPOzs7Ozs7O3FDQUNnQkMsUSxFQUFVO0FBQzVCLGdCQUFJQyx1QkFBdUJaLGdCQUFnQmEsUUFBaEIsRUFBM0I7QUFBQSxnQkFDSUMseUNBQXlDWixrQ0FBa0NXLFFBQWxDLEVBRDdDO0FBQUEsZ0JBRUlFLFVBQVVILG9CQUZkO0FBQUEsZ0JBRW9DO0FBQ2hDSSwyQ0FBK0JGLHNDQUhuQztBQUFBLGdCQUcyRTtBQUN2RUcsb0JBQVE1QixTQUFTNkIsZ0JBQVQsQ0FBMEJILE9BQTFCLENBSlo7QUFBQSxnQkFLSUksY0FBY1osVUFBVWEsS0FBVixDQUFnQkgsS0FBaEIsRUFBdUJELDRCQUF2QixFQUFxREwsUUFBckQsQ0FMbEI7O0FBT0FILHFCQUFTLElBQUlGLE1BQUosQ0FBV2EsV0FBWCxDQUFUO0FBQ0Q7Ozt3Q0FFc0JFLEssRUFBTztBQUM1QixnQkFBSUMsdUJBQXVCdkIsZ0JBQWdCYyxRQUFoQixFQUEzQjtBQUFBLGdCQUNJVSxVQUFVRCxvQkFEZDtBQUFBLGdCQUNxQztBQUNqQ0UscUJBQVNILE1BQU1JLGlCQUFOLENBQXdCRixPQUF4QixDQUZiO0FBQUEsZ0JBR0lHLGVBQWVsQixPQUFPWSxLQUFQLENBQWFJLE1BQWIsQ0FIbkI7QUFBQSxnQkFJSUcsWUFBWUQsYUFBYUUsWUFBYixFQUpoQjtBQUFBLGdCQUtJQyxlQUFlRixVQUFVRyxRQUFWLEVBTG5CO0FBQUEsZ0JBTUlDLHdCQUF3QkYsWUFONUIsQ0FENEIsQ0FPZTs7QUFFM0M1Qiw4QkFBa0IrQixJQUFsQixDQUF1QkQscUJBQXZCO0FBQ0Q7Ozs7OztBQUdIckIsUUFBUVgsZUFBUixHQUEwQkEsZUFBMUI7QUFDQVcsUUFBUVYsZUFBUixHQUEwQkEsZUFBMUI7QUFDQVUsUUFBUVIsaUNBQVIsR0FBNENBLGlDQUE1Qzs7QUFFQStCLE9BQU9DLE9BQVAsR0FBaUJ4QixPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgZWFzeXVpbGF5b3V0ID0gcmVxdWlyZSgnZWFzeXVpLWxheW91dCcpLFxuICAgIG9jY2FtTGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgQk5GTGV4ZXIgPSBvY2NhbUxleGVycy5CTkZMZXhlcixcbiAgICBJbnB1dCA9IGVhc3l1aS5JbnB1dCxcbiAgICBUZXh0QXJlYSA9IGVhc3l1aS5UZXh0QXJlYSxcbiAgICBTaXplYWJsZUVsZW1lbnQgPSBlYXN5dWlsYXlvdXQuU2l6ZWFibGVFbGVtZW50LFxuICAgIFZlcnRpY2FsU3BsaXR0ZXIgPSBlYXN5dWlsYXlvdXQuVmVydGljYWxTcGxpdHRlcjtcblxudmFyIGxlZnRDb2x1bW5TZWxlY3RvciA9ICcjbGVmdENvbHVtbicsXG4gICAgY29udGVudFRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjY29udGVudCcsXG4gICAgZ3JhbW1hclRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjZ3JhbW1hcicsXG4gICAgcGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNwYXJzZVRyZWUnLFxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFNlbGVjdG9yID0gJ2lucHV0I3Rlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4nLFxuICAgIGNvbnRlbnRUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShjb250ZW50VGV4dEFyZWFTZWxlY3RvciksXG4gICAgZ3JhbW1hclRleHRBcmVhID0gbmV3IFRleHRBcmVhKGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBwYXJzZVRyZWVUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShwYXJzZVRyZWVUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQgPSBuZXcgSW5wdXQodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0U2VsZWN0b3IpLFxuICAgIGxlZnRDb2x1bW4gPSBuZXcgU2l6ZWFibGVFbGVtZW50KGxlZnRDb2x1bW5TZWxlY3RvciksXG4gICAgVE9fVEhFX1JJR0hUX09GID0gVmVydGljYWxTcGxpdHRlci5zaXR1YXRlZC5UT19USEVfUklHSFRfT0Y7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKCcubGVmdC52ZXJ0aWNhbC5zcGxpdHRlcicsIFRPX1RIRV9SSUdIVF9PRiwgbGVmdENvbHVtbik7XG5cbnZhciBQYXJzZXIgPSByZXF1aXJlICgnLi4vLi4vZXM2L3BhcnNlcicpLFxuICAgIEJORlBhcnNlciA9IHJlcXVpcmUgKCcuLi8uLi9lczYvYm5mUGFyc2VyJyk7XG5cbnZhciBwYXJzZXIgPSB1bmRlZmluZWQ7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgdXBkYXRlUGFyc2VyKG1hcHBpbmdzKSB7XG4gICAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gZ3JhbW1hclRleHRBcmVhLmdldFZhbHVlKCksXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0LmdldFZhbHVlKCksXG4gICAgICAgIGdyYW1tYXIgPSBncmFtbWFyVGV4dEFyZWFWYWx1ZSwgLy8vXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSwgLy8vXG4gICAgICAgIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIucGFyc2UobGluZXMsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIG1hcHBpbmdzKTtcblxuICAgIHBhcnNlciA9IG5ldyBQYXJzZXIocHJvZHVjdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShsZXhlcikge1xuICAgIHZhciBjb250ZW50VGV4dEFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRBcmVhVmFsdWUsICAvLy9cbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgIGRvY3VtZW50Tm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICBwYXJzZVRyZWUgPSBkb2N1bWVudE5vZGUuZ2V0UGFyc2VUcmVlKCksXG4gICAgICAgIHBhcnNlVHJlZVN0ciA9IHBhcnNlVHJlZS50b1N0cmluZygpLFxuICAgICAgICBwYXJzZVRyZWVUZXh0QXJlYUhUTUwgPSBwYXJzZVRyZWVTdHI7ICAvLy9cblxuICAgIHBhcnNlVHJlZVRleHRBcmVhLmh0bWwocGFyc2VUcmVlVGV4dEFyZWFIVE1MKTtcbiAgfVxufVxuXG5FeGFtcGxlLmNvbnRlbnRUZXh0QXJlYSA9IGNvbnRlbnRUZXh0QXJlYTtcbkV4YW1wbGUuZ3JhbW1hclRleHRBcmVhID0gZ3JhbW1hclRleHRBcmVhO1xuRXhhbXBsZS50ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==