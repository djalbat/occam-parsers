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
      var node = null,
          parseTreeTextareaHTML = '';

      if (lexer !== null && parser !== null) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImxleGljYWxHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciIsImV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnRTZWxlY3RvciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsImNvbnRlbnRUZXh0YXJlYSIsInBhcnNlVHJlZVRleHRhcmVhIiwibGV4aWNhbEdyYW1tYXJUZXh0YXJlYSIsImV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhIiwic2l6ZWFibGVFbGVtZW50IiwiYmVmb3JlU2l6ZWFibGVFbGVtZW50IiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJsZXhlciIsInBhcnNlciIsIkV4YW1wbGUiLCJjb250ZW50IiwibGV4aWNhbEdyYW1tYXIiLCJleHRlbmRlZEJORkdyYW1tYXIiLCJ1cGRhdGVIYW5kbGVyIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJleHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlIiwibGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwib25LZXlVcCIsIkxleGVyIiwiZ2V0VmFsdWUiLCJwYXJzZSIsImVycm9yIiwibGV4aWNhbEdyYW1tYXJWYWxpZCIsImZyb21HcmFtbWFyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNhbGxiYWNrIiwiYm5mR3JhbW1hclRleHRhcmVhVmFsdWUiLCJncmFtbWFyIiwicHJvZHVjdGlvbk5hbWUiLCJub2RlIiwicGFyc2VUcmVlVGV4dGFyZWFIVE1MIiwicHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50Iiwibm9kZUZyb21MaW5lcyIsIkVycm9yIiwicGFyc2VUcmVlIiwiZ2VuZXJhdGVQYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJ0b1N0cmluZyIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGFBQVIsQ0FEbkI7O0FBR00sSUFBRUUsUUFBRixHQUFlSCxJQUFmLENBQUVHLFFBQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3dDRixVQUR4QyxDQUNFRSxlQURGO0FBQUEsSUFDbUJDLGdCQURuQixHQUN3Q0gsVUFEeEMsQ0FDbUJHLGdCQURuQjs7O0FBR04sSUFBTUMsMEJBQTBCLGtCQUFoQztBQUFBLElBQ01DLDRCQUE0QixvQkFEbEM7QUFBQSxJQUVNQyxpQ0FBaUMseUJBRnZDO0FBQUEsSUFHTUMscUNBQXFDLDZCQUgzQztBQUFBLElBSU1DLDBCQUEwQixrQkFKaEM7QUFBQSxJQUtNQywyQkFBMkIsbUJBTGpDO0FBQUEsSUFNTUMsa0JBQWtCLElBQUlULFFBQUosQ0FBYUcsdUJBQWIsQ0FOeEI7QUFBQSxJQU9NTyxvQkFBb0IsSUFBSVYsUUFBSixDQUFhSSx5QkFBYixDQVAxQjtBQUFBLElBUU1PLHlCQUF3QixJQUFJWCxRQUFKLENBQWFLLDhCQUFiLENBUjlCO0FBQUEsSUFTTU8sNkJBQTZCLElBQUlaLFFBQUosQ0FBYU0sa0NBQWIsQ0FUbkM7QUFBQSxJQVVNTyxrQkFBa0IsSUFBSVosZUFBSixDQUFvQk0sdUJBQXBCLENBVnhCO0FBQUEsSUFXTU8sd0JBQXdCLEtBWDlCO0FBQUEsSUFZTUMsdUJBQXVCLElBWjdCOztBQWNBLElBQUlDLFFBQVEsSUFBWjtBQUFBLElBQ0lDLFNBQVMsSUFEYjs7QUFHQSxJQUFJZixnQkFBSixDQUFxQk0sd0JBQXJCLEVBQStDTSxxQkFBL0MsRUFBc0VD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ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCwgVmVydGljYWxTcGxpdHRlciB9ID0gZWFzeUxheW91dDtcblxuY29uc3QgY29udGVudFRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjY29udGVudCcsXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3BhcnNlVHJlZScsXG4gICAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjbGV4aWNhbEdyYW1tYXInLFxuICAgICAgZXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNleHRlbmRlZEJORkdyYW1tYXInLFxuICAgICAgc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IgPSAnI3NpemVhYmxlRWxlbWVudCcsXG4gICAgICB2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IgPSAnI3ZlcnRpY2FsU3BsaXR0ZXInLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhID0gbmV3IFRleHRhcmVhKHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYSA9bmV3IFRleHRhcmVhKGxleGljYWxHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBleHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShleHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHNpemVhYmxlRWxlbWVudCA9IG5ldyBTaXplYWJsZUVsZW1lbnQoc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IpLFxuICAgICAgYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gZmFsc2UsXG4gICAgICBhZnRlclNpemVhYmxlRWxlbWVudCA9IHRydWU7XG5cbmxldCBsZXhlciA9IG51bGwsXG4gICAgcGFyc2VyID0gbnVsbDtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIodmVydGljYWxTcGxpdHRlclNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50KTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oY29udGVudCwgbGV4aWNhbEdyYW1tYXIsIGV4dGVuZGVkQk5GR3JhbW1hciwgdXBkYXRlSGFuZGxlcikge1xuICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudCwgLy8vXG4gICAgICAgICAgZXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGV4dGVuZGVkQk5GR3JhbW1hciwgIC8vL1xuICAgICAgICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KGxleGljYWxHcmFtbWFyLCBudWxsLCAnICAnKTtcblxuICAgIGNvbnRlbnRUZXh0YXJlYS5zZXRWYWx1ZShjb250ZW50VGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLnNldFZhbHVlKGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBleHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYS5zZXRWYWx1ZShleHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIGNvbnRlbnRUZXh0YXJlYS5vbktleVVwKHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5vbktleVVwKHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgZXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVMZXhlcihMZXhlcikge1xuICAgIGNvbnN0IGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGxleGljYWxHcmFtbWFyVGV4dGFyZWEuZ2V0VmFsdWUoKTtcblxuICAgIGxldCBsZXhpY2FsR3JhbW1hciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgbGV4aWNhbEdyYW1tYXIgPSBKU09OLnBhcnNlKGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG5cbiAgICBjb25zdCBsZXhpY2FsR3JhbW1hclZhbGlkID0gKGxleGljYWxHcmFtbWFyICE9PSBudWxsKTtcblxuICAgIGlmIChsZXhpY2FsR3JhbW1hclZhbGlkKSB7XG4gICAgICBsZXhlciA9IExleGVyLmZyb21HcmFtbWFyKGxleGljYWxHcmFtbWFyKTtcblxuICAgICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV4ZXIgPSBudWxsO1xuXG4gICAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZXIoY2FsbGJhY2spIHtcbiAgICBjb25zdCBibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgZ3JhbW1hciA9IGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlOyAvLy9cblxuICAgIHBhcnNlciA9IGNhbGxiYWNrKGdyYW1tYXIpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShwcm9kdWN0aW9uTmFtZSkge1xuICAgIGxldCBub2RlID0gbnVsbCxcbiAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICBpZiAoKGxleGVyICE9PSBudWxsKSAmJiAocGFyc2VyICE9PSBudWxsKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgcHJvZHVjdGlvbiA9IHBhcnNlci5maW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgICAgIGxpbmVzID0gbGV4ZXIubGluZXNGcm9tQ29udGVudChjb250ZW50KTtcblxuICAgICAgICBub2RlID0gcGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMsIHByb2R1Y3Rpb24pO1xuXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZG9jdW1lbnQgY2Fubm90IGJlIHBhcnNlZCBmb3Igc29tZSByZWFzb24uJyk7ICAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IG5vZGUuZ2VuZXJhdGVQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG5cbiAgICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==