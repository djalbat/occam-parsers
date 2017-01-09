'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    TextArea = easyui.TextArea;

var lexers = require('occam-lexers'),
    BasicLexer = lexers.BasicLexer;

var BasicParser = require('../../../es6/basic/parser');

var Example = require('../example');

var terminalSymbolsRegExpPatternTextAreaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPatternTextArea = new TextArea(terminalSymbolsRegExpPatternTextAreaSelector);

var grammar = '\n\n      expr                       ::= term operatorThenTerm*\n      \n      operatorThenTerm           ::= operator term\n      \n      operator                   ::= + | - | * | /\n      \n      term                       ::= naturalNumber\n      \n                                   | parenthesizedExpr\n      \n      naturalNumber              ::= /^\\d+$/\n      \n      parenthesizedExpr          ::= ( expr )\n    \n    ',
    terminalSymbolsRegExpPattern = '\\+|\\-|\\*|\\/|\\(|\\)|\\d+';

var basicLexer = null,
    basicParser = null;

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      var grammarTextAreaValue = grammar,
          ///
      terminalSymbolsRegExpPatternTextAreaValue = terminalSymbolsRegExpPattern; ///

      Example.setGrammarTextAreaValue(grammarTextAreaValue);

      terminalSymbolsRegExpPatternTextArea.setValue(terminalSymbolsRegExpPatternTextAreaValue);

      update();

      terminalSymbolsRegExpPatternTextArea.onChange(function () {
        update();
      });

      Example.onGrammarTextAreaChange(function () {
        update();
      });

      Example.onContentTextAreaChange(function () {
        update();
      });
    }
  }]);

  return BasicExample;
}();

function update() {
  updateBasicLexer();
  updateBasicParser();

  if (basicLexer !== null) {
    Example.updateParseTree(basicLexer, basicParser);
  } else {
    Example.clearParseTree();
  }
}

module.exports = BasicExample;

function updateBasicLexer() {
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextArea.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,
      ///
  terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

  if (terminalSymbolsRegExpPatternIsValid) {
    var terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
        grammar = [{ terminal: terminalSymbolsRegExp }];

    basicLexer = BasicLexer.fromGrammar(grammar);

    terminalSymbolsRegExpPatternTextArea.removeClass('error');
  } else {
    terminalSymbolsRegExpPatternTextArea.addClass('error');

    basicLexer = null;
  }
}

function updateBasicParser() {
  var grammarTextAreaValue = Example.getGrammarTextAreaValue(),
      terminalSymbolsRegExpPatternTextAreaValue = terminalSymbolsRegExpPatternTextArea.getValue(),
      grammar = grammarTextAreaValue,
      ///
  terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternTextAreaValue; ///

  basicParser = BasicParser.fromGrammarAndTerminalSymbolsRegExpPattern(grammar, terminalSymbolsRegExpPattern);
}

