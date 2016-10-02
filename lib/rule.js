'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parts = require('./parts');

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'parse',
    value: function parse(context, productions) {
      var nodes = [];

      var parsed = this.parts.every(function (part) {
        var partNodes = part.parse(context, productions),
            parsed = partNodes !== null;

        if (parsed) {
          nodes = nodes.concat(partNodes);
        }

        return parsed;
      });

      nodes = parsed ? nodes : null;

      return nodes;
    }
  }], [{
    key: 'fromSymbolSequence',
    value: function fromSymbolSequence(symbolSequence, specialSymbolsRegExp) {
      var parts = symbolSequence.mapSymbols(function (symbol) {
        var part = partFromSymbol(symbol, specialSymbolsRegExp);

        return part;
      }),
          rule = new Rule(parts);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function partFromSymbol(symbol, specialSymbolsRegExp) {
  var part = undefined; ///

  Parts.some(function (Part) {
    part = Part.fromSymbol(symbol, specialSymbolsRegExp);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ydWxlLmpzIl0sIm5hbWVzIjpbIlBhcnRzIiwicmVxdWlyZSIsIlJ1bGUiLCJwYXJ0cyIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vZGVzIiwicGFyc2VkIiwiZXZlcnkiLCJwYXJ0IiwicGFydE5vZGVzIiwicGFyc2UiLCJjb25jYXQiLCJzeW1ib2xTZXF1ZW5jZSIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwibWFwU3ltYm9scyIsInN5bWJvbCIsInBhcnRGcm9tU3ltYm9sIiwicnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiLCJzb21lIiwiUGFydCIsImZyb21TeW1ib2wiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLFNBQVIsQ0FBWjs7SUFFTUMsSTtBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYTtBQUMxQixVQUFJQyxRQUFRLEVBQVo7O0FBRUEsVUFBSUMsU0FBUyxLQUFLSixLQUFMLENBQVdLLEtBQVgsQ0FBaUIsVUFBU0MsSUFBVCxFQUFlO0FBQzNDLFlBQUlDLFlBQVlELEtBQUtFLEtBQUwsQ0FBV1AsT0FBWCxFQUFvQkMsV0FBcEIsQ0FBaEI7QUFBQSxZQUNJRSxTQUFVRyxjQUFjLElBRDVCOztBQUdBLFlBQUlILE1BQUosRUFBWTtBQUNWRCxrQkFBUUEsTUFBTU0sTUFBTixDQUFhRixTQUFiLENBQVI7QUFDRDs7QUFFRCxlQUFPSCxNQUFQO0FBQ0QsT0FUWSxDQUFiOztBQVdBRCxjQUFRQyxTQUFTRCxLQUFULEdBQWlCLElBQXpCOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7O3VDQUV5Qk8sYyxFQUFnQkMsb0IsRUFBc0I7QUFDOUQsVUFBSVgsUUFBUVUsZUFBZUUsVUFBZixDQUEwQixVQUFTQyxNQUFULEVBQWlCO0FBQ2pELFlBQUlQLE9BQU9RLGVBQWVELE1BQWYsRUFBdUJGLG9CQUF2QixDQUFYOztBQUVBLGVBQU9MLElBQVA7QUFDRCxPQUpPLENBQVo7QUFBQSxVQUtJUyxPQUFPLElBQUloQixJQUFKLENBQVNDLEtBQVQsQ0FMWDs7QUFPQSxhQUFPZSxJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEIsSUFBakI7O0FBRUEsU0FBU2UsY0FBVCxDQUF3QkQsTUFBeEIsRUFBZ0NGLG9CQUFoQyxFQUFzRDtBQUNwRCxNQUFJTCxPQUFPWSxTQUFYLENBRG9ELENBQzlCOztBQUV0QnJCLFFBQU1zQixJQUFOLENBQVcsVUFBU0MsSUFBVCxFQUFlO0FBQ3hCZCxXQUFPYyxLQUFLQyxVQUFMLENBQWdCUixNQUFoQixFQUF3QkYsb0JBQXhCLENBQVA7O0FBRUEsUUFBSVAsU0FBVUUsU0FBUyxJQUF2Qjs7QUFFQSxXQUFPRixNQUFQO0FBQ0QsR0FORDs7QUFRQSxTQUFPRSxJQUFQO0FBQ0QiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFBhcnRzID0gcmVxdWlyZSgnLi9wYXJ0cycpO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgXG4gICAgdmFyIHBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgdmFyIHBhcnROb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMpLFxuICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZXMgIT09IG51bGwpO1xuICAgICAgXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2Rlcyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSk7XG4gICAgXG4gICAgbm9kZXMgPSBwYXJzZWQgPyBub2RlcyA6IG51bGw7XG4gICAgXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc3BlY2lhbFN5bWJvbHNSZWdFeHApIHtcbiAgICB2YXIgcGFydHMgPSBzeW1ib2xTZXF1ZW5jZS5tYXBTeW1ib2xzKGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgICAgICAgIHZhciBwYXJ0ID0gcGFydEZyb21TeW1ib2woc3ltYm9sLCBzcGVjaWFsU3ltYm9sc1JlZ0V4cCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgIH0pLFxuICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHNwZWNpYWxTeW1ib2xzUmVnRXhwKSB7XG4gIHZhciBwYXJ0ID0gdW5kZWZpbmVkOyAvLy9cblxuICBQYXJ0cy5zb21lKGZ1bmN0aW9uKFBhcnQpIHtcbiAgICBwYXJ0ID0gUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc3BlY2lhbFN5bWJvbHNSZWdFeHApO1xuXG4gICAgdmFyIHBhcnNlZCA9IChwYXJ0ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0O1xufVxuIl19