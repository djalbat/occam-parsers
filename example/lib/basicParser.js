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

var BasicParser = function () {
    function BasicParser() {
        _classCallCheck(this, BasicParser);
    }

    _createClass(BasicParser, null, [{
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

    return BasicParser;
}();

module.exports = BasicParser;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9iYXNpY1BhcnNlci5qcyJdLCJuYW1lcyI6WyJlYXN5dWkiLCJyZXF1aXJlIiwiRWxlbWVudCIsIlRleHRBcmVhIiwiQk5GTGV4ZXIiLCJCTkZQYXJzZXIiLCJQYXJzZXIiLCJpbnB1dFRleHRBcmVhU2VsZWN0b3IiLCJncmFtbWFyVGV4dEFyZWFTZWxlY3RvciIsInBhcmFncmFwaEVsZW1lbnRTZWxlY3RvciIsImlucHV0VGV4dEFyZWEiLCJncmFtbWFyVGV4dEFyZWEiLCJwYXJhZ3JhcGhFbGVtZW50Iiwic3BlY2lhbFN5bWJvbHMiLCJQYXJ0cyIsIm1hcHBpbmdzIiwiQmFzaWNQYXJzZXIiLCJ1cGRhdGVHcmFtbWFyIiwib25DaGFuZ2UiLCJ1cGRhdGVJbnB1dCIsIm1vZHVsZSIsImV4cG9ydHMiLCJwYXJzZXIiLCJncmFtbWFyVGV4dEFyZWFWYWx1ZSIsImdldFZhbHVlIiwiZ3JhbW1hciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJpbnB1dFRleHRBcmVhVmFsdWUiLCJpbnB1dCIsInBhcnNlZElucHV0IiwicGFyYWdyYXBoRWxlbWVudEhUTUwiLCJodG1sIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxVQUFVRixPQUFPRSxPQURyQjtBQUFBLElBRUlDLFdBQVdILE9BQU9HLFFBRnRCOztBQUlBLElBQUlDLFdBQVdILFFBQVMsb0JBQVQsQ0FBZjtBQUFBLElBQ0lJLFlBQVlKLFFBQVMscUJBQVQsQ0FEaEI7QUFBQSxJQUVJSyxTQUFTTCxRQUFTLGtCQUFULENBRmI7O0FBSUEsSUFBSU0sd0JBQXdCLGdCQUE1QjtBQUFBLElBQ0lDLDBCQUEwQixrQkFEOUI7QUFBQSxJQUVJQywyQkFBMkIsR0FGL0I7QUFBQSxJQUdJQyxnQkFBZ0IsSUFBSVAsUUFBSixDQUFhSSxxQkFBYixDQUhwQjtBQUFBLElBSUlJLGtCQUFrQixJQUFJUixRQUFKLENBQWFLLHVCQUFiLENBSnRCO0FBQUEsSUFLSUksbUJBQW1CLElBQUlWLE9BQUosQ0FBWU8sd0JBQVosQ0FMdkI7O0FBT0EsSUFBSUksaUJBQWlCLEVBQXJCO0FBQUEsSUFDSUMsUUFBUSxFQURaO0FBQUEsSUFFSUMsV0FBVyxFQUZmOztJQUlNQyxXOzs7Ozs7OzhCQUNTO0FBQ1hDOztBQUVBTiw0QkFBZ0JPLFFBQWhCLENBQXlCLFlBQVc7QUFDbENEO0FBQ0FFO0FBQ0QsYUFIRDs7QUFLQVQsMEJBQWNRLFFBQWQsQ0FBdUIsWUFBVztBQUNoQ0M7QUFDRCxhQUZEO0FBR0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCTCxXQUFqQjs7QUFFQSxJQUFJTSxNQUFKOztBQUVBLFNBQVNMLGFBQVQsR0FBeUI7QUFDdkIsUUFBSU0sdUJBQXVCWixnQkFBZ0JhLFFBQWhCLEVBQTNCO0FBQUEsUUFDSUMsVUFBVUYsb0JBRGQ7QUFBQSxRQUNvQztBQUNoQ0csWUFBUXRCLFNBQVN1QixnQkFBVCxDQUEwQkYsT0FBMUIsRUFBbUNaLGNBQW5DLENBRlo7QUFBQSxRQUdJZSxjQUFjdkIsVUFBVXdCLEtBQVYsQ0FBZ0JILEtBQWhCLEVBQXVCWixLQUF2QixFQUE4QkMsUUFBOUIsQ0FIbEI7O0FBS0FPLGFBQVMsSUFBSWhCLE1BQUosQ0FBV3NCLFdBQVgsQ0FBVDtBQUNEOztBQUVELFNBQVNULFdBQVQsR0FBdUI7QUFDckIsUUFBSVcscUJBQXFCcEIsY0FBY2MsUUFBZCxFQUF6QjtBQUFBLFFBQ0lPLFFBQVFELGtCQURaO0FBQUEsUUFDaUM7QUFDN0JFLGtCQUFjVixPQUFPTyxLQUFQLENBQWFFLEtBQWIsQ0FGbEI7QUFBQSxRQUdJRSx1QkFBdUJELFdBSDNCLENBRHFCLENBSW1COztBQUV4Q3BCLHFCQUFpQnNCLElBQWpCLENBQXNCRCxvQkFBdEI7QUFDRCIsImZpbGUiOiJiYXNpY1BhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEVsZW1lbnQgPSBlYXN5dWkuRWxlbWVudCxcbiAgICBUZXh0QXJlYSA9IGVhc3l1aS5UZXh0QXJlYTtcblxudmFyIEJORkxleGVyID0gcmVxdWlyZSAoJy4uLy4uL2VzNi9ibmZMZXhlcicpLFxuICAgIEJORlBhcnNlciA9IHJlcXVpcmUgKCcuLi8uLi9lczYvYm5mUGFyc2VyJyksXG4gICAgUGFyc2VyID0gcmVxdWlyZSAoJy4uLy4uL2VzNi9wYXJzZXInKTtcblxudmFyIGlucHV0VGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNpbnB1dCcsXG4gICAgZ3JhbW1hclRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjZ3JhbW1hcicsXG4gICAgcGFyYWdyYXBoRWxlbWVudFNlbGVjdG9yID0gJ3AnLFxuICAgIGlucHV0VGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoaW5wdXRUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBncmFtbWFyVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoZ3JhbW1hclRleHRBcmVhU2VsZWN0b3IpLFxuICAgIHBhcmFncmFwaEVsZW1lbnQgPSBuZXcgRWxlbWVudChwYXJhZ3JhcGhFbGVtZW50U2VsZWN0b3IpO1xuXG52YXIgc3BlY2lhbFN5bWJvbHMgPSAnJyxcbiAgICBQYXJ0cyA9IFtdLFxuICAgIG1hcHBpbmdzID0ge307XG5cbmNsYXNzIEJhc2ljUGFyc2VyIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICB1cGRhdGVHcmFtbWFyKCk7XG5cbiAgICBncmFtbWFyVGV4dEFyZWEub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGVHcmFtbWFyKCk7XG4gICAgICB1cGRhdGVJbnB1dCgpO1xuICAgIH0pO1xuXG4gICAgaW5wdXRUZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZUlucHV0KCk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY1BhcnNlcjtcblxudmFyIHBhcnNlcjtcblxuZnVuY3Rpb24gdXBkYXRlR3JhbW1hcigpIHtcbiAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gZ3JhbW1hclRleHRBcmVhLmdldFZhbHVlKCksXG4gICAgICBncmFtbWFyID0gZ3JhbW1hclRleHRBcmVhVmFsdWUsIC8vL1xuICAgICAgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIsIHNwZWNpYWxTeW1ib2xzKSxcbiAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCBQYXJ0cywgbWFwcGluZ3MpO1xuXG4gIHBhcnNlciA9IG5ldyBQYXJzZXIocHJvZHVjdGlvbnMpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVJbnB1dCgpIHtcbiAgdmFyIGlucHV0VGV4dEFyZWFWYWx1ZSA9IGlucHV0VGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgIGlucHV0ID0gaW5wdXRUZXh0QXJlYVZhbHVlLCAgLy8vXG4gICAgICBwYXJzZWRJbnB1dCA9IHBhcnNlci5wYXJzZShpbnB1dCksXG4gICAgICBwYXJhZ3JhcGhFbGVtZW50SFRNTCA9IHBhcnNlZElucHV0OyAvLy9cblxuICBwYXJhZ3JhcGhFbGVtZW50Lmh0bWwocGFyYWdyYXBoRWxlbWVudEhUTUwpO1xufVxuIl19