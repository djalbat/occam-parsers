'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2dhbGxpbmEuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkdhbGxpbmFMZXhlciIsIkV4YW1wbGUiLCJncmFtbWFyIiwibGV4ZXIiLCJmcm9tTm90aGluZyIsIkdhbGxpbmFFeGFtcGxlIiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJzZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSIsInVwZGF0ZSIsIm9uR3JhbW1hclRleHRBcmVhQ2hhbmdlIiwib25Db250ZW50VGV4dEFyZWFDaGFuZ2UiLCJ1cGRhdGVQYXJzZXIiLCJ1cGRhdGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIiwidGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsInNpZ25pZmljYW50VG9rZW5UeXBlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsZUFBZUYsT0FBT0UsWUFEMUI7O0FBR0EsSUFBSUMsVUFBVUYsUUFBUSxZQUFSLENBQWQ7O0FBRUEsSUFBSUcsVUFBVUgsUUFBUSw4QkFBUixDQUFkOztBQUVBLElBQUlJLFFBQVFILGFBQWFJLFdBQWIsRUFBWjs7SUFFTUMsYzs7Ozs7OzswQkFDUztBQUNYLFVBQUlDLHVCQUF1QkosT0FBM0IsQ0FEVyxDQUN5Qjs7QUFFcENELGNBQVFNLHVCQUFSLENBQWdDRCxvQkFBaEM7O0FBRUFFOztBQUVBUCxjQUFRUSx1QkFBUixDQUFnQyxZQUFXO0FBQ3pDRDtBQUNELE9BRkQ7O0FBSUFQLGNBQVFTLHVCQUFSLENBQWdDLFlBQVc7QUFDekNGO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHSCxTQUFTQSxNQUFULEdBQWtCO0FBQ2hCRzs7QUFFQVYsVUFBUVcsZUFBUixDQUF3QlQsS0FBeEI7QUFDRDs7QUFFRFUsT0FBT0MsT0FBUCxHQUFpQlQsY0FBakI7O0FBRUEsU0FBU00sWUFBVCxHQUF3QjtBQUN0QixNQUFJSSwrQkFBK0JmLGFBQWFlLDRCQUFiLEVBQW5DO0FBQUEsTUFDSUMsd0JBQXdCaEIsYUFBYWdCLHFCQUFiLEVBRDVCOztBQUdBZixVQUFRVSxZQUFSLENBQXFCVCxPQUFyQixFQUE4QmEsNEJBQTlCLEVBQTREQyxxQkFBNUQ7QUFDRCIsImZpbGUiOiJnYWxsaW5hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgR2FsbGluYUxleGVyID0gbGV4ZXJzLkdhbGxpbmFMZXhlcjtcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyk7XG5cbnZhciBncmFtbWFyID0gcmVxdWlyZSgnLi4vLi4vLi4vZXM2L2dyYW1tYXIvZ2FsbGluYScpO1xuXG52YXIgbGV4ZXIgPSBHYWxsaW5hTGV4ZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgR2FsbGluYUV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIHZhciBncmFtbWFyVGV4dEFyZWFWYWx1ZSA9IGdyYW1tYXI7IC8vL1xuXG4gICAgRXhhbXBsZS5zZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZShncmFtbWFyVGV4dEFyZWFWYWx1ZSk7XG5cbiAgICB1cGRhdGUoKTtcblxuICAgIEV4YW1wbGUub25HcmFtbWFyVGV4dEFyZWFDaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUub25Db250ZW50VGV4dEFyZWFDaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIHVwZGF0ZVBhcnNlcigpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGxleGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYWxsaW5hRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlUGFyc2VyKCkge1xuICB2YXIgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IEdhbGxpbmFMZXhlci50ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKCksXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBHYWxsaW5hTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzKCk7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZXIoZ3JhbW1hciwgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKTtcbn1cbiJdfQ==