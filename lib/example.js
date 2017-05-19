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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yIiwiY29udGVudFRleHRhcmVhU2VsZWN0b3IiLCJwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yIiwic2l6ZWFibGVFbGVtZW50U2VsZWN0b3IiLCJ2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IiLCJncmFtbWFyVGV4dGFyZWEiLCJjb250ZW50VGV4dGFyZWEiLCJwYXJzZVRyZWVUZXh0YXJlYSIsInNpemVhYmxlRWxlbWVudCIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwiRXhhbXBsZSIsImdyYW1tYXJUZXh0YXJlYVZhbHVlIiwiZ2V0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsIm9uS2V5VXAiLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnRUZXh0YXJlYVZhbHVlIiwiY29udGVudCIsImNvbnRlbnRzIiwic3BsaXQiLCJsaW5lcyIsImxpbmVzRnJvbUNvbnRlbnRzIiwidG9rZW5zIiwidG9rZW5zRnJvbUxpbmVzIiwiZG9jdW1lbnROb2RlIiwicGFyc2UiLCJFcnJvciIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsInRvU3RyaW5nIiwicGFyc2VUcmVlVGV4dGFyZWFIVE1MIiwiaHRtbCIsImNsZWFyUGFyc2VUcmVlIiwicmVtb3ZlQ2xhc3MiLCJlcnJvciIsImFkZENsYXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlZHVjZSIsImxpbmUiLCJsaW5lVG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxR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LE1BQVQsRUFBaUJrQixJQUFqQixFQUF1QjtBQUMzQyxRQUFNQyxhQUFhRCxLQUFLRSxTQUFMLEVBQW5COztBQUVBcEIsYUFBU0EsT0FBT3FCLE1BQVAsQ0FBY0YsVUFBZCxDQUFUOztBQUVBLFdBQU9uQixNQUFQO0FBQ0QsR0FOUSxFQU1OLEVBTk0sQ0FBZjs7QUFRQSxTQUFPQSxNQUFQO0FBQ0QiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lsYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lsYXlvdXQ7XG5cbmNvbnN0IGdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2dyYW1tYXInLFxuICAgICAgY29udGVudFRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjY29udGVudCcsXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3BhcnNlVHJlZScsXG4gICAgICBzaXplYWJsZUVsZW1lbnRTZWxlY3RvciA9ICcjc2l6ZWFibGVFbGVtZW50JyxcbiAgICAgIHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciA9ICcjdmVydGljYWxTcGxpdHRlcicsXG4gICAgICBncmFtbWFyVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoZ3JhbW1hclRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhID0gbmV3IFRleHRhcmVhKHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgc2l6ZWFibGVFbGVtZW50ID0gbmV3IFNpemVhYmxlRWxlbWVudChzaXplYWJsZUVsZW1lbnRTZWxlY3RvciksXG4gICAgICBiZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBmYWxzZSxcbiAgICAgIGFmdGVyU2l6ZWFibGVFbGVtZW50ID0gdHJ1ZTtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIodmVydGljYWxTcGxpdHRlclNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50KTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBnZXRHcmFtbWFyVGV4dGFyZWFWYWx1ZSgpIHtcbiAgICBjb25zdCBncmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGdyYW1tYXJUZXh0YXJlYS5nZXRWYWx1ZSgpO1xuXG4gICAgcmV0dXJuIGdyYW1tYXJUZXh0YXJlYVZhbHVlO1xuICB9XG5cbiAgc3RhdGljIHNldEdyYW1tYXJUZXh0YXJlYVZhbHVlKGdyYW1tYXJUZXh0YXJlYVZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBncmFtbWFyVGV4dGFyZWFWYWx1ZTsgLy8vXG5cbiAgICBncmFtbWFyVGV4dGFyZWEuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIG9uQ29udGVudFRleHRhcmVhS2V5VXAoaGFuZGxlcikgeyBjb250ZW50VGV4dGFyZWEub25LZXlVcChoYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBvbkdyYW1tYXJUZXh0YXJlYUtleVVwKGhhbmRsZXIpIHsgZ3JhbW1hclRleHRhcmVhLm9uS2V5VXAoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VUcmVlKGxleGVyLCBwYXJzZXIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWFWYWx1ZTsgIC8vL1xuXG4gICAgICBpZiAoY29udGVudCAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcbiAgICAgICAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cyksXG4gICAgICAgICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgICAgIGRvY3VtZW50Tm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgICAgIGlmIChkb2N1bWVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkb2N1bWVudCBjYW5ub3QgYmUgcGFyc2VkIGZvciBzb21lIHJlYXNvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IGRvY3VtZW50Tm9kZS5wYXJzZVRyZWUobGluZXMpO1xuXG4gICAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb250ZW50VGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgXG4gICAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyUGFyc2VUcmVlKCkge1xuICAgIGNvbnN0IHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcblxuZnVuY3Rpb24gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSB7XG4gIGNvbnN0IHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcbiAgICAgICAgICBjb25zdCBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcbiAgICAgIFxuICAgICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XG4gICAgICBcbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xuICAgICAgICB9LCBbXSk7XG4gICAgICBcbiAgcmV0dXJuIHRva2Vucztcbn0iXX0=