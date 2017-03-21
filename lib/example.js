'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easylayout = require('easy-layout'),
    Textarea = easy.Textarea,
    options = easylayout.options,
    SizeableElement = easylayout.SizeableElement,
    VerticalSplitter = easylayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    grammarTextareaSelector = 'textarea#grammar',
    contentTextareaSelector = 'textarea#content',
    parseTreeTextareaSelector = 'textarea#parseTree',
    leftColumn = new SizeableElement(leftColumnSelector),
    contentTextarea = new Textarea(contentTextareaSelector),
    grammarTextarea = new Textarea(grammarTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
    TO_THE_RIGHT_OF = options.situated.TO_THE_RIGHT_OF;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwib3B0aW9ucyIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJncmFtbWFyVGV4dGFyZWFTZWxlY3RvciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImxlZnRDb2x1bW4iLCJjb250ZW50VGV4dGFyZWEiLCJncmFtbWFyVGV4dGFyZWEiLCJwYXJzZVRyZWVUZXh0YXJlYSIsIlRPX1RIRV9SSUdIVF9PRiIsInNpdHVhdGVkIiwiRXhhbXBsZSIsImdldFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJvbiIsImNvbnRlbnQiLCJvbkNoYW5nZSIsImxleGVyIiwicGFyc2VyIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50cyIsInRva2VucyIsInRva2Vuc0Zyb21MaW5lcyIsImRvY3VtZW50Tm9kZSIsInBhcnNlIiwiRXJyb3IiLCJwYXJzZVRyZWUiLCJnZXRQYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJ0b1N0cmluZyIsInBhcnNlVHJlZVRleHRhcmVhSFRNTCIsImh0bWwiLCJjbGVhclBhcnNlVHJlZSIsInJlbW92ZUNsYXNzIiwiZXJyb3IiLCJhZGRDbGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJsaW5lIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsTUFBUixDQUFYO0FBQUEsSUFDSUMsYUFBYUQsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFSUUsV0FBV0gsS0FBS0csUUFGcEI7QUFB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T3NCLE1BQVAsQ0FBY0YsVUFBZCxDQUFUOztBQUVBLFdBQU9wQixNQUFQO0FBQ0QsR0FOWSxFQU1WLEVBTlUsQ0FBYjs7QUFRQSxTQUFPQSxNQUFQO0FBQ0QiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgZWFzeWxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0JyksXG4gICAgVGV4dGFyZWEgPSBlYXN5LlRleHRhcmVhLFxuICAgIG9wdGlvbnMgPSBlYXN5bGF5b3V0Lm9wdGlvbnMsXG4gICAgU2l6ZWFibGVFbGVtZW50ID0gZWFzeWxheW91dC5TaXplYWJsZUVsZW1lbnQsXG4gICAgVmVydGljYWxTcGxpdHRlciA9IGVhc3lsYXlvdXQuVmVydGljYWxTcGxpdHRlcjtcblxudmFyIGxlZnRDb2x1bW5TZWxlY3RvciA9ICcjbGVmdENvbHVtbicsXG4gICAgZ3JhbW1hclRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjZ3JhbW1hcicsXG4gICAgY29udGVudFRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjY29udGVudCcsXG4gICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgIGxlZnRDb2x1bW4gPSBuZXcgU2l6ZWFibGVFbGVtZW50KGxlZnRDb2x1bW5TZWxlY3RvciksXG4gICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICBncmFtbWFyVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoZ3JhbW1hclRleHRhcmVhU2VsZWN0b3IpLFxuICAgIHBhcnNlVHJlZVRleHRhcmVhID0gbmV3IFRleHRhcmVhKHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IpLFxuICAgIFRPX1RIRV9SSUdIVF9PRiA9IG9wdGlvbnMuc2l0dWF0ZWQuVE9fVEhFX1JJR0hUX09GO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcignLmxlZnQudmVydGljYWwuc3BsaXR0ZXInLCBUT19USEVfUklHSFRfT0YsIGxlZnRDb2x1bW4pO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIGdldEdyYW1tYXJUZXh0YXJlYVZhbHVlKCkgeyByZXR1cm4gZ3JhbW1hclRleHRhcmVhLmdldFZhbHVlKCk7IH1cblxuICBzdGF0aWMgc2V0R3JhbW1hclRleHRhcmVhVmFsdWUodmFsdWUpIHsgZ3JhbW1hclRleHRhcmVhLnNldFZhbHVlKHZhbHVlKTsgfVxuXG4gIHN0YXRpYyBvbkNvbnRlbnRUZXh0YXJlYUtleVVwKGhhbmRsZXIpIHsgY29udGVudFRleHRhcmVhLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb250ZW50ID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCk7IC8vL1xuXG4gICAgaGFuZGxlcihjb250ZW50KTtcbiAgfSk7IH1cblxuICBzdGF0aWMgb25HcmFtbWFyVGV4dGFyZWFDaGFuZ2UoaGFuZGxlcikgeyBncmFtbWFyVGV4dGFyZWEub25DaGFuZ2UoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VUcmVlKGxleGVyLCBwYXJzZXIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlOyAgLy8vXG5cbiAgICAgIGlmIChjb250ZW50ICE9PSAnJykge1xuICAgICAgICB2YXIgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcbiAgICAgICAgICAgIGxpbmVzID0gbGV4ZXIubGluZXNGcm9tQ29udGVudHMoY29udGVudHMpLFxuICAgICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICAgIGRvY3VtZW50Tm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgICAgIGlmIChkb2N1bWVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkb2N1bWVudCBjYW5ub3QgYmUgcGFyc2VkIGZvciBzb21lIHJlYXNvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXJzZVRyZWUgPSBkb2N1bWVudE5vZGUuZ2V0UGFyc2VUcmVlKCk7XG5cbiAgICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgICB2YXIgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyUGFyc2VUcmVlKCkge1xuICAgIHZhciBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSAnJztcblxuICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG5cbmZ1bmN0aW9uIHRva2Vuc0Zyb21MaW5lcyhsaW5lcykge1xuICB2YXIgdG9rZW5zID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgbGluZSkge1xuICAgIHZhciBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcblxuICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHRva2Vucztcbn0iXX0=