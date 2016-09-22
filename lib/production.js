'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    NonTerminalNode = require('./node/nonTerminal');

var Production = function () {
  function Production(name, rules, Node) {
    _classCallCheck(this, Production);

    this.name = name;
    this.rules = rules;
    this.Node = Node;
  }

  _createClass(Production, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'parse',
    value: function parse(input, context, productions) {
      context.saveIndex();

      var ruleNodes = undefined,
          parsed = this.rules.some(function (rule) {
        ruleNodes = rule.parse(input, context, productions);

        var parsed = ruleNodes !== null;

        if (!parsed) {
          context.backtrack();
        }

        return parsed;
      });

      var nodes = parsed ? this.Node.fromNodes(ruleNodes) : ///
      null;

      return nodes;
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line, specialSymbolsRegExp, mappings) {
      var name = line.getName(),
          rules = line.mapSymbolSequences(function (symbolSequence) {
        var rule = Rule.fromSymbolSequence(symbolSequence, specialSymbolsRegExp);

        return rule;
      }),
          Node = mappings[name] || NonTerminalNode,
          ///
      production = new Production(name, rules, Node);

      return production;
    }
  }]);

  return Production;
}();

module.exports = Production;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiUHJvZHVjdGlvbiIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInNhdmVJbmRleCIsInJ1bGVOb2RlcyIsInVuZGVmaW5lZCIsInBhcnNlZCIsInNvbWUiLCJydWxlIiwicGFyc2UiLCJiYWNrdHJhY2siLCJub2RlcyIsImZyb21Ob2RlcyIsImxpbmUiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cCIsIm1hcHBpbmdzIiwiZ2V0TmFtZSIsIm1hcFN5bWJvbFNlcXVlbmNlcyIsInN5bWJvbFNlcXVlbmNlIiwiZnJvbVN5bWJvbFNlcXVlbmNlIiwicHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLGtCQUFrQkQsUUFBUSxvQkFBUixDQUR0Qjs7SUFHTUUsVTtBQUNKLHNCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsSUFBekIsRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtGLElBQVo7QUFDRDs7OzBCQUVLRyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDRCxjQUFRRSxTQUFSOztBQUVBLFVBQUlDLFlBQVlDLFNBQWhCO0FBQUEsVUFDSUMsU0FBUyxLQUFLUixLQUFMLENBQVdTLElBQVgsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFlO0FBQ3RDSixvQkFBWUksS0FBS0MsS0FBTCxDQUFXVCxLQUFYLEVBQWtCQyxPQUFsQixFQUEyQkMsV0FBM0IsQ0FBWjs7QUFFQSxZQUFJSSxTQUFVRixjQUFjLElBQTVCOztBQUVBLFlBQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1hMLGtCQUFRUyxTQUFSO0FBQ0Q7O0FBRUQsZUFBT0osTUFBUDtBQUNELE9BVlEsQ0FEYjs7QUFhQSxVQUFJSyxRQUFRTCxTQUNFLEtBQUtQLElBQUwsQ0FBVWEsU0FBVixDQUFvQlIsU0FBcEIsQ0FERixHQUNvQztBQUNoQyxVQUZoQjs7QUFJQSxhQUFPTyxLQUFQO0FBQ0Q7Ozs2QkFFZUUsSSxFQUFNQyxvQixFQUFzQkMsUSxFQUFVO0FBQ3BELFVBQUlsQixPQUFPZ0IsS0FBS0csT0FBTCxFQUFYO0FBQUEsVUFDSWxCLFFBQVFlLEtBQUtJLGtCQUFMLENBQXdCLFVBQVNDLGNBQVQsRUFBeUI7QUFDdkQsWUFBSVYsT0FBT2YsS0FBSzBCLGtCQUFMLENBQXdCRCxjQUF4QixFQUF3Q0osb0JBQXhDLENBQVg7O0FBRUEsZUFBT04sSUFBUDtBQUNELE9BSk8sQ0FEWjtBQUFBLFVBTUlULE9BQU9nQixTQUFTbEIsSUFBVCxLQUFrQkYsZUFON0I7QUFBQSxVQU04QztBQUMxQ3lCLG1CQUFhLElBQUl4QixVQUFKLENBQWVDLElBQWYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixDQVBqQjs7QUFTQSxhQUFPcUIsVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjFCLFVBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIGNvbnRleHQuc2F2ZUluZGV4KCk7XG4gICAgXG4gICAgdmFyIHJ1bGVOb2RlcyA9IHVuZGVmaW5lZCxcbiAgICAgICAgcGFyc2VkID0gdGhpcy5ydWxlcy5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICBydWxlTm9kZXMgPSBydWxlLnBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucyk7XG4gICAgICAgICAgXG4gICAgICAgICAgdmFyIHBhcnNlZCA9IChydWxlTm9kZXMgIT09IG51bGwpO1xuICAgIFxuICAgICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgICBjb250ZXh0LmJhY2t0cmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9KTtcbiAgICBcbiAgICB2YXIgbm9kZXMgPSBwYXJzZWQgPyBcbiAgICAgICAgICAgICAgICAgIHRoaXMuTm9kZS5mcm9tTm9kZXMocnVsZU5vZGVzKSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgICBcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSwgc3BlY2lhbFN5bWJvbHNSZWdFeHAsIG1hcHBpbmdzKSB7XG4gICAgdmFyIG5hbWUgPSBsaW5lLmdldE5hbWUoKSxcbiAgICAgICAgcnVsZXMgPSBsaW5lLm1hcFN5bWJvbFNlcXVlbmNlcyhmdW5jdGlvbihzeW1ib2xTZXF1ZW5jZSkge1xuICAgICAgICAgIHZhciBydWxlID0gUnVsZS5mcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHNwZWNpYWxTeW1ib2xzUmVnRXhwKTtcblxuICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9KSxcbiAgICAgICAgTm9kZSA9IG1hcHBpbmdzW25hbWVdIHx8IE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb247XG4iXX0=