'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var ruleUtilities = require('./utilities/rule'),
    tokensUtilities = require('./utilities/tokens');

var Textarea = easy.Textarea,
    findRuleByName = ruleUtilities.findRuleByName,
    tokensFromLines = tokensUtilities.tokensFromLines,
    SizeableElement = easyLayout.SizeableElement,
    VerticalSplitter = easyLayout.VerticalSplitter;


var contentTextareaSelector = 'textarea#content',
    parseTreeTextareaSelector = 'textarea#parseTree',
    lexicalEntriesTextareaSelector = 'textarea#lexicalEntries',
    bnfTextareaSelector = 'textarea#bnf',
    sizeableElementSelector = '#sizeableElement',
    verticalSplitterSelector = '#verticalSplitter',
    contentTextarea = new Textarea(contentTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
    lexicalEntriesTextarea = new Textarea(lexicalEntriesTextareaSelector),
    bnfTextarea = new Textarea(bnfTextareaSelector),
    sizeableElement = new SizeableElement(sizeableElementSelector),
    beforeSizeableElement = false,
    afterSizeableElement = true;

var lexer = null,
    parser = null;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

var Example = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, null, [{
    key: 'run',
    value: function run(content, lexicalEntries, bnf, updateHandler) {
      var contentTextareaValue = content,
          ///
      bnfTextareaValue = bnf,
          ///
      lexicalEntriesTextareaValue = JSON.stringify(lexicalEntries, null, '  ');

      contentTextarea.setValue(contentTextareaValue);

      lexicalEntriesTextarea.setValue(lexicalEntriesTextareaValue);

      bnfTextarea.setValue(bnfTextareaValue);

      contentTextarea.onKeyUp(updateHandler);

      lexicalEntriesTextarea.onKeyUp(updateHandler);

      bnfTextarea.onKeyUp(updateHandler);
    }
  }, {
    key: 'updateLexer',
    value: function updateLexer(Lexer) {
      var lexicalEntriesTextareaValue = lexicalEntriesTextarea.getValue();

      var lexicalEntries = null;

      try {
        lexicalEntries = JSON.parse(lexicalEntriesTextareaValue);
      } catch (error) {}

      var lexicalEntriesValid = lexicalEntries !== null;

      if (lexicalEntriesValid) {
        lexer = Lexer.fromEntries(lexicalEntries);

        lexicalEntriesTextarea.removeClass('error');
      } else {
        lexer = null;

        lexicalEntriesTextarea.addClass('error');
      }
    }
  }, {
    key: 'updateParser',
    value: function updateParser(callback) {
      var bnfTextareaValue = bnfTextarea.getValue(),
          bnf = bnfTextareaValue; ///

      parser = callback(bnf);
    }
  }, {
    key: 'updateParseTree',
    value: function updateParseTree(ruleName) {
      var node = null,
          parseTreeTextareaHTML = '';

      if (lexer !== null && parser !== null) {
        try {
          var contentTextareaValue = contentTextarea.getValue(),
              content = contentTextareaValue,
              ///
          name = ruleName,
              ///
          rules = parser.getRules(),
              rule = findRuleByName(name, rules),
              lines = lexer.linesFromContent(content),
              tokens = tokensFromLines(lines);

          node = parser.nodeFromTokens(tokens, rule);

          if (node !== null) {
            var parseTree = node.asParseTree(lines);

            parseTree.shiftLine(); //

            var parseTreeString = parseTree.asString();

            parseTreeTextareaHTML = parseTreeString; ///
          } else {
            parseTreeTextareaHTML = '';
          }

          contentTextarea.removeClass('error');
        } catch (error) {
          contentTextarea.addClass('error');
        }
      }

      parseTreeTextarea.html(parseTreeTextareaHTML);

      return node;
    }
  }]);

  return Example;
}();

