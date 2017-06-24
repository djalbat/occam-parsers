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
    lexicalGrammarTextareaSelector = 'textarea#lexicalGrammar',
    extendedBNFGrammarTextareaSelector = 'textarea#extendedBNFGrammar',
    sizeableElementSelector = '#sizeableElement',
    verticalSplitterSelector = '#verticalSplitter',
    contentTextarea = new Textarea(contentTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
    lexicalGrammarTextarea = new Textarea(lexicalGrammarTextareaSelector),
    extendedBNFGrammarTextarea = new Textarea(extendedBNFGrammarTextareaSelector),
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
    value: function run(content, lexicalGrammar, extendedBNFGrammar, updateHandler) {
      var contentTextareaValue = content,
          ///
      extendedBNFGrammarTextareaValue = extendedBNFGrammar,
          ///
      lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  ');

      contentTextarea.setValue(contentTextareaValue);

      lexicalGrammarTextarea.setValue(lexicalGrammarTextareaValue);

      extendedBNFGrammarTextarea.setValue(extendedBNFGrammarTextareaValue);

      contentTextarea.onKeyUp(updateHandler);

      lexicalGrammarTextarea.onKeyUp(updateHandler);

      extendedBNFGrammarTextarea.onKeyUp(updateHandler);
    }
  }, {
    key: 'updateLexer',
    value: function updateLexer(Lexer) {
      var lexicalGrammarTextareaValue = lexicalGrammarTextarea.getValue();

      var lexicalGrammar = null;

      try {
        lexicalGrammar = JSON.parse(lexicalGrammarTextareaValue);
      } catch (error) {}

      var lexicalGrammarValid = lexicalGrammar !== null;

      if (lexicalGrammarValid) {
        lexer = Lexer.fromGrammar(lexicalGrammar);

        lexicalGrammarTextarea.removeClass('error');
      } else {
        lexer = null;

        lexicalGrammarTextarea.addClass('error');
      }
    }
  }, {
    key: 'updateParser',
    value: function updateParser(callback) {
      var bnfGrammarTextareaValue = extendedBNFGrammarTextarea.getValue(),
          grammar = bnfGrammarTextareaValue; ///

      parser = callback(grammar);
    }
  }, {
    key: 'updateParseTree',
    value: function updateParseTree(productionName) {
      if (lexer !== null && parser !== null) {
        var node = null;

        try {
          var contentTextareaValue = contentTextarea.getValue(),
              content = contentTextareaValue,
              ///
          production = parser.findProduction(productionName),
              lines = lexer.linesFromContent(content);

          node = parser.nodeFromLines(lines, production);

          if (node === null) {
            throw new Error('The document cannot be parsed for some reason.'); ///
          }

          var parseTree = node.generateParseTree(lines);

          parseTree.shiftLine(); //

          var parseTreeString = parseTree.toString(),
              parseTreeTextareaHTML = parseTreeString; ///

          parseTreeTextarea.html(parseTreeTextareaHTML);

          contentTextarea.removeClass('error');
        } catch (error) {
          Example.clearParseTreeTextarea();

          contentTextarea.addClass('error');
        }
      } else {
        var _parseTreeTextareaHTML = '';

        parseTreeTextarea.html(_parseTreeTextareaHTML);
      }
    }
  }]);

  return Example;
}();

