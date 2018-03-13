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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsInJ1bGVVdGlsaXRpZXMiLCJ0b2tlbnNVdGlsaXRpZXMiLCJUZXh0YXJlYSIsImZpbmRSdWxlQnlOYW1lIiwic2lnbmlmaWNhbnRUb2tlbnNGcm9tVG9rZW5zIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImxleGljYWxFbnRyaWVzVGV4dGFyZWFTZWxlY3RvciIsImJuZlRleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnRTZWxlY3RvciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsImNvbnRlbnRUZXh0YXJlYSIsInBhcnNlVHJlZVRleHRhcmVhIiwibGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImJuZlRleHRhcmVhIiwic2l6ZWFibGVFbGVtZW50IiwiYmVmb3JlU2l6ZWFibGVFbGVtZW50IiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJ2ZXJ0aWNhbFNwbGl0dGVyIiwiaW5pdGlhbGlzZSIsImxleGVyIiwicGFyc2VyIiwiRXhhbXBsZSIsImNvbnRlbnQiLCJsZXhpY2FsRW50cmllcyIsImJuZiIsInVwZGF0ZUhhbmRsZXIiLCJjb250ZW50VGV4dGFyZWFWYWx1ZSIsImJuZlRleHRhcmVhVmFsdWUiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0VmFsdWUiLCJvbktleVVwIiwiTGV4ZXIiLCJnZXRWYWx1ZSIsInBhcnNlIiwiZXJyb3IiLCJsZXhpY2FsRW50cmllc1ZhbGlkIiwiZnJvbUVudHJpZXMiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY2FsbGJhY2siLCJydWxlTmFtZSIsIm5vZGUiLCJwYXJzZVRyZWVUZXh0YXJlYUhUTUwiLCJuYW1lIiwicnVsZXMiLCJnZXRSdWxlcyIsInJ1bGUiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsInNpZ25pZmljYW50VG9rZW5zIiwibm9kZUZyb21TaWduaWZpY2FudFRva2VucyIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwiYXNTdHJpbmciLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdBLElBQU1FLGdCQUFnQkYsUUFBUSxrQkFBUixDQUF0QjtBQUFBLElBQ01HLGtCQUFrQkgsUUFBUSxvQkFBUixDQUR4Qjs7QUFHTSxJQUFFSSxRQUFGLEdBQWVMLElBQWYsQ0FBRUssUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJILGFBRHJCLENBQ0VHLGNBREY7QUFBQSxJQUVFQywyQkFGRixHQUVrQ0gsZUFGbEMsQ0FFRUcsMkJBRkY7QUFBQSxJQUdFQyxlQUhGLEdBR3dDTixVQUh4QyxDQUdFTSxlQUhGO0FBQUEsSUFHbUJDLGdCQUhuQixHQUd3Q1AsVUFIeEMsQ0FHbUJPLGdCQUhuQjs7O0FBS04sSUFBTUMsMEJBQTBCLGtCQUFoQztBQUFBLElBQ01DLDRCQUE0QixvQkFEbEM7QUFBQSxJQUVNQyxpQ0FBaUMseUJBRnZDO0FBQUEsSUFHTUMsc0JBQXNCLGNBSDVCO0FBQUEsSUFJTUMsMEJBQTBCLGtCQUpoQztBQUFBLElBS01DLDJCQUEyQixtQkFMakM7QUFBQSxJQU1NQyxrQkFBa0IsSUFBSVgsUUFBSixDQUFhSyx1QkFBYixDQU54QjtBQUFBLElBT01PLG9CQUFvQixJQUFJWixRQUFKLENBQWFNLHlCQUFiLENBUDFCO0FBQUEsSUFRTU8seUJBQXdCLElBQUliLFFBQUosQ0FBYU8sOEJBQWIsQ0FSOUI7QUFBQSxJQVNNTyxjQUFjLElBQUlkLFFBQUosQ0FBYVEsbUJBQWIsQ0FUcEI7QUFBQSxJQVVNTyxrQkFBa0IsSUFBSVosZUFBSixDQUFvQk0sdUJBQXBCLENBVnhCO0FBQUEsSUFXTU8sd0JBQXdCLEtBWDlCO0FBQUEsSUFZTUMsdUJBQXVCLElBWjdCO0FBQUEsSUFhTUMsbUJBQW1CLElBQUlkLGdCQUFKLENBQXFCTSx3QkFBckIsRUFBK0NNLHFCQUEvQyxFQUFzRUMsb0JBQXRFLENBYnpCOztBQWVBQyxpQkFBaUJDLFVBQWpCOztBQUVBLElBQUlDLFFBQVEsSUFBWjtBQUFBLElBQ0lDLFNBQVMsSUFEYjs7SUFHTUMsTzs7Ozs7Ozt3QkFDT0MsTyxFQUFTQyxjLEVBQWdCQyxHLEVBQUtDLGEsRUFBZTtBQUN0RCxVQUFNQyx1QkFBdUJKLE9BQTdCO0FBQUEsVUFBc0M7QUFDaENLLHlCQUFtQkgsR0FEekI7QUFBQSxVQUMrQjtBQUN6Qkksb0NBQThCQyxLQUFLQyxTQUFMLENBQWVQLGNBQWYsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsQ0FGcEM7O0FBSUFiLHNCQUFnQnFCLFFBQWhCLENBQXlCTCxvQkFBekI7O0FBRUFkLDZCQUF1Qm1CLFFBQXZCLENBQWdDSCwyQkFBaEM7O0FBRUFmLGtCQUFZa0IsUUFBWixDQUFxQkosZ0JBQXJCOztBQUVBakIsc0JBQWdCc0IsT0FBaEIsQ0FBd0JQLGFBQXhCOztBQUVBYiw2QkFBdUJvQixPQUF2QixDQUErQlAsYUFBL0I7O0FBRUFaLGtCQUFZbUIsT0FBWixDQUFvQlAsYUFBcEI7QUFDRDs7O2dDQUVrQlEsSyxFQUFPO0FBQ3hCLFVBQU1MLDhCQUE4QmhCLHVCQUF1QnNCLFFBQXZCLEVBQXBDOztBQUVBLFVBQUlYLGlCQUFpQixJQUFyQjs7QUFFQSxVQUFJO0FBQ0ZBLHlCQUFpQk0sS0FBS00sS0FBTCxDQUFXUCwyQkFBWCxDQUFqQjtBQUNELE9BRkQsQ0FFRSxPQUFPUSxLQUFQLEVBQWMsQ0FBRTs7QUFFbEIsVUFBTUMsc0JBQXVCZCxtQkFBbUIsSUFBaEQ7O0FBRUEsVUFBSWMsbUJBQUosRUFBeUI7QUFDdkJsQixnQkFBUWMsTUFBTUssV0FBTixDQUFrQmYsY0FBbEIsQ0FBUjs7QUFFQVgsK0JBQXVCMkIsV0FBdkIsQ0FBbUMsT0FBbkM7QUFDRCxPQUpELE1BSU87QUFDTHBCLGdCQUFRLElBQVI7O0FBRUFQLCtCQUF1QjRCLFFBQXZCLENBQWdDLE9BQWhDO0FBQ0Q7QUFDRjs7O2lDQUVtQkMsUSxFQUFVO0FBQzVCLFVBQU1kLG1CQUFtQmQsWUFBWXFCLFFBQVosRUFBekI7QUFBQSxVQUNNVixNQUFNRyxnQkFEWixDQUQ0QixDQUVFOztBQUU5QlAsZUFBU3FCLFNBQVNqQixHQUFULENBQVQ7QUFDRDs7O29DQUVzQmtCLFEsRUFBVTtBQUMvQixVQUFJQyxPQUFPLElBQVg7QUFBQSxVQUNJQyx3QkFBd0IsRUFENUI7O0FBR0EsVUFBS3pCLFVBQVUsSUFBWCxJQUFxQkMsV0FBVyxJQUFwQyxFQUEyQztBQUN6QyxZQUFJO0FBQ0YsY0FBTU0sdUJBQXVCaEIsZ0JBQWdCd0IsUUFBaEIsRUFBN0I7QUFBQSxjQUNNWixVQUFVSSxvQkFEaEI7QUFBQSxjQUNzQztBQUNoQ21CLGlCQUFPSCxRQUZiO0FBQUEsY0FFd0I7QUFDbEJJLGtCQUFRMUIsT0FBTzJCLFFBQVAsRUFIZDtBQUFBLGNBSU1DLE9BQU9oRCxlQUFlNkMsSUFBZixFQUFxQkMsS0FBckIsQ0FKYjtBQUFBLGNBS01HLFNBQVM5QixNQUFNK0IsaUJBQU4sQ0FBd0I1QixPQUF4QixDQUxmO0FBQUEsY0FNTTZCLG9CQUFvQmxELDRCQUE0QmdELE1BQTVCLENBTjFCOztBQVFBTixpQkFBT3ZCLE9BQU9nQyx5QkFBUCxDQUFpQ0QsaUJBQWpDLEVBQW9ESCxJQUFwRCxDQUFQOztBQUVBLGNBQUlMLFNBQVMsSUFBYixFQUFtQjtBQUNqQixnQkFBTVUsWUFBWVYsS0FBS1csV0FBTCxDQUFpQkwsTUFBakIsQ0FBbEI7O0FBRUFJLHNCQUFVRSxTQUFWLEdBSGlCLENBR087O0FBRXhCLGdCQUFNQyxrQkFBa0JILFVBQVVJLFFBQVYsRUFBeEI7O0FBRUFiLG9DQUF3QlksZUFBeEIsQ0FQaUIsQ0FPeUI7QUFDM0MsV0FSRCxNQVFPO0FBQ0xaLG9DQUF3QixFQUF4QjtBQUNEOztBQUVEbEMsMEJBQWdCNkIsV0FBaEIsQ0FBNEIsT0FBNUI7QUFDRCxTQXhCRCxDQXdCRSxPQUFPSCxLQUFQLEVBQWM7QUFDZDFCLDBCQUFnQjhCLFFBQWhCLENBQXlCLE9BQXpCO0FBQ0Q7QUFDRjs7QUFFRDdCLHdCQUFrQitDLElBQWxCLENBQXVCZCxxQkFBdkI7O0FBRUEsYUFBT0QsSUFBUDtBQUNEOzs7Ozs7QUFHSGdCLE9BQU9DLE9BQVAsR0FBaUJ2QyxPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9ydWxlJyksXG4gICAgICB0b2tlbnNVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy90b2tlbnMnKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgZmluZFJ1bGVCeU5hbWUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IHNpZ25pZmljYW50VG9rZW5zRnJvbVRva2VucyB9ID0gdG9rZW5zVXRpbGl0aWVzLFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2xleGljYWxFbnRyaWVzJyxcbiAgICAgIGJuZlRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjYm5mJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEgPW5ldyBUZXh0YXJlYShsZXhpY2FsRW50cmllc1RleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgYm5mVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoYm5mVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBzaXplYWJsZUVsZW1lbnQgPSBuZXcgU2l6ZWFibGVFbGVtZW50KHNpemVhYmxlRWxlbWVudFNlbGVjdG9yKSxcbiAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlLFxuICAgICAgdmVydGljYWxTcGxpdHRlciA9IG5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbnZlcnRpY2FsU3BsaXR0ZXIuaW5pdGlhbGlzZSgpO1xuXG5sZXQgbGV4ZXIgPSBudWxsLFxuICAgIHBhcnNlciA9IG51bGw7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKGNvbnRlbnQsIGxleGljYWxFbnRyaWVzLCBibmYsIHVwZGF0ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgIGJuZlRleHRhcmVhVmFsdWUgPSBibmYsICAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsRW50cmllcywgbnVsbCwgJyAgJyk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEuc2V0VmFsdWUoY29udGVudFRleHRhcmVhVmFsdWUpO1xuXG4gICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5zZXRWYWx1ZShsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUpO1xuXG4gICAgYm5mVGV4dGFyZWEuc2V0VmFsdWUoYm5mVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBjb250ZW50VGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGJuZlRleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlTGV4ZXIoTGV4ZXIpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUgPSBsZXhpY2FsRW50cmllc1RleHRhcmVhLmdldFZhbHVlKCk7XG5cbiAgICBsZXQgbGV4aWNhbEVudHJpZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxleGljYWxFbnRyaWVzID0gSlNPTi5wYXJzZShsZXhpY2FsRW50cmllc1RleHRhcmVhVmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXNWYWxpZCA9IChsZXhpY2FsRW50cmllcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAobGV4aWNhbEVudHJpZXNWYWxpZCkge1xuICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxleGVyID0gbnVsbDtcblxuICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VyKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYm5mVGV4dGFyZWFWYWx1ZSA9IGJuZlRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgYm5mID0gYm5mVGV4dGFyZWFWYWx1ZTsgLy8vXG5cbiAgICBwYXJzZXIgPSBjYWxsYmFjayhibmYpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShydWxlTmFtZSkge1xuICAgIGxldCBub2RlID0gbnVsbCxcbiAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICBpZiAoKGxleGVyICE9PSBudWxsKSAmJiAocGFyc2VyICE9PSBudWxsKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0YXJlYVZhbHVlLCAvLy9cbiAgICAgICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIHJ1bGVzID0gcGFyc2VyLmdldFJ1bGVzKCksXG4gICAgICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZUJ5TmFtZShuYW1lLCBydWxlcyksXG4gICAgICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gICAgICAgIG5vZGUgPSBwYXJzZXIubm9kZUZyb21TaWduaWZpY2FudFRva2VucyhzaWduaWZpY2FudFRva2VucywgcnVsZSk7XG5cbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnRlbnRUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=