module.exports = Example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsInJ1bGVVdGlsaXRpZXMiLCJ0b2tlbnNVdGlsaXRpZXMiLCJUZXh0YXJlYSIsImZpbmRSdWxlQnlOYW1lIiwidG9rZW5zRnJvbUxpbmVzIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImxleGljYWxFbnRyaWVzVGV4dGFyZWFTZWxlY3RvciIsImJuZlRleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnRTZWxlY3RvciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsImNvbnRlbnRUZXh0YXJlYSIsInBhcnNlVHJlZVRleHRhcmVhIiwibGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImJuZlRleHRhcmVhIiwic2l6ZWFibGVFbGVtZW50IiwiYmVmb3JlU2l6ZWFibGVFbGVtZW50IiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJsZXhlciIsInBhcnNlciIsIkV4YW1wbGUiLCJjb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJibmYiLCJ1cGRhdGVIYW5kbGVyIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJibmZUZXh0YXJlYVZhbHVlIiwibGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwib25LZXlVcCIsIkxleGVyIiwiZ2V0VmFsdWUiLCJwYXJzZSIsImVycm9yIiwibGV4aWNhbEVudHJpZXNWYWxpZCIsImZyb21FbnRyaWVzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNhbGxiYWNrIiwicnVsZU5hbWUiLCJub2RlIiwicGFyc2VUcmVlVGV4dGFyZWFIVE1MIiwibmFtZSIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJydWxlIiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50IiwidG9rZW5zIiwibm9kZUZyb21Ub2tlbnMiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsImFzU3RyaW5nIiwiaHRtbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHQSxJQUFNRSxnQkFBZ0JGLFFBQVEsa0JBQVIsQ0FBdEI7QUFBQSxJQUNNRyxrQkFBa0JILFFBQVEsb0JBQVIsQ0FEeEI7O0FBR00sSUFBRUksUUFBRixHQUFlTCxJQUFmLENBQUVLLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCSCxhQURyQixDQUNFRyxjQURGO0FBQUEsSUFFRUMsZUFGRixHQUVzQkgsZUFGdEIsQ0FFRUcsZUFGRjtBQUFBLElBR0VDLGVBSEYsR0FHd0NOLFVBSHhDLENBR0VNLGVBSEY7QUFBQSxJQUdtQkMsZ0JBSG5CLEdBR3dDUCxVQUh4QyxDQUdtQk8sZ0JBSG5COzs7QUFLTixJQUFNQywwQkFBMEIsa0JBQWhDO0FBQUEsSUFDTUMsNEJBQTRCLG9CQURsQztBQUFBLElBRU1DLGlDQUFpQyx5QkFGdkM7QUFBQSxJQUdNQyxzQkFBc0IsY0FINUI7QUFBQSxJQUlNQywwQkFBMEIsa0JBSmhDO0FBQUEsSUFLTUMsMkJBQTJCLG1CQUxqQztBQUFBLElBTU1DLGtCQUFrQixJQUFJWCxRQUFKLENBQWFLLHVCQUFiLENBTnhCO0FBQUEsSUFPTU8sb0JBQW9CLElBQUlaLFFBQUosQ0FBYU0seUJBQWIsQ0FQMUI7QUFBQSxJQVFNTyx5QkFBd0IsSUFBSWIsUUFBSixDQUFhTyw4QkFBYixDQVI5QjtBQUFBLElBU01PLGNBQWMsSUFBSWQsUUFBSixDQUFhUSxtQkFBYixDQVRwQjtBQUFBLElBVU1PLGtCQUFrQixJQUFJWixlQUFKLENBQW9CTSx1QkFBcEIsQ0FWeEI7QUFBQSxJQVdNTyx3QkFBd0IsS0FYOUI7QUFB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QWhCLENBQXlCLE9BQXpCO0FBQ0Q7QUFDRjs7QUFFRDNCLHdCQUFrQjZDLElBQWxCLENBQXVCZCxxQkFBdkI7O0FBRUEsYUFBT0QsSUFBUDtBQUNEOzs7Ozs7QUFHSGdCLE9BQU9DLE9BQVAsR0FBaUJ2QyxPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9ydWxlJyksXG4gICAgICB0b2tlbnNVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy90b2tlbnMnKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgZmluZFJ1bGVCeU5hbWUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IHRva2Vuc0Zyb21MaW5lcyB9ID0gdG9rZW5zVXRpbGl0aWVzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2xleGljYWxFbnRyaWVzJyxcbiAgICAgIGJuZlRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjYm5mJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEgPW5ldyBUZXh0YXJlYShsZXhpY2FsRW50cmllc1RleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgYm5mVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoYm5mVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBzaXplYWJsZUVsZW1lbnQgPSBuZXcgU2l6ZWFibGVFbGVtZW50KHNpemVhYmxlRWxlbWVudFNlbGVjdG9yKSxcbiAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlO1xuXG5sZXQgbGV4ZXIgPSBudWxsLFxuICAgIHBhcnNlciA9IG51bGw7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKGNvbnRlbnQsIGxleGljYWxFbnRyaWVzLCBibmYsIHVwZGF0ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgIGJuZlRleHRhcmVhVmFsdWUgPSBibmYsICAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsRW50cmllcywgbnVsbCwgJyAgJyk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEuc2V0VmFsdWUoY29udGVudFRleHRhcmVhVmFsdWUpO1xuXG4gICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5zZXRWYWx1ZShsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUpO1xuXG4gICAgYm5mVGV4dGFyZWEuc2V0VmFsdWUoYm5mVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGJuZlRleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlTGV4ZXIoTGV4ZXIpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUgPSBsZXhpY2FsRW50cmllc1RleHRhcmVhLmdldFZhbHVlKCk7XG5cbiAgICBsZXQgbGV4aWNhbEVudHJpZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxleGljYWxFbnRyaWVzID0gSlNPTi5wYXJzZShsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXNWYWxpZCA9IChsZXhpY2FsRW50cmllcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAobGV4aWNhbEVudHJpZXNWYWxpZCkge1xuICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxleGVyID0gbnVsbDtcblxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VyKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYm5mVGV4dGFyZWFWYWx1ZSA9IGJuZlRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgYm5mID0gYm5mVGV4dGFyZWFWYWx1ZTsgLy8vXG5cbiAgICBwYXJzZXIgPSBjYWxsYmFjayhibmYpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShydWxlTmFtZSkge1xuICAgIGxldCBub2RlID0gbnVsbCxcbiAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICBpZiAoKGxleGVyICE9PSBudWxsKSAmJiAocGFyc2VyICE9PSBudWxsKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVzID0gcGFyc2VyLmdldFJ1bGVzKCksXG4gICAgICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZUJ5TmFtZShuYW1lLCBydWxlcyksXG4gICAgICAgICAgICAgIGxpbmVzID0gbGV4ZXIubGluZXNGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgICAgdG9rZW5zID0gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKTtcblxuICAgICAgICBub2RlID0gcGFyc2VyLm5vZGVGcm9tVG9rZW5zKHRva2VucywgcnVsZSk7XG5cbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgICAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgICAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==