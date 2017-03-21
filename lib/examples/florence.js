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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRmxvcmVuY2VMZXhlciIsIkV4YW1wbGUiLCJGbG9yZW5jZVBhcnNlciIsImZsb3JlbmNlR3JhbW1hciIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsImZsb3JlbmNlUGFyc2VyIiwiRmxvcmVuY2VFeGFtcGxlIiwiZ3JhbW1hclRleHRhcmVhVmFsdWUiLCJzZXRHcmFtbWFyVGV4dGFyZWFWYWx1ZSIsInVwZGF0ZSIsIm9uQ29udGVudFRleHRhcmVhS2V5VXAiLCJ1cGRhdGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7QUFBQSxJQUNNQyxnQkFBZ0JGLE9BQU9FLGFBRDdCOztBQUdBLElBQU1DLFVBQVVGLFFBQVEsWUFBUixDQUFoQjs7QUFFQSxJQUFNRyxpQkFBaUJILFFBQVEsb0JBQVIsQ0FBdkI7QUFBQSxJQUNNSSxrQkFBa0JKLFFBQVEscUJBQVIsQ0FEeEI7O0FBR0EsSUFBTUssZ0JBQWdCSixjQUFjSyxXQUFkLEVBQXRCO0FBQUEsSUFDTUMsaUJBQWlCSixlQUFlRyxXQUFmLEVBRHZCOztJQUdNRSxlOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBTUMsdUJBQXVCTCxlQUE3QixDQURXLENBQ21DOztBQUU5Q0YsY0FBUVEsdUJBQVIsQ0FBZ0NELG9CQUFoQzs7QUFFQUU7O0FBRUFULGNBQVFVLHNCQUFSLENBQStCLFlBQVc7QUFDeENEO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHSCxTQUFTQSxNQUFULEdBQWtCO0FBQ2hCVCxVQUFRVyxlQUFSLENBQXdCUixhQUF4QixFQUF1Q0UsY0FBdkM7QUFDRDs7QUFFRE8sT0FBT0MsT0FBUCxHQUFpQlAsZUFBakIiLCJmaWxlIjoiZmxvcmVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgRmxvcmVuY2VMZXhlciA9IGxleGVycy5GbG9yZW5jZUxleGVyO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpO1xuXG5jb25zdCBGbG9yZW5jZVBhcnNlciA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL3BhcnNlcicpLFxuICAgICAgZmxvcmVuY2VHcmFtbWFyID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvZ3JhbW1hcicpO1xuXG5jb25zdCBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IGdyYW1tYXJUZXh0YXJlYVZhbHVlID0gZmxvcmVuY2VHcmFtbWFyOyAvLy9cblxuICAgIEV4YW1wbGUuc2V0R3JhbW1hclRleHRhcmVhVmFsdWUoZ3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgdXBkYXRlKCk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRhcmVhS2V5VXAoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUV4YW1wbGU7XG4iXX0=