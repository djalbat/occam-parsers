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
          var lines = lexer.linesFromContent(content),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeWxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yIiwiY29udGVudFRleHRhcmVhU2VsZWN0b3IiLCJwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yIiwic2l6ZWFibGVFbGVtZW50U2VsZWN0b3IiLCJ2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IiLCJncmFtbWFyVGV4dGFyZWEiLCJjb250ZW50VGV4dGFyZWEiLCJwYXJzZVRyZWVUZXh0YXJlYSIsInNpemVhYmxlRWxlbWVudCIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwiRXhhbXBsZSIsImdyYW1tYXJUZXh0YXJlYVZhbHVlIiwiZ2V0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsIm9uS2V5VXAiLCJsZXhlciIsInBhcnNlciIsInByb2R1Y3Rpb24iLCJjb250ZW50VGV4dGFyZWFWYWx1ZSIsImNvbnRlbnQiLCJsaW5lcyIsImxpbmVzRnJvbUNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tTGluZXMiLCJkb2N1bWVudE5vZGUiLCJwYXJzZSIsIkVycm9yIiwicGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwidG9TdHJpbmciLCJwYXJzZVRyZWVUZXh0YXJlYUhUTUwiLCJodG1sIiwiY2xlYXJQYXJzZVRyZWUiLCJyZW1vdmVDbGFzcyIsImVycm9yIiwiYWRkQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVkdWNlIiwibGluZSIsImxpbmVUb2tlbnMiLCJnZXRUb2tlbnMiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFB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LFFBQU1DLGFBQWFELEtBQUtFLFNBQUwsRUFBbkI7O0FBRUFwQixhQUFTQSxPQUFPcUIsTUFBUCxDQUFjRixVQUFkLENBQVQ7O0FBRUEsV0FBT25CLE1BQVA7QUFDRCxHQU5RLEVBTU4sRUFOTSxDQUFmOztBQVFBLFNBQU9BLE1BQVA7QUFDRCIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeWxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCwgVmVydGljYWxTcGxpdHRlciB9ID0gZWFzeWxheW91dDtcblxuY29uc3QgZ3JhbW1hclRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjZ3JhbW1hcicsXG4gICAgICBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNjb250ZW50JyxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcGFyc2VUcmVlJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIGdyYW1tYXJUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShncmFtbWFyVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBjb250ZW50VGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoY29udGVudFRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEocGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBzaXplYWJsZUVsZW1lbnQgPSBuZXcgU2l6ZWFibGVFbGVtZW50KHNpemVhYmxlRWxlbWVudFNlbGVjdG9yKSxcbiAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcih2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIGdldEdyYW1tYXJUZXh0YXJlYVZhbHVlKCkge1xuICAgIGNvbnN0IGdyYW1tYXJUZXh0YXJlYVZhbHVlID0gZ3JhbW1hclRleHRhcmVhLmdldFZhbHVlKCk7XG5cbiAgICByZXR1cm4gZ3JhbW1hclRleHRhcmVhVmFsdWU7XG4gIH1cblxuICBzdGF0aWMgc2V0R3JhbW1hclRleHRhcmVhVmFsdWUoZ3JhbW1hclRleHRhcmVhVmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdyYW1tYXJUZXh0YXJlYVZhbHVlOyAvLy9cblxuICAgIGdyYW1tYXJUZXh0YXJlYS5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgb25Db250ZW50VGV4dGFyZWFLZXlVcChoYW5kbGVyKSB7IGNvbnRlbnRUZXh0YXJlYS5vbktleVVwKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIG9uR3JhbW1hclRleHRhcmVhS2V5VXAoaGFuZGxlcikgeyBncmFtbWFyVGV4dGFyZWEub25LZXlVcChoYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWUobGV4ZXIsIHBhcnNlciwgcHJvZHVjdGlvbikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlOyAgLy8vXG5cbiAgICAgIGlmIChjb250ZW50ICE9PSAnJykge1xuICAgICAgICBjb25zdCBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgICAgIGRvY3VtZW50Tm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHByb2R1Y3Rpb24pO1xuXG4gICAgICAgIGlmIChkb2N1bWVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkb2N1bWVudCBjYW5ub3QgYmUgcGFyc2VkIGZvciBzb21lIHJlYXNvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IGRvY3VtZW50Tm9kZS5wYXJzZVRyZWUobGluZXMpO1xuXG4gICAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb250ZW50VGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgXG4gICAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyUGFyc2VUcmVlKCkge1xuICAgIGNvbnN0IHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcblxuZnVuY3Rpb24gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSB7XG4gIGNvbnN0IHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcbiAgICAgICAgICBjb25zdCBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcbiAgICAgIFxuICAgICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XG4gICAgICBcbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xuICAgICAgICB9LCBbXSk7XG4gICAgICBcbiAgcmV0dXJuIHRva2Vucztcbn0iXX0=