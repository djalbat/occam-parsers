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
    value: function parse(input, context, productions) {
      var nodes = [];

      var parsed = this.parts.every(function (part) {
        var partNodes = part.parse(input, context, productions),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ydWxlLmpzIl0sIm5hbWVzIjpbIlBhcnRzIiwicmVxdWlyZSIsIlJ1bGUiLCJwYXJ0cyIsImlucHV0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJwYXJzZWQiLCJldmVyeSIsInBhcnQiLCJwYXJ0Tm9kZXMiLCJwYXJzZSIsImNvbmNhdCIsInN5bWJvbFNlcXVlbmNlIiwic3BlY2lhbFN5bWJvbHNSZWdFeHAiLCJtYXBTeW1ib2xzIiwic3ltYm9sIiwicGFydEZyb21TeW1ib2wiLCJydWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsInVuZGVmaW5lZCIsInNvbWUiLCJQYXJ0IiwiZnJvbVN5bWJvbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsU0FBUixDQUFaOztJQUVNQyxJO0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7MEJBRUtDLEssRUFBT0MsTyxFQUFTQyxXLEVBQWE7QUFDakMsVUFBSUMsUUFBUSxFQUFaOztBQUVBLFVBQUlDLFNBQVMsS0FBS0wsS0FBTCxDQUFXTSxLQUFYLENBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUMzQyxZQUFJQyxZQUFZRCxLQUFLRSxLQUFMLENBQVdSLEtBQVgsRUFBa0JDLE9BQWxCLEVBQTJCQyxXQUEzQixDQUFoQjtBQUFBLFlBQ0lFLFNBQVVHLGNBQWMsSUFENUI7O0FBR0EsWUFBSUgsTUFBSixFQUFZO0FBQ1ZELGtCQUFRQSxNQUFNTSxNQUFOLENBQWFGLFNBQWIsQ0FBUjtBQUNEOztBQUVELGVBQU9ILE1BQVA7QUFDRCxPQVRZLENBQWI7O0FBV0FELGNBQVFDLFNBQVNELEtBQVQsR0FBaUIsSUFBekI7O0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7dUNBRXlCTyxjLEVBQWdCQyxvQixFQUFzQjtBQUM5RCxVQUFJWixRQUFRVyxlQUFlRSxVQUFmLENBQTBCLFVBQVNDLE1BQVQsRUFBaUI7QUFDakQsWUFBSVAsT0FBT1EsZUFBZUQsTUFBZixFQUF1QkYsb0JBQXZCLENBQVg7O0FBRUEsZUFBT0wsSUFBUDtBQUNELE9BSk8sQ0FBWjtBQUFBLFVBS0lTLE9BQU8sSUFBSWpCLElBQUosQ0FBU0MsS0FBVCxDQUxYOztBQU9BLGFBQU9nQixJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbkIsSUFBakI7O0FBRUEsU0FBU2dCLGNBQVQsQ0FBd0JELE1BQXhCLEVBQWdDRixvQkFBaEMsRUFBc0Q7QUFDcEQsTUFBSUwsT0FBT1ksU0FBWCxDQURvRCxDQUM5Qjs7QUFFdEJ0QixRQUFNdUIsSUFBTixDQUFXLFVBQVNDLElBQVQsRUFBZTtBQUN4QmQsV0FBT2MsS0FBS0MsVUFBTCxDQUFnQlIsTUFBaEIsRUFBd0JGLG9CQUF4QixDQUFQOztBQUVBLFFBQUlQLFNBQVVFLFNBQVMsSUFBdkI7O0FBRUEsV0FBT0YsTUFBUDtBQUNELEdBTkQ7O0FBUUEsU0FBT0UsSUFBUDtBQUNEIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBQYXJ0cyA9IHJlcXVpcmUoJy4vcGFydHMnKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG4gIFxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICBcbiAgICB2YXIgcGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICB2YXIgcGFydE5vZGVzID0gcGFydC5wYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpLFxuICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZXMgIT09IG51bGwpO1xuICAgICAgXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2Rlcyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSk7XG4gICAgXG4gICAgbm9kZXMgPSBwYXJzZWQgPyBub2RlcyA6IG51bGw7XG4gICAgXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc3BlY2lhbFN5bWJvbHNSZWdFeHApIHtcbiAgICB2YXIgcGFydHMgPSBzeW1ib2xTZXF1ZW5jZS5tYXBTeW1ib2xzKGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgICAgICAgIHZhciBwYXJ0ID0gcGFydEZyb21TeW1ib2woc3ltYm9sLCBzcGVjaWFsU3ltYm9sc1JlZ0V4cCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgIH0pLFxuICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHNwZWNpYWxTeW1ib2xzUmVnRXhwKSB7XG4gIHZhciBwYXJ0ID0gdW5kZWZpbmVkOyAvLy9cblxuICBQYXJ0cy5zb21lKGZ1bmN0aW9uKFBhcnQpIHtcbiAgICBwYXJ0ID0gUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc3BlY2lhbFN5bWJvbHNSZWdFeHApO1xuXG4gICAgdmFyIHBhcnNlZCA9IChwYXJ0ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0O1xufVxuIl19