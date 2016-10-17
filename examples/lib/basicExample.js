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
      updateParser();

      terminalSymbolsRegExpPatternInput.onChange(function () {
        updateLexer();
        updateParser();

        Example.updateParseTree(lexer, parser);
      });

      Example.grammarTextArea.onChange(function () {
        updateParser();

        Example.updateParseTree(lexer, parser);
      });

      Example.contentTextArea.onChange(function () {
        Example.updateParseTree(lexer, parser);
      });
    }
  }]);

  return BasicExample;
}(Example);

module.exports = BasicExample;

function updateLexer() {
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternInput.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue; ///

  try {
    new RegExp('^(' + terminalSymbolsRegExpPattern + ')');
  } catch (error) {
    terminalSymbolsRegExpPattern = '.';
  }

  var terminalSymbolsRegExp = new RegExp('^(' + terminalSymbolsRegExpPattern + ')'),
      grammar = [{ terminal: terminalSymbolsRegExp }];

  lexer = BasicLexer.fromGrammar(grammar);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9iYXNpY0V4YW1wbGUuanMiXSwibmFtZXMiOlsiZWFzeXVpIiwicmVxdWlyZSIsImxleGVycyIsIklucHV0IiwiQk5GTGV4ZXIiLCJCYXNpY0xleGVyIiwiRXhhbXBsZSIsIlBhcnNlciIsIkJORlBhcnNlciIsImxleGVyIiwidW5kZWZpbmVkIiwicGFyc2VyIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0U2VsZWN0b3IiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQiLCJCYXNpY0V4YW1wbGUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsIm9uQ2hhbmdlIiwidXBkYXRlUGFyc2VUcmVlIiwiZ3JhbW1hclRleHRBcmVhIiwiY29udGVudFRleHRBcmVhIiwibW9kdWxlIiwiZXhwb3J0cyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwiUmVnRXhwIiwiZXJyb3IiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJncmFtbWFyIiwidGVybWluYWwiLCJmcm9tR3JhbW1hciIsImdyYW1tYXJUZXh0QXJlYVZhbHVlIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwibWFwcGluZ3MiLCJwcm9kdWN0aW9ucyIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsU0FBU0QsUUFBUSxjQUFSLENBRGI7QUFBQSxJQUVJRSxRQUFRSCxPQUFPRyxLQUZuQjtBQUFBLElBR0lDLFdBQVdGLE9BQU9FLFFBSHRCO0FBQUEsSUFJSUMsYUFBYUgsT0FBT0csVUFKeEI7O0FBTUEsSUFBSUMsVUFBVUwsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJTSxTQUFTTixRQUFTLGtCQUFULENBRGI7QUFBQSxJQUVJTyxZQUFZUCxRQUFTLHFCQUFULENBRmhCOztBQUlBLElBQUlRLFFBQVFDLFNBQVo7QUFBQSxJQUNJQyxTQUFTRCxTQURiO0FBQUEsSUFFSUUsNENBQTRDLG9DQUZoRDtBQUFBLElBR0lDLG9DQUFvQyxJQUFJVixLQUFKLENBQVVTLHlDQUFWLENBSHhDOztJQUtNRSxZOzs7Ozs7Ozs7OzswQkFDUztBQUNYQztBQUNBQzs7QUFFQUgsd0NBQWtDSSxRQUFsQyxDQUEyQyxZQUFXO0FBQ3BERjtBQUNBQzs7QUFFQVYsZ0JBQVFZLGVBQVIsQ0FBd0JULEtBQXhCLEVBQStCRSxNQUEvQjtBQUNELE9BTEQ7O0FBT0FMLGNBQVFhLGVBQVIsQ0FBd0JGLFFBQXhCLENBQWlDLFlBQVc7QUFDMUNEOztBQUVBVixnQkFBUVksZUFBUixDQUF3QlQsS0FBeEIsRUFBK0JFLE1BQS9CO0FBQ0QsT0FKRDs7QUFNQUwsY0FBUWMsZUFBUixDQUF3QkgsUUFBeEIsQ0FBaUMsWUFBVztBQUMxQ1gsZ0JBQVFZLGVBQVIsQ0FBd0JULEtBQXhCLEVBQStCRSxNQUEvQjtBQUNELE9BRkQ7QUFHRDs7OztFQXJCd0JMLE87O0FBd0IzQmUsT0FBT0MsT0FBUCxHQUFpQlIsWUFBakI7O0FBRUEsU0FBU0MsV0FBVCxHQUF1QjtBQUNyQixNQUFJUSx5Q0FBeUNWLGtDQUFrQ1csUUFBbEMsRUFBN0M7QUFBQSxNQUNJQywrQkFBK0JGLHNDQURuQyxDQURxQixDQUVzRDs7QUFFdkUsTUFBSTtBQUNGLFFBQUlHLE1BQUosQ0FBVyxPQUFPRCw0QkFBUCxHQUFzQyxHQUFqRDtBQUNELEdBRkQsQ0FHQSxPQUFNRSxLQUFOLEVBQWE7QUFDWEYsbUNBQStCLEdBQS9CO0FBQ0Q7O0FBRUwsTUFBSUcsd0JBQXdCLElBQUlGLE1BQUosQ0FBVyxPQUFPRCw0QkFBUCxHQUFzQyxHQUFqRCxDQUE1QjtBQUFBLE1BQ0lJLFVBQVUsQ0FDUixFQUFFQyxVQUFXRixxQkFBYixFQURRLENBRGQ7O0FBS0FuQixVQUFRSixXQUFXMEIsV0FBWCxDQUF1QkYsT0FBdkIsQ0FBUjtBQUNEOztBQUVELFNBQVNiLFlBQVQsR0FBd0I7QUFDdEIsTUFBSWdCLHVCQUF1QjFCLFFBQVFhLGVBQVIsQ0FBd0JLLFFBQXhCLEVBQTNCO0FBQUEsTUFDSUQseUNBQXlDVixrQ0FBa0NXLFFBQWxDLEVBRDdDO0FBQUEsTUFFSUssVUFBVUcsb0JBRmQ7QUFBQSxNQUVvQztBQUNoQ0MsVUFBUTdCLFNBQVM4QixnQkFBVCxDQUEwQkwsT0FBMUIsQ0FIWjtBQUFBLE1BSUlKLCtCQUErQkYsc0NBSm5DO0FBQUEsTUFJMkU7QUFDdkVZLGFBQVcsRUFMZjtBQUFBLE1BTUlDLGNBQWM1QixVQUFVNkIsS0FBVixDQUFnQkosS0FBaEIsRUFBdUJSLDRCQUF2QixFQUFxRFUsUUFBckQsQ0FObEI7O0FBUUF4QixXQUFTLElBQUlKLE1BQUosQ0FBVzZCLFdBQVgsQ0FBVDtBQUNEIiwiZmlsZSI6ImJhc2ljRXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIElucHV0ID0gZWFzeXVpLklucHV0LFxuICAgIEJORkxleGVyID0gbGV4ZXJzLkJORkxleGVyLFxuICAgIEJhc2ljTGV4ZXIgPSBsZXhlcnMuQmFzaWNMZXhlcjtcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuL2V4YW1wbGUnKSxcbiAgICBQYXJzZXIgPSByZXF1aXJlICgnLi4vLi4vZXM2L3BhcnNlcicpLFxuICAgIEJORlBhcnNlciA9IHJlcXVpcmUgKCcuLi8uLi9lczYvYm5mUGFyc2VyJyk7XG5cbnZhciBsZXhlciA9IHVuZGVmaW5lZCxcbiAgICBwYXJzZXIgPSB1bmRlZmluZWQsXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0U2VsZWN0b3IgPSAnaW5wdXQjdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybicsXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0ID0gbmV3IElucHV0KHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFNlbGVjdG9yKTtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdXBkYXRlTGV4ZXIoKTtcbiAgICB1cGRhdGVQYXJzZXIoKTtcblxuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dC5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZUxleGVyKCk7XG4gICAgICB1cGRhdGVQYXJzZXIoKTtcblxuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUobGV4ZXIsIHBhcnNlcik7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLmdyYW1tYXJUZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZVBhcnNlcigpO1xuXG4gICAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShsZXhlciwgcGFyc2VyKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUuY29udGVudFRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUobGV4ZXIsIHBhcnNlcik7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZUxleGVyKCkge1xuICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQuZ2V0VmFsdWUoKSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZTsgLy8vXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBSZWdFeHAoJ14oJyArIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gKyAnKScpO1xuICAgICAgfVxuICAgICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9ICcuJztcbiAgICAgIH1cblxuICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwID0gbmV3IFJlZ0V4cCgnXignICsgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiArICcpJyksXG4gICAgICBncmFtbWFyID0gW1xuICAgICAgICB7IHRlcm1pbmFsIDogdGVybWluYWxTeW1ib2xzUmVnRXhwIH1cbiAgICAgIF07XG5cbiAgbGV4ZXIgPSBCYXNpY0xleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQYXJzZXIoKSB7XG4gIHZhciBncmFtbWFyVGV4dEFyZWFWYWx1ZSA9IEV4YW1wbGUuZ3JhbW1hclRleHRBcmVhLmdldFZhbHVlKCksXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dC5nZXRWYWx1ZSgpLFxuICAgICAgZ3JhbW1hciA9IGdyYW1tYXJUZXh0QXJlYVZhbHVlLCAvLy9cbiAgICAgIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXRWYWx1ZSwgLy8vXG4gICAgICBtYXBwaW5ncyA9IHt9LFxuICAgICAgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIucGFyc2UobGluZXMsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIG1hcHBpbmdzKTtcblxuICBwYXJzZXIgPSBuZXcgUGFyc2VyKHByb2R1Y3Rpb25zKTtcbn1cblxuIl19