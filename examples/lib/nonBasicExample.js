'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    easyuilayout = require('easyui-layout'),
    TextArea = easyui.TextArea,
    SizeableElement = easyuilayout.SizeableElement,
    VerticalSplitter = easyuilayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    contentTextAreaSelector = 'textArea#content',
    grammarTextAreaSelector = 'textArea#grammar',
    parseTreeTextAreaSelector = 'textArea#parseTree',
    contentTextArea = new TextArea(contentTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    parseTreeTextArea = new TextArea(parseTreeTextAreaSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var NonBasicExample = function () {
    function NonBasicExample() {
        _classCallCheck(this, NonBasicExample);
    }

    _createClass(NonBasicExample, null, [{
        key: 'updateParseTree',
        value: function updateParseTree(preprocessor, lexer, parser) {
            var contentTextAreaValue = contentTextArea.getValue(),
                content = contentTextAreaValue,
                ///
            tokens = lexer.tokensFromContent(content);

            if (preprocessor !== undefined) {
                var preprocessedTokens = preprocessor.parse(tokens);

                tokens = preprocessedTokens; ///
            }

            var documentNode = parser.parse(tokens),
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

    return NonBasicExample;
}();

NonBasicExample.contentTextArea = contentTextArea;
NonBasicExample.grammarTextArea = grammarTextArea;

module.exports = NonBasicExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ub25CYXNpY0V4YW1wbGUuanMiXSwibmFtZXMiOlsiZWFzeXVpIiwicmVxdWlyZSIsImVhc3l1aWxheW91dCIsIlRleHRBcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImxlZnRDb2x1bW5TZWxlY3RvciIsImNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yIiwiZ3JhbW1hclRleHRBcmVhU2VsZWN0b3IiLCJwYXJzZVRyZWVUZXh0QXJlYVNlbGVjdG9yIiwiY29udGVudFRleHRBcmVhIiwiZ3JhbW1hclRleHRBcmVhIiwicGFyc2VUcmVlVGV4dEFyZWEiLCJsZWZ0Q29sdW1uIiwiVE9fVEhFX1JJR0hUX09GIiwic2l0dWF0ZWQiLCJOb25CYXNpY0V4YW1wbGUiLCJwcmVwcm9jZXNzb3IiLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnRUZXh0QXJlYVZhbHVlIiwiZ2V0VmFsdWUiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5zRnJvbUNvbnRlbnQiLCJ1bmRlZmluZWQiLCJwcmVwcm9jZXNzZWRUb2tlbnMiLCJwYXJzZSIsImRvY3VtZW50Tm9kZSIsInBhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsInBhcnNlVHJlZVN0ciIsInRvU3RyaW5nIiwicGFyc2VUcmVlVGV4dEFyZWFIVE1MIiwiaHRtbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLGVBQWVELFFBQVEsZUFBUixDQURuQjtBQUFBLElBRUlFLFdBQVdILE9BQU9HLFFBRnRCO0FBQUEsSUFHSUMsa0JBQWtCRixhQUFhRSxlQUhuQztBQUFBLElBSUlDLG1CQUFtQkgsYUFBYUcsZ0JBSnBDOztBQU1BLElBQUlDLHFCQUFxQixhQUF6QjtBQUFBLElBQ0lDLDBCQUEwQixrQkFEOUI7QUFBQSxJQUVJQywwQkFBMEIsa0JBRjlCO0FBQUEsSUFHSUMsNEJBQTRCLG9CQUhoQztBQUFBLElBSUlDLGtCQUFrQixJQUFJUCxRQUFKLENBQWFJLHVCQUFiLENBSnRCO0FBQUEsSUFLSUksa0JBQWtCLElBQUlSLFFBQUosQ0FBYUssdUJBQWIsQ0FMdEI7QUFBQSxJQU1JSSxvQkFBb0IsSUFBSVQsUUFBSixDQUFhTSx5QkFBYixDQU54QjtBQUFBLElBT0lJLGFBQWEsSUFBSVQsZUFBSixDQUFvQkUsa0JBQXBCLENBUGpCO0FBQUEsSUFRSVEsa0JBQWtCVCxpQkFBaUJVLFFBQWpCLENBQTBCRCxlQVJoRDs7QUFVQSxJQUFJVCxnQkFBSixDQUFxQix5QkFBckIsRUFBZ0RTLGVBQWhELEVBQWlFRCxVQUFqRTs7SUFFTUcsZTs7Ozs7Ozt3Q0FDbUJDLFksRUFBY0MsSyxFQUFPQyxNLEVBQVE7QUFDbEQsZ0JBQUlDLHVCQUF1QlYsZ0JBQWdCVyxRQUFoQixFQUEzQjtBQUFBLGdCQUNJQyxVQUFVRixvQkFEZDtBQUFBLGdCQUNxQztBQUNqQ0cscUJBQVNMLE1BQU1NLGlCQUFOLENBQXdCRixPQUF4QixDQUZiOztBQUlBLGdCQUFJTCxpQkFBaUJRLFNBQXJCLEVBQWdDO0FBQzlCLG9CQUFJQyxxQkFBcUJULGFBQWFVLEtBQWIsQ0FBbUJKLE1BQW5CLENBQXpCOztBQUVBQSx5QkFBU0csa0JBQVQsQ0FIOEIsQ0FHQTtBQUMvQjs7QUFFRCxnQkFBSUUsZUFBZVQsT0FBT1EsS0FBUCxDQUFhSixNQUFiLENBQW5CO0FBQUEsZ0JBQ0lNLFlBQVlELGFBQWFFLFlBQWIsRUFEaEI7QUFBQSxnQkFFSUMsZUFBZUYsVUFBVUcsUUFBVixFQUZuQjtBQUFBLGdCQUdJQyx3QkFBd0JGLFlBSDVCLENBWGtELENBY1A7O0FBRTNDbkIsOEJBQWtCc0IsSUFBbEIsQ0FBdUJELHFCQUF2QjtBQUNEOzs7eUNBRXVCO0FBQ3RCLGdCQUFJQSx3QkFBd0IsRUFBNUI7O0FBRUFyQiw4QkFBa0JzQixJQUFsQixDQUF1QkQscUJBQXZCO0FBQ0Q7Ozs7OztBQUdIakIsZ0JBQWdCTixlQUFoQixHQUFrQ0EsZUFBbEM7QUFDQU0sZ0JBQWdCTCxlQUFoQixHQUFrQ0EsZUFBbEM7O0FBRUF3QixPQUFPQyxPQUFQLEdBQWlCcEIsZUFBakIiLCJmaWxlIjoibm9uQmFzaWNFeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgZWFzeXVpbGF5b3V0ID0gcmVxdWlyZSgnZWFzeXVpLWxheW91dCcpLFxuICAgIFRleHRBcmVhID0gZWFzeXVpLlRleHRBcmVhLFxuICAgIFNpemVhYmxlRWxlbWVudCA9IGVhc3l1aWxheW91dC5TaXplYWJsZUVsZW1lbnQsXG4gICAgVmVydGljYWxTcGxpdHRlciA9IGVhc3l1aWxheW91dC5WZXJ0aWNhbFNwbGl0dGVyO1xuXG52YXIgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICBjb250ZW50VGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNjb250ZW50JyxcbiAgICBncmFtbWFyVGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNncmFtbWFyJyxcbiAgICBwYXJzZVRyZWVUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI3BhcnNlVHJlZScsXG4gICAgY29udGVudFRleHRBcmVhID0gbmV3IFRleHRBcmVhKGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBncmFtbWFyVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoZ3JhbW1hclRleHRBcmVhU2VsZWN0b3IpLFxuICAgIHBhcnNlVHJlZVRleHRBcmVhID0gbmV3IFRleHRBcmVhKHBhcnNlVHJlZVRleHRBcmVhU2VsZWN0b3IpLFxuICAgIGxlZnRDb2x1bW4gPSBuZXcgU2l6ZWFibGVFbGVtZW50KGxlZnRDb2x1bW5TZWxlY3RvciksXG4gICAgVE9fVEhFX1JJR0hUX09GID0gVmVydGljYWxTcGxpdHRlci5zaXR1YXRlZC5UT19USEVfUklHSFRfT0Y7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKCcubGVmdC52ZXJ0aWNhbC5zcGxpdHRlcicsIFRPX1RIRV9SSUdIVF9PRiwgbGVmdENvbHVtbik7XG5cbmNsYXNzIE5vbkJhc2ljRXhhbXBsZSB7XG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWUocHJlcHJvY2Vzc29yLCBsZXhlciwgcGFyc2VyKSB7XG4gICAgdmFyIGNvbnRlbnRUZXh0QXJlYVZhbHVlID0gY29udGVudFRleHRBcmVhLmdldFZhbHVlKCksXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dEFyZWFWYWx1ZSwgIC8vL1xuICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbnNGcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIGlmIChwcmVwcm9jZXNzb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHByZXByb2Nlc3NlZFRva2VucyA9IHByZXByb2Nlc3Nvci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgICB0b2tlbnMgPSBwcmVwcm9jZXNzZWRUb2tlbnM7ICAvLy9cbiAgICB9XG5cbiAgICB2YXIgZG9jdW1lbnROb2RlID0gcGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgIHBhcnNlVHJlZSA9IGRvY3VtZW50Tm9kZS5nZXRQYXJzZVRyZWUoKSxcbiAgICAgICAgcGFyc2VUcmVlU3RyID0gcGFyc2VUcmVlLnRvU3RyaW5nKCksXG4gICAgICAgIHBhcnNlVHJlZVRleHRBcmVhSFRNTCA9IHBhcnNlVHJlZVN0cjsgIC8vL1xuXG4gICAgcGFyc2VUcmVlVGV4dEFyZWEuaHRtbChwYXJzZVRyZWVUZXh0QXJlYUhUTUwpO1xuICB9XG4gIFxuICBzdGF0aWMgY2xlYXJQYXJzZVRyZWUoKSB7XG4gICAgdmFyIHBhcnNlVHJlZVRleHRBcmVhSFRNTCA9ICcnO1xuXG4gICAgcGFyc2VUcmVlVGV4dEFyZWEuaHRtbChwYXJzZVRyZWVUZXh0QXJlYUhUTUwpO1xuICB9XG59XG5cbk5vbkJhc2ljRXhhbXBsZS5jb250ZW50VGV4dEFyZWEgPSBjb250ZW50VGV4dEFyZWE7XG5Ob25CYXNpY0V4YW1wbGUuZ3JhbW1hclRleHRBcmVhID0gZ3JhbW1hclRleHRBcmVhO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5vbkJhc2ljRXhhbXBsZTtcbiJdfQ==