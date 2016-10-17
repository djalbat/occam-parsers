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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9iYXNpY0V4YW1wbGUuanMiXSwibmFtZXMiOlsiZWFzeXVpIiwicmVxdWlyZSIsImxleGVycyIsIklucHV0IiwiQk5GTGV4ZXIiLCJCYXNpY0xleGVyIiwiRXhhbXBsZSIsIlBhcnNlciIsIkJORlBhcnNlciIsImxleGVyIiwidW5kZWZpbmVkIiwicGFyc2VyIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0U2VsZWN0b3IiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQiLCJCYXNpY0V4YW1wbGUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsIm9uQ2hhbmdlIiwidXBkYXRlUGFyc2VUcmVlIiwiZ3JhbW1hclRleHRBcmVhIiwiY29udGVudFRleHRBcmVhIiwibW9kdWxlIiwiZXhwb3J0cyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQiLCJyZWdFeHBQYXR0ZXJuSXNWYWxpZCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsIlJlZ0V4cCIsImdyYW1tYXIiLCJ0ZXJtaW5hbCIsImZyb21HcmFtbWFyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNsZWFyUGFyc2VUcmVlIiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJyZWdFeHBQYXR0ZXJuIiwidmFsaWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLFNBQVNELFFBQVEsY0FBUixDQURiO0FBQUEsSUFFSUUsUUFBUUgsT0FBT0csS0FGbkI7QUFBQSxJQUdJQyxXQUFXRixPQUFPRSxR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cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBJbnB1dCA9IGVhc3l1aS5JbnB1dCxcbiAgICBCTkZMZXhlciA9IGxleGVycy5CTkZMZXhlcixcbiAgICBCYXNpY0xleGVyID0gbGV4ZXJzLkJhc2ljTGV4ZXI7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlJyksXG4gICAgUGFyc2VyID0gcmVxdWlyZSAoJy4uLy4uL2VzNi9wYXJzZXInKSxcbiAgICBCTkZQYXJzZXIgPSByZXF1aXJlICgnLi4vLi4vZXM2L2JuZlBhcnNlcicpO1xuXG52YXIgbGV4ZXIgPSB1bmRlZmluZWQsXG4gICAgcGFyc2VyID0gdW5kZWZpbmVkLFxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFNlbGVjdG9yID0gJ2lucHV0I3Rlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4nLFxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dCA9IG5ldyBJbnB1dCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRTZWxlY3Rvcik7XG5cbmNsYXNzIEJhc2ljRXhhbXBsZSBleHRlbmRzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIHVwZGF0ZUxleGVyKCk7XG5cbiAgICBpZiAobGV4ZXIgIT09IG51bGwpIHtcbiAgICAgIHVwZGF0ZVBhcnNlcigpO1xuICAgIH1cblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dC5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZUxleGVyKCk7XG5cbiAgICAgIGlmIChsZXhlciAhPT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVQYXJzZXIoKTtcblxuICAgICAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShsZXhlciwgcGFyc2VyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIEV4YW1wbGUuZ3JhbW1hclRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGxleGVyICE9PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZVBhcnNlcigpO1xuXG4gICAgICAgIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGxleGVyLCBwYXJzZXIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgRXhhbXBsZS5jb250ZW50VGV4dEFyZWEub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobGV4ZXIgIT09IG51bGwpIHtcbiAgICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUobGV4ZXIsIHBhcnNlcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZUxleGVyKCkge1xuICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQuZ2V0VmFsdWUoKSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSwgIC8vL1xuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQgPSByZWdFeHBQYXR0ZXJuSXNWYWxpZCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKTtcblxuICBpZiAodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklzVmFsaWQpIHtcbiAgICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwID0gbmV3IFJlZ0V4cCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKSxcbiAgICAgICAgZ3JhbW1hciA9IFtcbiAgICAgICAgICB7IHRlcm1pbmFsIDogdGVybWluYWxTeW1ib2xzUmVnRXhwIH1cbiAgICAgICAgXTtcblxuICAgIGxleGVyID0gQmFzaWNMZXhlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfSBlbHNlIHtcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG5cbiAgICBsZXhlciA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUGFyc2VyKCkge1xuICB2YXIgZ3JhbW1hclRleHRBcmVhVmFsdWUgPSBFeGFtcGxlLmdyYW1tYXJUZXh0QXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQuZ2V0VmFsdWUoKSxcbiAgICAgIGdyYW1tYXIgPSBncmFtbWFyVGV4dEFyZWFWYWx1ZSwgLy8vXG4gICAgICBsaW5lcyA9IEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUsIC8vL1xuICAgICAgbWFwcGluZ3MgPSB7fSxcbiAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBtYXBwaW5ncyk7XG5cbiAgcGFyc2VyID0gbmV3IFBhcnNlcihwcm9kdWN0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlZ0V4cFBhdHRlcm5Jc1ZhbGlkKHJlZ0V4cFBhdHRlcm4pIHtcbiAgdmFyIHZhbGlkID0gdHJ1ZTtcblxuICB0cnkge1xuICAgIG5ldyBSZWdFeHAocmVnRXhwUGF0dGVybik7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFsaWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZDtcbn1cbiJdfQ==