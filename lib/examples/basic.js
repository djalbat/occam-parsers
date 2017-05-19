'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var BasicParser = require('../basic/parser'),
    Example = require('../example');

var Textarea = easy.Textarea,
    BasicLexer = lexers.BasicLexer;


var terminalSymbolsRegExpPatternTextareaSelector = '#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPattern = '\\+|\\-|\\*|\\/|\\(|\\)|\\d+',
    grammar = '\n  \n    expression                 ::= term operatorThenTerm*\n    \n    operatorThenTerm           ::= operator term\n    \n    operator                   ::= \'+\' | \'-\' | \'*\' | \'/\'\n    \n    term                       ::= naturalNumber | parenthesizedExpression\n    \n    naturalNumber              ::= /^\\d+$/\n    \n    parenthesizedExpression    ::= \'(\' expression \')\'\n          \n      ';

var terminalSymbolsRegExpPatternTextarea = void 0,
    basicLexer = null,
    basicParser = null;

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      terminalSymbolsRegExpPatternTextarea = new Textarea(terminalSymbolsRegExpPatternTextareaSelector);

      var grammarTextareaValue = grammar,
          ///
      terminalSymbolsRegExpPatternTextareaValue = terminalSymbolsRegExpPattern; ///

      Example.setGrammarTextareaValue(grammarTextareaValue);

      terminalSymbolsRegExpPatternTextarea.setValue(terminalSymbolsRegExpPatternTextareaValue);

      terminalSymbolsRegExpPatternTextarea.onKeyUp(update);

      Example.onGrammarTextareaKeyUp(update);

      Example.onContentTextareaKeyUp(update);

      update();
    }
  }]);

  return BasicExample;
}();

function update() {
  updateBasicLexer();
  updateBasicParser();

  if (basicLexer !== null) {
    var production = null; ///

    Example.updateParseTree(basicLexer, basicParser, production);
  } else {
    Example.clearParseTree();
  }
}

module.exports = BasicExample;

function updateBasicLexer() {
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextarea.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,
      ///
  terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

  if (terminalSymbolsRegExpPatternIsValid) {
    var terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
        terminal = terminalSymbolsRegExp,
        ///
    _grammar = [{
      terminal: terminal
    }];

    basicLexer = BasicLexer.fromGrammar(_grammar);

    terminalSymbolsRegExpPatternTextarea.removeClass('error');
  } else {
    terminalSymbolsRegExpPatternTextarea.addClass('error');

    basicLexer = null;
  }
}

