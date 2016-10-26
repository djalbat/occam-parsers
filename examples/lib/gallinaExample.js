'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('../../es6/occam-lexers'),
    GallinaLexer = lexers.GallinaLexer;

var Example = require('./example');

var grammar = require('../../es6/grammar/gallina');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9nYWxsaW5hRXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiR2FsbGluYUxleGVyIiwiRXhhbXBsZSIsImdyYW1tYXIiLCJsZXhlciIsImZyb21Ob3RoaW5nIiwiR2FsbGluYUV4YW1wbGUiLCJncmFtbWFyVGV4dEFyZWFWYWx1ZSIsInNldEdyYW1tYXJUZXh0QXJlYVZhbHVlIiwidXBkYXRlIiwib25HcmFtbWFyVGV4dEFyZWFDaGFuZ2UiLCJvbkNvbnRlbnRUZXh0QXJlYUNoYW5nZSIsInVwZGF0ZVBhcnNlciIsInVwZGF0ZVBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSx3QkFBUixDQUFiO0FBQUEsSUFDSUMsZUFBZUYsT0FBT0UsWUFEMUI7O0FBR0EsSUFBSUMsVUFBVUYsUUFBUSxXQUFSLENBQWQ7O0FBRUEsSUFBSUcsVUFBVUgsUUFBUSwyQkFBUixDQUFkOztBQUVBLElBQUlJLFFBQVFILGFBQWFJLFdBQWIsRUFBWjs7SUFFTUMsYzs7Ozs7OzswQkFDUztBQUNYLFVBQUlDLHVCQUF1QkosT0FBM0IsQ0FEVyxDQUN5Qjs7QUFFcENELGNBQVFNLHVCQUFSLENBQWdDRCxvQkFBaEM7O0FBRUFFOztBQUVBUCxjQUFRUSx1QkFBUixDQUFnQyxZQUFXO0FBQ3pDRDtBQUNELE9BRkQ7O0FBSUFQLGNBQVFTLHVCQUFSLENBQWdDLFlBQVc7QUFDekNGO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHSCxTQUFTQSxNQUFULEdBQWtCO0FBQ2hCRzs7QUFFQVYsVUFBUVcsZUFBUixDQUF3QlQsS0FBeEI7QUFDRDs7QUFFRFUsT0FBT0MsT0FBUCxHQUFpQlQsY0FBakI7O0FBRUEsU0FBU00sWUFBVCxHQUF3QjtBQUN0QixNQUFJSSwrQkFBK0JmLGFBQWFlLDRCQUFiLEVBQW5DO0FBQUEsTUFDSUMsd0JBQXdCaEIsYUFBYWdCLHFCQUFiLEVBRDVCOztBQUdBZixVQUFRVSxZQUFSLENBQXFCVCxPQUFyQixFQUE4QmEsNEJBQTlCLEVBQTREQyxxQkFBNUQ7QUFDRCIsImZpbGUiOiJnYWxsaW5hRXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJy4uLy4uL2VzNi9vY2NhbS1sZXhlcnMnKSxcbiAgICBHYWxsaW5hTGV4ZXIgPSBsZXhlcnMuR2FsbGluYUxleGVyO1xuXG52YXIgRXhhbXBsZSA9IHJlcXVpcmUoJy4vZXhhbXBsZScpO1xuXG52YXIgZ3JhbW1hciA9IHJlcXVpcmUoJy4uLy4uL2VzNi9ncmFtbWFyL2dhbGxpbmEnKTtcblxudmFyIGxleGVyID0gR2FsbGluYUxleGVyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEdhbGxpbmFFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICB2YXIgZ3JhbW1hclRleHRBcmVhVmFsdWUgPSBncmFtbWFyOyAvLy9cblxuICAgIEV4YW1wbGUuc2V0R3JhbW1hclRleHRBcmVhVmFsdWUoZ3JhbW1hclRleHRBcmVhVmFsdWUpO1xuXG4gICAgdXBkYXRlKCk7XG5cbiAgICBFeGFtcGxlLm9uR3JhbW1hclRleHRBcmVhQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRBcmVhQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICB1cGRhdGVQYXJzZXIoKTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShsZXhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FsbGluYUV4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhcnNlcigpIHtcbiAgdmFyIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gPSBHYWxsaW5hTGV4ZXIudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gR2FsbGluYUxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VyKGdyYW1tYXIsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIHNpZ25pZmljYW50VG9rZW5UeXBlcyk7XG59XG4iXX0=