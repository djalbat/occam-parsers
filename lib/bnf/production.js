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
          nodes = this.Node.fromNodes(ruleNodes, productionName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwicnVsZU5vZGVzIiwicnVsZVBhcnNlZCIsInNvbWUiLCJydWxlIiwicGFyc2UiLCJydWxlTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJwcm9kdWN0aW9uTmFtZSIsImZyb21Ob2RlcyIsImRlY3JlYXNlRGVwdGgiLCJsaW5lIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwibWFwcGluZ3MiLCJnZXROYW1lIiwibWFwU3ltYm9sU2VxdWVuY2VzIiwic3ltYm9sU2VxdWVuY2UiLCJmcm9tU3ltYm9sU2VxdWVuY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxrQkFBa0JELFFBQVEsNEJBQVIsQ0FEdEI7O0lBR01FLFU7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OzswQkFFS0csTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4QyxVQUFJQyxRQUFRLElBQVo7O0FBRUFILGNBQVFJLGFBQVI7O0FBRUEsVUFBSUMsVUFBVUwsUUFBUU0sU0FBUixFQUFkOztBQUVBLFVBQUlELE9BQUosRUFBYTtBQUNYLGNBQU0sSUFBSUUsS0FBSixpREFBdUQsS0FBS1YsSUFBNUQsUUFBTjtBQUNEOztBQUVELFVBQUlXLFlBQVksSUFBaEI7QUFBQSxVQUNJQyxhQUFhLEtBQUtYLEtBQUwsQ0FBV1ksSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDMUNILG9CQUFZRyxLQUFLQyxLQUFMLENBQVdaLE9BQVgsRUFBb0JDLFdBQXBCLEVBQWlDQyxZQUFqQyxDQUFaOztBQUVBLFlBQUlPLGFBQWNELGNBQWMsSUFBaEM7O0FBRUEsZUFBT0MsVUFBUDtBQUNELE9BTlksQ0FEakI7O0FBU0EsVUFBSUEsVUFBSixFQUFnQjtBQUNkLFlBQUlJLGtCQUFrQkwsVUFBVU0sTUFBaEM7QUFBQSxZQUNJQyxpQkFBaUIsS0FBS2xCLElBRDFCLENBRGMsQ0FFa0I7O0FBRWhDLFlBQUlnQixrQkFBa0IsQ0FBdEIsRUFBeUI7QUFDdkJWLGtCQUFRLEtBQUtKLElBQUwsQ0FBVWlCLFNBQVYsQ0FBb0JSLFNBQXBCLEVBQStCTyxjQUEvQixDQUFSO0FBQ0Q7QUFDRjs7QUFFRGYsY0FBUWlCLGFBQVI7O0FBRUEsYUFBT2QsS0FBUDtBQUNEOzs7NkJBRWVlLEksRUFBTUMscUIsRUFBdUJDLFEsRUFBVTtBQUNyRCxVQUFJdkIsT0FBT3FCLEtBQUtHLE9BQUwsRUFBWDtBQUFBLFVBQ0l2QixRQUFRb0IsS0FBS0ksa0JBQUwsQ0FBd0IsVUFBU0MsY0FBVCxFQUF5QjtBQUN2RCxZQUFJWixPQUFPbEIsS0FBSytCLGtCQUFMLENBQXdCRCxjQUF4QixFQUF3Q0oscUJBQXhDLENBQVg7O0FBRUEsZUFBT1IsSUFBUDtBQUNELE9BSk8sQ0FEWjtBQUFBLFVBTUlaLE9BQU9xQixTQUFTSyxjQUFULENBQXdCNUIsSUFBeEIsSUFBZ0N1QixTQUFTdkIsSUFBVCxDQUFoQyxHQUFpREYsZUFONUQ7QUFBQSxVQU02RTtBQUN6RStCLG1CQUFhLElBQUk5QixVQUFKLENBQWVDLElBQWYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixDQVBqQjs7QUFTQSxhQUFPMkIsVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmhDLFVBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHJ1bGVzLCBOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5Ob2RlID0gTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBub2RlcyA9IG51bGw7XG5cbiAgICBjb250ZXh0LmluY3JlYXNlRGVwdGgoKTtcblxuICAgIHZhciB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHByb2R1Y3Rpb24gJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICB2YXIgcnVsZU5vZGVzID0gbnVsbCxcbiAgICAgICAgcnVsZVBhcnNlZCA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgcnVsZU5vZGVzID0gcnVsZS5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgICAgIHZhciBydWxlUGFyc2VkID0gKHJ1bGVOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZVBhcnNlZDtcbiAgICAgICAgfSk7XG5cbiAgICBpZiAocnVsZVBhcnNlZCkge1xuICAgICAgdmFyIHJ1bGVOb2Rlc0xlbmd0aCA9IHJ1bGVOb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgICBpZiAocnVsZU5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBub2RlcyA9IHRoaXMuTm9kZS5mcm9tTm9kZXMocnVsZU5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncykge1xuICAgIHZhciBuYW1lID0gbGluZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVzID0gbGluZS5tYXBTeW1ib2xTZXF1ZW5jZXMoZnVuY3Rpb24oc3ltYm9sU2VxdWVuY2UpIHtcbiAgICAgICAgICB2YXIgcnVsZSA9IFJ1bGUuZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCBzaWduaWZpY2FudFRva2VuVHlwZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pLFxuICAgICAgICBOb2RlID0gbWFwcGluZ3MuaGFzT3duUHJvcGVydHkobmFtZSkgPyBtYXBwaW5nc1tuYW1lXSA6IE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb247XG4iXX0=