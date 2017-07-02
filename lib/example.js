'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easyLayout = require('easy-layout');

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
          rule = parser.findRule(ruleName),
              lines = lexer.linesFromContent(content);

          node = parser.nodeFromLines(lines, rule);

          if (node === null) {
            throw new Error('The document cannot be parsed for some reason.'); ///
          }

          var parseTree = node.generateParseTree(lines);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImxleGljYWxFbnRyaWVzVGV4dGFyZWFTZWxlY3RvciIsImJuZlRleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnRTZWxlY3RvciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsImNvbnRlbnRUZXh0YXJlYSIsInBhcnNlVHJlZVRleHRhcmVhIiwibGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImJuZlRleHRhcmVhIiwic2l6ZWFibGVFbGVtZW50IiwiYmVmb3JlU2l6ZWFibGVFbGVtZW50IiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJsZXhlciIsInBhcnNlciIsIkV4YW1wbGUiLCJjb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJibmYiLCJ1cGRhdGVIYW5kbGVyIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJibmZUZXh0YXJlYVZhbHVlIiwibGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwib25LZXlVcCIsIkxleGVyIiwiZ2V0VmFsdWUiLCJwYXJzZSIsImVycm9yIiwibGV4aWNhbEVudHJpZXNWYWxpZCIsImZyb21FbnRyaWVzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNhbGxiYWNrIiwicnVsZU5hbWUiLCJub2RlIiwicGFyc2VUcmVlVGV4dGFyZWFIVE1MIiwicnVsZSIsImZpbmRSdWxlIiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50Iiwibm9kZUZyb21MaW5lcyIsIkVycm9yIiwicGFyc2VUcmVlIiwiZ2VuZXJhdGVQYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJp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LFdBQVcsSUFBcEMsRUFBMkM7QUFDekMsWUFBSTtBQUNGLGNBQU1NLHVCQUF1QmQsZ0JBQWdCc0IsUUFBaEIsRUFBN0I7QUFBQSxjQUNNWixVQUFVSSxvQkFEaEI7QUFBQSxjQUNzQztBQUNoQ21CLGlCQUFPekIsT0FBTzBCLFFBQVAsQ0FBZ0JKLFFBQWhCLENBRmI7QUFBQSxjQUdNSyxRQUFRNUIsTUFBTTZCLGdCQUFOLENBQXVCMUIsT0FBdkIsQ0FIZDs7QUFLQXFCLGlCQUFPdkIsT0FBTzZCLGFBQVAsQ0FBcUJGLEtBQXJCLEVBQTRCRixJQUE1QixDQUFQOztBQUVBLGNBQUlGLFNBQVMsSUFBYixFQUFtQjtBQUNqQixrQkFBTSxJQUFJTyxLQUFKLENBQVUsZ0RBQVYsQ0FBTixDQURpQixDQUNtRDtBQUNyRTs7QUFFRCxjQUFNQyxZQUFZUixLQUFLUyxpQkFBTCxDQUF1QkwsS0FBdkIsQ0FBbEI7O0FBRUFJLG9CQUFVRSxTQUFWLEdBZEUsQ0Fjc0I7O0FBRXhCLGNBQU1DLGtCQUFrQkgsVUFBVUksUUFBVixFQUF4Qjs7QUFFQVgsa0NBQXdCVSxlQUF4QixDQWxCRSxDQWtCd0M7O0FBRTFDMUMsMEJBQWdCMkIsV0FBaEIsQ0FBNEIsT0FBNUI7QUFDRCxTQXJCRCxDQXFCRSxPQUFPSCxLQUFQLEVBQWM7QUFDZHhCLDBCQUFnQjRCLFFBQWhCLENBQXlCLE9BQXpCO0FBQ0Q7QUFDRjs7QUFFRDNCLHdCQUFrQjJDLElBQWxCLENBQXVCWixxQkFBdkI7O0FBRUEsYUFBT0QsSUFBUDtBQUNEOzs7Ozs7QUFHSGMsT0FBT0MsT0FBUCxHQUFpQnJDLE9BQWpCIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50LCBWZXJ0aWNhbFNwbGl0dGVyIH0gPSBlYXN5TGF5b3V0O1xuXG5jb25zdCBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNjb250ZW50JyxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcGFyc2VUcmVlJyxcbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNsZXhpY2FsRW50cmllcycsXG4gICAgICBibmZUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2JuZicsXG4gICAgICBzaXplYWJsZUVsZW1lbnRTZWxlY3RvciA9ICcjc2l6ZWFibGVFbGVtZW50JyxcbiAgICAgIHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciA9ICcjdmVydGljYWxTcGxpdHRlcicsXG4gICAgICBjb250ZW50VGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoY29udGVudFRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEocGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhID1uZXcgVGV4dGFyZWEobGV4aWNhbEVudHJpZXNUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGJuZlRleHRhcmVhID0gbmV3IFRleHRhcmVhKGJuZlRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgc2l6ZWFibGVFbGVtZW50ID0gbmV3IFNpemVhYmxlRWxlbWVudChzaXplYWJsZUVsZW1lbnRTZWxlY3RvciksXG4gICAgICBiZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBmYWxzZSxcbiAgICAgIGFmdGVyU2l6ZWFibGVFbGVtZW50ID0gdHJ1ZTtcblxubGV0IGxleGVyID0gbnVsbCxcbiAgICBwYXJzZXIgPSBudWxsO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcih2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bihjb250ZW50LCBsZXhpY2FsRW50cmllcywgYm5mLCB1cGRhdGVIYW5kbGVyKSB7XG4gICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICBibmZUZXh0YXJlYVZhbHVlID0gYm5mLCAgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEVudHJpZXMsIG51bGwsICcgICcpO1xuXG4gICAgY29udGVudFRleHRhcmVhLnNldFZhbHVlKGNvbnRlbnRUZXh0YXJlYVZhbHVlKTtcblxuICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEuc2V0VmFsdWUobGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlKTtcblxuICAgIGJuZlRleHRhcmVhLnNldFZhbHVlKGJuZlRleHRhcmVhVmFsdWUpO1xuXG4gICAgY29udGVudFRleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG5cbiAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG5cbiAgICBibmZUZXh0YXJlYS5vbktleVVwKHVwZGF0ZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZUxleGVyKExleGVyKSB7XG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlID0gbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5nZXRWYWx1ZSgpO1xuXG4gICAgbGV0IGxleGljYWxFbnRyaWVzID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBsZXhpY2FsRW50cmllcyA9IEpTT04ucGFyc2UobGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cblxuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzVmFsaWQgPSAobGV4aWNhbEVudHJpZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKGxleGljYWxFbnRyaWVzVmFsaWQpIHtcbiAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXhlciA9IG51bGw7XG5cbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlcihjYWxsYmFjaykge1xuICAgIGNvbnN0IGJuZlRleHRhcmVhVmFsdWUgPSBibmZUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IGJuZlRleHRhcmVhVmFsdWU7IC8vL1xuXG4gICAgcGFyc2VyID0gY2FsbGJhY2soYm5mKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWUocnVsZU5hbWUpIHtcbiAgICBsZXQgbm9kZSA9IG51bGwsXG4gICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgaWYgKChsZXhlciAhPT0gbnVsbCkgJiYgKHBhcnNlciAhPT0gbnVsbCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgICAgICAgIHJ1bGUgPSBwYXJzZXIuZmluZFJ1bGUocnVsZU5hbWUpLFxuICAgICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICAgICAgbm9kZSA9IHBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzLCBydWxlKTtcblxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRvY3VtZW50IGNhbm5vdCBiZSBwYXJzZWQgZm9yIHNvbWUgcmVhc29uLicpOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmdlbmVyYXRlUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICAgIGNvbnN0IHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS50b1N0cmluZygpO1xuXG4gICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnRlbnRUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=