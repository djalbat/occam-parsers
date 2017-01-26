'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    easyuilayout = require('easyui-layout'),
    TextArea = easyui.TextArea,
    SizeableElement = easyuilayout.SizeableElement,
    VerticalSplitter = easyuilayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    grammarTextAreaSelector = 'textarea#grammar',
    contentTextAreaSelector = 'textarea#content',
    parseTreeTextAreaSelector = 'textarea#parseTree',
    leftColumn = new SizeableElement(leftColumnSelector),
    contentTextArea = new TextArea(contentTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    parseTreeTextArea = new TextArea(parseTreeTextAreaSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var Example = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, null, [{
    key: 'getGrammarTextAreaValue',
    value: function getGrammarTextAreaValue() {
      return grammarTextArea.getValue();
    }
  }, {
    key: 'setGrammarTextAreaValue',
    value: function setGrammarTextAreaValue(value) {
      grammarTextArea.setValue(value);
    }
  }, {
    key: 'onContentTextAreaKeyUp',
    value: function onContentTextAreaKeyUp(handler) {
      contentTextArea.on('keyup', function () {
        var content = contentTextArea.getValue(); ///

        handler(content);
      });
    }
  }, {
    key: 'onGrammarTextAreaChange',
    value: function onGrammarTextAreaChange(handler) {
      grammarTextArea.onChange(handler);
    }
  }, {
    key: 'updateParseTree',
    value: function updateParseTree(lexer, parser) {
      var contentTextAreaValue = contentTextArea.getValue(),
          content = contentTextAreaValue,
          ///
      tokens = lexer.tokensFromContent(content),
          documentNode = parser.parse(tokens);

      if (documentNode !== null) {
        var parseTree = documentNode.getParseTree();

        parseTree.shiftLine(); //

        var parseTreeString = parseTree.toString(),
            parseTreeTextAreaHTML = parseTreeString; ///

        parseTreeTextArea.html(parseTreeTextAreaHTML);
      } else {
        Example.clearParseTree();
      }
    }
  }, {
    key: 'clearParseTree',
    value: function clearParseTree() {
      var parseTreeTextAreaHTML = '';

      parseTreeTextArea.html(parseTreeTextAreaHTML);
    }
  }]);

  return Example;
}();

