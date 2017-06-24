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
    key: 'getLexicalGrammarTextareaValue',
    value: function getLexicalGrammarTextareaValue() {
      return lexicalGrammarTextarea.getValue();
    }
  }, {
    key: 'getExtendedBNFGrammarTextareaValue',
    value: function getExtendedBNFGrammarTextareaValue() {
      return extendedBNFGrammarTextarea.getValue();
    }
  }, {
    key: 'setLexicalGrammarTextareaValue',
    value: function setLexicalGrammarTextareaValue(value) {
      lexicalGrammarTextarea.setValue(value);
    }
  }, {
    key: 'setExtendedBNFGrammarTextareaValue',
    value: function setExtendedBNFGrammarTextareaValue(value) {
      extendedBNFGrammarTextarea.setValue(value);
    }
  }, {
    key: 'setContentTextareaValue',
    value: function setContentTextareaValue(value) {
      contentTextarea.setValue(value);
    }
  }, {
    key: 'onLexicalGrammarTextareaKeyUp',
    value: function onLexicalGrammarTextareaKeyUp(handler) {
      lexicalGrammarTextarea.onKeyUp(handler);
    }
  }, {
    key: 'onExtendedBNFGrammarTextareaKeyUp',
    value: function onExtendedBNFGrammarTextareaKeyUp(handler) {
      extendedBNFGrammarTextarea.onKeyUp(handler);
    }
  }, {
    key: 'onContentTextareaKeyUp',
    value: function onContentTextareaKeyUp(handler) {
      contentTextarea.onKeyUp(handler);
    }
  }, {
    key: 'updateParseTreeTextarea',
    value: function updateParseTreeTextarea(production) {
      var node = null;

      try {
        var contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue,
            ///
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
        contentTextarea.addClass('error');

        Example.clearParseTreeTextarea();
      }

      return node;
    }
  }, {
    key: 'clearParseTreeTextarea',
    value: function clearParseTreeTextarea() {
      var parseTreeTextareaHTML = '';

      parseTreeTextarea.html(parseTreeTextareaHTML);
    }
  }, {
    key: 'updateLexer',
    value: function updateLexer(Lexer) {
      var lexicalGrammarTextareaValue = Example.getLexicalGrammarTextareaValue();

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
      var bnfGrammarTextareaValue = Example.getExtendedBNFGrammarTextareaValue(),
          grammar = bnfGrammarTextareaValue; ///

      parser = callback(grammar);
    }
  }, {
    key: 'updateParseTree',
    value: function updateParseTree(productionName) {
      if (lexer !== null && parser !== null) {
        var production = parser.findProduction(productionName);

        Example.updateParseTreeTextarea(production);
      } else {
        Example.clearParseTreeTextarea();
      }
    }
  }]);

  return Example;
}();

