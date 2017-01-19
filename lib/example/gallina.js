'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    GallinaLexer = lexers.GallinaLexer;

var Example = require('../example');

var GallinaParser = require('../gallina/parser'),
    gallinaGrammar = require('../gallina/grammar');

// var gallinaLexer = GallinaLexer.fromNothing(),
//     gallinaParser = GallinaParser.fromNothing();

var GallinaExample = function () {
  function GallinaExample() {
    _classCallCheck(this, GallinaExample);
  }

  _createClass(GallinaExample, null, [{
    key: 'run',
    value: function run() {
      var grammarTextAreaValue = gallinaGrammar; ///

      Example.setGrammarTextAreaValue(grammarTextAreaValue);

      update();

      Example.onContentTextAreaChange(function () {
        update();
      });
    }
  }]);

  return GallinaExample;
}();

function update() {
  Example.updateParseTree(gallinaLexer, gallinaParser);
}

module.exports = GallinaExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2dhbGxpbmEuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkdhbGxpbmFMZXhlciIsIkV4YW1wbGUiLCJHYWxsaW5hUGFyc2VyIiwiZ2FsbGluYUdyYW1tYXIiLCJHYWxsaW5hRXhhbXBsZSIsImdyYW1tYXJUZXh0QXJlYVZhbHVlIiwic2V0R3JhbW1hclRleHRBcmVhVmFsdWUiLCJ1cGRhdGUiLCJvbkNvbnRlbnRUZXh0QXJlYUNoYW5nZSIsInVwZGF0ZVBhcnNlVHJlZSIsImdhbGxpbmFMZXhlciIsImdhbGxpbmFQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxlQUFlRixPQUFPRSxZQUQxQjs7QUFHQSxJQUFJQyxVQUFVRixRQUFRLFlBQVIsQ0FBZDs7QUFFQSxJQUFJRyxnQkFBZ0JILFFBQVEsbUJBQVIsQ0FBcEI7QUFBQSxJQUNJSSxpQkFBaUJKLFFBQVEsb0JBQVIsQ0FEckI7O0FBR0E7QUFDQTs7SUFFTUssYzs7Ozs7OzswQkFDUztBQUNYLFVBQUlDLHVCQUF1QkYsY0FBM0IsQ0FEVyxDQUNnQzs7QUFFM0NGLGNBQVFLLHVCQUFSLENBQWdDRCxvQkFBaEM7O0FBRUFFOztBQUVBTixjQUFRTyx1QkFBUixDQUFnQyxZQUFXO0FBQ3pDRDtBQUNELE9BRkQ7QUFHRDs7Ozs7O0FBR0gsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQk4sVUFBUVEsZUFBUixDQUF3QkMsWUFBeEIsRUFBc0NDLGFBQXRDO0FBQ0Q7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUJULGNBQWpCIiwiZmlsZSI6ImdhbGxpbmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBHYWxsaW5hTGV4ZXIgPSBsZXhlcnMuR2FsbGluYUxleGVyO1xuXG52YXIgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKTtcblxudmFyIEdhbGxpbmFQYXJzZXIgPSByZXF1aXJlKCcuLi9nYWxsaW5hL3BhcnNlcicpLFxuICAgIGdhbGxpbmFHcmFtbWFyID0gcmVxdWlyZSgnLi4vZ2FsbGluYS9ncmFtbWFyJyk7XG5cbi8vIHZhciBnYWxsaW5hTGV4ZXIgPSBHYWxsaW5hTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbi8vICAgICBnYWxsaW5hUGFyc2VyID0gR2FsbGluYVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBHYWxsaW5hRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gZ2FsbGluYUdyYW1tYXI7IC8vL1xuXG4gICAgRXhhbXBsZS5zZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZShncmFtbWFyVGV4dEFyZWFWYWx1ZSk7XG5cbiAgICB1cGRhdGUoKTtcblxuICAgIEV4YW1wbGUub25Db250ZW50VGV4dEFyZWFDaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGdhbGxpbmFMZXhlciwgZ2FsbGluYVBhcnNlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FsbGluYUV4YW1wbGU7XG4iXX0=