'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var BasicParser = require('../basic/parser'),
    Example = require('../example');

var Textarea = easy.Textarea,
    BasicLexer = lexers.BasicLexer;


var terminalSymbolsRegExpPatternTextarea = void 0;

var terminalSymbolsRegExpPatternTextareaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPattern = '\\+|\\-|\\*|\\/|\\(|\\)|\\d+',
    grammar = '\n  \n  expression                 ::= term operatorThenTerm*\n  \n  operatorThenTerm           ::= operator term\n  \n  operator                   ::= \'+\' | \'-\' | \'*\' | \'/\'\n  \n  term                       ::= naturalNumber | parenthesizedExpression\n  \n  naturalNumber              ::= /^\\d+$/\n  \n  parenthesizedExpression    ::= \'(\' expression \')\'\n      \n';

var basicLexer = null,
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

      update();

      terminalSymbolsRegExpPatternTextarea.onChange(function () {
        update();
      });

      Example.onGrammarTextareaChange(function () {
        update();
      });

      Example.onContentTextareaKeyUp(function () {
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
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextarea.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,
      ///
  terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

  if (terminalSymbolsRegExpPatternIsValid) {
    var terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
        _grammar = [{
      terminal: terminalSymbolsRegExp
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImxleGVycyIsIkJhc2ljUGFyc2VyIiwiRXhhbXBsZSIsIlRleHRhcmVhIiwiQmFzaWNMZXhlciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVNlbGVjdG9yIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsImdyYW1tYXIiLCJiYXNpY0xleGVyIiwiYmFzaWNQYXJzZXIiLCJCYXNpY0V4YW1wbGUiLCJncmFtbWFyVGV4dGFyZWFWYWx1ZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVZhbHVlIiwic2V0R3JhbW1hclRleHRhcmVhVmFsdWUiLCJzZXRWYWx1ZSIsInVwZGF0ZSIsIm9uQ2hhbmdlIiwib25HcmFtbWFyVGV4dGFyZWFDaGFuZ2UiLCJvbkNvbnRlbnRUZXh0YXJlYUtleVVwIiwidXBkYXRlQmFzaWNMZXhlciIsInVwZGF0ZUJhc2ljUGFyc2VyIiwidXBkYXRlUGFyc2VUcmVlIiwiY2xlYXJQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUiLCJnZXRWYWx1ZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkIiwicmVnRXhwUGF0dGVybklzVmFsaWQiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJSZWdFeHAiLCJ0ZXJtaW5hbCIsImZyb21HcmFtbWFyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImdldEdyYW1tYXJUZXh0YXJlYVZhbHVlIiwicmVnRXhwUGF0dGVybiIsInZhbGlkIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLFNBQVNELFFBQVEsY0FBUixDQURmOztBQUdBLElBQU1FLGNBQWNGLFFBQVEsaUJBQVIsQ0FBcEI7QUFBQSxJQUNNRyxVQUFVSCxRQUFRLFlBQVIsQ0FEaEI7O0FBR00sSUFBRUksUUFBRixHQUFlTCxJQUFmLENBQUVLLFFBQUY7QUFBQSxJQUNFQyxVQURGLEdBQ2lCSixNQURqQixDQUNFSSxVQURGOzs7QUFHTixJQUFJQyw2Q0FBSjs7QUFFQSxJQUFNQywrQ0FBK0MsdUNBQXJEO0FBQUEsSUFDTUMsNkRBRE47QUFBQSxJQUVNQyxxWUFGTjs7QUFrQkEsSUFBSUMsYUFBYSxJQUFqQjtBQUFBLElBQ0lDLGNBQWMsSUFEbEI7O0lBR01DLFk7Ozs7Ozs7MEJBQ1M7QUFDWE4sNkNBQXVDLElBQUlGLFFBQUosQ0FBYUcsNENBQWIsQ0FBdkM7O0FBRUEsVUFBTU0sdUJBQXVCSixPQUE3QjtBQUFBLFVBQXNDO0FBQ2hDSyxrREFBNENOLDRCQURsRCxDQUhXLENBSXFFOztBQUVoRkwsY0FBUVksdUJBQVIsQ0FBZ0NGLG9CQUFoQzs7QUFFQVAsMkNBQXFDVSxRQUFyQyxDQUE4Q0YseUNBQTlDOztBQUVBRzs7QUFFQVgsMkNBQXFDWSxRQUFyQyxDQUE4QyxZQUFXO0FBQ3ZERDtBQUNELE9BRkQ7O0FBSUFkLGNBQVFnQix1QkFBUixDQUFnQyxZQUFXO0FBQ3pDRjtBQUNELE9BRkQ7O0FBSUFkLGNBQVFpQixzQkFBUixDQUErQixZQUFXO0FBQ3hDSDtBQUNELE9BRkQ7QUFHRDs7Ozs7O0FBR0gsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQkk7QUFDQUM7O0FBRUEsTUFBSVosZUFBZSxJQUFuQixFQUF5QjtBQUN2QlAsWUFBUW9CLGVBQVIsQ0FBd0JiLFVBQXhCLEVBQW9DQyxXQUFwQztBQUNELEdBRkQsTUFFTztBQUNMUixZQUFRcUIsY0FBUjtBQUNEO0FBQ0Y7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUJkLFlBQWpCOztBQUVBLFNBQVNTLGdCQUFULEdBQTRCO0FBQzFCLE1BQU1NLHlDQUF5Q3JCLHFDQUFxQ3NCLFFBQXJDLEVBQS9DO0FBQUEsTUFDTXBCLCtCQUErQm1CLHNDQURyQztBQUFBLE1BQzhFO0FBQ3hFRSx3Q0FBc0NDLHFCQUFxQnRCLDRCQUFyQixDQUY1Qzs7QUFJQSxNQUFJcUIsbUNBQUosRUFBeUM7QUFDdkMsUUFBTUUsd0JBQXdCLElBQUlDLE1BQUosQ0FBV3hCLDRCQUFYLENBQTlCO0FBQUEsUUFDTUMsV0FBVSxDQUFDO0FBQ1R3QixnQkFBV0Y7QUFERixLQUFELENBRGhCOztBQUtBckIsaUJBQWFMLFdBQVc2QixXQUFYLENBQXVCekIsUUFBdkIsQ0FBYjs7QUFFQUgseUNBQXFDNkIsV0FBckMsQ0FBaUQsT0FBakQ7QUFDRCxHQVRELE1BU087QUFDTDdCLHlDQUFxQzhCLFFBQXJDLENBQThDLE9BQTlDOztBQUVBMUIsaUJBQWEsSUFBYjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1ksaUJBQVQsR0FBNkI7QUFDM0IsTUFBTVQsdUJBQXVCVixRQUFRa0MsdUJBQVIsRUFBN0I7QUFBQSxNQUNNNUIsVUFBVUksb0JBRGhCLENBRDJCLENBRVc7O0FBRXRDRixnQkFBY1QsWUFBWWdDLFdBQVosQ0FBd0J6QixPQUF4QixDQUFkO0FBQ0Q7O0FBRUQsU0FBU3FCLG9CQUFULENBQThCUSxhQUE5QixFQUE2QztBQUMzQyxNQUFJQyxRQUFRLElBQVo7O0FBRUEsTUFBSTtBQUNGLFFBQUlQLE1BQUosQ0FBV00sYUFBWDtBQUNELEdBRkQsQ0FHQSxPQUFPRSxLQUFQLEVBQWM7QUFDWkQsWUFBUSxLQUFSO0FBQ0Q7O0FBRUQsU0FBT0EsS0FBUDtBQUNEIiwiZmlsZSI6ImJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEJhc2ljUGFyc2VyID0gcmVxdWlyZSgnLi4vYmFzaWMvcGFyc2VyJyksXG4gICAgICBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBCYXNpY0xleGVyIH0gPSBsZXhlcnM7XG5cbmxldCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWE7XG5cbmNvbnN0IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3Rlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4nLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGBcXFxcK3xcXFxcLXxcXFxcKnxcXFxcL3xcXFxcKHxcXFxcKXxcXFxcZCtgLFxuICAgICAgZ3JhbW1hciA9IGBcbiAgXG4gIGV4cHJlc3Npb24gICAgICAgICAgICAgICAgIDo6PSB0ZXJtIG9wZXJhdG9yVGhlblRlcm0qXG4gIFxuICBvcGVyYXRvclRoZW5UZXJtICAgICAgICAgICA6Oj0gb3BlcmF0b3IgdGVybVxuICBcbiAgb3BlcmF0b3IgICAgICAgICAgICAgICAgICAgOjo9ICcrJyB8ICctJyB8ICcqJyB8ICcvJ1xuICBcbiAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgOjo9IG5hdHVyYWxOdW1iZXIgfCBwYXJlbnRoZXNpemVkRXhwcmVzc2lvblxuICBcbiAgbmF0dXJhbE51bWJlciAgICAgICAgICAgICAgOjo9IC9eXFxcXGQrJC9cbiAgXG4gIHBhcmVudGhlc2l6ZWRFeHByZXNzaW9uICAgIDo6PSAnKCcgZXhwcmVzc2lvbiAnKSdcbiAgICAgIFxuYDtcblxubGV0IGJhc2ljTGV4ZXIgPSBudWxsLFxuICAgIGJhc2ljUGFyc2VyID0gbnVsbDtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhU2VsZWN0b3IpO1xuXG4gICAgY29uc3QgZ3JhbW1hclRleHRhcmVhVmFsdWUgPSBncmFtbWFyLCAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWFWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm47IC8vL1xuXG4gICAgRXhhbXBsZS5zZXRHcmFtbWFyVGV4dGFyZWFWYWx1ZShncmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEuc2V0VmFsdWUodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhVmFsdWUpO1xuXG4gICAgdXBkYXRlKCk7XG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUub25HcmFtbWFyVGV4dGFyZWFDaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUub25Db250ZW50VGV4dGFyZWFLZXlVcChmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgdXBkYXRlQmFzaWNMZXhlcigpO1xuICB1cGRhdGVCYXNpY1BhcnNlcigpO1xuXG4gIGlmIChiYXNpY0xleGVyICE9PSBudWxsKSB7XG4gICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoYmFzaWNMZXhlciwgYmFzaWNQYXJzZXIpO1xuICB9IGVsc2Uge1xuICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWUoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlQmFzaWNMZXhlcigpIHtcbiAgY29uc3QgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlLCAgLy8vXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkID0gcmVnRXhwUGF0dGVybklzVmFsaWQodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybik7XG5cbiAgaWYgKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkKSB7XG4gICAgY29uc3QgdGVybWluYWxTeW1ib2xzUmVnRXhwID0gbmV3IFJlZ0V4cCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKSxcbiAgICAgICAgICBncmFtbWFyID0gW3tcbiAgICAgICAgICAgIHRlcm1pbmFsIDogdGVybWluYWxTeW1ib2xzUmVnRXhwXG4gICAgICAgICAgfV07XG5cbiAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfSBlbHNlIHtcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICBiYXNpY0xleGVyID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVCYXNpY1BhcnNlcigpIHtcbiAgY29uc3QgZ3JhbW1hclRleHRhcmVhVmFsdWUgPSBFeGFtcGxlLmdldEdyYW1tYXJUZXh0YXJlYVZhbHVlKCksXG4gICAgICAgIGdyYW1tYXIgPSBncmFtbWFyVGV4dGFyZWFWYWx1ZTsgLy8vXG5cbiAgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcbn1cblxuZnVuY3Rpb24gcmVnRXhwUGF0dGVybklzVmFsaWQocmVnRXhwUGF0dGVybikge1xuICBsZXQgdmFsaWQgPSB0cnVlO1xuXG4gIHRyeSB7XG4gICAgbmV3IFJlZ0V4cChyZWdFeHBQYXR0ZXJuKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICB2YWxpZCA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkO1xufVxuIl19