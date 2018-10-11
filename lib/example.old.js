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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLm9sZC5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImVhc3lMYXlvdXQiLCJydWxlVXRpbGl0aWVzIiwiVGV4dGFyZWEiLCJmaW5kUnVsZUJ5TmFtZSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJibmZUZXh0YXJlYVNlbGVjdG9yIiwiY29udGVudFRleHRhcmVhU2VsZWN0b3IiLCJwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yIiwibGV4aWNhbEVudHJpZXNUZXh0YXJlYVNlbGVjdG9yIiwic2l6ZWFibGVFbGVtZW50U2VsZWN0b3IiLCJ2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IiLCJibmZUZXh0YXJlYSIsImNvbnRlbnRUZXh0YXJlYSIsInBhcnNlVHJlZVRleHRhcmVhIiwibGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50Iiwic2l6ZWFibGVFbGVtZW50IiwidmVydGljYWxTcGxpdHRlciIsImluaXRpYWxpc2UiLCJsZXhlciIsInBhcnNlciIsIkV4YW1wbGUiLCJjb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJibmYiLCJ1cGRhdGVIYW5kbGVyIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJibmZUZXh0YXJlYVZhbHVlIiwibGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwib25LZXlVcCIsIkxleGVyIiwiZ2V0VmFsdWUiLCJwYXJzZSIsImVycm9yIiwibGV4aWNhbEVudHJpZXNWYWxpZCIsImZyb21FbnRyaWVzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNhbGxiYWNrIiwicnVsZU5hbWUiLCJub2RlIiwicGFyc2VUcmVlVGV4dGFyZWFIVE1MIiwibmFtZSIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJydWxlIiwidG9rZW5zIiwidG9rZW5pc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsImFzU3RyaW5nIiwiaHRtbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHQSxJQUFNRSxnQkFBZ0JGLFFBQVEsa0JBQVIsQ0FBdEI7O0FBRU0sSUFBRUcsUUFBRixHQUFlSixJQUFmLENBQUVJLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRixhQURyQixDQUNFRSxjQURGO0FBQUEsSUFFRUMsZUFGRixHQUV3Q0osVUFGeEMsQ0FFRUksZUFGRjtBQUFBLElBRW1CQyxnQkFGbkIsR0FFd0NMLFVBRnhDLENBRW1CSyxnQkFGbkI7OztBQUlOLElBQU1DLHNCQUFzQixjQUE1QjtBQUFBLElBQ0dDLDBCQUEwQixrQkFEN0I7QUFBQSxJQUVNQyw0QkFBNEIsb0JBRmxDO0FBQUEsSUFHTUMsaUNBQWlDLHlCQUh2QztBQUFBLElBSU1DLDBCQUEwQixrQkFKaEM7QUFBQSxJQUtNQywyQkFBMkIsbUJBTGpDO0FBQUEsSUFNR0MsY0FBYyxJQUFJVixRQUFKLENBQWFJLG1CQUFiLENBTmpCO0FBQUEsSUFPTU8sa0JBQWtCLElBQUlYLFFBQUosQ0FBYUssdUJBQWIsQ0FQeEI7QUFBQSxJQVFNTyxvQkFBb0IsSUFBSVosUUFBSixDQUFhTSx5QkFBYixDQVIxQjtBQUFBLElBU01PLHlCQUF3QixJQUFJYixRQUFKLENBQWFPLDhCQUFiLENBVDlCO0FBQUEsSUFVTU8sd0JBQXdCLEtBVjlCO0FBQUEsSUFXTUMsdUJBQXVCLElBWDdCO0FBQUEsSUFZR0Msa0JBQWtCLElBQUlkLGVBQUosQ0FBb0JNLHVCQUFwQixDQVpyQjtBQUFBLElBYUdTLG1CQUFtQixJQUFJZCxnQkFBSixDQUFxQk0sd0JBQXJCLEVBQStDSyxxQkFBL0MsRUFBc0VDLG9CQUF0RSxDQWJ0Qjs7QUFlQUUsaUJBQWlCQyxVQUFqQjs7QUFFQSxJQUFJQyxRQUFRLElBQVo7QUFBQSxJQUNJQyxTQUFTLElBRGI7O0lBR01DLE87Ozs7Ozs7d0JBQ09DLE8sRUFBU0MsYyxFQUFnQkMsRyxFQUFLQyxhLEVBQWU7QUFDdEQsVUFBTUMsdUJBQXVCSixPQUE3QjtBQUFBLFVBQXNDO0FBQ2hDSyx5QkFBbUJILEdBRHpCO0FBQUEsVUFDK0I7QUFDekJJLG9DQUE4QkMsS0FBS0MsU0FBTCxDQUFlUCxjQUFmLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLENBRnBDOztBQUlBWixzQkFBZ0JvQixRQUFoQixDQUF5Qkwsb0JBQXpCOztBQUVBYiw2QkFBdUJrQixRQUF2QixDQUFnQ0gsMkJBQWhDOztBQUVBbEIsa0JBQVlxQixRQUFaLENBQXFCSixnQkFBckI7O0FBRUFoQixzQkFBZ0JxQixPQUFoQixDQUF3QlAsYUFBeEI7O0FBRUFaLDZCQUF1Qm1CLE9BQXZCLENBQStCUCxhQUEvQjs7QUFFQWYsa0JBQVlzQixPQUFaLENBQW9CUCxhQUFwQjtBQUNEOzs7Z0NBRWtCUSxLLEVBQU87QUFDeEIsVUFBTUwsOEJBQThCZix1QkFBdUJxQixRQUF2QixFQUFwQzs7QUFFQSxVQUFJWCxpQkFBaUIsSUFBckI7O0FBRUEsVUFBSTtBQUNGQSx5QkFBaUJNLEtBQUtNLEtBQUwsQ0FBV1AsMkJBQVgsQ0FBakI7QUFDRCxPQUZELENBRUUsT0FBT1EsS0FBUCxFQUFjLENBQUU7O0FBRWxCLFVBQU1DLHNCQUF1QmQsbUJBQW1CLElBQWhEOztBQUVBLFVBQUljLG1CQUFKLEVBQXlCO0FBQ3ZCbEIsZ0JBQVFjLE1BQU1LLFdBQU4sQ0FBa0JmLGNBQWxCLENBQVI7O0FBRUFWLCtCQUF1QjBCLFdBQXZCLENBQW1DLE9BQW5DO0FBQ0QsT0FKRCxNQUlPO0FBQ0xwQixnQkFBUSxJQUFSOztBQUVBTiwrQkFBdUIyQixRQUF2QixDQUFnQyxPQUFoQztBQUNEO0FBQ0Y7OztpQ0FFbUJDLFEsRUFBVTtBQUM1QixVQUFNZCxtQkFBbUJqQixZQUFZd0IsUUFBWixFQUF6QjtBQUFBLFVBQ01WLE1BQU1HLGdCQURaLENBRDRCLENBRUU7O0FBRTlCUCxlQUFTcUIsU0FBU2pCLEdBQVQsQ0FBVDtBQUNEOzs7b0NBRXNCa0IsUSxFQUFVO0FBQy9CLFVBQUlDLE9BQU8sSUFBWDtBQUFBLFVBQ0lDLHdCQUF3QixFQUQ1Qjs7QUFHQSxVQUFLekIsVUFBVSxJQUFYLElBQXFCQyxXQUFXLElBQXBDLEVBQTJDO0FBQ3pDLFlBQUk7QUFDRixjQUFNTSx1QkFBdUJmLGdCQUFnQnVCLFFBQWhCLEVBQTdCO0FBQUEsY0FDTVosVUFBVUksb0JBRGhCO0FBQUEsY0FDc0M7QUFDaENtQixpQkFBT0gsUUFGYjtBQUFBLGNBRXdCO0FBQ2xCSSxrQkFBUTFCLE9BQU8yQixRQUFQLEVBSGQ7QUFBQSxjQUlNQyxPQUFPL0MsZUFBZTRDLElBQWYsRUFBcUJDLEtBQXJCLENBSmI7QUFBQSxjQUtNRyxTQUFTOUIsTUFBTStCLFFBQU4sQ0FBZTVCLE9BQWYsQ0FMZjs7QUFPQXFCLGlCQUFPdkIsT0FBT2UsS0FBUCxDQUFhYyxNQUFiLEVBQXFCRCxJQUFyQixDQUFQOztBQUVBLGNBQUlMLFNBQVMsSUFBYixFQUFtQjtBQUNqQixnQkFBTVEsWUFBWVIsS0FBS1MsV0FBTCxDQUFpQkgsTUFBakIsQ0FBbEI7O0FBRUFFLHNCQUFVRSxTQUFWLEdBSGlCLENBR087O0FBRXhCLGdCQUFNQyxrQkFBa0JILFVBQVVJLFFBQVYsRUFBeEI7O0FBRUFYLG9DQUF3QlUsZUFBeEIsQ0FQaUIsQ0FPeUI7QUFDM0MsV0FSRCxNQVFPO0FBQ0xWLG9DQUF3QixFQUF4QjtBQUNEOztBQUVEakMsMEJBQWdCNEIsV0FBaEIsQ0FBNEIsT0FBNUI7QUFDRCxTQXZCRCxDQXVCRSxPQUFPSCxLQUFQLEVBQWM7QUFDZHpCLDBCQUFnQjZCLFFBQWhCLENBQXlCLE9BQXpCO0FBQ0Q7QUFDRjs7QUFFRDVCLHdCQUFrQjRDLElBQWxCLENBQXVCWixxQkFBdkI7O0FBRUEsYUFBT0QsSUFBUDtBQUNEOzs7Ozs7QUFHSGMsT0FBT0MsT0FBUCxHQUFpQnJDLE9BQWpCIiwiZmlsZSI6ImV4YW1wbGUub2xkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9ydWxlJyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IGZpbmRSdWxlQnlOYW1lIH0gPSBydWxlVXRpbGl0aWVzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IGJuZlRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjYm5mJyxcblx0XHRcdGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2xleGljYWxFbnRyaWVzJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcblx0XHRcdGJuZlRleHRhcmVhID0gbmV3IFRleHRhcmVhKGJuZlRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhID0gbmV3IFRleHRhcmVhKHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9bmV3IFRleHRhcmVhKGxleGljYWxFbnRyaWVzVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBiZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBmYWxzZSxcbiAgICAgIGFmdGVyU2l6ZWFibGVFbGVtZW50ID0gdHJ1ZSxcblx0XHRcdHNpemVhYmxlRWxlbWVudCA9IG5ldyBTaXplYWJsZUVsZW1lbnQoc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IpLFxuXHRcdFx0dmVydGljYWxTcGxpdHRlciA9IG5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbnZlcnRpY2FsU3BsaXR0ZXIuaW5pdGlhbGlzZSgpO1xuXG5sZXQgbGV4ZXIgPSBudWxsLFxuICAgIHBhcnNlciA9IG51bGw7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKGNvbnRlbnQsIGxleGljYWxFbnRyaWVzLCBibmYsIHVwZGF0ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgIGJuZlRleHRhcmVhVmFsdWUgPSBibmYsICAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsRW50cmllcywgbnVsbCwgJyAgJyk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEuc2V0VmFsdWUoY29udGVudFRleHRhcmVhVmFsdWUpO1xuXG4gICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5zZXRWYWx1ZShsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUpO1xuXG4gICAgYm5mVGV4dGFyZWEuc2V0VmFsdWUoYm5mVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGJuZlRleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlTGV4ZXIoTGV4ZXIpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUgPSBsZXhpY2FsRW50cmllc1RleHRhcmVhLmdldFZhbHVlKCk7XG5cbiAgICBsZXQgbGV4aWNhbEVudHJpZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxleGljYWxFbnRyaWVzID0gSlNPTi5wYXJzZShsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXNWYWxpZCA9IChsZXhpY2FsRW50cmllcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAobGV4aWNhbEVudHJpZXNWYWxpZCkge1xuICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxleGVyID0gbnVsbDtcblxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VyKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYm5mVGV4dGFyZWFWYWx1ZSA9IGJuZlRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgYm5mID0gYm5mVGV4dGFyZWFWYWx1ZTsgLy8vXG5cbiAgICBwYXJzZXIgPSBjYWxsYmFjayhibmYpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShydWxlTmFtZSkge1xuICAgIGxldCBub2RlID0gbnVsbCxcbiAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICBpZiAoKGxleGVyICE9PSBudWxsKSAmJiAocGFyc2VyICE9PSBudWxsKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVzID0gcGFyc2VyLmdldFJ1bGVzKCksXG4gICAgICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZUJ5TmFtZShuYW1lLCBydWxlcyksXG4gICAgICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBydWxlKTtcblxuICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgICAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==