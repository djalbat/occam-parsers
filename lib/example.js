'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easylayout = require('easy-layout');

var verticalSplitterSelector = '#verticalSplitter',
    sizeableElementSelector = '#sizeableElement',
    grammarTextareaSelector = 'textarea#grammar',
    contentTextareaSelector = 'textarea#content',
    parseTreeTextareaSelector = 'textarea#parseTree';

var Textarea = easy.Textarea,
    SizeableElement = easylayout.SizeableElement,
    VerticalSplitter = easylayout.VerticalSplitter;


var sizeableElement = new SizeableElement(sizeableElementSelector),
    contentTextarea = new Textarea(contentTextareaSelector),
    grammarTextarea = new Textarea(grammarTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector);

var beforeSizeableElement = false,
    afterSizeableElement = true;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

var Example = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, null, [{
    key: 'getGrammarTextareaValue',
    value: function getGrammarTextareaValue() {
      return grammarTextarea.getValue();
    }
  }, {
    key: 'setGrammarTextareaValue',
    value: function setGrammarTextareaValue(value) {
      grammarTextarea.setValue(value);
    }
  }, {
    key: 'onContentTextareaKeyUp',
    value: function onContentTextareaKeyUp(handler) {
      contentTextarea.on('keyup', function () {
        var content = contentTextarea.getValue(); ///

        handler(content);
      });
    }
  }, {
    key: 'onGrammarTextareaChange',
    value: function onGrammarTextareaChange(handler) {
      grammarTextarea.onChange(handler);
    }
  }, {
    key: 'updateParseTree',
    value: function updateParseTree(lexer, parser) {
      try {
        var contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue; ///

        if (content !== '') {
          var contents = content.split(/\n/),
              lines = lexer.linesFromContents(contents),
              tokens = tokensFromLines(lines),
              documentNode = parser.parse(tokens);

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

function tokensFromLines(lines) {
  var tokens = lines.reduce(function (tokens, line) {
    var lineTokens = line.getTokens();

    tokens = tokens.concat(lineTokens);

    return tokens;
  }, []);

  return tokens;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsInNpemVhYmxlRWxlbWVudFNlbGVjdG9yIiwiZ3JhbW1hclRleHRhcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IiLCJUZXh0YXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJzaXplYWJsZUVsZW1lbnQiLCJjb250ZW50VGV4dGFyZWEiLCJncmFtbWFyVGV4dGFyZWEiLCJwYXJzZVRyZWVUZXh0YXJlYSIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwiRXhhbXBsZSIsImdldFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJvbiIsImNvbnRlbnQiLCJvbkNoYW5nZSIsImxleGVyIiwicGFyc2VyIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50cyIsInRva2VucyIsInRva2Vuc0Zyb21MaW5lcyIsImRvY3VtZW50Tm9kZSIsInBhcnNlIiwiRXJyb3IiLCJwYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJ0b1N0cmluZyIsInBhcnNlVHJlZVRleHRhcmVhSFRNTCIsImh0bWwiLCJjbGVhclBhcnNlVHJlZSIsInJlbW92ZUNsYXNzIiwiZXJyb3IiLCJhZGRDbGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJsaW5lIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztB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QUFhLFVBQVNqQixNQUFULEVBQWlCa0IsSUFBakIsRUFBdUI7QUFDM0MsUUFBTUMsYUFBYUQsS0FBS0UsU0FBTCxFQUFuQjs7QUFFQXBCLGFBQVNBLE9BQU9xQixNQUFQLENBQWNGLFVBQWQsQ0FBVDs7QUFFQSxXQUFPbkIsTUFBUDtBQUNELEdBTlEsRUFNTixFQU5NLENBQWY7O0FBUUEsU0FBT0EsTUFBUDtBQUNEIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5bGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgZ3JhbW1hclRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjZ3JhbW1hcicsXG4gICAgICBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNjb250ZW50JyxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcGFyc2VUcmVlJztcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50LCBWZXJ0aWNhbFNwbGl0dGVyIH0gPSBlYXN5bGF5b3V0O1xuXG5jb25zdCBzaXplYWJsZUVsZW1lbnQgPSBuZXcgU2l6ZWFibGVFbGVtZW50KHNpemVhYmxlRWxlbWVudFNlbGVjdG9yKSxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBncmFtbWFyVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoZ3JhbW1hclRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEocGFyc2VUcmVlVGV4dGFyZWFTZWxlY3Rvcik7XG5cbmNvbnN0IGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcih2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIGdldEdyYW1tYXJUZXh0YXJlYVZhbHVlKCkgeyByZXR1cm4gZ3JhbW1hclRleHRhcmVhLmdldFZhbHVlKCk7IH1cblxuICBzdGF0aWMgc2V0R3JhbW1hclRleHRhcmVhVmFsdWUodmFsdWUpIHsgZ3JhbW1hclRleHRhcmVhLnNldFZhbHVlKHZhbHVlKTsgfVxuXG4gIHN0YXRpYyBvbkNvbnRlbnRUZXh0YXJlYUtleVVwKGhhbmRsZXIpIHsgY29udGVudFRleHRhcmVhLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKTsgLy8vXG5cbiAgICBoYW5kbGVyKGNvbnRlbnQpO1xuICB9KTsgfVxuXG4gIHN0YXRpYyBvbkdyYW1tYXJUZXh0YXJlYUNoYW5nZShoYW5kbGVyKSB7IGdyYW1tYXJUZXh0YXJlYS5vbkNoYW5nZShoYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWUobGV4ZXIsIHBhcnNlcikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWFWYWx1ZTsgIC8vL1xuXG4gICAgICBpZiAoY29udGVudCAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcbiAgICAgICAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cyksXG4gICAgICAgICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgICAgIGRvY3VtZW50Tm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgICAgIGlmIChkb2N1bWVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkb2N1bWVudCBjYW5ub3QgYmUgcGFyc2VkIGZvciBzb21lIHJlYXNvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IGRvY3VtZW50Tm9kZS5wYXJzZVRyZWUobGluZXMpO1xuXG4gICAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb250ZW50VGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgXG4gICAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyUGFyc2VUcmVlKCkge1xuICAgIGNvbnN0IHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcblxuZnVuY3Rpb24gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSB7XG4gIGNvbnN0IHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcbiAgICAgICAgICBjb25zdCBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcbiAgICAgIFxuICAgICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XG4gICAgICBcbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xuICAgICAgICB9LCBbXSk7XG4gICAgICBcbiAgcmV0dXJuIHRva2Vucztcbn0iXX0=