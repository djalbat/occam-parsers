'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    Textarea = easy.Textarea;

var lexers = require('occam-lexers'),
    BasicLexer = lexers.BasicLexer;

var BasicParser = require('../basic/parser');

var Example = require('../example');

var terminalSymbolsRegExpPatternTextarea,
    terminalSymbolsRegExpPatternTextareaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPattern = '\\+|\\-|\\*|\\/|\\(|\\)|\\d+',
    grammar = '\n\n      expression                 ::= term operatorThenTerm*\n      \n      operatorThenTerm           ::= operator term\n      \n      operator                   ::= \'+\' | \'-\' | \'*\' | \'/\'\n      \n      term                       ::= naturalNumber | parenthesizedExpression\n      \n      naturalNumber              ::= /^\\d+$/\n      \n      parenthesizedExpression    ::= \'(\' expression \')\'\n    \n    ',
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
        grammar = [{ terminal: terminalSymbolsRegExp }];

    basicLexer = BasicLexer.fromGrammar(grammar);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIlRleHRhcmVhIiwibGV4ZXJzIiwiQmFzaWNMZXhlciIsIkJhc2ljUGFyc2VyIiwiRXhhbXBsZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVNlbGVjdG9yIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsImdyYW1tYXIiLCJiYXNpY0xleGVyIiwiYmFzaWNQYXJzZXIiLCJCYXNpY0V4YW1wbGUiLCJncmFtbWFyVGV4dGFyZWFWYWx1ZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVZhbHVlIiwic2V0R3JhbW1hclRleHRhcmVhVmFsdWUiLCJzZXRWYWx1ZSIsInVwZGF0ZSIsIm9uQ2hhbmdlIiwib25HcmFtbWFyVGV4dGFyZWFDaGFuZ2UiLCJvbkNvbnRlbnRUZXh0YXJlYUtleVVwIiwidXBkYXRlQmFzaWNMZXhlciIsInVwZGF0ZUJhc2ljUGFyc2VyIiwidXBkYXRlUGFyc2VUcmVlIiwiY2xlYXJQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUiLCJnZXRWYWx1ZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkIiwicmVnRXhwUGF0dGVybklzVmFsaWQiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJSZWdFeHAiLCJ0ZXJtaW5hbCIsImZyb21HcmFtbWFyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImdldEdyYW1tYXJUZXh0YXJlYVZhbHVlIiwicmVnRXhwUGF0dGVybiIsInZhbGlkIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLE1BQVIsQ0FBWDtBQUFBLElBQ0lDLFdBQVdGLEtBQUtFLFFBRHBCOztBQUdBLElBQUlDLFNBQVNGLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUcsYUFBYUQsT0FBT0MsVUFEeEI7O0FBR0EsSUFBSUMsY0FBY0osUUFBUSxpQkFBUixDQUFsQjs7QUFFQSxJQUFJSyxVQUFVTCxRQUFRLFlBQVIsQ0FBZDs7QUFFQSxJQUFJTSxvQ0FBSjtBQUFBLElBQ0lDLCtDQUErQyx1Q0FEbkQ7QUFBQSxJQUVJQyw2REFGSjtBQUFBLElBR0lDLGliQUhKO0FBQUEsSUFrQklDLGFBQWEsSUFsQmpCO0FBQUEsSUFtQklDLGNBQWMsSUFuQmxCOztJQXFCTUMsWTs7Ozs7OzswQkFDUztBQUNYTiw2Q0FBdUMsSUFBSUwsUUFBSixDQUFhTSw0Q0FBYixDQUF2Qzs7QUFFQSxVQUFJTSx1QkFBdUJKLE9BQTNCO0FBQUEsVUFBb0M7QUFDaENLLGtEQUE0Q04sNEJBRGhELENBSFcsQ0FJbUU7O0FBRTlFSCxjQUFRVSx1QkFBUixDQUFnQ0Ysb0JBQWhDOztBQUVBUCwyQ0FBcUNVLFFBQXJDLENBQThDRix5Q0FBOUM7O0FBRUFHOztBQUVBWCwyQ0FBcUNZLFFBQXJDLENBQThDLFlBQVc7QUFDdkREO0FBQ0QsT0FGRDs7QUFJQVosY0FBUWMsdUJBQVIsQ0FBZ0MsWUFBVztBQUN6Q0Y7QUFDRCxPQUZEOztBQUlBWixjQUFRZSxzQkFBUixDQUErQixZQUFXO0FBQ3hDSDtBQUNELE9BRkQ7QUFHRDs7Ozs7O0FBR0gsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQkk7QUFDQUM7O0FBRUEsTUFBSVosZUFBZSxJQUFuQixFQUF5QjtBQUN2QkwsWUFBUWtCLGVBQVIsQ0FBd0JiLFVBQXhCLEVBQW9DQyxXQUFwQztBQUNELEdBRkQsTUFFTztBQUNMTixZQUFRbUIsY0FBUjtBQUNEO0FBQ0Y7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUJkLFlBQWpCOztBQUVBLFNBQVNTLGdCQUFULEdBQTRCO0FBQzFCLE1BQUlNLHlDQUF5Q3JCLHFDQUFxQ3NCLFFBQXJDLEVBQTdDO0FBQUEsTUFDSXBCLCtCQUErQm1CLHNDQURuQztBQUFBLE1BQzRFO0FBQ3hFRSx3Q0FBc0NDLHFCQUFxQnRCLDRCQUFyQixDQUYxQzs7QUFJQSxNQUFJcUIsbUNBQUosRUFBeUM7QUFDdkMsUUFBSUUsd0JBQXdCLElBQUlDLE1BQUosQ0FBV3hCLDRCQUFYLENBQTVCO0FBQUEsUUFDSUMsVUFBVSxDQUNSLEVBQUV3QixVQUFXRixxQkFBYixFQURRLENBRGQ7O0FBS0FyQixpQkFBYVAsV0FBVytCLFdBQVgsQ0FBdUJ6QixPQUF2QixDQUFiOztBQUVBSCx5Q0FBcUM2QixXQUFyQyxDQUFpRCxPQUFqRDtBQUNELEdBVEQsTUFTTztBQUNMN0IseUNBQXFDOEIsUUFBckMsQ0FBOEMsT0FBOUM7O0FBRUExQixpQkFBYSxJQUFiO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTWSxpQkFBVCxHQUE2QjtBQUMzQixNQUFJVCx1QkFBdUJSLFFBQVFnQyx1QkFBUixFQUEzQjtBQUFBLE1BQ0k1QixVQUFVSSxvQkFEZCxDQUQyQixDQUVTOztBQUVwQ0YsZ0JBQWNQLFlBQVk4QixXQUFaLENBQXdCekIsT0FBeEIsQ0FBZDtBQUNEOztBQUVELFNBQVNxQixvQkFBVCxDQUE4QlEsYUFBOUIsRUFBNkM7QUFDM0MsTUFBSUMsUUFBUSxJQUFaOztBQUVBLE1BQUk7QUFDRixRQUFJUCxNQUFKLENBQVdNLGFBQVg7QUFDRCxHQUZELENBR0EsT0FBT0UsS0FBUCxFQUFjO0FBQ1pELFlBQVEsS0FBUjtBQUNEOztBQUVELFNBQU9BLEtBQVA7QUFDRCIsImZpbGUiOiJiYXNpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgVGV4dGFyZWEgPSBlYXN5LlRleHRhcmVhO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgQmFzaWNMZXhlciA9IGxleGVycy5CYXNpY0xleGVyO1xuXG52YXIgQmFzaWNQYXJzZXIgPSByZXF1aXJlKCcuLi9iYXNpYy9wYXJzZXInKTtcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyk7XG5cbnZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEsXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybicsXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGBcXFxcK3xcXFxcLXxcXFxcKnxcXFxcL3xcXFxcKHxcXFxcKXxcXFxcZCtgLFxuICAgIGdyYW1tYXIgPSBgXG5cbiAgICAgIGV4cHJlc3Npb24gICAgICAgICAgICAgICAgIDo6PSB0ZXJtIG9wZXJhdG9yVGhlblRlcm0qXG4gICAgICBcbiAgICAgIG9wZXJhdG9yVGhlblRlcm0gICAgICAgICAgIDo6PSBvcGVyYXRvciB0ZXJtXG4gICAgICBcbiAgICAgIG9wZXJhdG9yICAgICAgICAgICAgICAgICAgIDo6PSAnKycgfCAnLScgfCAnKicgfCAnLydcbiAgICAgIFxuICAgICAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgOjo9IG5hdHVyYWxOdW1iZXIgfCBwYXJlbnRoZXNpemVkRXhwcmVzc2lvblxuICAgICAgXG4gICAgICBuYXR1cmFsTnVtYmVyICAgICAgICAgICAgICA6Oj0gL15cXFxcZCskL1xuICAgICAgXG4gICAgICBwYXJlbnRoZXNpemVkRXhwcmVzc2lvbiAgICA6Oj0gJygnIGV4cHJlc3Npb24gJyknXG4gICAgXG4gICAgYCxcbiAgICBiYXNpY0xleGVyID0gbnVsbCxcbiAgICBiYXNpY1BhcnNlciA9IG51bGw7XG5cbmNsYXNzIEJhc2ljRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhID0gbmV3IFRleHRhcmVhKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVNlbGVjdG9yKTtcblxuICAgIHZhciBncmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGdyYW1tYXIsIC8vL1xuICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWFWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm47IC8vL1xuXG4gICAgRXhhbXBsZS5zZXRHcmFtbWFyVGV4dGFyZWFWYWx1ZShncmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEuc2V0VmFsdWUodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhVmFsdWUpO1xuXG4gICAgdXBkYXRlKCk7XG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUub25HcmFtbWFyVGV4dGFyZWFDaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUub25Db250ZW50VGV4dGFyZWFLZXlVcChmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgdXBkYXRlQmFzaWNMZXhlcigpO1xuICB1cGRhdGVCYXNpY1BhcnNlcigpO1xuXG4gIGlmIChiYXNpY0xleGVyICE9PSBudWxsKSB7XG4gICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoYmFzaWNMZXhlciwgYmFzaWNQYXJzZXIpO1xuICB9IGVsc2Uge1xuICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWUoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlQmFzaWNMZXhlcigpIHtcbiAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUsICAvLy9cbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkID0gcmVnRXhwUGF0dGVybklzVmFsaWQodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybik7XG5cbiAgaWYgKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkKSB7XG4gICAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCA9IG5ldyBSZWdFeHAodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiksXG4gICAgICAgIGdyYW1tYXIgPSBbXG4gICAgICAgICAgeyB0ZXJtaW5hbCA6IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCB9XG4gICAgICAgIF07XG5cbiAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfSBlbHNlIHtcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICBiYXNpY0xleGVyID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVCYXNpY1BhcnNlcigpIHtcbiAgdmFyIGdyYW1tYXJUZXh0YXJlYVZhbHVlID0gRXhhbXBsZS5nZXRHcmFtbWFyVGV4dGFyZWFWYWx1ZSgpLFxuICAgICAgZ3JhbW1hciA9IGdyYW1tYXJUZXh0YXJlYVZhbHVlOyAvLy9cblxuICBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xufVxuXG5mdW5jdGlvbiByZWdFeHBQYXR0ZXJuSXNWYWxpZChyZWdFeHBQYXR0ZXJuKSB7XG4gIHZhciB2YWxpZCA9IHRydWU7XG5cbiAgdHJ5IHtcbiAgICBuZXcgUmVnRXhwKHJlZ0V4cFBhdHRlcm4pO1xuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHZhbGlkID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdmFsaWQ7XG59XG4iXX0=