function updateBasicParser() {
  var grammarTextareaValue = Example.getGrammarTextareaValue(),
      grammar = grammarTextareaValue; ///

  basicParser = BasicParser.fromGrammar(grammar);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImxleGVycyIsIkJhc2ljUGFyc2VyIiwiRXhhbXBsZSIsIlRleHRhcmVhIiwiQmFzaWNMZXhlciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVNlbGVjdG9yIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsImdyYW1tYXIiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEiLCJiYXNpY0xleGVyIiwiYmFzaWNQYXJzZXIiLCJCYXNpY0V4YW1wbGUiLCJncmFtbWFyVGV4dGFyZWFWYWx1ZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVZhbHVlIiwic2V0R3JhbW1hclRleHRhcmVhVmFsdWUiLCJzZXRWYWx1ZSIsIm9uS2V5VXAiLCJ1cGRhdGUiLCJvbkdyYW1tYXJUZXh0YXJlYUtleVVwIiwib25Db250ZW50VGV4dGFyZWFLZXlVcCIsInVwZGF0ZUJhc2ljTGV4ZXIiLCJ1cGRhdGVCYXNpY1BhcnNlciIsInByb2R1Y3Rpb24iLCJ1cGRhdGVQYXJzZVRyZWUiLCJjbGVhclBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSIsImdldFZhbHVlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQiLCJyZWdFeHBQYXR0ZXJuSXNWYWxpZCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsIlJlZ0V4cCIsInRlcm1pbmFsIiwiZnJvbUdyYW1tYXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZ2V0R3JhbW1hclRleHRhcmVhVmFsdWUiLCJyZWdFeHBQYXR0ZXJuIiwidmFsaWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxjQUFSLENBRGY7O0FBR0EsSUFBTUUsY0FBY0YsUUFBUSxpQkFBUixDQUFwQjtBQUFBLElBQ01HLFVBQVVILFFBQVEsWUFBUixDQURoQjs7QUFHTSxJQUFFSSxRQUFGLEdBQWVMLElBQWYsQ0FBRUssUUFBRjtBQUFBLElBQ0VDLFVBREYsR0FDaUJKLE1BRGpCLENBQ0VJLFVBREY7OztBQUdOLElBQU1DLCtDQUErQywrQkFBckQ7QUFBQSxJQUNNQyw2REFETjtBQUFBLElBRU1DLHFhQUZOOztBQWtCQSxJQUFJQyw2Q0FBSjtBQUFBLElBQ0lDLGFBQWEsSUFEakI7QUFBQSxJQUVJQyxjQUFjLElBRmxCOztJQUlNQyxZOzs7Ozs7OzBCQUNTO0FBQ1hILDZDQUF1QyxJQUFJTCxRQUFKLENBQWFFLDRDQUFiLENBQXZDOztBQUVBLFVBQU1PLHVCQUF1QkwsT0FBN0I7QUFBQSxVQUFzQztBQUNoQ00sa0RBQTRDUCw0QkFEbEQsQ0FIVyxDQUlxRTs7QUFFaEZKLGNBQVFZLHVCQUFSLENBQWdDRixvQkFBaEM7O0FBRUFKLDJDQUFxQ08sUUFBckMsQ0FBOENGLHlDQUE5Qzs7QUFFQUwsMkNBQXFDUSxPQUFyQyxDQUE2Q0MsTUFBN0M7O0FBRUFmLGNBQVFnQixzQkFBUixDQUErQkQsTUFBL0I7O0FBRUFmLGNBQVFpQixzQkFBUixDQUErQkYsTUFBL0I7O0FBRUFBO0FBQ0Q7Ozs7OztBQUdILFNBQVNBLE1BQVQsR0FBa0I7QUFDaEJHO0FBQ0FDOztBQUVBLE1BQUlaLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkIsUUFBTWEsYUFBYSxJQUFuQixDQUR1QixDQUNHOztBQUUxQnBCLFlBQVFxQixlQUFSLENBQXdCZCxVQUF4QixFQUFvQ0MsV0FBcEMsRUFBaURZLFVBQWpEO0FBQ0QsR0FKRCxNQUlPO0FBQ0xwQixZQUFRc0IsY0FBUjtBQUNEO0FBQ0Y7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUJmLFlBQWpCOztBQUVBLFNBQVNTLGdCQUFULEdBQTRCO0FBQzFCLE1BQU1PLHlDQUF5Q25CLHFDQUFxQ29CLFFBQXJDLEVBQS9DO0FBQUEsTUFDTXRCLCtCQUErQnFCLHNDQURyQztBQUFBLE1BQzhFO0FBQ3hFRSx3Q0FBc0NDLHFCQUFxQnhCLDRCQUFyQixDQUY1Qzs7QUFJQSxNQUFJdUIsbUNBQUosRUFBeUM7QUFDdkMsUUFBTUUsd0JBQXdCLElBQUlDLE1BQUosQ0FBVzFCLDRCQUFYLENBQTlCO0FBQUEsUUFDTTJCLFdBQVdGLHFCQURqQjtBQUFBLFFBQ3dDO0FBQ2xDeEIsZUFBVSxDQUFDO0FBQ1QwQixnQkFBV0E7QUFERixLQUFELENBRmhCOztBQU1BeEIsaUJBQWFMLFdBQVc4QixXQUFYLENBQXVCM0IsUUFBdkIsQ0FBYjs7QUFFQUMseUNBQXFDMkIsV0FBckMsQ0FBaUQsT0FBakQ7QUFDRCxHQVZELE1BVU87QUFDTDNCLHlDQUFxQzRCLFFBQXJDLENBQThDLE9BQTlDOztBQUVBM0IsaUJBQWEsSUFBYjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1ksaUJBQVQsR0FBNkI7QUFDM0IsTUFBTVQsdUJBQXVCVixRQUFRbUMsdUJBQVIsRUFBN0I7QUFBQSxNQUNNOUIsVUFBVUssb0JBRGhCLENBRDJCLENBRVc7O0FBRXRDRixnQkFBY1QsWUFBWWlDLFdBQVosQ0FBd0IzQixPQUF4QixDQUFkO0FBQ0Q7O0FBRUQsU0FBU3VCLG9CQUFULENBQThCUSxhQUE5QixFQUE2QztBQUMzQyxNQUFJQyxRQUFRLElBQVo7O0FBRUEsTUFBSTtBQUNGLFFBQUlQLE1BQUosQ0FBV00sYUFBWDtBQUNELEdBRkQsQ0FHQSxPQUFPRSxLQUFQLEVBQWM7QUFDWkQsWUFBUSxLQUFSO0FBQ0Q7O0FBRUQsU0FBT0EsS0FBUDtBQUNEIiwiZmlsZSI6ImJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEJhc2ljUGFyc2VyID0gcmVxdWlyZSgnLi4vYmFzaWMvcGFyc2VyJyksXG4gICAgICBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBCYXNpY0xleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVNlbGVjdG9yID0gJyN0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuJyxcbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBgXFxcXCt8XFxcXC18XFxcXCp8XFxcXC98XFxcXCh8XFxcXCl8XFxcXGQrYCxcbiAgICAgIGdyYW1tYXIgPSBgXG4gIFxuICAgIGV4cHJlc3Npb24gICAgICAgICAgICAgICAgIDo6PSB0ZXJtIG9wZXJhdG9yVGhlblRlcm0qXG4gICAgXG4gICAgb3BlcmF0b3JUaGVuVGVybSAgICAgICAgICAgOjo9IG9wZXJhdG9yIHRlcm1cbiAgICBcbiAgICBvcGVyYXRvciAgICAgICAgICAgICAgICAgICA6Oj0gJysnIHwgJy0nIHwgJyonIHwgJy8nXG4gICAgXG4gICAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgOjo9IG5hdHVyYWxOdW1iZXIgfCBwYXJlbnRoZXNpemVkRXhwcmVzc2lvblxuICAgIFxuICAgIG5hdHVyYWxOdW1iZXIgICAgICAgICAgICAgIDo6PSAvXlxcXFxkKyQvXG4gICAgXG4gICAgcGFyZW50aGVzaXplZEV4cHJlc3Npb24gICAgOjo9ICcoJyBleHByZXNzaW9uICcpJ1xuICAgICAgICAgIFxuICAgICAgYDtcblxubGV0IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYSxcbiAgICBiYXNpY0xleGVyID0gbnVsbCxcbiAgICBiYXNpY1BhcnNlciA9IG51bGw7XG5cbmNsYXNzIEJhc2ljRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhID0gbmV3IFRleHRhcmVhKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGdyYW1tYXJUZXh0YXJlYVZhbHVlID0gZ3JhbW1hciwgLy8vXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhVmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuOyAvLy9cblxuICAgIEV4YW1wbGUuc2V0R3JhbW1hclRleHRhcmVhVmFsdWUoZ3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLnNldFZhbHVlKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVZhbHVlKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYS5vbktleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uR3JhbW1hclRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIEV4YW1wbGUub25Db250ZW50VGV4dGFyZWFLZXlVcCh1cGRhdGUpO1xuXG4gICAgdXBkYXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICB1cGRhdGVCYXNpY0xleGVyKCk7XG4gIHVwZGF0ZUJhc2ljUGFyc2VyKCk7XG5cbiAgaWYgKGJhc2ljTGV4ZXIgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uID0gbnVsbDsgIC8vL1xuXG4gICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoYmFzaWNMZXhlciwgYmFzaWNQYXJzZXIsIHByb2R1Y3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWUoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlQmFzaWNMZXhlcigpIHtcbiAgY29uc3QgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlLCAgLy8vXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkID0gcmVnRXhwUGF0dGVybklzVmFsaWQodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybik7XG5cbiAgaWYgKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkKSB7XG4gICAgY29uc3QgdGVybWluYWxTeW1ib2xzUmVnRXhwID0gbmV3IFJlZ0V4cCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKSxcbiAgICAgICAgICB0ZXJtaW5hbCA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgLy8vXG4gICAgICAgICAgZ3JhbW1hciA9IFt7XG4gICAgICAgICAgICB0ZXJtaW5hbCA6IHRlcm1pbmFsXG4gICAgICAgICAgfV07XG5cbiAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfSBlbHNlIHtcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICBiYXNpY0xleGVyID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVCYXNpY1BhcnNlcigpIHtcbiAgY29uc3QgZ3JhbW1hclRleHRhcmVhVmFsdWUgPSBFeGFtcGxlLmdldEdyYW1tYXJUZXh0YXJlYVZhbHVlKCksXG4gICAgICAgIGdyYW1tYXIgPSBncmFtbWFyVGV4dGFyZWFWYWx1ZTsgLy8vXG5cbiAgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcbn1cblxuZnVuY3Rpb24gcmVnRXhwUGF0dGVybklzVmFsaWQocmVnRXhwUGF0dGVybikge1xuICBsZXQgdmFsaWQgPSB0cnVlO1xuXG4gIHRyeSB7XG4gICAgbmV3IFJlZ0V4cChyZWdFeHBQYXR0ZXJuKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICB2YWxpZCA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkO1xufVxuIl19