'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    TextArea = easyui.TextArea;

var lexers = require('../../../es6/occam-lexers'),
    BasicLexer = lexers.BasicLexer;

var Example = require('../example');

var terminalSymbolsRegExpPatternTextAreaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPatternTextArea = new TextArea(terminalSymbolsRegExpPatternTextAreaSelector);

var grammar = '\n\n      expr                       ::= term operatorThenTerm*\n      \n      operatorThenTerm           ::= operator term\n      \n      operator                   ::= + | - | * | /\n      \n      term                       ::= naturalNumber\n      \n                                   | parenthesizedExpr\n      \n      naturalNumber              ::= /\\d+/\n      \n      parenthesizedExpr          ::= ( expr )\n    \n    ',
    terminalSymbolsRegExpPattern = '\\+|\\-|\\*|\\/|\\(|\\)|\\d+';

var lexer = null;

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
  updateLexer();
  updateParser();

  if (lexer !== null) {
    Example.updateParseTree(lexer);
  } else {
    Example.clearParseTree();
  }
}

module.exports = BasicExample;

function updateLexer() {
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextArea.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,
      ///
  terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

  if (terminalSymbolsRegExpPatternIsValid) {
    var terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
        grammar = [{ terminal: terminalSymbolsRegExp }];

    lexer = BasicLexer.fromGrammar(grammar);

    terminalSymbolsRegExpPatternTextArea.removeClass('error');
  } else {
    terminalSymbolsRegExpPatternTextArea.addClass('error');

    lexer = null;
  }
}

