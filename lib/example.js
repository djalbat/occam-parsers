'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easylayout = require('easy-layout');

var leftColumnSelector = '#leftColumn',
    grammarTextareaSelector = 'textarea#grammar',
    contentTextareaSelector = 'textarea#content',
    parseTreeTextareaSelector = 'textarea#parseTree';

var Textarea = easy.Textarea,
    options = easylayout.options,
    SizeableElement = easylayout.SizeableElement,
    VerticalSplitter = easylayout.VerticalSplitter,
    TO_THE_RIGHT_OF = options.TO_THE_RIGHT_OF;


var leftColumn = new SizeableElement(leftColumnSelector),
    contentTextarea = new Textarea(contentTextareaSelector),
    grammarTextarea = new Textarea(grammarTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector);

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

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

          var parseTree = documentNode.getParseTree();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsImxlZnRDb2x1bW5TZWxlY3RvciIsImdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yIiwiY29udGVudFRleHRhcmVhU2VsZWN0b3IiLCJwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yIiwiVGV4dGFyZWEiLCJvcHRpb25zIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsIlRPX1RIRV9SSUdIVF9PRiIsImxlZnRDb2x1bW4iLCJjb250ZW50VGV4dGFyZWEiLCJncmFtbWFyVGV4dGFyZWEiLCJwYXJzZVRyZWVUZXh0YXJlYSIsIkV4YW1wbGUiLCJnZXRWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVyIiwib24iLCJjb250ZW50Iiwib25DaGFuZ2UiLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnRUZXh0YXJlYVZhbHVlIiwiY29udGVudHMiLCJzcGxpdCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudHMiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tTGluZXMiLCJkb2N1bWVudE5vZGUiLCJwYXJzZSIsIkVycm9yIiwicGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwidG9TdHJpbmciLCJwYXJzZVRyZWVUZXh0YXJlYUhUTUwiLCJodG1sIiwiY2xlYXJQYXJzZVRyZWUiLCJyZW1vdmVDbGFzcyIsImVycm9yIiwiYWRkQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVkdWNlIiwibGluZSIsImxpbmVUb2tlbnMiLCJnZXRUb2tlbnMiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHQSxJQUFNRSxxQkFBcUIsYUFBM0I7QUFBQSxJQUNNQywwQkFBMEIs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S0FBS0UsU0FBTCxFQUFuQjs7QUFFQXJCLGFBQVNBLE9BQU9zQixNQUFQLENBQWNGLFVBQWQsQ0FBVDs7QUFFQSxXQUFPcEIsTUFBUDtBQUNELEdBTlEsRUFNTixFQU5NLENBQWY7O0FBUUEsU0FBT0EsTUFBUDtBQUNEIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5bGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICAgIGdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2dyYW1tYXInLFxuICAgICAgY29udGVudFRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjY29udGVudCcsXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3BhcnNlVHJlZSc7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IG9wdGlvbnMsIFNpemVhYmxlRWxlbWVudCwgVmVydGljYWxTcGxpdHRlciB9ID0gZWFzeWxheW91dCxcbiAgICAgIHsgVE9fVEhFX1JJR0hUX09GIH0gPSBvcHRpb25zO1xuXG5jb25zdCBsZWZ0Q29sdW1uID0gbmV3IFNpemVhYmxlRWxlbWVudChsZWZ0Q29sdW1uU2VsZWN0b3IpLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGdyYW1tYXJUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShncmFtbWFyVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yKTtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIoJy5sZWZ0LnZlcnRpY2FsLnNwbGl0dGVyJywgVE9fVEhFX1JJR0hUX09GLCBsZWZ0Q29sdW1uKTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBnZXRHcmFtbWFyVGV4dGFyZWFWYWx1ZSgpIHsgcmV0dXJuIGdyYW1tYXJUZXh0YXJlYS5nZXRWYWx1ZSgpOyB9XG5cbiAgc3RhdGljIHNldEdyYW1tYXJUZXh0YXJlYVZhbHVlKHZhbHVlKSB7IGdyYW1tYXJUZXh0YXJlYS5zZXRWYWx1ZSh2YWx1ZSk7IH1cblxuICBzdGF0aWMgb25Db250ZW50VGV4dGFyZWFLZXlVcChoYW5kbGVyKSB7IGNvbnRlbnRUZXh0YXJlYS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCk7IC8vL1xuXG4gICAgaGFuZGxlcihjb250ZW50KTtcbiAgfSk7IH1cblxuICBzdGF0aWMgb25HcmFtbWFyVGV4dGFyZWFDaGFuZ2UoaGFuZGxlcikgeyBncmFtbWFyVGV4dGFyZWEub25DaGFuZ2UoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VUcmVlKGxleGVyLCBwYXJzZXIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRhcmVhVmFsdWU7ICAvLy9cblxuICAgICAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXG4gICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzKSxcbiAgICAgICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgICBkb2N1bWVudE5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgICAgICBpZiAoZG9jdW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZG9jdW1lbnQgY2Fubm90IGJlIHBhcnNlZCBmb3Igc29tZSByZWFzb24uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZVRyZWUgPSBkb2N1bWVudE5vZGUuZ2V0UGFyc2VUcmVlKCk7XG5cbiAgICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb250ZW50VGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2xlYXJQYXJzZVRyZWUoKSB7XG4gICAgY29uc3QgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuXG5mdW5jdGlvbiB0b2tlbnNGcm9tTGluZXMobGluZXMpIHtcbiAgY29uc3QgdG9rZW5zID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgbGluZSkge1xuICAgICAgICAgIGNvbnN0IGxpbmVUb2tlbnMgPSBsaW5lLmdldFRva2VucygpO1xuICAgICAgXG4gICAgICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChsaW5lVG9rZW5zKTtcbiAgICAgIFxuICAgICAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgICAgIH0sIFtdKTtcbiAgICAgIFxuICByZXR1cm4gdG9rZW5zO1xufSJdfQ==