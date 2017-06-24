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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImxleGljYWxHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciIsImV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnRTZWxlY3RvciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsImNvbnRlbnRUZXh0YXJlYSIsInBhcnNlVHJlZVRleHRhcmVhIiwibGV4aWNhbEdyYW1tYXJUZXh0YXJlYSIsImV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhIiwic2l6ZWFibGVFbGVtZW50IiwiYmVmb3JlU2l6ZWFibGVFbGVtZW50IiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJsZXhlciIsInBhcnNlciIsIkV4YW1wbGUiLCJjb250ZW50IiwibGV4aWNhbEdyYW1tYXIiLCJleHRlbmRlZEJORkdyYW1tYXIiLCJ1cGRhdGVIYW5kbGVyIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJleHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlIiwibGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwib25LZXlVcCIsIkxleGVyIiwiZ2V0VmFsdWUiLCJwYXJzZSIsImVycm9yIiwibGV4aWNhbEdyYW1tYXJWYWxpZCIsImZyb21HcmFtbWFyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNhbGxiYWNrIiwiYm5mR3JhbW1hclRleHRhcmVhVmFsdWUiLCJncmFtbWFyIiwicnVsZU5hbWUiLCJub2RlIiwicGFyc2VUcmVlVGV4dGFyZWFIVE1MIiwicnVsZSIsImZpbmRSdWxlIiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50Iiwibm9kZUZyb21MaW5lcyIsIkVycm9yIiwicGFyc2VUcmVlIiwiZ2VuZXJhdGVQYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJ0b1N0cmluZyIsImh0bWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGFBQVIsQ0FEbkI7O0FBR00sSUFBRUUsUUFBRixHQUFlSCxJQUFmLENBQUVHLFFBQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3dDRixVQUR4QyxDQUNFRSxlQURGO0FBQUEsSUFDbUJDLGdCQURuQixHQUN3Q0gsVUFEeEMsQ0FDbUJHLGdCQURuQjs7O0FBR04sSUFBTUMsMEJBQTBCLGtCQUFoQztBQUFBLElBQ01DLDRCQUE0QixvQkFEbEM7QUFBQSxJQUVNQyxpQ0FBaUMseUJBRnZDO0FBQUEsSUFHTUMscUNBQXFDLDZCQUgzQztBQUFBLElBSU1DLDBCQUEwQixrQkFKaEM7QUFBQSxJQUtNQywyQkFBMkIsbUJBTGpDO0FBQUEsSUFNTUMsa0JBQWtCLElBQUlULFFBQUosQ0FBYUcsdUJBQWIsQ0FOeEI7QUFBQSxJQU9NTyxvQkFBb0IsSUFBSVYsUUFBSixDQUFhSSx5QkFBYixDQVAxQjtBQUFBLElBUU1PLHlCQUF3QixJQUFJWCxRQUFKLENBQWFLLDhCQUFiLENBUjlCO0FBQUEsSUFTTU8sNkJBQTZCLElBQUlaLFFBQUosQ0FBYU0sa0NBQWIsQ0FUbkM7QUFBQSxJQVVNTyxrQkFBa0IsSUFBSVosZUFBSixDQUFvQk0sdUJBQXBCLENBVnhCO0FBQUEsSUFXTU8sd0JBQXdCLEtBWDlCO0FBQUEsSUFZTUMsdUJBQXVCLElBWjdCOztBQWNBLElBQUlDLFFBQVEsSUFBWjtBQUFBLElBQ0lDLFNBQVMsSUFEYjs7QUFHQSxJQUFJZixnQkFBSixDQUFxQk0sd0JBQXJCLEVBQStDTSxxQkFBL0MsRUFBc0VDLG9CQUF0RTs7SUFFTUcsTzs7Ozs7Ozt3QkFDT0MsTyxFQUFTQyxjLEVBQWdCQyxrQixFQUFvQkMsYSxFQUFlO0FBQ3JFLFVBQU1DLHVCQUF1QkosT0FBN0I7QUFBQSxVQUFzQztBQUNoQ0ssd0NBQWtDSCxrQkFEeEM7QUFBQSxVQUM2RDtBQUN2REksb0NBQThCQyxLQUFLQyxTQUFMLENBQWVQLGNBQWYsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsQ0FGcEM7O0FBSUFYLHNCQUFnQm1CLFFBQWhCLENBQXlCTCxvQkFBekI7O0FBRUFaLDZCQUF1QmlCLFFBQXZCLENBQWdDSCwyQkFBaEM7O0FBRUFiLGlDQUEyQmdCLFFBQTNCLENBQW9DSiwrQkFBcEM7O0FBRUFmLHNCQUFnQm9CLE9BQWhCLENBQXdCUCxhQUF4Qjs7QUFFQVgsNkJBQXVCa0IsT0FBdkIsQ0FBK0JQLGFBQS9COztBQUVBVixpQ0FBMkJpQixPQUEzQixDQUFtQ1AsYUFBbkM7QUFDRDs7O2dDQUVrQlEsSyxFQUFPO0FBQ3hCLFVBQU1MLDhCQUE4QmQsdUJBQXVCb0IsUUFBdkIsRUFBcEM7O0FBRUEsVUFBSVgsaUJBQWlCLElBQXJCOztBQUVBLFVBQUk7QUFDRkEseUJBQWlCTSxLQUFLTSxLQUFMLENBQVdQLDJCQUFYLENBQWpCO0FBQ0QsT0FGRCxDQUVFLE9BQU9RLEtBQVAsRUFBYyxDQUFFOztBQUVsQixVQUFNQyxzQkFBdUJkLG1CQUFtQixJQUFoRDs7QUFFQSxVQUFJYyxtQkFBSixFQUF5QjtBQUN2QmxCLGdCQUFRYyxNQUFNSyxXQUFOLENBQWtCZixjQUFsQixDQUFSOztBQUVBVCwrQkFBdUJ5QixXQUF2QixDQUFtQyxPQUFuQztBQUNELE9BSkQsTUFJTztBQUNMcEIsZ0JBQVEsSUFBUjs7QUFFQUwsK0JBQXVCMEIsUUFBdkIsQ0FBZ0MsT0FBaEM7QUFDRDtBQUNGOzs7aUNBRW1CQyxRLEVBQVU7QUFDNUIsVUFBTUMsMEJBQTBCM0IsMkJBQTJCbUIsUUFBM0IsRUFBaEM7QUFBQSxVQUNNUyxVQUFVRCx1QkFEaEIsQ0FENEIsQ0FFYTs7QUFFekN0QixlQUFTcUIsU0FBU0UsT0FBVCxDQUFUO0FBQ0Q7OztvQ0FFc0JDLFEsRUFBVTtBQUMvQixVQUFJQyxPQUFPLElBQVg7QUFBQSxVQUNJQyx3QkFBd0IsRUFENUI7O0FBR0EsVUFBSzNCLFVBQVUsSUFBWCxJQUFxQkMsV0FBVyxJQUFwQyxFQUEyQztBQUN6QyxZQUFJO0FBQ0YsY0FBTU0sdUJBQXVCZCxnQkFBZ0JzQixRQUFoQixFQUE3QjtBQUFBLGNBQ01aLFVBQVVJLG9CQURoQjtBQUFBLGNBQ3NDO0FBQ2hDcUIsaUJBQU8zQixPQUFPNEIsUUFBUCxDQUFnQkosUUFBaEIsQ0FGYjtBQUFBLGNBR01LLFFBQVE5QixNQUFNK0IsZ0JBQU4sQ0FBdUI1QixPQUF2QixDQUhkOztBQUtBdUIsaUJBQU96QixPQUFPK0IsYUFBUCxDQUFxQkYsS0FBckIsRUFBNEJGLElBQTVCLENBQVA7O0FBRUEsY0FBSUYsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLGtCQUFNLElBQUlPLEtBQUosQ0FBVSxnREFBVixDQUFOLENBRGlCLENBQ21EO0FBQ3JFOztBQUVELGNBQU1DLFlBQVlSLEtBQUtTLGlCQUFMLENBQXVCTCxLQUF2QixDQUFsQjs7QUFFQUksb0JBQVVFLFNBQVYsR0FkRSxDQWNzQjs7QUFFeEIsY0FBTUMsa0JBQWtCSCxVQUFVSSxRQUFWLEVBQXhCOztBQUVBWCxrQ0FBd0JVLGVBQXhCLENBbEJFLENBa0J3Qzs7QUFFMUM1QywwQkFBZ0IyQixXQUFoQixDQUE0QixPQUE1QjtBQUNELFNBckJELENBcUJFLE9BQU9ILEtBQVAsRUFBYztBQUNkeEIsMEJBQWdCNEIsUUFBaEIsQ0FBeUIsT0FBekI7QUFDRDtBQUNGOztBQUVEM0Isd0JBQWtCNkMsSUFBbEIsQ0FBdUJaLHFCQUF2Qjs7QUFFQSxhQUFPRCxJQUFQO0FBQ0Q7Ozs7OztBQUdIYyxPQUFPQyxPQUFQLEdBQWlCdkMsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2xleGljYWxHcmFtbWFyJyxcbiAgICAgIGV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjZXh0ZW5kZWRCTkZHcmFtbWFyJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEgPW5ldyBUZXh0YXJlYShsZXhpY2FsR3JhbW1hclRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgZXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoZXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBzaXplYWJsZUVsZW1lbnQgPSBuZXcgU2l6ZWFibGVFbGVtZW50KHNpemVhYmxlRWxlbWVudFNlbGVjdG9yKSxcbiAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlO1xuXG5sZXQgbGV4ZXIgPSBudWxsLFxuICAgIHBhcnNlciA9IG51bGw7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKGNvbnRlbnQsIGxleGljYWxHcmFtbWFyLCBleHRlbmRlZEJORkdyYW1tYXIsIHVwZGF0ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgIGV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhVmFsdWUgPSBleHRlbmRlZEJORkdyYW1tYXIsICAvLy9cbiAgICAgICAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsR3JhbW1hciwgbnVsbCwgJyAgJyk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEuc2V0VmFsdWUoY29udGVudFRleHRhcmVhVmFsdWUpO1xuXG4gICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5zZXRWYWx1ZShsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgZXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWEuc2V0VmFsdWUoZXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlTGV4ZXIoTGV4ZXIpIHtcbiAgICBjb25zdCBsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUgPSBsZXhpY2FsR3JhbW1hclRleHRhcmVhLmdldFZhbHVlKCk7XG5cbiAgICBsZXQgbGV4aWNhbEdyYW1tYXIgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxleGljYWxHcmFtbWFyID0gSlNPTi5wYXJzZShsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gICAgY29uc3QgbGV4aWNhbEdyYW1tYXJWYWxpZCA9IChsZXhpY2FsR3JhbW1hciAhPT0gbnVsbCk7XG5cbiAgICBpZiAobGV4aWNhbEdyYW1tYXJWYWxpZCkge1xuICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tR3JhbW1hcihsZXhpY2FsR3JhbW1hcik7XG5cbiAgICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxleGVyID0gbnVsbDtcblxuICAgICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VyKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYm5mR3JhbW1hclRleHRhcmVhVmFsdWUgPSBleHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGdyYW1tYXIgPSBibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZTsgLy8vXG5cbiAgICBwYXJzZXIgPSBjYWxsYmFjayhncmFtbWFyKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWUocnVsZU5hbWUpIHtcbiAgICBsZXQgbm9kZSA9IG51bGwsXG4gICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgaWYgKChsZXhlciAhPT0gbnVsbCkgJiYgKHBhcnNlciAhPT0gbnVsbCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgICAgICAgIHJ1bGUgPSBwYXJzZXIuZmluZFJ1bGUocnVsZU5hbWUpLFxuICAgICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICAgICAgbm9kZSA9IHBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzLCBydWxlKTtcblxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRvY3VtZW50IGNhbm5vdCBiZSBwYXJzZWQgZm9yIHNvbWUgcmVhc29uLicpOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmdlbmVyYXRlUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICAgIGNvbnN0IHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS50b1N0cmluZygpO1xuXG4gICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnRlbnRUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=