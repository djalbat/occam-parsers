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
    afterSizeableElement = true,
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

      // try {
      lexicalEntries = JSON.parse(lexicalEntriesTextareaValue);
      // } catch (error) {}

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
        // try {
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
        // } catch (error) {
        //   contentTextarea.addClass('error');
        // }
      }

      parseTreeTextarea.html(parseTreeTextareaHTML);

      return node;
    }
  }]);

  return Example;
}();

module.exports = Example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsInJ1bGVVdGlsaXRpZXMiLCJUZXh0YXJlYSIsImZpbmRSdWxlQnlOYW1lIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImxleGljYWxFbnRyaWVzVGV4dGFyZWFTZWxlY3RvciIsImJuZlRleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnRTZWxlY3RvciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsImNvbnRlbnRUZXh0YXJlYSIsInBhcnNlVHJlZVRleHRhcmVhIiwibGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImJuZlRleHRhcmVhIiwic2l6ZWFibGVFbGVtZW50IiwiYmVmb3JlU2l6ZWFibGVFbGVtZW50IiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJ2ZXJ0aWNhbFNwbGl0dGVyIiwiaW5pdGlhbGlzZSIsImxleGVyIiwicGFyc2VyIiwiRXhhbXBsZSIsImNvbnRlbnQiLCJsZXhpY2FsRW50cmllcyIsImJuZiIsInVwZGF0ZUhhbmRsZXIiLCJjb250ZW50VGV4dGFyZWFWYWx1ZSIsImJuZlRleHRhcmVhVmFsdWUiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0VmFsdWUiLCJvbktleVVwIiwiTGV4ZXIiLCJnZXRWYWx1ZSIsInBhcnNlIiwibGV4aWNhbEVudHJpZXNWYWxpZCIsImZyb21FbnRyaWVzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNhbGxiYWNrIiwicnVsZU5hbWUiLCJub2RlIiwicGFyc2VUcmVlVGV4dGFyZWFIVE1MIiwibmFtZSIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJydWxlIiwidG9rZW5zIiwidG9rZW5zRnJvbUNvbnRlbnQiLCJub2RlRnJvbVRva2VucyIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwiYXNTdHJpbmciLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdBLElBQU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUF0Qjs7QUFFTSxJQUFFRyxRQUFGLEdBQWVKLElBQWYsQ0FBRUksUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJGLGFBRHJCLENBQ0VFLGNBREY7QUFBQSxJQUVFQyxlQUZGLEdBRXdDSixVQUZ4QyxDQUVFSSxlQUZGO0FBQUEsSUFFbUJDLGdCQUZuQixHQUV3Q0wsVUFGeEMsQ0FFbUJLLGdCQUZuQjs7O0FBSU4sSUFBTUMsMEJBQTBCLGtCQUFoQztBQUFBLElBQ01DLDRCQUE0QixvQkFEbEM7QUFBQSxJQUVNQyxpQ0FBaUMseUJBRnZDO0FBQUEsSUFHTUMsc0JBQXNCLGNBSDVCO0FBQUEsSUFJTUMsMEJBQTBCLGtCQUpoQztBQUFBLElBS01DLDJCQUEyQixtQkFMakM7QUFBQSxJQU1NQyxrQkFBa0IsSUFBSVYsUUFBSixDQUFhSSx1QkFBYixDQU54QjtBQUFBLElBT01PLG9CQUFvQixJQUFJWCxRQUFKLENBQWFLLHlCQUFiLENBUDFCO0FBQUEsSUFRTU8seUJBQXdCLElBQUlaLFFBQUosQ0FBYU0sOEJBQWIsQ0FSOUI7QUFBQSxJQVNNTyxjQUFjLElBQUliLFFBQUosQ0FBYU8sbUJBQWIsQ0FUcEI7QUFBQSxJQVVNTyxrQkFBa0IsSUFBSVosZUFBSixDQUFvQk0sdUJBQXBCLENBVnhCO0FBQUEsSUFXTU8sd0JBQXdCLEtBWDlCO0FBQUEsSUFZTUMsdUJBQXVCLElBWjdCO0FBQUEsSUFhTUMsbUJBQW1CLElBQUlkLGdCQUFKLENBQXFCTSx3QkFBckIsRUFBK0NNLHFCQUEvQyxFQUFzRUMsb0JBQXRFLENBYnpCOztBQWVBQyxpQkFBaUJDLFVBQWpCOztBQUVBLElBQUlDLFFBQVEsSUFBWjtBQUFBLElBQ0lDLFNBQVMsSUFEYjs7SUFHTUMsTzs7Ozs7Ozt3QkFDT0MsTyxFQUFTQyxjLEVBQWdCQyxHLEVBQUtDLGEsRUFBZTtBQUN0RCxVQUFNQyx1QkFBdUJKLE9BQTdCO0FBQUEsVUFBc0M7QUFDaENLLHlCQUFtQkgsR0FEekI7QUFBQSxVQUMrQjtBQUN6Qkksb0NBQThCQyxLQUFLQyxTQUFMLENBQWVQLGNBQWYsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsQ0FGcEM7O0FBSUFiLHNCQUFnQnFCLFFBQWhCLENBQXlCTCxvQkFBekI7O0FBRUFkLDZCQUF1Qm1CLFFBQXZCLENBQWdDSCwyQkFBaEM7O0FBRUFmLGtCQUFZa0IsUUFBWixDQUFxQkosZ0JBQXJCOztBQUVBakIsc0JBQWdCc0IsT0FBaEIsQ0FBd0JQLGFBQXhCOztBQUVBYiw2QkFBdUJvQixPQUF2QixDQUErQlAsYUFBL0I7O0FBRUFaLGtCQUFZbUIsT0FBWixDQUFvQlAsYUFBcEI7QUFDRDs7O2dDQUVrQlEsSyxFQUFPO0FBQ3hCLFVBQU1MLDhCQUE4QmhCLHVCQUF1QnNCLFFBQXZCLEVBQXBDOztBQUVBLFVBQUlYLGlCQUFpQixJQUFyQjs7QUFFQTtBQUNFQSx1QkFBaUJNLEtBQUtNLEtBQUwsQ0FBV1AsMkJBQVgsQ0FBakI7QUFDRjs7QUFFQSxVQUFNUSxzQkFBdUJiLG1CQUFtQixJQUFoRDs7QUFFQSxVQUFJYSxtQkFBSixFQUF5QjtBQUN2QmpCLGdCQUFRYyxNQUFNSSxXQUFOLENBQWtCZCxjQUFsQixDQUFSOztBQUVBWCwrQkFBdUIwQixXQUF2QixDQUFtQyxPQUFuQztBQUNELE9BSkQsTUFJTztBQUNMbkIsZ0JBQVEsSUFBUjs7QUFFQVAsK0JBQXVCMkIsUUFBdkIsQ0FBZ0MsT0FBaEM7QUFDRDtBQUNGOzs7aUNBRW1CQyxRLEVBQVU7QUFDNUIsVUFBTWIsbUJBQW1CZCxZQUFZcUIsUUFBWixFQUF6QjtBQUFBLFVBQ01WLE1BQU1HLGdCQURaLENBRDRCLENBRUU7O0FBRTlCUCxlQUFTb0IsU0FBU2hCLEdBQVQsQ0FBVDtBQUNEOzs7b0NBRXNCaUIsUSxFQUFVO0FBQy9CLFVBQUlDLE9BQU8sSUFBWDtBQUFBLFVBQ0lDLHdCQUF3QixFQUQ1Qjs7QUFHQSxVQUFLeEIsVUFBVSxJQUFYLElBQXFCQyxXQUFXLElBQXBDLEVBQTJDO0FBQ3pDO0FBQ0UsWUFBTU0sdUJBQXVCaEIsZ0JBQWdCd0IsUUFBaEIsRUFBN0I7QUFBQSxZQUNNWixVQUFVSSxvQkFEaEI7QUFBQSxZQUNzQztBQUNoQ2tCLGVBQU9ILFFBRmI7QUFBQSxZQUV3QjtBQUNsQkksZ0JBQVF6QixPQUFPMEIsUUFBUCxFQUhkO0FBQUEsWUFJTUMsT0FBTzlDLGVBQWUyQyxJQUFmLEVBQXFCQyxLQUFyQixDQUpiO0FBQUEsWUFLTUcsU0FBUzdCLE1BQU04QixpQkFBTixDQUF3QjNCLE9BQXhCLENBTGY7O0FBT0FvQixlQUFPdEIsT0FBTzhCLGNBQVAsQ0FBc0JGLE1BQXRCLEVBQThCRCxJQUE5QixDQUFQOztBQUVBLFlBQUlMLFNBQVMsSUFBYixFQUFtQjtBQUNqQixjQUFNUyxZQUFZVCxLQUFLVSxXQUFMLENBQWlCSixNQUFqQixDQUFsQjs7QUFFQUcsb0JBQVVFLFNBQVYsR0FIaUIsQ0FHTzs7QUFFeEIsY0FBTUMsa0JBQWtCSCxVQUFVSSxRQUFWLEVBQXhCOztBQUVBWixrQ0FBd0JXLGVBQXhCLENBUGlCLENBT3lCO0FBQzNDLFNBUkQsTUFRTztBQUNMWCxrQ0FBd0IsRUFBeEI7QUFDRDs7QUFFRGpDLHdCQUFnQjRCLFdBQWhCLENBQTRCLE9BQTVCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQzQix3QkFBa0I2QyxJQUFsQixDQUF1QmIscUJBQXZCOztBQUVBLGFBQU9ELElBQVA7QUFDRDs7Ozs7O0FBR0hlLE9BQU9DLE9BQVAsR0FBaUJyQyxPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9ydWxlJyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IGZpbmRSdWxlQnlOYW1lIH0gPSBydWxlVXRpbGl0aWVzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2xleGljYWxFbnRyaWVzJyxcbiAgICAgIGJuZlRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjYm5mJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEgPW5ldyBUZXh0YXJlYShsZXhpY2FsRW50cmllc1RleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgYm5mVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoYm5mVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBzaXplYWJsZUVsZW1lbnQgPSBuZXcgU2l6ZWFibGVFbGVtZW50KHNpemVhYmxlRWxlbWVudFNlbGVjdG9yKSxcbiAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlLFxuICAgICAgdmVydGljYWxTcGxpdHRlciA9IG5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbnZlcnRpY2FsU3BsaXR0ZXIuaW5pdGlhbGlzZSgpO1xuXG5sZXQgbGV4ZXIgPSBudWxsLFxuICAgIHBhcnNlciA9IG51bGw7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKGNvbnRlbnQsIGxleGljYWxFbnRyaWVzLCBibmYsIHVwZGF0ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgIGJuZlRleHRhcmVhVmFsdWUgPSBibmYsICAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsRW50cmllcywgbnVsbCwgJyAgJyk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEuc2V0VmFsdWUoY29udGVudFRleHRhcmVhVmFsdWUpO1xuXG4gICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5zZXRWYWx1ZShsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUpO1xuXG4gICAgYm5mVGV4dGFyZWEuc2V0VmFsdWUoYm5mVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGJuZlRleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlTGV4ZXIoTGV4ZXIpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUgPSBsZXhpY2FsRW50cmllc1RleHRhcmVhLmdldFZhbHVlKCk7XG5cbiAgICBsZXQgbGV4aWNhbEVudHJpZXMgPSBudWxsO1xuXG4gICAgLy8gdHJ5IHtcbiAgICAgIGxleGljYWxFbnRyaWVzID0gSlNPTi5wYXJzZShsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUpO1xuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXNWYWxpZCA9IChsZXhpY2FsRW50cmllcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAobGV4aWNhbEVudHJpZXNWYWxpZCkge1xuICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxleGVyID0gbnVsbDtcblxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VyKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYm5mVGV4dGFyZWFWYWx1ZSA9IGJuZlRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgYm5mID0gYm5mVGV4dGFyZWFWYWx1ZTsgLy8vXG5cbiAgICBwYXJzZXIgPSBjYWxsYmFjayhibmYpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShydWxlTmFtZSkge1xuICAgIGxldCBub2RlID0gbnVsbCxcbiAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICBpZiAoKGxleGVyICE9PSBudWxsKSAmJiAocGFyc2VyICE9PSBudWxsKSkge1xuICAgICAgLy8gdHJ5IHtcbiAgICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVzID0gcGFyc2VyLmdldFJ1bGVzKCksXG4gICAgICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZUJ5TmFtZShuYW1lLCBydWxlcyksXG4gICAgICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gICAgICAgIG5vZGUgPSBwYXJzZXIubm9kZUZyb21Ub2tlbnModG9rZW5zLCBydWxlKTtcblxuICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgICAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgLy8gfVxuICAgIH1cblxuICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==