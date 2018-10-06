'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var ruleUtilities = require('./utilities/rule');

var Textarea = easy.Textarea,
    findRuleByName = ruleUtilities.findRuleByName,
    SizeableElement = easyLayout.SizeableElement,
    VerticalSplitter = easyLayout.VerticalSplitter;


var bnfTextareaSelector = 'textarea#bnf',
    contentTextareaSelector = 'textarea#content',
    parseTreeTextareaSelector = 'textarea#parseTree',
    lexicalEntriesTextareaSelector = 'textarea#lexicalEntries',
    sizeableElementSelector = '#sizeableElement',
    verticalSplitterSelector = '#verticalSplitter',
    bnfTextarea = new Textarea(bnfTextareaSelector),
    contentTextarea = new Textarea(contentTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
    lexicalEntriesTextarea = new Textarea(lexicalEntriesTextareaSelector),
    beforeSizeableElement = false,
    afterSizeableElement = true,
    sizeableElement = new SizeableElement(sizeableElementSelector),
    verticalSplitter = new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

verticalSplitter.initialise();

var lexer = null,
    parser = null;

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
              tokens = lexer.tokensFromContent(content);

          node = parser.nodeFromTokens(tokens, rule);

          if (node !== null) {
            var parseTree = node.asParseTree(tokens);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsInJ1bGVVdGlsaXRpZXMiLCJUZXh0YXJlYSIsImZpbmRSdWxlQnlOYW1lIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImJuZlRleHRhcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnRTZWxlY3RvciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsImJuZlRleHRhcmVhIiwiY29udGVudFRleHRhcmVhIiwicGFyc2VUcmVlVGV4dGFyZWEiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhIiwiYmVmb3JlU2l6ZWFibGVFbGVtZW50IiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJzaXplYWJsZUVsZW1lbnQiLCJ2ZXJ0aWNhbFNwbGl0dGVyIiwiaW5pdGlhbGlzZSIsImxleGVyIiwicGFyc2VyIiwiRXhhbXBsZSIsImNvbnRlbnQiLCJsZXhpY2FsRW50cmllcyIsImJuZiIsInVwZGF0ZUhhbmRsZXIiLCJjb250ZW50VGV4dGFyZWFWYWx1ZSIsImJuZlRleHRhcmVhVmFsdWUiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0VmFsdWUiLCJvbktleVVwIiwiTGV4ZXIiLCJnZXRWYWx1ZSIsInBhcnNlIiwiZXJyb3IiLCJsZXhpY2FsRW50cmllc1ZhbGlkIiwiZnJvbUVudHJpZXMiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY2FsbGJhY2siLCJydWxlTmFtZSIsIm5vZGUiLCJwYXJzZVRyZWVUZXh0YXJlYUhUTUwiLCJuYW1lIiwicnVsZXMiLCJnZXRSdWxlcyIsInJ1bGUiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsIm5vZGVGcm9tVG9rZW5zIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJhc1N0cmluZyIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGFBQVIsQ0FEbkI7O0FBR0EsSUFBTUUsZ0JBQWdCRixRQUFRLGtCQUFSLENBQXRCOztBQUVNLElBQUVHLFFBQUYsR0FBZUosSUFBZixDQUFFSSxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkYsYUFEckIsQ0FDRUUsY0FERjtBQUFBLElBRUVDLGVBRkYsR0FFd0NKLFVBRnhDLENBRUVJLGVBRkY7QUFBQSxJQUVtQkMsZ0JBRm5CLEdBRXdDTCxVQUZ4QyxDQUVtQkssZ0JBRm5COzs7QUFJTixJQUFNQyxzQkFBc0IsY0FBNUI7QUFBQSxJQUNHQywwQkFBMEIsa0JBRDdCO0FBQUEsSUFFTUMsNEJBQTRCLG9CQUZsQztBQUFBLElBR01DLGlDQUFpQyx5QkFIdkM7QUFBQSxJQUlNQywwQkFBMEIsa0JBSmhDO0FBQUEsSUFLTUMsMkJBQTJCLG1CQUxqQztBQUFBLElBTUdDLGNBQWMsSUFBSVYsUUFBSixDQUFhSSxtQkFBYixDQU5qQjtBQUFBLElBT01PLGtCQUFrQixJQUFJWCxRQUFKLENBQWFLLHVCQUFiLENBUHhCO0FBQUEsSUFRTU8sb0JBQW9CLElBQUlaLFFBQUosQ0FBYU0seUJBQWIsQ0FSMUI7QUFBQSxJQVNNTyx5QkFBd0IsSUFBSWIsUUFBSixDQUFhTyw4QkFBYixDQVQ5QjtBQUFBLElBVU1PLHdCQUF3QixLQVY5QjtBQUFBLElBV01DLHVCQUF1QixJQVg3QjtBQUFBLElBWUdDLGtCQUFrQixJQUFJZCxlQUFKLENBQW9CTSx1QkFBcEIsQ0FackI7QUFBQSxJQWFHUyxtQkFBbUIsSUFBSWQsZ0JBQUosQ0FBcUJNLHdCQUFyQixFQUErQ0sscUJBQS9DLEVBQXNFQyxv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RDs7Ozs7O0FBR0hlLE9BQU9DLE9BQVAsR0FBaUJ0QyxPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9ydWxlJyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IGZpbmRSdWxlQnlOYW1lIH0gPSBydWxlVXRpbGl0aWVzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IGJuZlRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjYm5mJyxcblx0XHRcdGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2xleGljYWxFbnRyaWVzJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcblx0XHRcdGJuZlRleHRhcmVhID0gbmV3IFRleHRhcmVhKGJuZlRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhID0gbmV3IFRleHRhcmVhKHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9bmV3IFRleHRhcmVhKGxleGljYWxFbnRyaWVzVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBiZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBmYWxzZSxcbiAgICAgIGFmdGVyU2l6ZWFibGVFbGVtZW50ID0gdHJ1ZSxcblx0XHRcdHNpemVhYmxlRWxlbWVudCA9IG5ldyBTaXplYWJsZUVsZW1lbnQoc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IpLFxuXHRcdFx0dmVydGljYWxTcGxpdHRlciA9IG5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbnZlcnRpY2FsU3BsaXR0ZXIuaW5pdGlhbGlzZSgpO1xuXG5sZXQgbGV4ZXIgPSBudWxsLFxuICAgIHBhcnNlciA9IG51bGw7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKGNvbnRlbnQsIGxleGljYWxFbnRyaWVzLCBibmYsIHVwZGF0ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgIGJuZlRleHRhcmVhVmFsdWUgPSBibmYsICAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsRW50cmllcywgbnVsbCwgJyAgJyk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEuc2V0VmFsdWUoY29udGVudFRleHRhcmVhVmFsdWUpO1xuXG4gICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5zZXRWYWx1ZShsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUpO1xuXG4gICAgYm5mVGV4dGFyZWEuc2V0VmFsdWUoYm5mVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGJuZlRleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlTGV4ZXIoTGV4ZXIpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUgPSBsZXhpY2FsRW50cmllc1RleHRhcmVhLmdldFZhbHVlKCk7XG5cbiAgICBsZXQgbGV4aWNhbEVudHJpZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxleGljYWxFbnRyaWVzID0gSlNPTi5wYXJzZShsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXNWYWxpZCA9IChsZXhpY2FsRW50cmllcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAobGV4aWNhbEVudHJpZXNWYWxpZCkge1xuICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxleGVyID0gbnVsbDtcblxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VyKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYm5mVGV4dGFyZWFWYWx1ZSA9IGJuZlRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgYm5mID0gYm5mVGV4dGFyZWFWYWx1ZTsgLy8vXG5cbiAgICBwYXJzZXIgPSBjYWxsYmFjayhibmYpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShydWxlTmFtZSkge1xuICAgIGxldCBub2RlID0gbnVsbCxcbiAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICBpZiAoKGxleGVyICE9PSBudWxsKSAmJiAocGFyc2VyICE9PSBudWxsKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVzID0gcGFyc2VyLmdldFJ1bGVzKCksXG4gICAgICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZUJ5TmFtZShuYW1lLCBydWxlcyksXG4gICAgICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gICAgICAgIG5vZGUgPSBwYXJzZXIubm9kZUZyb21Ub2tlbnModG9rZW5zLCBydWxlKTtcblxuICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgICAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==