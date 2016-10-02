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
    contentTextAreaSelector = 'textArea#content',
    grammarTextAreaSelector = 'textArea#grammar',
    parseTreeTextAreaSelector = 'textArea#parseTree',
    specialSymbolsRegExpInputSelector = 'input#specialSymbolsRegExp',
    contentTextArea = new TextArea(contentTextAreaSelector),
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
        value: function updateParseTree(Lexer) {
            var contentTextAreaValue = contentTextArea.getValue(),
                content = contentTextAreaValue,
                ///
            tokens = Lexer.tokensFromContent(content),
                documentNode = parser.parse(tokens),
                parseTree = documentNode.getParseTree(),
                parseTreeStr = parseTree.toString(),
                parseTreeTextAreaHTML = parseTreeStr; ///

            parseTreeTextArea.html(parseTreeTextAreaHTML);
        }
    }]);

    return Example;
}();

Example.contentTextArea = contentTextArea;
Example.grammarTextArea = grammarTextArea;
Example.specialSymbolsRegExpInput = specialSymbolsRegExpInput;

module.exports = Example;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3lVSSIsInJlcXVpcmUiLCJlYXN5VUlMYXlvdXQiLCJvY2NhbUxleGVycyIsIkJORkxleGVyIiwiSW5wdXQiLCJUZXh0QXJlYSIsIlNpemVhYmxlRWxlbWVudCIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJsZWZ0Q29sdW1uU2VsZWN0b3IiLCJjb250ZW50VGV4dEFyZWFTZWxlY3RvciIsImdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yIiwicGFyc2VUcmVlVGV4dEFyZWFTZWxlY3RvciIsInNwZWNpYWxTeW1ib2xzUmVnRXhwSW5wdXRTZWxlY3RvciIsImNvbnRlbnRUZXh0QXJlYSIsImdyYW1tYXJUZXh0QXJlYSIsInBhcnNlVHJlZVRleHRBcmVhIiwic3BlY2lhbFN5bWJvbHNSZWdFeHBJbnB1dCIsImxlZnRDb2x1bW4iLCJUT19USEVfUklHSFRfT0YiLCJzaXR1YXRlZCIsIlBhcnNlciIsIkJORlBhcnNlciIsInBhcnNlciIsIkV4YW1wbGUiLCJtYXBwaW5ncyIsImdyYW1tYXJUZXh0QXJlYVZhbHVlIiwiZ2V0VmFsdWUiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cElucHV0VmFsdWUiLCJncmFtbWFyIiwic3BlY2lhbFN5bWJvbHNSZWdFeHAiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJwcm9kdWN0aW9ucyIsInBhcnNlIiwiTGV4ZXIiLCJjb250ZW50VGV4dEFyZWFWYWx1ZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsImRvY3VtZW50Tm9kZSIsInBhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsInBhcnNlVHJlZVN0ciIsInRvU3RyaW5nIiwicGFyc2VUcmVlVGV4dEFyZWFIVE1MIiwiaHRtbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLGVBQWVELFFBQVEsZUFBUixDQURuQjtBQUFBLElBRUlFLGNBQWNGLFFBQVEsY0FBUixDQUZsQjtBQUFBLElBR0lHLFdBQVdELFlBQVlDLFFBSDNCO0FBQUEsSUFJSUMsUUFBUUwsT0FBT0ssS0FKbkI7QUFBQSxJQUtJQyxXQUFXTixPQUFPTSxRQUx0QjtBQUFBLElBTUlDLGtCQUFrQkwsYUFBYUssZUFObkM7QUFBQSxJQU9JQyxtQkFBbUJOLGFBQWFNLGdCQVBwQzs7QUFTQSxJQUFJQyxxQkFBcUIsYUFBekI7QUFBQSxJQUNJQywwQkFBMEIsa0JBRDlCO0FBQUEsSUFFSUMsMEJBQTBCLGtCQUY5QjtBQUFBLElBR0lDLDRCQUE0QixvQkFIaEM7QUFBQSxJQUlJQyxvQ0FBb0MsNEJBSnhDO0FBQUEsSUFLSUMsa0JBQWtCLElBQUlSLFFBQUosQ0FBYUksdUJBQWIsQ0FMdEI7QUFBQSxJQU1JSyxrQkFBa0IsSUFBSVQsUUFBSixDQUFhSyx1QkFBYixDQU50QjtBQUFBLElBT0lLLG9CQUFvQixJQUFJVixRQUFKLENBQWFNLHlCQUFiLENBUHhCO0FBQUEsSUFRSUssNEJBQTRCLElBQUlaLEtBQUosQ0FBVVEsaUNBQVYsQ0FSaEM7QUFBQSxJQVNJSyxhQUFhLElBQUlYLGVBQUosQ0FBb0JFLGtCQUFwQixDQVRqQjtBQUFBLElBVUlVLGtCQUFrQlgsaUJBQWlCWSxRQUFqQixDQUEwQkQsZUFWaEQ7O0FBWUEsSUFBSVgsZ0JBQUosQ0FBcUIseUJBQXJCLEVBQWdEVyxlQUFoRCxFQUFpRUQsVUFBakU7O0FBRUEsSUFBSUcsU0FBU3BCLFFBQVMsa0JBQVQsQ0FBYjtBQUFBLElBQ0lxQixZQUFZckIsUUFBUyxxQkFBVCxDQURoQjs7QUFHQSxJQUFJc0IsTUFBSjs7SUFFTUMsTzs7Ozs7OztxQ0FDZ0JDLFEsRUFBVTtBQUM1QixnQkFBSUMsdUJBQXVCWCxnQkFBZ0JZLFFBQWhCLEVBQTNCO0FBQUEsZ0JBQ0lDLGlDQUFpQ1gsMEJBQTBCVSxRQUExQixFQURyQztBQUFBLGdCQUVJRSxVQUFVSCxvQkFGZDtBQUFBLGdCQUVvQztBQUNoQ0ksbUNBQXVCRiw4QkFIM0I7QUFBQSxnQkFHMkQ7QUFDdkRHLG9CQUFRM0IsU0FBUzRCLGdCQUFULENBQTBCSCxPQUExQixDQUpaO0FBQUEsZ0JBS0lJLGNBQWNYLFVBQVVZLEtBQVYsQ0FBZ0JILEtBQWhCLEVBQXVCRCxvQkFBdkIsRUFBNkNMLFFBQTdDLENBTGxCOztBQU9BRixxQkFBUyxJQUFJRixNQUFKLENBQVdZLFdBQVgsQ0FBVDtBQUNEOzs7d0NBRXNCRSxLLEVBQU87QUFDNUIsZ0JBQUlDLHVCQUF1QnRCLGdCQUFnQmEsUUFBaEIsRUFBM0I7QUFBQSxnQkFDSVUsVUFBVUQsb0JBRGQ7QUFBQSxnQkFDcUM7QUFDakNFLHFCQUFTSCxNQUFNSSxpQkFBTixDQUF3QkYsT0FBeEIsQ0FGYjtBQUFBLGdCQUdJRyxlQUFlakIsT0FBT1csS0FBUCxDQUFhSSxNQUFiLENBSG5CO0FBQUEsZ0JBSUlHLFlBQVlELGFBQWFFLFlBQWIsRUFKaEI7QUFBQSxnQkFLSUMsZUFBZUYsVUFBVUcsUUFBVixFQUxuQjtBQUFBLGdCQU1JQyx3QkFBd0JGLFlBTjVCLENBRDRCLENBT2U7O0FBRTNDM0IsOEJBQWtCOEIsSUFBbEIsQ0FBdUJELHFCQUF2QjtBQUNEOzs7Ozs7QUFHSHJCLFFBQVFWLGVBQVIsR0FBMEJBLGVBQTFCO0FBQ0FVLFFBQVFULGVBQVIsR0FBMEJBLGVBQTFCO0FBQ0FTLFFBQVFQLHlCQUFSLEdBQW9DQSx5QkFBcEM7O0FBRUE4QixPQUFPQyxPQUFQLEdBQWlCeEIsT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3lVSSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIGVhc3lVSUxheW91dCA9IHJlcXVpcmUoJ2Vhc3l1aS1sYXlvdXQnKSxcbiAgICBvY2NhbUxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEJORkxleGVyID0gb2NjYW1MZXhlcnMuQk5GTGV4ZXIsXG4gICAgSW5wdXQgPSBlYXN5VUkuSW5wdXQsXG4gICAgVGV4dEFyZWEgPSBlYXN5VUkuVGV4dEFyZWEsXG4gICAgU2l6ZWFibGVFbGVtZW50ID0gZWFzeVVJTGF5b3V0LlNpemVhYmxlRWxlbWVudCxcbiAgICBWZXJ0aWNhbFNwbGl0dGVyID0gZWFzeVVJTGF5b3V0LlZlcnRpY2FsU3BsaXR0ZXI7XG5cbnZhciBsZWZ0Q29sdW1uU2VsZWN0b3IgPSAnI2xlZnRDb2x1bW4nLFxuICAgIGNvbnRlbnRUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2NvbnRlbnQnLFxuICAgIGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2dyYW1tYXInLFxuICAgIHBhcnNlVHJlZVRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjcGFyc2VUcmVlJyxcbiAgICBzcGVjaWFsU3ltYm9sc1JlZ0V4cElucHV0U2VsZWN0b3IgPSAnaW5wdXQjc3BlY2lhbFN5bWJvbHNSZWdFeHAnLFxuICAgIGNvbnRlbnRUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShjb250ZW50VGV4dEFyZWFTZWxlY3RvciksXG4gICAgZ3JhbW1hclRleHRBcmVhID0gbmV3IFRleHRBcmVhKGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBwYXJzZVRyZWVUZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShwYXJzZVRyZWVUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBzcGVjaWFsU3ltYm9sc1JlZ0V4cElucHV0ID0gbmV3IElucHV0KHNwZWNpYWxTeW1ib2xzUmVnRXhwSW5wdXRTZWxlY3RvciksXG4gICAgbGVmdENvbHVtbiA9IG5ldyBTaXplYWJsZUVsZW1lbnQobGVmdENvbHVtblNlbGVjdG9yKSxcbiAgICBUT19USEVfUklHSFRfT0YgPSBWZXJ0aWNhbFNwbGl0dGVyLnNpdHVhdGVkLlRPX1RIRV9SSUdIVF9PRjtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIoJy5sZWZ0LnZlcnRpY2FsLnNwbGl0dGVyJywgVE9fVEhFX1JJR0hUX09GLCBsZWZ0Q29sdW1uKTtcblxudmFyIFBhcnNlciA9IHJlcXVpcmUgKCcuLi8uLi9lczYvcGFyc2VyJyksXG4gICAgQk5GUGFyc2VyID0gcmVxdWlyZSAoJy4uLy4uL2VzNi9ibmZQYXJzZXInKTtcblxudmFyIHBhcnNlcjtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyB1cGRhdGVQYXJzZXIobWFwcGluZ3MpIHtcbiAgICB2YXIgZ3JhbW1hclRleHRBcmVhVmFsdWUgPSBncmFtbWFyVGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgc3BlY2lhbFN5bWJvbHNSZWdFeHBJbnB1dFZhbHVlID0gc3BlY2lhbFN5bWJvbHNSZWdFeHBJbnB1dC5nZXRWYWx1ZSgpLFxuICAgICAgICBncmFtbWFyID0gZ3JhbW1hclRleHRBcmVhVmFsdWUsIC8vL1xuICAgICAgICBzcGVjaWFsU3ltYm9sc1JlZ0V4cCA9IHNwZWNpYWxTeW1ib2xzUmVnRXhwSW5wdXRWYWx1ZSwgLy8vXG4gICAgICAgIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIucGFyc2UobGluZXMsIHNwZWNpYWxTeW1ib2xzUmVnRXhwLCBtYXBwaW5ncyk7XG5cbiAgICBwYXJzZXIgPSBuZXcgUGFyc2VyKHByb2R1Y3Rpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWUoTGV4ZXIpIHtcbiAgICB2YXIgY29udGVudFRleHRBcmVhVmFsdWUgPSBjb250ZW50VGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRUZXh0QXJlYVZhbHVlLCAgLy8vXG4gICAgICAgIHRva2VucyA9IExleGVyLnRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICBkb2N1bWVudE5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKSxcbiAgICAgICAgcGFyc2VUcmVlID0gZG9jdW1lbnROb2RlLmdldFBhcnNlVHJlZSgpLFxuICAgICAgICBwYXJzZVRyZWVTdHIgPSBwYXJzZVRyZWUudG9TdHJpbmcoKSxcbiAgICAgICAgcGFyc2VUcmVlVGV4dEFyZWFIVE1MID0gcGFyc2VUcmVlU3RyOyAgLy8vXG5cbiAgICBwYXJzZVRyZWVUZXh0QXJlYS5odG1sKHBhcnNlVHJlZVRleHRBcmVhSFRNTCk7XG4gIH1cbn1cblxuRXhhbXBsZS5jb250ZW50VGV4dEFyZWEgPSBjb250ZW50VGV4dEFyZWE7XG5FeGFtcGxlLmdyYW1tYXJUZXh0QXJlYSA9IGdyYW1tYXJUZXh0QXJlYTtcbkV4YW1wbGUuc3BlY2lhbFN5bWJvbHNSZWdFeHBJbnB1dCA9IHNwZWNpYWxTeW1ib2xzUmVnRXhwSW5wdXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcbiJdfQ==