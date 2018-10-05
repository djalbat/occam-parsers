'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomGrammarLexicalPatternParser = function () {
  function CustomGrammarLexicalPatternParser() {
    _classCallCheck(this, CustomGrammarLexicalPatternParser);
  }

  _createClass(CustomGrammarLexicalPatternParser, [{
    key: 'nodeFromTokens',
    value: function nodeFromTokens(tokens) {
      var node = null; ///

      return node;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var customGrammarLexicalPatternParser = new CustomGrammarLexicalPatternParser();

      return customGrammarLexicalPatternParser;
    }
  }]);

  return CustomGrammarLexicalPatternParser;
}();

module.exports = CustomGrammarLexicalPatternParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciIsInRva2VucyIsIm5vZGUiLCJjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGlDOzs7Ozs7O21DQUNXQyxNLEVBQVE7QUFDckIsVUFBTUMsT0FBTyxJQUFiLENBRHFCLENBQ0Q7O0FBRXBCLGFBQU9BLElBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQyxvQ0FBb0MsSUFBSUgsaUNBQUosRUFBMUM7O0FBRUEsYUFBT0csaUNBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJMLGlDQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVyblBhcnNlciB7XG4gIG5vZGVGcm9tVG9rZW5zKHRva2Vucykge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm5QYXJzZXIgPSBuZXcgQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyKCk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuUGFyc2VyO1xuIl19