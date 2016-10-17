'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easyui = require('easyui'),
    lexers = require('occam-lexers'),
    Input = easyui.Input,
    BNFLexer = lexers.BNFLexer,
    BasicLexer = lexers.BasicLexer;

var Example = require('./example'),
    Parser = require('../../es6/parser'),
    BNFParser = require('../../es6/bnfParser');

var lexer = undefined,
    parser = undefined,
    terminalSymbolsRegExpPatternInputSelector = 'input#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPatternInput = new Input(terminalSymbolsRegExpPatternInputSelector);

var BasicExample = function (_Example) {
  _inherits(BasicExample, _Example);

  function BasicExample() {
    _classCallCheck(this, BasicExample);

    return _possibleConstructorReturn(this, (BasicExample.__proto__ || Object.getPrototypeOf(BasicExample)).apply(this, arguments));
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      updateLexer();

      if (lexer !== null) {
        updateParser();
      }

      terminalSymbolsRegExpPatternInput.onChange(function () {
        updateLexer();

        if (lexer !== null) {
          updateParser();

          Example.updateParseTree(lexer, parser);
        }
      });

      Example.grammarTextArea.onChange(function () {
        if (lexer !== null) {
          updateParser();

          Example.updateParseTree(lexer, parser);
        }
      });

      Example.contentTextArea.onChange(function () {
        if (lexer !== null) {
          Example.updateParseTree(lexer, parser);
        }
      });
    }
  }]);

  return BasicExample;
}(Example);

module.exports = BasicExample;

function updateLexer() {
  try {
    var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternInput.getValue(),
        terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,
        ///
    terminalSymbolsRegExp = new RegExp('^(' + terminalSymbolsRegExpPattern + ')'),
        grammar = [{ terminal: terminalSymbolsRegExp }];

    lexer = BasicLexer.fromGrammar(grammar);

    terminalSymbolsRegExpPatternInput.removeClass('error');
  } catch (error) {
    terminalSymbolsRegExpPatternInput.addClass('error');

    Example.clearParseTree();

    lexer = null;
  }
}

