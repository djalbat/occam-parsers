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
      var contentTextAreaValue = contentTextArea.getValue(),
          content = contentTextAreaValue,
          ///
      contents = content.split(/\n/),
          lines = lexer.linesFromContents(contents),
          tokens = tokensFromLines(lines),
          documentNode = parser.parse(tokens);

      if (documentNode !== null) {
        var parseTree = documentNode.getParseTree();

        parseTree.shiftLine(); //

        var parseTreeString = parseTree.toString(),
            parseTreeTextAreaHTML = parseTreeString; ///

        parseTreeTextArea.html(parseTreeTextAreaHTML);
      } else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJncmFtbWFyVGV4dEFyZWFTZWxlY3RvciIsImNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciIsImxlZnRDb2x1bW4iLCJjb250ZW50VGV4dEFyZWEiLCJncmFtbWFyVGV4dEFyZWEiLCJwYXJzZVRyZWVUZXh0QXJlYSIsIlRPX1RIRV9SSUdIVF9PRiIsInNpdHVhdGVkIiwiRXhhbXBsZSIsImdldFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJvbiIsImNvbnRlbnQiLCJvbkNoYW5nZSIsImxleGVyIiwicGFyc2VyIiwiY29udGVudFRleHRBcmVhVmFsdWUiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50cyIsInRva2VucyIsInRva2Vuc0Zyb21MaW5lcyIsImRvY3VtZW50Tm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwidG9TdHJpbmciLCJwYXJzZVRyZWVUZXh0QXJlYUhUTUwiLCJodG1sIiwiY2xlYXJQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVkdWNlIiwibGluZSIsImxpbmVUb2tlbnMiLCJnZXRUb2tlbnMiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLGVBQWVELFFBQVEsZUFBUixDQURuQjtBQUFBLElBRUlFLFdBQVdILE9BQU9HLFFBRnRCO0FBQUEsSUFHSUMsa0JBQWtCRixhQUFhRSxlQUhuQztBQUFBLElBSUlDLG1CQUFtQkgsYUFBYUcsZ0JBSnBDOztBQU1BLElBQUlDLHFCQUFxQixhQUF6QjtBQUFBLElBQ0lDLDBCQUEwQixrQkFEOUI7QUFBQSxJQUVJQywwQkFBMEIsa0JBRjlCO0FBQUEsSUFHSUMsNEJBQTRCLG9CQUhoQztBQUFBLElBSUlDLGFBQWEsSUFBSU4sZUFBSixDQUFvQkUsa0JBQXBCLENBSmpCO0FBQUEsSUFLSUssa0JBQWtCLElBQUlSLFFBQUosQ0FBYUssdUJBQWIsQ0FMdEI7QUFBQSxJQU1JSSxrQkFBa0IsSUFBSVQsUUFBSixDQUFhSSx1QkFBYixDQU50QjtBQUFBLElBT0lNLG9CQUFvQixJQUFJVixRQUFKLENBQWFNLHlCQUFiLENBUHhCO0FBQUEsSUFRSUssa0JBQWtCVCxpQkFBaUJVLFFBQWpCLENBQTBCRCxlQVJoRDs7QUFVQSxJQUFJVCxnQkFBSixDQUFxQix5QkFBckIsRUFBZ0RTLGVBQWhELEVBQWlFSixVQUFqRTs7SUFFTU0sTzs7Ozs7Ozs4Q0FDNkI7QUFBRSxhQUFPSixnQkFBZ0JLLFFBQWhCLEVBQVA7QUFBb0M7Ozs0Q0FFeENDLEssRUFBTztBQUFFTixzQkFBZ0JPLFFBQWhCLENBQXlCRCxLQUF6QjtBQUFrQzs7OzJDQUU1Q0UsTyxFQUFTO0FBQUVULHNCQUFnQlUsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBVztBQUM5RSxZQUFJQyxVQUFVWCxnQkFBZ0JNLFFBQWhCLEVBQWQsQ0FEOEUsQ0FDcEM7O0FBRTFDRyxnQkFBUUUsT0FBUjtBQUNELE9BSndDO0FBSXBDOzs7NENBRTBCRixPLEVBQVM7QUFBRVIsc0JBQWdCVyxRQUFoQixDQUF5QkgsT0FBekI7QUFBb0M7OztvQ0FFdkRJLEssRUFBT0MsTSxFQUFRO0FBQ3BDLFVBQUlDLHVCQUF1QmYsZ0JBQWdCTSxRQUFoQixFQUEzQjtBQUFBLFVBQ0lLLFVBQVVJLG9CQURkO0FBQUEsVUFDcUM7QUFDakNDLGlCQUFXTCxRQUFRTSxLQUFSLENBQWMsSUFBZCxDQUZmO0FBQUEsVUFHSUMsUUFBUUwsTUFBTU0saUJBQU4sQ0FBd0JILFFBQXhCLENBSFo7QUFBQSxVQUlJSSxTQUFTQyxnQkFBZ0JILEtBQWhCLENBSmI7QUFBQSxVQUtJSSxlQUFlUixPQUFPUyxLQUFQLENBQWFILE1BQWIsQ0FMbkI7O0FBT0EsVUFBSUUsaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLFlBQUlFLFlBQVlGLGFBQWFHLFlBQWIsRUFBaEI7O0FBRUFELGtCQUFVRSxTQUFWLEdBSHlCLENBR0Q7O0FBRXhCLFlBQUlDLGtCQUFrQkgsVUFBVUksUUFBVixFQUF0QjtBQUFBLFlBQ0lDLHdCQUF3QkYsZUFENUIsQ0FMeUIsQ0FNcUI7O0FBRTlDekIsMEJBQWtCNEIsSUFBbEIsQ0FBdUJELHFCQUF2QjtBQUNELE9BVEQsTUFTTztBQUNMeEIsZ0JBQVEwQixjQUFSO0FBQ0Q7QUFDRjs7O3FDQUV1QjtBQUN0QixVQUFJRix3QkFBd0IsRUFBNUI7O0FBRUEzQix3QkFBa0I0QixJQUFsQixDQUF1QkQscUJBQXZCO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCNUIsT0FBakI7O0FBRUEsU0FBU2dCLGVBQVQsQ0FBeUJILEtBQXpCLEVBQWdDO0FBQzlCLE1BQUlFLFNBQVNGLE1BQU1nQixNQUFOLENBQWEsVUFBU2QsTUFBVCxFQUFpQmUsSUFBakIsRUFBdUI7QUFDL0MsUUFBSUMsYUFBYUQsS0FBS0UsU0FBTCxFQUFqQjs7QUFFQWpCLGFBQVNBLE9BQU9rQixNQUFQLENBQWNGLFVBQWQsQ0FBVDs7QUFFQSxXQUFPaEIsTUFBUDtBQUNELEdBTlksRUFNVixFQU5VLENBQWI7O0FBUUEsU0FBT0EsTUFBUDtBQUNEIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBlYXN5dWlsYXlvdXQgPSByZXF1aXJlKCdlYXN5dWktbGF5b3V0JyksXG4gICAgVGV4dEFyZWEgPSBlYXN5dWkuVGV4dEFyZWEsXG4gICAgU2l6ZWFibGVFbGVtZW50ID0gZWFzeXVpbGF5b3V0LlNpemVhYmxlRWxlbWVudCxcbiAgICBWZXJ0aWNhbFNwbGl0dGVyID0gZWFzeXVpbGF5b3V0LlZlcnRpY2FsU3BsaXR0ZXI7XG5cbnZhciBsZWZ0Q29sdW1uU2VsZWN0b3IgPSAnI2xlZnRDb2x1bW4nLFxuICAgIGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2dyYW1tYXInLFxuICAgIGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgIHBhcnNlVHJlZVRleHRBcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcGFyc2VUcmVlJyxcbiAgICBsZWZ0Q29sdW1uID0gbmV3IFNpemVhYmxlRWxlbWVudChsZWZ0Q29sdW1uU2VsZWN0b3IpLFxuICAgIGNvbnRlbnRUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShjb250ZW50VGV4dEFyZWFTZWxlY3RvciksXG4gICAgZ3JhbW1hclRleHRBcmVhID0gbmV3IFRleHRBcmVhKGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBwYXJzZVRyZWVUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShwYXJzZVRyZWVUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBUT19USEVfUklHSFRfT0YgPSBWZXJ0aWNhbFNwbGl0dGVyLnNpdHVhdGVkLlRPX1RIRV9SSUdIVF9PRjtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIoJy5sZWZ0LnZlcnRpY2FsLnNwbGl0dGVyJywgVE9fVEhFX1JJR0hUX09GLCBsZWZ0Q29sdW1uKTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBnZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSgpIHsgcmV0dXJuIGdyYW1tYXJUZXh0QXJlYS5nZXRWYWx1ZSgpOyB9XG5cbiAgc3RhdGljIHNldEdyYW1tYXJUZXh0QXJlYVZhbHVlKHZhbHVlKSB7IGdyYW1tYXJUZXh0QXJlYS5zZXRWYWx1ZSh2YWx1ZSk7IH1cblxuICBzdGF0aWMgb25Db250ZW50VGV4dEFyZWFLZXlVcChoYW5kbGVyKSB7IGNvbnRlbnRUZXh0QXJlYS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29udGVudCA9IGNvbnRlbnRUZXh0QXJlYS5nZXRWYWx1ZSgpOyAvLy9cblxuICAgIGhhbmRsZXIoY29udGVudCk7XG4gIH0pOyB9XG5cbiAgc3RhdGljIG9uR3JhbW1hclRleHRBcmVhQ2hhbmdlKGhhbmRsZXIpIHsgZ3JhbW1hclRleHRBcmVhLm9uQ2hhbmdlKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShsZXhlciwgcGFyc2VyKSB7XG4gICAgdmFyIGNvbnRlbnRUZXh0QXJlYVZhbHVlID0gY29udGVudFRleHRBcmVhLmdldFZhbHVlKCksXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dEFyZWFWYWx1ZSwgIC8vL1xuICAgICAgICBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxuICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzKSxcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgZG9jdW1lbnROb2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAoZG9jdW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICB2YXIgcGFyc2VUcmVlID0gZG9jdW1lbnROb2RlLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICB2YXIgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlVGV4dEFyZWFIVE1MID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG5cbiAgICAgIHBhcnNlVHJlZVRleHRBcmVhLmh0bWwocGFyc2VUcmVlVGV4dEFyZWFIVE1MKTtcbiAgICB9IGVsc2Uge1xuICAgICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGVhclBhcnNlVHJlZSgpIHtcbiAgICB2YXIgcGFyc2VUcmVlVGV4dEFyZWFIVE1MID0gJyc7XG5cbiAgICBwYXJzZVRyZWVUZXh0QXJlYS5odG1sKHBhcnNlVHJlZVRleHRBcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuXG5mdW5jdGlvbiB0b2tlbnNGcm9tTGluZXMobGluZXMpIHtcbiAgdmFyIHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcbiAgICB2YXIgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XG5cbiAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiB0b2tlbnM7XG59Il19