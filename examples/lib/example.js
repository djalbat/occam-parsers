'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyUI = require('easyui'),
    easyUILayout = require('easyui-layout'),
    occamLexers = require('occam-lexers'),
    BNFLexer = occamLexers.BNFLexer,
    Input = easyUI.Input,
    TextArea = easyUI.TextArea,
    SizeableElement = easyUILayout.SizeableElement,
    VerticalSplitter = easyUILayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    inputTextAreaSelector = 'textArea#input',
    grammarTextAreaSelector = 'textArea#grammar',
    parseTreeTextAreaSelector = 'textArea#parseTree',
    specialSymbolsRegExpInputSelector = 'input#specialSymbolsRegExp',
    inputTextArea = new TextArea(inputTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    parseTreeTextArea = new TextArea(parseTreeTextAreaSelector),
    specialSymbolsRegExpInput = new Input(specialSymbolsRegExpInputSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var Parser = require('../../es6/parser'),
    BNFParser = require('../../es6/bnfParser');

var parser;

var Example = function () {
    function Example() {
        _classCallCheck(this, Example);
    }

    _createClass(Example, null, [{
        key: 'updateParser',
        value: function updateParser(mappings) {
            var grammarTextAreaValue = grammarTextArea.getValue(),
                specialSymbolsRegExpInputValue = specialSymbolsRegExpInput.getValue(),
                grammar = grammarTextAreaValue,
                ///
            specialSymbolsRegExp = specialSymbolsRegExpInputValue,
                ///
            lines = BNFLexer.linesFromGrammar(grammar),
                productions = BNFParser.parse(lines, specialSymbolsRegExp, mappings);

            parser = new Parser(productions);
        }
    }, {
        key: 'updateParseTree',
        value: function updateParseTree() {
            var inputTextAreaValue = inputTextArea.getValue(),
                input = inputTextAreaValue,
                ///
            documentNode = parser.parse(input),
                parseTree = documentNode.getParseTree(),
                parseTreeStr = parseTree.toString(),
                parseTreeTextAreaHTML = parseTreeStr; ///

            parseTreeTextArea.html(parseTreeTextAreaHTML);
        }
    }]);

    return Example;
}();

Example.inputTextArea = inputTextArea;
Example.grammarTextArea = grammarTextArea;
Example.specialSymbolsRegExpInput = specialSymbolsRegExpInput;

module.exports = Example;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3lVSSIsInJlcXVpcmUiLCJlYXN5VUlMYXlvdXQiLCJvY2NhbUxleGVycyIsIkJORkxleGVyIiwiSW5wdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJpbnB1dFRleHRBcmVhU2VsZWN0b3IiLCJncmFtbWFyVGV4dEFyZWFTZWxlY3RvciIsInBhcnNlVHJlZVRleHRBcmVhU2VsZWN0b3IiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cElucHV0U2VsZWN0b3IiLCJpbnB1dFRleHRBcmVhIiwiZ3JhbW1hclRleHRBcmVhIiwicGFyc2VUcmVlVGV4dEFyZWEiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cElucHV0IiwibGVmdENvbHVtbiIsIlRPX1RIRV9SSUdIVF9PRiIsInNpdHVhdGVkIiwiUGFyc2VyIiwiQk5GUGFyc2VyIiwicGFyc2VyIiwiRXhhbXBsZSIsIm1hcHBpbmdzIiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJnZXRWYWx1ZSIsInNwZWNpYWxTeW1ib2xzUmVnRXhwSW5wdXRWYWx1ZSIsImdyYW1tYXIiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cCIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJpbnB1dFRleHRBcmVhVmFsdWUiLCJpbnB1dCIsImRvY3VtZW50Tm9kZSIsInBhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsInBhcnNlVHJlZVN0ciIsInRvU3RyaW5nIiwicGFyc2VUcmVlVGV4dEFyZWFIVE1MIiwiaHRtbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLGVBQWVELFFBQVEsZUFBUixDQURuQjtBQUFBLElBRUlFLGNBQWNGLFFBQVEsY0FBUixDQUZsQjtBQUFBLElBR0lHLFdBQVdELFlBQVlDLFFBSDNCO0FBQUEsSUFJSUMsUUFBUUwsT0FBT0ssS0FKbkI7QUFBQSxJQUtJQyxXQUFXTixPQUFPTSxRQUx0QjtBQUFBLElBTUlDLGtCQUFrQkwsYUFBYUssZUFObkM7QUFBQSxJQU9JQyxtQkFBbUJOLGFBQWFNLGdCQVBwQzs7QUFTQSxJQUFJQyxxQkFBcUIsYUFBekI7QUFBQSxJQUNJQyx3QkFBd0IsZ0JBRDVCO0FBQUEsSUFFSUMsMEJBQTBCLGtCQUY5QjtBQUFBLElBR0lDLDRCQUE0QixvQkFIaEM7QUFBQSxJQUlJQyxvQ0FBb0MsNEJBSnhDO0FBQUEsSUFLSUMsZ0JBQWdCLElBQUlSLFFBQUosQ0FBYUkscUJBQWIsQ0FMcEI7QUFBQSxJQU1JSyxrQkFBa0IsSUFBSVQsUUFBSixDQUFhSyx1QkFBYixDQU50QjtBQUFBLElBT0lLLG9CQUFvQixJQUFJVixRQUFKLENBQWFNLHlCQUFiLENBUHhCO0FBQUEsSUFRSUssNEJBQTRCLElBQUlaLEtBQUosQ0FBVVEsaUNBQVYsQ0FSaEM7QUFBQSxJQVNJSyxhQUFhLElBQUlYLGVBQUosQ0FBb0JFLGtCQUFwQixDQVRqQjtBQUFBLElBVUlVLGtCQUFrQlgsaUJBQWlCWSxRQUFqQixDQUEwQkQsZUFWaEQ7O0FBWUEsSUFBSVgsZ0JBQUosQ0FBcUIseUJBQXJCLEVBQWdEVyxlQUFoRCxFQUFpRUQsVUFBakU7O0FBRUEsSUFBSUcsU0FBU3BCLFFBQVMsa0JBQVQsQ0FBYjtBQUFBLElBQ0lxQixZQUFZckIsUUFBUyxxQkFBVCxDQURoQjs7QUFHQSxJQUFJc0IsTUFBSjs7SUFFTUMsTzs7Ozs7OztxQ0FDZ0JDLFEsRUFBVTtBQUM1QixnQkFBSUMsdUJBQXVCWCxnQkFBZ0JZLFFBQWhCLEVBQTNCO0FBQUEsZ0JBQ0lDLGlDQUFpQ1gsMEJBQTBCVSxRQUExQixFQURyQztBQUFBLGdCQUVJRSxVQUFVSCxvQkFGZDtBQUFBLGdCQUVvQztBQUNoQ0ksbUNBQXVCRiw4QkFIM0I7QUFBQSxnQkFHMkQ7QUFDdkRHLG9CQUFRM0IsU0FBUzRCLGdCQUFULENBQTBCSCxPQUExQixDQUpaO0FBQUEsZ0JBS0lJLGNBQWNYLFVBQVVZLEtBQVYsQ0FBZ0JILEtBQWhCLEVBQXVCRCxvQkFBdkIsRUFBNkNMLFFBQTdDLENBTGxCOztBQU9BRixxQkFBUyxJQUFJRixNQUFKLENBQVdZLFdBQVgsQ0FBVDtBQUNEOzs7MENBRXdCO0FBQ3ZCLGdCQUFJRSxxQkFBcUJyQixjQUFjYSxRQUFkLEVBQXpCO0FBQUEsZ0JBQ0lTLFFBQVFELGtCQURaO0FBQUEsZ0JBQ2lDO0FBQzdCRSwyQkFBZWQsT0FBT1csS0FBUCxDQUFhRSxLQUFiLENBRm5CO0FBQUEsZ0JBR0lFLFlBQVlELGFBQWFFLFlBQWIsRUFIaEI7QUFBQSxnQkFJSUMsZUFBZUYsVUFBVUcsUUFBVixFQUpuQjtBQUFBLGdCQUtJQyx3QkFBd0JGLFlBTDVCLENBRHVCLENBTW9COztBQUUzQ3hCLDhCQUFrQjJCLElBQWxCLENBQXVCRCxxQkFBdkI7QUFDRDs7Ozs7O0FBR0hsQixRQUFRVixhQUFSLEdBQXdCQSxhQUF4QjtBQUNBVSxRQUFRVCxlQUFSLEdBQTBCQSxlQUExQjtBQUNBUyxRQUFRUCx5QkFBUixHQUFvQ0EseUJBQXBDOztBQUVBMkIsT0FBT0MsT0FBUCxHQUFpQnJCLE9BQWpCIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5VUkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBlYXN5VUlMYXlvdXQgPSByZXF1aXJlKCdlYXN5dWktbGF5b3V0JyksXG4gICAgb2NjYW1MZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBCTkZMZXhlciA9IG9jY2FtTGV4ZXJzLkJORkxleGVyLFxuICAgIElucHV0ID0gZWFzeVVJLklucHV0LFxuICAgIFRleHRBcmVhID0gZWFzeVVJLlRleHRBcmVhLFxuICAgIFNpemVhYmxlRWxlbWVudCA9IGVhc3lVSUxheW91dC5TaXplYWJsZUVsZW1lbnQsXG4gICAgVmVydGljYWxTcGxpdHRlciA9IGVhc3lVSUxheW91dC5WZXJ0aWNhbFNwbGl0dGVyO1xuXG52YXIgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICBpbnB1dFRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjaW5wdXQnLFxuICAgIGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2dyYW1tYXInLFxuICAgIHBhcnNlVHJlZVRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjcGFyc2VUcmVlJyxcbiAgICBzcGVjaWFsU3ltYm9sc1JlZ0V4cElucHV0U2VsZWN0b3IgPSAnaW5wdXQjc3BlY2lhbFN5bWJvbHNSZWdFeHAnLFxuICAgIGlucHV0VGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoaW5wdXRUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBncmFtbWFyVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoZ3JhbW1hclRleHRBcmVhU2VsZWN0b3IpLFxuICAgIHBhcnNlVHJlZVRleHRBcmVhID0gbmV3IFRleHRBcmVhKHBhcnNlVHJlZVRleHRBcmVhU2VsZWN0b3IpLFxuICAgIHNwZWNpYWxTeW1ib2xzUmVnRXhwSW5wdXQgPSBuZXcgSW5wdXQoc3BlY2lhbFN5bWJvbHNSZWdFeHBJbnB1dFNlbGVjdG9yKSxcbiAgICBsZWZ0Q29sdW1uID0gbmV3IFNpemVhYmxlRWxlbWVudChsZWZ0Q29sdW1uU2VsZWN0b3IpLFxuICAgIFRPX1RIRV9SSUdIVF9PRiA9IFZlcnRpY2FsU3BsaXR0ZXIuc2l0dWF0ZWQuVE9fVEhFX1JJR0hUX09GO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcignLmxlZnQudmVydGljYWwuc3BsaXR0ZXInLCBUT19USEVfUklHSFRfT0YsIGxlZnRDb2x1bW4pO1xuXG52YXIgUGFyc2VyID0gcmVxdWlyZSAoJy4uLy4uL2VzNi9wYXJzZXInKSxcbiAgICBCTkZQYXJzZXIgPSByZXF1aXJlICgnLi4vLi4vZXM2L2JuZlBhcnNlcicpO1xuXG52YXIgcGFyc2VyO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIHVwZGF0ZVBhcnNlcihtYXBwaW5ncykge1xuICAgIHZhciBncmFtbWFyVGV4dEFyZWFWYWx1ZSA9IGdyYW1tYXJUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICBzcGVjaWFsU3ltYm9sc1JlZ0V4cElucHV0VmFsdWUgPSBzcGVjaWFsU3ltYm9sc1JlZ0V4cElucHV0LmdldFZhbHVlKCksXG4gICAgICAgIGdyYW1tYXIgPSBncmFtbWFyVGV4dEFyZWFWYWx1ZSwgLy8vXG4gICAgICAgIHNwZWNpYWxTeW1ib2xzUmVnRXhwID0gc3BlY2lhbFN5bWJvbHNSZWdFeHBJbnB1dFZhbHVlLCAvLy9cbiAgICAgICAgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgc3BlY2lhbFN5bWJvbHNSZWdFeHAsIG1hcHBpbmdzKTtcblxuICAgIHBhcnNlciA9IG5ldyBQYXJzZXIocHJvZHVjdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZSgpIHtcbiAgICB2YXIgaW5wdXRUZXh0QXJlYVZhbHVlID0gaW5wdXRUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICBpbnB1dCA9IGlucHV0VGV4dEFyZWFWYWx1ZSwgIC8vL1xuICAgICAgICBkb2N1bWVudE5vZGUgPSBwYXJzZXIucGFyc2UoaW5wdXQpLFxuICAgICAgICBwYXJzZVRyZWUgPSBkb2N1bWVudE5vZGUuZ2V0UGFyc2VUcmVlKCksXG4gICAgICAgIHBhcnNlVHJlZVN0ciA9IHBhcnNlVHJlZS50b1N0cmluZygpLFxuICAgICAgICBwYXJzZVRyZWVUZXh0QXJlYUhUTUwgPSBwYXJzZVRyZWVTdHI7ICAvLy9cblxuICAgIHBhcnNlVHJlZVRleHRBcmVhLmh0bWwocGFyc2VUcmVlVGV4dEFyZWFIVE1MKTtcbiAgfVxufVxuXG5FeGFtcGxlLmlucHV0VGV4dEFyZWEgPSBpbnB1dFRleHRBcmVhO1xuRXhhbXBsZS5ncmFtbWFyVGV4dEFyZWEgPSBncmFtbWFyVGV4dEFyZWE7XG5FeGFtcGxlLnNwZWNpYWxTeW1ib2xzUmVnRXhwSW5wdXQgPSBzcGVjaWFsU3ltYm9sc1JlZ0V4cElucHV0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iXX0=