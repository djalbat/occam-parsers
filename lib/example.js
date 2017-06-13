'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easylayout = require('easy-layout');

var Textarea = easy.Textarea,
    SizeableElement = easylayout.SizeableElement,
    VerticalSplitter = easylayout.VerticalSplitter;


var contentTextareaSelector = 'textarea#content',
    parseTreeTextareaSelector = 'textarea#parseTree',
    bnfGrammarTextareaSelector = 'textarea#bnfGrammar',
    sizeableElementSelector = '#sizeableElement',
    verticalSplitterSelector = '#verticalSplitter',
    contentTextarea = new Textarea(contentTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
    bnfGrammarTextarea = new Textarea(bnfGrammarTextareaSelector),
    sizeableElement = new SizeableElement(sizeableElementSelector),
    beforeSizeableElement = false,
    afterSizeableElement = true;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

var Example = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, null, [{
    key: 'getBNFGrammarTextareaValue',
    value: function getBNFGrammarTextareaValue() {
      return bnfGrammarTextarea.getValue();
    }
  }, {
    key: 'setBNFGrammarTextareaValue',
    value: function setBNFGrammarTextareaValue(value) {
      bnfGrammarTextarea.setValue(value);
    }
  }, {
    key: 'setContentTextareaValue',
    value: function setContentTextareaValue(value) {
      contentTextarea.setValue(value);
    }
  }, {
    key: 'onBNFGrammarTextareaKeyUp',
    value: function onBNFGrammarTextareaKeyUp(handler) {
      bnfGrammarTextarea.onKeyUp(handler);
    }
  }, {
    key: 'onContentTextareaKeyUp',
    value: function onContentTextareaKeyUp(handler) {
      contentTextarea.onKeyUp(handler);
    }
  }, {
    key: 'updateParseTreeTextarea',
    value: function updateParseTreeTextarea(lexer, parser, production) {
      try {
        var contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue,
            ///
        lines = lexer.linesFromContent(content),
            node = parser.nodeFromLines(lines, production),
            documentNode = node; ///

        if (documentNode === null) {
          throw new Error('The document cannot be parsed for some reason.'); ///
        }

        var parseTree = documentNode.generateParseTree(lines);

        parseTree.shiftLine(); //

        var parseTreeString = parseTree.toString(),
            parseTreeTextareaHTML = parseTreeString; ///

        parseTreeTextarea.html(parseTreeTextareaHTML);

        contentTextarea.removeClass('error');
      } catch (error) {
        contentTextarea.addClass('error');

        Example.clearParseTreeTextarea();
      }
    }
  }, {
    key: 'clearParseTreeTextarea',
    value: function clearParseTreeTextarea() {
      var parseTreeTextareaHTML = '';

      parseTreeTextarea.html(parseTreeTextareaHTML);
    }
  }]);

  return Example;
}();

