'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    TextArea = easyui.TextArea;

var lexers = require('../../es6/occam-lexers'),
    BasicLexer = lexers.BasicLexer;

var Example = require('./example');

var terminalSymbolsRegExpPatternTextAreaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPatternTextArea = new TextArea(terminalSymbolsRegExpPatternTextAreaSelector);

var grammar = '\n    \n      expr                       ::= term operatorThenTerm*\n      \n      operatorThenTerm           ::= operator term\n      \n      operator                   ::= + | - | * | /\n      \n      term                       ::= naturalNumber\n      \n                                   | parenthesizedExpr\n      \n      naturalNumber              ::= /\\d+/\n      \n      parenthesizedExpr          ::= ( expr )\n    \n    ',
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

    Example.clearParseTree();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9iYXNpY0V4YW1wbGUuanMiXSwibmFtZXMiOlsiZWFzeXVpIiwicmVxdWlyZSIsIlRleHRBcmVhIiwibGV4ZXJzIiwiQmFzaWNMZXhlciIsIkV4YW1wbGUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFTZWxlY3RvciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYSIsImdyYW1tYXIiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwibGV4ZXIiLCJCYXNpY0V4YW1wbGUiLCJncmFtbWFyVGV4dEFyZWFWYWx1ZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYVZhbHVlIiwic2V0R3JhbW1hclRleHRBcmVhVmFsdWUiLCJzZXRWYWx1ZSIsInVwZGF0ZSIsIm9uQ2hhbmdlIiwib25HcmFtbWFyVGV4dEFyZWFDaGFuZ2UiLCJvbkNvbnRlbnRUZXh0QXJlYUNoYW5nZSIsInVwZGF0ZUxleGVyIiwidXBkYXRlUGFyc2VyIiwidXBkYXRlUGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSXNWYWxpZCIsInJlZ0V4cFBhdHRlcm5Jc1ZhbGlkIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwiUmVnRXhwIiwidGVybWluYWwiLCJmcm9tR3JhbW1hciIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjbGVhclBhcnNlVHJlZSIsImdldEdyYW1tYXJUZXh0QXJlYVZhbHVlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicmVnRXhwUGF0dGVybiIsInZhbGlkIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLFdBQVdGLE9BQU9FLFFBRHRCOztBQUdBLElBQUlDLFNBQVNGLFFBQVEsd0JBQVIsQ0FBYjtBQUFBLElBQ0lHLGFBQWFELE9BQU9DLFVBRHhCOztBQUdBLElBQUlDLFVBQVVKLFFBQVEsV0FBUixDQUFkOztBQUVBLElBQUlLLCtDQUErQyx1Q0FBbkQ7QUFBQSxJQUNJQyx1Q0FBdUMsSUFBSUwsUUFBSixDQUFhSSw0Q0FBYixDQUQzQzs7QUFHQSxJQUFJRSwyYkFBSjtBQUFBLElBaUJJQyw2REFqQko7O0FBbUJBLElBQUlDLFFBQVEsSUFBWjs7SUFFTUMsWTs7Ozs7OzswQkFDUztBQUNYLFVBQUlDLHVCQUF1QkosT0FBM0I7QUFBQSxVQUFvQztBQUNoQ0ssa0RBQTRDSiw0QkFEaEQsQ0FEVyxDQUVtRTs7QUFFOUVKLGNBQVFTLHVCQUFSLENBQWdDRixvQkFBaEM7O0FBRUFMLDJDQUFxQ1EsUUFBckMsQ0FBOENGLHlDQUE5Qzs7QUFFQUc7O0FBRUFULDJDQUFxQ1UsUUFBckMsQ0FBOEMsWUFBVztBQUN2REQ7QUFDRCxPQUZEOztBQUlBWCxjQUFRYSx1QkFBUixDQUFnQyxZQUFXO0FBQ3pDRjtBQUNELE9BRkQ7O0FBSUFYLGNBQVFjLHVCQUFSLENBQWdDLFlBQVc7QUFDekNIO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHSCxTQUFTQSxNQUFULEdBQWtCO0FBQ2hCSTtBQUNBQzs7QUFFQSxNQUFJWCxVQUFVLElBQWQsRUFBb0I7QUFDbEJMLFlBQVFpQixlQUFSLENBQXdCWixLQUF4QjtBQUNEO0FBQ0Y7O0FBRURhLE9BQU9DLE9BQVAsR0FBaUJiLFlBQWpCOztBQUVBLFNBQVNTLFdBQVQsR0FBdUI7QUFDckIsTUFBSUsseUNBQXlDbEIscUNBQXFDbUIsUUFBckMsRUFBN0M7QUFBQSxNQUNJakIsK0JBQStCZ0Isc0NBRG5DO0FBQUEsTUFDNEU7QUFDeEVFLHdDQUFzQ0MscUJBQXFCbkIsNEJBQXJCLENBRjFDOztBQUlBLE1BQUlrQixtQ0FBSixFQUF5QztBQUN2QyxRQUFJRSx3QkFBd0IsSUFBSUMsTUFBSixDQUFXckIsNEJBQVgsQ0FBNUI7QUFBQSxRQUNJRCxVQUFVLENBQ1IsRUFBRXVCLFVBQVdGLHFCQUFiLEVBRFEsQ0FEZDs7QUFLQW5CLFlBQVFOLFdBQVc0QixXQUFYLENBQXVCeEIsT0FBdkIsQ0FBUjs7QUFFQUQseUNBQXFDMEIsV0FBckMsQ0FBaUQsT0FBakQ7QUFDRCxHQVRELE1BU087QUFDTDFCLHlDQUFxQzJCLFFBQXJDLENBQThDLE9BQTlDOztBQUVBN0IsWUFBUThCLGNBQVI7O0FBRUF6QixZQUFRLElBQVI7QUFDRDtBQUNGOztBQUVELFNBQVNXLFlBQVQsR0FBd0I7QUFDdEIsTUFBSVQsdUJBQXVCUCxRQUFRK0IsdUJBQVIsRUFBM0I7QUFBQSxNQUNJWCx5Q0FBeUNsQixxQ0FBcUNtQixRQUFyQyxFQUQ3QztBQUFBLE1BRUlsQixVQUFVSSxvQkFGZDtBQUFBLE1BRW9DO0FBQ2hDSCxpQ0FBK0JnQixzQ0FIbkM7QUFBQSxNQUcyRTtBQUN2RVksMEJBQXdCakMsV0FBV2lDLHFCQUFYLEVBSjVCOztBQU1BaEMsVUFBUWdCLFlBQVIsQ0FBcUJiLE9BQXJCLEVBQThCQyw0QkFBOUIsRUFBNEQ0QixxQkFBNUQ7QUFDRDs7QUFFRCxTQUFTVCxvQkFBVCxDQUE4QlUsYUFBOUIsRUFBNkM7QUFDM0MsTUFBSUMsUUFBUSxJQUFaOztBQUVBLE1BQUk7QUFDRixRQUFJVCxNQUFKLENBQVdRLGFBQVg7QUFDRCxHQUZELENBR0EsT0FBT0UsS0FBUCxFQUFjO0FBQ1pELFlBQVEsS0FBUjtBQUNEOztBQUVELFNBQU9BLEtBQVA7QUFDRCIsImZpbGUiOiJiYXNpY0V4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBUZXh0QXJlYSA9IGVhc3l1aS5UZXh0QXJlYTtcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJy4uLy4uL2VzNi9vY2NhbS1sZXhlcnMnKSxcbiAgICBCYXNpY0xleGVyID0gbGV4ZXJzLkJhc2ljTGV4ZXI7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlJyk7XG5cbnZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSN0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuJyxcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhU2VsZWN0b3IpO1xuXG52YXIgZ3JhbW1hciA9IGBcbiAgICBcbiAgICAgIGV4cHIgICAgICAgICAgICAgICAgICAgICAgIDo6PSB0ZXJtIG9wZXJhdG9yVGhlblRlcm0qXG4gICAgICBcbiAgICAgIG9wZXJhdG9yVGhlblRlcm0gICAgICAgICAgIDo6PSBvcGVyYXRvciB0ZXJtXG4gICAgICBcbiAgICAgIG9wZXJhdG9yICAgICAgICAgICAgICAgICAgIDo6PSArIHwgLSB8ICogfCAvXG4gICAgICBcbiAgICAgIHRlcm0gICAgICAgICAgICAgICAgICAgICAgIDo6PSBuYXR1cmFsTnVtYmVyXG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwYXJlbnRoZXNpemVkRXhwclxuICAgICAgXG4gICAgICBuYXR1cmFsTnVtYmVyICAgICAgICAgICAgICA6Oj0gL1xcXFxkKy9cbiAgICAgIFxuICAgICAgcGFyZW50aGVzaXplZEV4cHIgICAgICAgICAgOjo9ICggZXhwciApXG4gICAgXG4gICAgYCxcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gYFxcXFwrfFxcXFwtfFxcXFwqfFxcXFwvfFxcXFwofFxcXFwpfFxcXFxkK2A7XG5cbnZhciBsZXhlciA9IG51bGw7XG5cbmNsYXNzIEJhc2ljRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gZ3JhbW1hciwgLy8vXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYVZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybjsgLy8vXG5cbiAgICBFeGFtcGxlLnNldEdyYW1tYXJUZXh0QXJlYVZhbHVlKGdyYW1tYXJUZXh0QXJlYVZhbHVlKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5zZXRWYWx1ZSh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSk7XG5cbiAgICB1cGRhdGUoKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgRXhhbXBsZS5vbkdyYW1tYXJUZXh0QXJlYUNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgRXhhbXBsZS5vbkNvbnRlbnRUZXh0QXJlYUNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgdXBkYXRlTGV4ZXIoKTtcbiAgdXBkYXRlUGFyc2VyKCk7XG5cbiAgaWYgKGxleGVyICE9PSBudWxsKSB7XG4gICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUobGV4ZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlO1xuXG5mdW5jdGlvbiB1cGRhdGVMZXhlcigpIHtcbiAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhLmdldFZhbHVlKCksXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUsICAvLy9cbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkID0gcmVnRXhwUGF0dGVybklzVmFsaWQodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybik7XG5cbiAgaWYgKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkKSB7XG4gICAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCA9IG5ldyBSZWdFeHAodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiksXG4gICAgICAgIGdyYW1tYXIgPSBbXG4gICAgICAgICAgeyB0ZXJtaW5hbCA6IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCB9XG4gICAgICAgIF07XG5cbiAgICBsZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gIH0gZWxzZSB7XG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgbGV4ZXIgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhcnNlcigpIHtcbiAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gRXhhbXBsZS5nZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSgpLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgIGdyYW1tYXIgPSBncmFtbWFyVGV4dEFyZWFWYWx1ZSwgLy8vXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUsIC8vL1xuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gQmFzaWNMZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXMoKTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihncmFtbWFyLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMpO1xufVxuXG5mdW5jdGlvbiByZWdFeHBQYXR0ZXJuSXNWYWxpZChyZWdFeHBQYXR0ZXJuKSB7XG4gIHZhciB2YWxpZCA9IHRydWU7XG5cbiAgdHJ5IHtcbiAgICBuZXcgUmVnRXhwKHJlZ0V4cFBhdHRlcm4pO1xuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHZhbGlkID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdmFsaWQ7XG59XG4iXX0=