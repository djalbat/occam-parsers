'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var ruleUtilities = require('./utilities/rule'),
    tokensUtilities = require('./utilities/tokens');

var Textarea = easy.Textarea,
    findRuleByName = ruleUtilities.findRuleByName,
    significantTokensFromLines = tokensUtilities.significantTokensFromLines,
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
              significantTokens = significantTokensFromLines(lines);

          node = parser.nodeFromSignificantTokens(significantTokens, rule);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsInJ1bGVVdGlsaXRpZXMiLCJ0b2tlbnNVdGlsaXRpZXMiLCJUZXh0YXJlYSIsImZpbmRSdWxlQnlOYW1lIiwic2lnbmlmaWNhbnRUb2tlbnNGcm9tTGluZXMiLCJTaXplYWJsZUVsZW1lbnQiLCJWZXJ0aWNhbFNwbGl0dGVyIiwiY29udGVudFRleHRhcmVhU2VsZWN0b3IiLCJwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yIiwibGV4aWNhbEVudHJpZXNUZXh0YXJlYVNlbGVjdG9yIiwiYm5mVGV4dGFyZWFTZWxlY3RvciIsInNpemVhYmxlRWxlbWVudFNlbGVjdG9yIiwidmVydGljYWxTcGxpdHRlclNlbGVjdG9yIiwiY29udGVudFRleHRhcmVhIiwicGFyc2VUcmVlVGV4dGFyZWEiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhIiwiYm5mVGV4dGFyZWEiLCJzaXplYWJsZUVsZW1lbnQiLCJiZWZvcmVTaXplYWJsZUVsZW1lbnQiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsImxleGVyIiwicGFyc2VyIiwiRXhhbXBsZSIsImNvbnRlbnQiLCJsZXhpY2FsRW50cmllcyIsImJuZiIsInVwZGF0ZUhhbmRsZXIiLCJjb250ZW50VGV4dGFyZWFWYWx1ZSIsImJuZlRleHRhcmVhVmFsdWUiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0VmFsdWUiLCJvbktleVVwIiwiTGV4ZXIiLCJnZXRWYWx1ZSIsInBhcnNlIiwiZXJyb3IiLCJsZXhpY2FsRW50cmllc1ZhbGlkIiwiZnJvbUVudHJpZXMiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY2FsbGJhY2siLCJydWxlTmFtZSIsIm5vZGUiLCJwYXJzZVRyZWVUZXh0YXJlYUhUTUwiLCJuYW1lIiwicnVsZXMiLCJnZXRSdWxlcyIsInJ1bGUiLCJsaW5lcyIsImxpbmVzRnJvbUNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VucyIsIm5vZGVGcm9tU2lnbmlmaWNhbnRUb2tlbnMiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsImFzU3RyaW5nIiwiaHRtbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHQSxJQUFNRSxnQkFBZ0JGLFFBQVEsa0JBQVIsQ0FBdEI7QUFBQSxJQUNNRyxrQkFBa0JILFFBQVEsb0JBQVIsQ0FEeEI7O0FBR00sSUFBRUksUUFBRixHQUFlTCxJQUFmLENBQUVLLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCSCxhQURyQixDQUNFRyxjQURGO0FBQUEsSUFFRUMsMEJBRkYsR0FFaUNILGVBRmpDLENBRUVHLDBCQUZGO0FBQUEsSUFHRUMsZUFIRixHQUd3Q04sVUFIeEMsQ0FHRU0sZUFIRjtBQUFBLElBR21CQyxnQkFIbkIsR0FHd0NQLFVBSHhDLENBR21CTyxnQkFIbkI7OztBQUtOLElBQU1DLDBCQUEwQixrQkFBaEM7QUFBQSxJQUNNQyw0QkFBNEIsb0JBRGxDO0FBQUEsSUFFTUMsaUNBQWlDLHlCQUZ2QztBQUFBLElBR01DLHNCQUFzQixjQUg1QjtBQUFBLElBSU1DLDBCQUEwQixrQkFKaEM7QUFBQSxJQUtNQywyQkFBMkIsbUJBTGpDO0FBQUEsSUFNTUMsa0JBQWtCLElBQUlYLFFBQUosQ0FBYUssdUJBQWIsQ0FOeEI7QUFBQSxJQU9NTyxvQkFBb0IsSUFBSVosUUFBSixDQUFhTSx5QkFBYixDQVAxQjtBQUFBLElBUU1PLHlCQUF3QixJQUFJYixRQUFKLENBQWFPLDhCQUFiLENBUjlCO0FBQUEsSUFTTU8sY0FBYyxJQUFJZCxRQUFKLENBQWFRLG1CQUFiLENBVHBCO0FBQUEsSUFVTU8sa0JBQWtCLElBQUlaLGVBQUosQ0FBb0JNLHVCQUFw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Q0F3QkUsT0FBT0gsS0FBUCxFQUFjO0FBQ2R4QiwwQkFBZ0I0QixRQUFoQixDQUF5QixPQUF6QjtBQUNEO0FBQ0Y7O0FBRUQzQix3QkFBa0I2QyxJQUFsQixDQUF1QmQscUJBQXZCOztBQUVBLGFBQU9ELElBQVA7QUFDRDs7Ozs7O0FBR0hnQixPQUFPQyxPQUFQLEdBQWlCdkMsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcnVsZScpLFxuICAgICAgdG9rZW5zVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdG9rZW5zJyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IGZpbmRSdWxlQnlOYW1lIH0gPSBydWxlVXRpbGl0aWVzLFxuICAgICAgeyBzaWduaWZpY2FudFRva2Vuc0Zyb21MaW5lcyB9ID0gdG9rZW5zVXRpbGl0aWVzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2xleGljYWxFbnRyaWVzJyxcbiAgICAgIGJuZlRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjYm5mJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEgPW5ldyBUZXh0YXJlYShsZXhpY2FsRW50cmllc1RleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgYm5mVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoYm5mVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBzaXplYWJsZUVsZW1lbnQgPSBuZXcgU2l6ZWFibGVFbGVtZW50KHNpemVhYmxlRWxlbWVudFNlbGVjdG9yKSxcbiAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlO1xuXG5sZXQgbGV4ZXIgPSBudWxsLFxuICAgIHBhcnNlciA9IG51bGw7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKGNvbnRlbnQsIGxleGljYWxFbnRyaWVzLCBibmYsIHVwZGF0ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgIGJuZlRleHRhcmVhVmFsdWUgPSBibmYsICAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsRW50cmllcywgbnVsbCwgJyAgJyk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEuc2V0VmFsdWUoY29udGVudFRleHRhcmVhVmFsdWUpO1xuXG4gICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5zZXRWYWx1ZShsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUpO1xuXG4gICAgYm5mVGV4dGFyZWEuc2V0VmFsdWUoYm5mVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGJuZlRleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlTGV4ZXIoTGV4ZXIpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUgPSBsZXhpY2FsRW50cmllc1RleHRhcmVhLmdldFZhbHVlKCk7XG5cbiAgICBsZXQgbGV4aWNhbEVudHJpZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxleGljYWxFbnRyaWVzID0gSlNPTi5wYXJzZShsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXNWYWxpZCA9IChsZXhpY2FsRW50cmllcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAobGV4aWNhbEVudHJpZXNWYWxpZCkge1xuICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxleGVyID0gbnVsbDtcblxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VyKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYm5mVGV4dGFyZWFWYWx1ZSA9IGJuZlRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgYm5mID0gYm5mVGV4dGFyZWFWYWx1ZTsgLy8vXG5cbiAgICBwYXJzZXIgPSBjYWxsYmFjayhibmYpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShydWxlTmFtZSkge1xuICAgIGxldCBub2RlID0gbnVsbCxcbiAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICBpZiAoKGxleGVyICE9PSBudWxsKSAmJiAocGFyc2VyICE9PSBudWxsKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVzID0gcGFyc2VyLmdldFJ1bGVzKCksXG4gICAgICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZUJ5TmFtZShuYW1lLCBydWxlcyksXG4gICAgICAgICAgICAgIGxpbmVzID0gbGV4ZXIubGluZXNGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21MaW5lcyhsaW5lcyk7XG5cbiAgICAgICAgbm9kZSA9IHBhcnNlci5ub2RlRnJvbVNpZ25pZmljYW50VG9rZW5zKHNpZ25pZmljYW50VG9rZW5zLCBydWxlKTtcblxuICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgICAgIGNvbnN0IHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS5hc1N0cmluZygpO1xuXG4gICAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZW50VGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb250ZW50VGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuIl19