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
    key: 'onContentTextAreaChange',
    value: function onContentTextAreaChange(handler) {
      contentTextArea.onChange(handler);
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

        var nodes = documentNode.query('document/body/rule[1]/conclusion/statement/*');

        debugger;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJlYXN5dWlsYXlvdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJncmFtbWFyVGV4dEFyZWFTZWxlY3RvciIsImNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciIsImxlZnRDb2x1bW4iLCJjb250ZW50VGV4dEFyZWEiLCJncmFtbWFyVGV4dEFyZWEiLCJwYXJzZVRyZWVUZXh0QXJlYSIsIlRPX1RIRV9SSUdIVF9PRiIsInNpdHVhdGVkIiwiRXhhbXBsZSIsImdldFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZXIiLCJvbkNoYW5nZSIsImxleGVyIiwicGFyc2VyIiwiY29udGVudFRleHRBcmVhVmFsdWUiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5zRnJvbUNvbnRlbnQiLCJkb2N1bWVudE5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsInRvU3RyaW5nIiwicGFyc2VUcmVlVGV4dEFyZWFIVE1MIiwiaHRtbCIsIm5vZGVzIiwicXVlcnkiLCJjbGVhclBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLGVBQWVELFFBQVEsZUFBUixDQURuQjtBQUFBLElBRUlFLFdBQVdILE9BQU9HLFFBRnRCO0FBQUEsSUFHSUMsa0JBQWtCRixhQUFhRSxlQUhuQztBQUFBLElBSUlDLG1CQUFtQkgsYUFBYUcsZ0JBSnBDOztBQU1BLElBQUlDLHFCQUFxQixhQUF6QjtBQUFBLElBQ0lDLDBCQUEwQixrQkFEOUI7QUFBQSxJQUVJQywwQkFBMEIsa0JBRjlCO0FBQUEsSUFHSUMsNEJBQTRCLG9CQUhoQztBQUFBLElBSUlDLGFBQWEsSUFBSU4sZUFBSixDQUFvQkUsa0JBQXBCLENBSmpCO0FBQUEsSUFLSUssa0JBQWtCLElBQUlSLFFBQUosQ0FBYUssdUJBQWIsQ0FMdEI7QUFBQSxJQU1JSSxrQkFBa0IsSUFBSVQsUUFBSixDQUFhSSx1QkFBYixDQU50QjtBQUFBLElBT0lNLG9CQUFvQixJQUFJVixRQUFKLENBQWFNLHlCQUFiLENBUHhCO0FBQUEsSUFRSUssa0JBQWtCVCxpQkFBaUJVLFFBQWpCLENBQTBCRCxlQVJoRDs7QUFVQSxJQUFJVCxnQkFBSixDQUFxQix5QkFBckIsRUFBZ0RTLGVBQWhELEVBQWlFSixVQUFqRTs7SUFFTU0sTzs7Ozs7Ozs4Q0FDNkI7QUFBRSxhQUFPSixnQkFBZ0JLLFFBQWhCLEVBQVA7QUFBb0M7Ozs0Q0FFeENDLEssRUFBTztBQUFFTixzQkFBZ0JPLFFBQWhCLENBQXlCRCxLQUF6QjtBQUFrQzs7OzRDQUUzQ0UsTyxFQUFTO0FBQUVULHNCQUFnQlUsUUFBaEIsQ0FBeUJELE9BQXpCO0FBQW9DOzs7NENBRS9DQSxPLEVBQVM7QUFBRVIsc0JBQWdCUyxRQUFoQixDQUF5QkQsT0FBekI7QUFBb0M7OztvQ0FFdkRFLEssRUFBT0MsTSxFQUFRO0FBQ3BDLFVBQUlDLHVCQUF1QmIsZ0JBQWdCTSxRQUFoQixFQUEzQjtBQUFBLFVBQ0lRLFVBQVVELG9CQURkO0FBQUEsVUFDcUM7QUFDakNFLGVBQVNKLE1BQU1LLGlCQUFOLENBQXdCRixPQUF4QixDQUZiO0FBQUEsVUFHSUcsZUFBZUwsT0FBT00sS0FBUCxDQUFhSCxNQUFiLENBSG5COztBQUtBLFVBQUlFLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6QixZQUFJRSxZQUFZRixhQUFhRyxZQUFiLEVBQWhCOztBQUVBRCxrQkFBVUUsU0FBVixHQUh5QixDQUdEOztBQUV4QixZQUFJQyxrQkFBa0JILFVBQVVJLFFBQVYsRUFBdEI7QUFBQSxZQUNJQyx3QkFBd0JGLGVBRDVCLENBTHlCLENBTXFCOztBQUU5Q3BCLDBCQUFrQnVCLElBQWxCLENBQXVCRCxxQkFBdkI7O0FBRUEsWUFBSUUsUUFBUVQsYUFBYVUsS0FBYixDQUFtQiw4Q0FBbkIsQ0FBWjs7QUFFQTtBQUNELE9BYkQsTUFhTztBQUNMdEIsZ0JBQVF1QixjQUFSO0FBQ0Q7QUFDRjs7O3FDQUV1QjtBQUN0QixVQUFJSix3QkFBd0IsRUFBNUI7O0FBRUF0Qix3QkFBa0J1QixJQUFsQixDQUF1QkQscUJBQXZCO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCekIsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIGVhc3l1aWxheW91dCA9IHJlcXVpcmUoJ2Vhc3l1aS1sYXlvdXQnKSxcbiAgICBUZXh0QXJlYSA9IGVhc3l1aS5UZXh0QXJlYSxcbiAgICBTaXplYWJsZUVsZW1lbnQgPSBlYXN5dWlsYXlvdXQuU2l6ZWFibGVFbGVtZW50LFxuICAgIFZlcnRpY2FsU3BsaXR0ZXIgPSBlYXN5dWlsYXlvdXQuVmVydGljYWxTcGxpdHRlcjtcblxudmFyIGxlZnRDb2x1bW5TZWxlY3RvciA9ICcjbGVmdENvbHVtbicsXG4gICAgZ3JhbW1hclRleHRBcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjZ3JhbW1hcicsXG4gICAgY29udGVudFRleHRBcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjY29udGVudCcsXG4gICAgcGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgIGxlZnRDb2x1bW4gPSBuZXcgU2l6ZWFibGVFbGVtZW50KGxlZnRDb2x1bW5TZWxlY3RvciksXG4gICAgY29udGVudFRleHRBcmVhID0gbmV3IFRleHRBcmVhKGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBncmFtbWFyVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoZ3JhbW1hclRleHRBcmVhU2VsZWN0b3IpLFxuICAgIHBhcnNlVHJlZVRleHRBcmVhID0gbmV3IFRleHRBcmVhKHBhcnNlVHJlZVRleHRBcmVhU2VsZWN0b3IpLFxuICAgIFRPX1RIRV9SSUdIVF9PRiA9IFZlcnRpY2FsU3BsaXR0ZXIuc2l0dWF0ZWQuVE9fVEhFX1JJR0hUX09GO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcignLmxlZnQudmVydGljYWwuc3BsaXR0ZXInLCBUT19USEVfUklHSFRfT0YsIGxlZnRDb2x1bW4pO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIGdldEdyYW1tYXJUZXh0QXJlYVZhbHVlKCkgeyByZXR1cm4gZ3JhbW1hclRleHRBcmVhLmdldFZhbHVlKCk7IH1cblxuICBzdGF0aWMgc2V0R3JhbW1hclRleHRBcmVhVmFsdWUodmFsdWUpIHsgZ3JhbW1hclRleHRBcmVhLnNldFZhbHVlKHZhbHVlKTsgfVxuXG4gIHN0YXRpYyBvbkNvbnRlbnRUZXh0QXJlYUNoYW5nZShoYW5kbGVyKSB7IGNvbnRlbnRUZXh0QXJlYS5vbkNoYW5nZShoYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBvbkdyYW1tYXJUZXh0QXJlYUNoYW5nZShoYW5kbGVyKSB7IGdyYW1tYXJUZXh0QXJlYS5vbkNoYW5nZShoYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWUobGV4ZXIsIHBhcnNlcikge1xuICAgIHZhciBjb250ZW50VGV4dEFyZWFWYWx1ZSA9IGNvbnRlbnRUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRBcmVhVmFsdWUsICAvLy9cbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgIGRvY3VtZW50Tm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKGRvY3VtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgdmFyIHBhcnNlVHJlZSA9IGRvY3VtZW50Tm9kZS5nZXRQYXJzZVRyZWUoKTtcblxuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgdmFyIHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS50b1N0cmluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZVRleHRBcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICBwYXJzZVRyZWVUZXh0QXJlYS5odG1sKHBhcnNlVHJlZVRleHRBcmVhSFRNTCk7XG5cbiAgICAgIHZhciBub2RlcyA9IGRvY3VtZW50Tm9kZS5xdWVyeSgnZG9jdW1lbnQvYm9keS9ydWxlWzFdL2NvbmNsdXNpb24vc3RhdGVtZW50LyonKTtcblxuICAgICAgZGVidWdnZXJcbiAgICB9IGVsc2Uge1xuICAgICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGVhclBhcnNlVHJlZSgpIHtcbiAgICB2YXIgcGFyc2VUcmVlVGV4dEFyZWFIVE1MID0gJyc7XG5cbiAgICBwYXJzZVRyZWVUZXh0QXJlYS5odG1sKHBhcnNlVHJlZVRleHRBcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuIl19