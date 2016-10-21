'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easyui = require('easyui'),
    lexers = require('../../es6/occam-lexers'),
    Input = easyui.Input,
    BNFLexer = lexers.BNFLexer,
    BasicLexer = lexers.BasicLexer;

var Example = require('./nonBasicExample'),
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
  significantTokenTypes = [],
      mappings = {},
      productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9iYXNpY0V4YW1wbGUuanMiXSwibmFtZXMiOlsiZWFzeXVpIiwicmVxdWlyZSIsImxleGVycyIsIklucHV0IiwiQk5GTGV4ZXIiLCJCYXNpY0xleGVyIiwiRXhhbXBsZSIsIlBhcnNlciIsIkJORlBhcnNlciIsImxleGVyIiwidW5kZWZpbmVkIiwicGFyc2VyIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0U2VsZWN0b3IiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQiLCJCYXNpY0V4YW1wbGUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsIm9uQ2hhbmdlIiwidXBkYXRlUGFyc2VUcmVlIiwiZ3JhbW1hclRleHRBcmVhIiwiY29udGVudFRleHRBcmVhIiwibW9kdWxlIiwiZXhwb3J0cyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQiLCJyZWdFeHBQYXR0ZXJuSXNWYWxpZCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsIlJlZ0V4cCIsImdyYW1tYXIiLCJ0ZXJtaW5hbCIsImZyb21HcmFtbWFyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNsZWFyUGFyc2VUcmVlIiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJyZWdFeHBQYXR0ZXJuIiwidmFsaWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLFNBQVNELFFBQVEsd0JBQVIsQ0FEYjtBQUFBLElBRUlFLFFBQVFILE9BQU9HLEtBRm5C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T0EsS0FBUDtBQUNEIiwiZmlsZSI6ImJhc2ljRXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIGxleGVycyA9IHJlcXVpcmUoJy4uLy4uL2VzNi9vY2NhbS1sZXhlcnMnKSxcbiAgICBJbnB1dCA9IGVhc3l1aS5JbnB1dCxcbiAgICBCTkZMZXhlciA9IGxleGVycy5CTkZMZXhlcixcbiAgICBCYXNpY0xleGVyID0gbGV4ZXJzLkJhc2ljTGV4ZXI7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi9ub25CYXNpY0V4YW1wbGUnKSxcbiAgICBQYXJzZXIgPSByZXF1aXJlICgnLi4vLi4vZXM2L3BhcnNlcicpLFxuICAgIEJORlBhcnNlciA9IHJlcXVpcmUgKCcuLi8uLi9lczYvYm5mUGFyc2VyJyk7XG5cbnZhciBsZXhlciA9IHVuZGVmaW5lZCxcbiAgICBwYXJzZXIgPSB1bmRlZmluZWQsXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0U2VsZWN0b3IgPSAnaW5wdXQjdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybicsXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0ID0gbmV3IElucHV0KHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFNlbGVjdG9yKTtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdXBkYXRlTGV4ZXIoKTtcblxuICAgIGlmIChsZXhlciAhPT0gbnVsbCkge1xuICAgICAgdXBkYXRlUGFyc2VyKCk7XG4gICAgfVxuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0Lm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlTGV4ZXIoKTtcblxuICAgICAgaWYgKGxleGVyICE9PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZVBhcnNlcigpO1xuXG4gICAgICAgIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGxleGVyLCBwYXJzZXIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgRXhhbXBsZS5ncmFtbWFyVGV4dEFyZWEub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobGV4ZXIgIT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlUGFyc2VyKCk7XG5cbiAgICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUobGV4ZXIsIHBhcnNlcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLmNvbnRlbnRUZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIGlmIChsZXhlciAhPT0gbnVsbCkge1xuICAgICAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShsZXhlciwgcGFyc2VyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlTGV4ZXIoKSB7XG4gIHZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dC5nZXRWYWx1ZSgpLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlLCAgLy8vXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSXNWYWxpZCA9IHJlZ0V4cFBhdHRlcm5Jc1ZhbGlkKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4pO1xuXG4gIGlmICh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSXNWYWxpZCkge1xuICAgIHZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAgPSBuZXcgUmVnRXhwKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4pLFxuICAgICAgICBncmFtbWFyID0gW1xuICAgICAgICAgIHsgdGVybWluYWwgOiB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAgfVxuICAgICAgICBdO1xuXG4gICAgbGV4ZXIgPSBCYXNpY0xleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0LnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICB9IGVsc2Uge1xuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dC5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWUoKTtcblxuICAgIGxleGVyID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQYXJzZXIoKSB7XG4gIHZhciBncmFtbWFyVGV4dEFyZWFWYWx1ZSA9IEV4YW1wbGUuZ3JhbW1hclRleHRBcmVhLmdldFZhbHVlKCksXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dC5nZXRWYWx1ZSgpLFxuICAgICAgZ3JhbW1hciA9IGdyYW1tYXJUZXh0QXJlYVZhbHVlLCAvLy9cbiAgICAgIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSwgLy8vXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBbXSxcbiAgICAgIG1hcHBpbmdzID0ge30sXG4gICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyk7XG5cbiAgcGFyc2VyID0gbmV3IFBhcnNlcihwcm9kdWN0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlZ0V4cFBhdHRlcm5Jc1ZhbGlkKHJlZ0V4cFBhdHRlcm4pIHtcbiAgdmFyIHZhbGlkID0gdHJ1ZTtcblxuICB0cnkge1xuICAgIG5ldyBSZWdFeHAocmVnRXhwUGF0dGVybik7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFsaWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZDtcbn1cbiJdfQ==