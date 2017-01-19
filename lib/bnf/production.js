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
    value: function parse(context, productions, noWhitespace) {
      var nodes = null,
          tooDeep = context.isTooDeep();

      if (!tooDeep) {
        context.increaseDepth();

        var ruleNodes = null,
            ruleParsed = this.rules.some(function (rule) {
          ruleNodes = rule.parse(context, productions, noWhitespace);

          var ruleParsed = ruleNodes !== null;

          return ruleParsed;
        });

        if (ruleParsed) {
          var productionName = this.name; ///

          nodes = this.Node.fromNodes(ruleNodes, productionName);
        }

        tooDeep = context.isTooDeep();

        if (!tooDeep) {
          context.decreaseDepth();
        }
      }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiaW5jcmVhc2VEZXB0aCIsInJ1bGVOb2RlcyIsInJ1bGVQYXJzZWQiLCJzb21lIiwicnVsZSIsInBhcnNlIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tTm9kZXMiLCJkZWNyZWFzZURlcHRoIiwibGluZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwiZ2V0TmFtZSIsIm1hcFN5bWJvbFNlcXVlbmNlcyIsInN5bWJvbFNlcXVlbmNlIiwiZnJvbVN5bWJvbFNlcXVlbmNlIiwiaGFzT3duUHJvcGVydHkiLCJwcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsa0JBQWtCRCxRQUFRLG9CQUFSLENBRHRCOztJQUdNRSxVO0FBQ0osc0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxJQUF6QixFQUErQjtBQUFBOztBQUM3QixTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7MEJBRUtHLE8sRUFBU0MsVyxFQUFhQyxZLEVBQWM7QUFDeEMsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMsVUFBVUosUUFBUUssU0FBUixFQURkOztBQUdBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1pKLGdCQUFRTSxhQUFSOztBQUVBLFlBQUlDLFlBQVksSUFBaEI7QUFBQSxZQUNJQyxhQUFhLEtBQUtWLEtBQUwsQ0FBV1csSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDMUNILHNCQUFZRyxLQUFLQyxLQUFMLENBQVdYLE9BQVgsRUFBb0JDLFdBQXBCLEVBQWlDQyxZQUFqQyxDQUFaOztBQUVBLGNBQUlNLGFBQWNELGNBQWMsSUFBaEM7O0FBRUEsaUJBQU9DLFVBQVA7QUFDRCxTQU5ZLENBRGpCOztBQVNBLFlBQUlBLFVBQUosRUFBZ0I7QUFDZCxjQUFJSSxpQkFBaUIsS0FBS2YsSUFBMUIsQ0FEYyxDQUNrQjs7QUFFaENNLGtCQUFRLEtBQUtKLElBQUwsQ0FBVWMsU0FBVixDQUFvQk4sU0FBcEIsRUFBK0JLLGNBQS9CLENBQVI7QUFDRDs7QUFFRFIsa0JBQVVKLFFBQVFLLFNBQVIsRUFBVjs7QUFFQSxZQUFJLENBQUNELE9BQUwsRUFBYztBQUNaSixrQkFBUWMsYUFBUjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT1gsS0FBUDtBQUNEOzs7NkJBRWVZLEksRUFBTUMscUIsRUFBdUJDLFEsRUFBVTtBQUNyRCxVQUFJcEIsT0FBT2tCLEtBQUtHLE9BQUwsRUFBWDtBQUFBLFVBQ0lwQixRQUFRaUIsS0FBS0ksa0JBQUwsQ0FBd0IsVUFBU0MsY0FBVCxFQUF5QjtBQUN2RCxZQUFJVixPQUFPakIsS0FBSzRCLGtCQUFMLENBQXdCRCxjQUF4QixFQUF3Q0oscUJBQXhDLENBQVg7O0FBRUEsZUFBT04sSUFBUDtBQUNELE9BSk8sQ0FEWjtBQUFBLFVBTUlYLE9BQU9rQixTQUFTSyxjQUFULENBQXdCekIsSUFBeEIsSUFBZ0NvQixTQUFTcEIsSUFBVCxDQUFoQyxHQUFpREYsZUFONUQ7QUFBQSxVQU02RTtBQUN6RTRCLG1CQUFhLElBQUkzQixVQUFKLENBQWVDLElBQWYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixDQVBqQjs7QUFTQSxhQUFPd0IsVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjdCLFVBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICghdG9vRGVlcCkge1xuICAgICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICAgIHZhciBydWxlTm9kZXMgPSBudWxsLFxuICAgICAgICAgIHJ1bGVQYXJzZWQgPSB0aGlzLnJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgcnVsZU5vZGVzID0gcnVsZS5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgICAgICAgdmFyIHJ1bGVQYXJzZWQgPSAocnVsZU5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVQYXJzZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChydWxlUGFyc2VkKSB7XG4gICAgICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZTsgLy8vXG5cbiAgICAgICAgbm9kZXMgPSB0aGlzLk5vZGUuZnJvbU5vZGVzKHJ1bGVOb2RlcywgcHJvZHVjdGlvbk5hbWUpO1xuICAgICAgfVxuXG4gICAgICB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgICAgaWYgKCF0b29EZWVwKSB7XG4gICAgICAgIGNvbnRleHQuZGVjcmVhc2VEZXB0aCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZShsaW5lLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSB7XG4gICAgdmFyIG5hbWUgPSBsaW5lLmdldE5hbWUoKSxcbiAgICAgICAgcnVsZXMgPSBsaW5lLm1hcFN5bWJvbFNlcXVlbmNlcyhmdW5jdGlvbihzeW1ib2xTZXF1ZW5jZSkge1xuICAgICAgICAgIHZhciBydWxlID0gUnVsZS5mcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHNpZ25pZmljYW50VG9rZW5UeXBlcyk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSksXG4gICAgICAgIE5vZGUgPSBtYXBwaW5ncy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IG1hcHBpbmdzW25hbWVdIDogTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgcHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcbiJdfQ==