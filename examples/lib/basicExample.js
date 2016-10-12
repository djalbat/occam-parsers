'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicLexer = require('../../../Lexers/es6/basic/lexer'); ///

var Example = require('./example');

var mappings = {},
    basicLexer = undefined;

var BasicExample = function (_Example) {
  _inherits(BasicExample, _Example);

  function BasicExample() {
    _classCallCheck(this, BasicExample);

    return _possibleConstructorReturn(this, (BasicExample.__proto__ || Object.getPrototypeOf(BasicExample)).apply(this, arguments));
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      updateBasicLexer();

      Example.updateParser(mappings);

      Example.terminalSymbolsRegExpPatternInput.onChange(function () {
        updateBasicLexer();

        Example.updateParser(mappings);
        Example.updateParseTree(basicLexer);
      });

      Example.grammarTextArea.onChange(function () {
        Example.updateParser(mappings);
        Example.updateParseTree(basicLexer);
      });

      Example.contentTextArea.onChange(function () {
        Example.updateParseTree(basicLexer);
      });
    }
  }]);

  return BasicExample;
}(Example);

module.exports = BasicExample;

function updateBasicLexer() {
  var terminalSymbolsRegExpPatternInputValue = Example.terminalSymbolsRegExpPatternInput.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue; ///

  try {
    new RegExp('^(' + terminalSymbolsRegExpPattern + ')');
  } catch (error) {
    terminalSymbolsRegExpPattern = '.';
  }

  var terminalSymbolsRegExp = new RegExp('^(' + terminalSymbolsRegExpPattern + ')'),
      grammar = [{ terminal: terminalSymbolsRegExp }];

  basicLexer = BasicLexer.fromGrammar(grammar);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9iYXNpY0V4YW1wbGUuanMiXSwibmFtZXMiOlsiQmFzaWNMZXhlciIsInJlcXVpcmUiLCJFeGFtcGxlIiwibWFwcGluZ3MiLCJiYXNpY0xleGVyIiwidW5kZWZpbmVkIiwiQmFzaWNFeGFtcGxlIiwidXBkYXRlQmFzaWNMZXhlciIsInVwZGF0ZVBhcnNlciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dCIsIm9uQ2hhbmdlIiwidXBkYXRlUGFyc2VUcmVlIiwiZ3JhbW1hclRleHRBcmVhIiwiY29udGVudFRleHRBcmVhIiwibW9kdWxlIiwiZXhwb3J0cyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwiUmVnRXhwIiwiZXJyb3IiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJncmFtbWFyIiwidGVybWluYWwiLCJmcm9tR3JhbW1hciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxhQUFhQyxRQUFRLGlDQUFSLENBQWpCLEMsQ0FBOEQ7O0FBRTlELElBQUlDLFVBQVVELFFBQVEsV0FBUixDQUFkOztBQUVBLElBQUlFLFdBQVcsRUFBZjtBQUFBLElBQ0lDLGFBQWFDLFNBRGpCOztJQUdNQyxZOzs7Ozs7Ozs7OzswQkFDUztBQUNYQzs7QUFFQUwsY0FBUU0sWUFBUixDQUFxQkwsUUFBckI7O0FBRUFELGNBQVFPLGlDQUFSLENBQTBDQyxRQUExQyxDQUFtRCxZQUFXO0FBQzVESDs7QUFFQUwsZ0JBQVFNLFlBQVIsQ0FBcUJMLFFBQXJCO0FBQ0FELGdCQUFRUyxlQUFSLENBQXdCUCxVQUF4QjtBQUNELE9BTEQ7O0FBT0FGLGNBQVFVLGVBQVIsQ0FBd0JGLFFBQXhCLENBQWlDLFlBQVc7QUFDMUNSLGdCQUFRTSxZQUFSLENBQXFCTCxRQUFyQjtBQUNBRCxnQkFBUVMsZUFBUixDQUF3QlAsVUFBeEI7QUFDRCxPQUhEOztBQUtBRixjQUFRVyxlQUFSLENBQXdCSCxRQUF4QixDQUFpQyxZQUFXO0FBQzFDUixnQkFBUVMsZUFBUixDQUF3QlAsVUFBeEI7QUFDRCxPQUZEO0FBR0Q7Ozs7RUFyQndCRixPOztBQXdCM0JZLE9BQU9DLE9BQVAsR0FBaUJULFlBQWpCOztBQUVBLFNBQVNDLGdCQUFULEdBQTRCO0FBQzFCLE1BQUlTLHlDQUF5Q2QsUUFBUU8saUNBQVIsQ0FBMENRLFFBQTFDLEVBQTdDO0FBQUEsTUFDSUMsK0JBQStCRixzQ0FEbkMsQ0FEMEIsQ0FFaUQ7O0FBRXZFLE1BQUk7QUFDRixRQUFJRyxNQUFKLENBQVcsT0FBT0QsNEJBQVAsR0FBc0MsR0FBakQ7QUFDRCxHQUZELENBR0EsT0FBTUUsS0FBTixFQUFhO0FBQ1hGLG1DQUErQixHQUEvQjtBQUNEOztBQUVMLE1BQUlHLHdCQUF3QixJQUFJRixNQUFKLENBQVcsT0FBT0QsNEJBQVAsR0FBc0MsR0FBakQsQ0FBNUI7QUFBQSxNQUNJSSxVQUFVLENBQ1IsRUFBRUMsVUFBV0YscUJBQWIsRUFEUSxDQURkOztBQUtBakIsZUFBYUosV0FBV3dCLFdBQVgsQ0FBdUJGLE9BQXZCLENBQWI7QUFDRCIsImZpbGUiOiJiYXNpY0V4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBCYXNpY0xleGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vTGV4ZXJzL2VzNi9iYXNpYy9sZXhlcicpOyAgLy8vXG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlJyk7XG5cbnZhciBtYXBwaW5ncyA9IHt9LFxuICAgIGJhc2ljTGV4ZXIgPSB1bmRlZmluZWQ7XG5cbmNsYXNzIEJhc2ljRXhhbXBsZSBleHRlbmRzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIHVwZGF0ZUJhc2ljTGV4ZXIoKTtcblxuICAgIEV4YW1wbGUudXBkYXRlUGFyc2VyKG1hcHBpbmdzKTtcblxuICAgIEV4YW1wbGUudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0Lm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlQmFzaWNMZXhlcigpO1xuXG4gICAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihtYXBwaW5ncyk7XG4gICAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShiYXNpY0xleGVyKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUuZ3JhbW1hclRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZXIobWFwcGluZ3MpO1xuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoYmFzaWNMZXhlcik7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLmNvbnRlbnRUZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGJhc2ljTGV4ZXIpO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlO1xuXG5mdW5jdGlvbiB1cGRhdGVCYXNpY0xleGVyKCkge1xuICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUgPSBFeGFtcGxlLnRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dC5nZXRWYWx1ZSgpLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlOyAvLy9cblxuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IFJlZ0V4cCgnXignICsgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiArICcpJyk7XG4gICAgICB9XG4gICAgICBjYXRjaChlcnJvcikge1xuICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gJy4nO1xuICAgICAgfVxuXG4gIHZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAgPSBuZXcgUmVnRXhwKCdeKCcgKyB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuICsgJyknKSxcbiAgICAgIGdyYW1tYXIgPSBbXG4gICAgICAgIHsgdGVybWluYWwgOiB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAgfVxuICAgICAgXTtcblxuICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcbn1cbiJdfQ==