function updateParser() {
  var grammarTextAreaValue = Example.grammarTextArea.getValue(),
      terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternInput.getValue(),
      grammar = grammarTextAreaValue,
      ///
  lines = BNFLexer.linesFromGrammar(grammar),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,
      ///
  mappings = {},
      productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, mappings);

  parser = new Parser(productions);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9iYXNpY0V4YW1wbGUuanMiXSwibmFtZXMiOlsiZWFzeXVpIiwicmVxdWlyZSIsImxleGVycyIsIklucHV0IiwiQk5GTGV4ZXIiLCJCYXNpY0xleGVyIiwiRXhhbXBsZSIsIlBhcnNlciIsIkJORlBhcnNlciIsImxleGVyIiwidW5kZWZpbmVkIiwicGFyc2VyIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0U2VsZWN0b3IiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQiLCJCYXNpY0V4YW1wbGUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsIm9uQ2hhbmdlIiwidXBkYXRlUGFyc2VUcmVlIiwiZ3JhbW1hclRleHRBcmVhIiwiY29udGVudFRleHRBcmVhIiwibW9kdWxlIiwiZXhwb3J0cyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwiUmVnRXhwIiwiZ3JhbW1hciIsInRlcm1pbmFsIiwiZnJvbUdyYW1tYXIiLCJyZW1vdmVDbGFzcyIsImVycm9yIiwiYWRkQ2xhc3MiLCJjbGVhclBhcnNlVHJlZSIsImdyYW1tYXJUZXh0QXJlYVZhbHVlIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwibWFwcGluZ3MiLCJwcm9kdWN0aW9ucyIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsU0FBU0QsUUFBUSxjQUFSLENBRGI7QUFBQSxJQUVJRSxRQUFRSCxPQUFPRyxLQUZuQjtBQUFBLElBR0lDLFdBQVdGLE9BQU9FLFFBSHRCO0FBQUEsSUFJSUMsYUFBYUgsT0FBT0csVUFKeEI7O0FBTUEsSUFBSUMsVUFBVUwsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJTSxTQUFTTixRQUFTLGtCQUFULENBRGI7QUFBQSxJQUVJTyxZQUFZUCxRQUFTLHFCQUFULENBRmhCOztBQUlBLElBQUlRLFFBQVFDLFNBQVo7QUFBQSxJQUNJQyxTQUFTRCxTQURiO0FBQUEsSUFFSUUsNENBQTRDLG9DQUZoRDtBQUFBLElBR0lDLG9DQUFvQyxJQUFJVixLQUFKLENBQVVTLHlDQUFWLENBSHhDOztJQUtNRSxZOzs7Ozs7Ozs7OzswQkFDUztBQUNYQzs7QUFFQSxVQUFJTixVQUFVLElBQWQsRUFBb0I7QUFDbEJPO0FBQ0Q7O0FBRURILHdDQUFrQ0ksUUFBbEMsQ0FBMkMsWUFBVztBQUNwREY7O0FBRUEsWUFBSU4sVUFBVSxJQUFkLEVBQW9CO0FBQ2xCTzs7QUFFQVYsa0JBQVFZLGVBQVIsQ0FBd0JULEtBQXhCLEVBQStCRSxNQUEvQjtBQUNEO0FBQ0YsT0FSRDs7QUFVQUwsY0FBUWEsZUFBUixDQUF3QkYsUUFBeEIsQ0FBaUMsWUFBVztBQUMxQyxZQUFJUixVQUFVLElBQWQsRUFBb0I7QUFDbEJPOztBQUVBVixrQkFBUVksZUFBUixDQUF3QlQsS0FBeEIsRUFBK0JFLE1BQS9CO0FBQ0Q7QUFDRixPQU5EOztBQVFBTCxjQUFRYyxlQUFSLENBQXdCSCxRQUF4QixDQUFpQyxZQUFXO0FBQzFDLFlBQUlSLFVBQVUsSUFBZCxFQUFvQjtBQUNsQkgsa0JBQVFZLGVBQVIsQ0FBd0JULEtBQXhCLEVBQStCRSxNQUEvQjtBQUNEO0FBQ0YsT0FKRDtBQUtEOzs7O0VBL0J3QkwsTzs7QUFrQzNCZSxPQUFPQyxPQUFQLEdBQWlCUixZQUFqQjs7QUFFQSxTQUFTQyxXQUFULEdBQXVCO0FBQ3JCLE1BQUk7QUFDRixRQUFJUSx5Q0FBeUNWLGtDQUFrQ1csUUFBbEMsRUFBN0M7QUFBQSxRQUNJQywrQkFBK0JGLHNDQURuQztBQUFBLFFBQzJFO0FBQ3ZFRyw0QkFBd0IsSUFBSUMsTUFBSixDQUFXLE9BQU9GLDRCQUFQLEdBQXNDLEdBQWpELENBRjVCO0FBQUEsUUFHSUcsVUFBVSxDQUNSLEVBQUVDLFVBQVdILHFCQUFiLEVBRFEsQ0FIZDs7QUFPQWpCLFlBQVFKLFdBQVd5QixXQUFYLENBQXVCRixPQUF2QixDQUFSOztBQUVBZixzQ0FBa0NrQixXQUFsQyxDQUE4QyxPQUE5QztBQUNELEdBWEQsQ0FZQSxPQUFNQyxLQUFOLEVBQWE7QUFDWG5CLHNDQUFrQ29CLFFBQWxDLENBQTJDLE9BQTNDOztBQUVBM0IsWUFBUTRCLGNBQVI7O0FBRUF6QixZQUFRLElBQVI7QUFDRDtBQUNGOztBQUVELFNBQVNPLFlBQVQsR0FBd0I7QUFDdEIsTUFBSW1CLHVCQUF1QjdCLFFBQVFhLGVBQVIsQ0FBd0JLLFFBQXhCLEVBQTNCO0FBQUEsTUFDSUQseUNBQXlDVixrQ0FBa0NXLFFBQWxDLEVBRDdDO0FBQUEsTUFFSUksVUFBVU8sb0JBRmQ7QUFBQSxNQUVvQztBQUNoQ0MsVUFBUWhDLFNBQVNpQyxnQkFBVCxDQUEwQlQsT0FBMUIsQ0FIWjtBQUFBLE1BSUlILCtCQUErQkYsc0NBSm5DO0FBQUEsTUFJMkU7QUFDdkVlLGFBQVcsRUFMZjtBQUFBLE1BTUlDLGNBQWMvQixVQUFVZ0MsS0FBVixDQUFnQkosS0FBaEIsRUFBdUJYLDRCQUF2QixFQUFxRGEsUUFBckQsQ0FObEI7O0FBUUEzQixXQUFTLElBQUlKLE1BQUosQ0FBV2dDLFdBQVgsQ0FBVDtBQUNEIiwiZmlsZSI6ImJhc2ljRXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIElucHV0ID0gZWFzeXVpLklucHV0LFxuICAgIEJORkxleGVyID0gbGV4ZXJzLkJORkxleGVyLFxuICAgIEJhc2ljTGV4ZXIgPSBsZXhlcnMuQmFzaWNMZXhlcjtcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuL2V4YW1wbGUnKSxcbiAgICBQYXJzZXIgPSByZXF1aXJlICgnLi4vLi4vZXM2L3BhcnNlcicpLFxuICAgIEJORlBhcnNlciA9IHJlcXVpcmUgKCcuLi8uLi9lczYvYm5mUGFyc2VyJyk7XG5cbnZhciBsZXhlciA9IHVuZGVmaW5lZCxcbiAgICBwYXJzZXIgPSB1bmRlZmluZWQsXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0U2VsZWN0b3IgPSAnaW5wdXQjdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybicsXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0ID0gbmV3IElucHV0KHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFNlbGVjdG9yKTtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdXBkYXRlTGV4ZXIoKTtcblxuICAgIGlmIChsZXhlciAhPT0gbnVsbCkge1xuICAgICAgdXBkYXRlUGFyc2VyKCk7XG4gICAgfVxuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0Lm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlTGV4ZXIoKTtcblxuICAgICAgaWYgKGxleGVyICE9PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZVBhcnNlcigpO1xuXG4gICAgICAgIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGxleGVyLCBwYXJzZXIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgRXhhbXBsZS5ncmFtbWFyVGV4dEFyZWEub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobGV4ZXIgIT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlUGFyc2VyKCk7XG5cbiAgICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUobGV4ZXIsIHBhcnNlcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLmNvbnRlbnRUZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIGlmIChsZXhlciAhPT0gbnVsbCkge1xuICAgICAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShsZXhlciwgcGFyc2VyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlTGV4ZXIoKSB7XG4gIHRyeSB7XG4gICAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0LmdldFZhbHVlKCksXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSwgLy8vXG4gICAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCA9IG5ldyBSZWdFeHAoJ14oJyArIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gKyAnKScpLFxuICAgICAgICBncmFtbWFyID0gW1xuICAgICAgICAgIHsgdGVybWluYWwgOiB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAgfVxuICAgICAgICBdO1xuXG4gICAgbGV4ZXIgPSBCYXNpY0xleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0LnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICB9XG4gIGNhdGNoKGVycm9yKSB7XG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0LmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgbGV4ZXIgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhcnNlcigpIHtcbiAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gRXhhbXBsZS5ncmFtbWFyVGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0LmdldFZhbHVlKCksXG4gICAgICBncmFtbWFyID0gZ3JhbW1hclRleHRBcmVhVmFsdWUsIC8vL1xuICAgICAgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlLCAvLy9cbiAgICAgIG1hcHBpbmdzID0ge30sXG4gICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiwgbWFwcGluZ3MpO1xuXG4gIHBhcnNlciA9IG5ldyBQYXJzZXIocHJvZHVjdGlvbnMpO1xufVxuIl19