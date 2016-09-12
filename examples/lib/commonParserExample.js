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

var specialSymbols = '',
    Parts = [],
    mappings = {};

var CommonParserExample = function () {
  function CommonParserExample() {
    _classCallCheck(this, CommonParserExample);
  }

  _createClass(CommonParserExample, null, [{
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

  return CommonParserExample;
}();

module.exports = CommonParserExample;

var commonParser;

function updateGrammar() {
  var grammarTextAreaValue = grammarTextArea.getValue(),
      grammar = grammarTextAreaValue,
      ///
  lines = BNFLexer.linesFromGrammar(grammar, specialSymbols),
      productions = BNFParser.parse(lines, Parts, mappings);

  commonParser = new CommonParser(productions);
}

function updateInput() {
  var inputTextAreaValue = inputTextArea.getValue(),
      input = inputTextAreaValue,
      ///
  parsedInput = commonParser.parse(input),
      paragraphElementHTML = parsedInput; ///

  paragraphElement.html(paragraphElementHTML);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb21tb25QYXJzZXJFeGFtcGxlLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJwYXJzZXJzIiwiRWxlbWVudCIsIlRleHRBcmVhIiwiQk5GTGV4ZXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJpbnB1dFRleHRBcmVhU2VsZWN0b3IiLCJncmFtbWFyVGV4dEFyZWFTZWxlY3RvciIsInBhcmFncmFwaEVsZW1lbnRTZWxlY3RvciIsImlucHV0VGV4dEFyZWEiLCJncmFtbWFyVGV4dEFyZWEiLCJwYXJhZ3JhcGhFbGVtZW50Iiwic3BlY2lhbFN5bWJvbHMiLCJQYXJ0cyIsIm1hcHBpbmdzIiwiQ29tbW9uUGFyc2VyRXhhbXBsZSIsInVwZGF0ZUdyYW1tYXIiLCJvbkNoYW5nZSIsInVwZGF0ZUlucHV0IiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbW1vblBhcnNlciIsImdyYW1tYXJUZXh0QXJlYVZhbHVlIiwiZ2V0VmFsdWUiLCJncmFtbWFyIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImlucHV0VGV4dEFyZWFWYWx1ZSIsImlucHV0IiwicGFyc2VkSW5wdXQiLCJwYXJhZ3JhcGhFbGVtZW50SFRNTCIsImh0bWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLFVBQVVELFFBQVEsYUFBUixDQURkO0FBQUEsSUFFSUUsVUFBVUgsT0FBT0csT0FGckI7QUFBQSxJQUdJQyxXQUFXSixPQUFPSSxRQUh0QjtBQUFBLElBSUlDLFdBQVdILFFBQVFHLFFBSnZCO0FBQUEsSUFLSUMsWUFBWUosUUFBUUksU0FMeEI7QUFBQSxJQU1JQyxlQUFlTCxRQUFRSyxZQU4zQjs7QUFRQSxJQUFJQyx3QkFBd0IsZ0JBQTVCO0FBQUEsSUFDSUMsMEJBQTBCLGtCQUQ5QjtBQUFBLElBRUlDLDJCQUEyQixHQUYvQjtBQUFBLElBR0lDLGdCQUFnQixJQUFJUCxRQUFKLENBQWFJLHFCQUFiLENBSHBCO0FBQUEsSUFJSUksa0JBQWtCLElBQUlSLFFBQUosQ0FBYUssdUJBQWIsQ0FKdEI7QUFBQSxJQUtJSSxtQkFBbUIsSUFBSVYsT0FBSixDQUFZTyx3QkFBWixDQUx2Qjs7QUFPQSxJQUFJSSxpQkFBaUIsRUFBckI7QUFBQSxJQUNJQyxRQUFRLEVBRFo7QUFBQSxJQUVJQyxXQUFXLEVBRmY7O0lBSU1DLG1COzs7Ozs7OzBCQUNTO0FBQ1hDOztBQUVBTixzQkFBZ0JPLFFBQWhCLENBQXlCLFlBQVc7QUFDbENEO0FBQ0FFO0FBQ0QsT0FIRDs7QUFLQVQsb0JBQWNRLFFBQWQsQ0FBdUIsWUFBVztBQUNoQ0M7QUFDRCxPQUZEO0FBR0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCTCxtQkFBakI7O0FBRUEsSUFBSU0sWUFBSjs7QUFFQSxTQUFTTCxhQUFULEdBQXlCO0FBQ3ZCLE1BQUlNLHVCQUF1QlosZ0JBQWdCYSxRQUFoQixFQUEzQjtBQUFBLE1BQ0lDLFVBQVVGLG9CQURkO0FBQUEsTUFDb0M7QUFDaENHLFVBQVF0QixTQUFTdUIsZ0JBQVQsQ0FBMEJGLE9BQTFCLEVBQW1DWixjQUFuQyxDQUZaO0FBQUEsTUFHSWUsY0FBY3ZCLFVBQVV3QixLQUFWLENBQWdCSCxLQUFoQixFQUF1QlosS0FBdkIsRUFBOEJDLFFBQTlCLENBSGxCOztBQUtBTyxpQkFBZSxJQUFJaEIsWUFBSixDQUFpQnNCLFdBQWpCLENBQWY7QUFDRDs7QUFFRCxTQUFTVCxXQUFULEdBQXVCO0FBQ3JCLE1BQUlXLHFCQUFxQnBCLGNBQWNjLFFBQWQsRUFBekI7QUFBQSxNQUNJTyxRQUFRRCxrQkFEWjtBQUFBLE1BQ2lDO0FBQzdCRSxnQkFBY1YsYUFBYU8sS0FBYixDQUFtQkUsS0FBbkIsQ0FGbEI7QUFBQSxNQUdJRSx1QkFBdUJELFdBSDNCLENBRHFCLENBSW1COztBQUV4Q3BCLG1CQUFpQnNCLElBQWpCLENBQXNCRCxvQkFBdEI7QUFDRCIsImZpbGUiOiJjb21tb25QYXJzZXJFeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgcGFyc2VycyA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JyksXG4gICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50LFxuICAgIFRleHRBcmVhID0gZWFzeXVpLlRleHRBcmVhLFxuICAgIEJORkxleGVyID0gcGFyc2Vycy5CTkZMZXhlcixcbiAgICBCTkZQYXJzZXIgPSBwYXJzZXJzLkJORlBhcnNlcixcbiAgICBDb21tb25QYXJzZXIgPSBwYXJzZXJzLkNvbW1vblBhcnNlcjtcblxudmFyIGlucHV0VGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0QXJlYSNpbnB1dCcsXG4gICAgZ3JhbW1hclRleHRBcmVhU2VsZWN0b3IgPSAndGV4dEFyZWEjZ3JhbW1hcicsXG4gICAgcGFyYWdyYXBoRWxlbWVudFNlbGVjdG9yID0gJ3AnLFxuICAgIGlucHV0VGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoaW5wdXRUZXh0QXJlYVNlbGVjdG9yKSxcbiAgICBncmFtbWFyVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEoZ3JhbW1hclRleHRBcmVhU2VsZWN0b3IpLFxuICAgIHBhcmFncmFwaEVsZW1lbnQgPSBuZXcgRWxlbWVudChwYXJhZ3JhcGhFbGVtZW50U2VsZWN0b3IpO1xuXG52YXIgc3BlY2lhbFN5bWJvbHMgPSAnJyxcbiAgICBQYXJ0cyA9IFtdLFxuICAgIG1hcHBpbmdzID0ge307XG5cbmNsYXNzIENvbW1vblBhcnNlckV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIHVwZGF0ZUdyYW1tYXIoKTtcblxuICAgIGdyYW1tYXJUZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZUdyYW1tYXIoKTtcbiAgICAgIHVwZGF0ZUlucHV0KCk7XG4gICAgfSk7XG5cbiAgICBpbnB1dFRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlSW5wdXQoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlckV4YW1wbGU7XG5cbnZhciBjb21tb25QYXJzZXI7XG5cbmZ1bmN0aW9uIHVwZGF0ZUdyYW1tYXIoKSB7XG4gIHZhciBncmFtbWFyVGV4dEFyZWFWYWx1ZSA9IGdyYW1tYXJUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgZ3JhbW1hciA9IGdyYW1tYXJUZXh0QXJlYVZhbHVlLCAvLy9cbiAgICAgIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyLCBzcGVjaWFsU3ltYm9scyksXG4gICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgUGFydHMsIG1hcHBpbmdzKTtcblxuICBjb21tb25QYXJzZXIgPSBuZXcgQ29tbW9uUGFyc2VyKHByb2R1Y3Rpb25zKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSW5wdXQoKSB7XG4gIHZhciBpbnB1dFRleHRBcmVhVmFsdWUgPSBpbnB1dFRleHRBcmVhLmdldFZhbHVlKCksXG4gICAgICBpbnB1dCA9IGlucHV0VGV4dEFyZWFWYWx1ZSwgIC8vL1xuICAgICAgcGFyc2VkSW5wdXQgPSBjb21tb25QYXJzZXIucGFyc2UoaW5wdXQpLFxuICAgICAgcGFyYWdyYXBoRWxlbWVudEhUTUwgPSBwYXJzZWRJbnB1dDsgLy8vXG5cbiAgcGFyYWdyYXBoRWxlbWVudC5odG1sKHBhcmFncmFwaEVsZW1lbnRIVE1MKTtcbn1cbiJdfQ==