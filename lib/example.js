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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsImxlZnRDb2x1bW5TZWxlY3RvciIsImdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yIiwiY29udGVudFRleHRhcmVhU2VsZWN0b3IiLCJwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yIiwiVGV4dGFyZWEiLCJvcHRpb25zIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsIlRPX1RIRV9SSUdIVF9PRiIsImxlZnRDb2x1bW4iLCJjb250ZW50VGV4dGFyZWEiLCJncmFtbWFyVGV4dGFyZWEiLCJwYXJzZVRyZWVUZXh0YXJlYSIsIkV4YW1wbGUiLCJnZXRWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVyIiwib24iLCJjb250ZW50Iiwib25DaGFuZ2UiLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnRUZXh0YXJlYVZhbHVlIiwiY29udGVudHMiLCJzcGxpdCIsImxpbmVzIiwibGluZXNGcm9tQ29udGVudHMiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tTGluZXMiLCJkb2N1bWVudE5vZGUiLCJwYXJzZSIsIkVycm9yIiwicGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwidG9TdHJpbmciLCJwYXJzZVRyZWVUZXh0YXJlYUhUTUwiLCJodG1sIiwiY2xlYXJQYXJzZVRyZWUiLCJyZW1vdmVDbGFzcyIsImVycm9yIiwiYWRkQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVkdWNlIiwibGluZSIsImxpbmVUb2tlbnMiLCJnZXRUb2tlbnMiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHQSxJQUFNRSxxQkFBcUIsYUFBM0I7QUFBQSxJQUNNQywwQkFBMEIsa0JBRGhDO0FBQUEsSUFF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QUtFLFNBQUwsRUFBbkI7O0FBRUFwQixhQUFTQSxPQUFPcUIsTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsV0FBT25CLE1BQVA7QUFDRCxHQU5RLEVBTU4sRUFOTSxDQUFmOztBQVFBLFNBQU9BLE1BQVA7QUFDRCIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeWxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IGxlZnRDb2x1bW5TZWxlY3RvciA9ICcjbGVmdENvbHVtbicsXG4gICAgICBncmFtbWFyVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNncmFtbWFyJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBvcHRpb25zLCBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lsYXlvdXQsXG4gICAgICB7IFRPX1RIRV9SSUdIVF9PRiB9ID0gb3B0aW9ucztcblxuY29uc3QgbGVmdENvbHVtbiA9IG5ldyBTaXplYWJsZUVsZW1lbnQobGVmdENvbHVtblNlbGVjdG9yKSxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBncmFtbWFyVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoZ3JhbW1hclRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEocGFyc2VUcmVlVGV4dGFyZWFTZWxlY3Rvcik7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKCcubGVmdC52ZXJ0aWNhbC5zcGxpdHRlcicsIFRPX1RIRV9SSUdIVF9PRiwgbGVmdENvbHVtbik7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgZ2V0R3JhbW1hclRleHRhcmVhVmFsdWUoKSB7IHJldHVybiBncmFtbWFyVGV4dGFyZWEuZ2V0VmFsdWUoKTsgfVxuXG4gIHN0YXRpYyBzZXRHcmFtbWFyVGV4dGFyZWFWYWx1ZSh2YWx1ZSkgeyBncmFtbWFyVGV4dGFyZWEuc2V0VmFsdWUodmFsdWUpOyB9XG5cbiAgc3RhdGljIG9uQ29udGVudFRleHRhcmVhS2V5VXAoaGFuZGxlcikgeyBjb250ZW50VGV4dGFyZWEub24oJ2tleXVwJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYS5nZXRWYWx1ZSgpOyAvLy9cblxuICAgIGhhbmRsZXIoY29udGVudCk7XG4gIH0pOyB9XG5cbiAgc3RhdGljIG9uR3JhbW1hclRleHRhcmVhQ2hhbmdlKGhhbmRsZXIpIHsgZ3JhbW1hclRleHRhcmVhLm9uQ2hhbmdlKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShsZXhlciwgcGFyc2VyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlOyAgLy8vXG5cbiAgICAgIGlmIChjb250ZW50ICE9PSAnJykge1xuICAgICAgICBjb25zdCBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxuICAgICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzKSxcbiAgICAgICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICAgICAgZG9jdW1lbnROb2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRvY3VtZW50IGNhbm5vdCBiZSBwYXJzZWQgZm9yIHNvbWUgcmVhc29uLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyc2VUcmVlID0gZG9jdW1lbnROb2RlLnBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb250ZW50VGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgXG4gICAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyUGFyc2VUcmVlKCkge1xuICAgIGNvbnN0IHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcblxuZnVuY3Rpb24gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSB7XG4gIGNvbnN0IHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcbiAgICAgICAgICBjb25zdCBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcbiAgICAgIFxuICAgICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XG4gICAgICBcbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xuICAgICAgICB9LCBbXSk7XG4gICAgICBcbiAgcmV0dXJuIHRva2Vucztcbn0iXX0=