module.exports = Example;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJncmFtbWFyVGV4dEFyZWFTZWxlY3RvciIsImNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciIsImxlZnRDb2x1bW4iLCJjb250ZW50VGV4dEFyZWEiLCJncmFtbWFyVGV4dEFyZWEiLCJwYXJzZVRyZWVUZXh0QXJlYSIsIlRPX1RIRV9SSUdIVF9PRiIsInNpdHVhdGVkIiwiRXhhbXBsZSIsImdldFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJvbiIsImNvbnRlbnQiLCJvbkNoYW5nZSIsImxleGVyIiwicGFyc2VyIiwiY29udGVudFRleHRBcmVhVmFsdWUiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsImRvY3VtZW50Tm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwidG9TdHJpbmciLCJwYXJzZVRyZWVUZXh0QXJlYUhUTUwiLCJodG1sIiwiY2xlYXJQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxlQUFlRCxRQUFRLGVBQVIsQ0FEbkI7QUFBQSxJQUVJRSxXQUFXSCxPQUFPRyxRQUZ0QjtBQUFBLElBR0lDLGtCQUFrQkYsYUFBYUUsZUFIbkM7QUFBQSxJQUlJQyxtQkFBbUJILGFBQWFHLGdCQUpwQzs7QUFNQSxJQUFJQyxxQkFBcUIsYUFBekI7QUFBQSxJQUNJQywwQkFBMEIsa0JBRDlCO0FBQUEsSUFFSUMsMEJBQTBCLGtCQUY5QjtBQUFBLElBR0lDLDRCQUE0QixvQkFIaEM7QUFBQSxJQUlJQyxhQUFhLElBQUlOLGVBQUosQ0FBb0JFLGtCQUFwQixDQUpqQjtBQUFBLElBS0lLLGtCQUFrQixJQUFJUixRQUFKLENBQWFLLHVCQUFiLENBTHRCO0FBQUEsSUFNSUksa0JBQWtCLElBQUlULFFBQUosQ0FBYUksdUJBQWIsQ0FOdEI7QUFBQSxJQU9JTSxvQkFBb0IsSUFBSVYsUUFBSixDQUFhTSx5QkFBYixDQVB4QjtBQUFBLElBUUlLLGtCQUFrQlQsaUJBQWlCVSxRQUFqQixDQUEwQkQsZUFSaEQ7O0FBVUEsSUFBSVQsZ0JBQUosQ0FBcUIseUJBQXJCLEVBQWdEUyxlQUFoRCxFQUFpRUosVUFBakU7O0lBRU1NLE87Ozs7Ozs7OENBQzZCO0FBQUUsYUFBT0osZ0JBQWdCSyxRQUFoQixFQUFQO0FBQW9DOzs7NENBRXhDQyxLLEVBQU87QUFBRU4sc0JBQWdCTyxRQUFoQixDQUF5QkQsS0FBekI7QUFBa0M7OzsyQ0FFNUNFLE8sRUFBUztBQUFFVCxzQkFBZ0JVLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFlBQVc7QUFDOUUsWUFBSUMsVUFBVVgsZ0JBQWdCTSxRQUFoQixFQUFkLENBRDhFLENBQ3BDOztBQUUxQ0csZ0JBQVFFLE9BQVI7QUFDRCxPQUp3QztBQUlwQzs7OzRDQUUwQkYsTyxFQUFTO0FBQUVSLHNCQUFnQlcsUUFBaEIsQ0FBeUJILE9BQXpCO0FBQW9DOzs7b0NBRXZESSxLLEVBQU9DLE0sRUFBUTtBQUNwQyxVQUFJQyx1QkFBdUJmLGdCQUFnQk0sUUFBaEIsRUFBM0I7QUFBQSxVQUNJSyxVQUFVSSxvQkFEZDtBQUFBLFVBQ3FDO0FBQ2pDQyxlQUFTSCxNQUFNSSxpQkFBTixDQUF3Qk4sT0FBeEIsQ0FGYjtBQUFBLFVBR0lPLGVBQWVKLE9BQU9LLEtBQVAsQ0FBYUgsTUFBYixDQUhuQjs7QUFLQSxVQUFJRSxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekIsWUFBSUUsWUFBWUYsYUFBYUcsWUFBYixFQUFoQjs7QUFFQUQsa0JBQVVFLFNBQVYsR0FIeUIsQ0FHRDs7QUFFeEIsWUFBSUMsa0JBQWtCSCxVQUFVSSxRQUFWLEVBQXRCO0FBQUEsWUFDSUMsd0JBQXdCRixlQUQ1QixDQUx5QixDQU1xQjs7QUFFOUNyQiwwQkFBa0J3QixJQUFsQixDQUF1QkQscUJBQXZCO0FBQ0QsT0FURCxNQVNPO0FBQ0xwQixnQkFBUXNCLGNBQVI7QUFDRDtBQUNGOzs7cUNBRXVCO0FBQ3RCLFVBQUlGLHdCQUF3QixFQUE1Qjs7QUFFQXZCLHdCQUFrQndCLElBQWxCLENBQXVCRCxxQkFBdkI7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJ4QixPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgZWFzeXVpbGF5b3V0ID0gcmVxdWlyZSgnZWFzeXVpLWxheW91dCcpLFxuICAgIFRleHRBcmVhID0gZWFzeXVpLlRleHRBcmVhLFxuICAgIFNpemVhYmxlRWxlbWVudCA9IGVhc3l1aWxheW91dC5TaXplYWJsZUVsZW1lbnQsXG4gICAgVmVydGljYWxTcGxpdHRlciA9IGVhc3l1aWxheW91dC5WZXJ0aWNhbFNwbGl0dGVyO1xuXG52YXIgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICBncmFtbWFyVGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNncmFtbWFyJyxcbiAgICBjb250ZW50VGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNjb250ZW50JyxcbiAgICBwYXJzZVRyZWVUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3BhcnNlVHJlZScsXG4gICAgbGVmdENvbHVtbiA9IG5ldyBTaXplYWJsZUVsZW1lbnQobGVmdENvbHVtblNlbGVjdG9yKSxcbiAgICBjb250ZW50VGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoY29udGVudFRleHRBcmVhU2VsZWN0b3IpLFxuICAgIGdyYW1tYXJUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShncmFtbWFyVGV4dEFyZWFTZWxlY3RvciksXG4gICAgcGFyc2VUcmVlVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEocGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciksXG4gICAgVE9fVEhFX1JJR0hUX09GID0gVmVydGljYWxTcGxpdHRlci5zaXR1YXRlZC5UT19USEVfUklHSFRfT0Y7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKCcubGVmdC52ZXJ0aWNhbC5zcGxpdHRlcicsIFRPX1RIRV9SSUdIVF9PRiwgbGVmdENvbHVtbik7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgZ2V0R3JhbW1hclRleHRBcmVhVmFsdWUoKSB7IHJldHVybiBncmFtbWFyVGV4dEFyZWEuZ2V0VmFsdWUoKTsgfVxuXG4gIHN0YXRpYyBzZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSh2YWx1ZSkgeyBncmFtbWFyVGV4dEFyZWEuc2V0VmFsdWUodmFsdWUpOyB9XG5cbiAgc3RhdGljIG9uQ29udGVudFRleHRBcmVhS2V5VXAoaGFuZGxlcikgeyBjb250ZW50VGV4dEFyZWEub24oJ2tleXVwJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBjb250ZW50VGV4dEFyZWEuZ2V0VmFsdWUoKTsgLy8vXG5cbiAgICBoYW5kbGVyKGNvbnRlbnQpO1xuICB9KTsgfVxuXG4gIHN0YXRpYyBvbkdyYW1tYXJUZXh0QXJlYUNoYW5nZShoYW5kbGVyKSB7IGdyYW1tYXJUZXh0QXJlYS5vbkNoYW5nZShoYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWUobGV4ZXIsIHBhcnNlcikge1xuICAgIHZhciBjb250ZW50VGV4dEFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRBcmVhVmFsdWUsICAvLy9cbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgIGRvY3VtZW50Tm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKGRvY3VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgdmFyIHBhcnNlVHJlZSA9IGRvY3VtZW50Tm9kZS5nZXRQYXJzZVRyZWUoKTtcblxuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgdmFyIHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS50b1N0cmluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZVRleHRBcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICBwYXJzZVRyZWVUZXh0QXJlYS5odG1sKHBhcnNlVHJlZVRleHRBcmVhSFRNTCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2xlYXJQYXJzZVRyZWUoKSB7XG4gICAgdmFyIHBhcnNlVHJlZVRleHRBcmVhSFRNTCA9ICcnO1xuXG4gICAgcGFyc2VUcmVlVGV4dEFyZWEuaHRtbChwYXJzZVRyZWVUZXh0QXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==