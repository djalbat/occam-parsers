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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwib3B0aW9ucyIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJncmFtbWFyVGV4dGFyZWFTZWxlY3RvciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImxlZnRDb2x1bW4iLCJjb250ZW50VGV4dGFyZWEiLCJncmFtbWFyVGV4dGFyZWEiLCJwYXJzZVRyZWVUZXh0YXJlYSIsIlRPX1RIRV9SSUdIVF9PRiIsInNpdHVhdGVkIiwiRXhhbXBsZSIsImdldFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJvbiIsImNvbnRlbnQiLCJvbkNoYW5nZSIsImxleGVyIiwicGFyc2VyIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50cyIsInRva2VucyIsInRva2Vuc0Zyb21MaW5lcyIsImRvY3VtZW50Tm9kZSIsInBhcnNlIiwiRXJyb3IiLCJwYXJzZVRyZWUiLCJnZXRQYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJ0b1N0cmluZyIsInBhcnNlVHJlZVRleHRhcmVhSFRNTCIsImh0bWwiLCJjbGVhclBhcnNlVHJlZSIsInJlbW92ZUNsYXNzIiwiZXJyb3IiLCJhZGRDbGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJsaW5lIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5CO0FBQUEsSUFFTUUsV0FBV0gsS0FBS0csUUFGdEI7QUFB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QUFPc0IsTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsV0FBT3BCLE1BQVA7QUFDRCxHQU5RLEVBTU4sRUFOTSxDQUFmOztBQVFBLFNBQU9BLE1BQVA7QUFDRCIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeWxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0JyksXG4gICAgICBUZXh0YXJlYSA9IGVhc3kuVGV4dGFyZWEsXG4gICAgICBvcHRpb25zID0gZWFzeWxheW91dC5vcHRpb25zLFxuICAgICAgU2l6ZWFibGVFbGVtZW50ID0gZWFzeWxheW91dC5TaXplYWJsZUVsZW1lbnQsXG4gICAgICBWZXJ0aWNhbFNwbGl0dGVyID0gZWFzeWxheW91dC5WZXJ0aWNhbFNwbGl0dGVyO1xuXG5jb25zdCBsZWZ0Q29sdW1uU2VsZWN0b3IgPSAnI2xlZnRDb2x1bW4nLFxuICAgICAgZ3JhbW1hclRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjZ3JhbW1hcicsXG4gICAgICBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNjb250ZW50JyxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcGFyc2VUcmVlJyxcbiAgICAgIGxlZnRDb2x1bW4gPSBuZXcgU2l6ZWFibGVFbGVtZW50KGxlZnRDb2x1bW5TZWxlY3RvciksXG4gICAgICBjb250ZW50VGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoY29udGVudFRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgZ3JhbW1hclRleHRhcmVhID0gbmV3IFRleHRhcmVhKGdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhID0gbmV3IFRleHRhcmVhKHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgVE9fVEhFX1JJR0hUX09GID0gb3B0aW9ucy5zaXR1YXRlZC5UT19USEVfUklHSFRfT0Y7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKCcubGVmdC52ZXJ0aWNhbC5zcGxpdHRlcicsIFRPX1RIRV9SSUdIVF9PRiwgbGVmdENvbHVtbik7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgZ2V0R3JhbW1hclRleHRhcmVhVmFsdWUoKSB7IHJldHVybiBncmFtbWFyVGV4dGFyZWEuZ2V0VmFsdWUoKTsgfVxuXG4gIHN0YXRpYyBzZXRHcmFtbWFyVGV4dGFyZWFWYWx1ZSh2YWx1ZSkgeyBncmFtbWFyVGV4dGFyZWEuc2V0VmFsdWUodmFsdWUpOyB9XG5cbiAgc3RhdGljIG9uQ29udGVudFRleHRhcmVhS2V5VXAoaGFuZGxlcikgeyBjb250ZW50VGV4dGFyZWEub24oJ2tleXVwJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYS5nZXRWYWx1ZSgpOyAvLy9cblxuICAgIGhhbmRsZXIoY29udGVudCk7XG4gIH0pOyB9XG5cbiAgc3RhdGljIG9uR3JhbW1hclRleHRhcmVhQ2hhbmdlKGhhbmRsZXIpIHsgZ3JhbW1hclRleHRhcmVhLm9uQ2hhbmdlKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShsZXhlciwgcGFyc2VyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlOyAgLy8vXG5cbiAgICAgIGlmIChjb250ZW50ICE9PSAnJykge1xuICAgICAgICBjb25zdCBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxuICAgICAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cyksXG4gICAgICAgICAgICB0b2tlbnMgPSB0b2tlbnNGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgICAgZG9jdW1lbnROb2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRvY3VtZW50IGNhbm5vdCBiZSBwYXJzZWQgZm9yIHNvbWUgcmVhc29uLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyc2VUcmVlID0gZG9jdW1lbnROb2RlLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyUGFyc2VUcmVlKCkge1xuICAgIGNvbnN0IHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcblxuZnVuY3Rpb24gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSB7XG4gIGNvbnN0IHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcbiAgICAgICAgICBjb25zdCBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcbiAgICAgIFxuICAgICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XG4gICAgICBcbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xuICAgICAgICB9LCBbXSk7XG4gICAgICBcbiAgcmV0dXJuIHRva2Vucztcbn0iXX0=