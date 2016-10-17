'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easyui = require('easyui'),
    lexers = require('../../../Lexers/index'),
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
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternInput.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,
      ///
  terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

  if (terminalSymbolsRegExpPatternIsValid) {
    var terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
        grammar = [{ terminal: terminalSymbolsRegExp }];

    lexer = BasicLexer.fromGrammar(grammar);

    terminalSymbolsRegExpPatternInput.removeClass('error');
  } else {
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

function regExpPatternIsValid(regExpPattern) {
  var valid = true;

  try {
    new RegExp(regExpPattern);
  } catch (error) {
    valid = false;
  }

  return valid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9iYXNpY0V4YW1wbGUuanMiXSwibmFtZXMiOlsiZWFzeXVpIiwicmVxdWlyZSIsImxleGVycyIsIklucHV0IiwiQk5GTGV4ZXIiLCJCYXNpY0xleGVyIiwiRXhhbXBsZSIsIlBhcnNlciIsIkJORlBhcnNlciIsImxleGVyIiwidW5kZWZpbmVkIiwicGFyc2VyIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0U2VsZWN0b3IiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQiLCJCYXNpY0V4YW1wbGUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsIm9uQ2hhbmdlIiwidXBkYXRlUGFyc2VUcmVlIiwiZ3JhbW1hclRleHRBcmVhIiwiY29udGVudFRleHRBcmVhIiwibW9kdWxlIiwiZXhwb3J0cyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQiLCJyZWdFeHBQYXR0ZXJuSXNWYWxpZCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsIlJlZ0V4cCIsImdyYW1tYXIiLCJ0ZXJtaW5hbCIsImZyb21HcmFtbWFyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNsZWFyUGFyc2VUcmVlIiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJyZWdFeHBQYXR0ZXJuIiwidmFsaWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLFNBQVNELFFBQVEsdUJBQVIsQ0FEYjtBQUFBLElBRUlFLFFBQVFILE9BQU9HLEtBRm5CO0FBQUEsSUFHSUMsV0FBV0YsT0FBT0Us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dHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgbGV4ZXJzID0gcmVxdWlyZSgnLi4vLi4vLi4vTGV4ZXJzL2luZGV4JyksXG4gICAgSW5wdXQgPSBlYXN5dWkuSW5wdXQsXG4gICAgQk5GTGV4ZXIgPSBsZXhlcnMuQk5GTGV4ZXIsXG4gICAgQmFzaWNMZXhlciA9IGxleGVycy5CYXNpY0xleGVyO1xuXG52YXIgRXhhbXBsZSA9IHJlcXVpcmUoJy4vZXhhbXBsZScpLFxuICAgIFBhcnNlciA9IHJlcXVpcmUgKCcuLi8uLi9lczYvcGFyc2VyJyksXG4gICAgQk5GUGFyc2VyID0gcmVxdWlyZSAoJy4uLy4uL2VzNi9ibmZQYXJzZXInKTtcblxudmFyIGxleGVyID0gdW5kZWZpbmVkLFxuICAgIHBhcnNlciA9IHVuZGVmaW5lZCxcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRTZWxlY3RvciA9ICdpbnB1dCN0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuJyxcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQgPSBuZXcgSW5wdXQodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0U2VsZWN0b3IpO1xuXG5jbGFzcyBCYXNpY0V4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICB1cGRhdGVMZXhlcigpO1xuXG4gICAgaWYgKGxleGVyICE9PSBudWxsKSB7XG4gICAgICB1cGRhdGVQYXJzZXIoKTtcbiAgICB9XG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGVMZXhlcigpO1xuXG4gICAgICBpZiAobGV4ZXIgIT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlUGFyc2VyKCk7XG5cbiAgICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUobGV4ZXIsIHBhcnNlcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLmdyYW1tYXJUZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIGlmIChsZXhlciAhPT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVQYXJzZXIoKTtcblxuICAgICAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShsZXhlciwgcGFyc2VyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIEV4YW1wbGUuY29udGVudFRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGxleGVyICE9PSBudWxsKSB7XG4gICAgICAgIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGxleGVyLCBwYXJzZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlO1xuXG5mdW5jdGlvbiB1cGRhdGVMZXhlcigpIHtcbiAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0LmdldFZhbHVlKCksXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUsICAvLy9cbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkID0gcmVnRXhwUGF0dGVybklzVmFsaWQodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybik7XG5cbiAgaWYgKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkKSB7XG4gICAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCA9IG5ldyBSZWdFeHAodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiksXG4gICAgICAgIGdyYW1tYXIgPSBbXG4gICAgICAgICAgeyB0ZXJtaW5hbCA6IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCB9XG4gICAgICAgIF07XG5cbiAgICBsZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XG5cbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gIH0gZWxzZSB7XG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0LmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgbGV4ZXIgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhcnNlcigpIHtcbiAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gRXhhbXBsZS5ncmFtbWFyVGV4dEFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0LmdldFZhbHVlKCksXG4gICAgICBncmFtbWFyID0gZ3JhbW1hclRleHRBcmVhVmFsdWUsIC8vL1xuICAgICAgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlLCAvLy9cbiAgICAgIG1hcHBpbmdzID0ge30sXG4gICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiwgbWFwcGluZ3MpO1xuXG4gIHBhcnNlciA9IG5ldyBQYXJzZXIocHJvZHVjdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZWdFeHBQYXR0ZXJuSXNWYWxpZChyZWdFeHBQYXR0ZXJuKSB7XG4gIHZhciB2YWxpZCA9IHRydWU7XG5cbiAgdHJ5IHtcbiAgICBuZXcgUmVnRXhwKHJlZ0V4cFBhdHRlcm4pO1xuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHZhbGlkID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdmFsaWQ7XG59XG4iXX0=