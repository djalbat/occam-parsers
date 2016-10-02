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

  basicLexer = BasicLexer.fromTerminalSymbolsRegExpPattern(terminalSymbolsRegExpPattern);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9iYXNpY0V4YW1wbGUuanMiXSwibmFtZXMiOlsiQmFzaWNMZXhlciIsInJlcXVpcmUiLCJFeGFtcGxlIiwibWFwcGluZ3MiLCJiYXNpY0xleGVyIiwidW5kZWZpbmVkIiwiQmFzaWNFeGFtcGxlIiwidXBkYXRlQmFzaWNMZXhlciIsInVwZGF0ZVBhcnNlciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dCIsIm9uQ2hhbmdlIiwidXBkYXRlUGFyc2VUcmVlIiwiZ3JhbW1hclRleHRBcmVhIiwiY29udGVudFRleHRBcmVhIiwibW9kdWxlIiwiZXhwb3J0cyIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwiZnJvbVRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsYUFBYUMsUUFBUSxpQ0FBUixDQUFqQixDLENBQThEOztBQUU5RCxJQUFJQyxVQUFVRCxRQUFRLFdBQVIsQ0FBZDs7QUFFQSxJQUFJRSxXQUFXLEVBQWY7QUFBQSxJQUNJQyxhQUFhQyxTQURqQjs7SUFHTUMsWTs7Ozs7Ozs7Ozs7MEJBQ1M7QUFDWEM7QUFDQUwsY0FBUU0sWUFBUixDQUFxQkwsUUFBckI7O0FBRUFELGNBQVFPLGlDQUFSLENBQTBDQyxRQUExQyxDQUFtRCxZQUFXO0FBQzVESDtBQUNBTCxnQkFBUU0sWUFBUixDQUFxQkwsUUFBckI7QUFDQUQsZ0JBQVFTLGVBQVIsQ0FBd0JQLFVBQXhCO0FBQ0QsT0FKRDs7QUFNQUYsY0FBUVUsZUFBUixDQUF3QkYsUUFBeEIsQ0FBaUMsWUFBVztBQUMxQ1IsZ0JBQVFNLFlBQVIsQ0FBcUJMLFFBQXJCO0FBQ0FELGdCQUFRUyxlQUFSLENBQXdCUCxVQUF4QjtBQUNELE9BSEQ7O0FBS0FGLGNBQVFXLGVBQVIsQ0FBd0JILFFBQXhCLENBQWlDLFlBQVc7QUFDMUNSLGdCQUFRUyxlQUFSLENBQXdCUCxVQUF4QjtBQUNELE9BRkQ7QUFHRDs7OztFQW5Cd0JGLE87O0FBc0IzQlksT0FBT0MsT0FBUCxHQUFpQlQsWUFBakI7O0FBRUEsU0FBU0MsZ0JBQVQsR0FBNEI7QUFDMUIsTUFBSVMseUNBQXlDZCxRQUFRTyxpQ0FBUixDQUEwQ1EsUUFBMUMsRUFBN0M7QUFBQSxNQUNJQywrQkFBK0JGLHNDQURuQyxDQUQwQixDQUVpRDs7QUFFM0VaLGVBQWFKLFdBQVdtQixnQ0FBWCxDQUE0Q0QsNEJBQTVDLENBQWI7QUFDRCIsImZpbGUiOiJiYXNpY0V4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBCYXNpY0xleGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vTGV4ZXJzL2VzNi9iYXNpYy9sZXhlcicpOyAgLy8vXG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlJyk7XG5cbnZhciBtYXBwaW5ncyA9IHt9LFxuICAgIGJhc2ljTGV4ZXIgPSB1bmRlZmluZWQ7XG5cbmNsYXNzIEJhc2ljRXhhbXBsZSBleHRlbmRzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIHVwZGF0ZUJhc2ljTGV4ZXIoKTsgICAgXG4gICAgRXhhbXBsZS51cGRhdGVQYXJzZXIobWFwcGluZ3MpO1xuXG4gICAgRXhhbXBsZS50ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuSW5wdXQub25DaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGVCYXNpY0xleGVyKCk7XG4gICAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihtYXBwaW5ncyk7XG4gICAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShiYXNpY0xleGVyKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUuZ3JhbW1hclRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZXIobWFwcGluZ3MpO1xuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoYmFzaWNMZXhlcik7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLmNvbnRlbnRUZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGJhc2ljTGV4ZXIpO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlO1xuXG5mdW5jdGlvbiB1cGRhdGVCYXNpY0xleGVyKCkge1xuICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUgPSBFeGFtcGxlLnRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dC5nZXRWYWx1ZSgpLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlOyAvLy9cblxuICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tVGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybih0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKTtcbn1cbiJdfQ==