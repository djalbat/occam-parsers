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

var Example = function () {
    function Example() {
        _classCallCheck(this, Example);
    }

    _createClass(Example, null, [{
        key: 'updateParseTree',
        value: function updateParseTree(lexer, parser) {
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

Example.contentTextArea = contentTextArea;
Example.grammarTextArea = grammarTextArea;

module.exports = Example;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWFTZWxlY3RvciIsImdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciIsImNvbnRlbnRUZXh0QXJlYSIsImdyYW1tYXJUZXh0QXJlYSIsInBhcnNlVHJlZVRleHRBcmVhIiwibGVmdENvbHVtbiIsIlRPX1RIRV9SSUdIVF9PRiIsInNpdHVhdGVkIiwiRXhhbXBsZSIsImxleGVyIiwicGFyc2VyIiwiY29udGVudFRleHRBcmVhVmFsdWUiLCJnZXRWYWx1ZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsImRvY3VtZW50Tm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlU3RyIiwidG9TdHJpbmciLCJwYXJzZVRyZWVUZXh0QXJlYUhUTUwiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsZUFBZUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFSUUsV0FBV0gsT0FBT0csUUFGdEI7QUFBQSxJQUdJQyxrQkFBa0JGLGFBQWFFLGVBSG5DO0FBQUEsSUFJSUMsbUJBQW1CSCxhQUFhRyxnQkFKcEM7O0FBTUEsSUFBSUMscUJBQXFCLGFBQXpCO0FBQUEsSUFDSUMsMEJBQTBCLGtCQUQ5QjtBQUFBLElBRUlDLDBCQUEwQixrQkFGOUI7QUFBQSxJQUdJQyw0QkFBNEIsb0JBSGhDO0FBQUEsSUFJSUMsa0JBQWtCLElBQUlQLFFBQUosQ0FBYUksdUJBQWIsQ0FKdEI7QUFBQSxJQUtJSSxrQkFBa0IsSUFBSVIsUUFBSixDQUFhSyx1QkFBYixDQUx0QjtBQUFBLElBTUlJLG9CQUFvQixJQUFJVCxRQUFKLENBQWFNLHlCQUFiLENBTnhCO0FBQUEsSUFPSUksYUFBYSxJQUFJVCxlQUFKLENBQW9CRSxrQkFBcEIsQ0FQakI7QUFBQSxJQVFJUSxrQkFBa0JULGlCQUFpQlUsUUFBakIsQ0FBMEJELGVBUmhEOztBQVVBLElBQUlULGdCQUFKLENBQXFCLHlCQUFyQixFQUFnRFMsZUFBaEQsRUFBaUVELFVBQWpFOztJQUVNRyxPOzs7Ozs7O3dDQUNtQkMsSyxFQUFPQyxNLEVBQVE7QUFDcEMsZ0JBQUlDLHVCQUF1QlQsZ0JBQWdCVSxRQUFoQixFQUEzQjtBQUFBLGdCQUNJQyxVQUFVRixvQkFEZDtBQUFBLGdCQUNxQztBQUNqQ0cscUJBQVNMLE1BQU1NLGlCQUFOLENBQXdCRixPQUF4QixDQUZiO0FBQUEsZ0JBR0lHLGVBQWVOLE9BQU9PLEtBQVAsQ0FBYUgsTUFBYixDQUhuQjtBQUFBLGdCQUlJSSxZQUFZRixhQUFhRyxZQUFiLEVBSmhCO0FBQUEsZ0JBS0lDLGVBQWVGLFVBQVVHLFFBQVYsRUFMbkI7QUFBQSxnQkFNSUMsd0JBQXdCRixZQU41QixDQURvQyxDQU9POztBQUUzQ2hCLDhCQUFrQm1CLElBQWxCLENBQXVCRCxxQkFBdkI7QUFDRDs7O3lDQUV1QjtBQUN0QixnQkFBSUEsd0JBQXdCLEVBQTVCOztBQUVBbEIsOEJBQWtCbUIsSUFBbEIsQ0FBdUJELHFCQUF2QjtBQUNEOzs7Ozs7QUFHSGQsUUFBUU4sZUFBUixHQUEwQkEsZUFBMUI7QUFDQU0sUUFBUUwsZUFBUixHQUEwQkEsZUFBMUI7O0FBRUFxQixPQUFPQyxPQUFQLEdBQWlCakIsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIGVhc3l1aWxheW91dCA9IHJlcXVpcmUoJ2Vhc3l1aS1sYXlvdXQnKSxcbiAgICBUZXh0QXJlYSA9IGVhc3l1aS5UZXh0QXJlYSxcbiAgICBTaXplYWJsZUVsZW1lbnQgPSBlYXN5dWlsYXlvdXQuU2l6ZWFibGVFbGVtZW50LFxuICAgIFZlcnRpY2FsU3BsaXR0ZXIgPSBlYXN5dWlsYXlvdXQuVmVydGljYWxTcGxpdHRlcjtcblxudmFyIGxlZnRDb2x1bW5TZWxlY3RvciA9ICcjbGVmdENvbHVtbicsXG4gICAgY29udGVudFRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjY29udGVudCcsXG4gICAgZ3JhbW1hclRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjZ3JhbW1hcicsXG4gICAgcGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNwYXJzZVRyZWUnLFxuICAgIGNvbnRlbnRUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShjb250ZW50VGV4dEFyZWFTZWxlY3RvciksXG4gICAgZ3JhbW1hclRleHRBcmVhID0gbmV3IFRleHRBcmVhKGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBwYXJzZVRyZWVUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShwYXJzZVRyZWVUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBsZWZ0Q29sdW1uID0gbmV3IFNpemVhYmxlRWxlbWVudChsZWZ0Q29sdW1uU2VsZWN0b3IpLFxuICAgIFRPX1RIRV9SSUdIVF9PRiA9IFZlcnRpY2FsU3BsaXR0ZXIuc2l0dWF0ZWQuVE9fVEhFX1JJR0hUX09GO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcignLmxlZnQudmVydGljYWwuc3BsaXR0ZXInLCBUT19USEVfUklHSFRfT0YsIGxlZnRDb2x1bW4pO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShsZXhlciwgcGFyc2VyKSB7XG4gICAgdmFyIGNvbnRlbnRUZXh0QXJlYVZhbHVlID0gY29udGVudFRleHRBcmVhLmdldFZhbHVlKCksXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dEFyZWFWYWx1ZSwgIC8vL1xuICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbnNGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgZG9jdW1lbnROb2RlID0gcGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgIHBhcnNlVHJlZSA9IGRvY3VtZW50Tm9kZS5nZXRQYXJzZVRyZWUoKSxcbiAgICAgICAgcGFyc2VUcmVlU3RyID0gcGFyc2VUcmVlLnRvU3RyaW5nKCksXG4gICAgICAgIHBhcnNlVHJlZVRleHRBcmVhSFRNTCA9IHBhcnNlVHJlZVN0cjsgIC8vL1xuXG4gICAgcGFyc2VUcmVlVGV4dEFyZWEuaHRtbChwYXJzZVRyZWVUZXh0QXJlYUhUTUwpO1xuICB9XG4gIFxuICBzdGF0aWMgY2xlYXJQYXJzZVRyZWUoKSB7XG4gICAgdmFyIHBhcnNlVHJlZVRleHRBcmVhSFRNTCA9ICcnO1xuXG4gICAgcGFyc2VUcmVlVGV4dEFyZWEuaHRtbChwYXJzZVRyZWVUZXh0QXJlYUhUTUwpO1xuICB9XG59XG5cbkV4YW1wbGUuY29udGVudFRleHRBcmVhID0gY29udGVudFRleHRBcmVhO1xuRXhhbXBsZS5ncmFtbWFyVGV4dEFyZWEgPSBncmFtbWFyVGV4dEFyZWE7XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==