module.exports = Example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImJuZkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yIiwic2l6ZWFibGVFbGVtZW50U2VsZWN0b3IiLCJ2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWEiLCJwYXJzZVRyZWVUZXh0YXJlYSIsImJuZkdyYW1tYXJUZXh0YXJlYSIsInNpemVhYmxlRWxlbWVudCIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwiRXhhbXBsZSIsImdldFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJvbktleVVwIiwibGV4ZXIiLCJwYXJzZXIiLCJwcm9kdWN0aW9uIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJjb250ZW50IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50Iiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJkb2N1bWVudE5vZGUiLCJFcnJvciIsInBhcnNlVHJlZSIsImdlbmVyYXRlUGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwidG9TdHJpbmciLCJwYXJzZVRyZWVUZXh0YXJlYUhUTUwiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJlcnJvciIsImFkZENsYXNzIiwiY2xlYXJQYXJzZVRyZWVUZXh0YXJlYSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHTSxJQUFFRSxRQUFGLEdBQWVILElBQWYsQ0FBRUcsUUFBRjtBQUFBLElBQ0VDLGVBREYsR0FDd0NGLFVBRHhDLENBQ0VFLGVBREY7QUFBQSxJQUNtQkMsZ0JBRG5CLEdBQ3dDSCxVQUR4QyxDQUNtQkcsZ0JBRG5COzs7QUFHTixJQUFNQywwQkFBMEIsa0JBQWhDO0FBQUEsSUFDTUMsNEJBQTRCLG9CQURsQztBQUFBLElBRU1DLDZCQUE2QixxQkFGbkM7QUFBQSxJQUdNQywwQkFBMEIsa0JBSGhDO0FBQUEsSUFJTUMsMkJBQTJCLG1CQUpqQztBQUFBLElBS01DLGtCQUFrQixJQUFJUixRQUFKLENBQWFHLHVCQUFiLENBTHhCO0FBQUEsSUFNTU0sb0JBQW9CLElBQUlULFFBQUosQ0FBYUkseUJBQWIsQ0FOMUI7QUFBQSxJQU9NTSxxQkFBcUIsSUFBSVYsUUFBSixDQUFhSywwQkFBYixDQVAzQjtBQUFBLElBUU1NLGtCQUFrQixJQUFJVixlQUFKLENBQW9CSyx1QkFBcEIsQ0FSeEI7QUFBQSxJQVNNTSx3QkFBd0IsS0FUOUI7QUFBQSxJQVVNQyx1QkFBdUIsSUFWN0I7O0FBWUEsSUFBSVgsZ0JBQUosQ0FBcUJLLHdCQUFyQixFQUErQ0sscUJBQS9DLEVBQXNFQyxvQkFBdEU7O0lBRU1DLE87Ozs7Ozs7aURBQ2dDO0FBQUUsYUFBT0osbUJBQW1CSyxRQUFuQixFQUFQO0FBQXVDOzs7K0NBRTNDQyxLLEVBQU87QUFBRU4seUJBQW1CTyxRQUFuQixDQUE0QkQsS0FBNUI7QUFBcUM7Ozs0Q0FFakRBLEssRUFBTztBQUFFUixzQkFBZ0JTLFFBQWhCLENBQXlCRCxLQUF6QjtBQUFrQzs7OzhDQUV6Q0UsTyxFQUFTO0FBQUVSLHlCQUFtQlMsT0FBbkIsQ0FBMkJELE9BQTNCO0FBQXNDOzs7MkNBRXBEQSxPLEVBQVM7QUFBRVYsc0JBQWdCVyxPQUFoQixDQUF3QkQsT0FBeEI7QUFBbUM7Ozs0Q0FFN0NFLEssRUFBT0MsTSxFQUFRQyxVLEVBQVk7QUFDeEQsVUFBSTtBQUNGLFlBQU1DLHVCQUF1QmYsZ0JBQWdCTyxRQUFoQixFQUE3QjtBQUFBLFlBQ01TLFVBQVVELG9CQURoQjtBQUFBLFlBQ3NDO0FBQ2hDRSxnQkFBUUwsTUFBTU0sZ0JBQU4sQ0FBdUJGLE9BQXZCLENBRmQ7QUFBQSxZQUdNRyxPQUFPTixPQUFPTyxhQUFQLENBQXFCSCxLQUFyQixFQUE0QkgsVUFBNUIsQ0FIYjtBQUFBLFlBSU1PLGVBQWVGLElBSnJCLENBREUsQ0FLMEI7O0FBRTVCLFlBQUlFLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6QixnQkFBTSxJQUFJQyxLQUFKLENBQVUsZ0RBQVYsQ0FBTixDQUR5QixDQUMyQztBQUNyRTs7QUFFRCxZQUFNQyxZQUFZRixhQUFhRyxpQkFBYixDQUErQlAsS0FBL0IsQ0FBbEI7O0FBRUFNLGtCQUFVRSxTQUFWLEdBYkUsQ0Fhc0I7O0FBRXhCLFlBQU1DLGtCQUFrQkgsVUFBVUksUUFBVixFQUF4QjtBQUFBLFlBQ01DLHdCQUF3QkYsZUFEOUIsQ0FmRSxDQWdCOEM7O0FBRWhEekIsMEJBQWtCNEIsSUFBbEIsQ0FBdUJELHFCQUF2Qjs7QUFFQTVCLHdCQUFnQjhCLFdBQWhCLENBQTRCLE9BQTVCO0FBQ0QsT0FyQkQsQ0FxQkUsT0FBT0MsS0FBUCxFQUFjO0FBQ2QvQix3QkFBZ0JnQyxRQUFoQixDQUF5QixPQUF6Qjs7QUFFQTFCLGdCQUFRMkIsc0JBQVI7QUFDRDtBQUNGOzs7NkNBRStCO0FBQzlCLFVBQU1MLHdCQUF3QixFQUE5Qjs7QUFFQTNCLHdCQUFrQjRCLElBQWxCLENBQXVCRCxxQkFBdkI7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUI3QixPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeWxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCwgVmVydGljYWxTcGxpdHRlciB9ID0gZWFzeWxheW91dDtcblxuY29uc3QgY29udGVudFRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjY29udGVudCcsXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3BhcnNlVHJlZScsXG4gICAgICBibmZHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNibmZHcmFtbWFyJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGJuZkdyYW1tYXJUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShibmZHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBzaXplYWJsZUVsZW1lbnQgPSBuZXcgU2l6ZWFibGVFbGVtZW50KHNpemVhYmxlRWxlbWVudFNlbGVjdG9yKSxcbiAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcih2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIGdldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKCkgeyByZXR1cm4gYm5mR3JhbW1hclRleHRhcmVhLmdldFZhbHVlKCk7IH1cblxuICBzdGF0aWMgc2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUodmFsdWUpIHsgYm5mR3JhbW1hclRleHRhcmVhLnNldFZhbHVlKHZhbHVlKTsgfVxuXG4gIHN0YXRpYyBzZXRDb250ZW50VGV4dGFyZWFWYWx1ZSh2YWx1ZSkgeyBjb250ZW50VGV4dGFyZWEuc2V0VmFsdWUodmFsdWUpOyB9XG5cbiAgc3RhdGljIG9uQk5GR3JhbW1hclRleHRhcmVhS2V5VXAoaGFuZGxlcikgeyBibmZHcmFtbWFyVGV4dGFyZWEub25LZXlVcChoYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBvbkNvbnRlbnRUZXh0YXJlYUtleVVwKGhhbmRsZXIpIHsgY29udGVudFRleHRhcmVhLm9uS2V5VXAoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VUcmVlVGV4dGFyZWEobGV4ZXIsIHBhcnNlciwgcHJvZHVjdGlvbikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAvLy9cbiAgICAgICAgICAgIGxpbmVzID0gbGV4ZXIubGluZXNGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBwYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcywgcHJvZHVjdGlvbiksXG4gICAgICAgICAgICBkb2N1bWVudE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIGlmIChkb2N1bWVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZG9jdW1lbnQgY2Fubm90IGJlIHBhcnNlZCBmb3Igc29tZSByZWFzb24uJyk7ICAvLy9cbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gZG9jdW1lbnROb2RlLmdlbmVyYXRlUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuXG4gICAgICBjb250ZW50VGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyUGFyc2VUcmVlVGV4dGFyZWEoKSB7XG4gICAgY29uc3QgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuXG4iXX0=