module.exports = Example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImxleGljYWxHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciIsImV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnRTZWxlY3RvciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsImNvbnRlbnRUZXh0YXJlYSIsInBhcnNlVHJlZVRleHRhcmVhIiwibGV4aWNhbEdyYW1tYXJUZXh0YXJlYSIsImV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhIiwic2l6ZWFibGVFbGVtZW50IiwiYmVmb3JlU2l6ZWFibGVFbGVtZW50IiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJsZXhlciIsInBhcnNlciIsIkV4YW1wbGUiLCJjb250ZW50IiwibGV4aWNhbEdyYW1tYXIiLCJleHRlbmRlZEJORkdyYW1tYXIiLCJ1cGRhdGVIYW5kbGVyIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJleHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlIiwibGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwib25LZXlVcCIsIkxleGVyIiwiZ2V0VmFsdWUiLCJwYXJzZSIsImVycm9yIiwibGV4aWNhbEdyYW1tYXJWYWxpZCIsImZyb21HcmFtbWFyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNhbGxiYWNrIiwiYm5mR3JhbW1hclRleHRhcmVhVmFsdWUiLCJncmFtbWFyIiwicHJvZHVjdGlvbk5hbWUiLCJub2RlIiwicHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50Iiwibm9kZUZyb21MaW5lcyIsIkVycm9yIiwicGFyc2VUcmVlIiwiZ2VuZXJhdGVQYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJ0b1N0cmluZyIsInBhcnNlVHJlZVRleHRhcmVhSFRNTCIsImh0bWwiLCJjbGVhclBhcnNlVHJlZVRleHRhcmVhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdNLElBQUVFLFFBQUYsR0FBZUgsSUFBZixDQUFFRyxRQUFGO0FBQUEsSUFDRUMsZUFERixHQUN3Q0YsVUFEeEMsQ0FDRUUsZUFERjtBQUFBLElBQ21CQyxnQkFEbkIsR0FDd0NILFVBRHhDLENBQ21CRyxnQkFEbkI7OztBQUdOLElBQU1DLDBCQUEwQixrQkFBaEM7QUFBQSxJQUNNQyw0QkFBNEIsb0JBRGxDO0FBQUEsSUFFTUMsaUNBQWlDLHlCQUZ2QztBQUFBLElBR01DLHFDQUFxQyw2QkFIM0M7QUFBQSxJQUlNQywwQkFBMEIsa0JBSmhDO0FBQUEsSUFLTUMsMkJBQTJCLG1CQUxqQztBQUFBLElBTU1DLGtCQUFrQixJQUFJVCxRQUFKLENBQWFHLHVCQUFiLENBTnhCO0FBQUEsSUFPTU8sb0JBQW9CLElBQUlWLFFBQUosQ0FBYUkseUJBQWIsQ0FQMUI7QUFBQSxJQVFNTyx5QkFBd0IsSUFBSVgsUUFBSixDQUFhSyw4QkFBYixDQVI5QjtBQUFBLElBU01PLDZCQUE2QixJQUFJWixRQUFKLENBQWFNLGtDQUFiLENBVG5DO0FBQUEsSUFVTU8sa0JBQWtCLElBQUlaLGVBQUosQ0FBb0JNLHVCQUFwQixDQVZ4QjtBQUFBLElBV01PLHdCQUF3QixLQVg5QjtBQUFBLElBWU1DLHVCQUF1QixJQVo3Qjs7QUFjQSxJQUFJQyxRQUFRLElBQVo7QUFBQSxJQUNJQyxTQUFTLElBRGI7O0FBR0EsSUFBSWYsZ0JBQUosQ0FBcUJNLHdC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QU9DLE9BQVAsR0FBaUJ4QyxPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCwgVmVydGljYWxTcGxpdHRlciB9ID0gZWFzeUxheW91dDtcblxuY29uc3QgY29udGVudFRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjY29udGVudCcsXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3BhcnNlVHJlZScsXG4gICAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjbGV4aWNhbEdyYW1tYXInLFxuICAgICAgZXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNleHRlbmRlZEJORkdyYW1tYXInLFxuICAgICAgc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IgPSAnI3NpemVhYmxlRWxlbWVudCcsXG4gICAgICB2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IgPSAnI3ZlcnRpY2FsU3BsaXR0ZXInLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhID0gbmV3IFRleHRhcmVhKHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYSA9bmV3IFRleHRhcmVhKGxleGljYWxHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBleHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShleHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHNpemVhYmxlRWxlbWVudCA9IG5ldyBTaXplYWJsZUVsZW1lbnQoc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IpLFxuICAgICAgYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gZmFsc2UsXG4gICAgICBhZnRlclNpemVhYmxlRWxlbWVudCA9IHRydWU7XG5cbmxldCBsZXhlciA9IG51bGwsXG4gICAgcGFyc2VyID0gbnVsbDtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIodmVydGljYWxTcGxpdHRlclNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50KTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oY29udGVudCwgbGV4aWNhbEdyYW1tYXIsIGV4dGVuZGVkQk5GR3JhbW1hciwgdXBkYXRlSGFuZGxlcikge1xuICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudCwgLy8vXG4gICAgICAgICAgZXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGV4dGVuZGVkQk5GR3JhbW1hciwgIC8vL1xuICAgICAgICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KGxleGljYWxHcmFtbWFyLCBudWxsLCAnICAnKTtcblxuICAgIGNvbnRlbnRUZXh0YXJlYS5zZXRWYWx1ZShjb250ZW50VGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLnNldFZhbHVlKGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBleHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYS5zZXRWYWx1ZShleHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIGNvbnRlbnRUZXh0YXJlYS5vbktleVVwKHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5vbktleVVwKHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgZXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVMZXhlcihMZXhlcikge1xuICAgIGNvbnN0IGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGxleGljYWxHcmFtbWFyVGV4dGFyZWEuZ2V0VmFsdWUoKTtcblxuICAgIGxldCBsZXhpY2FsR3JhbW1hciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgbGV4aWNhbEdyYW1tYXIgPSBKU09OLnBhcnNlKGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG5cbiAgICBjb25zdCBsZXhpY2FsR3JhbW1hclZhbGlkID0gKGxleGljYWxHcmFtbWFyICE9PSBudWxsKTtcblxuICAgIGlmIChsZXhpY2FsR3JhbW1hclZhbGlkKSB7XG4gICAgICBsZXhlciA9IExleGVyLmZyb21HcmFtbWFyKGxleGljYWxHcmFtbWFyKTtcblxuICAgICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV4ZXIgPSBudWxsO1xuXG4gICAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZXIoY2FsbGJhY2spIHtcbiAgICBjb25zdCBibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgZ3JhbW1hciA9IGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlOyAvLy9cblxuICAgIHBhcnNlciA9IGNhbGxiYWNrKGdyYW1tYXIpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShwcm9kdWN0aW9uTmFtZSkge1xuICAgIGlmICgobGV4ZXIgIT09IG51bGwpICYmIChwYXJzZXIgIT09IG51bGwpKSB7XG4gICAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgICAgICAgIHByb2R1Y3Rpb24gPSBwYXJzZXIuZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICAgICAgbm9kZSA9IHBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzLCBwcm9kdWN0aW9uKTtcblxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRvY3VtZW50IGNhbm5vdCBiZSBwYXJzZWQgZm9yIHNvbWUgcmVhc29uLicpOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmdlbmVyYXRlUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICAgIGNvbnN0IHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG5cbiAgICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSAnJztcblxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=