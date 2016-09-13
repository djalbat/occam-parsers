'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Element = easyui.Element,
    TextArea = easyui.TextArea;

var BNFLexer = require('../../es6/bnfLexer'),
    BNFParser = require('../../es6/bnfParser'),
    Parser = require('../../es6/parser');

var inputTextAreaSelector = 'textArea#input',
    grammarTextAreaSelector = 'textArea#grammar',
    paragraphElementSelector = 'p',
    inputTextArea = new TextArea(inputTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    paragraphElement = new Element(paragraphElementSelector);

var specialSymbols = '',
    Parts = [],
    mappings = {};

var ParserExample = function () {
    function ParserExample() {
        _classCallCheck(this, ParserExample);
    }

    _createClass(ParserExample, null, [{
        key: 'run',
        value: function run() {
            updateGrammar();

            grammarTextArea.onChange(function () {
                updateGrammar();
                updateInput();
            });

            inputTextArea.onChange(function () {
                updateInput();
            });
        }
    }]);

    return ParserExample;
}();

module.exports = ParserExample;

var parser;

function updateGrammar() {
    var grammarTextAreaValue = grammarTextArea.getValue(),
        grammar = grammarTextAreaValue,
        ///
    lines = BNFLexer.linesFromGrammar(grammar, specialSymbols),
        productions = BNFParser.parse(lines, Parts, mappings);

    parser = new Parser(productions);
}

function updateInput() {
    var inputTextAreaValue = inputTextArea.getValue(),
        input = inputTextAreaValue,
        ///
    parsedInput = parser.parse(input),
        paragraphElementHTML = parsedInput; ///

    paragraphElement.html(paragraphElementHTML);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXJzZXIuanMiXSwibmFtZXMiOlsiZWFzeXVpIiwicmVxdWlyZSIsIkVsZW1lbnQiLCJUZXh0QXJlYSIsIkJORkxleGVyIiwiQk5GUGFyc2VyIiwiUGFyc2VyIiwiaW5wdXRUZXh0QXJlYVNlbGVjdG9yIiwiZ3JhbW1hclRleHRBcmVhU2VsZWN0b3IiLCJwYXJhZ3JhcGhFbGVtZW50U2VsZWN0b3IiLCJpbnB1dFRleHRBcmVhIiwiZ3JhbW1hclRleHRBcmVhIiwicGFyYWdyYXBoRWxlbWVudCIsInNwZWNpYWxTeW1ib2xzIiwiUGFydHMiLCJtYXBwaW5ncyIsIlBhcnNlckV4YW1wbGUiLCJ1cGRhdGVHcmFtbWFyIiwib25DaGFuZ2UiLCJ1cGRhdGVJbnB1dCIsIm1vZHVsZSIsImV4cG9ydHMiLCJwYXJzZXIiLCJncmFtbWFyVGV4dEFyZWFWYWx1ZSIsImdldFZhbHVlIiwiZ3JhbW1hciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJpbnB1dFRleHRBcmVhVmFsdWUiLCJpbnB1dCIsInBhcnNlZElucHV0IiwicGFyYWdyYXBoRWxlbWVudEhUTUwiLCJodG1sIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxVQUFVRixPQUFPRSxPQURyQjtBQUFBLElBRUlDLFdBQVdILE9BQU9HLFFBRnRCOztBQUlBLElBQUlDLFdBQVdILFFBQVMsb0JBQVQsQ0FBZjtBQUFBLElBQ0lJLFlBQVlKLFFBQVMscUJBQVQsQ0FEaEI7QUFBQSxJQUVJSyxTQUFTTCxRQUFTLGtCQUFULENBRmI7O0FBSUEsSUFBSU0sd0JBQXdCLGdCQUE1QjtBQUFBLElBQ0lDLDBCQUEwQixrQkFEOUI7QUFBQSxJQUVJQywyQkFBMkIsR0FGL0I7QUFBQSxJQUdJQyxnQkFBZ0IsSUFBSVAsUUFBSixDQUFhSSxxQkFBYixDQUhwQjtBQUFBLElBSUlJLGtCQUFrQixJQUFJUixRQUFKLENBQWFLLHVCQUFiLENBSnRCO0FBQUEsSUFLSUksbUJBQW1CLElBQUlWLE9BQUosQ0FBWU8sd0JBQVosQ0FMdkI7O0FBT0EsSUFBSUksaUJBQWlCLEVBQXJCO0FBQUEsSUFDSUMsUUFBUSxFQURaO0FBQUEsSUFFSUMsV0FBVyxFQUZmOztJQUlNQyxhOzs7Ozs7OzhCQUNTO0FBQ1hDOztBQUVBTiw0QkFBZ0JPLFFBQWhCLENBQXlCLFlBQVc7QUFDbENEO0FBQ0FFO0FBQ0QsYUFIRDs7QUFLQVQsMEJBQWNRLFFBQWQsQ0FBdUIsWUFBVztBQUNoQ0M7QUFDRCxhQUZEO0FBR0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCTCxhQUFqQjs7QUFFQSxJQUFJTSxNQUFKOztBQUVBLFNBQVNMLGFBQVQsR0FBeUI7QUFDdkIsUUFBSU0sdUJBQXVCWixnQkFBZ0JhLFFBQWhCLEVBQTNCO0FBQUEsUUFDSUMsVUFBVUYsb0JBRGQ7QUFBQSxRQUNvQztBQUNoQ0csWUFBUXRCLFNBQVN1QixnQkFBVCxDQUEwQkYsT0FBMUIsRUFBbUNaLGNBQW5DLENBRlo7QUFBQSxRQUdJZSxjQUFjdkIsVUFBVXdCLEtBQVYsQ0FBZ0JILEtBQWhCLEVBQXVCWixLQUF2QixFQUE4QkMsUUFBOUIsQ0FIbEI7O0FBS0FPLGFBQVMsSUFBSWhCLE1BQUosQ0FBV3NCLFdBQVgsQ0FBVDtBQUNEOztBQUVELFNBQVNULFdBQVQsR0FBdUI7QUFDckIsUUFBSVcscUJBQXFCcEIsY0FBY2MsUUFBZCxFQUF6QjtBQUFBLFFBQ0lPLFFBQVFELGtCQURaO0FBQUEsUUFDaUM7QUFDN0JFLGtCQUFjVixPQUFPTyxLQUFQLENBQWFFLEtBQWIsQ0FGbEI7QUFBQSxRQUdJRSx1QkFBdUJELFdBSDNCLENBRHFCLENBSW1COztBQUV4Q3BCLHFCQUFpQnNCLElBQWpCLENBQXNCRCxvQkFBdEI7QUFDRCIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQsXG4gICAgVGV4dEFyZWEgPSBlYXN5dWkuVGV4dEFyZWE7XG5cbnZhciBCTkZMZXhlciA9IHJlcXVpcmUgKCcuLi8uLi9lczYvYm5mTGV4ZXInKSxcbiAgICBCTkZQYXJzZXIgPSByZXF1aXJlICgnLi4vLi4vZXM2L2JuZlBhcnNlcicpLFxuICAgIFBhcnNlciA9IHJlcXVpcmUgKCcuLi8uLi9lczYvcGFyc2VyJyk7XG5cbnZhciBpbnB1dFRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjaW5wdXQnLFxuICAgIGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRBcmVhI2dyYW1tYXInLFxuICAgIHBhcmFncmFwaEVsZW1lbnRTZWxlY3RvciA9ICdwJyxcbiAgICBpbnB1dFRleHRBcmVhID0gbmV3IFRleHRBcmVhKGlucHV0VGV4dEFyZWFTZWxlY3RvciksXG4gICAgZ3JhbW1hclRleHRBcmVhID0gbmV3IFRleHRBcmVhKGdyYW1tYXJUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBwYXJhZ3JhcGhFbGVtZW50ID0gbmV3IEVsZW1lbnQocGFyYWdyYXBoRWxlbWVudFNlbGVjdG9yKTtcblxudmFyIHNwZWNpYWxTeW1ib2xzID0gJycsXG4gICAgUGFydHMgPSBbXSxcbiAgICBtYXBwaW5ncyA9IHt9O1xuXG5jbGFzcyBQYXJzZXJFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICB1cGRhdGVHcmFtbWFyKCk7XG5cbiAgICBncmFtbWFyVGV4dEFyZWEub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGVHcmFtbWFyKCk7XG4gICAgICB1cGRhdGVJbnB1dCgpO1xuICAgIH0pO1xuXG4gICAgaW5wdXRUZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZUlucHV0KCk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZXJFeGFtcGxlO1xuXG52YXIgcGFyc2VyO1xuXG5mdW5jdGlvbiB1cGRhdGVHcmFtbWFyKCkge1xuICB2YXIgZ3JhbW1hclRleHRBcmVhVmFsdWUgPSBncmFtbWFyVGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgIGdyYW1tYXIgPSBncmFtbWFyVGV4dEFyZWFWYWx1ZSwgLy8vXG4gICAgICBsaW5lcyA9IEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciwgc3BlY2lhbFN5bWJvbHMpLFxuICAgICAgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIucGFyc2UobGluZXMsIFBhcnRzLCBtYXBwaW5ncyk7XG5cbiAgcGFyc2VyID0gbmV3IFBhcnNlcihwcm9kdWN0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUlucHV0KCkge1xuICB2YXIgaW5wdXRUZXh0QXJlYVZhbHVlID0gaW5wdXRUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgaW5wdXQgPSBpbnB1dFRleHRBcmVhVmFsdWUsICAvLy9cbiAgICAgIHBhcnNlZElucHV0ID0gcGFyc2VyLnBhcnNlKGlucHV0KSxcbiAgICAgIHBhcmFncmFwaEVsZW1lbnRIVE1MID0gcGFyc2VkSW5wdXQ7IC8vL1xuXG4gIHBhcmFncmFwaEVsZW1lbnQuaHRtbChwYXJhZ3JhcGhFbGVtZW50SFRNTCk7XG59XG4iXX0=