function updateParser() {
  var grammarTextAreaValue = Example.getGrammarTextAreaValue(),
      terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextArea.getValue(),
      grammar = grammarTextAreaValue,
      ///
  terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,
      ///
  significantTokenTypes = BasicLexer.significantTokenTypes();

  Example.updateParser(grammar, terminalSymbolsRegExpPattern, significantTokenTypes);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Jhc2ljLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJUZXh0QXJlYSIsImxleGVycyIsIkJhc2ljTGV4ZXIiLCJFeGFtcGxlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhU2VsZWN0b3IiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEiLCJncmFtbWFyIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsImxleGVyIiwiQmFzaWNFeGFtcGxlIiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSIsInNldEdyYW1tYXJUZXh0QXJlYVZhbHVlIiwic2V0VmFsdWUiLCJ1cGRhdGUiLCJvbkNoYW5nZSIsIm9uR3JhbW1hclRleHRBcmVhQ2hhbmdlIiwib25Db250ZW50VGV4dEFyZWFDaGFuZ2UiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsInVwZGF0ZVBhcnNlVHJlZSIsImNsZWFyUGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSXNWYWxpZCIsInJlZ0V4cFBhdHRlcm5Jc1ZhbGlkIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwiUmVnRXhwIiwidGVybWluYWwiLCJmcm9tR3JhbW1hciIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJnZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZ0V4cFBhdHRlcm4iLCJ2YWxpZCIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0Qjs7QUFHQSxJQUFJQyxTQUFTRixRQUFRLDJCQUFSLENBQWI7QUFBQSxJQUNJRyxhQUFhRCxPQUFPQyxVQUR4Qjs7QUFHQSxJQUFJQyxVQUFVSixRQUFRLFlBQVIsQ0FBZDs7QUFFQSxJQUFJSywrQ0FBK0MsdUNBQW5EO0FBQUEsSUFDSUMsdUNBQXVDLElBQUlMLFFBQUosQ0FBYUksNENBQWIsQ0FEM0M7O0FBR0EsSUFBSUUsdWJBQUo7QUFBQSxJQWlCSUMsNkRBakJKOztBQW1CQSxJQUFJQyxRQUFRLElBQVo7O0lBRU1DLFk7Ozs7Ozs7MEJBQ1M7QUFDWCxVQUFJQyx1QkFBdUJKLE9BQTNCO0FBQUEsVUFBb0M7QUFDaENLLGtEQUE0Q0osNEJBRGhELENBRFcsQ0FFbUU7O0FBRTlFSixjQUFRUyx1QkFBUixDQUFnQ0Ysb0JBQWhDOztBQUVBTCwyQ0FBcUNRLFFBQXJDLENBQThDRix5Q0FBOUM7O0FBRUFHOztBQUVBVCwyQ0FBcUNVLFFBQXJDLENBQThDLFlBQVc7QUFDdkREO0FBQ0QsT0FGRDs7QUFJQVgsY0FBUWEsdUJBQVIsQ0FBZ0MsWUFBVztBQUN6Q0Y7QUFDRCxPQUZEOztBQUlBWCxjQUFRYyx1QkFBUixDQUFnQyxZQUFXO0FBQ3pDSDtBQUNELE9BRkQ7QUFHRDs7Ozs7O0FBR0gsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQkk7QUFDQUM7O0FBRUEsTUFBSVgsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCTCxZQUFRaUIsZUFBUixDQUF3QlosS0FBeEI7QUFDRCxHQUZELE1BRU87QUFDTEwsWUFBUWtCLGNBQVI7QUFDRDtBQUNGOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCZCxZQUFqQjs7QUFFQSxTQUFTUyxXQUFULEdBQXVCO0FBQ3JCLE1BQUlNLHlDQUF5Q25CLHFDQUFxQ29CLFFBQXJDLEVBQTdDO0FBQUEsTUFDSWxCLCtCQUErQmlCLHNDQURuQztBQUFBLE1BQzRFO0FBQ3hFRSx3Q0FBc0NDLHFCQUFxQnBCLDRCQUFyQixDQUYxQzs7QUFJQSxNQUFJbUIsbUNBQUosRUFBeUM7QUFDdkMsUUFBSUUsd0JBQXdCLElBQUlDLE1BQUosQ0FBV3RCLDRCQUFYLENBQTVCO0FBQUEsUUFDSUQsVUFBVSxDQUNSLEVBQUV3QixVQUFXRixxQkFBYixFQURRLENBRGQ7O0FBS0FwQixZQUFRTixXQUFXNkIsV0FBWCxDQUF1QnpCLE9BQXZCLENBQVI7O0FBRUFELHlDQUFxQzJCLFdBQXJDLENBQWlELE9BQWpEO0FBQ0QsR0FURCxNQVNPO0FBQ0wzQix5Q0FBcUM0QixRQUFyQyxDQUE4QyxPQUE5Qzs7QUFFQXpCLFlBQVEsSUFBUjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1csWUFBVCxHQUF3QjtBQUN0QixNQUFJVCx1QkFBdUJQLFFBQVErQix1QkFBUixFQUEzQjtBQUFBLE1BQ0lWLHlDQUF5Q25CLHFDQUFxQ29CLFFBQXJDLEVBRDdDO0FBQUEsTUFFSW5CLFVBQVVJLG9CQUZkO0FBQUEsTUFFb0M7QUFDaENILGlDQUErQmlCLHNDQUhuQztBQUFBLE1BRzJFO0FBQ3ZFVywwQkFBd0JqQyxXQUFXaUMscUJBQVgsRUFKNUI7O0FBTUFoQyxVQUFRZ0IsWUFBUixDQUFxQmIsT0FBckIsRUFBOEJDLDRCQUE5QixFQUE0RDRCLHFCQUE1RDtBQUNEOztBQUVELFNBQVNSLG9CQUFULENBQThCUyxhQUE5QixFQUE2QztBQUMzQyxNQUFJQyxRQUFRLElBQVo7O0FBRUEsTUFBSTtBQUNGLFFBQUlSLE1BQUosQ0FBV08sYUFBWDtBQUNELEdBRkQsQ0FHQSxPQUFPRSxLQUFQLEVBQWM7QUFDWkQsWUFBUSxLQUFSO0FBQ0Q7O0FBRUQsU0FBT0EsS0FBUDtBQUNEIiwiZmlsZSI6ImJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgVGV4dEFyZWEgPSBlYXN5dWkuVGV4dEFyZWE7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCcuLi8uLi8uLi9lczYvb2NjYW0tbGV4ZXJzJyksXG4gICAgQmFzaWNMZXhlciA9IGxleGVycy5CYXNpY0xleGVyO1xuXG52YXIgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKTtcblxudmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3Rlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4nLFxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYSA9IG5ldyBUZXh0QXJlYSh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFTZWxlY3Rvcik7XG5cbnZhciBncmFtbWFyID0gYFxuXG4gICAgICBleHByICAgICAgICAgICAgICAgICAgICAgICA6Oj0gdGVybSBvcGVyYXRvclRoZW5UZXJtKlxuICAgICAgXG4gICAgICBvcGVyYXRvclRoZW5UZXJtICAgICAgICAgICA6Oj0gb3BlcmF0b3IgdGVybVxuICAgICAgXG4gICAgICBvcGVyYXRvciAgICAgICAgICAgICAgICAgICA6Oj0gKyB8IC0gfCAqIHwgL1xuICAgICAgXG4gICAgICB0ZXJtICAgICAgICAgICAgICAgICAgICAgICA6Oj0gbmF0dXJhbE51bWJlclxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcGFyZW50aGVzaXplZEV4cHJcbiAgICAgIFxuICAgICAgbmF0dXJhbE51bWJlciAgICAgICAgICAgICAgOjo9IC9cXFxcZCsvXG4gICAgICBcbiAgICAgIHBhcmVudGhlc2l6ZWRFeHByICAgICAgICAgIDo6PSAoIGV4cHIgKVxuICAgIFxuICAgIGAsXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGBcXFxcK3xcXFxcLXxcXFxcKnxcXFxcL3xcXFxcKHxcXFxcKXxcXFxcZCtgO1xuXG52YXIgbGV4ZXIgPSBudWxsO1xuXG5jbGFzcyBCYXNpY0V4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIHZhciBncmFtbWFyVGV4dEFyZWFWYWx1ZSA9IGdyYW1tYXIsIC8vL1xuICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm47IC8vL1xuXG4gICAgRXhhbXBsZS5zZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZShncmFtbWFyVGV4dEFyZWFWYWx1ZSk7XG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEuc2V0VmFsdWUodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhVmFsdWUpO1xuXG4gICAgdXBkYXRlKCk7XG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUub25HcmFtbWFyVGV4dEFyZWFDaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUub25Db250ZW50VGV4dEFyZWFDaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIHVwZGF0ZUxleGVyKCk7XG4gIHVwZGF0ZVBhcnNlcigpO1xuXG4gIGlmIChsZXhlciAhPT0gbnVsbCkge1xuICAgIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGxleGVyKTtcbiAgfSBlbHNlIHtcbiAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZUxleGVyKCkge1xuICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSwgIC8vL1xuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQgPSByZWdFeHBQYXR0ZXJuSXNWYWxpZCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKTtcblxuICBpZiAodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQpIHtcbiAgICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwID0gbmV3IFJlZ0V4cCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKSxcbiAgICAgICAgZ3JhbW1hciA9IFtcbiAgICAgICAgICB7IHRlcm1pbmFsIDogdGVybWluYWxTeW1ib2xzUmVnRXhwIH1cbiAgICAgICAgXTtcblxuICAgIGxleGVyID0gQmFzaWNMZXhlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfSBlbHNlIHtcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICBsZXhlciA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUGFyc2VyKCkge1xuICB2YXIgZ3JhbW1hclRleHRBcmVhVmFsdWUgPSBFeGFtcGxlLmdldEdyYW1tYXJUZXh0QXJlYVZhbHVlKCksXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgZ3JhbW1hciA9IGdyYW1tYXJUZXh0QXJlYVZhbHVlLCAvLy9cbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSwgLy8vXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBCYXNpY0xleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VyKGdyYW1tYXIsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIHNpZ25pZmljYW50VG9rZW5UeXBlcyk7XG59XG5cbmZ1bmN0aW9uIHJlZ0V4cFBhdHRlcm5Jc1ZhbGlkKHJlZ0V4cFBhdHRlcm4pIHtcbiAgdmFyIHZhbGlkID0gdHJ1ZTtcblxuICB0cnkge1xuICAgIG5ldyBSZWdFeHAocmVnRXhwUGF0dGVybik7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFsaWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZDtcbn1cbiJdfQ==