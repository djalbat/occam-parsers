'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('../../../es6/occam-lexers'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJGbG9yZW5jZUxleGVyIiwiRXhhbXBsZSIsImdyYW1tYXIiLCJsZXhlciIsImZyb21Ob3RoaW5nIiwiRmxvcmVuY2VFeGFtcGxlIiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJzZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSIsInVwZGF0ZSIsIm9uR3JhbW1hclRleHRBcmVhQ2hhbmdlIiwib25Db250ZW50VGV4dEFyZWFDaGFuZ2UiLCJ1cGRhdGVQYXJzZXIiLCJ1cGRhdGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInNpZ25pZmljYW50VG9rZW5UeXBlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsMkJBQVIsQ0FBYjtBQUFBLElBQ0lDLGdCQUFnQkYsT0FBT0UsYUFEM0I7O0FBR0EsSUFBSUMsVUFBVUYsUUFBUSxZQUFSLENBQWQ7O0FBRUEsSUFBSUcsVUFBVUgsUUFBUSwrQkFBUixDQUFkOztBQUVBLElBQUlJLFFBQVFILGNBQWNJLFdBQWQsRUFBWjs7SUFFTUMsZTs7Ozs7OzswQkFDUztBQUNYLFVBQUlDLHVCQUF1QkosT0FBM0IsQ0FEVyxDQUN5Qjs7QUFFcENELGNBQVFNLHVCQUFSLENBQWdDRCxvQkFBaEM7O0FBRUFFOztBQUVBUCxjQUFRUSx1QkFBUixDQUFnQyxZQUFXO0FBQ3pDRDtBQUNELE9BRkQ7O0FBSUFQLGNBQVFTLHVCQUFSLENBQWdDLFlBQVc7QUFDekNGO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHSCxTQUFTQSxNQUFULEdBQWtCO0FBQ2hCRzs7QUFFQVYsVUFBUVcsZUFBUixDQUF3QlQsS0FBeEI7QUFDRDs7QUFFRFUsT0FBT0MsT0FBUCxHQUFpQlQsZUFBakI7O0FBRUEsU0FBU00sWUFBVCxHQUF3QjtBQUN0QixNQUFJSSwrQkFBK0JmLGNBQWNlLDRCQUFkLEVBQW5DO0FBQUEsTUFDSUMsd0JBQXdCaEIsY0FBY2dCLHFCQUFkLEVBRDVCOztBQUdBZixVQUFRVSxZQUFSLENBQXFCVCxPQUFyQixFQUE4QmEsNEJBQTlCLEVBQTREQyxxQkFBNUQ7QUFDRCIsImZpbGUiOiJmbG9yZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJy4uLy4uLy4uL2VzNi9vY2NhbS1sZXhlcnMnKSxcbiAgICBGbG9yZW5jZUxleGVyID0gbGV4ZXJzLkZsb3JlbmNlTGV4ZXI7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpO1xuXG52YXIgZ3JhbW1hciA9IHJlcXVpcmUoJy4uLy4uLy4uL2VzNi9ncmFtbWFyL2Zsb3JlbmNlJyk7XG5cbnZhciBsZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgRmxvcmVuY2VFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICB2YXIgZ3JhbW1hclRleHRBcmVhVmFsdWUgPSBncmFtbWFyOyAvLy9cblxuICAgIEV4YW1wbGUuc2V0R3JhbW1hclRleHRBcmVhVmFsdWUoZ3JhbW1hclRleHRBcmVhVmFsdWUpO1xuXG4gICAgdXBkYXRlKCk7XG5cbiAgICBFeGFtcGxlLm9uR3JhbW1hclRleHRBcmVhQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRBcmVhQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICB1cGRhdGVQYXJzZXIoKTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShsZXhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VFeGFtcGxlO1xuXG5mdW5jdGlvbiB1cGRhdGVQYXJzZXIoKSB7XG4gIHZhciB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gRmxvcmVuY2VMZXhlci50ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKCksXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VyKGdyYW1tYXIsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4sIHNpZ25pZmljYW50VG9rZW5UeXBlcyk7XG59XG4iXX0=