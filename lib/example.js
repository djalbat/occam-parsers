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
    value: function updateParseTree(lexer, parser, production) {
      try {
        var contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue; ///

        if (content !== '') {
          var contents = content.split(/\n/),
              lines = lexer.linesFromContents(contents),
              tokens = tokensFromLines(lines),
              documentNode = parser.parse(tokens, production);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yIiwiY29udGVudFRleHRhcmVhU2VsZWN0b3IiLCJwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yIiwic2l6ZWFibGVFbGVtZW50U2VsZWN0b3IiLCJ2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IiLCJncmFtbWFyVGV4dGFyZWEiLCJjb250ZW50VGV4dGFyZWEiLCJwYXJzZVRyZWVUZXh0YXJlYSIsInNpemVhYmxlRWxlbWVudCIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwiRXhhbXBsZSIsImdyYW1tYXJUZXh0YXJlYVZhbHVlIiwiZ2V0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsIm9uS2V5VXAiLCJsZXhlciIsInBhcnNlciIsInByb2R1Y3Rpb24iLCJjb250ZW50VGV4dGFyZWFWYWx1ZSIsImNvbnRlbnQiLCJjb250ZW50cyIsInNwbGl0IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50cyIsInRva2VucyIsInRva2Vuc0Zyb21MaW5lcyIsImRvY3VtZW50Tm9kZSIsInBhcnNlIiwiRXJyb3IiLCJwYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJ0b1N0cmluZyIsInBhcnNlVHJlZVRleHRhcmVhSFRNTCIsImh0bWwiLCJjbGVhclBhcnNlVHJlZSIsInJlbW92ZUNsYXNzIiwiZXJyb3IiLCJhZGRDbGFzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJsaW5lIiwibGluZVRva2VucyIsImdldFRva2VucyIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEs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QUFNRSxTQUFTRixNQUFNbUIsTUFBTixDQUFhLFVBQVNqQixNQUFULEVBQWlCa0IsSUFBakIsRUFBdUI7QUFDM0MsUUFBTUMsYUFBYUQsS0FBS0UsU0FBTCxFQUFuQjs7QUFFQXBCLGFBQVNBLE9BQU9xQixNQUFQLENBQWNGLFVBQWQsQ0FBVDs7QUFFQSxXQUFPbkIsTUFBUDtBQUNELEdBTlEsRUFNTixFQU5NLENBQWY7O0FBUUEsU0FBT0EsTUFBUDtBQUNEIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5bGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50LCBWZXJ0aWNhbFNwbGl0dGVyIH0gPSBlYXN5bGF5b3V0O1xuXG5jb25zdCBncmFtbWFyVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNncmFtbWFyJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgICAgc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IgPSAnI3NpemVhYmxlRWxlbWVudCcsXG4gICAgICB2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IgPSAnI3ZlcnRpY2FsU3BsaXR0ZXInLFxuICAgICAgZ3JhbW1hclRleHRhcmVhID0gbmV3IFRleHRhcmVhKGdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHNpemVhYmxlRWxlbWVudCA9IG5ldyBTaXplYWJsZUVsZW1lbnQoc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IpLFxuICAgICAgYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gZmFsc2UsXG4gICAgICBhZnRlclNpemVhYmxlRWxlbWVudCA9IHRydWU7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgZ2V0R3JhbW1hclRleHRhcmVhVmFsdWUoKSB7XG4gICAgY29uc3QgZ3JhbW1hclRleHRhcmVhVmFsdWUgPSBncmFtbWFyVGV4dGFyZWEuZ2V0VmFsdWUoKTtcblxuICAgIHJldHVybiBncmFtbWFyVGV4dGFyZWFWYWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRHcmFtbWFyVGV4dGFyZWFWYWx1ZShncmFtbWFyVGV4dGFyZWFWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gZ3JhbW1hclRleHRhcmVhVmFsdWU7IC8vL1xuXG4gICAgZ3JhbW1hclRleHRhcmVhLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBvbkNvbnRlbnRUZXh0YXJlYUtleVVwKGhhbmRsZXIpIHsgY29udGVudFRleHRhcmVhLm9uS2V5VXAoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgb25HcmFtbWFyVGV4dGFyZWFLZXlVcChoYW5kbGVyKSB7IGdyYW1tYXJUZXh0YXJlYS5vbktleVVwKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShsZXhlciwgcGFyc2VyLCBwcm9kdWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRhcmVhVmFsdWU7ICAvLy9cblxuICAgICAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXG4gICAgICAgICAgICAgIGxpbmVzID0gbGV4ZXIubGluZXNGcm9tQ29udGVudHMoY29udGVudHMpLFxuICAgICAgICAgICAgICB0b2tlbnMgPSB0b2tlbnNGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgICAgICBkb2N1bWVudE5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBwcm9kdWN0aW9uKTtcblxuICAgICAgICBpZiAoZG9jdW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZG9jdW1lbnQgY2Fubm90IGJlIHBhcnNlZCBmb3Igc29tZSByZWFzb24uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZVRyZWUgPSBkb2N1bWVudE5vZGUucGFyc2VUcmVlKGxpbmVzKTtcblxuICAgICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICAgIGNvbnN0IHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuICAgIFxuICAgICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGVhclBhcnNlVHJlZSgpIHtcbiAgICBjb25zdCBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSAnJztcblxuICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG5cbmZ1bmN0aW9uIHRva2Vuc0Zyb21MaW5lcyhsaW5lcykge1xuICBjb25zdCB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XG4gICAgICAgICAgY29uc3QgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XG4gICAgICBcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xuICAgICAgXG4gICAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICAgICAgfSwgW10pO1xuICAgICAgXG4gIHJldHVybiB0b2tlbnM7XG59Il19