'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    TextArea = easyui.TextArea;

var lexers = require('occam-lexers'),
    BasicLexer = lexers.BasicLexer;

var Example = require('../example');

var terminalSymbolsRegExpPatternTextAreaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPatternTextArea = new TextArea(terminalSymbolsRegExpPatternTextAreaSelector);

var grammar = '\n\n      expr                       ::= term operatorThenTerm*\n      \n      operatorThenTerm           ::= operator term\n      \n      operator                   ::= + | - | * | /\n      \n      term                       ::= naturalNumber\n      \n                                   | parenthesizedExpr\n      \n      naturalNumber              ::= /^\\d+$/\n      \n      parenthesizedExpr          ::= ( expr )\n    \n    ',
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
  var terminalSymbolsRegExpPatternTextAreaValue = terminalSymbolsRegExpPatternTextArea.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternTextAreaValue,
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
      terminalSymbolsRegExpPatternTextAreaValue = terminalSymbolsRegExpPatternTextArea.getValue(),
      grammar = grammarTextAreaValue,
      ///
  terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternTextAreaValue,
      ///
  significantTokenTypes = [];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Jhc2ljLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJUZXh0QXJlYSIsImxleGVycyIsIkJhc2ljTGV4ZXIiLCJFeGFtcGxlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhU2VsZWN0b3IiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEiLCJncmFtbWFyIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsImxleGVyIiwiQmFzaWNFeGFtcGxlIiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSIsInNldEdyYW1tYXJUZXh0QXJlYVZhbHVlIiwic2V0VmFsdWUiLCJ1cGRhdGUiLCJvbkNoYW5nZSIsIm9uR3JhbW1hclRleHRBcmVhQ2hhbmdlIiwib25Db250ZW50VGV4dEFyZWFDaGFuZ2UiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsInVwZGF0ZVBhcnNlVHJlZSIsImNsZWFyUGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldFZhbHVlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQiLCJyZWdFeHBQYXR0ZXJuSXNWYWxpZCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsIlJlZ0V4cCIsInRlcm1pbmFsIiwiZnJvbUdyYW1tYXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZ2V0R3JhbW1hclRleHRBcmVhVmFsdWUiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJyZWdFeHBQYXR0ZXJuIiwidmFsaWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsV0FBV0YsT0FBT0UsUUFEdEI7O0FBR0EsSUFBSUMsU0FBU0YsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJRyxhQUFhRCxPQUFPQyxVQUR4Qjs7QUFHQSxJQUFJQyxVQUFVSixRQUFRLFlBQVIsQ0FBZDs7QUFFQSxJQUFJSywrQ0FBK0MsdUNBQW5EO0FBQUEsSUFDSUMsdUNBQXVDLElBQUlMLFFBQUosQ0FBYUksNENBQWIsQ0FEM0M7O0FBR0EsSUFBSUUseWJBQUo7QUFBQSxJQWlCSUMsNkRBakJKOztBQW1CQSxJQUFJQyxRQUFRLElBQVo7O0lBRU1DLFk7Ozs7Ozs7MEJBQ1M7QUFDWCxVQUFJQyx1QkFBdUJKLE9BQTNCO0FBQUEsVUFBb0M7QUFDaENLLGtEQUE0Q0osNEJBRGhELENBRFcsQ0FFbUU7O0FBRTlFSixjQUFRUyx1QkFBUixDQUFnQ0Ysb0JBQWhDOztBQUVBTCwyQ0FBcUNRLFFBQXJDLENBQThDRix5Q0FBOUM7O0FBRUFHOztBQUVBVCwyQ0FBcUNVLFFBQXJDLENBQThDLFlBQVc7QUFDdkREO0FBQ0QsT0FGRDs7QUFJQVgsY0FBUWEsdUJBQVIsQ0FBZ0MsWUFBVztBQUN6Q0Y7QUFDRCxPQUZEOztBQUlBWCxjQUFRYyx1QkFBUixDQUFnQyxZQUFXO0FBQ3pDSDtBQUNELE9BRkQ7QUFHRDs7Ozs7O0FBR0gsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQkk7QUFDQUM7O0FBRUEsTUFBSVgsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCTCxZQUFRaUIsZUFBUixDQUF3QlosS0FBeEI7QUFDRCxHQUZELE1BRU87QUFDTEwsWUFBUWtCLGNBQVI7QUFDRDtBQUNGOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCZCxZQUFqQjs7QUFFQSxTQUFTUyxXQUFULEdBQXVCO0FBQ3JCLE1BQUlQLDRDQUE0Q04scUNBQXFDbUIsUUFBckMsRUFBaEQ7QUFBQSxNQUNJakIsK0JBQStCSSx5Q0FEbkM7QUFBQSxNQUMrRTtBQUMzRWMsd0NBQXNDQyxxQkFBcUJuQiw0QkFBckIsQ0FGMUM7O0FBSUEsTUFBSWtCLG1DQUFKLEVBQXlDO0FBQ3ZDLFFBQUlFLHdCQUF3QixJQUFJQyxNQUFKLENBQVdyQiw0QkFBWCxDQUE1QjtBQUFBLFFBQ0lELFVBQVUsQ0FDUixFQUFFdUIsVUFBV0YscUJBQWIsRUFEUSxDQURkOztBQUtBbkIsWUFBUU4sV0FBVzRCLFdBQVgsQ0FBdUJ4QixPQUF2QixDQUFSOztBQUVBRCx5Q0FBcUMwQixXQUFyQyxDQUFpRCxPQUFqRDtBQUNELEdBVEQsTUFTTztBQUNMMUIseUNBQXFDMkIsUUFBckMsQ0FBOEMsT0FBOUM7O0FBRUF4QixZQUFRLElBQVI7QUFDRDtBQUNGOztBQUVELFNBQVNXLFlBQVQsR0FBd0I7QUFDdEIsTUFBSVQsdUJBQXVCUCxRQUFROEIsdUJBQVIsRUFBM0I7QUFBQSxNQUNJdEIsNENBQTRDTixxQ0FBcUNtQixRQUFyQyxFQURoRDtBQUFBLE1BRUlsQixVQUFVSSxvQkFGZDtBQUFBLE1BRW9DO0FBQ2hDSCxpQ0FBK0JJLHlDQUhuQztBQUFBLE1BRzhFO0FBQzFFdUIsMEJBQXdCLEVBSjVCOztBQU1BL0IsVUFBUWdCLFlBQVIsQ0FBcUJiLE9BQXJCLEVBQThCQyw0QkFBOUIsRUFBNEQyQixxQkFBNUQ7QUFDRDs7QUFFRCxTQUFTUixvQkFBVCxDQUE4QlMsYUFBOUIsRUFBNkM7QUFDM0MsTUFBSUMsUUFBUSxJQUFaOztBQUVBLE1BQUk7QUFDRixRQUFJUixNQUFKLENBQVdPLGFBQVg7QUFDRCxHQUZELENBR0EsT0FBT0UsS0FBUCxFQUFjO0FBQ1pELFlBQVEsS0FBUjtBQUNEOztBQUVELFNBQU9BLEtBQVA7QUFDRCIsImZpbGUiOiJiYXNpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIFRleHRBcmVhID0gZWFzeXVpLlRleHRBcmVhO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgQmFzaWNMZXhlciA9IGxleGVycy5CYXNpY0xleGVyO1xuXG52YXIgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKTtcblxudmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3Rlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4nLFxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYSA9IG5ldyBUZXh0QXJlYSh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFTZWxlY3Rvcik7XG5cbnZhciBncmFtbWFyID0gYFxuXG4gICAgICBleHByICAgICAgICAgICAgICAgICAgICAgICA6Oj0gdGVybSBvcGVyYXRvclRoZW5UZXJtKlxuICAgICAgXG4gICAgICBvcGVyYXRvclRoZW5UZXJtICAgICAgICAgICA6Oj0gb3BlcmF0b3IgdGVybVxuICAgICAgXG4gICAgICBvcGVyYXRvciAgICAgICAgICAgICAgICAgICA6Oj0gKyB8IC0gfCAqIHwgL1xuICAgICAgXG4gICAgICB0ZXJtICAgICAgICAgICAgICAgICAgICAgICA6Oj0gbmF0dXJhbE51bWJlclxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcGFyZW50aGVzaXplZEV4cHJcbiAgICAgIFxuICAgICAgbmF0dXJhbE51bWJlciAgICAgICAgICAgICAgOjo9IC9eXFxcXGQrJC9cbiAgICAgIFxuICAgICAgcGFyZW50aGVzaXplZEV4cHIgICAgICAgICAgOjo9ICggZXhwciApXG4gICAgXG4gICAgYCxcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gYFxcXFwrfFxcXFwtfFxcXFwqfFxcXFwvfFxcXFwofFxcXFwpfFxcXFxkK2A7XG5cbnZhciBsZXhlciA9IG51bGw7XG5cbmNsYXNzIEJhc2ljRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gZ3JhbW1hciwgLy8vXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYVZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybjsgLy8vXG5cbiAgICBFeGFtcGxlLnNldEdyYW1tYXJUZXh0QXJlYVZhbHVlKGdyYW1tYXJUZXh0QXJlYVZhbHVlKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5zZXRWYWx1ZSh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSk7XG5cbiAgICB1cGRhdGUoKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgRXhhbXBsZS5vbkdyYW1tYXJUZXh0QXJlYUNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgRXhhbXBsZS5vbkNvbnRlbnRUZXh0QXJlYUNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgdXBkYXRlTGV4ZXIoKTtcbiAgdXBkYXRlUGFyc2VyKCk7XG5cbiAgaWYgKGxleGVyICE9PSBudWxsKSB7XG4gICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUobGV4ZXIpO1xuICB9IGVsc2Uge1xuICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWUoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlTGV4ZXIoKSB7XG4gIHZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYVZhbHVlLCAgLy8vXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSXNWYWxpZCA9IHJlZ0V4cFBhdHRlcm5Jc1ZhbGlkKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4pO1xuXG4gIGlmICh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSXNWYWxpZCkge1xuICAgIHZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAgPSBuZXcgUmVnRXhwKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4pLFxuICAgICAgICBncmFtbWFyID0gW1xuICAgICAgICAgIHsgdGVybWluYWwgOiB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAgfVxuICAgICAgICBdO1xuXG4gICAgbGV4ZXIgPSBCYXNpY0xleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICB9IGVsc2Uge1xuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgIGxleGVyID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQYXJzZXIoKSB7XG4gIHZhciBncmFtbWFyVGV4dEFyZWFWYWx1ZSA9IEV4YW1wbGUuZ2V0R3JhbW1hclRleHRBcmVhVmFsdWUoKSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYVZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhLmdldFZhbHVlKCksXG4gICAgICBncmFtbWFyID0gZ3JhbW1hclRleHRBcmVhVmFsdWUsIC8vL1xuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYVZhbHVlLCAvLy9cbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IFtdO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VyKGdyYW1tYXIsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIHNpZ25pZmljYW50VG9rZW5UeXBlcyk7XG59XG5cbmZ1bmN0aW9uIHJlZ0V4cFBhdHRlcm5Jc1ZhbGlkKHJlZ0V4cFBhdHRlcm4pIHtcbiAgdmFyIHZhbGlkID0gdHJ1ZTtcblxuICB0cnkge1xuICAgIG5ldyBSZWdFeHAocmVnRXhwUGF0dGVybik7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFsaWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZDtcbn1cbiJdfQ==