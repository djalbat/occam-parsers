'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    FlorenceLexer = lexers.FlorenceLexer;

var Example = require('../example');

var FlorenceParser = require('../../../es6/florence/parser'),
    florenceGrammar = require('../../../es6/florence/grammar');

var florenceLexer = FlorenceLexer.fromNothing(),
    florenceParser = FlorenceParser.fromNothing();

var FlorenceExample = function () {
  function FlorenceExample() {
    _classCallCheck(this, FlorenceExample);
  }

  _createClass(FlorenceExample, null, [{
    key: 'run',
    value: function run() {
      var grammarTextAreaValue = florenceGrammar; ///

      Example.setGrammarTextAreaValue(grammarTextAreaValue);

      update();

      Example.onContentTextAreaChange(function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJGbG9yZW5jZUxleGVyIiwiRXhhbXBsZSIsIkZsb3JlbmNlUGFyc2VyIiwiZmxvcmVuY2VHcmFtbWFyIiwiZmxvcmVuY2VMZXhlciIsImZyb21Ob3RoaW5nIiwiZmxvcmVuY2VQYXJzZXIiLCJGbG9yZW5jZUV4YW1wbGUiLCJncmFtbWFyVGV4dEFyZWFWYWx1ZSIsInNldEdyYW1tYXJUZXh0QXJlYVZhbHVlIiwidXBkYXRlIiwib25Db250ZW50VGV4dEFyZWFDaGFuZ2UiLCJ1cGRhdGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxnQkFBZ0JGLE9BQU9FLGFBRDNCOztBQUdBLElBQUlDLFVBQVVGLFFBQVEsWUFBUixDQUFkOztBQUVBLElBQUlHLGlCQUFpQkgsUUFBUSw4QkFBUixDQUFyQjtBQUFBLElBQ0lJLGtCQUFrQkosUUFBUSwrQkFBUixDQUR0Qjs7QUFHQSxJQUFJSyxnQkFBZ0JKLGNBQWNLLFdBQWQsRUFBcEI7QUFBQSxJQUNJQyxpQkFBaUJKLGVBQWVHLFdBQWYsRUFEckI7O0lBR01FLGU7Ozs7Ozs7MEJBQ1M7QUFDWCxVQUFJQyx1QkFBdUJMLGVBQTNCLENBRFcsQ0FDaUM7O0FBRTVDRixjQUFRUSx1QkFBUixDQUFnQ0Qsb0JBQWhDOztBQUVBRTs7QUFFQVQsY0FBUVUsdUJBQVIsQ0FBZ0MsWUFBVztBQUN6Q0Q7QUFDRCxPQUZEO0FBR0Q7Ozs7OztBQUdILFNBQVNBLE1BQVQsR0FBa0I7QUFDaEJULFVBQVFXLGVBQVIsQ0FBd0JSLGFBQXhCLEVBQXVDRSxjQUF2QztBQUNEOztBQUVETyxPQUFPQyxPQUFQLEdBQWlCUCxlQUFqQiIsImZpbGUiOiJmbG9yZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSBsZXhlcnMuRmxvcmVuY2VMZXhlcjtcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyk7XG5cbnZhciBGbG9yZW5jZVBhcnNlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXInKSxcbiAgICBmbG9yZW5jZUdyYW1tYXIgPSByZXF1aXJlKCcuLi8uLi8uLi9lczYvZmxvcmVuY2UvZ3JhbW1hcicpO1xuXG52YXIgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gZmxvcmVuY2VHcmFtbWFyOyAvLy9cblxuICAgIEV4YW1wbGUuc2V0R3JhbW1hclRleHRBcmVhVmFsdWUoZ3JhbW1hclRleHRBcmVhVmFsdWUpO1xuXG4gICAgdXBkYXRlKCk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRBcmVhQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VFeGFtcGxlO1xuIl19