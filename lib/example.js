'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    easyuilayout = require('easyui-layout'),
    TextArea = easyui.TextArea,
    SizeableElement = easyuilayout.SizeableElement,
    VerticalSplitter = easyuilayout.VerticalSplitter;

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

var Query = require('./common/query');

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
    key: 'updateParseTree',
    value: function updateParseTree(lexer, parser) {
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

        var query = Query.fromExpression('/body//statement[1...]/*');

        var nodes = query.nodesFromNode(documentNode);

        debugger;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJncmFtbWFyVGV4dEFyZWFTZWxlY3RvciIsImNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciIsImxlZnRDb2x1bW4iLCJjb250ZW50VGV4dEFyZWEiLCJncmFtbWFyVGV4dEFyZWEiLCJwYXJzZVRyZWVUZXh0QXJlYSIsIlRPX1RIRV9SSUdIVF9PRiIsInNpdHVhdGVkIiwiUXVlcnkiLCJFeGFtcGxlIiwiZ2V0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsIm9uQ2hhbmdlIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50VGV4dEFyZWFWYWx1ZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsImRvY3VtZW50Tm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwidG9TdHJpbmciLCJwYXJzZVRyZWVUZXh0QXJlYUhUTUwiLCJodG1sIiwicXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIm5vZGVzIiwibm9kZXNGcm9tTm9kZSIsImNsZWFyUGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsZUFBZUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFSUUsV0FBV0gsT0FBT0csUUFGdEI7QUFBQSxJQUdJQyxrQkFBa0JGLGFBQWFFLGVBSG5DO0FBQUEsSUFJSUMsbUJBQW1CSCxhQUFhRyxnQkFKcEM7O0FBTUEsSUFBSUMscUJBQXFCLGFBQXpCO0FBQUEsSUFDSUMsMEJBQTBCLGtCQUQ5QjtBQUFBLElBRUlDLDBCQUEwQixrQkFGOUI7QUFBQSxJQUdJQyw0QkFBNEIsb0JBSGhDO0FBQUEsSUFJSUMsYUFBYSxJQUFJTixlQUFKLENBQW9CRSxrQkFBcEIsQ0FKakI7QUFBQSxJQUtJSyxrQkFBa0IsSUFBSVIsUUFBSixDQUFhSyx1QkFBYixDQUx0QjtBQUFBLElBTUlJLGtCQUFrQixJQUFJVCxRQUFKLENBQWFJLHVCQUFiLENBTnRCO0FBQUEsSUFPSU0sb0JBQW9CLElBQUlWLFFBQUosQ0FBYU0seUJBQWIsQ0FQeEI7QUFBQSxJQVFJSyxrQkFBa0JULGlCQUFpQlUsUUFBakIsQ0FBMEJELGVBUmhEOztBQVVBLElBQUlULGdCQUFKLENBQXFCLHlCQUFyQixFQUFnRFMsZUFBaEQsRUFBaUVKLFVBQWpFOztBQUVBLElBQUlNLFFBQVFmLFFBQVEsZ0JBQVIsQ0FBWjs7SUFFTWdCLE87Ozs7Ozs7OENBQzZCO0FBQUUsYUFBT0wsZ0JBQWdCTSxRQUFoQixFQUFQO0FBQW9DOzs7NENBRXhDQyxLLEVBQU87QUFBRVAsc0JBQWdCUSxRQUFoQixDQUF5QkQsS0FBekI7QUFBa0M7Ozs0Q0FFM0NFLE8sRUFBUztBQUFFVixzQkFBZ0JXLFFBQWhCLENBQXlCRCxPQUF6QjtBQUFvQzs7OzRDQUUvQ0EsTyxFQUFTO0FBQUVULHNCQUFnQlUsUUFBaEIsQ0FBeUJELE9BQXpCO0FBQW9DOzs7b0NBRXZERSxLLEVBQU9DLE0sRUFBUTtBQUNwQyxVQUFJQyx1QkFBdUJkLGdCQUFnQk8sUUFBaEIsRUFBM0I7QUFBQSxVQUNJUSxVQUFVRCxvQkFEZDtBQUFBLFVBQ3FDO0FBQ2pDRSxlQUFTSixNQUFNSyxpQkFBTixDQUF3QkYsT0FBeEIsQ0FGYjtBQUFBLFVBR0lHLGVBQWVMLE9BQU9NLEtBQVAsQ0FBYUgsTUFBYixDQUhuQjs7QUFLQSxVQUFJRSxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekIsWUFBSUUsWUFBWUYsYUFBYUcsWUFBYixFQUFoQjs7QUFFQUQsa0JBQVVFLFNBQVYsR0FIeUIsQ0FHRDs7QUFFeEIsWUFBSUMsa0JBQWtCSCxVQUFVSSxRQUFWLEVBQXRCO0FBQUEsWUFDSUMsd0JBQXdCRixlQUQ1QixDQUx5QixDQU1xQjs7QUFFOUNyQiwwQkFBa0J3QixJQUFsQixDQUF1QkQscUJBQXZCOztBQUVBLFlBQUlFLFFBQVF0QixNQUFNdUIsY0FBTixDQUFxQiwwQkFBckIsQ0FBWjs7QUFFQSxZQUFJQyxRQUFRRixNQUFNRyxhQUFOLENBQW9CWixZQUFwQixDQUFaOztBQUVBO0FBQ0QsT0FmRCxNQWVPO0FBQ0xaLGdCQUFReUIsY0FBUjtBQUNEO0FBQ0Y7OztxQ0FFdUI7QUFDdEIsVUFBSU4sd0JBQXdCLEVBQTVCOztBQUVBdkIsd0JBQWtCd0IsSUFBbEIsQ0FBdUJELHFCQUF2QjtBQUNEOzs7Ozs7QUFHSE8sT0FBT0MsT0FBUCxHQUFpQjNCLE9BQWpCIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBlYXN5dWlsYXlvdXQgPSByZXF1aXJlKCdlYXN5dWktbGF5b3V0JyksXG4gICAgVGV4dEFyZWEgPSBlYXN5dWkuVGV4dEFyZWEsXG4gICAgU2l6ZWFibGVFbGVtZW50ID0gZWFzeXVpbGF5b3V0LlNpemVhYmxlRWxlbWVudCxcbiAgICBWZXJ0aWNhbFNwbGl0dGVyID0gZWFzeXVpbGF5b3V0LlZlcnRpY2FsU3BsaXR0ZXI7XG5cbnZhciBsZWZ0Q29sdW1uU2VsZWN0b3IgPSAnI2xlZnRDb2x1bW4nLFxuICAgIGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2dyYW1tYXInLFxuICAgIGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgIHBhcnNlVHJlZVRleHRBcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcGFyc2VUcmVlJyxcbiAgICBsZWZ0Q29sdW1uID0gbmV3IFNpemVhYmxlRWxlbWVudChsZWZ0Q29sdW1uU2VsZWN0b3IpLFxuICAgIGNvbnRlbnRUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShjb250ZW50VGV4dEFyZWFTZWxlY3RvciksXG4gICAgZ3JhbW1hclRleHRBcmVhID0gbmV3IFRleHRBcmVhKGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBwYXJzZVRyZWVUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShwYXJzZVRyZWVUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBUT19USEVfUklHSFRfT0YgPSBWZXJ0aWNhbFNwbGl0dGVyLnNpdHVhdGVkLlRPX1RIRV9SSUdIVF9PRjtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIoJy5sZWZ0LnZlcnRpY2FsLnNwbGl0dGVyJywgVE9fVEhFX1JJR0hUX09GLCBsZWZ0Q29sdW1uKTtcblxudmFyIFF1ZXJ5ID0gcmVxdWlyZSgnLi9jb21tb24vcXVlcnknKTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBnZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSgpIHsgcmV0dXJuIGdyYW1tYXJUZXh0QXJlYS5nZXRWYWx1ZSgpOyB9XG5cbiAgc3RhdGljIHNldEdyYW1tYXJUZXh0QXJlYVZhbHVlKHZhbHVlKSB7IGdyYW1tYXJUZXh0QXJlYS5zZXRWYWx1ZSh2YWx1ZSk7IH1cblxuICBzdGF0aWMgb25Db250ZW50VGV4dEFyZWFDaGFuZ2UoaGFuZGxlcikgeyBjb250ZW50VGV4dEFyZWEub25DaGFuZ2UoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgb25HcmFtbWFyVGV4dEFyZWFDaGFuZ2UoaGFuZGxlcikgeyBncmFtbWFyVGV4dEFyZWEub25DaGFuZ2UoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VUcmVlKGxleGVyLCBwYXJzZXIpIHtcbiAgICB2YXIgY29udGVudFRleHRBcmVhVmFsdWUgPSBjb250ZW50VGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0QXJlYVZhbHVlLCAgLy8vXG4gICAgICAgIHRva2VucyA9IGxleGVyLnRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICBkb2N1bWVudE5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChkb2N1bWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHZhciBwYXJzZVRyZWUgPSBkb2N1bWVudE5vZGUuZ2V0UGFyc2VUcmVlKCk7XG5cbiAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgIHZhciBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUudG9TdHJpbmcoKSxcbiAgICAgICAgICBwYXJzZVRyZWVUZXh0QXJlYUhUTUwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgcGFyc2VUcmVlVGV4dEFyZWEuaHRtbChwYXJzZVRyZWVUZXh0QXJlYUhUTUwpO1xuXG4gICAgICB2YXIgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbignL2JvZHkvL3N0YXRlbWVudFsxLi4uXS8qJyk7XG5cbiAgICAgIHZhciBub2RlcyA9IHF1ZXJ5Lm5vZGVzRnJvbU5vZGUoZG9jdW1lbnROb2RlKTtcblxuICAgICAgZGVidWdnZXJcbiAgICB9IGVsc2Uge1xuICAgICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGVhclBhcnNlVHJlZSgpIHtcbiAgICB2YXIgcGFyc2VUcmVlVGV4dEFyZWFIVE1MID0gJyc7XG5cbiAgICBwYXJzZVRyZWVUZXh0QXJlYS5odG1sKHBhcnNlVHJlZVRleHRBcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuIl19