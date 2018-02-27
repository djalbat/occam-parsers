'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var ruleUtilities = require('./utilities/rule'),
    tokensUtilities = require('./utilities/tokens');

var Textarea = easy.Textarea,
    findRuleByName = ruleUtilities.findRuleByName,
    significantTokensFromTokens = tokensUtilities.significantTokensFromTokens,
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
              tokens = lexer.tokensFromContent(content),
              significantTokens = significantTokensFromTokens(tokens);

          node = parser.nodeFromSignificantTokens(significantTokens, rule);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsInJ1bGVVdGlsaXRpZXMiLCJ0b2tlbnNVdGlsaXRpZXMiLCJUZXh0YXJlYSIsImZpbmRSdWxlQnlOYW1lIiwic2lnbmlmaWNhbnRUb2tlbnNGcm9tVG9rZW5zIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImxleGljYWxFbnRyaWVzVGV4dGFyZWFTZWxlY3RvciIsImJuZlRleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnRTZWxlY3RvciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsImNvbnRlbnRUZXh0YXJlYSIsInBhcnNlVHJlZVRleHRhcmVhIiwibGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImJuZlRleHRhcmVhIiwic2l6ZWFibGVFbGVtZW50IiwiYmVmb3JlU2l6ZWFibGVFbGVtZW50IiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJsZXhlciIsInBhcnNlciIsIkV4YW1wbGUiLCJjb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJibmYiLCJ1cGRhdGVIYW5kbGVyIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJibmZUZXh0YXJlYVZhbHVlIiwibGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwib25LZXlVcCIsIkxleGVyIiwiZ2V0VmFsdWUiLCJwYXJzZSIsImVycm9yIiwibGV4aWNhbEVudHJpZXNWYWxpZCIsImZyb21FbnRyaWVzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNhbGxiYWNrIiwicnVsZU5hbWUiLCJub2RlIiwicGFyc2VUcmVlVGV4dGFyZWFIVE1MIiwibmFtZSIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJydWxlIiwidG9rZW5zIiwidG9rZW5zRnJvbUNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VucyIsIm5vZGVGcm9tU2lnbmlmaWNhbnRUb2tlbnMiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsImFzU3RyaW5nIiwiaHRtbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHQSxJQUFNRSxnQkFBZ0JGLFFBQVEsa0JBQVIsQ0FBdEI7QUFBQSxJQUNNRyxrQkFBa0JILFFBQVEsb0JBQVIsQ0FEeEI7O0FBR00sSUFBRUksUUFBRixHQUFlTCxJQUFmLENBQUVLLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCSCxhQURyQixDQUNFRyxjQURGO0FBQUEsSUFFRUMsMkJBRkYsR0FFa0NILGVBRmxDLENBRUVHLDJCQUZGO0FBQUEsSUFHRUMsZUFIRixHQUd3Q04sVUFIeEMsQ0FHRU0sZUFIRjtBQUFBLElBR21CQyxnQkFIbkIsR0FHd0NQLFVBSHhDLENBR21CTyxnQkFIbkI7OztBQUtOLElBQU1DLDBCQUEwQixrQkFBaEM7QUFBQSxJQUNNQyw0QkFBNEIsb0JBRGxDO0FBQUEsSUFFTUMsaUNBQWlDLHlCQUZ2QztBQUFBLElBR01DLHNCQUFzQixjQUg1QjtBQUFBLElBSU1DLDBCQUEwQixrQkFKaEM7QUFBQSxJQUtNQywyQkFBMkIsbUJBTGpDO0FBQUEsSUFNTUMsa0JBQWtCLElBQUlYLFFBQUosQ0FBYUssdUJBQWIsQ0FOeEI7QUFBQSxJQU9NTyxvQkFBb0IsSUFBSVosUUFBSixDQUFhTSx5QkFBYixDQVAxQjtBQUFBLElBUU1PLHlCQUF3QixJQUFJYixRQUFKLENBQWFPLDhCQUFiLENBUjlCO0FBQUEsSUFTTU8sY0FBYyxJQUFJZCxRQUFKLENBQWFRLG1CQUFiLENBVHBCO0FBQUEsSUFVTU8sa0JBQWtCLElBQUlaLGVBQUosQ0FBb0JNLHVC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QkQsQ0F3QkUsT0FBT0gsS0FBUCxFQUFjO0FBQ2R4QiwwQkFBZ0I0QixRQUFoQixDQUF5QixPQUF6QjtBQUNEO0FBQ0Y7O0FBRUQzQix3QkFBa0I2QyxJQUFsQixDQUF1QmQscUJBQXZCOztBQUVBLGFBQU9ELElBQVA7QUFDRDs7Ozs7O0FBR0hnQixPQUFPQyxPQUFQLEdBQWlCdkMsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcnVsZScpLFxuICAgICAgdG9rZW5zVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdG9rZW5zJyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IGZpbmRSdWxlQnlOYW1lIH0gPSBydWxlVXRpbGl0aWVzLFxuICAgICAgeyBzaWduaWZpY2FudFRva2Vuc0Zyb21Ub2tlbnMgfSA9IHRva2Vuc1V0aWxpdGllcyxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50LCBWZXJ0aWNhbFNwbGl0dGVyIH0gPSBlYXN5TGF5b3V0O1xuXG5jb25zdCBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNjb250ZW50JyxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcGFyc2VUcmVlJyxcbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNsZXhpY2FsRW50cmllcycsXG4gICAgICBibmZUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2JuZicsXG4gICAgICBzaXplYWJsZUVsZW1lbnRTZWxlY3RvciA9ICcjc2l6ZWFibGVFbGVtZW50JyxcbiAgICAgIHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciA9ICcjdmVydGljYWxTcGxpdHRlcicsXG4gICAgICBjb250ZW50VGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoY29udGVudFRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEocGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhID1uZXcgVGV4dGFyZWEobGV4aWNhbEVudHJpZXNUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGJuZlRleHRhcmVhID0gbmV3IFRleHRhcmVhKGJuZlRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgc2l6ZWFibGVFbGVtZW50ID0gbmV3IFNpemVhYmxlRWxlbWVudChzaXplYWJsZUVsZW1lbnRTZWxlY3RvciksXG4gICAgICBiZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBmYWxzZSxcbiAgICAgIGFmdGVyU2l6ZWFibGVFbGVtZW50ID0gdHJ1ZTtcblxubGV0IGxleGVyID0gbnVsbCxcbiAgICBwYXJzZXIgPSBudWxsO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcih2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bihjb250ZW50LCBsZXhpY2FsRW50cmllcywgYm5mLCB1cGRhdGVIYW5kbGVyKSB7XG4gICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICBibmZUZXh0YXJlYVZhbHVlID0gYm5mLCAgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEVudHJpZXMsIG51bGwsICcgICcpO1xuXG4gICAgY29udGVudFRleHRhcmVhLnNldFZhbHVlKGNvbnRlbnRUZXh0YXJlYVZhbHVlKTtcblxuICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEuc2V0VmFsdWUobGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlKTtcblxuICAgIGJuZlRleHRhcmVhLnNldFZhbHVlKGJuZlRleHRhcmVhVmFsdWUpO1xuXG4gICAgY29udGVudFRleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG5cbiAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG5cbiAgICBibmZUZXh0YXJlYS5vbktleVVwKHVwZGF0ZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZUxleGVyKExleGVyKSB7XG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlID0gbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5nZXRWYWx1ZSgpO1xuXG4gICAgbGV0IGxleGljYWxFbnRyaWVzID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBsZXhpY2FsRW50cmllcyA9IEpTT04ucGFyc2UobGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cblxuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzVmFsaWQgPSAobGV4aWNhbEVudHJpZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKGxleGljYWxFbnRyaWVzVmFsaWQpIHtcbiAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXhlciA9IG51bGw7XG5cbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlcihjYWxsYmFjaykge1xuICAgIGNvbnN0IGJuZlRleHRhcmVhVmFsdWUgPSBibmZUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IGJuZlRleHRhcmVhVmFsdWU7IC8vL1xuXG4gICAgcGFyc2VyID0gY2FsbGJhY2soYm5mKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWUocnVsZU5hbWUpIHtcbiAgICBsZXQgbm9kZSA9IG51bGwsXG4gICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgaWYgKChsZXhlciAhPT0gbnVsbCkgJiYgKHBhcnNlciAhPT0gbnVsbCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgICAgICAgIG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICBydWxlcyA9IHBhcnNlci5nZXRSdWxlcygpLFxuICAgICAgICAgICAgICBydWxlID0gZmluZFJ1bGVCeU5hbWUobmFtZSwgcnVsZXMpLFxuICAgICAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbnNGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21Ub2tlbnModG9rZW5zKTtcblxuICAgICAgICBub2RlID0gcGFyc2VyLm5vZGVGcm9tU2lnbmlmaWNhbnRUb2tlbnMoc2lnbmlmaWNhbnRUb2tlbnMsIHJ1bGUpO1xuXG4gICAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgICAgIGNvbnN0IHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS5hc1N0cmluZygpO1xuXG4gICAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZW50VGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb250ZW50VGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuIl19