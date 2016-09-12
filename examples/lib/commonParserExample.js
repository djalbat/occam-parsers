'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    parsers = require('../../index'),
    Element = easyui.Element,
    TextArea = easyui.TextArea,
    BNFLexer = parsers.BNFLexer,
    BNFParser = parsers.BNFParser,
    CommonParser = parsers.CommonParser;

var inputTextAreaSelector = 'textArea#input',
    grammarTextAreaSelector = 'textArea#grammar',
    paragraphElementSelector = 'p',
    inputTextArea = new TextArea(inputTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    paragraphElement = new Element(paragraphElementSelector);

var grammarTextAreaValue = grammarTextArea.getValue(),
    grammar = grammarTextAreaValue,
    ///
specialSymbols = '\\.|\\(|\\)',
    lines = BNFLexer.linesFromGrammar(grammar, specialSymbols),
    Parts = [],
    mappings = {},
    productions = BNFParser.parse(lines, Parts, mappings);

var CommonParserExample = function () {
    function CommonParserExample() {
        _classCallCheck(this, CommonParserExample);
    }

    _createClass(CommonParserExample, null, [{
        key: 'run',
        value: function run() {
            var commonParser = new CommonParser(productions);

            inputTextArea.onChange(function (value) {
                var input = value,
                    ///
                parsedInput = commonParser.parse(input),
                    paragraphElementHTML = parsedInput; ///

                paragraphElement.html(paragraphElementHTML);
            });
        }
    }]);

    return CommonParserExample;
}();

module.exports = CommonParserExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb21tb25QYXJzZXJFeGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJwYXJzZXJzIiwiRWxlbWVudCIsIlRleHRBcmVhIiwiQk5GTGV4ZXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJpbnB1dFRleHRBcmVhU2VsZWN0b3IiLCJncmFtbWFyVGV4dEFyZWFTZWxlY3RvciIsInBhcmFncmFwaEVsZW1lbnRTZWxlY3RvciIsImlucHV0VGV4dEFyZWEiLCJncmFtbWFyVGV4dEFyZWEiLCJwYXJhZ3JhcGhFbGVtZW50IiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJnZXRWYWx1ZSIsImdyYW1tYXIiLCJzcGVjaWFsU3ltYm9scyIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsIlBhcnRzIiwibWFwcGluZ3MiLCJwcm9kdWN0aW9ucyIsInBhcnNlIiwiQ29tbW9uUGFyc2VyRXhhbXBsZSIsImNvbW1vblBhcnNlciIsIm9uQ2hhbmdlIiwidmFsdWUiLCJpbnB1dCIsInBhcnNlZElucHV0IiwicGFyYWdyYXBoRWxlbWVudEhUTUwiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsVUFBVUQsUUFBUSxhQUFSLENBRGQ7QUFBQSxJQUVJRSxVQUFVSCxPQUFPRyxPQUZyQjtBQUFBLElBR0lDLFdBQVdKLE9BQU9JLFFBSHRCO0FBQUEsSUFJSUMsV0FBV0gsUUFBUUcsUUFKdkI7QUFBQSxJQUtJQyxZQUFZSixRQUFRSSxTQUx4QjtBQUFBLElBTUlDLGVBQWVMLFFBQVFLLFlBTjNCOztBQVFBLElBQUlDLHdCQUF3QixnQkFBNUI7QUFBQSxJQUNJQywwQkFBMEIsa0JBRDlCO0FBQUEsSUFFSUMsMkJBQTJCLEdBRi9CO0FBQUEsSUFHSUMsZ0JBQWdCLElBQUlQLFFBQUosQ0FBYUkscUJBQWIsQ0FIcEI7QUFBQSxJQUlJSSxrQkFBa0IsSUFBSVIsUUFBSixDQUFhSyx1QkFBYixDQUp0QjtBQUFBLElBS0lJLG1CQUFtQixJQUFJVixPQUFKLENBQVlPLHdCQUFaLENBTHZCOztBQU9BLElBQUlJLHVCQUF1QkYsZ0JBQWdCRyxRQUFoQixFQUEzQjtBQUFBLElBQ0lDLFVBQVVGLG9CQURkO0FBQUEsSUFDb0M7QUFDaENHLGlCQUFpQixhQUZyQjtBQUFBLElBR0lDLFFBQVFiLFNBQVNjLGdCQUFULENBQTBCSCxPQUExQixFQUFtQ0MsY0FBbkMsQ0FIWjtBQUFBLElBSUlHLFFBQVEsRUFKWjtBQUFBLElBS0lDLFdBQVcsRUFMZjtBQUFBLElBTUlDLGNBQWNoQixVQUFVaUIsS0FBVixDQUFnQkwsS0FBaEIsRUFBdUJFLEtBQXZCLEVBQThCQyxRQUE5QixDQU5sQjs7SUFRTUcsbUI7Ozs7Ozs7OEJBQ1M7QUFDWCxnQkFBSUMsZUFBZSxJQUFJbEIsWUFBSixDQUFpQmUsV0FBakIsQ0FBbkI7O0FBRUFYLDBCQUFjZSxRQUFkLENBQXVCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDckMsb0JBQUlDLFFBQVFELEtBQVo7QUFBQSxvQkFBb0I7QUFDaEJFLDhCQUFjSixhQUFhRixLQUFiLENBQW1CSyxLQUFuQixDQURsQjtBQUFBLG9CQUVJRSx1QkFBdUJELFdBRjNCLENBRHFDLENBR0c7O0FBRXhDaEIsaUNBQWlCa0IsSUFBakIsQ0FBc0JELG9CQUF0QjtBQUNELGFBTkQ7QUFPRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJULG1CQUFqQiIsImZpbGUiOiJjb21tb25QYXJzZXJFeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgcGFyc2VycyA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JyksXG4gICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50LFxuICAgIFRleHRBcmVhID0gZWFzeXVpLlRleHRBcmVhLFxuICAgIEJORkxleGVyID0gcGFyc2Vycy5CTkZMZXhlcixcbiAgICBCTkZQYXJzZXIgPSBwYXJzZXJzLkJORlBhcnNlcixcbiAgICBDb21tb25QYXJzZXIgPSBwYXJzZXJzLkNvbW1vblBhcnNlcjtcblxudmFyIGlucHV0VGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNpbnB1dCcsXG4gICAgZ3JhbW1hclRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjZ3JhbW1hcicsXG4gICAgcGFyYWdyYXBoRWxlbWVudFNlbGVjdG9yID0gJ3AnLFxuICAgIGlucHV0VGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoaW5wdXRUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBncmFtbWFyVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoZ3JhbW1hclRleHRBcmVhU2VsZWN0b3IpLFxuICAgIHBhcmFncmFwaEVsZW1lbnQgPSBuZXcgRWxlbWVudChwYXJhZ3JhcGhFbGVtZW50U2VsZWN0b3IpO1xuXG52YXIgZ3JhbW1hclRleHRBcmVhVmFsdWUgPSBncmFtbWFyVGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICBncmFtbWFyID0gZ3JhbW1hclRleHRBcmVhVmFsdWUsIC8vL1xuICAgIHNwZWNpYWxTeW1ib2xzID0gJ1xcXFwufFxcXFwofFxcXFwpJyxcbiAgICBsaW5lcyA9IEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciwgc3BlY2lhbFN5bWJvbHMpLFxuICAgIFBhcnRzID0gW10sXG4gICAgbWFwcGluZ3MgPSB7fSxcbiAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgUGFydHMsIG1hcHBpbmdzKTtcblxuY2xhc3MgQ29tbW9uUGFyc2VyRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdmFyIGNvbW1vblBhcnNlciA9IG5ldyBDb21tb25QYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgaW5wdXRUZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGlucHV0ID0gdmFsdWUsICAvLy9cbiAgICAgICAgICBwYXJzZWRJbnB1dCA9IGNvbW1vblBhcnNlci5wYXJzZShpbnB1dCksXG4gICAgICAgICAgcGFyYWdyYXBoRWxlbWVudEhUTUwgPSBwYXJzZWRJbnB1dDsgLy8vXG5cbiAgICAgIHBhcmFncmFwaEVsZW1lbnQuaHRtbChwYXJhZ3JhcGhFbGVtZW50SFRNTCk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXJFeGFtcGxlO1xuIl19