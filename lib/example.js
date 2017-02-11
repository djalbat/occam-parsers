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
    key: 'onContentTextAreaKeyUp',
    value: function onContentTextAreaKeyUp(handler) {
      contentTextArea.on('keyup', function () {
        var content = contentTextArea.getValue(); ///

        handler(content);
      });
    }
  }, {
    key: 'onGrammarTextAreaChange',
    value: function onGrammarTextAreaChange(handler) {
      grammarTextArea.onChange(handler);
    }
  }, {
    key: 'updateParseTree',
    value: function updateParseTree(lexer, parser) {
      try {
        var contentTextAreaValue = contentTextArea.getValue(),
            content = contentTextAreaValue; ///

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
              parseTreeTextAreaHTML = parseTreeString; ///

          parseTreeTextArea.html(parseTreeTextAreaHTML);
        } else {
          Example.clearParseTree();
        }

        contentTextArea.removeClass('error');
      } catch (error) {
        contentTextArea.addClass('error');

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

function tokensFromLines(lines) {
  var tokens = lines.reduce(function (tokens, line) {
    var lineTokens = line.getTokens();

    tokens = tokens.concat(lineTokens);

    return tokens;
  }, []);

  return tokens;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJncmFtbWFyVGV4dEFyZWFTZWxlY3RvciIsImNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciIsImxlZnRDb2x1bW4iLCJjb250ZW50VGV4dEFyZWEiLCJncmFtbWFyVGV4dEFyZWEiLCJwYXJzZVRyZWVUZXh0QXJlYSIsIlRPX1RIRV9SSUdIVF9PRiIsInNpdHVhdGVkIiwiRXhhbXBsZSIsImdldFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJvbiIsImNvbnRlbnQiLCJvbkNoYW5nZSIsImxleGVyIiwicGFyc2VyIiwiY29udGVudFRleHRBcmVhVmFsdWUiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50cyIsInRva2VucyIsInRva2Vuc0Zyb21MaW5lcyIsImRvY3VtZW50Tm9kZSIsInBhcnNlIiwiRXJyb3IiLCJwYXJzZVRyZWUiLCJnZXRQYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJ0b1N0cmluZyIsInBhcnNlVHJlZVRleHRBcmVhSFRNTCIsImh0bWwiLCJjbGVhclBhcnNlVHJlZSIsInJlbW92ZUNsYXNzIiwiZXJyb3IiLCJhZGRDbGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJsaW5lIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsZUFBZUQsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFSUUsV0FBV0gsT0FBT0csUUFGdEI7QUFBQSxJQUdJ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QUFPcEIsTUFBUDtBQUNELEdBTlksRUFNVixFQU5VLENBQWI7O0FBUUEsU0FBT0EsTUFBUDtBQUNEIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBlYXN5dWlsYXlvdXQgPSByZXF1aXJlKCdlYXN5dWktbGF5b3V0JyksXG4gICAgVGV4dEFyZWEgPSBlYXN5dWkuVGV4dEFyZWEsXG4gICAgU2l6ZWFibGVFbGVtZW50ID0gZWFzeXVpbGF5b3V0LlNpemVhYmxlRWxlbWVudCxcbiAgICBWZXJ0aWNhbFNwbGl0dGVyID0gZWFzeXVpbGF5b3V0LlZlcnRpY2FsU3BsaXR0ZXI7XG5cbnZhciBsZWZ0Q29sdW1uU2VsZWN0b3IgPSAnI2xlZnRDb2x1bW4nLFxuICAgIGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2dyYW1tYXInLFxuICAgIGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgIHBhcnNlVHJlZVRleHRBcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcGFyc2VUcmVlJyxcbiAgICBsZWZ0Q29sdW1uID0gbmV3IFNpemVhYmxlRWxlbWVudChsZWZ0Q29sdW1uU2VsZWN0b3IpLFxuICAgIGNvbnRlbnRUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShjb250ZW50VGV4dEFyZWFTZWxlY3RvciksXG4gICAgZ3JhbW1hclRleHRBcmVhID0gbmV3IFRleHRBcmVhKGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBwYXJzZVRyZWVUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShwYXJzZVRyZWVUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBUT19USEVfUklHSFRfT0YgPSBWZXJ0aWNhbFNwbGl0dGVyLnNpdHVhdGVkLlRPX1RIRV9SSUdIVF9PRjtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIoJy5sZWZ0LnZlcnRpY2FsLnNwbGl0dGVyJywgVE9fVEhFX1JJR0hUX09GLCBsZWZ0Q29sdW1uKTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBnZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSgpIHsgcmV0dXJuIGdyYW1tYXJUZXh0QXJlYS5nZXRWYWx1ZSgpOyB9XG5cbiAgc3RhdGljIHNldEdyYW1tYXJUZXh0QXJlYVZhbHVlKHZhbHVlKSB7IGdyYW1tYXJUZXh0QXJlYS5zZXRWYWx1ZSh2YWx1ZSk7IH1cblxuICBzdGF0aWMgb25Db250ZW50VGV4dEFyZWFLZXlVcChoYW5kbGVyKSB7IGNvbnRlbnRUZXh0QXJlYS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29udGVudCA9IGNvbnRlbnRUZXh0QXJlYS5nZXRWYWx1ZSgpOyAvLy9cblxuICAgIGhhbmRsZXIoY29udGVudCk7XG4gIH0pOyB9XG5cbiAgc3RhdGljIG9uR3JhbW1hclRleHRBcmVhQ2hhbmdlKGhhbmRsZXIpIHsgZ3JhbW1hclRleHRBcmVhLm9uQ2hhbmdlKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShsZXhlciwgcGFyc2VyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBjb250ZW50VGV4dEFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dEFyZWFWYWx1ZTsgIC8vL1xuXG4gICAgICBpZiAoY29udGVudCAhPT0gJycpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXG4gICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzKSxcbiAgICAgICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgICBkb2N1bWVudE5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgICAgICBpZiAoZG9jdW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZG9jdW1lbnQgY2Fubm90IGJlIHBhcnNlZCBmb3Igc29tZSByZWFzb24uJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFyc2VUcmVlID0gZG9jdW1lbnROb2RlLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgICAgdmFyIHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS50b1N0cmluZygpLFxuICAgICAgICAgICAgcGFyc2VUcmVlVGV4dEFyZWFIVE1MID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG5cbiAgICAgICAgcGFyc2VUcmVlVGV4dEFyZWEuaHRtbChwYXJzZVRyZWVUZXh0QXJlYUhUTUwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZSgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50VGV4dEFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnRlbnRUZXh0QXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGVhclBhcnNlVHJlZSgpIHtcbiAgICB2YXIgcGFyc2VUcmVlVGV4dEFyZWFIVE1MID0gJyc7XG5cbiAgICBwYXJzZVRyZWVUZXh0QXJlYS5odG1sKHBhcnNlVHJlZVRleHRBcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuXG5mdW5jdGlvbiB0b2tlbnNGcm9tTGluZXMobGluZXMpIHtcbiAgdmFyIHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcbiAgICB2YXIgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XG5cbiAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiB0b2tlbnM7XG59Il19