function regExpPatternIsValid(regExpPattern) {
  var valid = true;

  try {
    new RegExp(regExpPattern);
  } catch (error) {
    valid = false;
  }

  return valid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Jhc2ljLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJUZXh0QXJlYSIsImxleGVycyIsIkJhc2ljTGV4ZXIiLCJCYXNpY1BhcnNlciIsIkV4YW1wbGUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFTZWxlY3RvciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYSIsImdyYW1tYXIiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwiYmFzaWNMZXhlciIsImJhc2ljUGFyc2VyIiwiQmFzaWNFeGFtcGxlIiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSIsInNldEdyYW1tYXJUZXh0QXJlYVZhbHVlIiwic2V0VmFsdWUiLCJ1cGRhdGUiLCJvbkNoYW5nZSIsIm9uR3JhbW1hclRleHRBcmVhQ2hhbmdlIiwib25Db250ZW50VGV4dEFyZWFDaGFuZ2UiLCJ1cGRhdGVCYXNpY0xleGVyIiwidXBkYXRlQmFzaWNQYXJzZXIiLCJ1cGRhdGVQYXJzZVRyZWUiLCJjbGVhclBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSIsImdldFZhbHVlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQiLCJyZWdFeHBQYXR0ZXJuSXNWYWxpZCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsIlJlZ0V4cCIsInRlcm1pbmFsIiwiZnJvbUdyYW1tYXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZ2V0R3JhbW1hclRleHRBcmVhVmFsdWUiLCJmcm9tR3JhbW1hckFuZFRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJyZWdFeHBQYXR0ZXJuIiwidmFsaWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsV0FBV0YsT0FBT0UsUUFEdEI7O0FBR0EsSUFBSUMsU0FBU0YsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJRyxhQUFhRCxPQUFPQyxVQUR4Qjs7QUFHQSxJQUFJQyxjQUFjSixRQUFRLDJCQUFSLENBQWxCOztBQUVBLElBQUlLLFVBQVVMLFFBQVEsWUFBUixDQUFkOztBQUVBLElBQUlNLCtDQUErQyx1Q0FBbkQ7QUFBQSxJQUNJQyx1Q0FBdUMsSUFBSU4sUUFBSixDQUFhSyw0Q0FBYixDQUQzQzs7QUFHQSxJQUFJRSx5YkFBSjtBQUFBLElBaUJJQyw2REFqQko7O0FBbUJBLElBQUlDLGFBQWEsSUFBakI7QUFBQSxJQUNJQyxjQUFjLElBRGxCOztJQUdNQyxZOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBSUMsdUJBQXVCTCxPQUEzQjtBQUFBLFVBQW9DO0FBQ2hDTSxrREFBNENMLDRCQURoRCxDQURXLENBRW1FOztBQUU5RUosY0FBUVUsdUJBQVIsQ0FBZ0NGLG9CQUFoQzs7QUFFQU4sMkNBQXFDUyxRQUFyQyxDQUE4Q0YseUNBQTlDOztBQUVBRzs7QUFFQVYsMkNBQXFDVyxRQUFyQyxDQUE4QyxZQUFXO0FBQ3ZERDtBQUNELE9BRkQ7O0FBSUFaLGNBQVFjLHVCQUFSLENBQWdDLFlBQVc7QUFDekNGO0FBQ0QsT0FGRDs7QUFJQVosY0FBUWUsdUJBQVIsQ0FBZ0MsWUFBVztBQUN6Q0g7QUFDRCxPQUZEO0FBR0Q7Ozs7OztBQUdILFNBQVNBLE1BQVQsR0FBa0I7QUFDaEJJO0FBQ0FDOztBQUVBLE1BQUlaLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJMLFlBQVFrQixlQUFSLENBQXdCYixVQUF4QixFQUFvQ0MsV0FBcEM7QUFDRCxHQUZELE1BRU87QUFDTE4sWUFBUW1CLGNBQVI7QUFDRDtBQUNGOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCZCxZQUFqQjs7QUFFQSxTQUFTUyxnQkFBVCxHQUE0QjtBQUMxQixNQUFJTSx5Q0FBeUNwQixxQ0FBcUNxQixRQUFyQyxFQUE3QztBQUFBLE1BQ0luQiwrQkFBK0JrQixzQ0FEbkM7QUFBQSxNQUM0RTtBQUN4RUUsd0NBQXNDQyxxQkFBcUJyQiw0QkFBckIsQ0FGMUM7O0FBSUEsTUFBSW9CLG1DQUFKLEVBQXlDO0FBQ3ZDLFFBQUlFLHdCQUF3QixJQUFJQyxNQUFKLENBQVd2Qiw0QkFBWCxDQUE1QjtBQUFBLFFBQ0lELFVBQVUsQ0FDUixFQUFFeUIsVUFBV0YscUJBQWIsRUFEUSxDQURkOztBQUtBckIsaUJBQWFQLFdBQVcrQixXQUFYLENBQXVCMUIsT0FBdkIsQ0FBYjs7QUFFQUQseUNBQXFDNEIsV0FBckMsQ0FBaUQsT0FBakQ7QUFDRCxHQVRELE1BU087QUFDTDVCLHlDQUFxQzZCLFFBQXJDLENBQThDLE9BQTlDOztBQUVBMUIsaUJBQWEsSUFBYjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1ksaUJBQVQsR0FBNkI7QUFDM0IsTUFBSVQsdUJBQXVCUixRQUFRZ0MsdUJBQVIsRUFBM0I7QUFBQSxNQUNJdkIsNENBQTRDUCxxQ0FBcUNxQixRQUFyQyxFQURoRDtBQUFBLE1BRUlwQixVQUFVSyxvQkFGZDtBQUFBLE1BRW9DO0FBQ2hDSixpQ0FBK0JLLHlDQUhuQyxDQUQyQixDQUltRDs7QUFFOUVILGdCQUFjUCxZQUFZa0MsMENBQVosQ0FBdUQ5QixPQUF2RCxFQUFnRUMsNEJBQWhFLENBQWQ7QUFDRDs7QUFFRCxTQUFTcUIsb0JBQVQsQ0FBOEJTLGFBQTlCLEVBQTZDO0FBQzNDLE1BQUlDLFFBQVEsSUFBWjs7QUFFQSxNQUFJO0FBQ0YsUUFBSVIsTUFBSixDQUFXTyxhQUFYO0FBQ0QsR0FGRCxDQUdBLE9BQU9FLEtBQVAsRUFBYztBQUNaRCxZQUFRLEtBQVI7QUFDRDs7QUFFRCxTQUFPQSxLQUFQO0FBQ0QiLCJmaWxlIjoiYmFzaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBUZXh0QXJlYSA9IGVhc3l1aS5UZXh0QXJlYTtcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEJhc2ljTGV4ZXIgPSBsZXhlcnMuQmFzaWNMZXhlcjtcblxudmFyIEJhc2ljUGFyc2VyID0gcmVxdWlyZSgnLi4vLi4vLi4vZXM2L2Jhc2ljL3BhcnNlcicpO1xuXG52YXIgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKTtcblxudmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3Rlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4nLFxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYSA9IG5ldyBUZXh0QXJlYSh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFTZWxlY3Rvcik7XG5cbnZhciBncmFtbWFyID0gYFxuXG4gICAgICBleHByICAgICAgICAgICAgICAgICAgICAgICA6Oj0gdGVybSBvcGVyYXRvclRoZW5UZXJtKlxuICAgICAgXG4gICAgICBvcGVyYXRvclRoZW5UZXJtICAgICAgICAgICA6Oj0gb3BlcmF0b3IgdGVybVxuICAgICAgXG4gICAgICBvcGVyYXRvciAgICAgICAgICAgICAgICAgICA6Oj0gKyB8IC0gfCAqIHwgL1xuICAgICAgXG4gICAgICB0ZXJtICAgICAgICAgICAgICAgICAgICAgICA6Oj0gbmF0dXJhbE51bWJlclxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcGFyZW50aGVzaXplZEV4cHJcbiAgICAgIFxuICAgICAgbmF0dXJhbE51bWJlciAgICAgICAgICAgICAgOjo9IC9eXFxcXGQrJC9cbiAgICAgIFxuICAgICAgcGFyZW50aGVzaXplZEV4cHIgICAgICAgICAgOjo9ICggZXhwciApXG4gICAgXG4gICAgYCxcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gYFxcXFwrfFxcXFwtfFxcXFwqfFxcXFwvfFxcXFwofFxcXFwpfFxcXFxkK2A7XG5cbnZhciBiYXNpY0xleGVyID0gbnVsbCxcbiAgICBiYXNpY1BhcnNlciA9IG51bGw7XG5cbmNsYXNzIEJhc2ljRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gZ3JhbW1hciwgLy8vXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYVZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybjsgLy8vXG5cbiAgICBFeGFtcGxlLnNldEdyYW1tYXJUZXh0QXJlYVZhbHVlKGdyYW1tYXJUZXh0QXJlYVZhbHVlKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5zZXRWYWx1ZSh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSk7XG5cbiAgICB1cGRhdGUoKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgRXhhbXBsZS5vbkdyYW1tYXJUZXh0QXJlYUNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgRXhhbXBsZS5vbkNvbnRlbnRUZXh0QXJlYUNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgdXBkYXRlQmFzaWNMZXhlcigpO1xuICB1cGRhdGVCYXNpY1BhcnNlcigpO1xuXG4gIGlmIChiYXNpY0xleGVyICE9PSBudWxsKSB7XG4gICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoYmFzaWNMZXhlciwgYmFzaWNQYXJzZXIpO1xuICB9IGVsc2Uge1xuICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWUoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlQmFzaWNMZXhlcigpIHtcbiAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhLmdldFZhbHVlKCksXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUsICAvLy9cbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkID0gcmVnRXhwUGF0dGVybklzVmFsaWQodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybik7XG5cbiAgaWYgKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkKSB7XG4gICAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCA9IG5ldyBSZWdFeHAodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiksXG4gICAgICAgIGdyYW1tYXIgPSBbXG4gICAgICAgICAgeyB0ZXJtaW5hbCA6IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCB9XG4gICAgICAgIF07XG5cbiAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfSBlbHNlIHtcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICBiYXNpY0xleGVyID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVCYXNpY1BhcnNlcigpIHtcbiAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gRXhhbXBsZS5nZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSgpLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhVmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgIGdyYW1tYXIgPSBncmFtbWFyVGV4dEFyZWFWYWx1ZSwgLy8vXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhVmFsdWU7IC8vL1xuXG4gIGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbUdyYW1tYXJBbmRUZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKGdyYW1tYXIsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4pO1xufVxuXG5mdW5jdGlvbiByZWdFeHBQYXR0ZXJuSXNWYWxpZChyZWdFeHBQYXR0ZXJuKSB7XG4gIHZhciB2YWxpZCA9IHRydWU7XG5cbiAgdHJ5IHtcbiAgICBuZXcgUmVnRXhwKHJlZ0V4cFBhdHRlcm4pO1xuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHZhbGlkID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdmFsaWQ7XG59XG4iXX0=