'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var parserUtil = require('./util/parser');

var Textarea = easy.Textarea,
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
              rule = parserUtil.findRuleByName(name, rules),
              lines = lexer.linesFromContent(content);

          node = parser.nodeFromLines(lines, rule);

          if (node === null) {
            throw new Error('The document cannot be parsed for some reason.'); ///
          }

          var parseTree = node.parseTreeFromLines(lines);

          parseTree.shiftLine(); //

          var parseTreeString = parseTree.toString();

          parseTreeTextareaHTML = parseTreeString; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsInBhcnNlclV0aWwiLCJUZXh0YXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhU2VsZWN0b3IiLCJibmZUZXh0YXJlYVNlbGVjdG9yIiwic2l6ZWFibGVFbGVtZW50U2VsZWN0b3IiLCJ2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWEiLCJwYXJzZVRyZWVUZXh0YXJlYSIsImxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJibmZUZXh0YXJlYSIsInNpemVhYmxlRWxlbWVudCIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwibGV4ZXIiLCJwYXJzZXIiLCJFeGFtcGxlIiwiY29udGVudCIsImxleGljYWxFbnRyaWVzIiwiYm5mIiwidXBkYXRlSGFuZGxlciIsImNvbnRlbnRUZXh0YXJlYVZhbHVlIiwiYm5mVGV4dGFyZWFWYWx1ZSIsImxleGljYWxFbnRyaWVzVGV4dGFyZWFWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsIm9uS2V5VXAiLCJMZXhlciIsImdldFZhbHVlIiwicGFyc2UiLCJlcnJvciIsImxleGljYWxFbnRyaWVzVmFsaWQiLCJmcm9tRW50cmllcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjYWxsYmFjayIsInJ1bGVOYW1lIiwibm9kZSIsInBhcnNlVHJlZVRleHRhcmVhSFRNTCIsIm5hbWUiLCJydWxlcyIsImdldFJ1bGVzIiwicnVsZSIsImZpbmRSdWxlQnlOYW1lIiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50Iiwibm9kZUZyb21MaW5lcyIsIkVycm9yIiwicGFyc2VUcmVlIiwicGFyc2VUcmVlRnJvbUxpbmVzIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwidG9TdHJpbmciLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdBLElBQU1FLGFBQWFGLFFBQVEsZUFBUixDQUFuQjs7QUFFTSxJQUFFRyxRQUFGLEdBQWVKLElBQWYsQ0FBRUksUUFBRjtBQUFBLElBQ0VDLGVBREYsR0FDd0NILFVBRHhDLENBQ0VHLGVBREY7QUFBQSxJQUNtQkMsZ0JBRG5CLEdBQ3dDSixVQUR4QyxDQUNtQkksZ0JBRG5COzs7QUFHTixJQUFNQywwQkFBMEIsa0JBQWhDO0FBQUEsSUFDTUMsNEJBQTRCLG9CQURsQztBQUFBLElBRU1DLGlDQUFpQyx5QkFGdkM7QUFBQSxJQUdNQyxzQkFBc0IsY0FINUI7QUFBQSxJQUlNQywwQkFBMEIsa0JBSmhDO0FBQUEsSUFLTUMsMkJBQTJCLG1CQUxqQztBQUFBLElBTU1DLGtCQUFrQixJQUFJVCxRQUFKLENBQWFHLHVCQUFiLENBTnhCO0FBQUEsSUFPTU8sb0JBQW9CLElBQUlWLFFBQUosQ0FBYUkseUJBQWIsQ0FQMUI7QUFBQSxJQVFNTyx5QkFBd0IsSUFBSVgsUUFBSixDQUFhSyw4QkFBYixDQVI5QjtBQUFBLElBU01PLGNBQWMsSUFBSVosUUFBSixDQUFhTSxtQkFBYixDQVRwQjtBQUFBLElBVU1PLGtCQUFrQixJQUFJWixlQUFKLENBQW9CTSx1QkFBcEIsQ0FWeEI7QUFBQSxJQVdNTyx3QkFBd0IsS0FYOUI7QUFBQSxJQVlNQyx1QkFBdUIsSUFaN0I7O0FBY0EsSUFBSUMsUUFBUSxJQUFaO0FBQUEsSUFDSUMsU0FBUyxJQURiOztBQUdBLElBQUlmLGdCQUFKLENBQXFCTSx3QkFBckIsRUFBK0NNLHFCQUEvQyxFQUFzRUMsb0JBQXRFOztJQUVNRyxPOzs7Ozs7O3dCQUNPQyxPLEVBQVND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IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBwYXJzZXJVdGlsID0gcmVxdWlyZSgnLi91dGlsL3BhcnNlcicpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2xleGljYWxFbnRyaWVzJyxcbiAgICAgIGJuZlRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjYm5mJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEgPW5ldyBUZXh0YXJlYShsZXhpY2FsRW50cmllc1RleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgYm5mVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoYm5mVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBzaXplYWJsZUVsZW1lbnQgPSBuZXcgU2l6ZWFibGVFbGVtZW50KHNpemVhYmxlRWxlbWVudFNlbGVjdG9yKSxcbiAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlO1xuXG5sZXQgbGV4ZXIgPSBudWxsLFxuICAgIHBhcnNlciA9IG51bGw7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKGNvbnRlbnQsIGxleGljYWxFbnRyaWVzLCBibmYsIHVwZGF0ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgIGJuZlRleHRhcmVhVmFsdWUgPSBibmYsICAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsRW50cmllcywgbnVsbCwgJyAgJyk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEuc2V0VmFsdWUoY29udGVudFRleHRhcmVhVmFsdWUpO1xuXG4gICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5zZXRWYWx1ZShsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUpO1xuXG4gICAgYm5mVGV4dGFyZWEuc2V0VmFsdWUoYm5mVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGJuZlRleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlTGV4ZXIoTGV4ZXIpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUgPSBsZXhpY2FsRW50cmllc1RleHRhcmVhLmdldFZhbHVlKCk7XG5cbiAgICBsZXQgbGV4aWNhbEVudHJpZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxleGljYWxFbnRyaWVzID0gSlNPTi5wYXJzZShsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXNWYWxpZCA9IChsZXhpY2FsRW50cmllcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAobGV4aWNhbEVudHJpZXNWYWxpZCkge1xuICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxleGVyID0gbnVsbDtcblxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VyKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYm5mVGV4dGFyZWFWYWx1ZSA9IGJuZlRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgYm5mID0gYm5mVGV4dGFyZWFWYWx1ZTsgLy8vXG5cbiAgICBwYXJzZXIgPSBjYWxsYmFjayhibmYpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShydWxlTmFtZSkge1xuICAgIGxldCBub2RlID0gbnVsbCxcbiAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICBpZiAoKGxleGVyICE9PSBudWxsKSAmJiAocGFyc2VyICE9PSBudWxsKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVzID0gcGFyc2VyLmdldFJ1bGVzKCksXG4gICAgICAgICAgICAgIHJ1bGUgPSBwYXJzZXJVdGlsLmZpbmRSdWxlQnlOYW1lKG5hbWUsIHJ1bGVzKSxcbiAgICAgICAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gICAgICAgIG5vZGUgPSBwYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcywgcnVsZSk7XG5cbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkb2N1bWVudCBjYW5ub3QgYmUgcGFyc2VkIGZvciBzb21lIHJlYXNvbi4nKTsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyc2VUcmVlID0gbm9kZS5wYXJzZVRyZWVGcm9tTGluZXMobGluZXMpO1xuXG4gICAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG5cbiAgICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==