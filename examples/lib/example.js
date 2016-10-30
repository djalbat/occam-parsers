'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    easyuilayout = require('easyui-layout'),
    TextArea = easyui.TextArea,
    SizeableElement = easyuilayout.SizeableElement,
    VerticalSplitter = easyuilayout.VerticalSplitter;

var lexers = require('occam-lexers'),
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
                documentNode = parser.parse(tokens);

            if (documentNode !== null) {
                var parseTree = documentNode.getParseTree();

                parseTree.shiftLine(); //

                var parseTreeString = parseTree.toString(),
                    parseTreeTextAreaHTML = parseTreeString; ///

                parseTreeTextArea.html(parseTreeTextAreaHTML);
            } else {
                Example.clearParseTree();
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZXhlcnMiLCJCTkZMZXhlciIsIlBhcnNlciIsIkJORlBhcnNlciIsImxlZnRDb2x1bW5TZWxlY3RvciIsImdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yIiwiY29udGVudFRleHRBcmVhU2VsZWN0b3IiLCJwYXJzZVRyZWVUZXh0QXJlYVNlbGVjdG9yIiwibGVmdENvbHVtbiIsImNvbnRlbnRUZXh0QXJlYSIsImdyYW1tYXJUZXh0QXJlYSIsInBhcnNlVHJlZVRleHRBcmVhIiwiVE9fVEhFX1JJR0hUX09GIiwic2l0dWF0ZWQiLCJwYXJzZXIiLCJ1bmRlZmluZWQiLCJFeGFtcGxlIiwiZ2V0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsIm9uQ2hhbmdlIiwiZ3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJsZXhlciIsImNvbnRlbnRUZXh0QXJlYVZhbHVlIiwiY29udGVudCIsInRva2VucyIsInRva2Vuc0Zyb21Db250ZW50IiwiZG9jdW1lbnROb2RlIiwicGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwidG9TdHJpbmciLCJwYXJzZVRyZWVUZXh0QXJlYUhUTUwiLCJodG1sIiwiY2xlYXJQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxlQUFlRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVJRSxXQUFXSCxPQUFPRyxRQUZ0QjtBQUFBLElBR0lDLGtCQUFrQkYsYUFBYUUsZUFIbkM7QUFBQSxJQUlJQyxtQkFBbUJILGFBQWFHLGdCQUpwQzs7QUFNQSxJQUFJQyxTQUFTTCxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lNLFdBQVdELE9BQU9DLFFBRHRCOztBQUdBLElBQUlDLFNBQVNQLFFBQVEsa0JBQVIsQ0FBYjtBQUFBLElBQ0lRLFlBQVlSLFFBQVEscUJBQVIsQ0FEaEI7O0FBR0EsSUFBSVMscUJBQXFCLGFBQXpCO0FBQUEsSUFDSUMsMEJBQTBCLGtCQUQ5QjtBQUFBLElBRUlDLDBCQUEwQixrQkFGOUI7QUFBQSxJQUdJQyw0QkFBNEIsb0JBSGhDO0FBQUEsSUFJSUMsYUFBYSxJQUFJVixlQUFKLENBQW9CTSxrQkFBcEIsQ0FKakI7QUFBQSxJQUtJSyxrQkFBa0IsSUFBSVosUUFBSixDQUFhUyx1QkFBYixDQUx0QjtBQUFBLElBTUlJLGtCQUFrQixJQUFJYixRQUFKLENBQWFRLHVCQUFiLENBTnRCO0FBQUEsSUFPSU0sb0JBQW9CLElBQUlkLFFBQUosQ0FBYVUseUJBQWIsQ0FQeEI7QUFBQSxJQVFJSyxrQkFBa0JiLGlCQUFpQmMsUUFBakIsQ0FBMEJELGVBUmhEOztBQVVBLElBQUliLGdCQUFKLENBQXFCLHlCQUFyQixFQUFnRGEsZUFBaEQsRUFBaUVKLFVBQWpFOztBQUVBLElBQUlNLFNBQVNDLFNBQWI7O0lBRU1DLE87Ozs7Ozs7a0RBQzZCO0FBQUUsbUJBQU9OLGdCQUFnQk8sUUFBaEIsRUFBUDtBQUFvQzs7O2dEQUV4Q0MsSyxFQUFPO0FBQUVSLDRCQUFnQlMsUUFBaEIsQ0FBeUJELEtBQXpCO0FBQWtDOzs7Z0RBRTNDRSxPLEVBQVM7QUFBRVgsNEJBQWdCWSxRQUFoQixDQUF5QkQsT0FBekI7QUFBb0M7OztnREFFL0NBLE8sRUFBUztBQUFFViw0QkFBZ0JXLFFBQWhCLENBQXlCRCxPQUF6QjtBQUFvQzs7O3FDQUUxREUsTyxFQUFTQyw0QixFQUE4QkMscUIsRUFBdUI7QUFDaEYsZ0JBQUlDLFFBQVF4QixTQUFTeUIsZ0JBQVQsQ0FBMEJKLE9BQTFCLENBQVo7QUFBQSxnQkFDSUssV0FBVyxFQURmO0FBQUEsZ0JBRUlDLGNBQWN6QixVQUFVMEIsS0FBVixDQUFnQkosS0FBaEIsRUFBdUJGLDRCQUF2QixFQUFxREMscUJBQXJELEVBQTRFRyxRQUE1RSxDQUZsQjs7QUFJQWIscUJBQVMsSUFBSVosTUFBSixDQUFXMEIsV0FBWCxDQUFUO0FBQ0Q7Ozt3Q0FFc0JFLEssRUFBTztBQUM1QixnQkFBSUMsdUJBQXVCdEIsZ0JBQWdCUSxRQUFoQixFQUEzQjtBQUFBLGdCQUNJZSxVQUFVRCxvQkFEZDtBQUFBLGdCQUNxQztBQUNqQ0UscUJBQVNILE1BQU1JLGlCQUFOLENBQXdCRixPQUF4QixDQUZiO0FBQUEsZ0JBR0lHLGVBQWVyQixPQUFPZSxLQUFQLENBQWFJLE1BQWIsQ0FIbkI7O0FBS0EsZ0JBQUlFLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6QixvQkFBSUMsWUFBWUQsYUFBYUUsWUFBYixFQUFoQjs7QUFFQUQsMEJBQVVFLFNBQVYsR0FIeUIsQ0FHRDs7QUFFeEIsb0JBQUlDLGtCQUFrQkgsVUFBVUksUUFBVixFQUF0QjtBQUFBLG9CQUNJQyx3QkFBd0JGLGVBRDVCLENBTHlCLENBTXFCOztBQUU5QzVCLGtDQUFrQitCLElBQWxCLENBQXVCRCxxQkFBdkI7QUFDRCxhQVRELE1BU087QUFDTHpCLHdCQUFRMkIsY0FBUjtBQUNEO0FBQ0Y7Ozt5Q0FFdUI7QUFDdEIsZ0JBQUlGLHdCQUF3QixFQUE1Qjs7QUFFQTlCLDhCQUFrQitCLElBQWxCLENBQXVCRCxxQkFBdkI7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUI3QixPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgZWFzeXVpbGF5b3V0ID0gcmVxdWlyZSgnZWFzeXVpLWxheW91dCcpLFxuICAgIFRleHRBcmVhID0gZWFzeXVpLlRleHRBcmVhLFxuICAgIFNpemVhYmxlRWxlbWVudCA9IGVhc3l1aWxheW91dC5TaXplYWJsZUVsZW1lbnQsXG4gICAgVmVydGljYWxTcGxpdHRlciA9IGVhc3l1aWxheW91dC5WZXJ0aWNhbFNwbGl0dGVyO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgQk5GTGV4ZXIgPSBsZXhlcnMuQk5GTGV4ZXI7XG5cbnZhciBQYXJzZXIgPSByZXF1aXJlKCcuLi8uLi9lczYvcGFyc2VyJyksXG4gICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vLi4vZXM2L2JuZlBhcnNlcicpO1xuXG52YXIgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICBncmFtbWFyVGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNncmFtbWFyJyxcbiAgICBjb250ZW50VGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNjb250ZW50JyxcbiAgICBwYXJzZVRyZWVUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3BhcnNlVHJlZScsXG4gICAgbGVmdENvbHVtbiA9IG5ldyBTaXplYWJsZUVsZW1lbnQobGVmdENvbHVtblNlbGVjdG9yKSxcbiAgICBjb250ZW50VGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoY29udGVudFRleHRBcmVhU2VsZWN0b3IpLFxuICAgIGdyYW1tYXJUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShncmFtbWFyVGV4dEFyZWFTZWxlY3RvciksXG4gICAgcGFyc2VUcmVlVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEocGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciksXG4gICAgVE9fVEhFX1JJR0hUX09GID0gVmVydGljYWxTcGxpdHRlci5zaXR1YXRlZC5UT19USEVfUklHSFRfT0Y7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKCcubGVmdC52ZXJ0aWNhbC5zcGxpdHRlcicsIFRPX1RIRV9SSUdIVF9PRiwgbGVmdENvbHVtbik7XG5cbnZhciBwYXJzZXIgPSB1bmRlZmluZWQ7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgZ2V0R3JhbW1hclRleHRBcmVhVmFsdWUoKSB7IHJldHVybiBncmFtbWFyVGV4dEFyZWEuZ2V0VmFsdWUoKTsgfVxuXG4gIHN0YXRpYyBzZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSh2YWx1ZSkgeyBncmFtbWFyVGV4dEFyZWEuc2V0VmFsdWUodmFsdWUpOyB9XG5cbiAgc3RhdGljIG9uQ29udGVudFRleHRBcmVhQ2hhbmdlKGhhbmRsZXIpIHsgY29udGVudFRleHRBcmVhLm9uQ2hhbmdlKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIG9uR3JhbW1hclRleHRBcmVhQ2hhbmdlKGhhbmRsZXIpIHsgZ3JhbW1hclRleHRBcmVhLm9uQ2hhbmdlKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlcihncmFtbWFyLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMpIHtcbiAgICB2YXIgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICBtYXBwaW5ncyA9IHt9LFxuICAgICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyk7XG5cbiAgICBwYXJzZXIgPSBuZXcgUGFyc2VyKHByb2R1Y3Rpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWUobGV4ZXIpIHtcbiAgICB2YXIgY29udGVudFRleHRBcmVhVmFsdWUgPSBjb250ZW50VGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0QXJlYVZhbHVlLCAgLy8vXG4gICAgICAgIHRva2VucyA9IGxleGVyLnRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICBkb2N1bWVudE5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChkb2N1bWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHZhciBwYXJzZVRyZWUgPSBkb2N1bWVudE5vZGUuZ2V0UGFyc2VUcmVlKCk7XG5cbiAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgIHZhciBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUudG9TdHJpbmcoKSxcbiAgICAgICAgICBwYXJzZVRyZWVUZXh0QXJlYUhUTUwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgcGFyc2VUcmVlVGV4dEFyZWEuaHRtbChwYXJzZVRyZWVUZXh0QXJlYUhUTUwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyUGFyc2VUcmVlKCkge1xuICAgIHZhciBwYXJzZVRyZWVUZXh0QXJlYUhUTUwgPSAnJztcblxuICAgIHBhcnNlVHJlZVRleHRBcmVhLmh0bWwocGFyc2VUcmVlVGV4dEFyZWFIVE1MKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=