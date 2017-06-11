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
          throw new Error('The document cannot be parsed for some reason.');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImJuZkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yIiwic2l6ZWFibGVFbGVtZW50U2VsZWN0b3IiLCJ2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWEiLCJwYXJzZVRyZWVUZXh0YXJlYSIsImJuZkdyYW1tYXJUZXh0YXJlYSIsInNpemVhYmxlRWxlbWVudCIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwiRXhhbXBsZSIsImdldFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJvbktleVVwIiwibGV4ZXIiLCJwYXJzZXIiLCJwcm9kdWN0aW9uIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJjb250ZW50IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50Iiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJkb2N1bWVudE5vZGUiLCJFcnJvciIsInBhcnNlVHJlZSIsImdlbmVyYXRlUGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwidG9TdHJpbmciLCJwYXJzZVRyZWVUZXh0YXJlYUhUTUwiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJlcnJvciIsImFkZENsYXNzIiwiY2xlYXJQYXJzZVRyZWVUZXh0YXJlYSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHTSxJQUFFRSxRQUFGLEdBQWVILElBQWYsQ0FBRUcsUUFBRjtBQUFBLElBQ0VDLGVBREYsR0FDd0NGLFVBRHhDLENBQ0VFLGVBREY7QUFBQSxJQUNtQkMsZ0JBRG5CLEdBQ3dDSCxVQUR4QyxDQUNtQkcsZ0JBRG5COzs7QUFHTixJQUFNQywwQkFBMEIsa0JBQWhDO0FBQUEsSUFDTUMsNEJBQTRCLG9CQURsQztBQUFBLElBRU1DLDZCQUE2QixxQkFGbkM7QUFBQSxJQUdNQywwQkFBMEIsa0JBSGhDO0FBQUEsSUFJTUMsMkJBQTJCLG1CQUpqQztBQUFBLElBS01DLGtCQUFrQixJQUFJUixRQUFKLENBQWFHLHVCQUFiLENBTHhCO0FBQUEsSUFNTU0sb0JBQW9CLElBQUlULFFBQUosQ0FBYUkseUJBQWIsQ0FOMUI7QUFBQSxJQU9NTSxxQkFBcUIsSUFBSVYsUUFBSixDQUFhSywwQkFBYixDQVAzQjtBQUFBLElBUU1NLGtCQUFrQixJQUFJVixlQUFKLENBQW9CSyx1QkFBcEIsQ0FSeEI7QUFBQSxJQVNNTSx3QkFBd0IsS0FUOUI7QUFBQSxJQVVNQyx1QkFBdUIsSUFWN0I7O0FBWUEsSUFBSVgsZ0JBQUosQ0FBcUJLLHdCQUFyQixFQUErQ0sscUJBQS9DLEVBQXNFQyxvQkFBdEU7O0lBRU1DLE87Ozs7Ozs7aURBQ2dDO0FBQUUsYUFBT0osbUJBQW1CSyxRQUFuQixFQUFQO0FBQXVDOzs7K0NBRTNDQyxLLEVBQU87QUFBRU4seUJBQW1CTyxRQUFuQixDQUE0QkQsS0FBNUI7QUFBcUM7Ozs0Q0FFakRBLEssRUFBTztBQUFFUixzQkFBZ0JTLFFBQWhCLENBQXlCRCxLQUF6QjtBQUFrQzs7OzhDQUV6Q0UsTyxFQUFTO0FBQUVSLHlCQUFtQlMsT0FBbkIsQ0FBMkJELE9BQTNCO0FBQXNDOzs7MkNBRXBEQSxPLEVBQVM7QUFBRVYsc0JBQWdCVyxPQUFoQixDQUF3QkQsT0FBeEI7QUFBbUM7Ozs0Q0FFN0NFLEssRUFBT0MsTSxFQUFRQyxVLEVBQVk7QUFDeEQsVUFBSTtBQUNGLFlBQU1DLHVCQUF1QmYsZ0JBQWdCTyxRQUFoQixFQUE3QjtBQUFBLFlBQ01TLFVBQVVELG9CQURoQjtBQUFBLFlBQ3NDO0FBQ2hDRSxnQkFBUUwsTUFBTU0sZ0JBQU4sQ0FBdUJGLE9BQXZCLENBRmQ7QUFBQSxZQUdNRyxPQUFPTixPQUFPTyxhQUFQLENBQXFCSCxLQUFyQixFQUE0QkgsVUFBNUIsQ0FIYjtBQUFBLFlBSU1PLGVBQWVGLElBSnJCLENBREUsQ0FLMEI7O0FBRTVCLFlBQUlFLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6QixnQkFBTSxJQUFJQyxLQUFKLENBQVUsZ0RBQVYsQ0FBTjtBQUNEOztBQUVELFlBQU1DLFlBQVlGLGFBQWFHLGlCQUFiLENBQStCUCxLQUEvQixDQUFsQjs7QUFFQU0sa0JBQVVFLFNBQVYsR0FiRSxDQWFzQjs7QUFFeEIsWUFBTUMsa0JBQWtCSCxVQUFVSSxRQUFWLEVBQXhCO0FBQUEsWUFDTUMsd0JBQXdCRixlQUQ5QixDQWZFLENBZ0I4Qzs7QUFFaER6QiwwQkFBa0I0QixJQUFsQixDQUF1QkQscUJBQXZCOztBQUVBNUIsd0JBQWdCOEIsV0FBaEIsQ0FBNEIsT0FBNUI7QUFDRCxPQXJCRCxDQXFCRSxPQUFPQyxLQUFQLEVBQWM7QUFDZC9CLHdCQUFnQmdDLFFBQWhCLENBQXlCLE9BQXpCOztBQUVBMUIsZ0JBQVEyQixzQkFBUjtBQUNEO0FBQ0Y7Ozs2Q0FFK0I7QUFDOUIsVUFBTUwsd0JBQXdCLEVBQTlCOztBQUVBM0Isd0JBQWtCNEIsSUFBbEIsQ0FBdUJELHFCQUF2QjtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQjdCLE9BQWpCIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5bGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50LCBWZXJ0aWNhbFNwbGl0dGVyIH0gPSBlYXN5bGF5b3V0O1xuXG5jb25zdCBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNjb250ZW50JyxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcGFyc2VUcmVlJyxcbiAgICAgIGJuZkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2JuZkdyYW1tYXInLFxuICAgICAgc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IgPSAnI3NpemVhYmxlRWxlbWVudCcsXG4gICAgICB2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IgPSAnI3ZlcnRpY2FsU3BsaXR0ZXInLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhID0gbmV3IFRleHRhcmVhKHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgYm5mR3JhbW1hclRleHRhcmVhID0gbmV3IFRleHRhcmVhKGJuZkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHNpemVhYmxlRWxlbWVudCA9IG5ldyBTaXplYWJsZUVsZW1lbnQoc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IpLFxuICAgICAgYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gZmFsc2UsXG4gICAgICBhZnRlclNpemVhYmxlRWxlbWVudCA9IHRydWU7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgZ2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUoKSB7IHJldHVybiBibmZHcmFtbWFyVGV4dGFyZWEuZ2V0VmFsdWUoKTsgfVxuXG4gIHN0YXRpYyBzZXRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSh2YWx1ZSkgeyBibmZHcmFtbWFyVGV4dGFyZWEuc2V0VmFsdWUodmFsdWUpOyB9XG5cbiAgc3RhdGljIHNldENvbnRlbnRUZXh0YXJlYVZhbHVlKHZhbHVlKSB7IGNvbnRlbnRUZXh0YXJlYS5zZXRWYWx1ZSh2YWx1ZSk7IH1cblxuICBzdGF0aWMgb25CTkZHcmFtbWFyVGV4dGFyZWFLZXlVcChoYW5kbGVyKSB7IGJuZkdyYW1tYXJUZXh0YXJlYS5vbktleVVwKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIG9uQ29udGVudFRleHRhcmVhS2V5VXAoaGFuZGxlcikgeyBjb250ZW50VGV4dGFyZWEub25LZXlVcChoYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWVUZXh0YXJlYShsZXhlciwgcGFyc2VyLCBwcm9kdWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRhcmVhVmFsdWUsIC8vL1xuICAgICAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IHBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzLCBwcm9kdWN0aW9uKSxcbiAgICAgICAgICAgIGRvY3VtZW50Tm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgaWYgKGRvY3VtZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkb2N1bWVudCBjYW5ub3QgYmUgcGFyc2VkIGZvciBzb21lIHJlYXNvbi4nKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gZG9jdW1lbnROb2RlLmdlbmVyYXRlUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuXG4gICAgICBjb250ZW50VGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyUGFyc2VUcmVlVGV4dGFyZWEoKSB7XG4gICAgY29uc3QgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuXG4iXX0=