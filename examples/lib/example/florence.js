'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    FlorenceLexer = lexers.FlorenceLexer;

var Example = require('../example');

var grammar = require('../../../es6/grammar/florence');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJGbG9yZW5jZUxleGVyIiwiRXhhbXBsZSIsImdyYW1tYXIiLCJsZXhlciIsImZyb21Ob3RoaW5nIiwiRmxvcmVuY2VFeGFtcGxlIiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJzZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSIsInVwZGF0ZSIsIm9uR3JhbW1hclRleHRBcmVhQ2hhbmdlIiwib25Db250ZW50VGV4dEFyZWFDaGFuZ2UiLCJ1cGRhdGVQYXJzZXIiLCJ1cGRhdGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInNpZ25pZmljYW50VG9rZW5UeXBlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsZ0JBQWdCRixPQUFPRSxhQUQzQjs7QUFHQSxJQUFJQyxVQUFVRixRQUFRLFlBQVIsQ0FBZDs7QUFFQSxJQUFJRyxVQUFVSCxRQUFRLCtCQUFSLENBQWQ7O0FBRUEsSUFBSUksUUFBUUgsY0FBY0ksV0FBZCxFQUFaOztJQUVNQyxlOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBSUMsdUJBQXVCSixPQUEzQixDQURXLENBQ3lCOztBQUVwQ0QsY0FBUU0sdUJBQVIsQ0FBZ0NELG9CQUFoQzs7QUFFQUU7O0FBRUFQLGNBQVFRLHVCQUFSLENBQWdDLFlBQVc7QUFDekNEO0FBQ0QsT0FGRDs7QUFJQVAsY0FBUVMsdUJBQVIsQ0FBZ0MsWUFBVztBQUN6Q0Y7QUFDRCxPQUZEO0FBR0Q7Ozs7OztBQUdILFNBQVNBLE1BQVQsR0FBa0I7QUFDaEJHOztBQUVBVixVQUFRVyxlQUFSLENBQXdCVCxLQUF4QjtBQUNEOztBQUVEVSxPQUFPQyxPQUFQLEdBQWlCVCxlQUFqQjs7QUFFQSxTQUFTTSxZQUFULEdBQXdCO0FBQ3RCLE1BQUlJLCtCQUErQmYsY0FBY2UsNEJBQWQsRUFBbkM7QUFBQSxNQUNJQyx3QkFBd0JoQixjQUFjZ0IscUJBQWQsRUFENUI7O0FBR0FmLFVBQVFVLFlBQVIsQ0FBcUJULE9BQXJCLEVBQThCYSw0QkFBOUIsRUFBNERDLHFCQUE1RDtBQUNEIiwiZmlsZSI6ImZsb3JlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgRmxvcmVuY2VMZXhlciA9IGxleGVycy5GbG9yZW5jZUxleGVyO1xuXG52YXIgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKTtcblxudmFyIGdyYW1tYXIgPSByZXF1aXJlKCcuLi8uLi8uLi9lczYvZ3JhbW1hci9mbG9yZW5jZScpO1xuXG52YXIgbGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gZ3JhbW1hcjsgLy8vXG5cbiAgICBFeGFtcGxlLnNldEdyYW1tYXJUZXh0QXJlYVZhbHVlKGdyYW1tYXJUZXh0QXJlYVZhbHVlKTtcblxuICAgIHVwZGF0ZSgpO1xuXG4gICAgRXhhbXBsZS5vbkdyYW1tYXJUZXh0QXJlYUNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgRXhhbXBsZS5vbkNvbnRlbnRUZXh0QXJlYUNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgdXBkYXRlUGFyc2VyKCk7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUobGV4ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlUGFyc2VyKCkge1xuICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IEZsb3JlbmNlTGV4ZXIudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gRmxvcmVuY2VMZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXMoKTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihncmFtbWFyLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMpO1xufVxuIl19