'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    NonTerminalNode = require('../common/node/nonTerminal');

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
    value: function parse(context, productions, noWhitespace) {
      var nodes = null;

      context.increaseDepth();

      var tooDeep = context.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at production \'' + this.name + '\'');
      }

      var ruleNodes = null,
          ruleParsed = this.rules.some(function (rule) {
        ruleNodes = rule.parse(context, productions, noWhitespace);

        var ruleParsed = ruleNodes !== null;

        return ruleParsed;
      });

      if (ruleParsed) {
        var ruleNodesLength = ruleNodes.length,
            productionName = this.name; ///

        if (ruleNodesLength > 0) {
          nodes = this.Node.fromNodesAndProductionName(ruleNodes, productionName);
        }
      }

      context.decreaseDepth();

      return nodes;
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line, significantTokenTypes, mappings) {
      var name = line.getName(),
          rules = line.mapSymbolSequences(function (symbolSequence) {
        var rule = Rule.fromSymbolSequence(symbolSequence, significantTokenTypes);

        return rule;
      }),
          Node = mappings.hasOwnProperty(name) ? mappings[name] : NonTerminalNode,
          ///
      production = new Production(name, rules, Node);

      return production;
    }
  }]);

  return Production;
}();

module.exports = Production;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwicnVsZU5vZGVzIiwicnVsZVBhcnNlZCIsInNvbWUiLCJydWxlIiwicGFyc2UiLCJydWxlTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJwcm9kdWN0aW9uTmFtZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwiZGVjcmVhc2VEZXB0aCIsImxpbmUiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsImdldE5hbWUiLCJtYXBTeW1ib2xTZXF1ZW5jZXMiLCJzeW1ib2xTZXF1ZW5jZSIsImZyb21TeW1ib2xTZXF1ZW5jZSIsImhhc093blByb3BlcnR5IiwicHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLGtCQUFrQkQsUUFBUSw0QkFBUixDQUR0Qjs7SUFHTUUsVTtBQUNKLHNCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsSUFBekIsRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtGLElBQVo7QUFDRDs7OzBCQUVLRyxPLEVBQVNDLFcsRUFBYUMsWSxFQUFjO0FBQ3hDLFVBQUlDLFFBQVEsSUFBWjs7QUFFQUgsY0FBUUksYUFBUjs7QUFFQSxVQUFJQyxVQUFVTCxRQUFRTSxTQUFSLEVBQWQ7O0FBRUEsVUFBSUQsT0FBSixFQUFhO0FBQ1gsY0FBTSxJQUFJRSxLQUFKLGlEQUF1RCxLQUFLVixJQUE1RCxRQUFOO0FBQ0Q7O0FBRUQsVUFBSVcsWUFBWSxJQUFoQjtBQUFBLFVBQ0lDLGFBQWEsS0FBS1gsS0FBTCxDQUFXWSxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUMxQ0gsb0JBQVlHLEtBQUtDLEtBQUwsQ0FBV1osT0FBWCxFQUFvQkMsV0FBcEIsRUFBaUNDLFlBQWpDLENBQVo7O0FBRUEsWUFBSU8sYUFBY0QsY0FBYyxJQUFoQzs7QUFFQSxlQUFPQyxVQUFQO0FBQ0QsT0FOWSxDQURqQjs7QUFTQSxVQUFJQSxVQUFKLEVBQWdCO0FBQ2QsWUFBSUksa0JBQWtCTCxVQUFVTSxNQUFoQztBQUFBLFlBQ0lDLGlCQUFpQixLQUFLbEIsSUFEMUIsQ0FEYyxDQUVrQjs7QUFFaEMsWUFBSWdCLGtCQUFrQixDQUF0QixFQUF5QjtBQUN2QlYsa0JBQVEsS0FBS0osSUFBTCxDQUFVaUIsMEJBQVYsQ0FBcUNSLFNBQXJDLEVBQWdETyxjQUFoRCxDQUFSO0FBQ0Q7QUFDRjs7QUFFRGYsY0FBUWlCLGFBQVI7O0FBRUEsYUFBT2QsS0FBUDtBQUNEOzs7NkJBRWVlLEksRUFBTUMscUIsRUFBdUJDLFEsRUFBVTtBQUNyRCxVQUFJdkIsT0FBT3FCLEtBQUtHLE9BQUwsRUFBWDtBQUFBLFVBQ0l2QixRQUFRb0IsS0FBS0ksa0JBQUwsQ0FBd0IsVUFBU0MsY0FBVCxFQUF5QjtBQUN2RCxZQUFJWixPQUFPbEIsS0FBSytCLGtCQUFMLENBQXdCRCxjQUF4QixFQUF3Q0oscUJBQXhDLENBQVg7O0FBRUEsZUFBT1IsSUFBUDtBQUNELE9BSk8sQ0FEWjtBQUFBLFVBTUlaLE9BQU9xQixTQUFTSyxjQUFULENBQXdCNUIsSUFBeEIsSUFBZ0N1QixTQUFTdkIsSUFBVCxDQUFoQyxHQUFpREYsZUFONUQ7QUFBQSxVQU02RTtBQUN6RStCLG1CQUFhLElBQUk5QixVQUFKLENBQWVDLElBQWYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixDQVBqQjs7QUFTQSxhQUFPMkIsVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmhDLFVBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHJ1bGVzLCBOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5Ob2RlID0gTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBub2RlcyA9IG51bGw7XG5cbiAgICBjb250ZXh0LmluY3JlYXNlRGVwdGgoKTtcblxuICAgIHZhciB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHByb2R1Y3Rpb24gJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICB2YXIgcnVsZU5vZGVzID0gbnVsbCxcbiAgICAgICAgcnVsZVBhcnNlZCA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgcnVsZU5vZGVzID0gcnVsZS5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgICAgIHZhciBydWxlUGFyc2VkID0gKHJ1bGVOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZVBhcnNlZDtcbiAgICAgICAgfSk7XG5cbiAgICBpZiAocnVsZVBhcnNlZCkge1xuICAgICAgdmFyIHJ1bGVOb2Rlc0xlbmd0aCA9IHJ1bGVOb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgICBpZiAocnVsZU5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBub2RlcyA9IHRoaXMuTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShydWxlTm9kZXMsIHByb2R1Y3Rpb25OYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZShsaW5lLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSB7XG4gICAgdmFyIG5hbWUgPSBsaW5lLmdldE5hbWUoKSxcbiAgICAgICAgcnVsZXMgPSBsaW5lLm1hcFN5bWJvbFNlcXVlbmNlcyhmdW5jdGlvbihzeW1ib2xTZXF1ZW5jZSkge1xuICAgICAgICAgIHZhciBydWxlID0gUnVsZS5mcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHNpZ25pZmljYW50VG9rZW5UeXBlcyk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSksXG4gICAgICAgIE5vZGUgPSBtYXBwaW5ncy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IG1hcHBpbmdzW25hbWVdIDogTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgcHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcbiJdfQ==