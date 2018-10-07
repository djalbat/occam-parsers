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
              tokens = lexer.tokenise(content);

          node = parser.parse(tokens, rule);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsInJ1bGVVdGlsaXRpZXMiLCJUZXh0YXJlYSIsImZpbmRSdWxlQnlOYW1lIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImJuZlRleHRhcmVhU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnRTZWxlY3RvciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsImJuZlRleHRhcmVhIiwiY29udGVudFRleHRhcmVhIiwicGFyc2VUcmVlVGV4dGFyZWEiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhIiwiYmVmb3JlU2l6ZWFibGVFbGVtZW50IiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJzaXplYWJsZUVsZW1lbnQiLCJ2ZXJ0aWNhbFNwbGl0dGVyIiwiaW5pdGlhbGlzZSIsImxleGVyIiwicGFyc2VyIiwiRXhhbXBsZSIsImNvbnRlbnQiLCJsZXhpY2FsRW50cmllcyIsImJuZiIsInVwZGF0ZUhhbmRsZXIiLCJjb250ZW50VGV4dGFyZWFWYWx1ZSIsImJuZlRleHRhcmVhVmFsdWUiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0VmFsdWUiLCJvbktleVVwIiwiTGV4ZXIiLCJnZXRWYWx1ZSIsInBhcnNlIiwiZXJyb3IiLCJsZXhpY2FsRW50cmllc1ZhbGlkIiwiZnJvbUVudHJpZXMiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY2FsbGJhY2siLCJydWxlTmFtZSIsIm5vZGUiLCJwYXJzZVRyZWVUZXh0YXJlYUhUTUwiLCJuYW1lIiwicnVsZXMiLCJnZXRSdWxlcyIsInJ1bGUiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwiYXNTdHJpbmciLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdBLElBQU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUF0Qjs7QUFFTSxJQUFFRyxRQUFGLEdBQWVKLElBQWYsQ0FBRUksUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJGLGFBRHJCLENBQ0VFLGNBREY7QUFBQSxJQUVFQyxlQUZGLEdBRXdDSixVQUZ4QyxDQUVFSSxlQUZGO0FBQUEsSUFFbUJDLGdCQUZuQixHQUV3Q0wsVUFGeEMsQ0FFbUJLLGdCQUZuQjs7O0FBSU4sSUFBTUMsc0JBQXNCLGNBQTVCO0FBQUEsSUFDR0MsMEJBQTBCLGtCQUQ3QjtBQUFBLElBRU1DLDRCQUE0QixvQkFGbEM7QUFBQSxJQUdNQyxpQ0FBaUMseUJBSHZDO0FBQUEsSUFJTUMsMEJBQTBCLGtCQUpoQztBQUFBLElBS01DLDJCQUEyQixtQkFMakM7QUFBQSxJQU1HQyxjQUFjLElBQUlWLFFBQUosQ0FBYUksbUJBQWIsQ0FOakI7QUFBQSxJQU9NTyxrQkFBa0IsSUFBSVgsUUFBSixDQUFhSyx1QkFBYixDQVB4QjtBQUFBLElBUU1PLG9CQUFvQixJQUFJWixRQUFKLENBQWFNLHlCQUFiLENBUjFCO0FBQUEsSUFTTU8seUJBQXdCLElBQUliLFFBQUosQ0FBYU8sOEJBQWIsQ0FUOUI7QUFBQSxJQVVNTyx3QkFBd0IsS0FWOUI7QUFBQSxJQVdNQyx1QkFBdUIsSUFYN0I7QUFBQSxJQVlHQyxrQkFBa0IsSUFBSWQsZUFBSixDQUFvQk0sdUJBQXBCLENBWnJCO0FBQUEsSUFhR1MsbUJBQW1CLElBQUlkLGdCQUFKLENBQXFCTSx3QkFBckIsRUFBK0NLLHFCQUEvQyxFQUFzRUMsb0JBQXRFLENBYnRCOztBQWVBRSxpQkFBaUJD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T0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcnVsZScpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBmaW5kUnVsZUJ5TmFtZSB9ID0gcnVsZVV0aWxpdGllcyxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50LCBWZXJ0aWNhbFNwbGl0dGVyIH0gPSBlYXN5TGF5b3V0O1xuXG5jb25zdCBibmZUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2JuZicsXG5cdFx0XHRjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNjb250ZW50JyxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcGFyc2VUcmVlJyxcbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNsZXhpY2FsRW50cmllcycsXG4gICAgICBzaXplYWJsZUVsZW1lbnRTZWxlY3RvciA9ICcjc2l6ZWFibGVFbGVtZW50JyxcbiAgICAgIHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciA9ICcjdmVydGljYWxTcGxpdHRlcicsXG5cdFx0XHRibmZUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShibmZUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEgPW5ldyBUZXh0YXJlYShsZXhpY2FsRW50cmllc1RleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gZmFsc2UsXG4gICAgICBhZnRlclNpemVhYmxlRWxlbWVudCA9IHRydWUsXG5cdFx0XHRzaXplYWJsZUVsZW1lbnQgPSBuZXcgU2l6ZWFibGVFbGVtZW50KHNpemVhYmxlRWxlbWVudFNlbGVjdG9yKSxcblx0XHRcdHZlcnRpY2FsU3BsaXR0ZXIgPSBuZXcgVmVydGljYWxTcGxpdHRlcih2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQpO1xuXG52ZXJ0aWNhbFNwbGl0dGVyLmluaXRpYWxpc2UoKTtcblxubGV0IGxleGVyID0gbnVsbCxcbiAgICBwYXJzZXIgPSBudWxsO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bihjb250ZW50LCBsZXhpY2FsRW50cmllcywgYm5mLCB1cGRhdGVIYW5kbGVyKSB7XG4gICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICBibmZUZXh0YXJlYVZhbHVlID0gYm5mLCAgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEVudHJpZXMsIG51bGwsICcgICcpO1xuXG4gICAgY29udGVudFRleHRhcmVhLnNldFZhbHVlKGNvbnRlbnRUZXh0YXJlYVZhbHVlKTtcblxuICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEuc2V0VmFsdWUobGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlKTtcblxuICAgIGJuZlRleHRhcmVhLnNldFZhbHVlKGJuZlRleHRhcmVhVmFsdWUpO1xuXG4gICAgY29udGVudFRleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG5cbiAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG5cbiAgICBibmZUZXh0YXJlYS5vbktleVVwKHVwZGF0ZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZUxleGVyKExleGVyKSB7XG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlID0gbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5nZXRWYWx1ZSgpO1xuXG4gICAgbGV0IGxleGljYWxFbnRyaWVzID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBsZXhpY2FsRW50cmllcyA9IEpTT04ucGFyc2UobGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cblxuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzVmFsaWQgPSAobGV4aWNhbEVudHJpZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKGxleGljYWxFbnRyaWVzVmFsaWQpIHtcbiAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXhlciA9IG51bGw7XG5cbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlcihjYWxsYmFjaykge1xuICAgIGNvbnN0IGJuZlRleHRhcmVhVmFsdWUgPSBibmZUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IGJuZlRleHRhcmVhVmFsdWU7IC8vL1xuXG4gICAgcGFyc2VyID0gY2FsbGJhY2soYm5mKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWUocnVsZU5hbWUpIHtcbiAgICBsZXQgbm9kZSA9IG51bGwsXG4gICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgaWYgKChsZXhlciAhPT0gbnVsbCkgJiYgKHBhcnNlciAhPT0gbnVsbCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgICAgICAgIG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICBydWxlcyA9IHBhcnNlci5nZXRSdWxlcygpLFxuICAgICAgICAgICAgICBydWxlID0gZmluZFJ1bGVCeU5hbWUobmFtZSwgcnVsZXMpLFxuICAgICAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2VucywgcnVsZSk7XG5cbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnRlbnRUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=