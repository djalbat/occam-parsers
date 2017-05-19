'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var BasicParser = require('../basic/parser'),
    Example = require('../example');

var Textarea = easy.Textarea,
    BasicLexer = lexers.BasicLexer;


var terminalSymbolsRegExpPatternTextareaSelector = 'textarea#terminalSymbolsRegExpPattern',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImxleGVycyIsIkJhc2ljUGFyc2VyIiwiRXhhbXBsZSIsIlRleHRhcmVhIiwiQmFzaWNMZXhlciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVNlbGVjdG9yIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsImdyYW1tYXIiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEiLCJiYXNpY0xleGVyIiwiYmFzaWNQYXJzZXIiLCJCYXNpY0V4YW1wbGUiLCJncmFtbWFyVGV4dGFyZWFWYWx1ZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVZhbHVlIiwic2V0R3JhbW1hclRleHRhcmVhVmFsdWUiLCJzZXRWYWx1ZSIsIm9uS2V5VXAiLCJ1cGRhdGUiLCJvbkdyYW1tYXJUZXh0YXJlYUtleVVwIiwib25Db250ZW50VGV4dGFyZWFLZXlVcCIsInVwZGF0ZUJhc2ljTGV4ZXIiLCJ1cGRhdGVCYXNpY1BhcnNlciIsInByb2R1Y3Rpb24iLCJ1cGRhdGVQYXJzZVRyZWUiLCJjbGVhclBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSIsImdldFZhbHVlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQiLCJyZWdFeHBQYXR0ZXJuSXNWYWxpZCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsIlJlZ0V4cCIsInRlcm1pbmFsIiwiZnJvbUdyYW1tYXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZ2V0R3JhbW1hclRleHRhcmVhVmFsdWUiLCJyZWdFeHBQYXR0ZXJuIiwidmFsaWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxjQUFSLENBRGY7O0FBR0EsSUFBTUUsY0FBY0YsUUFBUSxpQkFBUixDQUFwQjtBQUFBLElBQ01HLFVBQVVILFFBQVEsWUFBUixDQURoQjs7QUFHTSxJQUFFSSxRQUFGLEdBQWVMLElBQWYsQ0FBRUssUUFBRjtBQUFBLElBQ0VDLFVBREYsR0FDaUJKLE1BRGpCLENBQ0VJLFVBREY7OztBQUdOLElBQU1DLCtDQUErQyx1Q0FBckQ7QUFBQSxJQUNNQyw2REFETjtBQUFBLElBRU1DLHFhQUZOOztBQWtCQSxJQUFJQyw2Q0FBSjtBQUFBLElBQ0lDLGFBQWEsSUFEakI7QUFBQSxJQUVJQyxjQUFjLElBRmxCOztJQUlNQyxZOzs7Ozs7OzBCQUNTO0FBQ1hILDZDQUF1QyxJQUFJTCxRQUFKLENBQWFFLDRDQUFiLENBQXZDOztBQUVBLFVBQU1PLHVCQUF1QkwsT0FBN0I7QUFBQSxVQUFzQztBQUNoQ00sa0RBQTRDUCw0QkFEbEQsQ0FIVyxDQUlxRTs7QUFFaEZKLGNBQVFZLHVCQUFSLENBQWdDRixvQkFBaEM7O0FBRUFKLDJDQUFxQ08sUUFBckMsQ0FBOENGLHlDQUE5Qzs7QUFFQUwsMkNBQXFDUSxPQUFyQyxDQUE2Q0MsTUFBN0M7O0FBRUFmLGNBQVFnQixzQkFBUixDQUErQkQsTUFBL0I7O0FBRUFmLGNBQVFpQixzQkFBUixDQUErQkYsTUFBL0I7O0FBRUFBO0FBQ0Q7Ozs7OztBQUdILFNBQVNBLE1BQVQsR0FBa0I7QUFDaEJHO0FBQ0FDOztBQUVBLE1BQUlaLGVBQWUsSUFBbkIsRUFBeUI7QUFDdkIsUUFBTWEsYUFBYSxJQUFuQixDQUR1QixDQUNHOztBQUUxQnBCLFlBQVFxQixlQUFSLENBQXdCZCxVQUF4QixFQUFvQ0MsV0FBcEMsRUFBaURZLFVBQWpEO0FBQ0QsR0FKRCxNQUlPO0FBQ0xwQixZQUFRc0IsY0FBUjtBQUNEO0FBQ0Y7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUJmLFlBQWpCOztBQUVBLFNBQVNTLGdCQUFULEdBQTRCO0FBQzFCLE1BQU1PLHlDQUF5Q25CLHFDQUFxQ29CLFFBQXJDLEVBQS9DO0FBQUEsTUFDTXRCLCtCQUErQnFCLHNDQURyQztBQUFBLE1BQzhFO0FBQ3hFRSx3Q0FBc0NDLHFCQUFxQnhCLDRCQUFyQixDQUY1Qzs7QUFJQSxNQUFJdUIsbUNBQUosRUFBeUM7QUFDdkMsUUFBTUUsd0JBQXdCLElBQUlDLE1BQUosQ0FBVzFCLDRCQUFYLENBQTlCO0FBQUEsUUFDTTJCLFdBQVdGLHFCQURqQjtBQUFBLFFBQ3dDO0FBQ2xDeEIsZUFBVSxDQUFDO0FBQ1QwQixnQkFBV0E7QUFERixLQUFELENBRmhCOztBQU1BeEIsaUJBQWFMLFdBQVc4QixXQUFYLENBQXVCM0IsUUFBdkIsQ0FBYjs7QUFFQUMseUNBQXFDMkIsV0FBckMsQ0FBaUQsT0FBakQ7QUFDRCxHQVZELE1BVU87QUFDTDNCLHlDQUFxQzRCLFFBQXJDLENBQThDLE9BQTlDOztBQUVBM0IsaUJBQWEsSUFBYjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1ksaUJBQVQsR0FBNkI7QUFDM0IsTUFBTVQsdUJBQXVCVixRQUFRbUMsdUJBQVIsRUFBN0I7QUFBQSxNQUNNOUIsVUFBVUssb0JBRGhCLENBRDJCLENBRVc7O0FBRXRDRixnQkFBY1QsWUFBWWlDLFdBQVosQ0FBd0IzQixPQUF4QixDQUFkO0FBQ0Q7O0FBRUQsU0FBU3VCLG9CQUFULENBQThCUSxhQUE5QixFQUE2QztBQUMzQyxNQUFJQyxRQUFRLElBQVo7O0FBRUEsTUFBSTtBQUNGLFFBQUlQLE1BQUosQ0FBV00sYUFBWDtBQUNELEdBRkQsQ0FHQSxPQUFPRSxLQUFQLEVBQWM7QUFDWkQsWUFBUSxLQUFSO0FBQ0Q7O0FBRUQsU0FBT0EsS0FBUDtBQUNEIiwiZmlsZSI6ImJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEJhc2ljUGFyc2VyID0gcmVxdWlyZSgnLi4vYmFzaWMvcGFyc2VyJyksXG4gICAgICBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBCYXNpY0xleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3Rlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4nLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGBcXFxcK3xcXFxcLXxcXFxcKnxcXFxcL3xcXFxcKHxcXFxcKXxcXFxcZCtgLFxuICAgICAgZ3JhbW1hciA9IGBcbiAgXG4gICAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgICAgOjo9IHRlcm0gb3BlcmF0b3JUaGVuVGVybSpcbiAgICBcbiAgICBvcGVyYXRvclRoZW5UZXJtICAgICAgICAgICA6Oj0gb3BlcmF0b3IgdGVybVxuICAgIFxuICAgIG9wZXJhdG9yICAgICAgICAgICAgICAgICAgIDo6PSAnKycgfCAnLScgfCAnKicgfCAnLydcbiAgICBcbiAgICB0ZXJtICAgICAgICAgICAgICAgICAgICAgICA6Oj0gbmF0dXJhbE51bWJlciB8IHBhcmVudGhlc2l6ZWRFeHByZXNzaW9uXG4gICAgXG4gICAgbmF0dXJhbE51bWJlciAgICAgICAgICAgICAgOjo9IC9eXFxcXGQrJC9cbiAgICBcbiAgICBwYXJlbnRoZXNpemVkRXhwcmVzc2lvbiAgICA6Oj0gJygnIGV4cHJlc3Npb24gJyknXG4gICAgICAgICAgXG4gICAgICBgO1xuXG5sZXQgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLFxuICAgIGJhc2ljTGV4ZXIgPSBudWxsLFxuICAgIGJhc2ljUGFyc2VyID0gbnVsbDtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhU2VsZWN0b3IpO1xuXG4gICAgY29uc3QgZ3JhbW1hclRleHRhcmVhVmFsdWUgPSBncmFtbWFyLCAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWFWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm47IC8vL1xuXG4gICAgRXhhbXBsZS5zZXRHcmFtbWFyVGV4dGFyZWFWYWx1ZShncmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEuc2V0VmFsdWUodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhVmFsdWUpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLm9uS2V5VXAodXBkYXRlKTtcblxuICAgIEV4YW1wbGUub25HcmFtbWFyVGV4dGFyZWFLZXlVcCh1cGRhdGUpO1xuXG4gICAgRXhhbXBsZS5vbkNvbnRlbnRUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICB1cGRhdGUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIHVwZGF0ZUJhc2ljTGV4ZXIoKTtcbiAgdXBkYXRlQmFzaWNQYXJzZXIoKTtcblxuICBpZiAoYmFzaWNMZXhlciAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBudWxsOyAgLy8vXG5cbiAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShiYXNpY0xleGVyLCBiYXNpY1BhcnNlciwgcHJvZHVjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlO1xuXG5mdW5jdGlvbiB1cGRhdGVCYXNpY0xleGVyKCkge1xuICBjb25zdCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUsICAvLy9cbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQgPSByZWdFeHBQYXR0ZXJuSXNWYWxpZCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKTtcblxuICBpZiAodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAgPSBuZXcgUmVnRXhwKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4pLFxuICAgICAgICAgIHRlcm1pbmFsID0gdGVybWluYWxTeW1ib2xzUmVnRXhwLCAvLy9cbiAgICAgICAgICBncmFtbWFyID0gW3tcbiAgICAgICAgICAgIHRlcm1pbmFsIDogdGVybWluYWxcbiAgICAgICAgICB9XTtcblxuICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICB9IGVsc2Uge1xuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgIGJhc2ljTGV4ZXIgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJhc2ljUGFyc2VyKCkge1xuICBjb25zdCBncmFtbWFyVGV4dGFyZWFWYWx1ZSA9IEV4YW1wbGUuZ2V0R3JhbW1hclRleHRhcmVhVmFsdWUoKSxcbiAgICAgICAgZ3JhbW1hciA9IGdyYW1tYXJUZXh0YXJlYVZhbHVlOyAvLy9cblxuICBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xufVxuXG5mdW5jdGlvbiByZWdFeHBQYXR0ZXJuSXNWYWxpZChyZWdFeHBQYXR0ZXJuKSB7XG4gIGxldCB2YWxpZCA9IHRydWU7XG5cbiAgdHJ5IHtcbiAgICBuZXcgUmVnRXhwKHJlZ0V4cFBhdHRlcm4pO1xuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHZhbGlkID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdmFsaWQ7XG59XG4iXX0=