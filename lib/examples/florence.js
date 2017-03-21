'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    FlorenceLexer = lexers.FlorenceLexer;

var Example = require('../example');

var FlorenceParser = require('../florence/parser'),
    florenceGrammar = require('../florence/grammar');

var florenceLexer = FlorenceLexer.fromNothing(),
    florenceParser = FlorenceParser.fromNothing();

var FlorenceExample = function () {
  function FlorenceExample() {
    _classCallCheck(this, FlorenceExample);
  }

  _createClass(FlorenceExample, null, [{
    key: 'run',
    value: function run() {
      var grammarTextareaValue = florenceGrammar; ///

      Example.setGrammarTextareaValue(grammarTextareaValue);

      update();

      Example.onContentTextareaKeyUp(function () {
        update();
      });
    }
  }]);

  return FlorenceExample;
}();

function update() {
  Example.updateParseTree(florenceLexer, florenceParser);
}

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRmxvcmVuY2VMZXhlciIsIkV4YW1wbGUiLCJGbG9yZW5jZVBhcnNlciIsImZsb3JlbmNlR3JhbW1hciIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsImZsb3JlbmNlUGFyc2VyIiwiRmxvcmVuY2VFeGFtcGxlIiwiZ3JhbW1hclRleHRhcmVhVmFsdWUiLCJzZXRHcmFtbWFyVGV4dGFyZWFWYWx1ZSIsInVwZGF0ZSIsIm9uQ29udGVudFRleHRhcmVhS2V5VXAiLCJ1cGRhdGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxnQkFBZ0JGLE9BQU9FLGFBRDNCOztBQUdBLElBQUlDLFVBQVVGLFFBQVEsWUFBUixDQUFkOztBQUVBLElBQUlHLGlCQUFpQkgsUUFBUSxvQkFBUixDQUFyQjtBQUFBLElBQ0lJLGtCQUFrQkosUUFBUSxxQkFBUixDQUR0Qjs7QUFHQSxJQUFJSyxnQkFBZ0JKLGNBQWNLLFdBQWQsRUFBcEI7QUFBQSxJQUNJQyxpQkFBaUJKLGVBQWVHLFdBQWYsRUFEckI7O0lBR01FLGU7Ozs7Ozs7MEJBQ1M7QUFDWCxVQUFJQyx1QkFBdUJMLGVBQTNCLENBRFcsQ0FDaUM7O0FBRTVDRixjQUFRUSx1QkFBUixDQUFnQ0Qsb0JBQWhDOztBQUVBRTs7QUFFQVQsY0FBUVUsc0JBQVIsQ0FBK0IsWUFBVztBQUN4Q0Q7QUFDRCxPQUZEO0FBR0Q7Ozs7OztBQUdILFNBQVNBLE1BQVQsR0FBa0I7QUFDaEJULFVBQVFXLGVBQVIsQ0FBd0JSLGFBQXhCLEVBQXVDRSxjQUF2QztBQUNEOztBQUVETyxPQUFPQyxPQUFQLEdBQWlCUCxlQUFqQiIsImZpbGUiOiJmbG9yZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSBsZXhlcnMuRmxvcmVuY2VMZXhlcjtcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyk7XG5cbnZhciBGbG9yZW5jZVBhcnNlciA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL3BhcnNlcicpLFxuICAgIGZsb3JlbmNlR3JhbW1hciA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL2dyYW1tYXInKTtcblxudmFyIGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIHZhciBncmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGZsb3JlbmNlR3JhbW1hcjsgLy8vXG5cbiAgICBFeGFtcGxlLnNldEdyYW1tYXJUZXh0YXJlYVZhbHVlKGdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIHVwZGF0ZSgpO1xuXG4gICAgRXhhbXBsZS5vbkNvbnRlbnRUZXh0YXJlYUtleVVwKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VFeGFtcGxlO1xuIl19