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
          rules = parser.getRules(),
              rule = parserUtil.findRule(ruleName, rules),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsInBhcnNlclV0aWwiLCJUZXh0YXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJjb250ZW50VGV4dGFyZWFTZWxlY3RvciIsInBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhU2VsZWN0b3IiLCJibmZUZXh0YXJlYVNlbGVjdG9yIiwic2l6ZWFibGVFbGVtZW50U2VsZWN0b3IiLCJ2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IiLCJjb250ZW50VGV4dGFyZWEiLCJwYXJzZVRyZWVUZXh0YXJlYSIsImxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJibmZUZXh0YXJlYSIsInNpemVhYmxlRWxlbWVudCIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50IiwibGV4ZXIiLCJwYXJzZXIiLCJFeGFtcGxlIiwiY29udGVudCIsImxleGljYWxFbnRyaWVzIiwiYm5mIiwidXBkYXRlSGFuZGxlciIsImNvbnRlbnRUZXh0YXJlYVZhbHVlIiwiYm5mVGV4dGFyZWFWYWx1ZSIsImxleGljYWxFbnRyaWVzVGV4dGFyZWFWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsIm9uS2V5VXAiLCJMZXhlciIsImdldFZhbHVlIiwicGFyc2UiLCJlcnJvciIsImxleGljYWxFbnRyaWVzVmFsaWQiLCJmcm9tRW50cmllcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjYWxsYmFjayIsInJ1bGVOYW1lIiwibm9kZSIsInBhcnNlVHJlZVRleHRhcmVhSFRNTCIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJydWxlIiwiZmluZFJ1bGUiLCJsaW5lcyIsImxpbmVzRnJvbUNvbnRlbnQiLCJub2RlRnJvbUxpbmVzIiwiRXJyb3IiLCJwYXJzZVRyZWUiLCJnZW5lcmF0ZVBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsInRvU3RyaW5nIiwiaHRtbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHQSxJQUFNRSxhQUFhRixRQUFRLGVBQVIsQ0FBbkI7O0FBRU0sSUFBRUcsUUFBRixHQUFlSixJQUFmLENBQUVJLFFBQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3dDSCxVQUR4QyxDQUNFRyxlQURGO0FBQUEsSUFDbUJDLGdCQURuQixHQUN3Q0osVUFEeEMsQ0FDbUJJLGdCQURuQjs7O0FBR04sSUFBTUMsMEJBQTBCLGtCQUFoQztBQUFBLElBQ01DLDRCQUE0QixvQkFEbEM7QUFBQSxJQUVNQyxpQ0FBaUMseUJBRnZDO0FBQUEsSUFHTUMsc0JBQXNCLGNBSDVCO0FBQUEsSUFJTUMsMEJBQTBCLGtCQUpoQztBQUFBLElBS01DLDJCQUEyQixtQkFMakM7QUFBQSxJQU1NQyxrQkFBa0IsSUFBSVQsUUFBSixDQUFhRyx1QkFBYixDQU54QjtBQUFBLElBT01PLG9CQUFvQixJQUFJVixRQUFKLENBQWFJLHlCQUFiLENBUDFCO0FBQUEsSUFRTU8seUJBQXdCLElBQUlYLFFBQUosQ0FBYUssOEJBQWIsQ0FSOUI7QUFBQSxJQVNNTyxjQUFjLElBQUlaLFFBQUosQ0FBYU0sbUJBQWIsQ0FUcEI7QUFBQSxJQVVNTyxrQkFBa0IsSUFBSVosZUFBSixDQUFvQk0sdUJBQXBCLENBVnhCO0FBQUEsSUFXTU8sd0JBQXdCLEtBWDlCO0FBQUEsSUFZTUMsdUJBQXVCLElBWjdCOztBQWNBLElBQUlDLFFBQVEsSUFBWjtBQUFBLElBQ0lDLFNBQVMsSUFEYjs7QUFHQSxJQUFJZixnQkFBSixDQUFxQk0sd0JBQXJCLEVBQStDTSxxQkFBL0MsRUFBc0VDLG9CQUF0RTs7SUFFTUcsTzs7Ozs7Ozt3QkFDT0MsTyxFQUFTQyxjLEVBQWdCQyxHLEVBQUtDLGEsRUFBZTtBQUN0RCxVQUFNQyx1QkFBdUJKLE9BQTdCO0FBQUEsVUFBc0M7QUFDaENLLHlCQUFtQkgsR0FEekI7QUFBQSxVQUMrQjtBQUN6Qkksb0NBQThCQyxLQUFLQyxTQUFMLENBQWVQLGNBQWYsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsQ0FGcEM7O0FBSUFYLHNCQUFnQm1CLFFBQWhCLENBQXlCTCxvQkFBekI7O0FBRUFaLDZCQUF1QmlCLFFBQXZCLENBQWdDSCwyQkFBaEM7O0FBRUFiLGtCQUFZZ0IsUUFBWixDQUFxQkosZ0JBQXJCOztBQUVBZixzQkFBZ0JvQixPQUFoQixDQUF3QlAsYUFBeEI7O0FBRUFYLDZCQUF1QmtCLE9BQXZCLENBQStCUCxhQUEvQjs7QUFFQVYsa0JBQVlpQixPQUFaLENBQW9CUCxhQUFwQjtBQUNEOzs7Z0NBRWtCUSxLLEVBQU87QUFDeEIsVUFBTUwsOEJBQThCZCx1QkFBdUJvQixRQUF2QixFQUFwQzs7QUFFQSxVQUFJWCxpQkFBaUIsSUFBckI7O0FBRUEsVUFBSTtBQUNGQSx5QkFBaUJNLEtBQUtNLEtBQUwsQ0FBV1AsMkJBQVgsQ0FBakI7QUFDRCxPQUZELENBRUUsT0FBT1EsS0FBUCxFQUFjLENBQUU7O0FBRWxCLFVBQU1DLHNCQUF1QmQsbUJBQW1CLElBQWhEOztBQUVBLFVBQUljLG1CQUFKLEVBQXlCO0FBQ3ZCbEIsZ0JBQVFjLE1BQU1LLFdBQU4sQ0FBa0JmLGNBQWxCLENBQVI7O0FBRUFULCtCQUF1QnlCLFdBQXZCLENBQW1DLE9BQW5DO0FBQ0QsT0FKRCxNQUlPO0FBQ0xwQixnQkFBUSxJQUFSOztBQUVBTCwrQkFBdUIwQixRQUF2QixDQUFnQyxPQUFoQztBQUNEO0FBQ0Y7OztpQ0FFbUJDLFEsRUFBVTtBQUM1QixVQUFNZCxtQkFBbUJaLFlBQVltQixRQUFaLEVBQXpCO0FBQUEsVUFDTVYsTUFBTUcsZ0JBRFosQ0FENEIsQ0FFRTs7QUFFOUJQLGVBQVNxQixTQUFTakIsR0FBVCxDQUFUO0FBQ0Q7OztvQ0FFc0JrQixRLEVBQVU7QUFDL0IsVUFBSUMsT0FBTyxJQUFYO0FBQUEsVUFDSUMsd0JBQXdCLEVBRDVCOztBQUdBLFVBQUt6QixVQUFVLElBQVgsSUFBcUJDLFdBQVcsSUFBcEMsRUFBMkM7QUFDekMsWUFBSTtBQUNGLGNBQU1NLHVCQUF1QmQsZ0JBQWdCc0IsUUFBaEIsRUFBN0I7QUFBQSxjQUNNWixVQUFVSSxvQkFEaEI7QUFBQSxjQUNzQztBQUNoQ21CLGtCQUFRekIsT0FBTzBCLFFBQVAsRUFGZDtBQUFBLGNBR01DLE9BQU83QyxXQUFXOEMsUUFBWCxDQUFvQk4sUUFBcEIsRUFBOEJHLEtBQTlCLENBSGI7QUFBQSxjQUlNSSxRQUFROUIsTUFBTStCLGdCQUFOLENBQXVCNUIsT0FBdkIsQ0FKZDs7QUFNQXFCLGlCQUFPdkIsT0FBTytCLGFBQVAsQ0FBcUJGLEtBQXJCLEVBQTRCRixJQUE1QixDQUFQOztBQUVBLGNBQUlKLFNBQVMsSUFBYixFQUFtQjtBQUNqQixrQkFBTSxJQUFJUyxLQUFKLENBQVUsZ0RBQVYsQ0FBTixDQURpQixDQUNtRDtBQUNyRTs7QUFFRCxjQUFNQyxZQUFZVixLQUFLVyxpQkFBTCxDQUF1QkwsS0FBdkIsQ0FBbEI7O0FBRUFJLG9CQUFVRSxTQUFWLEdBZkUsQ0Flc0I7O0FBRXhCLGNBQU1DLGtCQUFrQkgsVUFBVUksUUFBVixFQUF4Qjs7QUFFQWIsa0NBQXdCWSxlQUF4QixDQW5CRSxDQW1Cd0M7O0FBRTFDNUMsMEJBQWdCMkIsV0FBaEIsQ0FBNEIsT0FBNUI7QUFDRCxTQXRCRCxDQXNCRSxPQUFPSCxLQUFQLEVBQWM7QUFDZHhCLDBCQUFnQjRCLFFBQWhCLENBQXlCLE9BQXpCO0FBQ0Q7QUFDRjs7QUFFRDNCLHdCQUFrQjZDLElBQWxCLENBQXVCZCxxQkFBdkI7O0FBRUEsYUFBT0QsSUFBUDtBQUNEOzs7Ozs7QUFHSGdCLE9BQU9DLE9BQVAsR0FBaUJ2QyxPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHBhcnNlclV0aWwgPSByZXF1aXJlKCcuL3V0aWwvcGFyc2VyJyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCwgVmVydGljYWxTcGxpdHRlciB9ID0gZWFzeUxheW91dDtcblxuY29uc3QgY29udGVudFRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjY29udGVudCcsXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3BhcnNlVHJlZScsXG4gICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjbGV4aWNhbEVudHJpZXMnLFxuICAgICAgYm5mVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNibmYnLFxuICAgICAgc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IgPSAnI3NpemVhYmxlRWxlbWVudCcsXG4gICAgICB2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IgPSAnI3ZlcnRpY2FsU3BsaXR0ZXInLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhID0gbmV3IFRleHRhcmVhKHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9bmV3IFRleHRhcmVhKGxleGljYWxFbnRyaWVzVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBibmZUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShibmZUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHNpemVhYmxlRWxlbWVudCA9IG5ldyBTaXplYWJsZUVsZW1lbnQoc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IpLFxuICAgICAgYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gZmFsc2UsXG4gICAgICBhZnRlclNpemVhYmxlRWxlbWVudCA9IHRydWU7XG5cbmxldCBsZXhlciA9IG51bGwsXG4gICAgcGFyc2VyID0gbnVsbDtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIodmVydGljYWxTcGxpdHRlclNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50KTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oY29udGVudCwgbGV4aWNhbEVudHJpZXMsIGJuZiwgdXBkYXRlSGFuZGxlcikge1xuICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudCwgLy8vXG4gICAgICAgICAgYm5mVGV4dGFyZWFWYWx1ZSA9IGJuZiwgIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWFWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KGxleGljYWxFbnRyaWVzLCBudWxsLCAnICAnKTtcblxuICAgIGNvbnRlbnRUZXh0YXJlYS5zZXRWYWx1ZShjb250ZW50VGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhLnNldFZhbHVlKGxleGljYWxFbnRyaWVzVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBibmZUZXh0YXJlYS5zZXRWYWx1ZShibmZUZXh0YXJlYVZhbHVlKTtcblxuICAgIGNvbnRlbnRUZXh0YXJlYS5vbktleVVwKHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5vbktleVVwKHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgYm5mVGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVMZXhlcihMZXhlcikge1xuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzVGV4dGFyZWFWYWx1ZSA9IGxleGljYWxFbnRyaWVzVGV4dGFyZWEuZ2V0VmFsdWUoKTtcblxuICAgIGxldCBsZXhpY2FsRW50cmllcyA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgbGV4aWNhbEVudHJpZXMgPSBKU09OLnBhcnNlKGxleGljYWxFbnRyaWVzVGV4dGFyZWFWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG5cbiAgICBjb25zdCBsZXhpY2FsRW50cmllc1ZhbGlkID0gKGxleGljYWxFbnRyaWVzICE9PSBudWxsKTtcblxuICAgIGlmIChsZXhpY2FsRW50cmllc1ZhbGlkKSB7XG4gICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV4ZXIgPSBudWxsO1xuXG4gICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZXIoY2FsbGJhY2spIHtcbiAgICBjb25zdCBibmZUZXh0YXJlYVZhbHVlID0gYm5mVGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBibmYgPSBibmZUZXh0YXJlYVZhbHVlOyAvLy9cblxuICAgIHBhcnNlciA9IGNhbGxiYWNrKGJuZik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VUcmVlKHJ1bGVOYW1lKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsLFxuICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSAnJztcblxuICAgIGlmICgobGV4ZXIgIT09IG51bGwpICYmIChwYXJzZXIgIT09IG51bGwpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRhcmVhVmFsdWUsIC8vL1xuICAgICAgICAgICAgICBydWxlcyA9IHBhcnNlci5nZXRSdWxlcygpLFxuICAgICAgICAgICAgICBydWxlID0gcGFyc2VyVXRpbC5maW5kUnVsZShydWxlTmFtZSwgcnVsZXMpLFxuICAgICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICAgICAgbm9kZSA9IHBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzLCBydWxlKTtcblxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRvY3VtZW50IGNhbm5vdCBiZSBwYXJzZWQgZm9yIHNvbWUgcmVhc29uLicpOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmdlbmVyYXRlUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICAgIGNvbnN0IHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS50b1N0cmluZygpO1xuXG4gICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnRlbnRUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=