'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('../../es6/occam-lexers'),
    FlorenceLexer = lexers.FlorenceLexer;

var Example = require('./example');

var grammar = require('../../es6/grammar/florence');

var lexer = FlorenceLexer.fromNothing();

var FlorenceExample = function () {
  function FlorenceExample() {
    _classCallCheck(this, FlorenceExample);
  }

  _createClass(FlorenceExample, null, [{
    key: 'run',
    value: function run() {
      var grammarTextAreaValue = grammar; ///

      Example.setGrammarTextAreaValue(grammarTextAreaValue);

      update();

      Example.onGrammarTextAreaChange(function () {
        update();
      });

      Example.onContentTextAreaChange(function () {
        update();
      });
    }
  }]);

  return FlorenceExample;
}();

function update() {
  updateParser();

  Example.updateParseTree(lexer);
}

module.exports = FlorenceExample;

function updateParser() {
  var terminalSymbolsRegExpPattern = FlorenceLexer.terminalSymbolsRegExpPattern(),
      significantTokenTypes = FlorenceLexer.significantTokenTypes();

  Example.updateParser(grammar, terminalSymbolsRegExpPattern, significantTokenTypes);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mbG9yZW5jZUV4YW1wbGUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkZsb3JlbmNlTGV4ZXIiLCJFeGFtcGxlIiwiZ3JhbW1hciIsImxleGVyIiwiZnJvbU5vdGhpbmciLCJGbG9yZW5jZUV4YW1wbGUiLCJncmFtbWFyVGV4dEFyZWFWYWx1ZSIsInNldEdyYW1tYXJUZXh0QXJlYVZhbHVlIiwidXBkYXRlIiwib25HcmFtbWFyVGV4dEFyZWFDaGFuZ2UiLCJvbkNvbnRlbnRUZXh0QXJlYUNoYW5nZSIsInVwZGF0ZVBhcnNlciIsInVwZGF0ZVBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSx3QkFBUixDQUFiO0FBQUEsSUFDSUMsZ0JBQWdCRixPQUFPRSxhQUQzQjs7QUFHQSxJQUFJQyxVQUFVRixRQUFRLFdBQVIsQ0FBZDs7QUFFQSxJQUFJRyxVQUFVSCxRQUFRLDRCQUFSLENBQWQ7O0FBRUEsSUFBSUksUUFBUUgsY0FBY0ksV0FBZCxFQUFaOztJQUVNQyxlOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBSUMsdUJBQXVCSixPQUEzQixDQURXLENBQ3lCOztBQUVwQ0QsY0FBUU0sdUJBQVIsQ0FBZ0NELG9CQUFoQzs7QUFFQUU7O0FBRUFQLGNBQVFRLHVCQUFSLENBQWdDLFlBQVc7QUFDekNEO0FBQ0QsT0FGRDs7QUFJQVAsY0FBUVMsdUJBQVIsQ0FBZ0MsWUFBVztBQUN6Q0Y7QUFDRCxPQUZEO0FBR0Q7Ozs7OztBQUdILFNBQVNBLE1BQVQsR0FBa0I7QUFDaEJHOztBQUVBVixVQUFRVyxlQUFSLENBQXdCVCxLQUF4QjtBQUNEOztBQUVEVSxPQUFPQyxPQUFQLEdBQWlCVCxlQUFqQjs7QUFFQSxTQUFTTSxZQUFULEdBQXdCO0FBQ3RCLE1BQUlJLCtCQUErQmYsY0FBY2UsNEJBQWQsRUFBbkM7QUFBQSxNQUNJQyx3QkFBd0JoQixjQUFjZ0IscUJBQWQsRUFENUI7O0FBR0FmLFVBQVFVLFlBQVIsQ0FBcUJULE9BQXJCLEVBQThCYSw0QkFBOUIsRUFBNERDLHFCQUE1RDtBQUNEIiwiZmlsZSI6ImZsb3JlbmNlRXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJy4uLy4uL2VzNi9vY2NhbS1sZXhlcnMnKSxcbiAgICBGbG9yZW5jZUxleGVyID0gbGV4ZXJzLkZsb3JlbmNlTGV4ZXI7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlJyk7XG5cbnZhciBncmFtbWFyID0gcmVxdWlyZSgnLi4vLi4vZXM2L2dyYW1tYXIvZmxvcmVuY2UnKTtcblxudmFyIGxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIHZhciBncmFtbWFyVGV4dEFyZWFWYWx1ZSA9IGdyYW1tYXI7IC8vL1xuXG4gICAgRXhhbXBsZS5zZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZShncmFtbWFyVGV4dEFyZWFWYWx1ZSk7XG5cbiAgICB1cGRhdGUoKTtcblxuICAgIEV4YW1wbGUub25HcmFtbWFyVGV4dEFyZWFDaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUub25Db250ZW50VGV4dEFyZWFDaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIHVwZGF0ZVBhcnNlcigpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGxleGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUV4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhcnNlcigpIHtcbiAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBGbG9yZW5jZUxleGVyLnRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oKSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEZsb3JlbmNlTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzKCk7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZXIoZ3JhbW1hciwgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKTtcbn1cbiJdfQ==