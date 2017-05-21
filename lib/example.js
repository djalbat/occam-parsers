'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easylayout = require('easy-layout');

var Textarea = easy.Textarea,
    SizeableElement = easylayout.SizeableElement,
    VerticalSplitter = easylayout.VerticalSplitter;


var grammarTextareaSelector = 'textarea#grammar',
    contentTextareaSelector = 'textarea#content',
    parseTreeTextareaSelector = 'textarea#parseTree',
    sizeableElementSelector = '#sizeableElement',
    verticalSplitterSelector = '#verticalSplitter',
    grammarTextarea = new Textarea(grammarTextareaSelector),
    contentTextarea = new Textarea(contentTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
    sizeableElement = new SizeableElement(sizeableElementSelector),
    beforeSizeableElement = false,
    afterSizeableElement = true;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

var Example = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, null, [{
    key: 'getGrammarTextareaValue',
    value: function getGrammarTextareaValue() {
      var grammarTextareaValue = grammarTextarea.getValue();

      return grammarTextareaValue;
    }
  }, {
    key: 'setGrammarTextareaValue',
    value: function setGrammarTextareaValue(grammarTextareaValue) {
      var value = grammarTextareaValue; ///

      grammarTextarea.setValue(value);
    }
  }, {
    key: 'onContentTextareaKeyUp',
    value: function onContentTextareaKeyUp(handler) {
      contentTextarea.onKeyUp(handler);
    }
  }, {
    key: 'onGrammarTextareaKeyUp',
    value: function onGrammarTextareaKeyUp(handler) {
      grammarTextarea.onKeyUp(handler);
    }
  }, {
    key: 'updateParseTree',
    value: function updateParseTree(lexer, parser, production) {
      try {
        var contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue; ///

        if (content !== '') {
          var lines = lexer.linesFromContent(content),
              node = parser.nodeFromLines(lines, production),
              documentNode = node; ///

          if (documentNode === null) {
            throw new Error('The document cannot be parsed for some reason.');
          }

          var parseTree = documentNode.parseTree(lines);

          parseTree.shiftLine(); //

          var parseTreeString = parseTree.toString(),
              parseTreeTextareaHTML = parseTreeString; ///

          parseTreeTextarea.html(parseTreeTextareaHTML);
        } else {
          Example.clearParseTree();
        }

        contentTextarea.removeClass('error');
      } catch (error) {
        contentTextarea.addClass('error');

        Example.clearParseTree();
      }
    }
  }, {
    key: 'clearParseTree',
    value: function clearParseTree() {
      var parseTreeTextareaHTML = '';

      parseTreeTextarea.html(parseTreeTextareaHTML);
    }
  }]);

  return Example;
}();