module.exports = Example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiZWFzeUxheW91dCIsIlRleHRhcmVhIiwiU2l6ZWFibGVFbGVtZW50IiwiVmVydGljYWxTcGxpdHRlciIsImNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciIsImxleGljYWxHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciIsImV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhU2VsZWN0b3IiLCJzaXplYWJsZUVsZW1lbnRTZWxlY3RvciIsInZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciIsImNvbnRlbnRUZXh0YXJlYSIsInBhcnNlVHJlZVRleHRhcmVhIiwibGV4aWNhbEdyYW1tYXJUZXh0YXJlYSIsImV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhIiwic2l6ZWFibGVFbGVtZW50IiwiYmVmb3JlU2l6ZWFibGVFbGVtZW50IiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJsZXhlciIsInBhcnNlciIsIkV4YW1wbGUiLCJnZXRWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVyIiwib25LZXlVcCIsInByb2R1Y3Rpb24iLCJub2RlIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJjb250ZW50IiwibGluZXMiLCJsaW5lc0Zyb21Db250ZW50Iiwibm9kZUZyb21MaW5lcyIsIkVycm9yIiwicGFyc2VUcmVlIiwiZ2VuZXJhdGVQYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJ0b1N0cmluZyIsInBhcnNlVHJlZVRleHRhcmVhSFRNTCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsImVycm9yIiwiYWRkQ2xhc3MiLCJjbGVhclBhcnNlVHJlZVRleHRhcmVhIiwiTGV4ZXIiLCJsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUiLCJnZXRMZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUiLCJsZXhpY2FsR3JhbW1hciIsIkpTT04iLCJwYXJzZSIsImxleGljYWxHcmFtbWFyVmFsaWQiLCJmcm9tR3JhbW1hciIsImNhbGxiYWNrIiwiYm5mR3JhbW1hclRleHRhcmVhVmFsdWUiLCJnZXRFeHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlIiwiZ3JhbW1hciIsInByb2R1Y3Rpb25OYW1lIiwiZmluZFByb2R1Y3Rpb24iLCJ1cGRhdGVQYXJzZVRyZWVUZXh0YXJlYSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLGFBQWFELFFBQVEsYUFBUixDQURuQjs7QUFHTSxJQUFFRSxRQUFGLEdBQWVILElBQWYsQ0FBRUcsUUFBRjtBQUFBLElBQ0VDLGVBREYsR0FDd0NGLFVBRHhDLENBQ0VFLGVBREY7QUFBQSxJQUNtQkMsZ0JBRG5CLEdBQ3dDSCxVQUR4QyxDQUNtQkcsZ0JBRG5COzs7QUFHTixJQUFNQywwQkFBMEIsa0JBQWhDO0FBQUEsSUFDTUMsNEJBQTRCLG9CQURsQztBQUFBLElBRU1DLGlDQUFpQyx5QkFGdkM7QUFBQSxJQUdNQyxxQ0FBcUMsNkJBSDNDO0FBQUEsSUFJTUMsMEJBQTBCLGtCQUpoQztBQUFBLElBS01DLDJCQUEyQixtQkFMakM7QUFBQSxJQU1NQyxrQkFBa0IsSUFBSVQsUUFBSixDQUFhRyx1QkFBYixDQU54QjtBQUFBLElBT01PLG9CQUFvQixJQUFJVixRQUFKLENBQWFJLHlCQUFiLENBUDFCO0FBQUEsSUFRTU8seUJBQXdCLElBQUlYLFFBQUosQ0FBYUssOEJBQWIsQ0FSOUI7QUFBQSxJQVNNTyw2QkFBNkIsSUFBSVosUUFBSixDQUFhTSxrQ0FBYixDQVRuQztBQUFBLElBVU1PLGtCQUFrQixJQUFJWixlQUFKLENBQW9CTSx1QkFBcEIsQ0FWeEI7QUFBQSxJQVdNTyx3QkFBd0IsS0FYOUI7QUFBQSxJQVlNQyx1QkFBdUIsSUFaN0I7O0FBY0EsSUFBSUMsUUFBUSxJQUFaO0FBQUEsSUFDSUMsU0FBUyxJ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LElBQXBDLEVBQTJDO0FBQ3pDLFlBQU1PLGFBQWFQLE9BQU91QyxjQUFQLENBQXNCRCxjQUF0QixDQUFuQjs7QUFFQXJDLGdCQUFRdUMsdUJBQVIsQ0FBZ0NqQyxVQUFoQztBQUNELE9BSkQsTUFJTztBQUNMTixnQkFBUXdCLHNCQUFSO0FBQ0Q7QUFDRjs7Ozs7O0FBR0hnQixPQUFPQyxPQUFQLEdBQWlCekMsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lMYXlvdXQ7XG5cbmNvbnN0IGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2xleGljYWxHcmFtbWFyJyxcbiAgICAgIGV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjZXh0ZW5kZWRCTkZHcmFtbWFyJyxcbiAgICAgIHNpemVhYmxlRWxlbWVudFNlbGVjdG9yID0gJyNzaXplYWJsZUVsZW1lbnQnLFxuICAgICAgdmVydGljYWxTcGxpdHRlclNlbGVjdG9yID0gJyN2ZXJ0aWNhbFNwbGl0dGVyJyxcbiAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShjb250ZW50VGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEgPW5ldyBUZXh0YXJlYShsZXhpY2FsR3JhbW1hclRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgZXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoZXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBzaXplYWJsZUVsZW1lbnQgPSBuZXcgU2l6ZWFibGVFbGVtZW50KHNpemVhYmxlRWxlbWVudFNlbGVjdG9yKSxcbiAgICAgIGJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGZhbHNlLFxuICAgICAgYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSB0cnVlO1xuXG5sZXQgbGV4ZXIgPSBudWxsLFxuICAgIHBhcnNlciA9IG51bGw7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgZ2V0TGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlKCkgeyByZXR1cm4gbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5nZXRWYWx1ZSgpOyB9XG5cbiAgc3RhdGljIGdldEV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhVmFsdWUoKSB7IHJldHVybiBleHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYS5nZXRWYWx1ZSgpOyB9XG5cbiAgc3RhdGljIHNldExleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSh2YWx1ZSkgeyBsZXhpY2FsR3JhbW1hclRleHRhcmVhLnNldFZhbHVlKHZhbHVlKTsgfVxuXG4gIHN0YXRpYyBzZXRFeHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKHZhbHVlKSB7IGV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhLnNldFZhbHVlKHZhbHVlKTsgfVxuXG4gIHN0YXRpYyBzZXRDb250ZW50VGV4dGFyZWFWYWx1ZSh2YWx1ZSkgeyBjb250ZW50VGV4dGFyZWEuc2V0VmFsdWUodmFsdWUpOyB9XG5cbiAgc3RhdGljIG9uTGV4aWNhbEdyYW1tYXJUZXh0YXJlYUtleVVwKGhhbmRsZXIpIHsgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5vbktleVVwKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIG9uRXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFLZXlVcChoYW5kbGVyKSB7IGV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhLm9uS2V5VXAoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgb25Db250ZW50VGV4dGFyZWFLZXlVcChoYW5kbGVyKSB7IGNvbnRlbnRUZXh0YXJlYS5vbktleVVwKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZVRleHRhcmVhKHByb2R1Y3Rpb24pIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRhcmVhVmFsdWUsIC8vL1xuICAgICAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gICAgICBub2RlID0gcGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMsIHByb2R1Y3Rpb24pO1xuICAgICAgXG4gICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkb2N1bWVudCBjYW5ub3QgYmUgcGFyc2VkIGZvciBzb21lIHJlYXNvbi4nKTsgIC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmdlbmVyYXRlUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuXG4gICAgICBjb250ZW50VGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGNsZWFyUGFyc2VUcmVlVGV4dGFyZWEoKSB7XG4gICAgY29uc3QgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlTGV4ZXIoTGV4ZXIpIHtcbiAgICBjb25zdCBsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUgPSBFeGFtcGxlLmdldExleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSgpO1xuXG4gICAgbGV0IGxleGljYWxHcmFtbWFyID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBsZXhpY2FsR3JhbW1hciA9IEpTT04ucGFyc2UobGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cblxuICAgIGNvbnN0IGxleGljYWxHcmFtbWFyVmFsaWQgPSAobGV4aWNhbEdyYW1tYXIgIT09IG51bGwpO1xuXG4gICAgaWYgKGxleGljYWxHcmFtbWFyVmFsaWQpIHtcbiAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUdyYW1tYXIobGV4aWNhbEdyYW1tYXIpO1xuXG4gICAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXhlciA9IG51bGw7XG5cbiAgICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlcihjYWxsYmFjaykge1xuICAgIGNvbnN0IGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlID0gRXhhbXBsZS5nZXRFeHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKCksXG4gICAgICAgICAgZ3JhbW1hciA9IGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlOyAvLy9cblxuICAgIHBhcnNlciA9IGNhbGxiYWNrKGdyYW1tYXIpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZShwcm9kdWN0aW9uTmFtZSkge1xuICAgIGlmICgobGV4ZXIgIT09IG51bGwpICYmIChwYXJzZXIgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBwcm9kdWN0aW9uID0gcGFyc2VyLmZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lKTtcblxuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWVUZXh0YXJlYShwcm9kdWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==