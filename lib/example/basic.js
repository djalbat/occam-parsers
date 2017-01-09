'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    TextArea = easyui.TextArea;

var lexers = require('occam-lexers'),
    BasicLexer = lexers.BasicLexer;

var BasicParser = require('../basic/parser');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Jhc2ljLmpzIl0sIm5hbWVzIjpbImVhc3l1aSIsInJlcXVpcmUiLCJUZXh0QXJlYSIsImxleGVycyIsIkJhc2ljTGV4ZXIiLCJCYXNpY1BhcnNlciIsIkV4YW1wbGUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFTZWxlY3RvciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYSIsImdyYW1tYXIiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwiYmFzaWNMZXhlciIsImJhc2ljUGFyc2VyIiwiQmFzaWNFeGFtcGxlIiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSIsInNldEdyYW1tYXJUZXh0QXJlYVZhbHVlIiwic2V0VmFsdWUiLCJ1cGRhdGUiLCJvbkNoYW5nZSIsIm9uR3JhbW1hclRleHRBcmVhQ2hhbmdlIiwib25Db250ZW50VGV4dEFyZWFDaGFuZ2UiLCJ1cGRhdGVCYXNpY0xleGVyIiwidXBkYXRlQmFzaWNQYXJzZXIiLCJ1cGRhdGVQYXJzZVRyZWUiLCJjbGVhclBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSIsImdldFZhbHVlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQiLCJyZWdFeHBQYXR0ZXJuSXNWYWxpZCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsIlJlZ0V4cCIsInRlcm1pbmFsIiwiZnJvbUdyYW1tYXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZ2V0R3JhbW1hclRleHRBcmVhVmFsdWUiLCJmcm9tR3JhbW1hckFuZFRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJyZWdFeHBQYXR0ZXJuIiwidmFsaWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsV0FBV0YsT0FBT0UsUUFEdEI7O0FBR0EsSUFBSUMsU0FBU0YsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJRyxhQUFhRCxPQUFPQyxVQUR4Qjs7QUFHQSxJQUFJQyxjQUFjSixRQUFRLGlCQUFSLENBQWxCOztBQUVBLElBQUlLLFVBQVVMLFFBQVEsWUFBUixDQUFkOztBQUVBLElBQUlNLCtDQUErQyx1Q0FBbkQ7QUFBQSxJQUNJQyx1Q0FBdUMsSUFBSU4sUUFBSixDQUFhSyw0Q0FBYixDQUQzQzs7QUFHQSxJQUFJRSx5YkFBSjtBQUFBLElBaUJJQyw2REFqQko7O0FBbUJBLElBQUlDLGFBQWEsSUFBakI7QUFBQSxJQUNJQyxjQUFjLElBRGxCOztJQUdNQyxZOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBSUMsdUJBQXVCTCxPQUEzQjtBQUFBLFVBQW9DO0FBQ2hDTSxrREFBNENMLDRCQURoRCxDQURXLENBRW1FOztBQUU5RUosY0FBUVUsdUJBQVIsQ0FBZ0NGLG9CQUFoQzs7QUFFQU4sMkNBQXFDUyxRQUFyQyxDQUE4Q0YseUNBQTlDOztBQUVBRzs7QUFFQVYsMkNBQXFDVyxRQUFyQyxDQUE4QyxZQUFXO0FBQ3ZERDtBQUNELE9BRkQ7O0FBSUFaLGNBQVFjLHVCQUFSLENBQWdDLFlBQVc7QUFDekNGO0FBQ0QsT0FGRDs7QUFJQVosY0FBUWUsdUJBQVIsQ0FBZ0MsWUFBVztBQUN6Q0g7QUFDRCxPQUZEO0FBR0Q7Ozs7OztBQUdILFNBQVNBLE1BQVQsR0FBa0I7QUFDaEJJO0FBQ0FDOztBQUVBLE1BQUlaLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkJMLFlBQVFrQixlQUFSLENBQXdCYixVQUF4QixFQUFvQ0MsV0FBcEM7QUFDRCxHQUZELE1BRU87QUFDTE4sWUFBUW1CLGNBQVI7QUFDRDtBQUNGOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCZCxZQUFqQjs7QUFFQSxTQUFTUyxnQkFBVCxHQUE0QjtBQUMxQixNQUFJTSx5Q0FBeUNwQixxQ0FBcUNxQixRQUFyQyxFQUE3QztBQUFBLE1BQ0luQiwrQkFBK0JrQixzQ0FEbkM7QUFBQSxNQUM0RTtBQUN4RUUsd0NBQXNDQyxxQkFBcUJyQiw0QkFBckIsQ0FGMUM7O0FBSUEsTUFBSW9CLG1DQUFKLEVBQXlDO0FBQ3ZDLFFBQUlFLHdCQUF3QixJQUFJQyxNQUFKLENBQVd2Qiw0QkFBWCxDQUE1QjtBQUFBLFFBQ0lELFVBQVUsQ0FDUixFQUFFeUIsVUFBV0YscUJBQWIsRUFEUSxDQURkOztBQUtBckIsaUJBQWFQLFdBQVcrQixXQUFYLENBQXVCMUIsT0FBdkIsQ0FBYjs7QUFFQUQseUNBQXFDNEIsV0FBckMsQ0FBaUQsT0FBakQ7QUFDRCxHQVRELE1BU087QUFDTDVCLHlDQUFxQzZCLFFBQXJDLENBQThDLE9BQTlDOztBQUVBMUIsaUJBQWEsSUFBYjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1ksaUJBQVQsR0FBNkI7QUFDM0IsTUFBSVQsdUJBQXVCUixRQUFRZ0MsdUJBQVIsRUFBM0I7QUFBQSxNQUNJdkIsNENBQTRDUCxxQ0FBcUNxQixRQUFyQyxFQURoRDtBQUFBLE1BRUlwQixVQUFVSyxvQkFGZDtBQUFBLE1BRW9DO0FBQ2hDSixpQ0FBK0JLLHlDQUhuQyxDQUQyQixDQUltRDs7QUFFOUVILGdCQUFjUCxZQUFZa0MsMENBQVosQ0FBdUQ5QixPQUF2RCxFQUFnRUMsNEJBQWhFLENBQWQ7QUFDRDs7QUFFRCxTQUFTcUIsb0JBQVQsQ0FBOEJTLGFBQTlCLEVBQTZDO0FBQzNDLE1BQUlDLFFBQVEsSUFBWjs7QUFFQSxNQUFJO0FBQ0YsUUFBSVIsTUFBSixDQUFXTyxhQUFYO0FBQ0QsR0FGRCxDQUdBLE9BQU9FLEtBQVAsRUFBYztBQUNaRCxZQUFRLEtBQVI7QUFDRDs7QUFFRCxTQUFPQSxLQUFQO0FBQ0QiLCJmaWxlIjoiYmFzaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBUZXh0QXJlYSA9IGVhc3l1aS5UZXh0QXJlYTtcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEJhc2ljTGV4ZXIgPSBsZXhlcnMuQmFzaWNMZXhlcjtcblxudmFyIEJhc2ljUGFyc2VyID0gcmVxdWlyZSgnLi4vYmFzaWMvcGFyc2VyJyk7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpO1xuXG52YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybicsXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhID0gbmV3IFRleHRBcmVhKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYVNlbGVjdG9yKTtcblxudmFyIGdyYW1tYXIgPSBgXG5cbiAgICAgIGV4cHIgICAgICAgICAgICAgICAgICAgICAgIDo6PSB0ZXJtIG9wZXJhdG9yVGhlblRlcm0qXG4gICAgICBcbiAgICAgIG9wZXJhdG9yVGhlblRlcm0gICAgICAgICAgIDo6PSBvcGVyYXRvciB0ZXJtXG4gICAgICBcbiAgICAgIG9wZXJhdG9yICAgICAgICAgICAgICAgICAgIDo6PSArIHwgLSB8ICogfCAvXG4gICAgICBcbiAgICAgIHRlcm0gICAgICAgICAgICAgICAgICAgICAgIDo6PSBuYXR1cmFsTnVtYmVyXG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwYXJlbnRoZXNpemVkRXhwclxuICAgICAgXG4gICAgICBuYXR1cmFsTnVtYmVyICAgICAgICAgICAgICA6Oj0gL15cXFxcZCskL1xuICAgICAgXG4gICAgICBwYXJlbnRoZXNpemVkRXhwciAgICAgICAgICA6Oj0gKCBleHByIClcbiAgICBcbiAgICBgLFxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBgXFxcXCt8XFxcXC18XFxcXCp8XFxcXC98XFxcXCh8XFxcXCl8XFxcXGQrYDtcblxudmFyIGJhc2ljTGV4ZXIgPSBudWxsLFxuICAgIGJhc2ljUGFyc2VyID0gbnVsbDtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICB2YXIgZ3JhbW1hclRleHRBcmVhVmFsdWUgPSBncmFtbWFyLCAvLy9cbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhVmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuOyAvLy9cblxuICAgIEV4YW1wbGUuc2V0R3JhbW1hclRleHRBcmVhVmFsdWUoZ3JhbW1hclRleHRBcmVhVmFsdWUpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhLnNldFZhbHVlKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYVZhbHVlKTtcblxuICAgIHVwZGF0ZSgpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLm9uR3JhbW1hclRleHRBcmVhQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRBcmVhQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICB1cGRhdGVCYXNpY0xleGVyKCk7XG4gIHVwZGF0ZUJhc2ljUGFyc2VyKCk7XG5cbiAgaWYgKGJhc2ljTGV4ZXIgIT09IG51bGwpIHtcbiAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShiYXNpY0xleGVyLCBiYXNpY1BhcnNlcik7XG4gIH0gZWxzZSB7XG4gICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlO1xuXG5mdW5jdGlvbiB1cGRhdGVCYXNpY0xleGVyKCkge1xuICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSwgIC8vL1xuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQgPSByZWdFeHBQYXR0ZXJuSXNWYWxpZCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKTtcblxuICBpZiAodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQpIHtcbiAgICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwID0gbmV3IFJlZ0V4cCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKSxcbiAgICAgICAgZ3JhbW1hciA9IFtcbiAgICAgICAgICB7IHRlcm1pbmFsIDogdGVybWluYWxTeW1ib2xzUmVnRXhwIH1cbiAgICAgICAgXTtcblxuICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRBcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICB9IGVsc2Uge1xuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgIGJhc2ljTGV4ZXIgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJhc2ljUGFyc2VyKCkge1xuICB2YXIgZ3JhbW1hclRleHRBcmVhVmFsdWUgPSBFeGFtcGxlLmdldEdyYW1tYXJUZXh0QXJlYVZhbHVlKCksXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgZ3JhbW1hciA9IGdyYW1tYXJUZXh0QXJlYVZhbHVlLCAvLy9cbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dEFyZWFWYWx1ZTsgLy8vXG5cbiAgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tR3JhbW1hckFuZFRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oZ3JhbW1hciwgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybik7XG59XG5cbmZ1bmN0aW9uIHJlZ0V4cFBhdHRlcm5Jc1ZhbGlkKHJlZ0V4cFBhdHRlcm4pIHtcbiAgdmFyIHZhbGlkID0gdHJ1ZTtcblxuICB0cnkge1xuICAgIG5ldyBSZWdFeHAocmVnRXhwUGF0dGVybik7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFsaWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZDtcbn1cbiJdfQ==