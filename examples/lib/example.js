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
    }]);

    return Example;
}();

Example.contentTextArea = contentTextArea;
Example.grammarTextArea = grammarTextArea;

module.exports = Example;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWFTZWxlY3RvciIsImdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciIsImNvbnRlbnRUZXh0QXJlYSIsImdyYW1tYXJUZXh0QXJlYSIsInBhcnNlVHJlZVRleHRBcmVhIiwibGVmdENvbHVtbiIsIlRPX1RIRV9SSUdIVF9PRiIsInNpdHVhdGVkIiwiRXhhbXBsZSIsImxleGVyIiwicGFyc2VyIiwiY29udGVudFRleHRBcmVhVmFsdWUiLCJnZXRWYWx1ZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsImRvY3VtZW50Tm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlU3RyIiwidG9TdHJpbmciLCJwYXJzZVRyZWVUZXh0QXJlYUhUTUwiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsZUFBZUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFSUUsV0FBV0gsT0FBT0csUUFGdEI7QUFBQSxJQUdJQyxrQkFBa0JGLGFBQWFFLGVBSG5DO0FBQUEsSUFJSUMsbUJBQW1CSCxhQUFhRyxnQkFKcEM7O0FBTUEsSUFBSUMscUJBQXFCLGFBQXpCO0FBQUEsSUFDSUMsMEJBQTBCLGtCQUQ5QjtBQUFBLElBRUlDLDBCQUEwQixrQkFGOUI7QUFBQSxJQUdJQyw0QkFBNEIsb0JBSGhDO0FBQUEsSUFJSUMsa0JBQWtCLElBQUlQLFFBQUosQ0FBYUksdUJBQWIsQ0FKdEI7QUFBQSxJQUtJSSxrQkFBa0IsSUFBSVIsUUFBSixDQUFhSyx1QkFBYixDQUx0QjtBQUFBLElBTUlJLG9CQUFvQixJQUFJVCxRQUFKLENBQWFNLHlCQUFiLENBTnhCO0FBQUEsSUFPSUksYUFBYSxJQUFJVCxlQUFKLENBQW9CRSxrQkFBcEIsQ0FQakI7QUFBQSxJQVFJUSxrQkFBa0JULGlCQUFpQlUsUUFBakIsQ0FBMEJELGVBUmhEOztBQVVBLElBQUlULGdCQUFKLENBQXFCLHlCQUFyQixFQUFnRFMsZUFBaEQsRUFBaUVELFVBQWpFOztJQUVNRyxPOzs7Ozs7O3dDQUNtQkMsSyxFQUFPQyxNLEVBQVE7QUFDcEMsZ0JBQUlDLHVCQUF1QlQsZ0JBQWdCVSxRQUFoQixFQUEzQjtBQUFBLGdCQUNJQyxVQUFVRixvQkFEZDtBQUFBLGdCQUNxQztBQUNqQ0cscUJBQVNMLE1BQU1NLGlCQUFOLENBQXdCRixPQUF4QixDQUZiO0FBQUEsZ0JBR0lHLGVBQWVOLE9BQU9PLEtBQVAsQ0FBYUgsTUFBYixDQUhuQjtBQUFBLGdCQUlJSSxZQUFZRixhQUFhRyxZQUFiLEVBSmhCO0FBQUEsZ0JBS0lDLGVBQWVGLFVBQVVHLFFBQVYsRUFMbkI7QUFBQSxnQkFNSUMsd0JBQXdCRixZQU41QixDQURvQyxDQU9POztBQUUzQ2hCLDhCQUFrQm1CLElBQWxCLENBQXVCRCxxQkFBdkI7QUFDRDs7Ozs7O0FBR0hkLFFBQVFOLGVBQVIsR0FBMEJBLGVBQTFCO0FBQ0FNLFFBQVFMLGVBQVIsR0FBMEJBLGVBQTFCOztBQUVBcUIsT0FBT0MsT0FBUCxHQUFpQmpCLE9BQWpCIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBlYXN5dWlsYXlvdXQgPSByZXF1aXJlKCdlYXN5dWktbGF5b3V0JyksXG4gICAgVGV4dEFyZWEgPSBlYXN5dWkuVGV4dEFyZWEsXG4gICAgU2l6ZWFibGVFbGVtZW50ID0gZWFzeXVpbGF5b3V0LlNpemVhYmxlRWxlbWVudCxcbiAgICBWZXJ0aWNhbFNwbGl0dGVyID0gZWFzeXVpbGF5b3V0LlZlcnRpY2FsU3BsaXR0ZXI7XG5cbnZhciBsZWZ0Q29sdW1uU2VsZWN0b3IgPSAnI2xlZnRDb2x1bW4nLFxuICAgIGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2NvbnRlbnQnLFxuICAgIGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2dyYW1tYXInLFxuICAgIHBhcnNlVHJlZVRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjcGFyc2VUcmVlJyxcbiAgICBjb250ZW50VGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoY29udGVudFRleHRBcmVhU2VsZWN0b3IpLFxuICAgIGdyYW1tYXJUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShncmFtbWFyVGV4dEFyZWFTZWxlY3RvciksXG4gICAgcGFyc2VUcmVlVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEocGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciksXG4gICAgbGVmdENvbHVtbiA9IG5ldyBTaXplYWJsZUVsZW1lbnQobGVmdENvbHVtblNlbGVjdG9yKSxcbiAgICBUT19USEVfUklHSFRfT0YgPSBWZXJ0aWNhbFNwbGl0dGVyLnNpdHVhdGVkLlRPX1RIRV9SSUdIVF9PRjtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIoJy5sZWZ0LnZlcnRpY2FsLnNwbGl0dGVyJywgVE9fVEhFX1JJR0hUX09GLCBsZWZ0Q29sdW1uKTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWUobGV4ZXIsIHBhcnNlcikge1xuICAgIHZhciBjb250ZW50VGV4dEFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRBcmVhVmFsdWUsICAvLy9cbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgIGRvY3VtZW50Tm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICBwYXJzZVRyZWUgPSBkb2N1bWVudE5vZGUuZ2V0UGFyc2VUcmVlKCksXG4gICAgICAgIHBhcnNlVHJlZVN0ciA9IHBhcnNlVHJlZS50b1N0cmluZygpLFxuICAgICAgICBwYXJzZVRyZWVUZXh0QXJlYUhUTUwgPSBwYXJzZVRyZWVTdHI7ICAvLy9cblxuICAgIHBhcnNlVHJlZVRleHRBcmVhLmh0bWwocGFyc2VUcmVlVGV4dEFyZWFIVE1MKTtcbiAgfVxufVxuXG5FeGFtcGxlLmNvbnRlbnRUZXh0QXJlYSA9IGNvbnRlbnRUZXh0QXJlYTtcbkV4YW1wbGUuZ3JhbW1hclRleHRBcmVhID0gZ3JhbW1hclRleHRBcmVhO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=