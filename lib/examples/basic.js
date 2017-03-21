'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    Textarea = easy.Textarea;

var lexers = require('occam-lexers'),
    BasicLexer = lexers.BasicLexer;

var BasicParser = require('../basic/parser');

var Example = require('../example');

var terminalSymbolsRegExpPatternTextarea = void 0;

var terminalSymbolsRegExpPatternTextareaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPattern = '\\+|\\-|\\*|\\/|\\(|\\)|\\d+',
    grammar = '\n  \n        expression                 ::= term operatorThenTerm*\n        \n        operatorThenTerm           ::= operator term\n        \n        operator                   ::= \'+\' | \'-\' | \'*\' | \'/\'\n        \n        term                       ::= naturalNumber | parenthesizedExpression\n        \n        naturalNumber              ::= /^\\d+$/\n        \n        parenthesizedExpression    ::= \'(\' expression \')\'\n      \n      ';

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
        _grammar = [{ terminal: terminalSymbolsRegExp }];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIlRleHRhcmVhIiwibGV4ZXJzIiwiQmFzaWNMZXhlciIsIkJhc2ljUGFyc2VyIiwiRXhhbXBsZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVNlbGVjdG9yIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsImdyYW1tYXIiLCJiYXNpY0xleGVyIiwiYmFzaWNQYXJzZXIiLCJCYXNpY0V4YW1wbGUiLCJncmFtbWFyVGV4dGFyZWFWYWx1ZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVZhbHVlIiwic2V0R3JhbW1hclRleHRhcmVhVmFsdWUiLCJzZXRWYWx1ZSIsInVwZGF0ZSIsIm9uQ2hhbmdlIiwib25HcmFtbWFyVGV4dGFyZWFDaGFuZ2UiLCJvbkNvbnRlbnRUZXh0YXJlYUtleVVwIiwidXBkYXRlQmFzaWNMZXhlciIsInVwZGF0ZUJhc2ljUGFyc2VyIiwidXBkYXRlUGFyc2VUcmVlIiwiY2xlYXJQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUiLCJnZXRWYWx1ZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkIiwicmVnRXhwUGF0dGVybklzVmFsaWQiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJSZWdFeHAiLCJ0ZXJtaW5hbCIsImZyb21HcmFtbWFyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImdldEdyYW1tYXJUZXh0YXJlYVZhbHVlIiwicmVnRXhwUGF0dGVybiIsInZhbGlkIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLFdBQVdGLEtBQUtFLFFBRHRCOztBQUdBLElBQU1DLFNBQVNGLFFBQVEsY0FBUixDQUFmO0FBQUEsSUFDTUcsYUFBYUQsT0FBT0MsVUFEMUI7O0FBR0EsSUFBTUMsY0FBY0osUUFBUSxpQkFBUixDQUFwQjs7QUFFQSxJQUFNSyxVQUFVTCxRQUFRLFlBQVIsQ0FBaEI7O0FBRUEsSUFBSU0sNkNBQUo7O0FBRUEsSUFBTUMsK0NBQStDLHVDQUFyRDtBQUFBLElBQ01DLDZEQUROO0FBQUEsSUFFTUMsNmNBRk47O0FBa0JBLElBQUlDLGFBQWEsSUFBakI7QUFBQSxJQUNJQyxjQUFjLElBRGxCOztJQUdNQyxZOzs7Ozs7OzBCQUNTO0FBQ1hOLDZDQUF1QyxJQUFJTCxRQUFKLENBQWFNLDRDQUFiLENBQXZDOztBQUVBLFVBQU1NLHVCQUF1QkosT0FBN0I7QUFBQSxVQUFzQztBQUNsQ0ssa0RBQTRDTiw0QkFEaEQsQ0FIVyxDQUltRTs7QUFFOUVILGNBQVFVLHVCQUFSLENBQWdDRixvQkFBaEM7O0FBRUFQLDJDQUFxQ1UsUUFBckMsQ0FBOENGLHlDQUE5Qzs7QUFFQUc7O0FBRUFYLDJDQUFxQ1ksUUFBckMsQ0FBOEMsWUFBVztBQUN2REQ7QUFDRCxPQUZEOztBQUlBWixjQUFRYyx1QkFBUixDQUFnQyxZQUFXO0FBQ3pDRjtBQUNELE9BRkQ7O0FBSUFaLGNBQVFlLHNCQUFSLENBQStCLFlBQVc7QUFDeENIO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHSCxTQUFTQSxNQUFULEdBQWtCO0FBQ2hCSTtBQUNBQzs7QUFFQSxNQUFJWixlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCTCxZQUFRa0IsZUFBUixDQUF3QmIsVUFBeEIsRUFBb0NDLFdBQXBDO0FBQ0QsR0FGRCxNQUVPO0FBQ0xOLFlBQVFtQixjQUFSO0FBQ0Q7QUFDRjs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQmQsWUFBakI7O0FBRUEsU0FBU1MsZ0JBQVQsR0FBNEI7QUFDMUIsTUFBTU0seUNBQXlDckIscUNBQXFDc0IsUUFBckMsRUFBL0M7QUFBQSxNQUNJcEIsK0JBQStCbUIsc0NBRG5DO0FBQUEsTUFDNEU7QUFDeEVFLHdDQUFzQ0MscUJBQXFCdEIsNEJBQXJCLENBRjFDOztBQUlBLE1BQUlxQixtQ0FBSixFQUF5QztBQUN2QyxRQUFNRSx3QkFBd0IsSUFBSUMsTUFBSixDQUFXeEIsNEJBQVgsQ0FBOUI7QUFBQSxRQUNJQyxXQUFVLENBQ1IsRUFBRXdCLFVBQVdGLHFCQUFiLEVBRFEsQ0FEZDs7QUFLQXJCLGlCQUFhUCxXQUFXK0IsV0FBWCxDQUF1QnpCLFFBQXZCLENBQWI7O0FBRUFILHlDQUFxQzZCLFdBQXJDLENBQWlELE9BQWpEO0FBQ0QsR0FURCxNQVNPO0FBQ0w3Qix5Q0FBcUM4QixRQUFyQyxDQUE4QyxPQUE5Qzs7QUFFQTFCLGlCQUFhLElBQWI7QUFDRDtBQUNGOztBQUVELFNBQVNZLGlCQUFULEdBQTZCO0FBQzNCLE1BQU1ULHVCQUF1QlIsUUFBUWdDLHVCQUFSLEVBQTdCO0FBQUEsTUFDTTVCLFVBQVVJLG9CQURoQixDQUQyQixDQUVXOztBQUV0Q0YsZ0JBQWNQLFlBQVk4QixXQUFaLENBQXdCekIsT0FBeEIsQ0FBZDtBQUNEOztBQUVELFNBQVNxQixvQkFBVCxDQUE4QlEsYUFBOUIsRUFBNkM7QUFDM0MsTUFBSUMsUUFBUSxJQUFaOztBQUVBLE1BQUk7QUFDRixRQUFJUCxNQUFKLENBQVdNLGFBQVg7QUFDRCxHQUZELENBR0EsT0FBT0UsS0FBUCxFQUFjO0FBQ1pELFlBQVEsS0FBUjtBQUNEOztBQUVELFNBQU9BLEtBQVA7QUFDRCIsImZpbGUiOiJiYXNpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIFRleHRhcmVhID0gZWFzeS5UZXh0YXJlYTtcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgICBCYXNpY0xleGVyID0gbGV4ZXJzLkJhc2ljTGV4ZXI7XG5cbmNvbnN0IEJhc2ljUGFyc2VyID0gcmVxdWlyZSgnLi4vYmFzaWMvcGFyc2VyJyk7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyk7XG5cbmxldCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWE7XG5cbmNvbnN0IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3Rlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4nLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGBcXFxcK3xcXFxcLXxcXFxcKnxcXFxcL3xcXFxcKHxcXFxcKXxcXFxcZCtgLFxuICAgICAgZ3JhbW1hciA9IGBcbiAgXG4gICAgICAgIGV4cHJlc3Npb24gICAgICAgICAgICAgICAgIDo6PSB0ZXJtIG9wZXJhdG9yVGhlblRlcm0qXG4gICAgICAgIFxuICAgICAgICBvcGVyYXRvclRoZW5UZXJtICAgICAgICAgICA6Oj0gb3BlcmF0b3IgdGVybVxuICAgICAgICBcbiAgICAgICAgb3BlcmF0b3IgICAgICAgICAgICAgICAgICAgOjo9ICcrJyB8ICctJyB8ICcqJyB8ICcvJ1xuICAgICAgICBcbiAgICAgICAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgOjo9IG5hdHVyYWxOdW1iZXIgfCBwYXJlbnRoZXNpemVkRXhwcmVzc2lvblxuICAgICAgICBcbiAgICAgICAgbmF0dXJhbE51bWJlciAgICAgICAgICAgICAgOjo9IC9eXFxcXGQrJC9cbiAgICAgICAgXG4gICAgICAgIHBhcmVudGhlc2l6ZWRFeHByZXNzaW9uICAgIDo6PSAnKCcgZXhwcmVzc2lvbiAnKSdcbiAgICAgIFxuICAgICAgYDtcblxubGV0IGJhc2ljTGV4ZXIgPSBudWxsLFxuICAgIGJhc2ljUGFyc2VyID0gbnVsbDtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhU2VsZWN0b3IpO1xuXG4gICAgY29uc3QgZ3JhbW1hclRleHRhcmVhVmFsdWUgPSBncmFtbWFyLCAvLy9cbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhVmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuOyAvLy9cblxuICAgIEV4YW1wbGUuc2V0R3JhbW1hclRleHRhcmVhVmFsdWUoZ3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLnNldFZhbHVlKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVZhbHVlKTtcblxuICAgIHVwZGF0ZSgpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLm9uR3JhbW1hclRleHRhcmVhQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRhcmVhS2V5VXAoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIHVwZGF0ZUJhc2ljTGV4ZXIoKTtcbiAgdXBkYXRlQmFzaWNQYXJzZXIoKTtcblxuICBpZiAoYmFzaWNMZXhlciAhPT0gbnVsbCkge1xuICAgIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGJhc2ljTGV4ZXIsIGJhc2ljUGFyc2VyKTtcbiAgfSBlbHNlIHtcbiAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZUJhc2ljTGV4ZXIoKSB7XG4gIGNvbnN0IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUsICAvLy9cbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkID0gcmVnRXhwUGF0dGVybklzVmFsaWQodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybik7XG5cbiAgaWYgKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkKSB7XG4gICAgY29uc3QgdGVybWluYWxTeW1ib2xzUmVnRXhwID0gbmV3IFJlZ0V4cCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKSxcbiAgICAgICAgZ3JhbW1hciA9IFtcbiAgICAgICAgICB7IHRlcm1pbmFsIDogdGVybWluYWxTeW1ib2xzUmVnRXhwIH1cbiAgICAgICAgXTtcblxuICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICB9IGVsc2Uge1xuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgIGJhc2ljTGV4ZXIgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJhc2ljUGFyc2VyKCkge1xuICBjb25zdCBncmFtbWFyVGV4dGFyZWFWYWx1ZSA9IEV4YW1wbGUuZ2V0R3JhbW1hclRleHRhcmVhVmFsdWUoKSxcbiAgICAgICAgZ3JhbW1hciA9IGdyYW1tYXJUZXh0YXJlYVZhbHVlOyAvLy9cblxuICBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xufVxuXG5mdW5jdGlvbiByZWdFeHBQYXR0ZXJuSXNWYWxpZChyZWdFeHBQYXR0ZXJuKSB7XG4gIGxldCB2YWxpZCA9IHRydWU7XG5cbiAgdHJ5IHtcbiAgICBuZXcgUmVnRXhwKHJlZ0V4cFBhdHRlcm4pO1xuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHZhbGlkID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdmFsaWQ7XG59XG4iXX0=