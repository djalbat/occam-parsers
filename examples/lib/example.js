'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    easyuilayout = require('easyui-layout'),
    TextArea = easyui.TextArea,
    SizeableElement = easyuilayout.SizeableElement,
    VerticalSplitter = easyuilayout.VerticalSplitter;

var lexers = require('../../es6/occam-lexers'),
    BNFLexer = lexers.BNFLexer;

var Parser = require('../../es6/parser'),
    BNFParser = require('../../es6/bnfParser');

var leftColumnSelector = '#leftColumn',
    grammarTextAreaSelector = 'textarea#grammar',
    contentTextAreaSelector = 'textarea#content',
    parseTreeTextAreaSelector = 'textarea#parseTree',
    leftColumn = new SizeableElement(leftColumnSelector),
    contentTextArea = new TextArea(contentTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    parseTreeTextArea = new TextArea(parseTreeTextAreaSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var parser = undefined;

var Example = function () {
    function Example() {
        _classCallCheck(this, Example);
    }

    _createClass(Example, null, [{
        key: 'getGrammarTextAreaValue',
        value: function getGrammarTextAreaValue() {
            return grammarTextArea.getValue();
        }
    }, {
        key: 'setGrammarTextAreaValue',
        value: function setGrammarTextAreaValue(value) {
            grammarTextArea.setValue(value);
        }
    }, {
        key: 'onContentTextAreaChange',
        value: function onContentTextAreaChange(handler) {
            contentTextArea.onChange(handler);
        }
    }, {
        key: 'onGrammarTextAreaChange',
        value: function onGrammarTextAreaChange(handler) {
            grammarTextArea.onChange(handler);
        }
    }, {
        key: 'updateParser',
        value: function updateParser(grammar, terminalSymbolsRegExpPattern, significantTokenTypes) {
            var lines = BNFLexer.linesFromGrammar(grammar),
                mappings = {},
                productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings);

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
    }, {
        key: 'clearParseTree',
        value: function clearParseTree() {
            var parseTreeTextAreaHTML = '';

            parseTreeTextArea.html(parseTreeTextAreaHTML);
        }
    }]);

    return Example;
}();

module.exports = Example;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZXhlcnMiLCJCTkZMZXhlciIsIlBhcnNlciIsIkJORlBhcnNlciIsImxlZnRDb2x1bW5TZWxlY3RvciIsImdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yIiwiY29udGVudFRleHRBcmVhU2VsZWN0b3IiLCJwYXJzZVRyZWVUZXh0QXJlYVNlbGVjdG9yIiwibGVmdENvbHVtbiIsImNvbnRlbnRUZXh0QXJlYSIsImdyYW1tYXJUZXh0QXJlYSIsInBhcnNlVHJlZVRleHRBcmVhIiwiVE9fVEhFX1JJR0hUX09GIiwic2l0dWF0ZWQiLCJwYXJzZXIiLCJ1bmRlZmluZWQiLCJFeGFtcGxlIiwiZ2V0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsIm9uQ2hhbmdlIiwiZ3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJsZXhlciIsImNvbnRlbnRUZXh0QXJlYVZhbHVlIiwiY29udGVudCIsInRva2VucyIsInRva2Vuc0Zyb21Db250ZW50IiwiZG9jdW1lbnROb2RlIiwicGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlU3RyIiwidG9TdHJpbmciLCJwYXJzZVRyZWVUZXh0QXJlYUhUTUwiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsZUFBZUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFSUUsV0FBV0gsT0FBT0csUUFGdEI7QUFBQSxJQUdJQyxrQkFBa0JGLGFBQWFFLGVBSG5DO0FBQUEsSUFJSUMsbUJBQW1CSCxhQUFhRyxnQkFKcEM7O0FBTUEsSUFBSUMsU0FBU0wsUUFBUSx3QkFBUixDQUFiO0FBQUEsSUFDSU0sV0FBV0QsT0FBT0MsUUFEdEI7O0FBR0EsSUFBSUMsU0FBU1AsUUFBUSxrQkFBUixDQUFiO0FBQUEsSUFDSVEsWUFBWVIsUUFBUSxxQkFBUixDQURoQjs7QUFHQSxJQUFJUyxxQkFBcUIsYUFBekI7QUFBQSxJQUNJQywwQkFBMEIsa0JBRDlCO0FBQUEsSUFFSUMsMEJBQTBCLGtCQUY5QjtBQUFBLElBR0lDLDRCQUE0QixvQkFIaEM7QUFBQSxJQUlJQyxhQUFhLElBQUlWLGVBQUosQ0FBb0JNLGtCQUFwQixDQUpqQjtBQUFBLElBS0lLLGtCQUFrQixJQUFJWixRQUFKLENBQWFTLHVCQUFiLENBTHRCO0FBQUEsSUFNSUksa0JBQWtCLElBQUliLFFBQUosQ0FBYVEsdUJBQWIsQ0FOdEI7QUFBQSxJQU9JTSxvQkFBb0IsSUFBSWQsUUFBSixDQUFhVSx5QkFBYixDQVB4QjtBQUFBLElBUUlLLGtCQUFrQmIsaUJBQWlCYyxRQUFqQixDQUEwQkQsZUFSaEQ7O0FBVUEsSUFBSWIsZ0JBQUosQ0FBcUIseUJBQXJCLEVBQWdEYSxlQUFoRCxFQUFpRUosVUFBakU7O0FBRUEsSUFBSU0sU0FBU0MsU0FBYjs7SUFFTUMsTzs7Ozs7OztrREFDNkI7QUFBRSxtQkFBT04sZ0JBQWdCTyxRQUFoQixFQUFQO0FBQW9DOzs7Z0RBRXhDQyxLLEVBQU87QUFBRVIsNEJBQWdCUyxRQUFoQixDQUF5QkQsS0FBekI7QUFBa0M7OztnREFFM0NFLE8sRUFBUztBQUFFWCw0QkFBZ0JZLFFBQWhCLENBQXlCRCxPQUF6QjtBQUFvQzs7O2dEQUUvQ0EsTyxFQUFTO0FBQUVWLDRCQUFnQlcsUUFBaEIsQ0FBeUJELE9BQXpCO0FBQW9DOzs7cUNBRTFERSxPLEVBQVNDLDRCLEVBQThCQyxxQixFQUF1QjtBQUNoRixnQkFBSUMsUUFBUXhCLFNBQVN5QixnQkFBVCxDQUEwQkosT0FBMUIsQ0FBWjtBQUFBLGdCQUNJSyxXQUFXLEVBRGY7QUFBQSxnQkFFSUMsY0FBY3pCLFVBQVUwQixLQUFWLENBQWdCSixLQUFoQixFQUF1QkYsNEJBQXZCLEVBQXFEQyxxQkFBckQsRUFBNEVHLFFBQTVFLENBRmxCOztBQUlBYixxQkFBUyxJQUFJWixNQUFKLENBQVcwQixXQUFYLENBQVQ7QUFDRDs7O3dDQUVzQkUsSyxFQUFPO0FBQzVCLGdCQUFJQyx1QkFBdUJ0QixnQkFBZ0JRLFFBQWhCLEVBQTNCO0FBQUEsZ0JBQ0llLFVBQVVELG9CQURkO0FBQUEsZ0JBQ3FDO0FBQ2pDRSxxQkFBU0gsTUFBTUksaUJBQU4sQ0FBd0JGLE9BQXhCLENBRmI7QUFBQSxnQkFHSUcsZUFBZXJCLE9BQU9lLEtBQVAsQ0FBYUksTUFBYixDQUhuQjtBQUFBLGdCQUlJRyxZQUFZRCxhQUFhRSxZQUFiLEVBSmhCO0FBQUEsZ0JBS0lDLGVBQWVGLFVBQVVHLFFBQVYsRUFMbkI7QUFBQSxnQkFNSUMsd0JBQXdCRixZQU41QixDQUQ0QixDQU9lOztBQUUzQzNCLDhCQUFrQjhCLElBQWxCLENBQXVCRCxxQkFBdkI7QUFDRDs7O3lDQUV1QjtBQUN0QixnQkFBSUEsd0JBQXdCLEVBQTVCOztBQUVBN0IsOEJBQWtCOEIsSUFBbEIsQ0FBdUJELHFCQUF2QjtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQjNCLE9BQWpCIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBlYXN5dWlsYXlvdXQgPSByZXF1aXJlKCdlYXN5dWktbGF5b3V0JyksXG4gICAgVGV4dEFyZWEgPSBlYXN5dWkuVGV4dEFyZWEsXG4gICAgU2l6ZWFibGVFbGVtZW50ID0gZWFzeXVpbGF5b3V0LlNpemVhYmxlRWxlbWVudCxcbiAgICBWZXJ0aWNhbFNwbGl0dGVyID0gZWFzeXVpbGF5b3V0LlZlcnRpY2FsU3BsaXR0ZXI7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCcuLi8uLi9lczYvb2NjYW0tbGV4ZXJzJyksXG4gICAgQk5GTGV4ZXIgPSBsZXhlcnMuQk5GTGV4ZXI7XG5cbnZhciBQYXJzZXIgPSByZXF1aXJlKCcuLi8uLi9lczYvcGFyc2VyJyksXG4gICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vLi4vZXM2L2JuZlBhcnNlcicpO1xuXG52YXIgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICBncmFtbWFyVGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNncmFtbWFyJyxcbiAgICBjb250ZW50VGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNjb250ZW50JyxcbiAgICBwYXJzZVRyZWVUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3BhcnNlVHJlZScsXG4gICAgbGVmdENvbHVtbiA9IG5ldyBTaXplYWJsZUVsZW1lbnQobGVmdENvbHVtblNlbGVjdG9yKSxcbiAgICBjb250ZW50VGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoY29udGVudFRleHRBcmVhU2VsZWN0b3IpLFxuICAgIGdyYW1tYXJUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShncmFtbWFyVGV4dEFyZWFTZWxlY3RvciksXG4gICAgcGFyc2VUcmVlVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEocGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciksXG4gICAgVE9fVEhFX1JJR0hUX09GID0gVmVydGljYWxTcGxpdHRlci5zaXR1YXRlZC5UT19USEVfUklHSFRfT0Y7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKCcubGVmdC52ZXJ0aWNhbC5zcGxpdHRlcicsIFRPX1RIRV9SSUdIVF9PRiwgbGVmdENvbHVtbik7XG5cbnZhciBwYXJzZXIgPSB1bmRlZmluZWQ7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgZ2V0R3JhbW1hclRleHRBcmVhVmFsdWUoKSB7IHJldHVybiBncmFtbWFyVGV4dEFyZWEuZ2V0VmFsdWUoKTsgfVxuXG4gIHN0YXRpYyBzZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSh2YWx1ZSkgeyBncmFtbWFyVGV4dEFyZWEuc2V0VmFsdWUodmFsdWUpOyB9XG5cbiAgc3RhdGljIG9uQ29udGVudFRleHRBcmVhQ2hhbmdlKGhhbmRsZXIpIHsgY29udGVudFRleHRBcmVhLm9uQ2hhbmdlKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIG9uR3JhbW1hclRleHRBcmVhQ2hhbmdlKGhhbmRsZXIpIHsgZ3JhbW1hclRleHRBcmVhLm9uQ2hhbmdlKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlcihncmFtbWFyLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMpIHtcbiAgICB2YXIgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICBtYXBwaW5ncyA9IHt9LFxuICAgICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyk7XG5cbiAgICBwYXJzZXIgPSBuZXcgUGFyc2VyKHByb2R1Y3Rpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWUobGV4ZXIpIHtcbiAgICB2YXIgY29udGVudFRleHRBcmVhVmFsdWUgPSBjb250ZW50VGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0QXJlYVZhbHVlLCAgLy8vXG4gICAgICAgIHRva2VucyA9IGxleGVyLnRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICBkb2N1bWVudE5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKSxcbiAgICAgICAgcGFyc2VUcmVlID0gZG9jdW1lbnROb2RlLmdldFBhcnNlVHJlZSgpLFxuICAgICAgICBwYXJzZVRyZWVTdHIgPSBwYXJzZVRyZWUudG9TdHJpbmcoKSxcbiAgICAgICAgcGFyc2VUcmVlVGV4dEFyZWFIVE1MID0gcGFyc2VUcmVlU3RyOyAgLy8vXG5cbiAgICBwYXJzZVRyZWVUZXh0QXJlYS5odG1sKHBhcnNlVHJlZVRleHRBcmVhSFRNTCk7XG4gIH1cblxuICBzdGF0aWMgY2xlYXJQYXJzZVRyZWUoKSB7XG4gICAgdmFyIHBhcnNlVHJlZVRleHRBcmVhSFRNTCA9ICcnO1xuXG4gICAgcGFyc2VUcmVlVGV4dEFyZWEuaHRtbChwYXJzZVRyZWVUZXh0QXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==