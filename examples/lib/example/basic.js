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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Jhc2ljLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJUZXh0QXJlYSIsImxleGVycyIsIkJhc2ljTGV4ZXIiLCJFeGFtcGxlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhU2VsZWN0b3IiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEiLCJncmFtbWFyIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsImxleGVyIiwiQmFzaWNFeGFtcGxlIiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSIsInNldEdyYW1tYXJUZXh0QXJlYVZhbHVlIiwic2V0VmFsdWUiLCJ1cGRhdGUiLCJvbkNoYW5nZSIsIm9uR3JhbW1hclRleHRBcmVhQ2hhbmdlIiwib25Db250ZW50VGV4dEFyZWFDaGFuZ2UiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsInVwZGF0ZVBhcnNlVHJlZSIsImNsZWFyUGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSXNWYWxpZCIsInJlZ0V4cFBhdHRlcm5Jc1ZhbGlkIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwiUmVnRXhwIiwidGVybWluYWwiLCJmcm9tR3JhbW1hciIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJnZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZ0V4cFBhdHRlcm4iLCJ2YWxpZCIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0Qjs7QUFHQSxJQUFJQyxTQUFTRixRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lHLGFBQWFELE9BQU9DLFVBRHhCOztBQUdBLElBQUlDLFVBQVVKLFFBQVEsWUFBUixDQUFkOztBQUVBLElBQUlLLCtDQUErQyx1Q0FBbkQ7QUFBQSxJQUNJQyx1Q0FBdUMsSUFBSUwsUUFBSixDQUFhSSw0Q0FBYixDQUQzQzs7QUFHQSxJQUFJRSx5YkFBSjtBQUFBLElBaUJJQyw2REFqQko7O0FBbUJBLElBQUlDLFFBQVEsSUFBWjs7SUFFTUMsWTs7Ozs7OzswQkFDUztBQUNYLFVBQUlDLHVCQUF1QkosT0FBM0I7QUFBQSxVQUFvQztBQUNoQ0ssa0RBQTRDSiw0QkFEaEQsQ0FEVyxDQUVtRTs7QUFFOUVKLGNBQVFTLHVCQUFSLENBQWdDRixvQkFBaEM7O0FBRUFMLDJDQUFxQ1EsUUFBckMsQ0FBOENGLHlDQUE5Qzs7QUFFQUc7O0FBRUFULDJDQUFxQ1UsUUFBckMsQ0FBOEMsWUFBVztBQUN2REQ7QUFDRCxPQUZEOztBQUlBWCxjQUFRYSx1QkFBUixDQUFnQyxZQUFXO0FBQ3pDRjtBQUNELE9BRkQ7O0FBSUFYLGNBQVFjLHVCQUFSLENBQWdDLFlBQVc7QUFDekNIO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHSCxTQUFTQSxNQUFULEdBQWtCO0FBQ2hCSTtBQUNBQzs7QUFFQSxNQUFJWCxVQUFVLElBQWQsRUFBb0I7QUFDbEJMLFlBQVFpQixlQUFSLENBQXdCWixLQUF4QjtBQUNELEdBRkQsTUFFTztBQUNMTCxZQUFRa0IsY0FBUjtBQUNEO0FBQ0Y7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUJkLFlBQWpCOztBQUVBLFNBQVNTLFdBQVQsR0FBdUI7QUFDckIsTUFBSU0seUNBQXlDbkIscUNBQXFDb0IsUUFBckMsRUFBN0M7QUFBQSxNQUNJbEIsK0JBQStCaUIsc0NBRG5DO0FBQUEsTUFDNEU7QUFDeEVFLHdDQUFzQ0MscUJBQXFCcEIsNEJBQXJCLENBRjFDOztBQUlBLE1BQUltQixtQ0FBSixFQUF5QztBQUN2QyxRQUFJRSx3QkFBd0IsSUFBSUMsTUFBSixDQUFXdEIsNEJBQVgsQ0FBNUI7QUFBQSxRQUNJRCxVQUFVLENBQ1IsRUFBRXdCLFVBQVdGLHFCQUFiLEVBRFEsQ0FEZDs7QUFLQXBCLFlBQVFOLFdBQVc2QixXQUFYLENBQXVCekIsT0FBdkIsQ0FBUjs7QUFFQUQseUNBQXFDMkIsV0FBckMsQ0FBaUQsT0FBakQ7QUFDRCxHQVRELE1BU087QUFDTDNCLHlDQUFxQzRCLFFBQXJDLENBQThDLE9BQTlDOztBQUVBekIsWUFBUSxJQUFSO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTVyxZQUFULEdBQXdCO0FBQ3RCLE1BQUlULHVCQUF1QlAsUUFBUStCLHVCQUFSLEVBQTNCO0FBQUEsTUFDSVYseUNBQXlDbkIscUNBQXFDb0IsUUFBckMsRUFEN0M7QUFBQSxNQUVJbkIsVUFBVUksb0JBRmQ7QUFBQSxNQUVvQztBQUNoQ0gsaUNBQStCaUIsc0NBSG5DO0FBQUEsTUFHMkU7QUFDdkVXLDBCQUF3QmpDLFdBQVdpQyxxQkFBWCxFQUo1Qjs7QUFNQWhDLFVBQVFnQixZQUFSLENBQXFCYixPQUFyQixFQUE4QkMsNEJBQTlCLEVBQTRENEIscUJBQTVEO0FBQ0Q7O0FBRUQsU0FBU1Isb0JBQVQsQ0FBOEJTLGFBQTlCLEVBQTZDO0FBQzNDLE1BQUlDLFFBQVEsSUFBWjs7QUFFQSxNQUFJO0FBQ0YsUUFBSVIsTUFBSixDQUFXTyxhQUFYO0FBQ0QsR0FGRCxDQUdBLE9BQU9FLEtBQVAsRUFBYztBQUNaRCxZQUFRLEtBQVI7QUFDRDs7QUFFRCxTQUFPQSxLQUFQO0FBQ0QiLCJmaWxlIjoiYmFzaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBUZXh0QXJlYSA9IGVhc3l1aS5UZXh0QXJlYTtcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEJhc2ljTGV4ZXIgPSBsZXhlcnMuQmFzaWNMZXhlcjtcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyk7XG5cbnZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSN0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuJyxcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEgPSBuZXcgVGV4dEFyZWEodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhU2VsZWN0b3IpO1xuXG52YXIgZ3JhbW1hciA9IGBcblxuICAgICAgZXhwciAgICAgICAgICAgICAgICAgICAgICAgOjo9IHRlcm0gb3BlcmF0b3JUaGVuVGVybSpcbiAgICAgIFxuICAgICAgb3BlcmF0b3JUaGVuVGVybSAgICAgICAgICAgOjo9IG9wZXJhdG9yIHRlcm1cbiAgICAgIFxuICAgICAgb3BlcmF0b3IgICAgICAgICAgICAgICAgICAgOjo9ICsgfCAtIHwgKiB8IC9cbiAgICAgIFxuICAgICAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgOjo9IG5hdHVyYWxOdW1iZXJcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBhcmVudGhlc2l6ZWRFeHByXG4gICAgICBcbiAgICAgIG5hdHVyYWxOdW1iZXIgICAgICAgICAgICAgIDo6PSAvXlxcXFxkKyQvXG4gICAgICBcbiAgICAgIHBhcmVudGhlc2l6ZWRFeHByICAgICAgICAgIDo6PSAoIGV4cHIgKVxuICAgIFxuICAgIGAsXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGBcXFxcK3xcXFxcLXxcXFxcKnxcXFxcL3xcXFxcKHxcXFxcKXxcXFxcZCtgO1xuXG52YXIgbGV4ZXIgPSBudWxsO1xuXG5jbGFzcyBCYXNpY0V4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIHZhciBncmFtbWFyVGV4dEFyZWFWYWx1ZSA9IGdyYW1tYXIsIC8vL1xuICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm47IC8vL1xuXG4gICAgRXhhbXBsZS5zZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZShncmFtbWFyVGV4dEFyZWFWYWx1ZSk7XG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEuc2V0VmFsdWUodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhVmFsdWUpO1xuXG4gICAgdXBkYXRlKCk7XG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUub25HcmFtbWFyVGV4dEFyZWFDaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUub25Db250ZW50VGV4dEFyZWFDaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIHVwZGF0ZUxleGVyKCk7XG4gIHVwZGF0ZVBhcnNlcigpO1xuXG4gIGlmIChsZXhlciAhPT0gbnVsbCkge1xuICAgIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGxleGVyKTtcbiAgfSBlbHNlIHtcbiAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZUxleGVyKCkge1xuICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSwgIC8vL1xuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQgPSByZWdFeHBQYXR0ZXJuSXNWYWxpZCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKTtcblxuICBpZiAodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQpIHtcbiAgICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwID0gbmV3IFJlZ0V4cCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKSxcbiAgICAgICAgZ3JhbW1hciA9IFtcbiAgICAgICAgICB7IHRlcm1pbmFsIDogdGVybWluYWxTeW1ib2xzUmVnRXhwIH1cbiAgICAgICAgXTtcblxuICAgIGxleGVyID0gQmFzaWNMZXhlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfSBlbHNlIHtcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICBsZXhlciA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUGFyc2VyKCkge1xuICB2YXIgZ3JhbW1hclRleHRBcmVhVmFsdWUgPSBFeGFtcGxlLmdldEdyYW1tYXJUZXh0QXJlYVZhbHVlKCksXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgZ3JhbW1hciA9IGdyYW1tYXJUZXh0QXJlYVZhbHVlLCAvLy9cbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSwgLy8vXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBCYXNpY0xleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VyKGdyYW1tYXIsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIHNpZ25pZmljYW50VG9rZW5UeXBlcyk7XG59XG5cbmZ1bmN0aW9uIHJlZ0V4cFBhdHRlcm5Jc1ZhbGlkKHJlZ0V4cFBhdHRlcm4pIHtcbiAgdmFyIHZhbGlkID0gdHJ1ZTtcblxuICB0cnkge1xuICAgIG5ldyBSZWdFeHAocmVnRXhwUGF0dGVybik7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFsaWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZDtcbn1cbiJdfQ==