module.exports = Example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yIiwiY29udGVudFRleHRhcmVhU2VsZWN0b3IiLCJwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yIiwic2l6ZWFibGVFbGVtZW50U2VsZWN0b3IiLCJ2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IiLCJncmFtbWFyVGV4dGFyZWEiLCJjb250ZW50VGV4dGFyZWEiLCJwYXJzZVRyZWVUZXh0YXJlYSIsInNpemVhYmxlRWxlbWVudCIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwiRXhhbXBsZSIsImdyYW1tYXJUZXh0YXJlYVZhbHVlIiwiZ2V0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsIm9uS2V5VXAiLCJsZXhlciIsInBhcnNlciIsInByb2R1Y3Rpb24iLCJjb250ZW50VGV4dGFyZWFWYWx1ZSIsImNvbnRlbnQiLCJsaW5lcyIsImxpbmVzRnJvbUNvbnRlbnQiLCJub2RlIiwibm9kZUZyb21MaW5lcyIsImRvY3VtZW50Tm9kZSIsIkVycm9yIiwicGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwidG9TdHJpbmciLCJwYXJzZVRyZWVUZXh0YXJlYUhUTUwiLCJodG1sIiwiY2xlYXJQYXJzZVRyZWUiLCJyZW1vdmVDbGFzcyIsImVycm9yIiwiYWRkQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGFBQVIsQ0FEbkI7O0FBR00sSUFBRUUsUUFBRixHQUFlSCxJQUFmLENBQUVHLFFBQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3dDRixVQUR4QyxDQUNFRSxlQURGO0FBQUEsSUFDbUJDLGdCQURuQixHQUN3Q0gsVUFEeEMsQ0FDbUJHLGdCQURuQjs7O0FBR04sSUFBTUMsMEJBQTBCLGtCQUFoQztBQUFBLElBQ01DLDBCQUEwQixrQkFEaEM7QUFBQSxJQUVNQyw0QkFBNEIsb0JBRmxDO0FBQUEsSUFHTUMsMEJBQTBCLGtCQUhoQztBQUFBLElBSU1DLDJCQUEyQixtQkFKakM7QUFBQSxJQUtNQyxrQkFBa0IsSUFBSVIsUUFBSixDQUFhRyx1QkFBYixDQUx4QjtBQUFBLElBTU1NLGtCQUFrQixJQUFJVCxRQUFKLENBQWFJLHVCQUFiLENBTnhCO0FBQUEsSUFPTU0sb0JBQW9CLElBQUlWLFFBQUosQ0FBYUsseUJBQWIsQ0FQMUI7QUFBQSxJQVFNTSxrQkFBa0IsSUFBSVYsZUFBSixDQUFvQkssdUJBQXBCLENBUnhCO0FBQUEsSUFTTU0sd0JBQXdCLEtBVDlCO0FBQUEsSUFVTUMsdUJBQXVCLElBVjdCOztBQVlBLElBQUlYLGdCQUFKLENBQXFCSyx3QkFBckIsRUFBK0NLLHFCQUEvQyxFQUFzRUMsb0JBQXRFOztJQUVNQyxPOzs7Ozs7OzhDQUM2QjtBQUMvQixVQUFNQyx1QkFBdUJQLGdCQUFnQlEsUUFBaEIsRUFBN0I7O0FBRUEsYUFBT0Qsb0JBQVA7QUFDRDs7OzRDQUU4QkEsb0IsRUFBc0I7QUFDbkQsVUFBTUUsUUFBUUYsb0JBQWQsQ0FEbUQsQ0FDZjs7QUFFcENQLHNCQUFnQlUsUUFBaEIsQ0FBeUJELEtBQXpCO0FBQ0Q7OzsyQ0FFNkJFLE8sRUFBUztBQUFFVixzQkFBZ0JXLE9BQWhCLENBQXdCRCxPQUF4QjtBQUFtQzs7OzJDQUU5Q0EsTyxFQUFTO0FBQUVYLHNCQUFnQlksT0FBaEIsQ0FBd0JELE9BQXhCO0FBQW1DOzs7b0NBRXJERSxLLEVBQU9DLE0sRUFBUUMsVSxFQUFZO0FBQ2hELFVBQUk7QUFDRixZQUFNQyx1QkFBdUJmLGdCQUFnQk8sUUFBaEIsRUFBN0I7QUFBQSxZQUNNUyxVQUFVRCxvQkFEaEIsQ0FERSxDQUVxQzs7QUFFdkMsWUFBSUMsWUFBWSxFQUFoQixFQUFvQjtBQUNsQixjQUFNQyxRQUFRTCxNQUFNTSxnQkFBTixDQUF1QkYsT0FBdkIsQ0FBZDtBQUFBLGNBQ01HLE9BQU9OLE9BQU9PLGFBQVAsQ0FBcUJILEtBQXJCLEVBQTRCSCxVQUE1QixDQURiO0FBQUEsY0FFTU8sZUFBZUYsSUFGckIsQ0FEa0IsQ0FHVTs7QUFFNUIsY0FBSUUsaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLGtCQUFNLElBQUlDLEtBQUosQ0FBVSxnREFBVixDQUFOO0FBQ0Q7O0FBRUQsY0FBTUMsWUFBWUYsYUFBYUUsU0FBYixDQUF1Qk4sS0FBdkIsQ0FBbEI7O0FBRUFNLG9CQUFVQyxTQUFWLEdBWGtCLENBV007O0FBRXhCLGNBQU1DLGtCQUFrQkYsVUFBVUcsUUFBVixFQUF4QjtBQUFBLGNBQ01DLHdCQUF3QkYsZUFEOUIsQ0Fia0IsQ0FjOEI7O0FBRWhEeEIsNEJBQWtCMkIsSUFBbEIsQ0FBdUJELHFCQUF2QjtBQUNELFNBakJELE1BaUJPO0FBQ0x0QixrQkFBUXdCLGNBQVI7QUFDRDs7QUFFRDdCLHdCQUFnQjhCLFdBQWhCLENBQTRCLE9BQTVCO0FBQ0QsT0ExQkQsQ0EwQkUsT0FBT0MsS0FBUCxFQUFjO0FBQ2QvQix3QkFBZ0JnQyxRQUFoQixDQUF5QixPQUF6Qjs7QUFFQTNCLGdCQUFRd0IsY0FBUjtBQUNEO0FBQ0Y7OztxQ0FFdUI7QUFDdEIsVUFBTUYsd0JBQXdCLEVBQTlCOztBQUVBMUIsd0JBQWtCMkIsSUFBbEIsQ0FBdUJELHFCQUF2QjtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQjdCLE9BQWpCIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5bGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50LCBWZXJ0aWNhbFNwbGl0dGVyIH0gPSBlYXN5bGF5b3V0O1xuXG5jb25zdCBncmFtbWFyVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNncmFtbWFyJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgICAgc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IgPSAnI3NpemVhYmxlRWxlbWVudCcsXG4gICAgICB2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IgPSAnI3ZlcnRpY2FsU3BsaXR0ZXInLFxuICAgICAgZ3JhbW1hclRleHRhcmVhID0gbmV3IFRleHRhcmVhKGdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHNpemVhYmxlRWxlbWVudCA9IG5ldyBTaXplYWJsZUVsZW1lbnQoc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IpLFxuICAgICAgYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gZmFsc2UsXG4gICAgICBhZnRlclNpemVhYmxlRWxlbWVudCA9IHRydWU7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgZ2V0R3JhbW1hclRleHRhcmVhVmFsdWUoKSB7XG4gICAgY29uc3QgZ3JhbW1hclRleHRhcmVhVmFsdWUgPSBncmFtbWFyVGV4dGFyZWEuZ2V0VmFsdWUoKTtcblxuICAgIHJldHVybiBncmFtbWFyVGV4dGFyZWFWYWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRHcmFtbWFyVGV4dGFyZWFWYWx1ZShncmFtbWFyVGV4dGFyZWFWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gZ3JhbW1hclRleHRhcmVhVmFsdWU7IC8vL1xuXG4gICAgZ3JhbW1hclRleHRhcmVhLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBvbkNvbnRlbnRUZXh0YXJlYUtleVVwKGhhbmRsZXIpIHsgY29udGVudFRleHRhcmVhLm9uS2V5VXAoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgb25HcmFtbWFyVGV4dGFyZWFLZXlVcChoYW5kbGVyKSB7IGdyYW1tYXJUZXh0YXJlYS5vbktleVVwKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShsZXhlciwgcGFyc2VyLCBwcm9kdWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRhcmVhVmFsdWU7ICAvLy9cblxuICAgICAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gbGV4ZXIubGluZXNGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzLCBwcm9kdWN0aW9uKSxcbiAgICAgICAgICAgICAgZG9jdW1lbnROb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICAgIGlmIChkb2N1bWVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkb2N1bWVudCBjYW5ub3QgYmUgcGFyc2VkIGZvciBzb21lIHJlYXNvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IGRvY3VtZW50Tm9kZS5wYXJzZVRyZWUobGluZXMpO1xuXG4gICAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb250ZW50VGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgXG4gICAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyUGFyc2VUcmVlKCkge1xuICAgIGNvbnN0IHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcblxuIl19