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
      var ruleNodes = undefined,
          index = context.getIndex(),
          savedIndex = index,
          parsed = this.rules.some(function (rule) {
        ruleNodes = rule.parse(input, context, productions);

        var parsed = ruleNodes !== null;

        if (!parsed) {
          context.backtrack(savedIndex);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiUHJvZHVjdGlvbiIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInJ1bGVOb2RlcyIsInVuZGVmaW5lZCIsImluZGV4IiwiZ2V0SW5kZXgiLCJzYXZlZEluZGV4IiwicGFyc2VkIiwic29tZSIsInJ1bGUiLCJwYXJzZSIsImJhY2t0cmFjayIsIm5vZGVzIiwiZnJvbU5vZGVzIiwibGluZSIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwibWFwcGluZ3MiLCJnZXROYW1lIiwibWFwU3ltYm9sU2VxdWVuY2VzIiwic3ltYm9sU2VxdWVuY2UiLCJmcm9tU3ltYm9sU2VxdWVuY2UiLCJwcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsa0JBQWtCRCxRQUFRLG9CQUFSLENBRHRCOztJQUdNRSxVO0FBQ0osc0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxJQUF6QixFQUErQjtBQUFBOztBQUM3QixTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7MEJBRUtHLEssRUFBT0MsTyxFQUFTQyxXLEVBQWE7QUFDakMsVUFBSUMsWUFBWUMsU0FBaEI7QUFBQSxVQUNJQyxRQUFRSixRQUFRSyxRQUFSLEVBRFo7QUFBQSxVQUVJQyxhQUFhRixLQUZqQjtBQUFBLFVBR0lHLFNBQVMsS0FBS1YsS0FBTCxDQUFXVyxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUN0Q1Asb0JBQVlPLEtBQUtDLEtBQUwsQ0FBV1gsS0FBWCxFQUFrQkMsT0FBbEIsRUFBMkJDLFdBQTNCLENBQVo7O0FBRUEsWUFBSU0sU0FBVUwsY0FBYyxJQUE1Qjs7QUFFQSxZQUFJLENBQUNLLE1BQUwsRUFBYTtBQUNYUCxrQkFBUVcsU0FBUixDQUFrQkwsVUFBbEI7QUFDRDs7QUFFRCxlQUFPQyxNQUFQO0FBQ0QsT0FWUSxDQUhiOztBQWVBLFVBQUlLLFFBQVFMLFNBQ0UsS0FBS1QsSUFBTCxDQUFVZSxTQUFWLENBQW9CWCxTQUFwQixDQURGLEdBQ29DO0FBQ2hDLFVBRmhCOztBQUlBLGFBQU9VLEtBQVA7QUFDRDs7OzZCQUVlRSxJLEVBQU1DLG9CLEVBQXNCQyxRLEVBQVU7QUFDcEQsVUFBSXBCLE9BQU9rQixLQUFLRyxPQUFMLEVBQVg7QUFBQSxVQUNJcEIsUUFBUWlCLEtBQUtJLGtCQUFMLENBQXdCLFVBQVNDLGNBQVQsRUFBeUI7QUFDdkQsWUFBSVYsT0FBT2pCLEtBQUs0QixrQkFBTCxDQUF3QkQsY0FBeEIsRUFBd0NKLG9CQUF4QyxDQUFYOztBQUVBLGVBQU9OLElBQVA7QUFDRCxPQUpPLENBRFo7QUFBQSxVQU1JWCxPQUFPa0IsU0FBU3BCLElBQVQsS0FBa0JGLGVBTjdCO0FBQUEsVUFNOEM7QUFDMUMyQixtQkFBYSxJQUFJMUIsVUFBSixDQUFlQyxJQUFmLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUIsQ0FQakI7O0FBU0EsYUFBT3VCLFVBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUI1QixVQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcnVsZXMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgcnVsZU5vZGVzID0gdW5kZWZpbmVkLFxuICAgICAgICBpbmRleCA9IGNvbnRleHQuZ2V0SW5kZXgoKSxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGluZGV4LFxuICAgICAgICBwYXJzZWQgPSB0aGlzLnJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgIHJ1bGVOb2RlcyA9IHJ1bGUucGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKTtcbiAgICAgICAgICBcbiAgICAgICAgICB2YXIgcGFyc2VkID0gKHJ1bGVOb2RlcyAhPT0gbnVsbCk7XG4gICAgXG4gICAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9KTtcbiAgICBcbiAgICB2YXIgbm9kZXMgPSBwYXJzZWQgPyBcbiAgICAgICAgICAgICAgICAgIHRoaXMuTm9kZS5mcm9tTm9kZXMocnVsZU5vZGVzKSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgICBcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSwgc3BlY2lhbFN5bWJvbHNSZWdFeHAsIG1hcHBpbmdzKSB7XG4gICAgdmFyIG5hbWUgPSBsaW5lLmdldE5hbWUoKSxcbiAgICAgICAgcnVsZXMgPSBsaW5lLm1hcFN5bWJvbFNlcXVlbmNlcyhmdW5jdGlvbihzeW1ib2xTZXF1ZW5jZSkge1xuICAgICAgICAgIHZhciBydWxlID0gUnVsZS5mcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHNwZWNpYWxTeW1ib2xzUmVnRXhwKTtcblxuICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9KSxcbiAgICAgICAgTm9kZSA9IG1hcHBpbmdzW25hbWVdIHx8IE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb247XG4iXX0=