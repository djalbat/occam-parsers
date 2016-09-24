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

      var productionName = this.name,
          ///
      nodes = parsed ? this.Node.fromNodes(ruleNodes, productionName) : ///
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiUHJvZHVjdGlvbiIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInNhdmVJbmRleCIsInJ1bGVOb2RlcyIsInVuZGVmaW5lZCIsInBhcnNlZCIsInNvbWUiLCJydWxlIiwicGFyc2UiLCJiYWNrdHJhY2siLCJwcm9kdWN0aW9uTmFtZSIsIm5vZGVzIiwiZnJvbU5vZGVzIiwibGluZSIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwibWFwcGluZ3MiLCJnZXROYW1lIiwibWFwU3ltYm9sU2VxdWVuY2VzIiwic3ltYm9sU2VxdWVuY2UiLCJmcm9tU3ltYm9sU2VxdWVuY2UiLCJwcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsa0JBQWtCRCxRQUFRLG9CQUFSLENBRHRCOztJQUdNRSxVO0FBQ0osc0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxJQUF6QixFQUErQjtBQUFBOztBQUM3QixTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7MEJBRUtHLEssRUFBT0MsTyxFQUFTQyxXLEVBQWE7QUFDakNELGNBQVFFLFNBQVI7O0FBRUEsVUFBSUMsWUFBWUMsU0FBaEI7QUFBQSxVQUNJQyxTQUFTLEtBQUtSLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDdENKLG9CQUFZSSxLQUFLQyxLQUFMLENBQVdULEtBQVgsRUFBa0JDLE9BQWxCLEVBQTJCQyxXQUEzQixDQUFaOztBQUVBLFlBQUlJLFNBQVVGLGNBQWMsSUFBNUI7O0FBRUEsWUFBSSxDQUFDRSxNQUFMLEVBQWE7QUFDWEwsa0JBQVFTLFNBQVI7QUFDRDs7QUFFRCxlQUFPSixNQUFQO0FBQ0QsT0FWUSxDQURiOztBQWFBLFVBQUlLLGlCQUFpQixLQUFLZCxJQUExQjtBQUFBLFVBQWdDO0FBQzVCZSxjQUFRTixTQUNFLEtBQUtQLElBQUwsQ0FBVWMsU0FBVixDQUFvQlQsU0FBcEIsRUFBK0JPLGNBQS9CLENBREYsR0FDb0Q7QUFDaEQsVUFIaEI7O0FBS0EsYUFBT0MsS0FBUDtBQUNEOzs7NkJBRWVFLEksRUFBTUMsb0IsRUFBc0JDLFEsRUFBVTtBQUNwRCxVQUFJbkIsT0FBT2lCLEtBQUtHLE9BQUwsRUFBWDtBQUFBLFVBQ0luQixRQUFRZ0IsS0FBS0ksa0JBQUwsQ0FBd0IsVUFBU0MsY0FBVCxFQUF5QjtBQUN2RCxZQUFJWCxPQUFPZixLQUFLMkIsa0JBQUwsQ0FBd0JELGNBQXhCLEVBQXdDSixvQkFBeEMsQ0FBWDs7QUFFQSxlQUFPUCxJQUFQO0FBQ0QsT0FKTyxDQURaO0FBQUEsVUFNSVQsT0FBT2lCLFNBQVNuQixJQUFULEtBQWtCRixlQU43QjtBQUFBLFVBTThDO0FBQzFDMEIsbUJBQWEsSUFBSXpCLFVBQUosQ0FBZUMsSUFBZixFQUFxQkMsS0FBckIsRUFBNEJDLElBQTVCLENBUGpCOztBQVNBLGFBQU9zQixVQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCM0IsVUFBakIiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHJ1bGVzLCBOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5Ob2RlID0gTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgcGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgY29udGV4dC5zYXZlSW5kZXgoKTtcbiAgICBcbiAgICB2YXIgcnVsZU5vZGVzID0gdW5kZWZpbmVkLFxuICAgICAgICBwYXJzZWQgPSB0aGlzLnJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgIHJ1bGVOb2RlcyA9IHJ1bGUucGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKTtcbiAgICAgICAgICBcbiAgICAgICAgICB2YXIgcGFyc2VkID0gKHJ1bGVOb2RlcyAhPT0gbnVsbCk7XG4gICAgXG4gICAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuYmFja3RyYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH0pO1xuICAgIFxuICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgIG5vZGVzID0gcGFyc2VkID9cbiAgICAgICAgICAgICAgICAgIHRoaXMuTm9kZS5mcm9tTm9kZXMocnVsZU5vZGVzLCBwcm9kdWN0aW9uTmFtZSkgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgIG51bGw7XG4gICAgXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIHNwZWNpYWxTeW1ib2xzUmVnRXhwLCBtYXBwaW5ncykge1xuICAgIHZhciBuYW1lID0gbGluZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVzID0gbGluZS5tYXBTeW1ib2xTZXF1ZW5jZXMoZnVuY3Rpb24oc3ltYm9sU2VxdWVuY2UpIHtcbiAgICAgICAgICB2YXIgcnVsZSA9IFJ1bGUuZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCBzcGVjaWFsU3ltYm9sc1JlZ0V4cCk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSksXG4gICAgICAgIE5vZGUgPSBtYXBwaW5nc1tuYW1lXSB8fCBOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuIl19