'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('../../../es6/occam-lexers'),
    GallinaLexer = lexers.GallinaLexer;

var Example = require('../example');

var grammar = require('../../../es6/grammar/gallina');

var lexer = GallinaLexer.fromNothing();

var GallinaExample = function () {
  function GallinaExample() {
    _classCallCheck(this, GallinaExample);
  }

  _createClass(GallinaExample, null, [{
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

  return GallinaExample;
}();

function update() {
  updateParser();

  Example.updateParseTree(lexer);
}

module.exports = GallinaExample;

function updateParser() {
  var terminalSymbolsRegExpPattern = GallinaLexer.terminalSymbolsRegExpPattern(),
      significantTokenTypes = GallinaLexer.significantTokenTypes();

  Example.updateParser(grammar, terminalSymbolsRegExpPattern, significantTokenTypes);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2dhbGxpbmEuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkdhbGxpbmFMZXhlciIsIkV4YW1wbGUiLCJncmFtbWFyIiwibGV4ZXIiLCJmcm9tTm90aGluZyIsIkdhbGxpbmFFeGFtcGxlIiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJzZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSIsInVwZGF0ZSIsIm9uR3JhbW1hclRleHRBcmVhQ2hhbmdlIiwib25Db250ZW50VGV4dEFyZWFDaGFuZ2UiLCJ1cGRhdGVQYXJzZXIiLCJ1cGRhdGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInNpZ25pZmljYW50VG9rZW5UeXBlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsMkJBQVIsQ0FBYjtBQUFBLElBQ0lDLGVBQWVGLE9BQU9FLFlBRDFCOztBQUdBLElBQUlDLFVBQVVGLFFBQVEsWUFBUixDQUFkOztBQUVBLElBQUlHLFVBQVVILFFBQVEsOEJBQVIsQ0FBZDs7QUFFQSxJQUFJSSxRQUFRSCxhQUFhSSxXQUFiLEVBQVo7O0lBRU1DLGM7Ozs7Ozs7MEJBQ1M7QUFDWCxVQUFJQyx1QkFBdUJKLE9BQTNCLENBRFcsQ0FDeUI7O0FBRXBDRCxjQUFRTSx1QkFBUixDQUFnQ0Qsb0JBQWhDOztBQUVBRTs7QUFFQVAsY0FBUVEsdUJBQVIsQ0FBZ0MsWUFBVztBQUN6Q0Q7QUFDRCxPQUZEOztBQUlBUCxjQUFRUyx1QkFBUixDQUFnQyxZQUFXO0FBQ3pDRjtBQUNELE9BRkQ7QUFHRDs7Ozs7O0FBR0gsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQkc7O0FBRUFWLFVBQVFXLGVBQVIsQ0FBd0JULEtBQXhCO0FBQ0Q7O0FBRURVLE9BQU9DLE9BQVAsR0FBaUJULGNBQWpCOztBQUVBLFNBQVNNLFlBQVQsR0FBd0I7QUFDdEIsTUFBSUksK0JBQStCZixhQUFhZSw0QkFBYixFQUFuQztBQUFBLE1BQ0lDLHdCQUF3QmhCLGFBQWFnQixxQkFBYixFQUQ1Qjs7QUFHQWYsVUFBUVUsWUFBUixDQUFxQlQsT0FBckIsRUFBOEJhLDRCQUE5QixFQUE0REMscUJBQTVEO0FBQ0QiLCJmaWxlIjoiZ2FsbGluYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJy4uLy4uLy4uL2VzNi9vY2NhbS1sZXhlcnMnKSxcbiAgICBHYWxsaW5hTGV4ZXIgPSBsZXhlcnMuR2FsbGluYUxleGVyO1xuXG52YXIgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKTtcblxudmFyIGdyYW1tYXIgPSByZXF1aXJlKCcuLi8uLi8uLi9lczYvZ3JhbW1hci9nYWxsaW5hJyk7XG5cbnZhciBsZXhlciA9IEdhbGxpbmFMZXhlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBHYWxsaW5hRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gZ3JhbW1hcjsgLy8vXG5cbiAgICBFeGFtcGxlLnNldEdyYW1tYXJUZXh0QXJlYVZhbHVlKGdyYW1tYXJUZXh0QXJlYVZhbHVlKTtcblxuICAgIHVwZGF0ZSgpO1xuXG4gICAgRXhhbXBsZS5vbkdyYW1tYXJUZXh0QXJlYUNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgRXhhbXBsZS5vbkNvbnRlbnRUZXh0QXJlYUNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgdXBkYXRlUGFyc2VyKCk7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUobGV4ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFFeGFtcGxlO1xuXG5mdW5jdGlvbiB1cGRhdGVQYXJzZXIoKSB7XG4gIHZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gR2FsbGluYUxleGVyLnRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oKSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEdhbGxpbmFMZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXMoKTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihncmFtbWFyLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMpO1xufVxuIl19