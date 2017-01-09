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
  Example.updateParseTree(florenceLexer, florenceParser);
}

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJGbG9yZW5jZUxleGVyIiwiRXhhbXBsZSIsIkZsb3JlbmNlUGFyc2VyIiwiZmxvcmVuY2VHcmFtbWFyIiwiZmxvcmVuY2VMZXhlciIsImZyb21Ob3RoaW5nIiwiZmxvcmVuY2VQYXJzZXIiLCJGbG9yZW5jZUV4YW1wbGUiLCJncmFtbWFyVGV4dEFyZWFWYWx1ZSIsInNldEdyYW1tYXJUZXh0QXJlYVZhbHVlIiwidXBkYXRlIiwib25HcmFtbWFyVGV4dEFyZWFDaGFuZ2UiLCJvbkNvbnRlbnRUZXh0QXJlYUNoYW5nZSIsInVwZGF0ZVBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLGdCQUFnQkYsT0FBT0UsYUFEM0I7O0FBR0EsSUFBSUMsVUFBVUYsUUFBUSxZQUFSLENBQWQ7O0FBRUEsSUFBSUcsaUJBQWlCSCxRQUFRLDhCQUFSLENBQXJCO0FBQUEsSUFDSUksa0JBQWtCSixRQUFRLCtCQUFSLENBRHRCOztBQUdBLElBQUlLLGdCQUFnQkosY0FBY0ssV0FBZCxFQUFwQjtBQUFBLElBQ0lDLGlCQUFpQkosZUFBZUcsV0FBZixFQURyQjs7SUFHTUUsZTs7Ozs7OzswQkFDUztBQUNYLFVBQUlDLHVCQUF1QkwsZUFBM0IsQ0FEVyxDQUNpQzs7QUFFNUNGLGNBQVFRLHVCQUFSLENBQWdDRCxvQkFBaEM7O0FBRUFFOztBQUVBVCxjQUFRVSx1QkFBUixDQUFnQyxZQUFXO0FBQ3pDRDtBQUNELE9BRkQ7O0FBSUFULGNBQVFXLHVCQUFSLENBQWdDLFlBQVc7QUFDekNGO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHSCxTQUFTQSxNQUFULEdBQWtCO0FBQ2hCVCxVQUFRWSxlQUFSLENBQXdCVCxhQUF4QixFQUF1Q0UsY0FBdkM7QUFDRDs7QUFFRFEsT0FBT0MsT0FBUCxHQUFpQlIsZUFBakIiLCJmaWxlIjoiZmxvcmVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBGbG9yZW5jZUxleGVyID0gbGV4ZXJzLkZsb3JlbmNlTGV4ZXI7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpO1xuXG52YXIgRmxvcmVuY2VQYXJzZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9lczYvZmxvcmVuY2UvcGFyc2VyJyksXG4gICAgZmxvcmVuY2VHcmFtbWFyID0gcmVxdWlyZSgnLi4vLi4vLi4vZXM2L2Zsb3JlbmNlL2dyYW1tYXInKTtcblxudmFyIGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIHZhciBncmFtbWFyVGV4dEFyZWFWYWx1ZSA9IGZsb3JlbmNlR3JhbW1hcjsgLy8vXG5cbiAgICBFeGFtcGxlLnNldEdyYW1tYXJUZXh0QXJlYVZhbHVlKGdyYW1tYXJUZXh0QXJlYVZhbHVlKTtcblxuICAgIHVwZGF0ZSgpO1xuXG4gICAgRXhhbXBsZS5vbkdyYW1tYXJUZXh0QXJlYUNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgRXhhbXBsZS5vbkNvbnRlbnRUZXh0QXJlYUNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcbiJdfQ==